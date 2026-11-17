import { test, expect } from "@playwright/test";
import { products } from "../data/products";
import { productPath } from "../seo/urls";
import { readFile } from "node:fs/promises";

test("every sitemap URL is a built page with unique metadata and valid JSON-LD", async () => {
  const sitemap = await readFile("dist/sitemap.xml", "utf8");
  const paths = [
    ...sitemap.matchAll(/<loc>https:\/\/[^<]+?(\/[^<]*)<\/loc>/g),
  ].map((m) => m[1]);
  expect(paths.length).toBeGreaterThan(products.length);
  const titles = new Set<string>();
  const descriptions = new Set<string>();
  for (const path of paths) {
    const html = await readFile(`dist${path}index.html`, "utf8");
    const title = html.match(/<title>(.*?)<\/title>/)![1];
    expect(titles.has(title), path).toBe(false);
    titles.add(title);
    expect(html).toContain(
      `rel="canonical" href="https://microsoft-hardware-archive.space.fast${path}"`,
    );
    expect(html).toMatch(/<h1[ >]/);
    const description = html.match(
      /<meta name="description" content="([^"]+)"/,
    )![1];
    expect(descriptions.has(description), path).toBe(false);
    descriptions.add(description);
    const schemas = [
      ...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g),
    ].flatMap((match) => JSON.parse(match[1])["@graph"]);
    expect(schemas.length).toBeGreaterThan(0);
    if (path !== "/") {
      const breadcrumbs = schemas.find(
        (schema) => schema["@type"] === "BreadcrumbList",
      );
      expect(breadcrumbs, path).toBeTruthy();
      expect(breadcrumbs.itemListElement.at(-1).item).toBe(
        `https://microsoft-hardware-archive.space.fast${path}`,
      );
    }
  }
  for (const product of products) expect(paths).toContain(productPath(product));
});

test("product discovery and source content work without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("/catalogue/");
  const product = products.find((p) => p.source && p.specs)!;
  await page.getByRole("link", { name: product.name, exact: true }).click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    `${product.name}${product.year === null ? "" : ` (${product.year})`}`,
  );
  await expect(page.getByRole("table")).toContainText(
    Object.values(product.specs!)[0],
  );
  await expect(
    page.getByRole("link", { name: product.source!.title, exact: true }),
  ).toHaveAttribute("href", product.source!.url);
  await page.setViewportSize({ width: 375, height: 812 });
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await context.close();
});

test("homepage contains HTML before rendering and remains interactive", async ({
  page,
  request,
}) => {
  const response = await request.get("/");
  expect(await response.text()).toContain('class="card-title" href="/devices/');
  await page.goto("/");
  await expect(page.locator(".quick-view").first()).toBeVisible();
  await page.locator(".quick-view").first().click();
  await expect(page.getByRole("dialog")).toBeVisible();
  expect((await request.get("/missing-product/")).status()).toBe(404);
  expect(await (await request.get("/404.html")).text()).toContain(
    "noindex,follow",
  );
  expect(await (await request.get("/robots.txt")).text()).toContain(
    "/sitemap.xml",
  );
});

test("homepage cards have descriptive heading links and images without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("/");
  await expect(
    page.getByRole("link", { name: "Hardware Archive home" }),
  ).toHaveAttribute("href", "/");
  await expect(page.locator(".archive-strip")).toContainText(
    "product categories",
  );
  const cards = page.locator("article.product-card");
  await expect(cards).toHaveCount(24);
  for (const card of await cards.all()) {
    const link = card.locator("h3 a");
    const name = await link.innerText();
    const product = products.find((product) => product.name === name.trim())!;
    expect(product).toBeTruthy();
    await expect(link).toHaveAttribute("href", productPath(product));
    if (product.imageUrl) {
      const image = card.getByRole("img", { name: product.name, exact: true });
      await expect(image).toHaveAttribute("src", product.imageUrl);
      await expect(image).toHaveAttribute("width", "800");
      await expect(image).toHaveAttribute("height", "650");
    }
  }
  const firstLink = cards.first().locator("h3 a");
  const name = await firstLink.innerText();
  await firstLink.click();
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    name.trim(),
  );
  await context.close();
});

test("static pagination exposes every device without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  const found = new Set<string>();
  for (let number = 1; number <= Math.ceil(products.length / 24); number++) {
    await page.goto(number === 1 ? "/" : `/browse/page/${number}/`);
    for (const href of await page
      .locator("article.product-card h3 a")
      .evaluateAll((links) => links.map((link) => link.getAttribute("href")!)))
      found.add(href);
    await expect(
      page.getByRole("link", { name: `Page ${number}`, exact: true }),
    ).toHaveAttribute("aria-current", "page");
  }
  expect([...found].sort()).toEqual(products.map(productPath).sort());
  await context.close();
});

test("Markdown exports preserve every record and expose provenance without fabricated dates", async ({
  request,
}) => {
  const guide = await request.get("/llms.txt");
  expect(guide.status()).toBe(200);
  expect(await guide.text()).toContain("/llms-full.txt");
  const full = await (await request.get("/llms-full.txt")).text();
  for (const product of products) {
    const path = productPath(product).replace(/\/$/, ".md");
    const record = await request.get(path);
    expect(record.status(), path).toBe(200);
    const text = await record.text();
    expect(full).toContain(text);
    expect(text).toContain(productPath(product));
    if (product.source) expect(text).toContain(product.source.url);
    if (product.researchedAt) expect(text).toContain(product.researchedAt);
    else expect(text).toContain("Research date: Not recorded");
  }
  const home = await (await request.get("/")).text();
  expect(home).toContain('rel="llms-txt"');
  const graph = JSON.parse(
    home.match(/<script type="application\/ld\+json">(.*?)<\/script>/)![1],
  )["@graph"];
  expect(
    graph.find((node: any) => node["@type"] === "Dataset").distribution[0]
      .contentUrl,
  ).toContain("/llms-full.txt");
});

test("entry citations copy exact text and family arrow navigation respects controls", async ({
  page,
  context,
}) => {
  const product = products.find((p) => p.id === 162) || products[0];
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto(productPath(product));
  for (const anchor of [
    "overview",
    "specifications",
    "diagrams",
    "sources",
    "citation",
  ])
    await expect(page.locator(`#${anchor}`)).toHaveCount(1);
  await page.getByRole("button", { name: "Copy Markdown citation" }).click();
  await expect(page.getByRole("status")).toContainText("Citation copied.");
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
    await page.locator("#citation-markdown").innerText(),
  );
  await page.getByText("BibTeX citation", { exact: true }).click();
  await page.getByRole("button", { name: "Copy BibTeX citation" }).click();
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
    await page.locator("#citation-bibtex").innerText(),
  );
  const before = page.url();
  await page.keyboard.press("ArrowRight");
  await expect(page).toHaveURL(before);
  const next = page.locator('.family-navigation a[rel="next"]');
  const href = await next.getAttribute("href");
  await page.locator("body").click({ position: { x: 2, y: 2 } });
  await page.keyboard.press("ArrowRight");
  await expect(page).toHaveURL(
    new RegExp(href!.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "$"),
  );
});

test("complete JSON export is public and release schema uses only verified exact dates", async ({
  request,
}) => {
  const response = await request.get("/catalogue.json");
  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("application/json");
  const data = await response.json();
  expect(data.recordCount).toBe(products.length);
  expect(data.records.map((p: { id: number }) => p.id)).toEqual(
    products.map((p) => p.id),
  );
  for (const product of products) {
    const record = data.records.find(
      (p: { id: number }) => p.id === product.id,
    );
    expect(record.url).toBe(
      `https://microsoft-hardware-archive.space.fast${productPath(product)}`,
    );
    expect(record.gallery).toEqual(product.gallery);
    const html = await readFile(
      `dist${productPath(product)}index.html`,
      "utf8",
    );
    const graph = JSON.parse(
      html.match(/<script type="application\/ld\+json">(.*?)<\/script>/)![1],
    )["@graph"];
    const schema = graph.find((p: any) => p["@type"] === "WebPage").mainEntity;
    expect(schema["@type"]).toBe("Product");
    if (product.launchDate) expect(schema.releaseDate).toBe(product.launchDate);
    else expect(schema).not.toHaveProperty("releaseDate");
  }
});

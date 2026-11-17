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
  for (const path of paths) {
    const html = await readFile(`dist${path}index.html`, "utf8");
    const title = html.match(/<title>(.*?)<\/title>/)![1];
    expect(titles.has(title), path).toBe(false);
    titles.add(title);
    expect(html).toContain(
      `rel="canonical" href="https://microsoft-hardware-archive.space.fast${path}"`,
    );
    expect(html).toMatch(/<h1[ >]/);
    expect(html).toMatch(/<meta name="description" content="[^"]+"/);
    for (const match of html.matchAll(
      /<script type="application\/ld\+json">(.*?)<\/script>/g,
    ))
      expect(JSON.parse(match[1])["@graph"].length).toBeGreaterThan(0);
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
    product.name,
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
  expect(await response.text()).toContain("Full specifications &amp; history");
  await page.goto("/");
  await expect(page.locator(".card-title").first()).toBeVisible();
  await page.locator(".card-title").first().click();
  await expect(page.getByRole("dialog")).toBeVisible();
  expect((await request.get("/missing-product/")).status()).toBe(404);
  expect(await (await request.get("/404.html")).text()).toContain(
    "noindex,follow",
  );
  expect(await (await request.get("/robots.txt")).text()).toContain(
    "/sitemap.xml",
  );
});

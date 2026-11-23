import { test, expect } from "@playwright/test";
import { existsSync, readFileSync } from "node:fs";
import { products, categories } from "../data/products";
import { inventory } from "../data/inventory";
import { catalogueProducts } from "../data/catalogue";

test("expanded catalogue has stable identities, provenance, and valid local media", () => {
  expect(products.length).toBeGreaterThanOrEqual(231);
  expect(catalogueProducts).toHaveLength(136);
  expect(new Set(products.map((p) => p.id)).size).toBe(products.length);
  expect(new Set(products.map((p) => p.name.toLowerCase())).size).toBe(
    products.length,
  );
  expect(categories.length - 1).toBeGreaterThanOrEqual(15);
  expect(products.find((p) => p.id === 1)?.name).toBe("Microsoft Mouse");
  expect(products.find((p) => p.id === 24)?.name).toBe(
    "Surface Laptop 13-inch (2nd Edition)",
  );
  expect(products.find((p) => p.id === 26)?.year).toBe(1980);
  expect(products.find((p) => p.id === 161)?.year).toBeNull();
  for (const p of catalogueProducts) {
    expect(p.specs && Object.keys(p.specs).length).toBeGreaterThan(0);
    expect(p.source).toBeTruthy();
    expect(p.researchedAt).toMatch(/^2026-11-(09|17|23)$/);
    expect(p.year === null || (p.year >= 1980 && p.year <= 2026)).toBe(true);
    for (const source of [p.source!, ...(p.additionalSources || [])]) {
      const url = new URL(source.url);
      expect(url.protocol).toBe("https:");
      expect([
        "en.wikipedia.org",
        "www.microsoft.com",
        "news.microsoft.com",
        "blogs.windows.com",
        "support.microsoft.com",
        "learn.microsoft.com",
        "news.xbox.com",
        "github.com",
        "www.incase.com",
        "download.microsoft.com",
      ]).toContain(url.hostname);
      expect(source.title.length).toBeGreaterThan(5);
    }
  }
  expect(
    catalogueProducts.filter((p) => p.source?.kind !== "Wikipedia").length,
  ).toBeGreaterThanOrEqual(100);
  const manifest = JSON.parse(
    readFileSync("data/catalogue-provenance.json", "utf8"),
  );
  expect(manifest.map((p: { id: number }) => p.id)).toEqual(
    products.map((p) => p.id),
  );
  for (const p of products.filter((p) => p.imageUrl)) {
    expect(p.imageUrl!.startsWith("/images/")).toBe(true);
    expect(existsSync(`public${p.imageUrl}`)).toBe(true);
    expect(p.imageCredit).toBeTruthy();
    expect(p.imageSource).toBeTruthy();
  }
});

test("paginated browsing resets on filters and keeps the full collection searchable", async ({
  page,
}) => {
  await page.goto("/");
  await expect(
    page.getByText(`Showing 1–24 of ${products.length} devices`),
  ).toBeVisible();
  await page.getByRole("link", { name: "Page 2", exact: true }).click();
  await expect(page.locator(".product-card")).toHaveCount(24);
  await page
    .getByRole("textbox", { name: "Search devices" })
    .fill("Z-80 SoftCard");
  await expect(page.locator(".product-card")).toHaveCount(1);
  await page.locator(".quick-view").click();
  await expect(page.getByRole("dialog")).toContainText("Zilog Z80");
  await expect(
    page.getByRole("dialog").getByRole("link", { name: /Wikipedia/ }),
  ).toHaveAttribute("href", /Z-80_SoftCard/);
  await page.keyboard.press("Escape");
  await page.getByRole("button", { name: "Clear search" }).click();
  await expect(page.locator(".product-card")).toHaveCount(24);
});

test("Microsoft Store selection exposes sourced accessories and unconfirmed dates honestly", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByRole("checkbox", { name: /Microsoft Store selection/ })
    .check();
  await expect(page.locator(".product-card")).toHaveCount(14);
  await expect(
    page
      .locator(".product-card")
      .filter({ hasText: "Surface Keyboard (2nd Edition)" }),
  ).toContainText("Year unconfirmed");
  await page
    .getByRole("textbox", { name: "Search devices" })
    .fill("Adaptive D-pad");
  await page.locator(".quick-view").click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toContainText("Eight digital inputs");
  await expect(
    dialog.getByRole("link", { name: /Microsoft Store/ }),
  ).toHaveAttribute("href", /microsoft-adaptive-d-pad-button/);
  await page.keyboard.press("Escape");
  await page.getByRole("button", { name: "Reset filters" }).click();
  await expect(
    page.getByRole("checkbox", { name: /Microsoft Store selection/ }),
  ).not.toBeChecked();
});

test("records without a verified photograph remain usable without a misleading image", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("textbox", { name: "Search devices" }).fill("Mach 20");
  await expect(page.getByText("Photo not yet catalogued")).toBeVisible();
  await expect(page.locator(".product-card img")).toHaveCount(0);
  await page.locator(".quick-view").click();
  await expect(page.getByRole("dialog")).toContainText("80286");
  await expect(
    page
      .getByRole("dialog")
      .getByRole("link", { name: /Microsoft/ })
      .first(),
  ).toHaveAttribute("href", /20221226/);
});

test("product lines distinguish Surface generations and separate unrelated input families", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByRole("combobox", { name: "Filter by product line" })
    .selectOption("Surface Laptop Go");
  await expect(page.locator(".product-card")).toHaveCount(3);
  await expect(
    page.locator(".product-card").filter({ hasText: "Surface Laptop Studio" }),
  ).toHaveCount(0);
  await page.getByRole("button", { name: "Reset filters" }).click();
  await page
    .getByRole("combobox", { name: "Filter by product line" })
    .selectOption("Kin");
  await expect(page.locator(".product-card")).toHaveCount(2);
});

test("Surface tabletop lineage is distinct from tablets and Hub", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByRole("combobox", { name: "Filter by product line" })
    .selectOption("Surface Tabletop / PixelSense");
  await expect(page.locator(".product-card")).toHaveCount(2);
  await expect(
    page.locator(".product-card").filter({ hasText: "Samsung SUR40" }),
  ).toHaveCount(1);
  await expect(
    page.locator(".product-card h3").filter({ hasText: /^Surface Hub/ }),
  ).toHaveCount(0);
  await page
    .getByRole("button", {
      name: "Quick view Samsung SUR40 for Microsoft Surface",
      exact: true,
    })
    .click();
  await expect(page.getByRole("dialog")).toContainText("AMD Athlon II X2");
  await expect(
    page.getByRole("dialog").getByRole("link", { name: /now shipping/ }),
  ).toHaveAttribute("href", /2012\/01\/17/);
});

test("complete provenance preserves metadata, missing facts, and actual image bytes", () => {
  const manifest = JSON.parse(
    readFileSync("data/catalogue-provenance.json", "utf8"),
  );
  expect(manifest).toHaveLength(products.length);
  expect(manifest).toEqual(JSON.parse(JSON.stringify(inventory)));
  for (const p of products) {
    const record = manifest.find((item: { id: number }) => item.id === p.id);
    expect(record.name).toBe(p.name);
    for (const key of [
      "category",
      "subcategory",
      "launchDate",
      "msrp",
      "partNumber",
      "connectionType",
      "operatingSystem",
      "predecessor",
      "successor",
      "manufacturer",
      "gallery",
    ]) {
      expect(Object.hasOwn(record, key), `${p.name}: ${key}`).toBe(true);
    }
    expect(record).not.toHaveProperty("image"); // A source webpage is not an image URL.
    expect(record.gallery).toEqual(p.gallery);
    for (const image of p.gallery || []) {
      expect(image.source).toMatch(/^https:\/\//);
      expect(image.credit.length).toBeGreaterThan(0);
      const bytes = readFileSync(`public${image.url}`);
      const isWebp =
        bytes.subarray(0, 4).toString() === "RIFF" &&
        bytes.subarray(8, 12).toString() === "WEBP";
      const isJpeg = bytes
        .subarray(0, 3)
        .equals(Buffer.from([0xff, 0xd8, 0xff]));
      expect(isWebp || isJpeg, image.url).toBe(true);
    }
    for (const id of [p.predecessor, p.successor].filter(Boolean)) {
      expect(
        products.some((other) => other.id === id && other.id !== p.id),
      ).toBe(true);
    }
    if (p.lifecycle) {
      expect(
        record.sources.map((source: { url: string }) => source.url),
      ).toContain(p.lifecycle.source);
      if (p.lifecycle.status === "unreleased") expect(p.launchDate).toBeNull();
    }
    for (const device of p.usbIds ?? [])
      expect(device.id).toMatch(/^[0-9A-F]{4}:[0-9A-F]{4}$/);
    if (p.launchDate) expect(p.launchDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    if (p.id >= 164) {
      expect(record.sources.length).toBeGreaterThan(0);
      expect(p.specs && Object.keys(p.specs).length).toBeGreaterThan(0);
      expect(p.researchedAt).toMatch(/^2026-11-(17|23)$/);
    }
  }
  expect(products.find((p) => p.id === 161)?.launchDate).toBeNull();
  expect(products.find((p) => p.id === 19)?.aliases).toContain(
    "Surface Pro X (SQ1)",
  );
  expect(products.find((p) => p.id === 222)?.name).toBe("Surface Pro X (SQ2)");
  expect(
    products.some((p) =>
      /^Surface (Earbuds 2|Precision Keyboard)$/.test(p.name),
    ),
  ).toBe(false);
});

test("hardware identifiers distinguish variants and can be found in the grid", async ({
  page,
}) => {
  await page.goto("/");
  const search = page.getByRole("textbox", { name: "Search devices" });
  await search.fill("VID_045E&PID_001B");
  await expect(page.locator(".product-card h3")).toHaveText(
    "Microsoft SideWinder Force Feedback 2",
  );
  await search.fill("045E:0034");
  await expect(page.locator(".product-card h3")).toHaveText(
    "Microsoft SideWinder Force Feedback Wheel USB",
  );
  await search.fill("PT3-00001");
  await expect(page.locator(".product-card h3")).toHaveText(
    "Microsoft Wireless Desktop 900",
  );
  await page.locator(".quick-view").click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toContainText("045E:07B2 (2.4 GHz transceiver v8.0)");
  await expect(dialog).toContainText("C3K1461");
});

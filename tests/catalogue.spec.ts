import { test, expect } from "@playwright/test";
import { existsSync, readFileSync } from "node:fs";
import { products, categories } from "../data/products";
import { catalogueProducts } from "../data/catalogue";

test("expanded catalogue has stable identities, provenance, and valid local media", () => {
  expect(products).toHaveLength(161);
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
    expect(p.researchedAt).toBe("2026-11-09");
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
    catalogueProducts.map((p) => p.id),
  );
  for (const p of products.filter((p) => p.imageUrl)) {
    expect(p.imageUrl!.startsWith("/images/")).toBe(true);
    expect(existsSync(`public${p.imageUrl}`)).toBe(true);
    expect(p.imageCredit).toBeTruthy();
    expect(p.imageSource).toBeTruthy();
  }
});

test("progressive browsing resets on filters and keeps the full collection searchable", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.getByText("Showing 24 of 161 devices")).toBeVisible();
  await page.getByRole("button", { name: "Show 24 more devices" }).click();
  await expect(page.locator(".product-card")).toHaveCount(48);
  await page
    .getByRole("textbox", { name: "Search devices" })
    .fill("Z-80 SoftCard");
  await expect(page.locator(".product-card")).toHaveCount(1);
  await page.locator(".card-title").click();
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
  await page.locator(".card-title").click();
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
  await page.getByRole("textbox", { name: "Search devices" }).fill("BallPoint");
  await expect(page.getByText("Photo not yet catalogued")).toBeVisible();
  await expect(page.locator(".product-card img")).toHaveCount(0);
  await page.locator(".card-title").click();
  await expect(page.getByRole("dialog")).toContainText(
    "Clip-on notebook trackball",
  );
  await expect(
    page
      .getByRole("dialog")
      .getByRole("link", { name: /Microsoft/ })
      .first(),
  ).toHaveAttribute("href", /microsoft-1991/);
});

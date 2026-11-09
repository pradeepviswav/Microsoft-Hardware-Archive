import { test, expect } from "@playwright/test";

test("search, family, era and empty-state reset work together", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator(".product-card")).toHaveCount(25);
  await page.getByRole("button", { name: "Xbox 4", exact: true }).click();
  await expect(page.locator(".product-card")).toHaveCount(4);
  await page
    .getByRole("combobox", { name: "Filter by era" })
    .selectOption("2000–2009");
  await expect(page.locator(".product-card")).toHaveCount(2);
  await page
    .getByRole("textbox", { name: "Search devices" })
    .fill("no such device");
  await expect(page.getByText("No devices found.")).toBeVisible();
  await page.getByRole("button", { name: "Explore all devices" }).click();
  await expect(page.locator(".product-card")).toHaveCount(25);
  await page
    .getByRole("combobox", { name: "Sort devices" })
    .selectOption("year-asc");
  await expect(page.locator(".product-card").first()).toContainText(
    "Microsoft Mouse",
  );
});

test("saved collection and theme survive reload", async ({ page }) => {
  await page.goto("/");
  const first = page.locator(".product-card").first();
  const name = await first.locator("h3").innerText();
  await first.getByRole("button", { name: /^Save / }).click();
  await page.getByRole("button", { name: "Switch to dark mode" }).click();
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.getByRole("button", { name: "Saved 1", exact: true }).click();
  await expect(page.locator(".product-card")).toHaveCount(1);
  await expect(page.locator(".product-card")).toContainText(name);
  await page
    .locator(".product-card")
    .getByRole("button", { name: /^Unsave / })
    .click();
  await expect(page.getByText("No devices found.")).toBeVisible();
});

test("comparison requires two, limits to four, and closes by keyboard", async ({
  page,
}) => {
  await page.goto("/");
  const compare = page.locator(".product-card .compare-button");
  await compare.nth(0).click();
  await expect(
    page.getByRole("button", { name: "Select one more" }),
  ).toBeDisabled();
  for (let i = 1; i < 5; i++) await compare.nth(i).click();
  await expect(page.getByText("4 / 4 selected")).toBeVisible();
  await expect(
    page.getByText("Your comparison is full.", { exact: false }),
  ).toBeVisible();
  await page
    .getByRole("button", { name: "Compare devices", exact: true })
    .click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(page.getByRole("columnheader")).toHaveCount(5);
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await expect(
    page.getByRole("button", { name: "Compare devices", exact: true }),
  ).toBeFocused();
});

test("product detail has source, focus trap, Escape, and focus restoration", async ({
  page,
}) => {
  await page.goto("/");
  const trigger = page
    .locator(".card-title")
    .filter({ hasText: "Surface Pro 12-inch" });
  await trigger.click();
  const dialog = page.getByRole("dialog");
  await expect(
    dialog.getByRole("link", { name: /Microsoft Devices Blog/ }),
  ).toHaveAttribute("href", /2026\/09\/23/);
  await dialog.getByRole("button", { name: "Close dialog" }).focus();
  await page.keyboard.press("Shift+Tab");
  await expect(
    dialog.getByRole("link", { name: "Original image source" }),
  ).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(
    dialog.getByRole("button", { name: "Close dialog" }),
  ).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(trigger).toBeFocused();
  await page.keyboard.press("/");
  await expect(
    page.getByRole("textbox", { name: "Search devices" }),
  ).toBeFocused();
});

test("all local product images load, and failed images have a usable fallback", async ({
  page,
}) => {
  await page.goto("/");
  const images = page.locator(".product-card img");
  for (const img of await images.all()) {
    await img.scrollIntoViewIfNeeded();
    await expect
      .poll(() => img.evaluate((el: HTMLImageElement) => el.naturalWidth))
      .toBeGreaterThan(0);
  }
  await page.route("**/images/legacy-1.webp", (route) => route.abort());
  await page.reload();
  await page.getByRole("textbox", { name: "Search devices" }).fill("1983");
  await expect(page.getByText("Image unavailable")).toBeVisible();
  await page
    .getByRole("button", { name: "View Microsoft Mouse", exact: true })
    .click();
  await expect(page.getByRole("dialog")).toBeVisible();
});

test("mobile grid, list, dark mode and comparison have no page overflow", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const fits = async () =>
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
  await fits();
  await page.getByRole("button", { name: "List view" }).click();
  await fits();
  await page.getByRole("button", { name: "Switch to dark mode" }).click();
  await page.locator(".compare-button").nth(0).click();
  await page.locator(".compare-button").nth(1).click();
  await page
    .getByRole("button", { name: "Compare devices", exact: true })
    .click();
  await fits();
  await page.keyboard.press("Escape");
  await page.getByRole("button", { name: "Grid view" }).click();
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({
    path: "test-results/mobile-dark.png",
    fullPage: false,
  });
});

test("corrupt saved data and unavailable storage do not break the app", async ({
  page,
}) => {
  await page.addInitScript(() => {
    localStorage.setItem("archive-saved", "{bad json");
    localStorage.setItem("archive-theme", '"invalid"');
  });
  await page.goto("/");
  await expect(page.locator(".product-card")).toHaveCount(25);
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.addInitScript(() => {
    Storage.prototype.getItem = () => {
      throw Error("Storage blocked");
    };
    Storage.prototype.setItem = () => {
      throw Error("Storage blocked");
    };
  });
  await page.reload();
  await expect(page.locator(".product-card")).toHaveCount(25);
});

import { test, expect } from "@playwright/test";
import { products } from "../data/products";

test("corridor supports keyboard travel, decade jumps, undated records and grid fallback", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Time Corridor", exact: true }).click();
  await expect(page).toHaveURL(/\/corridor\/$/);
  const stage = page.getByRole("region", { name: "Time corridor stage" });
  const year = page.getByRole("slider", { name: "Timeline year" });
  await expect(
    page
      .getByRole("navigation", { name: "Main navigation" })
      .getByRole("link", { name: "Time Corridor", exact: true }),
  ).toHaveAttribute("aria-current", "page");
  await expect(year).toHaveAttribute("aria-orientation", "vertical");
  const focus = page.getByRole("complementary", { name: "In-focus device" });
  await expect(
    focus.getByRole("heading", { name: "Surface Book", exact: true }),
  ).toBeVisible();

  await stage.focus();
  await page.keyboard.press("ArrowUp");
  await expect(year).toHaveValue("2014");
  await page.keyboard.press("ArrowRight");
  await expect(
    page.getByRole("button", { name: "Mobile", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");

  const eighties = products.filter(
    (p) => p.year !== null && p.year >= 1980 && p.year < 1990,
  ).length;
  await page
    .getByRole("button", { name: `1980s, ${eighties} devices` })
    .click();
  await expect(year).toHaveValue("1987");
  const rail = (await year.boundingBox())!;
  await page.mouse.move(rail.x + rail.width / 2, rail.y + 7);
  await page.mouse.down();
  await page.mouse.move(rail.x + rail.width / 2, rail.y + rail.height - 1, {
    steps: 6,
  });
  await page.mouse.up();
  await expect(year).toHaveValue((await year.getAttribute("min")) as string);
  await page
    .getByRole("button", { name: "Unconfirmed years", exact: true })
    .click();
  await expect(year).toHaveAttribute("aria-valuetext", "Unconfirmed years");
  await expect(
    page.getByRole("button", { name: "Go to an earlier year" }),
  ).toBeDisabled();

  const search = page.getByRole("searchbox", {
    name: "Search corridor devices",
  });
  await search.fill("serial mouse");
  await page.getByRole("button", { name: /Microsoft Serial Mouse/ }).click();
  await expect(
    focus.getByRole("heading", { name: "Microsoft Serial Mouse" }),
  ).toBeVisible();
  await expect(
    stage.getByText("Year unconfirmed · Photo not yet catalogued").first(),
  ).toBeVisible();

  await page.getByRole("link", { name: "Collection", exact: true }).click();
  await expect(page).toHaveURL(/\/#collection$/);
  await expect(page.locator(".product-card")).toHaveCount(24);
});

test("fly-in shows archive media, navigates a family thread and returns focus", async ({
  page,
}) => {
  await page.goto("/corridor/");
  const launch = page.getByRole("button", { name: /Fly in/ });
  await launch.click();
  const dialog = page.getByRole("dialog");
  await expect(
    dialog.getByRole("img", { name: "Surface Book", exact: true }),
  ).toBeVisible();
  await dialog.getByRole("button", { name: "Dynamic fulcrum hinge" }).click();
  await expect(
    dialog.getByText(/The hinge connects the detachable display/),
  ).toBeVisible();
  const angle = dialog.getByRole("slider", { name: "Photo angle" });
  await angle.focus();
  await page.keyboard.press("ArrowRight");
  await expect(angle).toHaveValue("1");
  await dialog.getByRole("button", { name: /2017 Surface Book 2/ }).click();
  await expect(
    dialog.getByRole("heading", { name: "Surface Book 2", exact: true }),
  ).toBeFocused();
  await expect(
    dialog.getByRole("link", { name: /Specs and history/ }),
  ).toHaveAttribute("href", /\/devices\/surface-book-2-/);
  await page.keyboard.press("Escape");
  await expect(dialog).toHaveCount(0);
  await expect(launch).toBeFocused();

  await page.getByRole("button", { name: "Family tree" }).click();
  const family = page.getByRole("region", { name: "Family tree" });
  await expect(family.getByLabel("Product family")).toHaveValue("Surface Book");
  await expect(family.getByRole("listitem")).toHaveCount(3);
});

test("mobile shows one lane and swiping up travels to an earlier year", async ({
  browser,
}) => {
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    hasTouch: true,
    isMobile: true,
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  await page.goto("/corridor/");
  const stage = page.getByRole("region", { name: "Time corridor stage" });
  await expect(
    stage.getByRole("button", { name: /Surface Book, 2015, Compute/ }),
  ).toBeVisible();
  await expect(
    stage.getByRole("button", { name: /Microsoft Band 2, 2015, Mobile/ }),
  ).toHaveCount(0);
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(
    390,
  );

  const focusBox = (await page
    .getByRole("complementary", { name: "In-focus device" })
    .boundingBox())!;
  const railBox = (await page
    .getByRole("slider", { name: "Timeline year" })
    .boundingBox())!;
  expect(focusBox.x).toBeLessThan(24);
  expect(railBox.x + railBox.width).toBeLessThan(391);
  expect(railBox.x).toBeGreaterThan(340);
  const nextYear = (await page
    .getByRole("button", { name: "Go to a later year" })
    .boundingBox())!;
  expect(nextYear.x + nextYear.width).toBeLessThan(390);
  const box = (await stage.boundingBox())!;
  const touch = await context.newCDPSession(page);
  expect(box.width).toBe(390);
  expect(box.y + box.height).toBe(844);
  const x = Math.round(box.x + box.width * 0.4);
  const y = Math.round(box.y + box.height * 0.7);
  await touch.send("Input.dispatchTouchEvent", {
    type: "touchStart",
    touchPoints: [{ x, y }],
  });
  await touch.send("Input.dispatchTouchEvent", {
    type: "touchMove",
    touchPoints: [{ x, y: y - 60 }],
  });
  await touch.send("Input.dispatchTouchEvent", {
    type: "touchEnd",
    touchPoints: [],
  });
  await expect(page.getByRole("slider", { name: "Timeline year" })).toHaveValue(
    "2014",
  );
  await expect(
    page
      .getByRole("complementary", { name: "In-focus device" })
      .getByRole("heading", { name: "Surface Pro 3", exact: true }),
  ).toBeVisible();
  await context.close();
});

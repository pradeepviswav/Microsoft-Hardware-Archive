import { test, expect } from "@playwright/test";

test("filters and pages survive reload, URL sharing and browser history", async ({
  page,
}) => {
  await page.goto("/");
  const firstName = await page.locator(".product-card h3").first().innerText();
  await page.getByRole("link", { name: "Page 2", exact: true }).click();
  await expect(page).toHaveURL(/\/browse\/page\/2\/#collection$/);
  const secondName = await page.locator(".product-card h3").first().innerText();
  expect(secondName).not.toBe(firstName);
  await page.reload();
  await expect(page.locator(".product-card h3").first()).toHaveText(secondName);
  await page.goBack();
  await expect(page.locator(".product-card h3").first()).toHaveText(firstName);
  await page.goForward();
  await expect(page.locator(".product-card h3").first()).toHaveText(secondName);
  await page
    .getByRole("combobox", { name: "Filter by product line" })
    .selectOption("IntelliMouse");
  await expect(page).toHaveURL(/family=intellimouse/);
  await expect(
    page.getByRole("link", { name: "Page 1", exact: true }),
  ).toHaveAttribute("aria-current", "page");
  await page
    .getByRole("combobox", { name: "Filter by era" })
    .selectOption("2000–2009");
  await expect(page).toHaveURL(/decade=2000s/);
  await page.getByRole("checkbox", { name: "Has support diagram" }).check();
  await expect(page).toHaveURL(/diagram=1/);
  await page.reload();
  await expect(
    page.getByRole("checkbox", { name: "Has support diagram" }),
  ).toBeChecked();
  await expect(
    page.getByRole("combobox", { name: "Filter by era" }),
  ).toHaveValue("2000–2009");
  await expect(
    page.getByRole("combobox", { name: "Filter by product line" }),
  ).toHaveValue("IntelliMouse");
  await page.goBack();
  await expect(
    page.getByRole("checkbox", { name: "Has support diagram" }),
  ).not.toBeChecked();
});

test("spec table supports sorting and comparison; Escape clears search and facets", async ({
  page,
}) => {
  await page.goto("/?category=surface&view=table&sort=year-asc");
  await expect(page.getByRole("table")).toContainText("Interface / CPU");
  await page.getByRole("button", { name: "Device: sort A–Z" }).click();
  await expect(page).toHaveURL(/sort=name-asc/);
  await page
    .getByRole("table")
    .getByRole("button", { name: /^Compare / })
    .first()
    .click();
  await expect(page.getByText("1 / 3 selected")).toBeVisible();
  await page
    .getByRole("textbox", { name: "Search devices" })
    .fill("does not exist");
  await expect(page.getByText("No devices found.")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(
    page.getByRole("textbox", { name: "Search devices" }),
  ).toHaveValue("");
  await expect(page.getByRole("table").getByRole("row")).toHaveCount(25);
  await expect(page).not.toHaveURL(/category=|q=/);
});

test("invalid URL state is safe and out-of-range pages are clamped", async ({
  page,
}) => {
  await page.goto(
    "/?family=unknown&category=bad&decade=oops&view=wat&page=9999",
  );
  await expect(page.locator(".product-card")).toHaveCount(19);
  await expect(
    page.getByRole("link", { name: "Page 7", exact: true }),
  ).toHaveAttribute("aria-current", "page");
  await expect(page).toHaveURL(/\/browse\/page\/7\//);
});

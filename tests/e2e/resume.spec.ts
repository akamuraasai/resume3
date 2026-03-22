import { expect, test } from "@playwright/test";

test.describe("redirects", () => {
  test("root redirects to /tech/en", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveURL("/tech/en");
  });
});

test.describe("resume pages", () => {
  const locales = ["en", "pt", "es"];

  for (const locale of locales) {
    test(`/tech/${locale} renders with candidate name`, async ({ page }) => {
      await page.goto(`/tech/${locale}`);
      await expect(page.locator("body")).toContainText("Jonathan Cruz");
    });
  }

  test("page contains navigation links", async ({ page }) => {
    await page.goto("/tech/en");
    const nav = page.locator("nav");
    await expect(nav).toBeVisible();
  });

  test("page contains section headings", async ({ page }) => {
    await page.goto("/tech/en");
    await expect(page.locator("body")).toContainText("Profile");
    await expect(page.locator("body")).toContainText("Professional Experience");
    await expect(page.locator("body")).toContainText("Core Skills");
    await expect(page.locator("body")).toContainText("Education");
  });
});

test.describe("language selector", () => {
  test("shows links to other locales", async ({ page }) => {
    await page.goto("/tech/en");
    const ptLink = page.locator('a[href="/tech/pt"]');
    const esLink = page.locator('a[href="/tech/es"]');
    await expect(ptLink).toBeVisible();
    await expect(esLink).toBeVisible();
  });

  test("navigates to another locale", async ({ page }) => {
    await page.goto("/tech/en");
    await page.locator('a[href="/tech/pt"]').click();
    await expect(page).toHaveURL("/tech/pt");
    await expect(page.locator("body")).toContainText("Jonathan Cruz");
  });
});

test.describe("404 pages", () => {
  test("invalid locale returns 404", async ({ request }) => {
    const response = await request.get("/tech/invalid");
    expect(response.status()).toBe(404);
    expect(await response.text()).toContain("404");
  });

  test("invalid version returns 404", async ({ request }) => {
    const response = await request.get("/invalid/en");
    expect(response.status()).toBe(404);
  });
});

test.describe("static files", () => {
  test("PDF file is served with correct content type", async ({ request }) => {
    const response = await request.get("/resumes/tech/en.pdf");
    expect(response.status()).toBe(200);
    const contentType = response.headers()["content-type"];
    expect(contentType).toContain("application/pdf");
  });

  test("missing static file returns 404", async ({ request }) => {
    const response = await request.get("/resumes/tech/nonexistent.pdf");
    expect(response.status()).toBe(404);
  });
});

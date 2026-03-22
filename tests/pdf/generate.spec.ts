import { test } from "@playwright/test";

const locales = ["en", "pt", "es", "fr", "it", "de", "ru", "ja", "zh", "ko"];

for (const locale of locales) {
  test(`generate PDF for ${locale}`, async ({ page }) => {
    await page.goto(`/tech/${locale}`, { waitUntil: "networkidle" });
    await page.pdf({
      path: `resumes/tech/${locale}.pdf`,
      format: "A4",
      landscape: false,
      scale: 0.6,
      margin: { top: "8mm", right: "0mm", bottom: "0mm", left: "0mm" },
      printBackground: true,
      displayHeaderFooter: false,
    });
  });
}

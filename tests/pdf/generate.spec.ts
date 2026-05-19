import { test } from "@playwright/test";

const versions = [
  { name: "tech", scale: 0.6 },
  { name: "fintech", scale: 0.54 },
];
const locales = ["en", "pt", "es", "fr", "it", "de", "ru", "ja", "zh", "ko"];

for (const { name: version, scale } of versions) {
  for (const locale of locales) {
    test(`generate PDF for ${version}/${locale}`, async ({ page }) => {
      await page.goto(`/${version}/${locale}`, { waitUntil: "networkidle" });
      await page.pdf({
        path: `resumes/${version}/${locale}.pdf`,
        format: "A4",
        landscape: false,
        scale,
        margin: { top: "8mm", right: "0mm", bottom: "0mm", left: "0mm" },
        printBackground: true,
        displayHeaderFooter: false,
      });
    });
  }
}

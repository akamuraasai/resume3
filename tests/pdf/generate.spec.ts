import { test } from "@playwright/test";

const baseLocales = ["en", "pt", "es", "fr", "it", "de", "ru", "ja", "zh", "ko"];

const baseVersions = [
  { name: "tech", scale: 0.6, locales: baseLocales },
  { name: "fintech", scale: 0.54, locales: baseLocales },
];

const targetVersions = [
  { name: "003f0f44-5a9a-4cf3-9453-3b86522afaf4", scale: 0.54, locales: ["en"] },
];

for (const { name: version, scale, locales } of [...baseVersions, ...targetVersions]) {
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

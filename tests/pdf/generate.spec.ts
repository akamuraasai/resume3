import { test } from "@playwright/test";

const baseLocales = ["en", "pt", "es", "fr", "it", "de", "ru", "ja", "zh", "ko"];

const baseVersions = [
  { name: "tech", locales: baseLocales },
  { name: "fintech", locales: baseLocales },
];

const targetVersions = [
  { name: "003f0f44-5a9a-4cf3-9453-3b86522afaf4", locales: ["en"] },
  { name: "84e5558e-291f-4818-88ea-198f571bb156", locales: ["en"] },
  { name: "a7ec5990-b231-4ce1-a055-f98702f44971", locales: ["en"] },
  { name: "e17272fc-c993-410c-8774-de3bedddb726", locales: ["en"] },
  { name: "2e8dc467-ff0f-496b-8c18-3289ac07cc98", locales: ["en"] },
];

// A4 portrait at 96dpi: 794 × 1123 px. Top margin of 8mm ≈ 30 px.
const A4_HEIGHT_PX = 1123;
const A4_WIDTH_PX = 794;
const TOP_MARGIN_PX = 30;
const AVAILABLE_HEIGHT_PX = A4_HEIGHT_PX - TOP_MARGIN_PX;
const SAFETY = 0.98; // 2% headroom against sub-pixel rounding
const MIN_SCALE = 0.55; // never go below — readability floor
const MAX_SCALE = 0.85;

for (const { name: version, locales } of [...baseVersions, ...targetVersions]) {
  for (const locale of locales) {
    test(`generate PDF for ${version}/${locale}`, async ({ page }) => {
      await page.setViewportSize({ width: A4_WIDTH_PX, height: A4_HEIGHT_PX });
      await page.goto(`/${version}/${locale}`, { waitUntil: "networkidle" });
      await page.emulateMedia({ media: "print" });

      const measurements = await page.evaluate(() => {
        const main = document.querySelector(".print-container");
        const breakAfter = main?.querySelector(".print-break-after");
        const keepTogether = main?.querySelector(".print-keep-together");
        if (!main || !breakAfter) return null;

        const mainRect = main.getBoundingClientRect();
        const baRect = breakAfter.getBoundingClientRect();
        // bucket2 = everything between the forced break after first exp and the grid
        // (grid floats and uses break-inside: avoid, so we don't constrain on it)
        const grid = keepTogether?.getBoundingClientRect();
        const bucket1 = baRect.bottom - mainRect.top;
        const bucket2 = grid ? grid.top - baRect.bottom : mainRect.bottom - baRect.bottom;
        return { bucket1, bucket2 };
      });

      let scale = 0.65;
      if (measurements) {
        const maxBucket = Math.max(measurements.bucket1, measurements.bucket2);
        const computed = (AVAILABLE_HEIGHT_PX * SAFETY) / maxBucket;
        scale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, Math.floor(computed * 100) / 100));
        console.log(
          `[${version}/${locale}] buckets=${measurements.bucket1.toFixed(0)}/${measurements.bucket2.toFixed(0)} px → scale=${scale}`,
        );
      }

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

#!/usr/bin/env bun
import path from "node:path";
import { chromium } from "@playwright/test";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

const uuid = process.argv[2];
if (!uuid) {
  console.error("Usage: bun scripts/generate-cover-letter.ts <uuid>");
  process.exit(1);
}

const root = path.join(import.meta.dirname, "..");
const mdPath = path.join(root, ".cover-letters", `${uuid}.md`);
const pdfPath = path.join(root, ".cover-letters", `${uuid}.pdf`);

const markdown = await Bun.file(mdPath).text();

const htmlBody = String(
  await unified().use(remarkParse).use(remarkRehype).use(rehypeStringify).process(markdown),
);

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Cover Letter</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,200..600;1,6..72,200..600&display=swap" rel="stylesheet" />
  <style>
    @page { size: A4; margin: 18mm 22mm; }
    html, body { background: #ffffff; color: #2b3437; }
    body {
      font-family: 'Newsreader', Georgia, serif;
      font-size: 11.5pt;
      line-height: 1.55;
      max-width: 100%;
    }
    p { margin: 0 0 0.85em 0; text-align: justify; }
    p:last-of-type { margin-bottom: 0; }
    a { color: #4a5459; text-decoration: none; border-bottom: 1px solid #cbd6dc; }
    em { color: #586064; }
    strong { color: #2b3437; }
    .signature { margin-top: 1.6em; font-family: 'Newsreader', Georgia, serif; }
    .contact-line {
      margin-top: 0.4em;
      font-family: 'Inter', sans-serif;
      font-size: 9.5pt;
      color: #586064;
      letter-spacing: 0.01em;
    }
  </style>
</head>
<body>
${htmlBody}
</body>
</html>`;

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setContent(html, { waitUntil: "networkidle" });
await page.emulateMedia({ media: "print" });
await page.pdf({
  path: pdfPath,
  format: "A4",
  printBackground: true,
  margin: { top: "18mm", right: "22mm", bottom: "18mm", left: "22mm" },
});
await browser.close();

console.log(`✓ Wrote ${path.relative(root, pdfPath)}`);

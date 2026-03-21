#!/usr/bin/env bun
import { existsSync } from "fs";
import { rm } from "fs/promises";
import path from "path";
import { buildResumes } from "./src/lib/ssg";

const outdir = path.join(process.cwd(), "dist");

if (existsSync(outdir)) {
  await rm(outdir, { recursive: true, force: true });
}

console.log("\n📝 Building resume pages from markdown...\n");
const start = performance.now();
const results = await buildResumes(outdir);
const buildTime = (performance.now() - start).toFixed(2);
console.log(`\n✅ Built ${results.length} resume page(s) in ${buildTime}ms\n`);

// Copy PDF files to dist
console.log("📄 Copying PDF files...\n");
let pdfCount = 0;
const pdfGlob = new Bun.Glob("**/*.pdf");
for await (const pdfPath of pdfGlob.scan("resumes")) {
  const src = path.join("resumes", pdfPath);
  const dest = path.join(outdir, "resumes", pdfPath);
  await Bun.write(dest, Bun.file(src));
  console.log(`  Copied: resumes/${pdfPath} -> ${path.relative(process.cwd(), dest)}`);
  pdfCount++;
}
console.log(`\n✅ Copied ${pdfCount} PDF file(s)\n`);

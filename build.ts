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

// Copy static assets (PDFs, images) to dist
console.log("📄 Copying static assets...\n");
let assetCount = 0;
const assetGlob = new Bun.Glob("**/*.{pdf,jpg,jpeg,png,webp}");
for await (const assetPath of assetGlob.scan("resumes")) {
  const src = path.join("resumes", assetPath);
  const dest = path.join(outdir, "resumes", assetPath);
  await Bun.write(dest, Bun.file(src));
  console.log(`  Copied: resumes/${assetPath} -> ${path.relative(process.cwd(), dest)}`);
  assetCount++;
}
console.log(`\n✅ Copied ${assetCount} static asset(s)\n`);

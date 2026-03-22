import { afterEach, describe, expect, test } from "bun:test";
import { existsSync } from "node:fs";
import { rm } from "node:fs/promises";
import path from "node:path";
import { buildResumes } from "../../src/lib/ssg";

const TEST_OUTDIR = path.join(import.meta.dir, "../../.test-dist");

afterEach(async () => {
  if (existsSync(TEST_OUTDIR)) {
    await rm(TEST_OUTDIR, { recursive: true });
  }
});

describe("buildResumes", () => {
  test("generates HTML files for all locales", async () => {
    const results = await buildResumes(TEST_OUTDIR);

    expect(results.length).toBeGreaterThanOrEqual(3);

    const locales = results.map((r) => r.locale).sort();
    expect(locales).toContain("en");
    expect(locales).toContain("pt");
    expect(locales).toContain("es");
  });

  test("returns correct BuildResult structure", async () => {
    const results = await buildResumes(TEST_OUTDIR);

    for (const result of results) {
      expect(result.version).toBe("tech");
      expect(result.locale).toBeTruthy();
      expect(result.outputPath).toContain("index.html");
    }
  });

  test("writes valid HTML files to disk", async () => {
    const results = await buildResumes(TEST_OUTDIR);

    for (const result of results) {
      expect(existsSync(result.outputPath)).toBe(true);
      const content = await Bun.file(result.outputPath).text();
      expect(content.startsWith("<!DOCTYPE html>")).toBe(true);
      expect(content).toContain("Jonathan Cruz");
    }
  });

  test("output paths follow {outdir}/{version}/{locale}/index.html pattern", async () => {
    const results = await buildResumes(TEST_OUTDIR);

    for (const result of results) {
      const expected = path.join(TEST_OUTDIR, result.version, result.locale, "index.html");
      expect(result.outputPath).toBe(expected);
    }
  });
});

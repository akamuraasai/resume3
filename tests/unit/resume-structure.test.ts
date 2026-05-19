import { describe, expect, test } from "bun:test";
import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

const resumesDir = path.join(import.meta.dir, "../../resumes");

const versions = readdirSync(resumesDir).filter((name) => statSync(path.join(resumesDir, name)).isDirectory());

describe("resume markdown structure", () => {
  for (const version of versions) {
    const locales = readdirSync(path.join(resumesDir, version)).filter((f) => f.endsWith(".md"));

    for (const locale of locales) {
      const filePath = path.join(resumesDir, version, locale);

      test(`${version}/${locale}: every achievement bullet title contains a pipe`, () => {
        const content = readFileSync(filePath, "utf-8");
        const offenders: { lineNumber: number; line: string }[] = [];

        content.split("\n").forEach((line, i) => {
          // Achievement bullets look like: - **Title | Subtitle** — Description
          // The em-dash distinguishes them from skill/language bullets which use ':'.
          const match = line.match(/^- \*\*(.+?)\*\* —/);
          if (match && !match[1].includes("|")) {
            offenders.push({ lineNumber: i + 1, line: line.trim() });
          }
        });

        const message = offenders.map((o) => `  ${filePath}:${o.lineNumber}\n  ${o.line}`).join("\n\n");

        expect(offenders, `Achievement bullets missing pipe separator:\n${message}`).toEqual([]);
      });
    }
  }
});

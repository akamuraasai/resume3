import path from "node:path";
import { renderResumeFromFile } from "./resume-renderer";

export interface BuildResult {
  version: string;
  locale: string;
  outputPath: string;
}

export async function buildResumes(outdir: string): Promise<BuildResult[]> {
  const results: BuildResult[] = [];
  const glob = new Bun.Glob("**/*.md");

  // First pass: collect available locales per version
  const localesByVersion = new Map<string, string[]>();
  const mdFiles: { mdPath: string; version: string; locale: string }[] = [];

  for await (const mdPath of glob.scan("resumes")) {
    const key = mdPath.replace(/\.md$/, "");
    const [version, locale] = key.split("/");
    if (!version || !locale) {
      console.warn(`  Skipping ${mdPath}: expected resumes/{version}/{locale}.md`);
      continue;
    }
    mdFiles.push({ mdPath, version, locale });
    const existing = localesByVersion.get(version) || [];
    existing.push(locale);
    localesByVersion.set(version, existing);
  }

  // Second pass: render each resume with available locales
  for (const { mdPath, version, locale } of mdFiles) {
    try {
      const availableLocales = localesByVersion.get(version) || [];
      const html = await renderResumeFromFile(path.join("resumes", mdPath), availableLocales);
      const outputPath = path.join(outdir, version, locale, "index.html");

      await Bun.write(outputPath, html);
      results.push({ version, locale, outputPath });
      console.log(`  Built resume: ${version}/${locale} -> ${path.relative(process.cwd(), outputPath)}`);
    } catch (e) {
      console.error(`  Failed to build resume ${version}/${locale}:`, e);
    }
  }

  return results;
}

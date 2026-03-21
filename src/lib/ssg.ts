import path from "path";
import { renderResumeFromFile } from "./resume-renderer";

export interface BuildResult {
  version: string;
  locale: string;
  outputPath: string;
}

export async function buildResumes(outdir: string): Promise<BuildResult[]> {
  const results: BuildResult[] = [];
  const glob = new Bun.Glob("**/*.md");

  for await (const mdPath of glob.scan("resumes")) {
    const key = mdPath.replace(/\.md$/, ""); // "tech/en"
    const [version, locale] = key.split("/");
    if (!version || !locale) {
      console.warn(`  Skipping ${mdPath}: expected resumes/{version}/{locale}.md`);
      continue;
    }

    try {
      const html = await renderResumeFromFile(path.join("resumes", mdPath));
      const outputPath = path.join(outdir, version, locale, "index.html");

      await Bun.write(outputPath, html);
      results.push({ version, locale, outputPath });
      console.log(`  Built resume: ${version}/${locale} -> ${path.relative(process.cwd(), outputPath)}`);
    } catch (e) {
      console.error(`  Failed to build resume ${key}:`, e);
    }
  }

  return results;
}

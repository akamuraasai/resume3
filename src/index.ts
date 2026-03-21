import { serve } from "bun";
import { watch } from "fs";
import { renderResumeFromFile } from "./lib/resume-renderer";

// In-memory cache for rendered resume HTML
const resumeCache = new Map<string, string>();
const localesByVersion = new Map<string, string[]>();

async function loadAllResumes() {
  const glob = new Bun.Glob("**/*.md");

  // First pass: collect locales per version
  const mdFiles: { path: string; version: string; locale: string }[] = [];
  localesByVersion.clear();

  for await (const path of glob.scan("resumes")) {
    const key = path.replace(/\.md$/, "");
    const [version, locale] = key.split("/");
    if (!version || !locale) continue;
    mdFiles.push({ path, version, locale });
    const existing = localesByVersion.get(version) || [];
    existing.push(locale);
    localesByVersion.set(version, existing);
  }

  // Second pass: render with available locales
  for (const { path, version, locale } of mdFiles) {
    const key = `${version}/${locale}`;
    try {
      const availableLocales = localesByVersion.get(version) || [];
      const html = await renderResumeFromFile(`resumes/${path}`, availableLocales);
      resumeCache.set(key, html);
      console.log(`  Loaded resume: ${key}`);
    } catch (e) {
      console.error(`  Failed to load resume ${key}:`, e);
    }
  }
}

await loadAllResumes();

// Watch for .md file changes in dev mode
if (process.env.NODE_ENV !== "production") {
  watch("resumes", { recursive: true }, async (_event, filename) => {
    if (!filename?.endsWith(".md")) return;
    const key = filename.replace(/\.md$/, "");
    const [version] = key.split("/");
    try {
      const availableLocales = localesByVersion.get(version || "") || [];
      const html = await renderResumeFromFile(`resumes/${filename}`, availableLocales);
      resumeCache.set(key, html);
      console.log(`Rebuilt resume: ${key}`);
    } catch (e) {
      console.error(`Failed to rebuild resume ${key}:`, e);
    }
  });
}

const server = serve({
  routes: {
    "/": () => Response.redirect("/tech/en"),

    "/:version/:locale": (req) => {
      const { version, locale } = req.params;
      const key = `${version}/${locale}`;
      const html = resumeCache.get(key);
      if (!html) {
        const available = [...resumeCache.keys()].map((k) => `/${k}`).join(", ");
        return new Response(
          `<!DOCTYPE html>
<html><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Resume Not Found</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap" rel="stylesheet">
<style>body{font-family:'Inter',sans-serif;background:#f8f9fa;color:#2b3437;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0}
.c{text-align:center;max-width:480px;padding:2rem}
h1{font-family:'Newsreader',serif;font-size:4rem;font-weight:200;margin:0 0 .5rem}
p{color:#737c7f;font-size:.75rem;letter-spacing:.15em;text-transform:uppercase}
a{color:#566065;text-decoration:underline;text-underline-offset:4px}</style>
</head><body><div class="c">
<h1>404</h1>
<p>Resume <strong>${version}/${locale}</strong> not found</p>
<p style="margin-top:2rem">Available: ${available || "none"}</p>
</div></body></html>`,
          { status: 404, headers: { "Content-Type": "text/html; charset=utf-8" } }
        );
      }
      return new Response(html, {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    },

    "/resumes/:version/:file": async (req) => {
      const { version, file } = req.params;
      const filePath = `resumes/${version}/${file}`;
      const bunFile = Bun.file(filePath);
      if (!(await bunFile.exists())) {
        return new Response("File not found", { status: 404 });
      }
      return new Response(bunFile);
    },
  },

  development: process.env.NODE_ENV !== "production" && {
    hmr: true,
    console: true,
  },
});

console.log(`Server running at ${server.url}`);

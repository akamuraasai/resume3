Default to using Bun instead of Node.js.

- Use `bun <file>` instead of `node <file>` or `ts-node <file>`
- Use `bun install` instead of `npm install`
- Use `bun run <script>` instead of `npm run <script>`
- Use `Bun.file` over `node:fs` readFile/writeFile
- Use `Bun.serve()` for the server. Don't use `express`.

## Project Architecture

This is an SSG (Static Site Generation) resume engine. There is no client-side JavaScript.

- **Resumes** are markdown files in `resumes/{version}/{locale}.md`
- **Parser** (`src/lib/resume-parser.ts`) transforms MD into typed `ResumeData` using unified/remark
- **Renderer** (`src/lib/resume-renderer.ts`) uses React's `renderToStaticMarkup()` to generate static HTML
- **Components** in `src/components/resume/` are server-only — they run at build time, not in the browser
- **Styling** uses Tailwind CDN with a custom MD3 color palette defined in `ResumeDocument.tsx`
- **SSG build** (`src/lib/ssg.ts`) generates `dist/{version}/{locale}/index.html` from all MD files

## Markdown Conventions

All parsing is **positional** — no language-dependent keywords.

- `## Title {#id}` — section mapped to a React component by ID
- `### Role @ Company` — experience entry (split on ` @ `)
- Italic lines after `###` — 1st = period, 2nd = label
- `**stat | label** — description` — achievement with stat highlight
- `> tags` after a bullet — per-achievement tech badges (`,` separated, `!` prefix = highlighted)
- Skills/Languages: `**Category:** items` bold-label list

## Spacing Rule

Use `flex flex-col gap-X` on parent containers for spacing between sibling sections. Do not use `mb-X` on individual components to create space between siblings.

## Git

- Deploy: push to `main` triggers Vercel auto-build

## Commands

```bash
bun dev        # dev server with watch mode
bun run build  # SSG build to dist/
bun start      # production server
```

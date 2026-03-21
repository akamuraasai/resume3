# resume3

Markdown-based resume engine that renders `.md` files into polished static HTML pages.

## How it works

Resumes are authored as markdown files in `resumes/{version}/{locale}.md`. A Bun-powered engine parses the markdown (frontmatter + positional conventions) and renders React components server-side via `renderToStaticMarkup()`. The output is static HTML with zero client-side JavaScript.

## Quick start

```bash
bun install
bun dev        # dev server with watch mode at http://localhost:3000
bun run build  # SSG build to dist/
```

## Routes

- `/tech/en` — English resume
- `/tech/pt` — Portuguese resume
- `/tech/es` — Spanish resume
- `/` — redirects to `/tech/en`

## Adding a new locale

1. Create `resumes/tech/{locale}.md` following the existing format
2. The engine auto-discovers it and adds it to the language selector

## Adding a new version

1. Create `resumes/{version}/{locale}.md`
2. Routes are auto-generated at `/{version}/{locale}`

## Deploy

Deployed to Vercel. Push to `main` triggers auto-build.

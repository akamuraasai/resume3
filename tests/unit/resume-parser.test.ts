import { describe, expect, test } from "bun:test";
import { parseResume } from "../../src/lib/resume-parser";

const MINIMAL_FRONTMATTER = `---
locale: en
version: tech
name: John Doe
title: Software Engineer
contact:
  email: john@example.com
  github: https://github.com/johndoe
  location: "New York, NY"
---`;

describe("parseResume", () => {
  describe("frontmatter", () => {
    test("parses metadata from YAML frontmatter", async () => {
      const result = await parseResume(`${MINIMAL_FRONTMATTER}\n\n## Profile {#profile}\n\nHello.`);

      expect(result.metadata.name).toBe("John Doe");
      expect(result.metadata.title).toBe("Software Engineer");
      expect(result.metadata.locale).toBe("en");
      expect(result.metadata.version).toBe("tech");
      expect(result.metadata.contact.email).toBe("john@example.com");
      expect(result.metadata.contact.github).toBe("https://github.com/johndoe");
      expect(result.metadata.contact.location).toBe("New York, NY");
    });

    test("returns empty sections for frontmatter-only content", async () => {
      const result = await parseResume(`${MINIMAL_FRONTMATTER}\n`);
      expect(result.sections).toHaveLength(0);
    });
  });

  describe("profile section", () => {
    test("parses profile content from paragraph", async () => {
      const md = `${MINIMAL_FRONTMATTER}

## Profile {#profile}

Experienced engineer with expertise in TypeScript.
`;
      const result = await parseResume(md);

      expect(result.sections).toHaveLength(1);
      const section = result.sections[0];
      expect(section.type).toBe("profile");
      expect(section.title).toBe("Profile");
      if (section.type === "profile") {
        expect(section.content).toBe("Experienced engineer with expertise in TypeScript.");
      }
    });
  });

  describe("experience section", () => {
    test("parses entry with role @ company", async () => {
      const md = `${MINIMAL_FRONTMATTER}

## Experience {#experience}

### Engineer @ Acme Corp
*Jan 2023 — Present · Remote*
*Current Role · San Francisco*

Built things.
`;
      const result = await parseResume(md);
      const section = result.sections[0];
      expect(section.type).toBe("experience");
      if (section.type === "experience") {
        expect(section.entries).toHaveLength(1);
        const entry = section.entries[0];
        expect(entry.role).toBe("Engineer");
        expect(entry.company).toBe("Acme Corp");
        expect(entry.period).toBe("Jan 2023 — Present");
        expect(entry.location).toBe("Remote");
        expect(entry.label).toBe("Current Role");
        expect(entry.sublabel).toBe("San Francisco");
        expect(entry.description).toBe("Built things.");
      }
    });

    test("parses subtitle from italic before first entry", async () => {
      const md = `${MINIMAL_FRONTMATTER}

## Experience {#experience}
*Selected Roles*

### Engineer @ Acme Corp
*2023*
`;
      const result = await parseResume(md);
      const section = result.sections[0];
      if (section.type === "experience") {
        expect(section.subtitle).toBe("Selected Roles");
      }
    });

    test("parses achievements with stat | label format", async () => {
      const md = `${MINIMAL_FRONTMATTER}

## Experience {#experience}

### Engineer @ Acme Corp
*2023*

- **50% | Reduction** — Reduced build times by optimizing webpack config.
- Simple achievement without stats.
`;
      const result = await parseResume(md);
      const section = result.sections[0];
      if (section.type === "experience") {
        const achievements = section.entries[0].achievements;
        expect(achievements).toHaveLength(2);

        expect(achievements[0].stat).toBe("50%");
        expect(achievements[0].statLabel).toBe("Reduction");
        expect(achievements[0].text).toBe("Reduced build times by optimizing webpack config.");

        expect(achievements[1].stat).toBeUndefined();
        expect(achievements[1].text).toBe("Simple achievement without stats.");
      }
    });

    test("parses tags from blockquotes with highlighted prefix", async () => {
      const md = `${MINIMAL_FRONTMATTER}

## Experience {#experience}

### Engineer @ Acme Corp
*2023*

- Built the frontend.

> !React, TypeScript, Node.js
`;
      const result = await parseResume(md);
      const section = result.sections[0];
      if (section.type === "experience") {
        const tags = section.entries[0].achievements[0].tags;
        expect(tags).toHaveLength(3);
        expect(tags[0]).toEqual({ name: "React", highlighted: true });
        expect(tags[1]).toEqual({ name: "TypeScript", highlighted: false });
        expect(tags[2]).toEqual({ name: "Node.js", highlighted: false });
      }
    });

    test("parses multiple entries", async () => {
      const md = `${MINIMAL_FRONTMATTER}

## Experience {#experience}

### Engineer @ Acme
*2023*

### Developer @ Beta
*2022*
`;
      const result = await parseResume(md);
      const section = result.sections[0];
      if (section.type === "experience") {
        expect(section.entries).toHaveLength(2);
        expect(section.entries[0].company).toBe("Acme");
        expect(section.entries[1].company).toBe("Beta");
      }
    });
  });

  describe("skills section", () => {
    test("parses skill categories with bold label", async () => {
      const md = `${MINIMAL_FRONTMATTER}

## Core Skills {#skills}

- **Frontend:** React, TypeScript, Next.js
- **Backend:** NestJS, Node.js, Prisma
`;
      const result = await parseResume(md);
      const section = result.sections[0];
      expect(section.type).toBe("skills");
      if (section.type === "skills") {
        expect(section.categories).toHaveLength(2);
        expect(section.categories[0].name).toBe("Frontend");
        expect(section.categories[0].skills).toContain("React");
        expect(section.categories[1].name).toBe("Backend");
      }
    });
  });

  describe("education section", () => {
    test("parses institution, degree, and period", async () => {
      const md = `${MINIMAL_FRONTMATTER}

## Education {#education}

### MIT
*Computer Science · 2016 — 2020*
`;
      const result = await parseResume(md);
      const section = result.sections[0];
      expect(section.type).toBe("education");
      if (section.type === "education") {
        expect(section.entries).toHaveLength(1);
        expect(section.entries[0].institution).toBe("MIT");
        expect(section.entries[0].degree).toBe("Computer Science · 2016 — 2020");
      }
    });
  });

  describe("languages section", () => {
    test("parses language categories", async () => {
      const md = `${MINIMAL_FRONTMATTER}

## Languages {#languages}

- **Portuguese:** Native
- **English:** B1/B2
`;
      const result = await parseResume(md);
      const section = result.sections[0];
      expect(section.type).toBe("languages");
      if (section.type === "languages") {
        expect(section.categories).toHaveLength(2);
        expect(section.categories[0].name).toBe("Portuguese");
        expect(section.categories[0].skills).toBe("Native");
      }
    });
  });

  describe("generic section", () => {
    test("renders unknown section ID as generic HTML", async () => {
      const md = `${MINIMAL_FRONTMATTER}

## Certifications {#certifications}

Some **bold** text here.
`;
      const result = await parseResume(md);
      const section = result.sections[0];
      expect(section.type).toBe("generic");
      if (section.type === "generic") {
        expect(section.id).toBe("certifications");
        expect(section.htmlContent).toContain("<strong>bold</strong>");
      }
    });
  });

  describe("multiple sections", () => {
    test("parses full resume with all section types", async () => {
      const md = `${MINIMAL_FRONTMATTER}

## Profile {#profile}

Hello.

## Experience {#experience}

### Dev @ Co
*2023*

- Did stuff.

## Core Skills {#skills}

- **Frontend:** React

## Education {#education}

### MIT
*CS*

## Languages {#languages}

- **English:** Native
`;
      const result = await parseResume(md);
      expect(result.sections).toHaveLength(5);
      expect(result.sections.map((s) => s.type)).toEqual(["profile", "experience", "skills", "education", "languages"]);
    });
  });

  describe("heading without ID", () => {
    test("generates ID from heading text", async () => {
      const md = `${MINIMAL_FRONTMATTER}

## My Custom Section

Some content.
`;
      const result = await parseResume(md);
      const section = result.sections[0];
      expect(section.type).toBe("generic");
      if (section.type === "generic") {
        expect(section.id).toBe("my-custom-section");
      }
    });
  });
});

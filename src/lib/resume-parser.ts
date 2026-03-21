import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import { visit } from "unist-util-visit";
import type { Root, Heading, Text, Emphasis, Strong, ListItem, Blockquote, Paragraph, InlineCode, PhrasingContent } from "mdast";
import type {
  ResumeData,
  ResumeMetadata,
  ResumeSection,
  ExperienceSectionData,
  ExperienceEntry,
  Achievement,
  Tag,
  SkillsSectionData,
  SkillCategory,
  EducationSectionData,
  EducationEntry,
  LanguagesSectionData,
  ProfileSectionData,
  GenericSectionData,
} from "./resume-types";

interface RawSection {
  id: string;
  title: string;
  nodes: Root["children"];
}

export async function parseResume(rawContent: string): Promise<ResumeData> {
  const { data, content } = matter(rawContent);
  const metadata = data as ResumeMetadata;

  const tree = unified().use(remarkParse).use(remarkGfm).parse(content);

  const bodyNodes = skipHeaderFallback(tree.children, metadata);
  const rawSections = splitIntoSections(bodyNodes);
  const sections = await Promise.all(
    rawSections.map((s) => parseSection(s))
  );

  return { metadata, sections };
}

function skipHeaderFallback(nodes: Root["children"], metadata: ResumeMetadata): Root["children"] {
  if (!metadata.name) return nodes;

  const firstH2Index = nodes.findIndex(
    (n) => n.type === "heading" && (n as Heading).depth === 2
  );

  if (firstH2Index === -1) return nodes;
  return nodes.slice(firstH2Index);
}

function splitIntoSections(nodes: Root["children"]): RawSection[] {
  const sections: RawSection[] = [];
  let current: RawSection | null = null;

  for (const node of nodes) {
    if (node.type === "heading" && (node as Heading).depth === 2) {
      if (current) sections.push(current);
      const heading = node as Heading;
      const { id, title } = extractHeadingIdAndTitle(heading);
      current = { id, title, nodes: [] };
    } else if (current) {
      current.nodes.push(node);
    }
  }

  if (current) sections.push(current);
  return sections;
}

function extractHeadingIdAndTitle(heading: Heading): { id: string; title: string } {
  const fullText = extractText(heading.children);
  const match = fullText.match(/^(.+?)\s*\{#(\w[\w-]*)\}\s*$/);
  if (match) {
    return { title: match[1].trim(), id: match[2] };
  }
  return { title: fullText, id: fullText.toLowerCase().replace(/\s+/g, "-") };
}

function extractText(nodes: PhrasingContent[]): string {
  return nodes
    .map((n) => {
      if (n.type === "text") return (n as Text).value;
      if ("children" in n) return extractText(n.children as PhrasingContent[]);
      return "";
    })
    .join("");
}

async function parseSection(raw: RawSection): Promise<ResumeSection> {
  switch (raw.id) {
    case "profile":
      return parseProfileSection(raw);
    case "experience":
      return parseExperienceSection(raw);
    case "skills":
      return parseSkillsSection(raw);
    case "languages":
      return parseLanguagesSection(raw);
    case "education":
      return parseEducationSection(raw);
    default:
      return parseGenericSection(raw);
  }
}

function parseProfileSection(raw: RawSection): ProfileSectionData {
  let content = "";
  for (const node of raw.nodes) {
    if (node.type === "paragraph") {
      const text = extractText((node as Paragraph).children);
      content += text;
    }
  }
  return { type: "profile", title: raw.title, content: content.trim() };
}

function parseExperienceSection(raw: RawSection): ExperienceSectionData {
  const entries: ExperienceEntry[] = [];
  let subtitle: string | undefined;

  // Extract subtitle: first italic paragraph before any ### heading
  for (const node of raw.nodes) {
    if (node.type === "heading" && (node as Heading).depth === 3) break;
    if (node.type === "paragraph") {
      const para = node as Paragraph;
      if (para.children.length === 1 && para.children[0].type === "emphasis") {
        subtitle = extractText((para.children[0] as Emphasis).children);
        break;
      }
    }
  }

  // Split nodes at each ### heading
  const entryGroups = splitAtH3(raw.nodes);

  for (const group of entryGroups) {
    const entry = parseExperienceEntry(group);
    if (entry) entries.push(entry);
  }

  return { type: "experience", title: raw.title, subtitle, entries };
}

interface EntryGroup {
  heading: Heading;
  nodes: Root["children"];
}

function splitAtH3(nodes: Root["children"]): EntryGroup[] {
  const groups: EntryGroup[] = [];
  let current: EntryGroup | null = null;

  for (const node of nodes) {
    if (node.type === "heading" && (node as Heading).depth === 3) {
      if (current) groups.push(current);
      current = { heading: node as Heading, nodes: [] };
    } else if (current) {
      current.nodes.push(node);
    }
  }

  if (current) groups.push(current);
  return groups;
}

function parseExperienceEntry(group: EntryGroup): ExperienceEntry | null {
  const headingText = extractText(group.heading.children);
  const atParts = headingText.split(" @ ");
  const role = atParts[0]?.trim() || headingText;
  const company = atParts[1]?.trim() || "";

  let period: string | undefined;
  let location: string | undefined;
  let label: string | undefined;
  let sublabel: string | undefined;
  let description: string | undefined;
  const achievements: Achievement[] = [];
  const tags: Tag[] = [];

  let italicLineCount = 0;

  for (const node of group.nodes) {
    if (node.type === "paragraph") {
      const para = node as Paragraph;
      // Extract all emphasis spans from the paragraph
      // Consecutive italic lines (no blank line between) are merged into one paragraph
      const emphasisChildren = para.children.filter((c) => c.type === "emphasis");
      const nonEmphasisNonWhitespace = para.children.filter(
        (c) => c.type !== "emphasis" && !(c.type === "text" && (c as Text).value.trim() === "")
      );

      if (emphasisChildren.length > 0 && nonEmphasisNonWhitespace.length === 0) {
        // Paragraph consists only of emphasis spans (possibly separated by whitespace)
        for (const emph of emphasisChildren) {
          const italicText = extractText((emph as Emphasis).children);
          italicLineCount++;

          if (italicLineCount === 1) {
            // First italic line: period · location
            const parts = italicText.split(" · ");
            period = parts[0]?.trim();
            if (parts.length > 1) {
              location = parts.slice(1).join(" · ").trim();
            }
          } else if (italicLineCount === 2) {
            // Second italic line: label · sublabel
            const parts = italicText.split(" · ");
            label = parts[0]?.trim();
            if (parts.length > 1) {
              sublabel = parts.slice(1).join(" · ").trim();
            }
          }
        }
      } else {
        // Regular paragraph = description
        description = extractText(para.children);
      }
    } else if (node.type === "list") {
      // Parse achievement bullets
      for (const item of (node as any).children as ListItem[]) {
        const achievement = parseAchievement(item);
        if (achievement) achievements.push(achievement);
      }
    } else if (node.type === "blockquote") {
      // Parse tags — associate with the most recent achievement
      const parsedTags = parseBlockquoteTags(node as Blockquote);
      if (achievements.length > 0) {
        achievements[achievements.length - 1].tags.push(...parsedTags);
      }
    }
  }

  return { role, company, period, location, label, sublabel, description, achievements };
}

function parseAchievement(item: ListItem): Achievement | null {
  const para = item.children[0];
  if (!para || para.type !== "paragraph") return null;

  const fullText = extractText((para as Paragraph).children);

  // Try to extract **STAT | LABEL** — text
  const children = (para as Paragraph).children;
  let stat: string | undefined;
  let statLabel: string | undefined;
  let text = fullText;

  // Look for a strong element at the start
  if (children.length > 0 && children[0].type === "strong") {
    const strongText = extractText((children[0] as Strong).children);
    const pipeMatch = strongText.match(/^(.+?)\s*\|\s*(.+)$/);
    if (pipeMatch) {
      stat = pipeMatch[1].trim();
      statLabel = pipeMatch[2].trim();
      // The rest after the strong + " — " is the description text
      const afterStrong = extractText(children.slice(1) as PhrasingContent[]);
      const dashMatch = afterStrong.match(/^\s*—\s*(.+)$/);
      text = dashMatch ? dashMatch[1].trim() : afterStrong.trim();
    }
  }

  return { stat, statLabel, text, tags: [] };
}

function parseBlockquoteTags(bq: Blockquote): Tag[] {
  const tags: Tag[] = [];
  for (const child of bq.children) {
    if (child.type === "paragraph") {
      const text = extractText((child as Paragraph).children);
      const tagNames = text.split(",").map((t) => t.trim()).filter(Boolean);
      for (const tagName of tagNames) {
        if (tagName.startsWith("!")) {
          tags.push({ name: tagName.slice(1), highlighted: true });
        } else {
          tags.push({ name: tagName, highlighted: false });
        }
      }
    }
  }
  return tags;
}

function parseSkillsSection(raw: RawSection): SkillsSectionData {
  const categories: SkillCategory[] = [];

  for (const node of raw.nodes) {
    if (node.type === "list") {
      for (const item of (node as any).children as ListItem[]) {
        const para = item.children[0];
        if (!para || para.type !== "paragraph") continue;

        const children = (para as Paragraph).children;
        // Look for **Category:** Skills text
        if (children.length > 0 && children[0].type === "strong") {
          const name = extractText((children[0] as Strong).children).replace(/:$/, "");
          const skills = extractText(children.slice(1) as PhrasingContent[]).replace(/^:\s*/, "").trim();
          categories.push({ name, skills });
        }
      }
    }
  }

  return { type: "skills", title: raw.title, categories };
}

function parseLanguagesSection(raw: RawSection): LanguagesSectionData {
  const categories: SkillCategory[] = [];

  for (const node of raw.nodes) {
    if (node.type === "list") {
      for (const item of (node as any).children as ListItem[]) {
        const para = item.children[0];
        if (!para || para.type !== "paragraph") continue;

        const children = (para as Paragraph).children;
        if (children.length > 0 && children[0].type === "strong") {
          const name = extractText((children[0] as Strong).children).replace(/:$/, "");
          const skills = extractText(children.slice(1) as PhrasingContent[]).replace(/^:\s*/, "").trim();
          categories.push({ name, skills });
        }
      }
    }
  }

  return { type: "languages", title: raw.title, categories };
}

function parseEducationSection(raw: RawSection): EducationSectionData {
  const entries: EducationEntry[] = [];
  const groups = splitAtH3(raw.nodes);

  for (const group of groups) {
    const institution = extractText(group.heading.children);
    let degree = "";
    let period: string | undefined;

    for (const node of group.nodes) {
      if (node.type === "paragraph") {
        const para = node as Paragraph;
        if (para.children.length === 1 && para.children[0].type === "emphasis") {
          const text = extractText((para.children[0] as Emphasis).children);
          if (!degree) {
            degree = text;
          } else {
            period = text;
          }
        }
      }
    }

    entries.push({ institution, degree, period });
  }

  return { type: "education", title: raw.title, entries };
}

async function parseGenericSection(raw: RawSection): Promise<GenericSectionData> {
  const tree: Root = { type: "root", children: raw.nodes as any };
  const html = await unified()
    .use(remarkRehype)
    .use(rehypeStringify)
    .stringify(await unified().use(remarkRehype).run(tree));

  return { type: "generic", id: raw.id, title: raw.title, htmlContent: String(html) };
}

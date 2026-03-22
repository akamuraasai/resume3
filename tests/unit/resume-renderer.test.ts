import { describe, expect, test } from "bun:test";
import { renderResumeData } from "../../src/lib/resume-renderer";
import type { ResumeData } from "../../src/lib/resume-types";

function makeResumeData(overrides?: Partial<ResumeData>): ResumeData {
  return {
    metadata: {
      locale: "en",
      version: "tech",
      name: "Jane Smith",
      title: "Engineer",
      contact: { email: "jane@example.com" },
    },
    sections: [{ type: "profile", title: "Profile", content: "Hello world." }],
    ...overrides,
  };
}

describe("renderResumeData", () => {
  test("returns string starting with <!DOCTYPE html>", () => {
    const html = renderResumeData(makeResumeData());
    expect(html.startsWith("<!DOCTYPE html>")).toBe(true);
  });

  test("contains candidate name", () => {
    const html = renderResumeData(makeResumeData());
    expect(html).toContain("Jane Smith");
  });

  test("contains section content", () => {
    const html = renderResumeData(makeResumeData());
    expect(html).toContain("Hello world.");
  });

  test("contains experience entries when provided", () => {
    const data = makeResumeData({
      sections: [
        {
          type: "experience",
          title: "Experience",
          entries: [
            {
              role: "Engineer",
              company: "Acme",
              period: "2023",
              achievements: [{ text: "Built things", tags: [] }],
            },
          ],
        },
      ],
    });
    const html = renderResumeData(data);
    expect(html).toContain("Acme");
    expect(html).toContain("Built things");
  });

  test("includes language selector links when locales provided", () => {
    const html = renderResumeData(makeResumeData(), ["en", "pt", "es"]);
    expect(html).toContain("/tech/pt");
    expect(html).toContain("/tech/es");
  });

  test("is valid HTML with html and body tags", () => {
    const html = renderResumeData(makeResumeData());
    expect(html).toContain("<html");
    expect(html).toContain("<body");
    expect(html).toContain("</html>");
  });
});

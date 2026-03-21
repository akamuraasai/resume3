import React from "react";
import type { ResumeData } from "../../lib/resume-types";

export function ResumeNav({ data }: { data: ResumeData }) {
  const sectionLinks = data.sections
    .filter((s) => s.type === "experience" || s.type === "skills" || s.type === "education")
    .map((s) => {
      const id = s.type === "experience" ? "experience" : s.type === "skills" ? "skills" : "education";
      return { id, label: id.toUpperCase() };
    });

  // Build nav HTML with onclick for print button (renderToStaticMarkup strips React event handlers)
  const linksHtml = sectionLinks
    .map((link, i) => {
      const cls =
        i === 0
          ? "text-on-surface border-b-2 border-primary pb-1 hover:text-primary transition-colors duration-200"
          : "text-outline hover:text-on-surface transition-colors duration-200";
      return `<a class="${cls}" href="#${link.id}">${link.label}</a>`;
    })
    .join("\n");

  const navInnerHtml = `
    ${linksHtml}
    <button class="bg-on-primary-fixed text-on-primary px-6 py-2 tracking-widest text-[10px] font-bold hover:bg-primary-dim transition-colors" onclick="window.print()">PRINT</button>
  `;

  return (
    <nav className="bg-surface no-print">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-20 py-12 max-w-7xl mx-auto">
        <div className="text-4xl font-serif text-on-surface tracking-tighter uppercase">
          {data.metadata.name.toUpperCase()}
        </div>
        <div
          className="flex gap-12 mt-8 md:mt-0 font-sans text-[10px] tracking-[0.2rem] font-medium items-center"
          dangerouslySetInnerHTML={{ __html: navInnerHtml }}
        />
      </div>
    </nav>
  );
}

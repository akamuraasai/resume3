import React from "react";
import type { ResumeData } from "../../lib/resume-types";

export function ResumeNav({ data }: { data: ResumeData }) {
  const sectionLinks = data.sections
    .filter((s) => s.type === "experience" || s.type === "skills" || s.type === "education")
    .map((s) => {
      const id = s.type === "experience" ? "experience" : s.type === "skills" ? "skills" : "education";
      return { id, label: id.toUpperCase() };
    });

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
    <button class="bg-on-primary-fixed text-on-primary px-4 md:px-6 py-1.5 md:py-2 tracking-widest text-[9px] md:text-[10px] font-bold hover:bg-primary-dim transition-colors" onclick="window.print()">PRINT</button>
  `;

  return (
    <nav className="bg-surface no-print">
      <div className="flex flex-row justify-between items-center w-full px-4 md:px-20 py-4 md:py-8 max-w-7xl mx-auto">
        <div className="hidden md:block text-3xl font-serif text-on-surface tracking-tighter uppercase">
          {data.metadata.name.toUpperCase()}
        </div>
        <div
          className="flex gap-4 md:gap-10 font-sans text-[9px] md:text-[10px] tracking-[0.15rem] md:tracking-[0.2rem] font-medium items-center w-full md:w-auto justify-between md:justify-end"
          dangerouslySetInnerHTML={{ __html: navInnerHtml }}
        />
      </div>
    </nav>
  );
}

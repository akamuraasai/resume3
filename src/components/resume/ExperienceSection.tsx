import React from "react";
import type { ExperienceSectionData } from "../../lib/resume-types";
import { ExperienceCard } from "./ExperienceCard";

export function ExperienceSection({ section }: { section: ExperienceSectionData }) {
  return (
    <section className="mb-8 md:mb-12" id="experience">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-6 md:mb-8 border-b border-outline-variant/30 pb-4">
        <h2 className="font-sans text-[10px] tracking-[0.25em] uppercase text-primary font-bold">
          {section.title}
        </h2>
        {section.subtitle && (
          <span className="text-[9px] text-outline font-medium tracking-widest uppercase mt-1 md:mt-0">
            {section.subtitle}
          </span>
        )}
      </div>
      <div className="grid grid-cols-1 gap-4 md:gap-6">
        {section.entries.map((entry, i) => (
          <ExperienceCard key={i} entry={entry} />
        ))}
      </div>
    </section>
  );
}

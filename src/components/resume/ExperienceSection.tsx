import React from "react";
import type { ExperienceSectionData } from "../../lib/resume-types";
import { ExperienceCard } from "./ExperienceCard";

export function ExperienceSection({ section }: { section: ExperienceSectionData }) {
  return (
    <section className="mb-20" id="experience">
      <div className="flex justify-between items-end mb-12 border-b border-outline-variant/30 pb-6">
        <h2 className="font-sans text-[10px] tracking-[0.25em] uppercase text-primary font-bold">
          {section.title}
        </h2>
        {section.subtitle && (
          <span className="text-[9px] text-outline font-medium tracking-widest uppercase">
            {section.subtitle}
          </span>
        )}
      </div>
      <div className="grid grid-cols-1 gap-8">
        {section.entries.map((entry, i) => (
          <ExperienceCard key={i} entry={entry} />
        ))}
      </div>
    </section>
  );
}

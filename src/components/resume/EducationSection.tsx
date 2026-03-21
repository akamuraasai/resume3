import React from "react";
import type { EducationSectionData } from "../../lib/resume-types";

export function EducationSection({ section }: { section: EducationSectionData }) {
  return (
    <section id="education">
      <h2 className="font-sans text-[10px] tracking-[0.25em] uppercase text-primary font-bold mb-6 border-b border-outline-variant/20 pb-4">
        {section.title}
      </h2>
      <div className="space-y-6">
        {section.entries.map((entry, i) => (
          <div key={i}>
            <p className="headline-font text-lg text-on-surface">
              {entry.institution}
            </p>
            <p className="font-sans text-[10px] tracking-widest text-outline uppercase font-medium">
              {entry.degree}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

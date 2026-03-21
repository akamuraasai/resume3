import React from "react";
import type { LanguagesSectionData } from "../../lib/resume-types";

export function LanguagesSection({ section }: { section: LanguagesSectionData }) {
  return (
    <section id="languages">
      <h2 className="font-sans text-[10px] tracking-[0.25em] uppercase text-primary font-bold mb-6 border-b border-outline-variant/20 pb-4">
        {section.title}
      </h2>
      <div className="flex flex-col gap-3">
        {section.categories.map((cat, i) => (
          <div key={i} className="border-l-2 border-primary pl-3 py-1">
            <p className="text-[10px] font-bold tracking-widest uppercase text-on-surface mb-0.5">
              {cat.name}
            </p>
            <p className="text-xs text-on-surface-variant">{cat.skills}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

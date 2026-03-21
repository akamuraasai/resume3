import React from "react";
import type { ProfileSectionData } from "../../lib/resume-types";

export function ProfileSection({ section }: { section: ProfileSectionData }) {
  return (
    <section id="profile" className="mb-8 md:mb-12 text-center max-w-3xl mx-auto">
      <h2 className="font-sans text-[10px] tracking-[0.25em] uppercase text-primary font-bold mb-6">
        {section.title}
      </h2>
      <p className="headline-font text-lg md:text-2xl font-light leading-relaxed text-on-surface italic">
        {section.content}
      </p>
    </section>
  );
}

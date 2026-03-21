import React from "react";
import type { ExperienceEntry } from "../../lib/resume-types";
import { AchievementRow } from "./AchievementRow";

export function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  return (
    <article className="experience-card border border-outline-variant/20 group hover:border-primary/40 transition-colors">
      <div className="grid md:grid-cols-12">
        {/* Left panel */}
        <div className="md:col-span-4 bg-surface-container-low p-4 md:p-6 flex flex-col justify-between">
          <div>
            {entry.label && (
              <p className="font-sans text-[9px] md:text-[10px] tracking-[0.3em] text-outline uppercase font-bold mb-3 md:mb-4">
                {entry.label}
              </p>
            )}
            <h3 className="headline-font text-xl md:text-2xl text-on-surface mb-1.5 leading-tight">
              {entry.company}
            </h3>
            <p className="font-sans text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase text-primary">
              {entry.role}
            </p>
          </div>
          <div className={entry.label ? "mt-4 md:mt-6 pt-4 md:pt-6 border-t border-outline-variant/30" : "mt-3"}>
            {entry.period && (
              <p className="font-sans text-[9px] md:text-[10px] tracking-widest text-on-surface-variant uppercase font-medium">
                {entry.period}
              </p>
            )}
            {entry.sublabel && (
              <p className="text-[8px] md:text-[9px] text-outline mt-0.5 uppercase tracking-tighter">
                {entry.sublabel}
              </p>
            )}
          </div>
        </div>

        {/* Right panel */}
        <div className="md:col-span-8 p-4 md:p-6 bg-white flex flex-col justify-center space-y-4 md:space-y-5">
          {entry.achievements.map((achievement, i) => (
            <AchievementRow key={i} achievement={achievement} />
          ))}
        </div>
      </div>
    </article>
  );
}

import React from "react";
import type { ExperienceEntry } from "../../lib/resume-types";
import { AchievementRow } from "./AchievementRow";

export function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  return (
    <article className="experience-card border border-outline-variant/20 group hover:border-primary/40 transition-colors">
      <div
        className="grid md:grid-cols-12"
        style={{ minHeight: entry.achievements.length > 1 ? "300px" : "220px" }}
      >
        {/* Left panel */}
        <div className="md:col-span-5 bg-surface-container-low p-8 flex flex-col justify-between">
          <div>
            {entry.label && (
              <p className="font-sans text-[10px] tracking-[0.3em] text-outline uppercase font-bold mb-6">
                {entry.label}
              </p>
            )}
            <h3 className="headline-font text-3xl text-on-surface mb-2 leading-tight">
              {entry.company}
            </h3>
            <p className="font-sans text-xs font-bold tracking-[0.15em] uppercase text-primary">
              {entry.role}
            </p>
          </div>
          <div className={entry.label ? "mt-8 pt-8 border-t border-outline-variant/30" : "mt-4"}>
            {entry.period && (
              <p className="font-sans text-[10px] tracking-widest text-on-surface-variant uppercase font-medium">
                {entry.period}
              </p>
            )}
            {entry.sublabel && (
              <p className="text-[9px] text-outline mt-1 uppercase tracking-tighter">
                {entry.sublabel}
              </p>
            )}
          </div>
        </div>

        {/* Right panel */}
        <div className="md:col-span-7 p-8 bg-white flex flex-col justify-center space-y-8">
          {entry.achievements.map((achievement, i) => (
            <AchievementRow key={i} achievement={achievement} />
          ))}
        </div>
      </div>
    </article>
  );
}

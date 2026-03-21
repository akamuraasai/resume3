import React from "react";
import type { Achievement } from "../../lib/resume-types";
import { TechBadge } from "./TechBadge";

export function AchievementRow({ achievement }: { achievement: Achievement }) {
  return (
    <div className="flex items-start gap-4">
      {achievement.stat && (
        <div className="shrink-0 w-16 md:w-20 text-center pt-0.5">
          <span className="stat-highlight text-xl md:text-2xl font-light text-primary headline-font leading-tight">
            {achievement.stat}
          </span>
          {achievement.statLabel && (
            <p className="text-[7px] md:text-[8px] uppercase tracking-widest text-outline font-bold mt-0.5">
              {achievement.statLabel}
            </p>
          )}
        </div>
      )}
      <div className="flex-1 min-w-0">
        <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed mb-1.5">
          {achievement.text}
        </p>
        {achievement.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {achievement.tags.map((tag, i) => (
              <TechBadge key={i} tag={tag} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

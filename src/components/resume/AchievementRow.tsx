import React from "react";
import type { Achievement } from "../../lib/resume-types";
import { TechBadge } from "./TechBadge";

export function AchievementRow({ achievement }: { achievement: Achievement }) {
  return (
    <div className="flex items-start gap-6">
      {achievement.stat && (
        <div className="shrink-0 w-20 text-center">
          <span className="stat-highlight text-3xl font-light text-primary headline-font">
            {achievement.stat}
          </span>
          {achievement.statLabel && (
            <p className="text-[8px] uppercase tracking-widest text-outline font-bold mt-1">
              {achievement.statLabel}
            </p>
          )}
        </div>
      )}
      <div className="flex-1">
        <p className="text-sm text-on-surface-variant leading-relaxed mb-2">
          {achievement.text}
        </p>
        {achievement.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {achievement.tags.map((tag, i) => (
              <TechBadge key={i} tag={tag} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

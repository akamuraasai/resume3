import React from "react";
import type { Tag } from "../../lib/resume-types";

export function TechBadge({ tag }: { tag: Tag }) {
  if (tag.highlighted) {
    return (
      <span className="bg-primary text-on-primary px-2 py-0.5 text-[9px] font-bold tracking-wider uppercase">
        {tag.name}
      </span>
    );
  }

  return (
    <span className="bg-surface-container px-2 py-0.5 text-[9px] font-bold tracking-wider text-on-surface-variant uppercase border border-outline-variant/10">
      {tag.name}
    </span>
  );
}

import React from "react";
import type { ResumeSection } from "../../lib/resume-types";
import { ProfileSection } from "./ProfileSection";
import { ExperienceSection } from "./ExperienceSection";
import { SkillsSection } from "./SkillsSection";
import { EducationSection } from "./EducationSection";
import { GenericSection } from "./GenericSection";

export function ResumeSectionRouter({ sections }: { sections: ResumeSection[] }) {
  // Find the index range of skills+education to render them in a 2-col grid
  const skillsIdx = sections.findIndex((s) => s.type === "skills");
  const educationIdx = sections.findIndex((s) => s.type === "education");
  const gridStart = Math.min(
    skillsIdx >= 0 ? skillsIdx : Infinity,
    educationIdx >= 0 ? educationIdx : Infinity
  );
  const gridEnd = Math.max(
    skillsIdx >= 0 ? skillsIdx : -1,
    educationIdx >= 0 ? educationIdx : -1
  );

  const hasGrid = gridStart !== Infinity;

  const beforeGrid = hasGrid ? sections.slice(0, gridStart) : sections;
  const afterGrid = hasGrid ? sections.slice(gridEnd + 1) : [];
  const skills = skillsIdx >= 0 ? sections[skillsIdx] : null;
  const education = educationIdx >= 0 ? sections[educationIdx] : null;

  return (
    <>
      {beforeGrid.map((section, i) => renderSection(section, i))}

      {hasGrid && (
        <div className="grid md:grid-cols-2 gap-16 border-t border-outline-variant/20 pt-16">
          {skills && skills.type === "skills" && <SkillsSection section={skills} />}
          {education && education.type === "education" && <EducationSection section={education} />}
        </div>
      )}

      {afterGrid.map((section, i) => renderSection(section, i + gridEnd + 1))}
    </>
  );
}

function renderSection(section: ResumeSection, key: number) {
  switch (section.type) {
    case "profile":
      return <ProfileSection key={key} section={section} />;
    case "experience":
      return <ExperienceSection key={key} section={section} />;
    case "generic":
      return <GenericSection key={key} section={section} />;
    default:
      return null;
  }
}

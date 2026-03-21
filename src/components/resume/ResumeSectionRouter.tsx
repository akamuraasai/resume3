import React from "react";
import type { ResumeSection } from "../../lib/resume-types";
import { ProfileSection } from "./ProfileSection";
import { ExperienceSection } from "./ExperienceSection";
import { SkillsSection } from "./SkillsSection";
import { EducationSection } from "./EducationSection";
import { LanguagesSection } from "./LanguagesSection";
import { GenericSection } from "./GenericSection";

const GRID_TYPES = new Set(["skills", "education", "languages"]);

export function ResumeSectionRouter({ sections }: { sections: ResumeSection[] }) {
  const gridSections = sections.filter((s) => GRID_TYPES.has(s.type));
  const firstGridIdx = sections.findIndex((s) => GRID_TYPES.has(s.type));
  const lastGridIdx = sections.reduce((acc, s, i) => (GRID_TYPES.has(s.type) ? i : acc), -1);

  const hasGrid = firstGridIdx >= 0;
  const beforeGrid = hasGrid ? sections.slice(0, firstGridIdx).filter((s) => !GRID_TYPES.has(s.type)) : sections.filter((s) => !GRID_TYPES.has(s.type));
  const afterGrid = hasGrid ? sections.slice(lastGridIdx + 1).filter((s) => !GRID_TYPES.has(s.type)) : [];

  const skills = gridSections.find((s) => s.type === "skills");
  const education = gridSections.find((s) => s.type === "education");
  const languages = gridSections.find((s) => s.type === "languages");

  return (
    <>
      {beforeGrid.map((section, i) => renderSection(section, i))}

      {hasGrid && (
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 border-t border-outline-variant/20 pt-8 md:pt-10">
          <div>
            {skills && skills.type === "skills" && <SkillsSection section={skills} />}
          </div>
          <div>
            {education && education.type === "education" && <EducationSection section={education} />}
            {languages && languages.type === "languages" && <LanguagesSection section={languages} />}
          </div>
        </div>
      )}

      {afterGrid.map((section, i) => renderSection(section, i + lastGridIdx + 1))}
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

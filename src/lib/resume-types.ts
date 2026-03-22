export interface ResumeMetadata {
  locale: string;
  version: string;
  name: string;
  title: string;
  photo?: string;
  birthDate?: string;
  nationality?: string;
  contact: {
    email?: string;
    phone?: string;
    linkedin?: string;
    github?: string;
    website?: string;
    location?: string;
  };
}

export interface ResumeData {
  metadata: ResumeMetadata;
  sections: ResumeSection[];
}

export type ResumeSection =
  | ProfileSectionData
  | ExperienceSectionData
  | SkillsSectionData
  | EducationSectionData
  | LanguagesSectionData
  | GenericSectionData;

export interface ProfileSectionData {
  type: "profile";
  title: string;
  content: string;
}

export interface ExperienceSectionData {
  type: "experience";
  title: string;
  subtitle?: string;
  entries: ExperienceEntry[];
}

export interface ExperienceEntry {
  role: string;
  company: string;
  period?: string;
  location?: string;
  label?: string;
  sublabel?: string;
  description?: string;
  achievements: Achievement[];
}

export interface Achievement {
  stat?: string;
  statLabel?: string;
  text: string;
  tags: Tag[];
}

export interface Tag {
  name: string;
  highlighted: boolean;
}

export interface SkillsSectionData {
  type: "skills";
  title: string;
  categories: SkillCategory[];
}

export interface SkillCategory {
  name: string;
  skills: string;
}

export interface LanguagesSectionData {
  type: "languages";
  title: string;
  categories: SkillCategory[];
}

export interface EducationSectionData {
  type: "education";
  title: string;
  entries: EducationEntry[];
}

export interface EducationEntry {
  institution: string;
  degree: string;
  period?: string;
}

export interface GenericSectionData {
  type: "generic";
  id: string;
  title: string;
  htmlContent: string;
}

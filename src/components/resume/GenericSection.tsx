import type { GenericSectionData } from "../../lib/resume-types";

export function GenericSection({ section }: { section: GenericSectionData }) {
  return (
    <section className="mb-20" id={section.id}>
      <h2 className="text-[10px] tracking-[0.25em] uppercase text-[#566065] font-bold mb-6">{section.title}</h2>
      <div className="prose prose-sm text-[#586064]" dangerouslySetInnerHTML={{ __html: section.htmlContent }} />
    </section>
  );
}

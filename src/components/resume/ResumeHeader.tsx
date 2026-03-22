import type { ResumeMetadata } from "../../lib/resume-types";

export function ResumeHeader({ metadata }: { metadata: ResumeMetadata }) {
  const { name, title, photo, birthDate, nationality, contact } = metadata;

  return (
    <header className="text-center mb-8 md:mb-10">
      {photo && (
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 border border-outline-variant p-1">
            <img alt="Professional Portrait" className="w-full h-full object-cover grayscale opacity-90" src={photo} />
          </div>
        </div>
      )}
      <h1 className="headline-font text-4xl md:text-7xl font-extralight tracking-tight text-on-surface mb-3">{name}</h1>
      <p className="font-sans text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-outline mb-6 md:mb-8">
        {title}
      </p>
      <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-8 gap-y-1.5 text-[9px] md:text-[10px] tracking-widest text-on-surface-variant font-medium uppercase">
        {contact.location && (
          <span className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[14px]">location_on</span> {contact.location}
          </span>
        )}
        {contact.email && (
          <span className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[14px]">mail</span> {contact.email}
          </span>
        )}
        {contact.phone && (
          <span className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[14px]">call</span> {contact.phone}
          </span>
        )}
        {contact.github && (
          <span className="flex items-center gap-2">
            <svg className="w-[14px] h-[14px] fill-current" viewBox="0 0 24 24" aria-label="GitHub" role="img">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            {contact.github.replace(/^https?:\/\/(www\.)?github\.com\//, "")}
          </span>
        )}
        {contact.website && (
          <span className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[14px]">link</span>{" "}
            {contact.website.replace(/^https?:\/\//, "")}
          </span>
        )}
        {birthDate && (
          <span className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[14px]">cake</span> {birthDate}
          </span>
        )}
        {nationality && (
          <span className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[14px]">flag</span> {nationality}
          </span>
        )}
      </div>
    </header>
  );
}

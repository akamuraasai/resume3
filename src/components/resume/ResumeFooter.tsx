import React from "react";
import type { ResumeMetadata } from "../../lib/resume-types";

export function ResumeFooter({ metadata }: { metadata: ResumeMetadata }) {
  return (
    <footer className="bg-surface no-print">
      <div className="flex flex-col items-center justify-center w-full px-4 md:px-20 py-6 md:py-10 text-center">
        <div className="flex gap-12 mb-8 font-sans text-[10px] tracking-[0.1rem] uppercase font-medium">
          {metadata.contact.linkedin && (
            <a
              className="text-outline-variant hover:text-primary underline decoration-1 underline-offset-4 transition-colors duration-200"
              href={metadata.contact.linkedin}
            >
              LINKEDIN
            </a>
          )}
          {metadata.contact.github && (
            <a
              className="text-outline-variant hover:text-primary underline decoration-1 underline-offset-4 transition-colors duration-200"
              href={metadata.contact.github}
            >
              GITHUB
            </a>
          )}
          {metadata.contact.website && (
            <a
              className="text-outline-variant hover:text-primary underline decoration-1 underline-offset-4 transition-colors duration-200"
              href={metadata.contact.website}
            >
              PORTFOLIO
            </a>
          )}
        </div>
        <p className="font-sans text-[10px] tracking-[0.1rem] uppercase font-medium text-primary">
          &copy; {new Date().getFullYear()} {metadata.name.toUpperCase()}. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}

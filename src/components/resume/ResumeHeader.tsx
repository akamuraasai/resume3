import React from "react";
import type { ResumeMetadata } from "../../lib/resume-types";

export function ResumeHeader({ metadata }: { metadata: ResumeMetadata }) {
  const { name, title, photo, contact } = metadata;

  return (
    <header className="text-center mb-16">
      {photo && (
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 border border-outline-variant p-1">
            <img
              alt="Professional Portrait"
              className="w-full h-full object-cover grayscale opacity-90"
              src={photo}
            />
          </div>
        </div>
      )}
      <h1 className="headline-font text-6xl md:text-7xl font-extralight tracking-tight text-on-surface mb-4">
        {name}
      </h1>
      <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-outline mb-10">
        {title}
      </p>
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[10px] tracking-widest text-on-surface-variant font-medium uppercase">
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
        {contact.website && (
          <span className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[14px]">link</span> {contact.website.replace(/^https?:\/\//, "")}
          </span>
        )}
      </div>
    </header>
  );
}

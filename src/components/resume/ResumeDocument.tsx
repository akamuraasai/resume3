import React from "react";
import type { ResumeData } from "../../lib/resume-types";
import { ResumeNav } from "./ResumeNav";
import { ResumeHeader } from "./ResumeHeader";
import { ResumeSectionRouter } from "./ResumeSectionRouter";
import { ResumeFooter } from "./ResumeFooter";
import { LanguageSelector } from "./LanguageSelector";

export function ResumeDocument({ data, availableLocales = [] }: { data: ResumeData; availableLocales?: string[] }) {
  return (
    <html lang={data.metadata.locale}>
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>{`${data.metadata.name} — ${data.metadata.title}`}</title>
        <meta name="description" content={`${data.metadata.title} — ${data.metadata.name}. ${data.metadata.contact.location || ""}`} />
        <meta property="og:title" content={`${data.metadata.name} — ${data.metadata.title}`} />
        <meta property="og:description" content={`${data.metadata.title} — ${data.metadata.name}`} />
        <meta property="og:type" content="profile" />
        {data.metadata.photo && <meta property="og:image" content={data.metadata.photo} />}
        <meta name="robots" content="noindex" />
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries" />
        <script id="tailwind-config" dangerouslySetInnerHTML={{ __html: getTailwindConfig() }} />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <style dangerouslySetInnerHTML={{ __html: getStyles() }} />
      </head>
      <body className="bg-surface text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
        <ResumeNav data={data} />
        <main className="max-w-5xl mx-auto px-4 md:px-16 py-8 md:py-12 bg-surface-container-lowest shadow-sm mb-8 md:mb-16 print-container">
          <ResumeHeader metadata={data.metadata} />
          <ResumeSectionRouter sections={data.sections} />
        </main>
        <ResumeFooter metadata={data.metadata} />
        <LanguageSelector
          currentLocale={data.metadata.locale}
          availableLocales={availableLocales}
          version={data.metadata.version}
        />
      </body>
    </html>
  );
}

function getTailwindConfig(): string {
  return `
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            "inverse-surface": "#0c0f10",
            "on-primary": "#f0f9ff",
            "tertiary-fixed-dim": "#c9d5e9",
            "surface-container": "#eaeff1",
            "on-secondary-container": "#455367",
            "surface": "#f8f9fa",
            "surface-container-low": "#f1f4f6",
            "on-error": "#fff7f6",
            "on-primary-fixed": "#374146",
            "on-tertiary-fixed-variant": "#505c6d",
            "secondary-container": "#d5e3fc",
            "background": "#f8f9fa",
            "on-error-container": "#752121",
            "surface-container-high": "#e3e9ec",
            "on-primary-container": "#495359",
            "on-background": "#2b3437",
            "on-tertiary": "#f7f9ff",
            "on-secondary-fixed-variant": "#4e5c71",
            "error-dim": "#4e0309",
            "surface-bright": "#f8f9fa",
            "secondary-fixed": "#d5e3fc",
            "on-primary-fixed-variant": "#535d62",
            "secondary-fixed-dim": "#c7d5ee",
            "inverse-primary": "#edf8ff",
            "outline": "#737c7f",
            "on-surface": "#2b3437",
            "surface-dim": "#d1dce0",
            "on-secondary": "#f8f8ff",
            "surface-variant": "#dbe4e7",
            "error-container": "#fe8983",
            "surface-container-highest": "#dbe4e7",
            "on-tertiary-container": "#475363",
            "tertiary-container": "#d7e3f8",
            "tertiary": "#546071",
            "error": "#9f403d",
            "secondary-dim": "#465468",
            "outline-variant": "#abb3b7",
            "inverse-on-surface": "#9b9d9e",
            "on-tertiary-fixed": "#344050",
            "tertiary-dim": "#485464",
            "surface-tint": "#566065",
            "primary": "#566065",
            "primary-dim": "#4a5459",
            "secondary": "#526075",
            "surface-container-lowest": "#ffffff",
            "primary-fixed": "#d9e4ea",
            "tertiary-fixed": "#d7e3f8",
            "on-secondary-fixed": "#324054",
            "primary-container": "#d9e4ea",
            "on-surface-variant": "#586064",
            "primary-fixed-dim": "#cbd6dc"
          },
          fontFamily: {
            "headline": ["Newsreader"],
            "body": ["Inter"],
            "label": ["Inter"]
          },
          borderRadius: {"DEFAULT": "0px", "lg": "0px", "xl": "0px", "full": "9999px"},
        },
      },
    }
  `;
}

function getStyles(): string {
  return `
    body {
      font-family: 'Inter', sans-serif;
      -webkit-print-color-adjust: exact;
    }
    .headline-font {
      font-family: 'Newsreader', serif;
    }
    .material-symbols-outlined {
      font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
    }
    .stat-highlight {
      font-feature-settings: "tnum" on, "lnum" on;
    }
    @media print {
      .no-print { display: none; }
      body { background: white; }
      .print-container { width: 100%; max-width: 100%; padding: 0; margin: 0; box-shadow: none; border: none; }
      article { break-inside: avoid; border: 1px solid #e3e9ec !important; }
    }
    ::selection {
      background-color: #d9e4ea;
      color: #374146;
    }
  `;
}

import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { ResumeDocument } from "../components/resume/ResumeDocument";
import { parseResume } from "./resume-parser";
import type { ResumeData } from "./resume-types";

export async function renderResumeFromFile(filePath: string, availableLocales: string[] = []): Promise<string> {
  const file = Bun.file(filePath);
  const rawContent = await file.text();
  const data = await parseResume(rawContent);
  return renderResumeData(data, availableLocales);
}

export function renderResumeData(data: ResumeData, availableLocales: string[] = []): string {
  const markup = renderToStaticMarkup(React.createElement(ResumeDocument, { data, availableLocales }));
  return `<!DOCTYPE html>\n${markup}`;
}

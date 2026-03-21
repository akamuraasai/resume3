import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { ResumeDocument } from "../components/resume/ResumeDocument";
import { parseResume } from "./resume-parser";
import type { ResumeData } from "./resume-types";

export async function renderResumeFromFile(filePath: string): Promise<string> {
  const file = Bun.file(filePath);
  const rawContent = await file.text();
  const data = await parseResume(rawContent);
  return renderResumeData(data);
}

export function renderResumeData(data: ResumeData): string {
  const markup = renderToStaticMarkup(
    React.createElement(ResumeDocument, { data })
  );
  return `<!DOCTYPE html>\n${markup}`;
}

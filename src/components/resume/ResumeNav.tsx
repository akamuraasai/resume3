import React from "react";
import type { ResumeData } from "../../lib/resume-types";

export function ResumeNav({ data }: { data: ResumeData }) {
  const sectionLinks = [
    { id: "profile", label: "PROFILE" },
    ...data.sections
      .filter((s) => s.type === "experience" || s.type === "skills" || s.type === "education")
      .map((s) => {
        const id = s.type === "experience" ? "experience" : s.type === "skills" ? "skills" : "education";
        return { id, label: id.toUpperCase() };
      }),
  ];

  const linkCls = "nav-link text-outline hover:text-on-surface transition-colors duration-200";
  const activeCls = "nav-link text-on-surface border-b-2 border-primary pb-1";

  const linksHtml = sectionLinks
    .map((link) => `<a class="${linkCls}" href="#${link.id}" data-section="${link.id}">${link.label}</a>`)
    .join("\n");

  const pdfPath = `/resumes/${data.metadata.version}/${data.metadata.locale}.pdf`;

  const navInnerHtml = `
    ${linksHtml}
    <button class="bg-on-primary-fixed text-on-primary p-1.5 md:px-6 md:py-2 tracking-widest text-[10px] font-bold hover:bg-primary-dim transition-colors flex items-center justify-center" onclick="window.print()"><span class="material-symbols-outlined text-[16px] md:hidden">print</span><span class="hidden md:inline">PRINT</span></button>
    <a href="${pdfPath}" download class="border border-on-primary-fixed text-on-primary-fixed p-1.5 md:px-6 md:py-2 hover:bg-on-primary-fixed hover:text-on-primary transition-colors flex items-center justify-center" title="Download PDF"><span class="material-symbols-outlined text-[16px] md:hidden">download</span><span class="hidden md:inline tracking-widest text-[10px] font-bold">DOWNLOAD</span></a>
  `;

  const observerScript = `
    document.addEventListener('DOMContentLoaded', function() {
      var links = document.querySelectorAll('.nav-link');
      var sectionEls = [];
      links.forEach(function(l) { sectionEls.push(document.getElementById(l.dataset.section)); });
      var inactive = '${linkCls}';
      var active = '${activeCls}';
      function setActive(id) {
        links.forEach(function(l) {
          l.className = l.dataset.section === id ? active : inactive;
        });
      }
      function findActive() {
        var threshold = window.innerHeight * 0.4;
        var best = null;
        var bestTop = -Infinity;
        for (var i = 0; i < sectionEls.length; i++) {
          var el = sectionEls[i];
          if (!el) continue;
          var top = el.getBoundingClientRect().top;
          if (top <= threshold && top > bestTop) {
            best = el.id;
            bestTop = top;
          }
        }
        return best;
      }
      // Initial highlight
      var initial = findActive();
      setActive(initial || (sectionEls[0] ? sectionEls[0].id : ''));
      var ticking = false;
      window.addEventListener('scroll', function() {
        if (!ticking) {
          window.requestAnimationFrame(function() {
            var best = findActive();
            if (best) setActive(best);
            ticking = false;
          });
          ticking = true;
        }
      });
    });
  `;

  return (
    <>
      <nav className="bg-surface no-print sticky top-0 z-50">
        <div className="flex flex-row justify-between items-center w-full px-4 md:px-20 py-4 md:py-8 max-w-7xl mx-auto">
          <div className="hidden md:block text-3xl font-serif text-on-surface tracking-tighter uppercase">
            {data.metadata.name.toUpperCase()}
          </div>
          <div
            className="flex gap-4 md:gap-10 font-sans text-[9px] md:text-[10px] tracking-[0.15rem] md:tracking-[0.2rem] font-medium items-center w-full md:w-auto justify-between md:justify-end"
            dangerouslySetInnerHTML={{ __html: navInnerHtml }}
          />
        </div>
      </nav>
      <script dangerouslySetInnerHTML={{ __html: observerScript }} />
    </>
  );
}

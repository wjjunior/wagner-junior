"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { type ReactNode } from "react";

const KEYWORDS = [
  "Staff Engineer",
  "TypeScript",
  "React",
  "Node.js",
  "AI",
  "LLM",
  "PostgreSQL",
  "Redis",
  "AWS",
  "ADRs",
  "CI/CD",
];

function highlightKeywords(text: string): ReactNode[] {
  const pattern = new RegExp(`(${KEYWORDS.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "g");
  const parts = text.split(pattern);
  return parts.map((part, i) =>
    KEYWORDS.includes(part) ? (
      <span key={i} className="text-text-primary">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about">
      <h2 className="lg:hidden sticky top-0 z-20 bg-bg-primary/75 backdrop-blur-md py-5 text-sm font-bold uppercase tracking-widest text-text-primary">
        {t.nav.about}
      </h2>
      {t.about.map((paragraph, index) => (
        <p key={index} className="mb-4 text-sm leading-relaxed">
          {highlightKeywords(paragraph)}
        </p>
      ))}
    </section>
  );
}

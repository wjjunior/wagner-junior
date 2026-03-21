"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { type ReactNode } from "react";

const KEYWORDS = [
  "Staff",
  "TypeScript",
  "React",
  "Node.js",
  "AI",
  "LLM",
  "PostgreSQL",
  "Redis",
  "AWS",
  "NestJS",
  "Kafka",
  "GraphQL",
];

function highlightKeywords(text: string): ReactNode[] {
  const pattern = new RegExp(
    `(${KEYWORDS.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "g"
  );
  const parts = text.split(pattern);
  return parts.map((part, i) =>
    KEYWORDS.includes(part) ? (
      <span key={i} className="text-accent-light font-medium">
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
    <section id="about" className="scroll-mt-24">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-sm font-bold uppercase tracking-widest text-accent-light">
          {t.about.title}
        </h2>
        <div className="h-px flex-1 bg-border" />
      </div>
      <div className="space-y-5">
        {t.about.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-base leading-relaxed">
            {highlightKeywords(paragraph)}
          </p>
        ))}
      </div>
    </section>
  );
}

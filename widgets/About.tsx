"use client";

import { useLanguage } from "@/shared/providers/LanguageProvider";
import SectionHeader from "@/shared/ui/SectionHeader";
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

const REGEX_SPECIAL_CHARS = /[.*+?^${}()|[\]\\]/g;
const ESCAPE_REPLACEMENT = ["\\", "$&"].join("");

function highlightKeywords(text: string): ReactNode[] {
  const pattern = new RegExp(
    `(${KEYWORDS.map((k) => k.replaceAll(REGEX_SPECIAL_CHARS, ESCAPE_REPLACEMENT)).join("|")})`,
    "g"
  );
  const parts = text.split(pattern);
  return parts.map((part, i) => {
    const key = `${part.slice(0, 10)}-${i}`;
    return KEYWORDS.includes(part) ? (
      <span key={key} className="text-accent-light font-medium">
        {part}
      </span>
    ) : (
      <span key={key}>{part}</span>
    );
  });
}

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="scroll-mt-24">
      <SectionHeader title={t.about.title} />
      <div className="space-y-5">
        {t.about.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 20)} className="text-base leading-relaxed">
            {highlightKeywords(paragraph)}
          </p>
        ))}
      </div>
    </section>
  );
}

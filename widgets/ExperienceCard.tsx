"use client";

import { ArrowUpRight } from "lucide-react";
import type { ExperienceEntry } from "@/shared/i18n/types";

export default function ExperienceCard({
  date,
  role,
  company,
  companyUrl,
  location,
  description,
  tags,
}: ExperienceEntry) {
  const companyElement = companyUrl ? (
    <a
      href={companyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent font-medium group-hover:text-accent-light transition-colors duration-300 hover:underline underline-offset-2"
    >
      {company}
      <ArrowUpRight className="inline-block ml-1 w-3.5 h-3.5 opacity-0 -translate-y-1 translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
    </a>
  ) : (
    <span className="text-accent font-medium group-hover:text-accent-light transition-colors duration-300">
      {company}
    </span>
  );

  return (
    <div className="group glass-card rounded-xl p-4 sm:p-6 transition-all duration-300">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
        <div>
          <h3 className="font-semibold transition-colors duration-300">
            <span className="text-accent-light group-hover:text-accent">{role}</span>
            <span className="text-text-muted font-normal"> · </span>
            {companyElement}
          </h3>
          {location && (
            <p className="text-xs text-text-muted mt-0.5">{location}</p>
          )}
        </div>
        <span className="text-xs font-mono text-text-muted whitespace-nowrap">
          {date}
        </span>
      </div>
      <p className="text-sm leading-relaxed text-text-secondary">{description}</p>
      <ul className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
        {tags.map((tag) => (
          <li key={tag}>
            <span className="rounded-full border border-accent/20 bg-accent/5 px-2.5 py-0.5 sm:px-3 sm:py-1 text-xs font-medium text-accent-light">
              {tag}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

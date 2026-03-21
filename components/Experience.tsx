"use client";

import { useLanguage } from "@/lib/LanguageContext";
import ExperienceCard from "@/components/ExperienceCard";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="scroll-mt-24">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-sm font-bold uppercase tracking-widest text-accent-light">
          {t.nav.experience}
        </h2>
        <div className="h-px flex-1 bg-border" />
      </div>
      <div className="flex flex-col gap-4">
        {t.experience.map((entry, index) => (
          <ExperienceCard
            key={index}
            date={entry.date}
            role={entry.role}
            company={entry.company}
            companyUrl={entry.companyUrl}
            location={entry.location}
            description={entry.description}
            tags={entry.tags}
          />
        ))}
      </div>
    </section>
  );
}

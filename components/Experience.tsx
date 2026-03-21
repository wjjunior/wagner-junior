"use client";

import { useLanguage } from "@/lib/LanguageContext";
import ExperienceCard from "@/components/ExperienceCard";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="mt-24">
      <h2 className="lg:hidden sticky top-0 z-20 bg-bg-primary/75 backdrop-blur-md py-5 text-sm font-bold uppercase tracking-widest text-text-primary">
        {t.nav.experience}
      </h2>
      <ol className="flex flex-col gap-12">
        {t.experience.map((entry, index) => (
          <li key={index}>
            <ExperienceCard
              date={entry.date}
              role={entry.role}
              company={entry.company}
              location={entry.location}
              description={entry.description}
              tags={entry.tags}
            />
          </li>
        ))}
      </ol>
    </section>
  );
}

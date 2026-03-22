"use client";

import { useLanguage } from "@/shared/providers/LanguageProvider";
import SectionHeader from "@/shared/ui/SectionHeader";
import ExperienceCard from "@/widgets/ExperienceCard";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="scroll-mt-24">
      <SectionHeader title={t.nav.experience} />
      <div className="flex flex-col gap-4">
        {t.experience.map((entry) => (
          <ExperienceCard
            key={entry.company + "-" + entry.date}
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

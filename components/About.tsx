"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about">
      <h2 className="lg:hidden sticky top-0 z-20 bg-bg-primary/75 backdrop-blur-md py-5 text-sm font-bold uppercase tracking-widest text-text-primary">
        {t.nav.about}
      </h2>
      {t.about.map((paragraph, index) => (
        <p key={index} className="mb-4 text-sm leading-relaxed">
          {paragraph}
        </p>
      ))}
    </section>
  );
}

"use client";

import { useLanguage } from "@/shared/providers/LanguageProvider";
import LinkButton from "@/shared/ui/LinkButton";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-[85vh] flex flex-col justify-center pt-20 sm:pt-24 pb-12 sm:pb-16">
      <div className="animate-fade-in-up">
        <p className="text-sm font-medium uppercase tracking-widest text-accent-light mb-6">
          {t.header.subtitle}
        </p>
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] pb-4 text-gradient animate-fade-in-up-delay-1">
        {t.header.title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed text-text-secondary animate-fade-in-up-delay-2">
        {t.header.tagline}
      </p>
      <div className="mt-8 sm:mt-10 animate-fade-in-up-delay-3">
        <LinkButton href={`mailto:${t.footer.email}`}>
          {t.header.cta}
          <ArrowRight size={16} aria-hidden="true" />
        </LinkButton>
      </div>
    </section>
  );
}

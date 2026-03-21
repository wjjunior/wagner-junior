"use client";

import { useLanguage } from "@/lib/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";
import SocialLinks from "@/components/SocialLinks";

const navItems = [
  { id: "about", key: "about" as const },
  { id: "experience", key: "experience" as const },
];

export default function Header({ activeSection }: { activeSection: string }) {
  const { t, language } = useLanguage();

  return (
    <header className="flex flex-col lg:sticky lg:top-0 lg:h-screen lg:w-[45%] lg:py-24 lg:px-6 py-12 px-6">
      <div>
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-accent focus:text-bg-primary focus:rounded"
        >
          {language === "pt" ? "Pular para o conteúdo" : "Skip to content"}
        </a>

        <h1 className="text-4xl sm:text-5xl font-bold text-text-primary tracking-tight">
          Wagner Junior
        </h1>

        <h2 className="text-lg font-medium text-text-primary mt-3">
          {t.header.title}
        </h2>

        <p className="mt-4 max-w-xs text-text-secondary leading-relaxed">
          {t.header.tagline}
        </p>

        <nav className="mt-16 hidden lg:block">
          <ul className="flex flex-col gap-4">
            {navItems.map(({ id, key }) => {
              const isActive = activeSection === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="group flex items-center gap-4 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                  >
                    <span
                      className={`h-px transition-all duration-200 ${
                        isActive
                          ? "w-16 bg-text-primary"
                          : "w-8 bg-text-secondary group-hover:w-12 group-hover:bg-text-primary"
                      }`}
                    />
                    <span
                      className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                        isActive
                          ? "text-text-primary"
                          : "text-text-secondary group-hover:text-text-primary"
                      }`}
                    >
                      {t.nav[key]}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-8">
          <LanguageToggle />
        </div>
      </div>

      <div className="mt-8 lg:mt-auto">
        <SocialLinks />
      </div>
    </header>
  );
}

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
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg-primary/80 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-text-primary font-bold tracking-tight text-lg hover:text-accent-light transition-colors">
            WJ
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(({ id, key }) => {
              const isActive = activeSection === id;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${
                    isActive
                      ? "text-text-primary"
                      : "text-text-muted hover:text-text-secondary"
                  }`}
                >
                  {t.nav[key]}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <SocialLinks />
            <div className="w-px h-5 bg-border" />
            <LanguageToggle />
          </div>
        </div>
      </div>

      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-accent focus:text-bg-primary focus:rounded"
      >
        {language === "pt" ? "Pular para o conteúdo" : "Skip to content"}
      </a>
    </header>
  );
}

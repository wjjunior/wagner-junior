"use client";

import Link from "next/link";
import { useLanguage } from "@/shared/providers/LanguageProvider";
import ThemeToggle from "@/features/theme/ThemeToggle";
import LanguageToggle from "@/features/language/LanguageToggle";
import SocialLinks from "@/widgets/SocialLinks";

const navItems = [
  { id: "about", key: "about" as const },
  { id: "experience", key: "experience" as const },
];

export default function Header({ activeSection }: { activeSection: string }) {
  const { t, language } = useLanguage();

  return (
    <header className="site-header fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-colors duration-300">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-accent focus:text-bg-primary focus:rounded"
      >
        {language === "pt" ? "Pular para o conteúdo" : "Skip to content"}
      </a>
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-bold tracking-tight text-lg transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            WJ
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(({ id, key }) => {
              const isActive = activeSection === id;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${
                    isActive ? "opacity-100" : "opacity-70 hover:opacity-100"
                  }`}
                >
                  {t.nav[key]}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <SocialLinks />
            <div className="header-divider w-px h-5" />
            <ThemeToggle />
            <div className="header-divider w-px h-5" />
            <LanguageToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

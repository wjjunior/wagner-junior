"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/shared/providers/LanguageProvider";
import ThemeToggle from "@/features/theme/ThemeToggle";
import LanguageToggle from "@/features/language/LanguageToggle";
import SocialLinks from "@/widgets/SocialLinks";

const navItems = [
  { id: "about", key: "about" as const },
  { id: "experience", key: "experience" as const },
];

export default function Header({ activeSection }: { activeSection: string }) {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = useCallback(
    (id: string) => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    },
    []
  );

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="site-header fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-colors duration-300">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-accent focus:text-bg-primary focus:rounded"
      >
        {t.nav.skipToContent}
      </a>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-12">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setMobileMenuOpen(false);
            }}
            className="font-bold tracking-tight text-lg transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            WJ
          </Link>

          <nav aria-label="Main" className="hidden md:flex items-center gap-8">
            {navItems.map(({ id, key }) => {
              const isActive = activeSection === id;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(id);
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

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden sm:flex items-center gap-3">
              <SocialLinks />
              <div className="header-divider w-px h-5" />
            </div>
            <ThemeToggle />
            <div className="header-divider w-px h-5" />
            <LanguageToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden ml-2 p-2 -mr-2 transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.menu}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X size={20} aria-hidden="true" />
              ) : (
                <Menu size={20} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-[-1] md:hidden cursor-default"
            onClick={() => setMobileMenuOpen(false)}
            aria-label={t.nav.closeMenu}
            tabIndex={-1}
          />
          <nav aria-label="Mobile" className="md:hidden border-t border-border/20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex flex-col gap-3">
              {navItems.map(({ id, key }) => {
                const isActive = activeSection === id;
                return (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(id);
                    }}
                    className={`text-sm font-medium py-2 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${
                      isActive ? "opacity-100" : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    {t.nav[key]}
                  </a>
                );
              })}
              <div className="flex items-center gap-5 pt-2 sm:hidden">
                <SocialLinks />
              </div>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}

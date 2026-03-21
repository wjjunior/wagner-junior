"use client";

import { useLanguage } from "@/lib/LanguageContext";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border pt-16 pb-12">
      <div className="text-center">
        <p className="text-2xl sm:text-3xl font-bold text-gradient mb-6">
          {t.footer.cta}
        </p>
        <a
          href={`mailto:${t.footer.email}`}
          className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-6 py-3 text-sm font-medium text-accent-light hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          {t.footer.email}
        </a>
        <div className="mt-12 flex flex-col items-center gap-4">
          <SocialLinks />
          <p className="text-xs text-text-muted">
            {t.footer.built}
          </p>
        </div>
      </div>
    </footer>
  );
}

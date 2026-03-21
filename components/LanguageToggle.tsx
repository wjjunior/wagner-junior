"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div role="group" aria-label="Language toggle" className="flex items-center gap-1.5">
      <button
        onClick={() => setLanguage("en")}
        aria-label="English"
        className={`text-xs font-medium px-2 py-1 rounded transition-all duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${
          language === "en"
            ? "text-text-primary bg-accent/10 border border-accent/20"
            : "text-text-muted hover:text-text-secondary border border-transparent"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("pt")}
        aria-label="Portuguese"
        className={`text-xs font-medium px-2 py-1 rounded transition-all duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${
          language === "pt"
            ? "text-text-primary bg-accent/10 border border-accent/20"
            : "text-text-muted hover:text-text-secondary border border-transparent"
        }`}
      >
        PT
      </button>
    </div>
  );
}

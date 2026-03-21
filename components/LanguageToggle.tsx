"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div aria-label="Language toggle" className="flex items-center text-sm">
      <button
        onClick={() => setLanguage("pt")}
        className={`${language === "pt" ? "text-text-primary font-bold" : "text-text-secondary"} focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2`}
      >
        PT
      </button>
      <span className="text-text-secondary mx-1">|</span>
      <button
        onClick={() => setLanguage("en")}
        className={`${language === "en" ? "text-text-primary font-bold" : "text-text-secondary"} focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2`}
      >
        EN
      </button>
    </div>
  );
}

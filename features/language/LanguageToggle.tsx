"use client";

import { useState } from "react";
import { useLanguage } from "@/shared/providers/LanguageProvider";
// Direct import needed: announcement must use the *target* language's text, not the current one
import { translations } from "@/shared/i18n/translations";
import { LiveAnnouncer } from "@/shared/ui/LiveAnnouncer";

const LOCALES = [
  { code: "en" as const, shortLabel: "EN", ariaLabel: "English" },
  { code: "pt" as const, shortLabel: "PT", ariaLabel: "Portuguese" },
];

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [announcement, setAnnouncement] = useState("");

  const handleLanguageChange = (code: "en" | "pt") => {
    setLanguage(code);
    setAnnouncement(translations[code].a11y.switchedToLanguage);
  };

  return (
    <>
      <fieldset className="flex items-center gap-1.5 border-0 p-0 m-0">
        <legend className="sr-only">Language toggle</legend>
        {LOCALES.map(({ code, shortLabel, ariaLabel }) => (
          <button
            key={code}
            type="button"
            onClick={() => handleLanguageChange(code)}
            aria-label={ariaLabel}
            aria-pressed={language === code}
            className={`cursor-pointer text-xs font-medium px-2 py-1 rounded transition-all duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${
              language === code
                ? "text-text-primary bg-accent/10 border border-accent/20"
                : "text-text-muted hover:text-text-secondary border border-transparent"
            }`}
          >
            {shortLabel}
          </button>
        ))}
      </fieldset>
      <LiveAnnouncer message={announcement} />
    </>
  );
}

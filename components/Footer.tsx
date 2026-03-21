"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mt-24 pb-12 text-sm text-text-secondary">
      <p>{t.footer}</p>
    </footer>
  );
}

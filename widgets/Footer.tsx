"use client";

import { useLanguage } from "@/shared/providers/LanguageProvider";
import SocialLinks from "@/widgets/SocialLinks";
import { Mail } from "lucide-react";
import LinkButton from "@/shared/ui/LinkButton";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border pt-16 pb-12">
      <div className="text-center">
        <p className="text-2xl sm:text-3xl font-bold text-gradient mb-6">
          {t.footer.cta}
        </p>
        <LinkButton href={`mailto:${t.footer.email}`}>
          <Mail size={16} aria-hidden="true" />
          {t.footer.email}
        </LinkButton>
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

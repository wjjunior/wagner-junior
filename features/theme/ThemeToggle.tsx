"use client";

import { useState } from "react";
import { useTheme } from "@/shared/providers/ThemeProvider";
import { useLanguage } from "@/shared/providers/LanguageProvider";
import { Sun, Moon } from "lucide-react";
import { LiveAnnouncer } from "@/shared/ui/LiveAnnouncer";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const [announcement, setAnnouncement] = useState("");

  const label = theme === "dark" ? t.theme.switchToLight : t.theme.switchToDark;

  const handleClick = () => {
    toggleTheme();
    const nextTheme = theme === "dark" ? "light" : "dark";
    setAnnouncement(
      nextTheme === "light" ? t.theme.switchedToLight : t.theme.switchedToDark
    );
  };

  return (
    <>
      <button
        onClick={handleClick}
        aria-label={label}
        className="cursor-pointer text-text-secondary hover:text-text-primary transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 p-1"
      >
        {theme === "dark" ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
      </button>
      <LiveAnnouncer message={announcement} />
    </>
  );
}

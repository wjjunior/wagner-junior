export interface ExperienceEntry {
  date: string;
  role: string;
  company: string;
  companyUrl?: string;
  location?: string;
  description: string;
  tags: string[];
}

export interface Translations {
  nav: { about: string; experience: string; menu: string; closeMenu: string; skipToContent: string };
  header: {
    title: string;
    subtitle: string;
    tagline: string;
    cta: string;
  };
  about: {
    title: string;
    paragraphs: string[];
  };
  experience: ExperienceEntry[];
  footer: {
    cta: string;
    email: string;
    built: string;
  };
  theme: {
    switchToLight: string;
    switchToDark: string;
    switchedToLight: string;
    switchedToDark: string;
  };
  a11y: {
    opensInNewTab: string;
    switchedToLanguage: string;
  };
}

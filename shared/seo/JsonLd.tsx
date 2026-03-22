import { translations } from "@/shared/i18n/translations";

const t = translations.en;

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Wagner Junior",
  url: "https://wagnerjunior.dev",
  email: "wagner.junior30@gmail.com",
  jobTitle: "Staff Full Stack Engineer",
  description: t.header.tagline,
  knowsAbout: [
    "TypeScript",
    "React",
    "Node.js",
    "PostgreSQL",
    "AWS",
    "GraphQL",
    "NestJS",
    "Next.js",
    "Software Architecture",
    "AI/LLM Integration",
  ],
  sameAs: [
    "https://github.com/wjjunior",
    "https://www.linkedin.com/in/wagner-j-junior/",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Belo Horizonte",
    addressRegion: "MG",
    addressCountry: "BR",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "FUMEC",
  },
  worksFor: {
    "@type": "Organization",
    name: "Wagner Junior LTDA",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Wagner Junior",
  url: "https://wagnerjunior.dev",
  description:
    "Personal portfolio of Wagner Junior — Staff Full Stack Engineer with 14+ years of experience.",
  author: {
    "@type": "Person",
    name: "Wagner Junior",
  },
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

import Portfolio from "@/widgets/Portfolio";
import { translations } from "@/shared/i18n/translations";

const t = translations.en;

export default function Home() {
  return (
    <>
      <Portfolio />
      <div className="sr-only" aria-hidden="true">
        <h1>Wagner Junior — Staff Full Stack Engineer</h1>
        <p>{t.header.tagline}</p>

        <h2>{t.about.title}</h2>
        {t.about.paragraphs.map((p) => (
          <p key={p.slice(0, 30)}>{p}</p>
        ))}

        <h2>Experience</h2>
        {t.experience.map((entry) => (
          <article key={`${entry.company}-${entry.date}`}>
            <h3>
              {entry.role} — {entry.company}
            </h3>
            {entry.location && <p>{entry.location}</p>}
            <p>{entry.date}</p>
            <p>{entry.description}</p>
            <ul>
              {entry.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </article>
        ))}

        <h2>Contact</h2>
        <p>Email: {t.footer.email}</p>
        <p>
          Staff Full Stack Engineer available for staff engineer and senior
          fullstack developer positions. 14+ years of experience in TypeScript,
          React, Node.js, PostgreSQL, AWS, and AI-powered systems.
        </p>
      </div>
    </>
  );
}

import Portfolio from "@/widgets/Portfolio";
import { translations } from "@/shared/i18n/translations";

const t = translations.en;

export default function Home() {
  return (
    <>
      <Portfolio />
      <div className="absolute overflow-hidden w-px h-px -m-px p-0 border-0 [clip:rect(0,0,0,0)]" aria-hidden="true">
        <h2>Wagner Junior — Staff Full Stack Engineer</h2>
        <p>{t.header.tagline}</p>

        <h3>{t.about.title}</h3>
        {t.about.paragraphs.map((p) => (
          <p key={p.slice(0, 30)}>{p}</p>
        ))}

        <h3>Experience</h3>
        {t.experience.map((entry) => (
          <article key={`${entry.company}-${entry.date}`}>
            <h4>
              {entry.role} — {entry.company}
            </h4>
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

        <h3>Contact</h3>
        <p>Email: {t.footer.email}</p>
      </div>
    </>
  );
}

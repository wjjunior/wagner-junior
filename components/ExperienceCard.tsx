"use client";

interface ExperienceCardProps {
  date: string;
  role: string;
  company: string;
  location?: string;
  description: string;
  tags: string[];
}

export default function ExperienceCard({
  date,
  role,
  company,
  description,
  tags,
}: ExperienceCardProps) {
  return (
    <div className="group rounded-lg p-4 -mx-4 transition-all duration-200 hover:bg-card-hover-bg hover:shadow-[inset_0_1px_0_0_rgba(94,234,212,0.1)] hover:drop-shadow-lg">
      <div className="grid lg:grid-cols-[140px_1fr] gap-2 lg:gap-4">
        <span className="text-xs font-semibold uppercase text-text-secondary mt-1 block">
          {date}
        </span>
        <div>
          <h3 className="text-text-primary font-medium group-hover:text-accent transition-colors">
            {role} · {company}
          </h3>
          <p className="mt-2 text-sm leading-relaxed">{description}</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li key={tag}>
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  {tag}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

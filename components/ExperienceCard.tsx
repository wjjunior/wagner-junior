"use client";

interface ExperienceCardProps {
  date: string;
  role: string;
  company: string;
  companyUrl?: string;
  location?: string;
  description: string;
  tags: string[];
}

export default function ExperienceCard({
  date,
  role,
  company,
  companyUrl,
  location,
  description,
  tags,
}: ExperienceCardProps) {
  const arrowIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="inline-block ml-1 w-3.5 h-3.5 opacity-0 -translate-y-1 translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const companyElement = companyUrl ? (
    <a
      href={companyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent font-medium group-hover:text-accent-light transition-colors duration-300 hover:underline underline-offset-2"
    >
      {company}
      {arrowIcon}
    </a>
  ) : (
    <span className="text-accent font-medium group-hover:text-accent-light transition-colors duration-300">
      {company}
      {arrowIcon}
    </span>
  );

  return (
    <div className="group glass-card rounded-xl p-6 transition-all duration-300">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
        <div>
          <h3 className="font-semibold transition-colors duration-300">
            <span className="text-accent-light group-hover:text-accent">{role}</span>
            <span className="text-text-muted font-normal"> · </span>
            {companyElement}
          </h3>
          {location && (
            <p className="text-xs text-text-muted mt-0.5">{location}</p>
          )}
        </div>
        <span className="text-xs font-mono text-text-muted whitespace-nowrap">
          {date}
        </span>
      </div>
      <p className="text-sm leading-relaxed text-text-secondary">{description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li key={tag}>
            <span className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-medium text-accent-light">
              {tag}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

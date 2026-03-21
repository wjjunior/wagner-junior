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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="inline-block ml-1 w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                clipRule="evenodd"
              />
            </svg>
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

interface SectionHeaderProps {
  title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
      <h2 className="text-sm font-bold uppercase tracking-widest text-accent-light">
        {title}
      </h2>
      <div className="h-px flex-1 bg-border" aria-hidden="true" />
    </div>
  );
}

interface SectionHeaderProps {
  title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <h2 className="text-sm font-bold uppercase tracking-widest text-accent-light">
        {title}
      </h2>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}

import { type ReactNode } from "react";

interface LinkButtonProps {
  href: string;
  children: ReactNode;
}

export default function LinkButton({ href, children }: LinkButtonProps) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-6 py-3 text-sm font-medium text-accent-light hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
    >
      {children}
    </a>
  );
}

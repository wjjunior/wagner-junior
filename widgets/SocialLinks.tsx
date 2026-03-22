"use client";

import { GitHubIcon, LinkedInIcon } from "@/shared/ui/icons";
import { Mail } from "lucide-react";

const linkClass =
  "text-text-muted hover:text-accent-light transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2";

export default function SocialLinks() {
  return (
    <div className="flex flex-row gap-5">
      <a href="https://github.com/wjjunior" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={linkClass}>
        <GitHubIcon size={20} />
      </a>
      <a href="https://www.linkedin.com/in/wagner-j-junior/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={linkClass}>
        <LinkedInIcon size={20} />
      </a>
      <a href="mailto:wagner.junior30@gmail.com" aria-label="Email" className={linkClass}>
        <Mail size={20} aria-hidden="true" />
      </a>
    </div>
  );
}

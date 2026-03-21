"use client";

import { useState, useCallback, useRef } from "react";
import { LanguageProvider, useLanguage } from "@/lib/LanguageContext";
import { ThemeProvider } from "@/lib/ThemeContext";
import { useActiveSection } from "@/lib/useActiveSection";
import MouseGradient from "./MouseGradient";
import Starfield from "./Starfield";
import Header from "./Header";
import About from "./About";
import Experience from "./Experience";
import Footer from "./Footer";

const SECTION_IDS = ["about", "experience"];

function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-[85vh] flex flex-col justify-center pt-24 pb-16">
      <div className="animate-fade-in-up">
        <p className="text-sm font-medium uppercase tracking-widest text-accent-light mb-6">
          {t.header.subtitle}
        </p>
      </div>
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] pb-4 text-gradient animate-fade-in-up-delay-1">
        {t.header.title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed text-text-secondary animate-fade-in-up-delay-2">
        {t.header.tagline}
      </p>
      <div className="mt-10 animate-fade-in-up-delay-3">
        <a
          href="mailto:wagner.junior30@gmail.com"
          className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-6 py-3 text-sm font-medium text-accent-light hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
        >
          {t.header.cta}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}

function PortfolioContent() {
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <>
      <Header activeSection={activeSection} />
      <main id="content" className="mx-auto max-w-4xl px-6 md:px-12">
        <Hero />
        <div className="space-y-24 pb-24">
          <About />
          <Experience />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default function Portfolio() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const rafRef = useRef(0);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    });
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="relative min-h-screen" onMouseMove={handleMouseMove}>
          <Starfield />
          <MouseGradient mouseX={mouseX} mouseY={mouseY} />
          <PortfolioContent />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

"use client";

import { useState, useCallback, useRef } from "react";
import AppProviders from "@/shared/providers/AppProviders";
import { useActiveSection } from "@/shared/hooks/useActiveSection";
import Header from "@/widgets/Header";
import Hero from "@/widgets/Hero";
import About from "@/widgets/About";
import Experience from "@/widgets/Experience";
import Footer from "@/widgets/Footer";
import Starfield from "@/widgets/Starfield";
import MouseGradient from "@/widgets/MouseGradient";

const SECTION_IDS = ["about", "experience"];

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
    <AppProviders>
      <div className="relative min-h-screen" onMouseMove={handleMouseMove}>
        <Starfield />
        <MouseGradient mouseX={mouseX} mouseY={mouseY} />
        <PortfolioContent />
      </div>
    </AppProviders>
  );
}

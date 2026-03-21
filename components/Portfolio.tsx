"use client";

import { useState, useCallback, useRef } from "react";
import { LanguageProvider } from "@/lib/LanguageContext";
import { useActiveSection } from "@/lib/useActiveSection";
import MouseGradient from "./MouseGradient";
import Header from "./Header";
import About from "./About";
import Experience from "./Experience";
import Footer from "./Footer";

const SECTION_IDS = ["about", "experience"];

export default function Portfolio() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const activeSection = useActiveSection(SECTION_IDS);
  const rafRef = useRef(0);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    });
  }, []);

  return (
    <LanguageProvider>
      <div
        className="relative min-h-screen"
        onMouseMove={handleMouseMove}
      >
        <MouseGradient mouseX={mouseX} mouseY={mouseY} />
        <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-24">
          <div className="lg:flex lg:gap-4">
            <Header activeSection={activeSection} />
            <main id="content" className="lg:w-[55%] lg:py-24 py-12">
              <About />
              <Experience />
              <Footer />
            </main>
          </div>
        </div>
      </div>
    </LanguageProvider>
  );
}

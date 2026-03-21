"use client";

import { useTheme } from "@/lib/ThemeContext";

export default function MouseGradient({
  mouseX,
  mouseY,
}: {
  mouseX: number;
  mouseY: number;
}) {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 lg:block hidden"
        style={{
          background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, ${
            isLight
              ? "rgba(232, 0, 112, 0.06)"
              : "rgba(124, 58, 237, 0.12)"
          }, transparent 80%)`,
        }}
      />
      <div
        className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] z-0 animate-glow-pulse"
        style={{
          background: `radial-gradient(ellipse at center, ${
            isLight
              ? "rgba(232, 0, 112, 0.04)"
              : "rgba(124, 58, 237, 0.08)"
          } 0%, transparent 70%)`,
        }}
      />
      <div
        className="pointer-events-none fixed bottom-0 right-0 w-[600px] h-[400px] z-0 animate-glow-pulse"
        style={{
          background: `radial-gradient(ellipse at center, ${
            isLight
              ? "rgba(232, 0, 112, 0.03)"
              : "rgba(34, 211, 238, 0.05)"
          } 0%, transparent 70%)`,
          animationDelay: "2s",
        }}
      />
    </>
  );
}

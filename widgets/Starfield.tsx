"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/shared/providers/ThemeProvider";

interface Star {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  speed: number;
  twinkleSpeed: number;
  twinkleOffset: number;
}

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const themeRef = useRef(theme);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let animationId: number;
    let stars: Star[] = [];

    function resize() {
      if (!canvas) return;
      canvas.width = globalThis.innerWidth;
      canvas.height = globalThis.innerHeight;
      initStars();
    }

    function initStars() {
      if (!canvas) return;
      const count = Math.floor((canvas.width * canvas.height) / 8000);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.2 + 0.3,
        opacity: Math.random() * 0.6 + 0.2,
        speed: Math.random() * 0.15 + 0.02,
        twinkleSpeed: Math.random() * 0.008 + 0.003,
        twinkleOffset: Math.random() * Math.PI * 2,
      }));
    }

    function drawStatic() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isLight = themeRef.current === "light";
      const baseAlpha = isLight ? 0.15 : 1;
      const color = isLight ? "232, 0, 112" : "200, 200, 240";

      for (const star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${star.opacity * 0.7 * baseAlpha})`;
        ctx.fill();
      }
    }

    function draw(time: number) {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isLight = themeRef.current === "light";
      const baseAlpha = isLight ? 0.15 : 1;
      const color = isLight ? "232, 0, 112" : "200, 200, 240";

      for (const star of stars) {
        star.y -= star.speed;
        if (star.y < -2) {
          star.y = canvas.height + 2;
          star.x = Math.random() * canvas.width;
        }

        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.3 + 0.7;
        const alpha = star.opacity * twinkle * baseAlpha;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${alpha})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    }

    resize();

    if (reducedMotion) {
      drawStatic();
    } else {
      animationId = requestAnimationFrame(draw);
    }

    globalThis.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      globalThis.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}

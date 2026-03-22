"use client";

export default function MouseGradient({
  mouseX,
  mouseY,
}: {
  mouseX: number;
  mouseY: number;
}) {
  return (
    <div aria-hidden="true">
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 lg:block hidden"
        style={{
          background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, var(--color-glow-cursor), transparent 80%)`,
        }}
      />
      <div className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] sm:w-[600px] sm:h-[450px] md:w-[800px] md:h-[600px] z-0 animate-glow-pulse glow-orb-top" />
      <div className="pointer-events-none fixed bottom-0 right-0 w-[300px] h-[200px] sm:w-[450px] sm:h-[300px] md:w-[600px] md:h-[400px] z-0 animate-glow-pulse [animation-delay:2s] glow-orb-bottom" />
    </div>
  );
}

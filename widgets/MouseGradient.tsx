"use client";

export default function MouseGradient({
  mouseX,
  mouseY,
}: {
  mouseX: number;
  mouseY: number;
}) {
  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 lg:block hidden"
        style={{
          background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, var(--color-glow-cursor), transparent 80%)`,
        }}
      />
      <div className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] z-0 animate-glow-pulse glow-orb-top" />
      <div className="pointer-events-none fixed bottom-0 right-0 w-[600px] h-[400px] z-0 animate-glow-pulse [animation-delay:2s] glow-orb-bottom" />
    </>
  );
}

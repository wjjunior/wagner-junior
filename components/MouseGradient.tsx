"use client";

export default function MouseGradient({
  mouseX,
  mouseY,
}: {
  mouseX: number;
  mouseY: number;
}) {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 lg:block hidden"
      style={{
        background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(94, 234, 212, 0.15), transparent 80%)`,
      }}
    />
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wagner Junior | Staff Full Stack Engineer",
  description:
    "Staff Full Stack Engineer with 14+ years of experience in TypeScript, React, Node.js, and AI/LLM integration. I ship fast, own systems end-to-end, and obsess over developer experience and product quality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-bg-primary text-text-secondary font-sans">
        {children}
      </body>
    </html>
  );
}

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
    "Staff Full Stack Engineer with 14+ years shipping scalable systems end-to-end. TypeScript, React, Node.js, and AI-powered platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-bg-primary text-text-secondary font-sans selection:bg-accent/30 selection:text-text-primary">
        {children}
      </body>
    </html>
  );
}

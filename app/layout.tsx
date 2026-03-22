import type { Metadata } from "next";
import { Inter } from "next/font/google";
import JsonLd from "@/shared/seo/JsonLd";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Wagner Junior | Staff Full Stack Engineer",
    template: "%s | Wagner Junior",
  },
  description:
    "Staff Full Stack Engineer with 14+ years building scalable systems end-to-end. Expertise in TypeScript, React, Node.js, PostgreSQL, and AI-powered platforms. Available for staff and senior fullstack roles.",
  keywords: [
    "staff engineer",
    "staff full stack engineer",
    "fullstack developer",
    "full stack developer",
    "senior software engineer",
    "TypeScript developer",
    "React developer",
    "Node.js developer",
    "software architect",
    "Wagner Junior",
  ],
  authors: [{ name: "Wagner Junior", url: "https://wagner-junior.dev" }],
  creator: "Wagner Junior",
  metadataBase: new URL("https://wagner-junior.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wagner-junior.dev",
    siteName: "Wagner Junior",
    title: "Wagner Junior | Staff Full Stack Engineer",
    description:
      "Staff Full Stack Engineer with 14+ years building scalable systems. TypeScript, React, Node.js, and AI-powered platforms.",
  },
  twitter: {
    card: "summary",
    title: "Wagner Junior | Staff Full Stack Engineer",
    description:
      "Staff Full Stack Engineer with 14+ years building scalable systems. TypeScript, React, Node.js, and AI-powered platforms.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light')document.documentElement.setAttribute('data-theme','light')}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <JsonLd />
      </head>
      <body className="min-h-screen bg-bg-primary text-text-secondary font-sans selection:bg-accent/30 selection:text-text-primary">
        {children}
      </body>
    </html>
  );
}

# wagnerjunior.dev

Personal portfolio website for Wagner Junior — Staff Full Stack Engineer with 14+ years of experience building scalable systems in TypeScript, React, and Node.js.

## Features

- Dark and light themes with smooth transitions
- Bilingual support (English / Portuguese) with localStorage persistence
- Animated starfield canvas background
- Mouse-following gradient effect
- Glass-morphism experience cards with hover animations
- Responsive layout with sticky navigation and mobile hamburger menu
- Accessible (skip-to-content, aria labels, focus-visible, live announcements, prefers-reduced-motion)
- SEO optimized (Open Graph image, Twitter card, JSON-LD structured data, sitemap, robots.txt)

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript 5](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) (icons)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## Project Structure

The project follows an FSD-like (Feature-Sliced Design) architecture:

```
app/                → Next.js app router (layout, page, styles, OG/Twitter images)
shared/
  ui/               → Reusable UI primitives (SectionHeader, LinkButton, LiveAnnouncer, icons)
  hooks/            → Custom hooks (useActiveSection)
  providers/        → Context providers (Theme, Language, AppProviders)
  i18n/             → Translations and type definitions
  seo/              → JSON-LD structured data
features/
  theme/            → Theme toggle component
  language/         → Language toggle component
widgets/            → Composed section-level components
  Portfolio.tsx     → Root orchestrator
  Header.tsx        → Sticky navigation bar with mobile menu
  Hero.tsx          → Hero section with gradient text
  About.tsx         → About section with keyword highlighting
  Experience.tsx    → Experience timeline
  Footer.tsx        → CTA footer
  Starfield.tsx     → Canvas starfield animation
  MouseGradient.tsx → Cursor-following gradient
```

## Deployment

Deploy with [Vercel](https://vercel.com/):

```bash
npm run build
```

The site is statically generated and requires no server-side runtime.

## License

Private project. All rights reserved.

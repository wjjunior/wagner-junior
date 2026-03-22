@AGENTS.md

# Project

Personal portfolio website for Wagner Junior — Staff Full Stack Engineer.
Single-page app with bilingual support (EN/PT), dark/light themes, and animated starfield background.

## Tech Stack

- Next.js 16 (App Router) + React 19 + TypeScript 5
- Tailwind CSS 4 (uses `@theme inline` syntax, NOT `@layer`)
- lucide-react for icons
- No other runtime dependencies

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — ESLint
- `npm run start` — serve production build

## Architecture (FSD-like)

```
app/              → Next.js app router (layout, page, globals.css, opengraph-image, twitter-image)
shared/
  ui/             → Reusable UI primitives (SectionHeader, LinkButton, LiveAnnouncer, icons/)
  hooks/          → Custom hooks (useActiveSection)
  providers/      → Context providers (ThemeProvider, LanguageProvider, AppProviders)
  i18n/           → Translation data (translations.ts) and types (types.ts)
  seo/            → JSON-LD structured data (JsonLd.tsx)
features/
  theme/          → ThemeToggle (user-facing theme interaction)
  language/       → LanguageToggle (user-facing language interaction)
widgets/          → Section-level composed components
  Portfolio.tsx   → Root orchestrator (providers, mouse tracking, layout)
  Header.tsx      → Sticky top navigation bar with mobile hamburger menu
  Hero.tsx        → Full-viewport hero section
  About.tsx       → About section with keyword highlighting
  Experience.tsx  → Experience section
  ExperienceCard.tsx → Individual experience entry (glass-card)
  Footer.tsx      → CTA footer with social links
  SocialLinks.tsx → GitHub, LinkedIn, Email links
  Starfield.tsx   → Canvas-based animated star background
  MouseGradient.tsx → Mouse-following radial gradient
```

### Dependency rules

- `shared/` has zero imports from `features/` or `widgets/`
- `features/` imports only from `shared/`
- `widgets/` imports from `shared/` and `features/`
- Never introduce circular dependencies between layers

## Coding Conventions

### General

- TypeScript strict mode. No `any`, no `@ts-ignore`.
- All text content must go through `shared/i18n/translations.ts` — no hardcoded user-facing strings in components.
- Prefer Tailwind utility classes. Only use inline `style={}` for truly dynamic values (e.g., mouse coordinates) and `next/og` image generation (Satori only supports inline styles).
- Use `lucide-react` for icons. Import directly from `"lucide-react"`, or use custom icons in `shared/ui/icons/`.
- Use `@/` path alias for all imports. No relative paths.

### Components

- Server Components by default. Only add `"use client"` when the component uses hooks, event handlers, or browser APIs.
- `app/layout.tsx` and `app/page.tsx` are Server Components. `Portfolio.tsx` is the client boundary.
- Context values must be wrapped in `useMemo` to avoid unnecessary re-renders.
- Every interactive element needs `focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2`.
- Every icon needs `aria-hidden="true"`. Icon-only buttons/links need `aria-label`.
- External links (`target="_blank"`) must include `(opens in new tab)` in their `aria-label`.
- State changes visible to users (theme, language) must announce via `LiveAnnouncer` (`aria-live="polite"`).

### Theming

- Dark theme is the default. Theme is controlled via `data-theme` attribute on `<html>`.
- Colors are defined as CSS custom properties in `globals.css` `@theme inline` block (dark defaults) and overridden in `html[data-theme="light"]`.
- Components should use Tailwind color tokens (`text-text-primary`, `bg-bg-primary`, `text-accent`, etc.) — never hardcode hex values in components.
- The light theme header has a pink `#E80070` accent — its styles are managed via `--color-header-*` custom properties and the `.site-header` CSS class.

### i18n

- All translations live in `shared/i18n/translations.ts`.
- Types are separated in `shared/i18n/types.ts`.
- Access translations via `useLanguage()` hook which returns `{ language, setLanguage, t }`.
- Default language is English. Stored in localStorage under key `"lang"`.

## Quality Gates

- `npm run lint` must pass with zero errors before committing.
- `npm run build` must succeed.
- No SonarQube warnings: no array-index keys, no `role="group"` on divs, no invalid `href="#"`, no hardcoded labels.
- Resolve `prefers-reduced-motion` for both CSS animations and JS canvas.

## Do NOT

- Add Co-Authored-By lines to commits.
- Commit the `docs/` directory (it is gitignored).
- Commit PDF files (gitignored).
- Use `prefers-color-scheme` media queries — theming is manual via toggle.
- Add new dependencies without explicit approval.

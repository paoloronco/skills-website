# Paolo Ronco TechSkills

A public, responsive skills portfolio built with React, TypeScript, Vite, and Tailwind CSS.

The site presents Paolo Ronco's technical profile through categorized skill cards, bilingual UI copy, search, light/dark themes, smooth scrolling, and optional Google Analytics tracking configured through environment variables.

## Features

- Categorized technical skills grouped by domain.
- English and Italian interface support.
- Search across skill names, descriptions, and localized content.
- Light and dark theme toggle with local preference persistence.
- Responsive header with desktop and mobile navigation.
- Smooth scrolling powered by Lenis.
- Animated skill cards with proficiency indicators.
- Optional Google Analytics integration through a private environment variable.
- Vercel-ready static deployment.

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React icons
- Lenis smooth scrolling
- ESLint

## Project Structure

```text
.
|-- public/
|   |-- favicon.ico
|   |-- robots.txt
|   `-- sitemap.xml
|-- scripts/
|   `-- generate-seo.mjs
|-- src/
|   |-- components/
|   |   |-- Footer.tsx
|   |   |-- Header.tsx
|   |   |-- ScrollProgress.tsx
|   |   |-- SkillCard.tsx
|   |   |-- SkillCategory.tsx
|   |   `-- SkillsShowcase.tsx
|   |-- contexts/
|   |   `-- LanguageContext.tsx
|   |-- data/
|   |   `-- skills.ts
|   |-- locales/
|   |   `-- translations.ts
|   |-- types/
|   |   `-- skill.ts
|   |-- utils/
|   |   |-- categoryIcons.tsx
|   |   |-- googleAnalytics.ts
|   |   |-- metadata.ts
|   |   |-- motionProxy.tsx
|   |   `-- siteUrl.ts
|   |-- App.tsx
|   |-- index.css
|   |-- main.tsx
|   `-- vite-env.d.ts
|-- index.html
|-- package.json
|-- tailwind.config.js
|-- tsconfig.json
|-- vercel.json
`-- vite.config.ts
```

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
npm install
```

### Local Development

```bash
npm run dev
```

Vite will start a local development server, usually at:

```text
http://localhost:5173
```

### Production Build

```bash
npm run build
```

The production output is generated in `dist/`.

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Environment Variables

Environment variables are optional for normal local development.

Create a local environment file when needed:

```bash
cp .env.example .env.local
```

### Google Analytics

Google Analytics is loaded only when this variable is present:

```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

The repository includes `.env.example` without private values. Local values should stay in `.env.local`, which is ignored by Git through the existing `*.local` rule.

Important: Google Analytics Measurement IDs are visible in the browser once deployed because tracking runs client-side. Keeping the ID in an environment variable prevents committing it to the public repository, but it does not make it secret at runtime.

### Dual URL Hosting

The same build is configured to run at both:

```text
https://skills.paoloronco.it/
https://paoloronco.it/skills/
```

These variables control URL generation, metadata, robots, and sitemap output:

```env
VITE_ROOT_SITE_URL=https://skills.paoloronco.it
VITE_SUBPATH_SITE_URL=https://paoloronco.it
VITE_SUBPATH_BASE=/skills
VITE_CANONICAL_URL=https://paoloronco.it/skills/
```

`VITE_CANONICAL_URL` is the preferred SEO URL. The default canonical target is the `/skills/` URL on the root domain, while the subdomain remains fully functional.

## Skill Data

The main skill catalog is maintained in:

```text
src/data/skills.ts
```

Skills are grouped by category and support these fields:

- `name`: skill title.
- `description`: default English description.
- `level`: proficiency percentage shown in the card progress bar.
- `handsOn`: optional flag for practical experience.
- `subSkills`: optional list of related tools or technologies.
- `translations`: optional localized fields, currently used for Italian content.

Category labels and UI copy are maintained in:

```text
src/locales/translations.ts
```

## Localization

The app currently supports:

- English (`en`)
- Italian (`it`)

The selected language is stored in `localStorage` and applied to the document `lang` attribute.

## Theming

The app supports light and dark themes.

The selected theme is stored in `localStorage` and applied through the `data-theme` attribute on the root HTML element. Theme colors and visual tokens are defined in:

```text
src/index.css
```

## Deployment

This project is suitable for static hosting.

### Vercel

The repository includes `vercel.json` with security headers and SPA rewrites for both the subdomain root and `/skills` path.

Recommended Vercel settings:

- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

If Google Analytics should be enabled in production, add this environment variable in the Vercel project settings:

```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Add the dual URL variables from the environment section as production environment variables if the deployed domains or canonical preference change. The defaults already match `skills.paoloronco.it` and `paoloronco.it/skills`.

The `/skills/*` rewrites intentionally alias built assets and static files before the SPA fallback:

- `/skills/assets/*` -> `/assets/*`
- `/skills/api/*` -> `/api/*`
- `/skills/favicon.ico` -> `/favicon.ico`
- `/skills/robots.txt` -> `/robots.txt`
- `/skills/sitemap.xml` -> `/sitemap.xml`
- `/skills/*` -> `/index.html`

The final root fallback keeps direct refreshes and client-side routes working on `skills.paoloronco.it/*`.

## Security Headers

Security headers are configured for both local preview/development and Vercel deployment:

- `Strict-Transport-Security`
- `Referrer-Policy`
- `X-Content-Type-Options`
- `X-Frame-Options`
- `Permissions-Policy`
- `Content-Security-Policy-Report-Only`
- `X-XSS-Protection`

The CSP is currently report-only, which allows monitoring and iteration without blocking resources during development.

## Available Scripts

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Builds the production site into `dist/`.

```bash
npm run preview
```

Serves the production build locally.

```bash
npm run lint
```

Runs ESLint across the project.

## Maintenance Notes

- Keep public sample configuration in `.env.example`.
- Keep private local configuration in `.env.local`.
- Add or edit skills in `src/data/skills.ts`.
- Add interface copy and category labels in `src/locales/translations.ts`.
- Keep generated build output in `dist/` out of version control.
- Review security headers when adding new external scripts, fonts, APIs, or embedded resources.

## License

No license has been declared yet. Add a license before reusing or distributing this project beyond its intended public repository.

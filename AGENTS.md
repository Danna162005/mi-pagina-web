# AGENTS.md

Overview of this codebase for developers and AI agents.

## Project Overview

Single-page site for **STREAM STORE**, a WhatsApp-driven streaming reseller. Visitors pick one of four
menu options (1 month, 3 months, 6 months, Mega Combos) and see the corresponding pricing image(s)
that were supplied by the store owner. There is no CMS or database — pricing lives entirely in static
images because the source-of-truth graphics are designed and updated by the client outside this repo.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Deployment | Netlify |

## Directory Structure

```
├── public/precios/        # Pricing/combo images shown on the page (1mes, 3meses, 6meses, combo1-4)
├── src
│   ├── routes
│   │   ├── __root.tsx      # Root HTML shell + SEO metadata
│   │   └── index.tsx       # The entire app: menu tabs + WhatsApp CTA
│   ├── router.tsx          # TanStack Router setup
│   └── styles.css          # Tailwind import + small custom animations
├── netlify.toml
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Key Concepts

- `src/routes/index.tsx` holds local `useState` for the active menu tab (`1mes` | `3meses` | `6meses` | `combos`)
  and a `PLANS` array mapping each tab to its label and image path(s) in `public/precios/`.
- The WhatsApp number and deep link (`wa.me/593998805732`) are defined once at the top of `index.tsx`
  and reused by both the header link and the floating action button.
- Mega Combos renders 4 images in a responsive grid; the other three tabs render a single image.

## Conventions

- Routes are file-based (TanStack Router): `__root.tsx` is the shared shell, `index.tsx` is `/`.
- Tailwind utility classes only, dark theme (`#0a0a12` background) — no light mode.
- Do not alter the content of the pricing images or invent new prices; if pricing changes, replace the
  image files in `public/precios/` with new ones from the client.

## Development Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
```

# Stream Store

Landing page for **STREAM STORE**, a streaming subscription reseller. The page is a single mobile-first
screen with four menu options — Precios por 1 mes, 3 meses, 6 meses and Mega Combos — each showing the
corresponding pricing images provided by the store. A floating WhatsApp button and header link open a
chat with the store's WhatsApp number (+593 998 805 732) so customers can order directly.

## Tech stack

- [TanStack Start](https://tanstack.com/start) (React 19 + TanStack Router)
- Vite 7
- Tailwind CSS 4
- Deployed on Netlify

## Running locally

```bash
npm install
npm run dev
```

The app runs at `http://localhost:3000` by default (or via `netlify dev` for full Netlify emulation).

## Build

```bash
npm run build
```

## Content

Pricing images live in `public/precios/` and are shown as-is — no prices are hardcoded or generated in
code. To update pricing, replace the corresponding image file with a new one from the store owner.

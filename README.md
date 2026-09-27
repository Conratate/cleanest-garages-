# Cleanest Garages

Website for Cleanest Garages: garage cleanouts, buying customers' valuables, junk removal, and floor cleaning.

## Getting Started

Requires Node.js 20.9+.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Editing the site

- **Prices, services, FAQ, and "what we buy"**: all in `lib/content.ts`. Change a price there and it updates everywhere on the site.
- **Before/after slider**: uses the illustrations in `public/illustrations/`. To use real job photos, add them to `public/` and change `beforeSrc` / `afterSrc` in `components/sections/hero.tsx`.
- **Domain**: set in `lib/site.ts`.

## Quote form (Netlify Forms)

The quote form submits to Netlify Forms. `public/__forms.html` is a hidden copy of the form that Netlify reads at deploy time. If you add or rename a field in `components/quote-form.tsx`, add the same field name to `public/__forms.html`.

In the Netlify dashboard:

1. **Forms**: enable form detection, then redeploy.
2. **Forms > Form notifications**: add an email notification so new quote requests go to your inbox.

The form only works on the deployed Netlify site, not on `localhost`.

## Tech Stack

- Next.js 16, React 19, TypeScript
- Tailwind CSS 4
- Hosted on Netlify

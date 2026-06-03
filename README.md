# Rakma Global — Next.js

A production-ready Next.js 14 conversion of the Rakma Global v3 website.

## Tech stack

- **Next.js 14** — App Router
- **TypeScript** — full type safety
- **CSS** — global CSS with CSS variables (no Tailwind needed)
- **next/image** — optimised image loading with Unsplash CDN

## Project structure

```
rakma-global/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # Root page (renders RakmaApp)
│   └── globals.css         # All CSS variables + styles
├── components/
│   ├── RakmaApp.tsx        # Root client component — orchestrates pages & state
│   ├── Navbar.tsx          # Fixed navigation with scroll effect
│   ├── VideoIntro.tsx      # Cinematic intro overlay
│   ├── Ticker.tsx          # Scrolling property ticker
│   ├── HomePage.tsx        # Full home page (all sections)
│   ├── PropertiesPage.tsx  # Properties page with filter bar
│   ├── PropertyCard.tsx    # Reusable property card
│   ├── PropertyModal.tsx   # Property detail modal + return calculator
│   └── useReveal.ts        # Scroll reveal + counter animation hooks
├── lib/
│   └── data.ts             # All static data (properties, testimonials, insights)
├── next.config.js
├── tsconfig.json
└── package.json
```

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev
# Open http://localhost:3000

# 3. Build for production
npm run build
npm run start
```

## Adding a new property

Open `lib/data.ts` and add a new entry to the `PROPERTIES` array:

```ts
{
  id: 'my-property',
  loc: 'Toronto, ON · M5V 1A1',
  city: 'Toronto',
  address: '123 King St W',
  postalCode: 'M5V 1A1',
  sub: 'Condo unit · Downtown Toronto',
  img: 'https://images.unsplash.com/...', // or your own hosted image
  stats: [
    { v: '8.5%', k: 'Yield p.a.' },
    { v: '$750K', k: 'Value' },
    { v: '200', k: 'Investors' },
    { v: '5 yrs', k: 'Hold' },
  ],
  pct: 40,
  raised: '$300K',
  rem: '$450K',
  desc: 'Your property description here.',
  yield: 8.5,
  badge: 'open',    // 'open' | 'new' | 'hot' | 'closing'
  tags: ['all', 'open', 'toronto'],  // used for filtering
  value: '$750K',
  investors: 200,
}
```

Then add 'toronto' as a filter option in `components/PropertiesPage.tsx`.

## Deploying to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or connect your GitHub repo at vercel.com for automatic deployments
```

## Environment variables

No environment variables required for the current version.
If you add a backend, create `.env.local`:

```
NEXT_PUBLIC_API_URL=https://api.rakmaglobal.com
```

## Customising brand colors

All colors are CSS variables in `app/globals.css`:

```css
:root {
  --terra: #C8440E;    /* Primary brand orange-red */
  --terra2: #E05A2B;   /* Lighter orange (hover states) */
  --bg: #FDFAF6;       /* Warm off-white background */
  --ink: #1C1917;      /* Deep charcoal text */
  /* ... */
}
```

## Video

The hero background video uses a Pexels URL which may require a direct Pexels account link for production. Replace with your own hosted video:

```tsx
// In components/VideoIntro.tsx and components/HomePage.tsx
<source src="/videos/hero.mp4" type="video/mp4" />
```

Place your video at `public/videos/hero.mp4`.

---

Built by Rakma Global · rakmaglobal.com

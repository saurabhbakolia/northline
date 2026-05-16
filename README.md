# comptrack-dummy-site

A standalone **dummy competitor marketing site** (“Northline”) for local CompTrack testing. It is a sibling folder to `comptrack/` and `comptrack-engine/` at the workspace root — not nested inside them.

## Stack

- **Vite 6** + **React 19** + **TypeScript**
- Single-page marketing site: hero, features, pricing (Free / Pro / Enterprise), enterprise CTA

## Run locally

```bash
cd comptrack-dummy-site
npm install
npm run dev
```

Dev server: **http://localhost:5199** (fixed port in `vite.config.ts`).

Production build:

```bash
npm run build
npm run preview   # serves dist/ on http://localhost:5199
```

## CompTrack integration

CompTrack does **not** auto-discover this project. Competitors are registered in the **CompTrack dashboard** (or Supabase `tracked_competitors` table) by URL. The engine crawls whatever `competitor_url` you save.

### 1. Start this dummy site

```bash
cd comptrack-dummy-site && npm run dev
```

### 2. Add it as a tracked competitor

In the CompTrack app (`comptrack/`, typically `npm run dev` on port 3000):

1. Sign in and open the dashboard.
2. Add a competitor with:
   - **Competitor name:** `Northline` (or any label)
   - **Competitor URL:** `http://localhost:5199/` (must be a valid URL; trailing slash is fine)
   - **Startup URL:** your own product URL (any valid URL for testing, e.g. `http://localhost:3000`)
   - **Monitoring frequency:** daily or weekly

### 3. Crawl with comptrack-engine

With `comptrack-engine` running and Supabase configured (see `comptrack-engine/README.md`):

```bash
curl -X POST "http://localhost:8000/crawl/<tracked_competitor_uuid>"
```

If `CRAWL_API_KEY` is set, include header `X-CompTrack-Engine-Key: <value>`.

The engine loads the homepage in Chromium, extracts visible copy (hero, features, pricing section), and stores snapshots for diffing.

### 4. Test change detection

Edit copy in `src/App.tsx` (hero headline, pricing amounts, or plan features), save, and trigger another crawl. The engine compares content hashes and returns a line diff when the homepage text changes.

### Notes

- **Localhost only:** The crawler must run on the same machine (or network) that can reach `localhost:5199`.
- **Homepage-only:** CompTrack MVP crawls the single URL you register; pricing lives in an on-page `#pricing` section, not a separate route.
- **No env vars** are required for this dummy site itself.

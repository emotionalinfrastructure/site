# Emotional Infrastructure Site

Production website for Emotional Infrastructure, built with Next.js and Tailwind CSS.

## Repository

GitHub repo: `emotionalinfrastructure/site`

## Stack

- Next.js 14
- React 18
- Tailwind CSS 3
- TypeScript
- GitHub Pages deployment target (static export)

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm install
npm run build
```

## Deployment

Deployment is automatic. Every push to `main` triggers the
`.github/workflows/pages.yml` workflow, which builds a static export
(`GITHUB_PAGES=true npm run build`) and publishes `out/` to GitHub Pages.
No manual build, upload, or third-party dashboard is needed.

The `.github/workflows/build.yml` workflow runs a build check on every pull
request and push to `main`.

## URL

The site is served at the default GitHub Pages URL:

```text
https://emotionalinfrastructure.github.io/site
```

Because the site lives under the `/site` path, the static export sets
`basePath`/`assetPrefix` to `/site` (see `next.config.mjs`) so assets and links
resolve correctly.

### Custom domain cutover

When DNS for `emotionalinfrastructure.org` points at GitHub Pages:

1. Add the domain in **Settings → Pages → Custom domain**.
2. Create a repository variable **Settings → Secrets and variables → Actions →
   Variables**: `PAGES_CUSTOM_DOMAIN` = `emotionalinfrastructure.org`.
3. Re-run the Deploy to GitHub Pages workflow (or push to `main`).

The workflow then writes the `CNAME` file and builds without
`basePath`/`assetPrefix`, so the site serves from the domain root. All internal
links use `next/link` and adjust automatically. External references that still
point at the `github.io` URL (for example the Trust-Receipts overview page)
should be swapped to the domain at the same time.

## Current pages

- `/`
- `/research`
- `/creator-kit`
- `/audit`
- `/articles`
- `/media-kit`
- `/proof`
- `/contact`

## Remaining launch items

- Add checkout links for Creator Kit and Creator AI Trust Audit
- Add contact form or email routing
- Add founder photo, product mockups, and article images
- Add newsletter signup integration
- Add proof/documentation links

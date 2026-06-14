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
resolve correctly. To move to a custom domain later, add it in
**Settings → Pages**, write a `CNAME` file in the deploy workflow, and remove
the `basePath`/`assetPrefix` so the site serves from the root.

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

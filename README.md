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

## Domain

The site is served at the custom domain `emotionalinfrastructure.org`. The
deploy workflow writes the `CNAME` marker automatically. The custom domain is
configured once in **Settings → Pages**, and DNS at the domain registrar must
point to GitHub Pages (A records to the GitHub Pages IPs, or an `ALIAS`/`CNAME`
to `emotionalinfrastructure.github.io`).

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

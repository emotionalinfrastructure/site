# Emotional Infrastructure Site

Production website for Emotional Infrastructure™, built with Next.js, React, TypeScript, and Tailwind CSS.

## Canonical deployment

The branded production site is intended to run at:

```text
https://emotionalinfrastructure.org
```

The canonical AI Trust Receipts routes are:

```text
https://emotionalinfrastructure.org/trust-receipts
https://emotionalinfrastructure.org/trust-receipt
```

`/trust-receipts` is the authoritative project home. `/trust-receipt` is the interactive browser demonstration.

## Cloudflare Pages configuration

Use the **Next.js (Static HTML Export)** deployment model:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | `/` |

`next.config.mjs` always produces a static export so Cloudflare receives a complete `out/` directory on every production build.

Every push to `main` should trigger a new Cloudflare Pages deployment when the project is connected to this repository.

## GitHub Pages fallback

The repository retains `.github/workflows/pages.yml` as a supporting deployment path. In GitHub Pages project-path mode, the site is built under `/site`. When a GitHub Pages custom domain variable is explicitly configured, it can build from the domain root.

GitHub Pages is not the canonical branded production host unless the hosting architecture is deliberately changed.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm ci
npm run build
```

The static output is written to:

```text
out/
```

## Current routes

- `/`
- `/services`
- `/trust-receipts`
- `/trust-receipt`
- `/research`
- `/implementation`
- `/artifacts`
- `/review`
- `/contact`
- `/creator-kit`
- `/audit`
- `/articles`
- `/media-kit`
- `/proof`

## Release consistency requirements

The public AI Trust Receipt pages must consistently state:

- Candidate version `v0.1.1`
- Six interactive demo presets
- Nine separate conformance vectors
- Restricted source-equivalent browser/Python digest behavior
- No issuer-authentication, universal parity, certification, audit, or legal-compliance claim

The phrase `byte-identical port` must not be used for the browser implementation.

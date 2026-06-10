# Emotional Infrastructure Site

Production website for Emotional Infrastructure, built with Next.js and Tailwind CSS.

## Repository

GitHub repo: `emotionalinfrastructure/site`

## Stack

- Next.js 14
- React 18
- Tailwind CSS 3
- TypeScript
- Vercel deployment target

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

## Vercel deployment

Import this repository into Vercel:

```text
Add New → Project → Import Git Repository → emotionalinfrastructure/site
```

Recommended settings:

```text
Framework Preset: Next.js
Root Directory: ./
Install Command: npm install
Build Command: npm run build
Output Directory: .next
```

A `vercel.json` file is included for deployment defaults.

## Domain

After deployment, add the custom domain inside Vercel:

```text
emotionalinfrastructure.org
```

Use the DNS records Vercel provides for the root domain and any `www` alias.

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

- Import GitHub repo into Vercel
- Connect `emotionalinfrastructure.org`
- Add checkout links for Creator Kit and Creator AI Trust Audit
- Add contact form or email routing
- Add founder photo, product mockups, and article images
- Add newsletter signup integration
- Add proof/documentation links

# Emotional Infrastructure Website Launch Checklist

## 1. Vercel Import

- [ ] Open Vercel
- [ ] Add New Project
- [ ] Import `emotionalinfrastructure/site`
- [ ] Confirm framework is Next.js
- [ ] Confirm root directory is `./`
- [ ] Confirm install command is `npm install`
- [ ] Confirm build command is `npm run build`
- [ ] Deploy

## 2. Build Verification

- [ ] Confirm Vercel build succeeds
- [ ] Open the generated `.vercel.app` URL
- [ ] Test homepage
- [ ] Test `/research`
- [ ] Test `/creator-kit`
- [ ] Test `/audit`
- [ ] Test `/articles`
- [ ] Test `/media-kit`
- [ ] Test `/proof`
- [ ] Test `/contact`

## 3. Domain Setup

- [ ] Add `emotionalinfrastructure.org` in Vercel project settings
- [ ] Add `www.emotionalinfrastructure.org` if desired
- [ ] Update DNS records where the domain is registered
- [ ] Confirm SSL certificate is active
- [ ] Confirm root domain resolves
- [ ] Confirm www redirects correctly

## 4. Checkout Links

Replace placeholders in `lib/site.ts`:

- [ ] `creatorKitCheckoutUrl`
- [ ] `auditCheckoutUrl`

Recommended providers:

- Stripe Payment Links
- Lemon Squeezy
- Gumroad

## 5. Contact and Newsletter

Replace placeholders in `lib/site.ts`:

- [ ] `contactFormUrl`
- [ ] `newsletterUrl`

Recommended form providers:

- Tally
- Typeform
- Formspree
- ConvertKit
- Beehiiv

## 6. Brand Assets

Add to `public/images/`:

- [ ] Founder photo
- [ ] Logo or wordmark
- [ ] Creator Kit mockup
- [ ] Audit offer graphic
- [ ] Article cover images
- [ ] Media kit image assets

## 7. Content Finalization

- [ ] Add final founder bio
- [ ] Add proof/documentation links
- [ ] Add published articles
- [ ] Add product delivery link for Creator Kit
- [ ] Add privacy policy
- [ ] Add terms of use
- [ ] Add AI disclosure statement

## 8. Final Pre-Launch Review

- [ ] Test all links
- [ ] Test mobile layout
- [ ] Test checkout links
- [ ] Test contact form
- [ ] Confirm spelling and trademark usage
- [ ] Confirm no unsupported legal or certification claims
- [ ] Confirm analytics setup if used
- [ ] Publish launch announcement

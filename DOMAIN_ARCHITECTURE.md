# Emotional Infrastructure Domain Architecture - Implementation Guide

## ✅ COMPLETED (Repo Level)

### SEO & Crawl Control
- ✅ `public/robots.txt` - Disallows legacy B12 paths, allows main content, points to sitemap
- ✅ `public/sitemap.xml` - Lists all 10 canonical URLs for main site + demo
- ✅ Canonical `metadataBase` set to `https://emotionalinfrastructure.org`

### Routing & Redirects  
- ✅ `public/_redirects` (Cloudflare-format) - Handles legacy path redirects
- ✅ `/index` → `/`
- ✅ `/projects` → `/research/`
- ✅ `/affective-information-safeguarding` → `/research/`
- ✅ And 8 other legacy B12 path redirects

### Metadata & Social Sharing
- ✅ Root layout: JSON-LD Organization schema + proper OpenGraph
- ✅ `/trust-receipt` page: Metadata points to `demo.emotionalinfrastructure.org`
- ✅ `/trust-receipts` page: Proper OpenGraph metadata
- ✅ All pages have proper robots directives

### Application Structure  
- ✅ `/demo` → re-exports `/trust-receipt` (interactive demo)
- ✅ `/trust-receipt` → Full demo with TrustReceiptDemo component
- ✅ `/trust-receipts` → Info page with CTA to `demo.emotionalinfrastructure.org`
- ✅ Build verified: 20 routes, all assets load correctly

---

## ⏳ REQUIRES MANUAL CLOUDFLARE CONFIGURATION

### 1. DELETE OLD ORIGINS & BINDINGS
- Remove any B12 business domain bindings
- Remove any old worker domain associations
- Verify no legacy origin records exist

### 2. CREATE CUSTOM DOMAIN FOR DEMO  
- Add custom domain: `demo.emotionalinfrastructure.org`
- Serve `/demo` or `/trust-receipt` as root landing
- Cloudflare auto-provisions SSL certificate

### 3. CANONICALIZE www HOSTNAME
- Create redirect rule: `www.emotionalinfrastructure.org/*` → `https://emotionalinfrastructure.org/$1`
- Status: 301 permanent
- Preserve path and query string

### 4. REDIRECT OLD WORKER URL
- If `ei-trust-receipt.brittanywright.workers.dev` exists, add redirect handler:
  - Redirect to `demo.emotionalinfrastructure.org` with 308 (preserve method)
  - Or delete the old Worker completely

### 5. CONFIGURE SSL/TLS
- Verify certificate covers all three domains
- Set minimum TLS version to 1.3

### 6. CACHE & CDN SETTINGS
- Cache level: "Cache Everything"
- Browser cache TTL: 1 day
- Edge cache TTL: 7 days for HTML
- **Purge all cache** after deployment

---

## ✅ FINAL VERIFICATION MATRIX

After Cloudflare setup, verify:

| URL | Status | Content |
|-----|--------|---------|
| `https://emotionalinfrastructure.org/` | 200 | Main EI site |
| `https://www.emotionalinfrastructure.org/` | 301 to apex | Redirect working |
| `https://demo.emotionalinfrastructure.org/` | 200 | Interactive demo |
| `https://emotionalinfrastructure.org/trust-receipts/` | 200 | Info page |
| `https://emotionalinfrastructure.org/index` | 301 to / | Legacy redirect |
| `https://emotionalinfrastructure.org/projects` | 301 to /research/ | Legacy redirect |
| `https://ei-trust-receipt.brittanywright.workers.dev/` | 301/308 to demo | Old URL redirect |

### Additional Checks
- No Cloudflare 525 errors (SSL handshake)
- Navigation links work
- Interactive demo controls respond
- Sitemap accessible at `/sitemap.xml`
- Robots.txt accessible at `/robots.txt`
- No mixed-content warnings
- Mobile layout responsive

---

## 📋 GOOGLE SEARCH CONSOLE CLEANUP

After going live:
1. Remove old URLs from GSC (workers.dev, www, legacy paths)
2. Submit new canonical URLs
3. Verify domain ownership
4. Monitor for 404s and crawl errors

---

See the full implementation summary in the commit message: `git show 8b3d19b`

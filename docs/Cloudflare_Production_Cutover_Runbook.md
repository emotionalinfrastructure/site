# Cloudflare Production Cutover Runbook

## Scope

This runbook governs the production cutover for `demo.emotionalinfrastructure.org` from the current static overview deployment to the source-controlled `ei-trust-receipt` Cloudflare Worker.

The objective is not merely to deploy code. The objective is to prove that the public endpoint is operational, secure, and serving the intended interactive AI Trust Receipt demo.

## Production completion rule

The cutover is not complete until all of the following are true:

1. `https://demo.emotionalinfrastructure.org/` serves the interactive Trust Receipt demo.
2. `http://demo.emotionalinfrastructure.org/` redirects to HTTPS with `301` or `308`.
3. The HTTPS response returns `text/html; charset=utf-8` for HTML.
4. Required security headers are present.
5. The GitHub Actions production smoke test passes three repeated checks.
6. The Chromium production browser test passes.
7. Issue #13 is updated with the production evidence and then closed.

## Pre-cutover inventory

Before deploying, record the current state:

- Current DNS record for `demo.emotionalinfrastructure.org`
- Whether the record is proxied through Cloudflare
- Any GitHub Pages custom-domain configuration claiming the hostname
- Existing CNAME file, if any
- Existing Cloudflare Worker custom-domain or route binding
- Rollback target, including the previous record value and hosting target

Do not remove or replace the existing DNS binding until the rollback value has been captured.

## Required GitHub environment secrets

The protected production workflow requires these repository or environment secrets:

```text
CLOUDFLARE_API_TOKEN
CLOUDFLARE_ACCOUNT_ID
```

The Cloudflare API token should be scoped narrowly to deploy the Worker and manage the required Worker route/custom-domain configuration for the relevant account and zone.

## GitHub workflow

The production workflow is:

```text
Validate and deploy Cloudflare demo
```

It performs:

1. Dependency installation
2. Trust Receipt integrity verification
3. Static export build
4. Worker dry run
5. Local Worker startup
6. Chromium browser verification
7. Authenticated Cloudflare Worker deployment
8. Three repeated production smoke checks
9. Production Chromium verification

## Cloudflare cutover steps

1. Confirm the Cloudflare account owns or manages `emotionalinfrastructure.org`.
2. Confirm `demo.emotionalinfrastructure.org` has no conflicting GitHub Pages custom-domain claim.
3. Confirm the existing DNS record and save its rollback value.
4. Confirm the Worker name is `ei-trust-receipt`.
5. Confirm `wrangler.jsonc` includes the custom-domain route for `demo.emotionalinfrastructure.org`.
6. Run the protected GitHub Actions workflow from `main`.
7. Wait for the Worker custom-domain certificate to become active.
8. Run the production smoke test.
9. Run the production browser verification.
10. Update issue #13 with the results.

## Expected production behavior

### HTTPS request

```text
GET https://demo.emotionalinfrastructure.org/
Expected: 200
Expected title: AI Trust Receipt — Interactive Demo
Expected content: Six gate presets, Verify receipt, Tamper with a field
```

### HTTP request

```text
GET http://demo.emotionalinfrastructure.org/
Expected: 301 or 308
Expected Location: https://demo.emotionalinfrastructure.org/
```

### Required response headers

```text
content-security-policy
strict-transport-security
x-content-type-options
x-frame-options
referrer-policy
permissions-policy
cross-origin-opener-policy
cross-origin-resource-policy
```

## Rollback criteria

Rollback if any of the following occur:

- The production endpoint returns 5xx after deployment.
- The custom-domain certificate does not become active.
- The root path does not serve the interactive demo.
- HTTP does not redirect to HTTPS.
- Core security headers are absent.
- The production browser test fails in a way that affects user functionality.

## Rollback process

1. Restore the previous DNS/custom-domain binding captured during pre-cutover inventory.
2. Confirm the previous page returns `200`.
3. Reopen or update issue #13 with the rollback reason.
4. Do not close issue #13 until a corrected deployment passes production verification.

## Evidence to record before closing issue #13

Paste the following into issue #13 after successful cutover:

```text
Production verification timestamp UTC:
Deployment commit SHA:
Cloudflare Worker name:
HTTPS status:
HTTP redirect status:
Final URL:
Page title:
Interactive demo text present:
Security headers present:
Smoke test repetitions passed:
Chromium production test result:
Known limitations:
```

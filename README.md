# SJ Windows

Static site for regular Colchester window cleaning, with direct SMS, WhatsApp, telephone and email contact. No backend, form service, database, paid service or build dependency is required. The optional Smart Quote calculator runs locally; it does not submit or book work.

`index.html` is the primary general Colchester page. `window-cleaner-colchester.html` is a quote checklist; `residential-window-cleaning-colchester.html` explains access and preparation. Existing local/service URLs remain pending owner evidence. See [CODEX_CHANGES.md](CODEX_CHANGES.md) for implementation status and limits.

## Generate and verify

Requires Node 22+ and Python 3.12+; no package installation.

```sh
node scripts/generate-site.mjs
node scripts/validate-local-pages.mjs
node scripts/test-contact-flow.mjs
node scripts/test-analytics.mjs
python tools/static_site_audit.py . --out docs/qa/after-static-audit.json
python tools/verify_site.py
node scripts/check-regeneration.mjs
```

The combined generator runs local pages, priority area overrides, then car pages and refreshes content hashes in app/analytics/stylesheet URLs. Edit templates and run the combined command before committing. Hand-authored pages include home, contact, residential Colchester, prices, services, reviews/before-booking and legacy local pages outside the datasets. Common changes need both templates and hand-authored pages. The regeneration test compares all root HTML and sitemap hashes.

`scripts/approved-page-paths.json` freezes the existing inventory. `page-output.mjs` rejects new paths until real service/local evidence is reviewed and the allowlist deliberately amended. Do not add speculative street pages. Sitemap omits 404/noindex HTML and fabricated `lastmod` dates.

Preview: `python -m http.server 8878 --bind 127.0.0.1` in this directory. Browser and physical-device checks are separate from static tests.

## Business details and measurement

`app.js` contains existing contacts and unchanged calculator rates. Pricing, service availability, route capacity, photos and testimonials need evidence: [owner handoff](docs/OWNER_HANDOFF.md). Keep customer details out of this public repository; the empty [lead log](docs/lead-log-template.csv) is for private use.

Direct GA4 through `analytics.js` is the sole tag path and only runs on the production HTTPS domains. Calculator drafts are created on click, outside DOM links, with personal details added in the messaging app. See [measurement notes](docs/MEASUREMENT.md) for event definitions, published GTM audit, completed browser checks and remaining account/device QA.

## Release boundary

GitHub Pages publishes `main`, root `/`, at `https://sjwindowscolchester.co.uk/`. **Merging main may deploy; do not merge or deploy before owner approval.** The review branch and PR validation workflow do not deploy.

The owner approved publishing the 8 November 2026 release. Google Business Profile and new photos are deferred; see [release scope](docs/RELEASE_NOTES_2026-11-08.md). Subsequent releases still need appropriate authorization.

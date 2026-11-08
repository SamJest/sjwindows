# Growth pack implementation — 8 November 2026

Baseline: current `SamJest/sjwindows` main, `dff7448f49deedccfcf1479f301424ac227c03c7`; review branch `codex/growth-pack-2026-11-08`. The supplied pack informed implementation; it did not authorize deployment, customer contact or account changes. The pre-existing dirty checkout is preserved; changes use a separate clone.

**Review follow-up completed:** calculator drafts now use click-only buttons with no personal-detail fields or message hrefs. Shared analytics runs only on production HTTPS hosts. The published GTM container was verified empty. Browser QA now passes 24 representative page/viewport checks, menu/Escape, calculator/keyboard submit and FAQ disclosure. Content-hashed assets fix stale-script mismatches; desktop contact visibility, top-bar contrast and focus outlines were improved. See [follow-up evidence](docs/qa/review-followup.md). Physical-device delivery and authenticated GA4 receipt remain unverified; Google Analytics currently requires sign-in.

## Main changes

- Retired two placeholder-backed Web3Forms interfaces and 15 additional legacy mailto forms. All 17 enquiry forms become direct postcode-first panels; the optional calculator remains. No fake delivery or booking confirmation. Existing business contacts are unchanged.
- Kept direct GA4; removed GTM snippets, noscript iframe and runtime injector from all pages and generators. One custom event per contact action replaces duplicate SMS and calculator-send events. Custom analytics never receive names, postcodes, free text or message URLs. Page context drops query strings/fragments. Private analytics account QA remains open.
- Homepage now prioritizes regular windows, frames/sills, 4/6/8 weeks, six-week preference and quote → route/price → agreed schedule. Keyword navigation, unsupported recent-work/enquiry examples and the large car/extras promotion are removed. Existing service pages remain reachable.
- Homepage is primary generic Colchester intent. The clicked Colchester support URL becomes quote preparation; residential Colchester focuses on access/preparation, with distinct metadata. Self canonicals and all clicked paths remain; no redirects or noindex shortcuts.
- Updated all three generators and output. Removed public search-facing filler, speculative street/property/route assertions and unverified testimonial sections. Reviews URL now provides before-booking guidance. Exact former quotes remain in Git history. No fabricated proof replaces them.
- Added platform-aware SMS body links, call fallback, contact tap targets, focus styles, safe-area spacing, hidden-menu focus handling/Escape and FAQ `aria-controls`/hidden state. Actual rendered/device QA is still required.
- Added deterministic combined generation, an approved-path guard against new speculative pages, independent audits, contact/calculator regression checks and a PR-only validation workflow. No new backend or dependency installation.

## Backlog status

| ID | Proposed work / remaining evidence |
| --- | --- |
| P0-01 | All enquiry forms removed; direct routes and click-only calculator drafts available. Browser controls and URI logic pass; physical phone/app delivery untested. |
| P0-02 | One production-only GA4 sender; no personal fields or message hrefs. Published GTM verified empty. Authenticated DebugView receipt and account consent/report settings still need owner access. |
| P0-03 | Full URL decision register and live baseline. Exact excluded URLs/Google canonicals need owner GSC detail. |
| P1-01 | Homepage offer, postcode-first CTA, included work, frequencies and clear process implemented. |
| P1-02 | Colchester checklist and residential preparation roles distinguished. No URL consolidation before query/page evidence. |
| P1-03 | Search filler, speculative public locality assertions and redundant sections removed from edited templates. New generator paths blocked. Real local distinctiveness still needs evidence. |
| P1-04 | Home extras de-emphasized; existing no-repair/install/house-roof-work scope boundaries retained. Actual ancillary services remain VERIFY_SCOPE; URLs/prices retained. |
| P1-05 | Every clicked URL in supplied page export preserved. Method/local pages receive shared conversion and analytics fixes. |
| P1-06 | Existing business contacts retained, no self-serving ratings added. Owner GBP checklist supplied; no listing altered. |
| P1-07 | Unverified testimonials and unsupported job/enquiry examples withheld. Real images, authentic reviews and consent remain owner tasks. |
| P1-08 | Direct panels, optional calculator and accessibility fixes. Six representative pages pass 360/375/390/1440px checks; menu, calculator and FAQ exercised. Physical-phone delivery remains untested. |
| P2-01 | Clear guide/final-quote boundary; numerical rates and Street Saver agreements preserved. New price examples/margin review need approval. |
| P2-02 | Canonicals, sitemap, fragments, assets, links, JSON-LD and live status baseline checked. Fixed historical lastmod omitted. |
| P2-03 | Controlled CTA metadata and empty private booking log template. No booked-lead event invented. |
| P2-04 | Focus/menu/FAQ/tap-target changes and shorter homepage; working browser checks and screenshots, improved desktop CTA visibility/top-bar contrast. No PageSpeed/CWV or complete accessibility certification claimed. |
| P3-01 | Truthful owner review/referral copy and 4/8/12-week plan. Nothing sent or posted. |

## URL architecture and coverage

[URL decision register](docs/url-decision-register.csv) covers every HTML URL: old/new mapping, purpose, available GSC clicks/impressions, live status/canonical, proposed canonical, inbound links, sitemap, action/reason and unresolved owner evidence. [Changed URL register](docs/changed-urls.csv) lists changed public pages. No new URLs, redirects, page deletions or mass noindex are introduced. Sitemap remains 111 indexable destinations, plus a separate noindex 404 document.

On 8 November all 111 sitemap HTML URLs returned 200 with expected self canonicals; robots and sitemap returned 200. `/404.html` returns 200 as a file, while a genuinely nonexistent URL returns HTTP 404. HTTP and HTTPS-www home variants returned HTTP 301 to HTTPS non-www home. These are existing hosting responses, not new redirects. Full observed records: [live baseline](docs/qa/live-before.json). They do not establish GSC index status.

The generator assigned unverified `2026-07-28` lastmod dates uniformly. Those fields are omitted rather than falsely refreshed. No invented change dates are added.

## Test results and limits

| Check | Before | After |
| --- | --- | --- |
| Existing validator | Pass: 112 HTML / 59 required local pages | Pass: same inventory |
| Supplied independent audit | 0 errors, 2 warnings, 111 dual-tag info records | 0 errors, 0 warnings, 0 info records |
| Enquiry forms | 2 Web3Forms + 15 mailto | 0 enquiry forms; 1 optional calculator |
| Additional independent checks | Not present | Pass: fragments/assets, unique IDs, title/canonical counts, 92 parseable static JSON-LD blocks, GA configuration and retired-form checks |
| Contact/calculator tests | Not present | Pass: one event/action, private-message canaries excluded, analytics-blocked fallback, Android/iOS/iPad SMS, 90 calculator scenarios |
| Regeneration | No unified check | Pass: every root HTML page and sitemap unchanged after regeneration |
| Live hosting | Full status/canonical baseline captured | Live unchanged; not deployed |

Commands are in README; snapshots and browser evidence are in `docs/qa`. JSON-LD was checked locally; Google's Rich Results tool was not run. The earlier preview connection failure is resolved: 24 representative page/viewport checks pass, and desktop/mobile screenshots plus interaction results are recorded. Physical SMS/WhatsApp/call handoff/delivery, authenticated GA4 network/DebugView receipt, PageSpeed/CWV and a full accessibility audit are **not** verified. Google Analytics opens at a sign-in screen. Controlled-DOM/URI tests and Chromium viewport checks are not substitutes for physical-phone delivery.

Ancillary services, owner photo permission, pricing and genuine local-page distinctiveness need evidence; see [owner handoff](docs/OWNER_HANDOFF.md) and [measurement notes](docs/MEASUREMENT.md). No SEO gains, indexing recovery or new customers are claimed.

## Release / rollback

GitHub Pages builds `main` at `/`. **Do not merge or deploy until owner approval.** Pages configuration was not changed. The new workflow uses read permissions and only validates pull requests. A separately approved revert/merge can restore baseline content; URL and evidence records preserve the mapping.

# Owner evidence and follow-up

The changes are proposed in a review branch. GitHub Pages currently builds `main` at `/` (`legacy` build type), so **merging to main can publish the site**. Do not merge until the owner approves deployment. No deployment settings, live content, Business Profile, customer messages or account analytics settings were changed.

## Before approval

1. Confirm which extras are actually offered: car cleaning, house-roof versus conservatory-roof cleaning, cladding/render/exterior work, gutters, fascias/soffits and solar panels. Existing extra-service URLs and historical pricing are retained pending confirmation. No redirect, deletion or noindex change is proposed. Roof scope already excludes house-roof moss removal/repairs; cleaning pages must not imply installation or replacement. Record a decision for each affected URL in `url-decision-register.csv`.
2. Review all existing calculator rates, minima, frequency multipliers and Street Saver 10/15/20% tiers against time, travel and margin. Those numbers are preserved from main, not independently approved or newly invented. Honour existing agreements. The price guide now makes direct quoting and final confirmation explicit; new numerical examples wait for approval.
3. Verify original owner photo identity and permission. No new job photo or case study was created. The unsupported “Recent Local Work” and “Recent Local Enquiries” examples and named testimonial displays are removed in this proposal; original wording remains recoverable in Git history at baseline `dff7448f49deedccfcf1479f301424ac227c03c7`. Restore only exact authentic quotes with provenance and permission. Do not relabel them “verified Google reviews” without a source.
4. Supply actual route openings, particularly Greenstead, and genuine useful local experience. No route days, capacity, local completed jobs or first-hand street knowledge were invented. Current templated pages remain an unresolved quality issue; this PR removes speculative public wording but does not establish unique evidence for every location. Adding pages is blocked by the generator allowlist until reviewed.
5. Complete the account and physical-device checks in `MEASUREMENT.md`. GA4 receipt, private GTM configuration, enhanced measurement, consent, delivery and mobile rendering were not verified.

## Resolve coverage and overlap

The supplied export gives counts, not the excluded URLs: 11 crawled-not-indexed, 3 discovered-not-indexed, 3 page-with-redirect, 1 alternate canonical, ending 23 October 2026. Redirect and canonical exclusions may be expected. The 8 November ZIP date is not the coverage observation date.

In Search Console for the correct property, open **Indexing → Pages → each reason → Examples → Export**. Include all four reason lists and the observation date. For each URL, use URL Inspection and record fetched status, last crawl, user and Google canonical, indexing reason and sitemap. Compare against `url-decision-register.csv`; assess actual purpose and content before requesting indexing. Inspect live only after reviewing the URL. Do not infer which 11 pages were excluded or batch-request indexing for duplicates.

For `/`, `/window-cleaner-colchester.html`, `/residential-window-cleaning-colchester.html` and the two Greenstead pages, filter Performance by exact page, then Queries; also filter core queries and inspect Pages. Export the same dates, UK/mobile and query/page intersections. The generic homepage is the proposed primary intent. The clicked Colchester URL now provides quote preparation; the residential page focuses on preparing/access. Retain their self canonicals until evidence supports consolidation. GitHub Pages does not support arbitrary repository-defined HTTP 301 rules; JS/meta refresh is not a server redirect. No redirect was added.

## Business Profile and genuine proof

Search Maps for SJ Windows and the business phone; confirm an existing claimed profile and ownership before doing anything else. GBP existence is not confirmed by this repository. Avoid duplicates and false premises. Review the genuine name, phone, website, actual service area/hours and owner photos. Hide a home address if applicable to the real service-area setup. The owner performs account changes.

After a real job, the owner may ask: “Thanks for choosing SJ Windows. If you would like to share your experience, you can leave an honest review here: [your confirmed profile review link].” Do not publish that placeholder, offer review incentives or selectively manufacture endorsements. With permission, capture real work photos without household identifiers. A future case study needs date, actual service, broad area, exact factual description, consent and original images; no invented before/after claims.

Neighbour flyer copy for an owner-confirmed route: “Regular window cleaning from Sam at SJ Windows. Frames and sills included. Ask about 4, 6 or 8-weekly visits. Text 07756 514110 with your postcode and property type for a quote. Price and availability confirmed before booking.” Distribute only through owner-chosen legitimate channels; nothing has been posted or sent.

## Private tracking and 4/8/12-week review

Use `lead-log-template.csv` privately in the existing planner or spreadsheet; never put filled customer data in this public repository. Track real received enquiries, quotes, accepted recurring jobs, frequency, approximate area, source and route economics. Do not treat contact clicks as delivered leads, or sum clicks as unique people. Avoid exact addresses in analytics and public reports.

Baseline: 7 Aug–6 Nov 2026, 44 clicks / 7,470 property impressions / 0.589% CTR / approximately 33.73 position. Visible queries show only 2 clicks; page rows have 10,844 grouped impressions, which must not be summed as unique property impressions. No query/page intersection exists. Current SEO improvement is a hypothesis, not a measured result.

After an approved release, compare like-for-like 28-day periods at weeks 4, 8 and 12. Segment UK/mobile, core local hiring intent, brand/nonbrand, homepage and protected clicked URLs. Reconcile contact intent with received messages, quotes and booked regular customers. Record six-weekly recurring value, service/travel time, margin, available hours and actual route fill. Review index-status changes by exact URL. Retain weather/catch-up capacity; no capacity or customer-count target is asserted by the site.

Rollback: revert the implementation commit on a new branch and review it before merging. Because main publishes, rollback merging also needs owner authorization. URL register and baseline commit preserve the original page mapping and exact content.

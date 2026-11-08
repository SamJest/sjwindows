# Approved release scope — 8 November 2026

The owner explicitly requested that the finished, easier-to-use site be pushed online. This supersedes the earlier hold on deployment for this release. Google Business Profile work is deferred, and the owner will supply new photos in the coming weeks. Neither is a blocker to publishing the current static-site improvements. No Google profile was changed and no new photo/review/job claim was fabricated.

The final conversion pass reduces the primary menu to five choices, uses three direct mobile actions (text/WhatsApp/call), removes the redundant mobile top bar and repeated hero text, and presents a short practical first-message checklist. The detailed calculator is collapsed by default and opens when its summary or guide-price link is selected. Existing direct `#calculator` URLs still open it. Its guide prices and discount terms are unchanged.

All three generator sources and hand-authored legacy pages were updated. The older compact location headers now have a working mobile menu, and all 111 normal pages have the three direct contact routes. Independent validation enforces the simplified navigation. All existing URLs and the 111-entry sitemap are retained.

Release validation: full static/contact/analytics/regeneration checks, plus 36 Chromium viewport/page checks across nine representative pages at 360/375/390/1440px. No horizontal overflow, oversized primary menu, missing mobile contact route or unexpected local analytics loader was found. The calculator defaults closed and opens from the hero and direct hash link. Evidence is in `docs/qa/release-layout-results.json` and the standard QA files.

Authentic new work photos, Google Business Profile work and future growth measurements remain follow-up work. Authenticated GA4 receipt and physical-phone message delivery have not been verified. No message or call was sent during testing. These limits are recorded honestly and do not assert an observed conversion-rate improvement; this release is designed to make enquiries simpler.

Publication uses the existing GitHub Pages configuration: merge the tested PR into `main`, wait for the Pages build, then check the actual live homepage, key pages and versioned assets. No new host, backend, subscription or maintenance service is introduced.

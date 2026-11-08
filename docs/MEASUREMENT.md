# Measurement and contact QA

## One production sender

`analytics.js` is the shared loader for direct GA4 `G-MCX2ZWX8DQ`. It loads Google only on the HTTPS primary domain or its www alias, initializes once, and strips query strings/fragments from page location and referrer. Localhost, HTTP and unrelated previews load no remote analytics and send no live-property hits. Every page and all three generators use the same loader; GTM snippets, noscript iframe and runtime injector are removed. Content hashes in script/style URLs prevent cached code from mismatching changed HTML.

The **published** GTM container `GTM-5267LQLD` was fetched directly on 8 November 2026. Its resource version is `1`, with empty tags, predicates and rules. This resolves the concern about removing other configured tags or a consent tag from the currently published container. [Evidence and response SHA256](qa/gtm-published-audit.json) preserve the observation. Private drafts, historical versions and future changes are not covered, and historical double counting was not established.

## Event meanings

| Event | Meaning |
| --- | --- |
| `contact_call_click` | Visitor chose a telephone link |
| `contact_sms_click` | Visitor chose SMS, including an explicit calculator draft button |
| `contact_whatsapp_click` | Visitor chose business WhatsApp, including a calculator draft button |
| `contact_email_click` | Visitor chose email, including a calculator draft button |
| `quote_calculator_start` | First user input in the optional calculator, once per page load |
| `quote_calculator_complete` | Visitor explicitly requested an updated guide with the calculator submit button |

These are contact intentions, not delivery, unique people, accepted quotes or booked customers. No form-start or form-success event is emitted; web submission was removed. Legacy `click_text`, `click_sms`, `click_call`, `click_whatsapp`, `smart_quote_send_*`, `smart_quote_update` and `click_smart_quote` events are retired. Update account reports/key events to these names; do not add legacy and new events as independent leads.

The custom sender allowlists `page_path`, clean `page_location`, `page_type`, `area_name`, `service_interest`, `cta_location`, `method` and `transport_type`. It never sends names, addresses, postcodes, free text or message URLs. Beacon transport is requested, but consent, blockers and app handoff can still prevent receipt.

## Message privacy fix

The calculator no longer asks for a name or address. The visitor adds their postcode in their own messaging app. SMS/WhatsApp/email draft controls are buttons, not outbound anchors; the production handler builds the latest guide message and navigates only on an explicit click. It never stores the draft in an href, DOM data attribute or analytics parameter. Buttons start disabled and are enabled by the calculator's initialization. Plain call/text/WhatsApp links remain available independently of the calculator.

This removes the message-URL exposure to automatic outbound-link measurement without requiring an account setting change. Google's automatic measurement can collect an outbound anchor's full `link_url`; it cannot read a calculator draft from an anchor that no longer exists. No personal-detail input remains for it to collect from this calculator. This is a targeted privacy fix, not a certification of all Google account settings or legal compliance. See [Google's outbound measurement documentation](https://support.google.com/analytics/answer/9216061?hl=en).

## Completed verification

- Production-JavaScript tests: exactly one custom event per contact action; click-only draft creation using the latest values; private-message canaries absent from analytics; no draft href; analytics-blocked fallback; Android/iPhone/iPad SMS URI syntax; 90 calculator scenarios.
- Loader tests: only intended production HTTPS hosts load Google; one loader/config even if initialized twice; clean page/referrer context; no preview hits.
- Chromium browser: home, contact, Wivenhoe, prices, residential preparation and traditional cleaning at 360/375/390/1440px, 800px high; all 24 layouts have no horizontal overflow and no remote analytics script in local preview. All three calculator draft controls initialize enabled.
- Mobile menu opens; Escape closes it and returns focus; closed links are inert. Bungalow/every-8-weeks gives £17.00, and keyboard submit updates the guide. FAQ expands with correct `aria-controls` and exposed answer.
- The main quote button is visible at both 375×812 and 1440×800. Desktop top-bar text contrast and focus outlines were improved. [Screenshots](qa/mobile-home.jpg), [desktop](qa/desktop-home.jpg), [browser records](qa/browser-layout-results.json).

## Remaining external verification

Google Analytics was opened and redirected to the Google sign-in screen. No authenticated property session is available, so real GA4 network/DebugView receipt and key-event configuration cannot be confirmed here. After an approved release, an owner with access should verify one `page_view` and one custom event per action, parameters, consent and reports. The PR has no staging-domain analytics hits; loader behavior is covered with controlled tests rather than polluting the live property.

Physical Android/iOS app handoff, sending and receipt were not tested; no message or call was sent. Check SMS and WhatsApp draft content on actual phones, cancel the drafts, and perform any real delivery test only with owner authorization. Browser emulation and URI tests do not prove device delivery. No PageSpeed or Core Web Vitals score is claimed.

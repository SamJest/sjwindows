# Measurement and contact QA

The site uses direct GA4 `G-MCX2ZWX8DQ` as its sole tag sender. The GTM container `GTM-5267LQLD`, noscript iframe and JavaScript injector were removed from pages and all three generators. GA4 page tracking remains. This is an explicit source-level choice; the private GTM container was not accessible and historic double counting is **not established**. Any other tags previously configured only in GTM will need owner review before merge.

| Event | Meaning |
| --- | --- |
| `contact_call_click` | Visitor chose a telephone link |
| `contact_sms_click` | Visitor chose an SMS link, including a calculator message |
| `contact_whatsapp_click` | Visitor chose the business WhatsApp link |
| `contact_email_click` | Visitor chose an email link |
| `quote_calculator_start` | First user input in the optional calculator, once per page load |
| `quote_calculator_complete` | Visitor explicitly requested an updated guide with the calculator button |

These events measure intent, not delivery, unique people, accepted quotes or booked customers. No form-start or form-success event is emitted: web submission was removed. Legacy `click_text`, `click_sms`, `click_call`, `click_whatsapp`, `smart_quote_send_*` and `smart_quote_update` events are retired; update account reports accordingly. Do not add old and new contact events into one total as if they were separate leads.

The custom sender uses an allowlist of `page_path`, clean `page_location`, `page_type`, `area_name`, `service_interest`, `cta_location`, `method`, `transport_type`. It never reads a customer's name, address, postcode, calculator message or full contact URL. Page config strips query strings and fragments from page location/referrer. Beacon transport is requested for contact navigation, but analytics blocking, consent and app handoff can still prevent delivery.

**Account checks still required:** review GA4 Enhanced Measurement outbound-link tracking. It may independently collect the full WhatsApp URL (which contains a message). Disable outbound automatic click measurement for this property or implement an approved account-level exclusion before relying on privacy claims. Review other automatic events, Google Signals, consent/cookie configuration and any GTM-only integrations with the owner. This PR does not change account settings or certify compliance.

Before release, use a staging/static preview and Tag Assistant/GA4 DebugView to verify one custom event per action on home, contact, a local page and calculator output. Check parameters and no message data. Verify page_view is received once, inspect browser network requests, and update key-event settings to the new names. No authenticated GA4 account or DebugView was available here, so receipt in the property is not claimed.

The automated regression uses production JavaScript with a controlled DOM adapter: one event for each contact type, no duplicate dataLayer sender, sensitive-message canaries absent, analytics-blocked fallback, Android `?body=`, iPhone/iPad `&body=`, and 90 calculator scenarios. It does **not** prove a physical phone opens the correct app or sends/delivers a message.

Manual phone checklist: at 360/375/390px and desktop, confirm readable hero, tap targets, unobstructed contact strip, navigation open/close/Escape, keyboard focus, FAQ disclosures and calculator. On actual Android and iOS, tap SMS and WhatsApp, inspect the draft postcode-first message and calculator details, cancel it, and test the visible call fallback without placing an unwanted call. A contact click must never show a sent/booking confirmation. Confirm delivery only through an owner-authorized real test. The browser connection timed out in this environment; these rendered/device checks remain open.

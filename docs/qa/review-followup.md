# Review follow-up — 8 November 2026

The review concerns were addressed in a second implementation pass:

1. **Automatic outbound analytics and message privacy:** removed the optional name/address inputs; changed calculator draft links into explicit buttons; drafts are constructed on click and never stored in page hrefs/data attributes. Tests verify latest-value messages, no pre-click navigation and no private-message analytics values. The contact routes remain one event per chosen action.
2. **GTM-only functionality:** fetched the published public container. Version 1 has zero tags, predicates or rules. No configured published tag/consent functionality is lost by removing that container. The JSON resource summary and response hash are retained; private drafts/history were not inspected.
3. **Working preview and responsive checks:** started the local server with the required executor permission and verified HTTP 200 before opening the browser. The earlier preview failure is resolved. Chromium checks cover six representative pages at 360/375/390/1440px, with no horizontal overflow. Menu/Escape, calculator changes/keyboard submit and FAQ disclosure were exercised. The latest draft buttons initialize correctly, and local previews load no remote analytics script.
4. **Browser findings fixed:** stale cached JavaScript initially left the new controls disabled. Script/style URLs now use content hashes, generated centrally. The desktop heading was reduced and duplicate hero copy removed so its primary contact button is visible at 1440×800. Low-contrast top-bar text now inherits the light color; focus outlines use dark navy on light surfaces and white on the dark fixed bar.
5. **Account access boundary:** opening Google Analytics reaches Google's sign-in screen. Authenticated DebugView receipt cannot be verified without owner sign-in. No account setting, tag publication, customer communication, merge or deployment was performed.

Files: `browser-layout-results.json` records all 24 viewport/page checks; `mobile-home.jpg` and `desktop-home.jpg` show the current result; `gtm-published-audit.json` records the published container evidence. `test-results.txt` is refreshed after the full final test run.

Physical-device app launch/delivery, authenticated GA4 reporting, owner service/pricing/photo/review confirmations and exact GSC excluded URL lists remain external evidence requirements. URI/unit tests and desktop Chromium viewport checks are not represented as physical mobile delivery tests. No PageSpeed/CWV score is claimed.

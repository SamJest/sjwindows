import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import vm from "node:vm";
import assert from "node:assert/strict";
import { writeGeneratedPage } from "./page-output.mjs";

const root = resolve(import.meta.dirname, "..");
assert.throws(() => writeGeneratedPage("unreviewed-street-test.html", ""), /Unreviewed page/);
const source = readFileSync(resolve(root, "app.js"), "utf8");
// Run the production functions with a small DOM adapter. Initialization is
// excluded so tests can explicitly control the page and user interaction.
const functions = source.slice(0, source.lastIndexOf("\nfaq();"));
const handlers = {};
const calls = [];
let smsLinks = [];
const document = {
  title: "Test page",
  body: { dataset: { pageType: "home", areaName: "Colchester" } },
  querySelector(selector) {
    if (selector === 'link[rel="canonical"]') return { getAttribute: () => "https://sjwindowscolchester.co.uk/" };
    return null;
  },
  querySelectorAll: (selector) => selector === "a[href^='sms:']" ? smsLinks : [],
  addEventListener: (event, handler) => { handlers[event] = handler; },
};
class Element {
  constructor(href, attributes = {}) { this.href = href; this.attributes = attributes; this.dataset = {}; }
  closest(selector) { return selector === "a[href]" ? this : { id: "calculator", dataset: {} }; }
  getAttribute() { return this.href; }
  setAttribute(name, value) { this.href = value; }
}
const context = vm.createContext({ document, Element, URL, Intl, console,
  window: { gtag: (...args) => calls.push(args), dataLayer: [] },
  navigator: { userAgent: "Android", platform: "Linux", maxTouchPoints: 1 },
});
vm.runInContext(functions, context);
vm.runInContext("conversionTracking()", context);
const cases = [
  ["tel:07756514110", "contact_call_click"],
  ["sms:07756514110?body=PRIVATE_POSTCODE_AND_NAME", "contact_sms_click"],
  ["https://wa.me/447756514110?text=PRIVATE_POSTCODE_AND_NAME", "contact_whatsapp_click"],
  ["mailto:sjwindows2020@gmail.com?body=PRIVATE_POSTCODE_AND_NAME", "contact_email_click"],
];
for (const [href, expected] of cases) {
  calls.length = 0;
  handlers.click({ target: new Element(href, { "data-quote-sms": true }) });
  assert.equal(calls.length, 1, `${href}: exactly one event`);
  assert.equal(calls[0][1], expected);
  assert.equal(calls[0][2].page_path, "/");
  assert.equal(calls[0][2].cta_location, "calculator");
  assert.ok(!JSON.stringify(calls).includes("PRIVATE"), "message details cannot enter events");
  assert.equal(context.window.dataLayer.length, 0, "no second dataLayer sender");
}
calls.length = 0;
handlers.click({ target: new Element("https://example.com/?url=wa.me/447756514110") });
assert.equal(calls.length, 0, "only actual business WhatsApp links match");
context.window.gtag = undefined;
assert.doesNotThrow(() => handlers.click({ target: new Element("tel:07756514110") }), "contacts work with analytics blocked");

for (const [userAgent, platform, touch, separator] of [
  ["Android", "Linux", 1, "?"], ["iPhone", "iPhone", 5, "&"], ["Macintosh", "MacIntel", 5, "&"],
]) {
  Object.assign(context.navigator, { userAgent, platform, maxTouchPoints: touch });
  const href = vm.runInContext('buildSmsHref("Hi Sam, postcode __ & property __")', context);
  assert.ok(href.startsWith(`sms:07756514110${separator}body=`));
  assert.equal(decodeURIComponent(href.split("body=")[1]), "Hi Sam, postcode __ & property __");
  smsLinks = [new Element("sms:07756514110"), new Element("sms:07756514110?body=message")];
  vm.runInContext("directContactLinks()", context);
  assert.ok(smsLinks.every(link => link.href.includes(`${separator}body=`)));
}
// Existing calculator rates are unchanged: test viable finite guides for every
// property and frequency, with no extras and with all extras selected.
const results = vm.runInContext(`Object.entries(quote.property).flatMap(([propertyType, property]) =>
  Object.keys(quote.frequency).flatMap(frequency => [[], Object.keys(quote.extra)].map(selectedExtras =>
    calc({ ...property.defaults, propertyType, frequency, selectedExtras }))))`, context);
assert.equal(results.length, 90);
for (const result of results) {
  assert.match(result.price, /^£\d[\d,]*\.\d{2}$/);
  assert.ok(!JSON.stringify(result).includes("NaN"));
}
console.log("PASS: one event per contact action; private messages excluded; analytics-blocked fallback; Android/iOS SMS; 90 calculator scenarios.");

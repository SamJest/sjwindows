import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import vm from "node:vm";
import assert from "node:assert/strict";
const source = readFileSync(resolve(import.meta.dirname, "../analytics.js"), "utf8");

for (const url of ["http://127.0.0.1:8878/?name=PRIVATE", "http://localhost:8878/", "https://example.com/", "http://sjwindowscolchester.co.uk/"]) {
  const scripts = [];
  const context = vm.createContext({ window: {}, location: new URL(url), document: {
    referrer: "", createElement: () => ({}), head: { appendChild: el => scripts.push(el) },
  } });
  vm.runInContext(source, context);
  assert.equal(scripts.length, 0, "non-production pages must not load Google Analytics");
  assert.equal(context.window.gtag, undefined);
}
for (const host of ["sjwindowscolchester.co.uk", "www.sjwindowscolchester.co.uk"]) {
  const scripts = [];
  const context = vm.createContext({ window: {}, location: new URL(`https://${host}/contact.html?name=PRIVATE#PRIVATE`), document: {
    referrer: "https://example.com/page?name=PRIVATE#PRIVATE",
    createElement: () => ({}), head: { appendChild: el => scripts.push(el) },
  } });
  vm.runInContext(source, context);
  vm.runInContext(source, context);
  assert.equal(scripts.length, 1, "only one remote loader even if initialized twice");
  assert.equal(scripts[0].src, "https://www.googletagmanager.com/gtag/js?id=G-MCX2ZWX8DQ");
  const configs = context.window.dataLayer.filter(command => command[0] === "config");
  assert.equal(configs.length, 1);
  assert.equal(configs[0][1], "G-MCX2ZWX8DQ");
  assert.equal(configs[0][2].page_location, `https://${host}/contact.html`);
  assert.equal(configs[0][2].page_referrer, "https://example.com/page");
  assert.ok(!JSON.stringify(context.window.dataLayer).includes("PRIVATE"));
}
console.log("PASS: production-only GA4; one loader/config; clean page/referrer context; previews send no hits.");

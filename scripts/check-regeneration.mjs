import { createHash } from "node:crypto";
import { readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { execFileSync } from "node:child_process";
import assert from "node:assert/strict";
const root = resolve(import.meta.dirname, "..");
function snapshot() {
  return Object.fromEntries(readdirSync(root).filter(f => f.endsWith(".html") || f === "sitemap.xml")
    .map(f => [f, createHash("sha256").update(readFileSync(resolve(root, f))).digest("hex")]));
}
const before = snapshot();
execFileSync(process.execPath, [resolve(import.meta.dirname, "generate-site.mjs")], { cwd: root, stdio: "inherit" });
assert.deepEqual(snapshot(), before, "generated HTML and sitemap must already match their sources");
console.log("PASS: regeneration leaves every HTML page and sitemap unchanged.");

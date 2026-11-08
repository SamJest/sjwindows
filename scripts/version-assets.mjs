import { createHash } from "node:crypto";
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
// Content-based revisions keep cached scripts/styles paired with updated HTML.
const versions = new Map(["app.js", "analytics.js", "styles.css"].map(file => [file,
  createHash("sha256").update(readFileSync(resolve(root, file))).digest("hex").slice(0, 12)]));

export function versionAssets(html) {
  return html.replace(/(src|href)="(app\.js|analytics\.js|styles\.css)(?:\?[^"\s]*)?"/g,
    (_, attr, file) => `${attr}="${file}?v=${versions.get(file)}"`);
}

export function versionAllPages() {
  for (const file of readdirSync(root).filter(file => file.endsWith(".html"))) {
    const path = resolve(root, file);
    const before = readFileSync(path, "utf8");
    const after = versionAssets(before);
    if (before !== after) writeFileSync(path, after);
  }
}

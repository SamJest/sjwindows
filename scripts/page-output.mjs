import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const approved = new Set(JSON.parse(readFileSync(resolve(import.meta.dirname, "approved-page-paths.json"), "utf8")));

export function writeGeneratedPage(slug, html) {
  if (!approved.has(slug)) {
    throw new Error(`Unreviewed page ${slug}: provide real service/local evidence before adding it to approved-page-paths.json.`);
  }
  writeFileSync(resolve(root, slug), html);
}

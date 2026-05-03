import { existsSync, readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const siteUrl = "https://sjwindowscolchester.co.uk";

const requiredPages = [
  "areas.html",
  "window-cleaner-near-colchester.html",
  "water-fed-pole-window-cleaning-colchester.html",
  "traditional-window-cleaning-colchester.html",
  "window-cleaner-colchester.html",
  "window-cleaner-greenstead.html",
  "window-cleaner-wivenhoe.html",
  "window-cleaner-rowhedge.html",
  "window-cleaner-highwoods.html",
  "window-cleaner-mile-end-colchester.html",
  "window-cleaner-lexden.html",
  "window-cleaner-stanway.html",
  "window-cleaner-prettygate.html",
  "window-cleaner-shrub-end.html",
  "window-cleaner-old-heath.html",
  "window-cleaner-new-town.html",
  "window-cleaner-berechurch.html",
  "window-cleaner-blackheath.html",
  "window-cleaner-st-johns.html",
  "window-cleaner-st-annes.html",
  "window-cleaner-west-bergholt.html",
  "window-cleaner-eight-ash-green.html",
  "window-cleaner-marks-tey.html",
  "window-cleaner-copford.html",
  "window-cleaner-layer-de-la-haye.html",
  "window-cleaner-abberton.html",
  "window-cleaner-fingringhoe.html",
  "window-cleaner-dedham.html",
  "window-cleaner-ardleigh.html",
  "window-cleaner-manningtree.html",
  "window-cleaner-lawford.html",
  "window-cleaner-mersea-island.html",
  "window-cleaner-tiptree.html",
  "window-cleaner-brightlingsea.html",
  "solar-panel-cleaning-colchester.html",
  "solar-panel-cleaning-greenstead.html",
  "solar-panel-cleaning-wivenhoe.html",
  "solar-panel-cleaning-lexden.html",
  "solar-panel-cleaning-stanway.html",
  "gutter-cleaning-colchester.html",
  "gutter-cleaning-wivenhoe.html",
  "gutter-cleaning-lexden.html",
  "conservatory-roof-cleaning-colchester.html",
  "conservatory-roof-cleaning-wivenhoe.html",
  "residential-window-cleaning-wivenhoe.html",
  "residential-window-cleaning-lexden.html",
  "residential-window-cleaning-stanway.html",
  "residential-window-cleaning-greenstead.html",
  "window-cleaner-lexden-road-colchester.html",
  "window-cleaner-st-clare-road-lexden.html",
  "window-cleaner-prettygate-road-colchester.html",
  "window-cleaner-the-commons-prettygate.html",
  "window-cleaner-london-road-stanway.html",
  "window-cleaner-straight-road-colchester.html",
  "window-cleaner-the-avenue-wivenhoe.html",
  "window-cleaner-old-heath-road-colchester.html",
  "window-cleaner-military-road-colchester.html",
  "window-cleaner-mile-end-road-colchester.html",
  "window-cleaner-greenstead-road-colchester.html",
];

const errors = [];
const warnings = [];
const htmlFiles = readdirSync(root).filter((file) => file.endsWith(".html"));
const sitemap = readFileSync(resolve(root, "sitemap.xml"), "utf8");

function fileText(file) {
  return readFileSync(resolve(root, file), "utf8");
}

function matchOne(text, regex) {
  return text.match(regex)?.[1]?.trim() || "";
}

function addDuplicate(map, value, file, label) {
  if (!value) return;
  if (!map.has(value)) {
    map.set(value, []);
  }
  map.get(value).push(file);
  if (map.get(value).length === 2) {
    errors.push(`Duplicate ${label}: "${value}" in ${map.get(value).join(", ")}`);
  } else if (map.get(value).length > 2) {
    errors.push(`Duplicate ${label}: "${value}" also in ${file}`);
  }
}

for (const page of requiredPages) {
  if (!existsSync(resolve(root, page))) {
    errors.push(`Required generated page missing: ${page}`);
  }
}

const titleMap = new Map();
const descriptionMap = new Map();

for (const file of htmlFiles) {
  const text = fileText(file);
  const title = matchOne(text, /<title>([\s\S]*?)<\/title>/i);
  const description = matchOne(
    text,
    /<meta\s+name=["']description["']\s+content=["']([\s\S]*?)["']\s*\/?>/i
  );
  const h1 = matchOne(text, /<h1[^>]*>([\s\S]*?)<\/h1>/i).replace(/<[^>]+>/g, "").trim();

  if (file !== "404.html") {
    if (!title) errors.push(`${file} has no title`);
    if (!description) errors.push(`${file} has no meta description`);
    if (!h1) errors.push(`${file} has an empty or missing H1`);
    if (!/href=["']styles\.css["']/.test(text)) errors.push(`${file} is missing styles.css reference`);
    const loc = file === "index.html" ? `${siteUrl}/` : `${siteUrl}/${file}`;
    if (!sitemap.includes(`<loc>${loc}</loc>`)) errors.push(`${file} is missing from sitemap.xml`);
  }

  addDuplicate(titleMap, title, file, "title");
  addDuplicate(descriptionMap, description, file, "meta description");

  if (requiredPages.includes(file)) {
    if (!text.includes("index.html#calculator")) {
      errors.push(`${file} is missing a Smart Quote CTA`);
    }
    if (!text.includes("tel:07756514110") && !text.includes("sms:07756514110") && !text.includes("wa.me/447756514110")) {
      errors.push(`${file} is missing a direct contact CTA`);
    }
  }

  for (const href of text.matchAll(/href=["']([^"']+)["']/gi)) {
    const raw = href[1];
    if (
      raw.startsWith("http") ||
      raw.startsWith("tel:") ||
      raw.startsWith("sms:") ||
      raw.startsWith("mailto:") ||
      raw.startsWith("#") ||
      raw.startsWith("data:")
    ) {
      continue;
    }
    const target = raw.split("#")[0];
    if (!target || target === "/") continue;
    if (target.includes("://")) continue;
    if (!existsSync(resolve(root, target))) {
      errors.push(`${file} links to missing internal target: ${raw}`);
    }
  }
}

const areasText = fileText("areas.html");
for (const href of areasText.matchAll(/href=["']([^"']+\.html)(?:#[^"']*)?["']/gi)) {
  const target = href[1];
  if (target.startsWith("http")) continue;
  if (!existsSync(resolve(root, target))) {
    errors.push(`areas.html links to missing page: ${target}`);
  }
}

if (warnings.length) {
  console.log("Warnings:");
  for (const warning of warnings) console.log(`- ${warning}`);
}

if (errors.length) {
  console.error(`Validation failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Validation passed for ${htmlFiles.length} HTML files and ${requiredPages.length} required local pages.`);

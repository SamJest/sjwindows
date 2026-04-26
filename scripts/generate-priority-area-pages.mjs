import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const waHref =
  "https://wa.me/447756514110?text=Hi%20Sam%2C%20I%E2%80%99m%20looking%20for%20a%20window%20cleaning%20quote.%20My%20postcode%20is%E2%80%A6";

const reviews = {
  adam: {
    author: "Adam, Colchester",
    text:
      "Sam has been cleaning our windows regularly and has always been reliable, friendly and easy to deal with. He lets us know when he’s coming, does a great job, and the windows, frames and sills are always left looking spotless. Highly recommended.",
  },
  helen: {
    author: "Helen P, Colchester",
    text:
      "Really pleased we found SJ Windows. Sam is friendly, professional and clearly takes pride in his work. It’s nice dealing directly with the person doing the job rather than a big company. Great service and very fair pricing.",
  },
  rob: {
    author: "Rob B, Mersea",
    text:
      "The whole process was really easy. I used the quote calculator on the website, messaged Sam, and he got back to me quickly with a sensible price. No pressure, no hassle — just a straightforward local service that does exactly what it says.",
  },
  audrey: {
    author: "Audrey, Colchester",
    text:
      "Sam is polite, respectful and trustworthy. He turns up when arranged, is careful around the property, and always leaves the windows looking lovely. It’s reassuring to have someone reliable who you’re happy to have around the house.",
  },
  sue: {
    author: "Sue S, Wivenhoe",
    text:
      "We’ve been using SJ Windows for regular window cleaning and have been really happy with the service. Sam is consistent, communicates well, and the clean is always done properly. It’s one less thing to think about.",
  },
  mike: {
    author: "Mike L, Lexden",
    text:
      "Excellent value for the quality of the clean. Sam doesn’t rush the job and the results are always noticeably better than when we’ve tried to do it ourselves. Friendly, reliable and reasonably priced.",
  },
  harry: {
    author: "Harry, Brightlingsea",
    text:
      "Great communication from start to finish. Sam replied quickly, gave a clear price, and turned up when he said he would. The windows looked brilliant afterwards and we’ll definitely be using him again.",
  },
  wendy: {
    author: "Wendy, Wivenhoe",
    text:
      "Reliable, friendly and does a proper job every time. Exactly what you want from a local window cleaner.",
  },
};

const areas = [
  {
    slug: "window-cleaner-wivenhoe.html",
    area: "Wivenhoe",
    title: "Window Cleaner Wivenhoe | Regular Local Window Cleaning | SJ Windows",
    description:
      "Looking for a reliable window cleaner in Wivenhoe? I’m Sam from SJ Windows, covering Wivenhoe where it fits the Colchester route. Get a guide price or message me directly.",
    routeCopy:
      "Wivenhoe works well because it sits neatly with Greenstead, Hythe-side Colchester, Rowhedge, and nearby route-fit village work. That makes regular window cleaning much easier to keep dependable than trying to stretch too far in every direction.",
    priceCopy:
      "Guide prices in Wivenhoe still come down to the property size, amount of glass, access, frequency, condition, and exactly where the postcode sits on the wider route.",
    nearbySummary:
      "Nearby searches often overlap with Rowhedge, Greenstead, Hythe-side Colchester, and Alresford.",
    nearby: [
      ["window-cleaner-rowhedge.html", "Rowhedge"],
      ["window-cleaner-greenstead.html", "Greenstead"],
      ["window-cleaner-lexden.html", "Colchester route"],
      ["window-cleaner-brightlingsea.html", "Brightlingsea"],
    ],
    reviewKeys: ["sue", "wendy"],
  },
  {
    slug: "window-cleaner-lexden.html",
    area: "Lexden",
    title: "Window Cleaner Lexden | SJ Windows Colchester",
    description:
      "Looking for a reliable window cleaner in Lexden? I’m Sam from SJ Windows, covering Lexden as part of the core Colchester route. Get a guide price or message me directly.",
    routeCopy:
      "Lexden is one of the clearest route-fit areas because it sits right inside the core Colchester working patch. That makes it a strong option for regular residential window cleaning and straightforward repeat visits.",
    priceCopy:
      "Prices in Lexden still vary with property size, window layout, access, and how often you want the work done, but the route itself is usually one of the simpler parts.",
    nearbySummary:
      "Lexden naturally overlaps with Prettygate, Stanway, West Bergholt, and central Colchester.",
    nearby: [
      ["window-cleaner-prettygate.html", "Prettygate"],
      ["window-cleaner-stanway.html", "Stanway"],
      ["window-cleaner-west-bergholt.html", "West Bergholt"],
      ["index.html", "Colchester"],
    ],
    reviewKeys: ["mike"],
  },
  {
    slug: "window-cleaner-stanway.html",
    area: "Stanway",
    title: "Window Cleaner Stanway | Regular Local Window Cleaning | SJ Windows",
    description:
      "Looking for a local window cleaner in Stanway? I’m Sam from SJ Windows, covering Stanway where it fits the wider Colchester route. Check the Smart Quote or send the postcode.",
    routeCopy:
      "Stanway sits well on the west side of Colchester, especially where regular rounds link naturally into Lexden, Prettygate, Marks Tey-side routes, and other nearby work.",
    priceCopy:
      "Stanway guide prices depend on the amount of glass, access, and property type just as much as postcode, but the local route usually works well for regular cleaning.",
    nearbySummary:
      "Nearby route-fit searches often include Lexden, Prettygate, West Bergholt, and Marks Tey-side work.",
    nearby: [
      ["window-cleaner-lexden.html", "Lexden"],
      ["window-cleaner-prettygate.html", "Prettygate"],
      ["window-cleaner-west-bergholt.html", "West Bergholt"],
      ["window-cleaner-marks-tey.html", "Marks Tey"],
    ],
    reviewKeys: ["mike", "audrey"],
  },
  {
    slug: "window-cleaner-greenstead.html",
    area: "Greenstead",
    title: "Window Cleaner Greenstead | SJ Windows Colchester",
    description:
      "Need a window cleaner in Greenstead? I’m Sam from SJ Windows, covering Greenstead as part of the main Colchester route. Get a guide price or message me directly.",
    routeCopy:
      "Greenstead sits firmly within the Colchester side of the route, which makes it practical for regular cleans and easy to link with Wivenhoe, Rowhedge, and nearby neighbourhood work.",
    priceCopy:
      "Greenstead prices still come down to window count, access, height, condition, and how often you want the clean, but the area itself is usually a straightforward local fit.",
    nearbySummary:
      "Greenstead often overlaps naturally with Wivenhoe, Rowhedge, Highwoods, and Hythe-side Colchester.",
    nearby: [
      ["window-cleaner-wivenhoe.html", "Wivenhoe"],
      ["window-cleaner-rowhedge.html", "Rowhedge"],
      ["window-cleaner-highwoods.html", "Highwoods"],
      ["index.html", "Colchester"],
    ],
    reviewKeys: ["audrey", "wendy"],
  },
  {
    slug: "window-cleaner-highwoods.html",
    area: "Highwoods",
    title: "Window Cleaner Highwoods | SJ Windows Colchester",
    description:
      "Looking for a local window cleaner in Highwoods? I’m Sam from SJ Windows, covering Highwoods where it fits the wider Colchester route. Get a guide price or ask directly.",
    routeCopy:
      "Highwoods works well when it sits alongside nearby north and north-east Colchester work such as Mile End, Greenstead, and Ardleigh-side routes.",
    priceCopy:
      "Guide prices in Highwoods depend on the same practical things as anywhere else: glass, access, frequency, height, condition, and whether there are extras to add on.",
    nearbySummary:
      "Nearby overlaps often include Mile End, Greenstead, Ardleigh, and the wider Colchester route.",
    nearby: [
      ["window-cleaner-mile-end-colchester.html", "Mile End"],
      ["window-cleaner-greenstead.html", "Greenstead"],
      ["window-cleaner-ardleigh.html", "Ardleigh"],
      ["index.html", "Colchester"],
    ],
    reviewKeys: ["adam", "audrey"],
  },
  {
    slug: "window-cleaner-mile-end-colchester.html",
    area: "Mile End",
    title: "Window Cleaner Mile End Colchester | SJ Windows",
    description:
      "Need a window cleaner in Mile End, Colchester? I’m Sam from SJ Windows, covering Mile End where it fits the local route. Get a guide price or message me directly.",
    routeCopy:
      "Mile End sits on the north side of Colchester and works best where it links naturally with Highwoods, West Bergholt, and other nearby local routes.",
    priceCopy:
      "The guide price for Mile End still depends on the property setup rather than the postcode alone, especially the amount of glass, access, and whether it is regular or one-off work.",
    nearbySummary:
      "Nearby links usually include Highwoods, West Bergholt, Lexden, and the rest of Colchester.",
    nearby: [
      ["window-cleaner-highwoods.html", "Highwoods"],
      ["window-cleaner-west-bergholt.html", "West Bergholt"],
      ["window-cleaner-lexden.html", "Lexden"],
      ["index.html", "Colchester"],
    ],
    reviewKeys: ["adam", "helen"],
  },
  {
    slug: "window-cleaner-prettygate.html",
    area: "Prettygate",
    title: "Window Cleaner Prettygate | SJ Windows Colchester",
    description:
      "Looking for a local window cleaner in Prettygate? I’m Sam from SJ Windows, covering Prettygate where it fits the Colchester route. Get a guide price or message me directly.",
    routeCopy:
      "Prettygate sits neatly with Lexden and Stanway-side work, which makes it a practical local option for regular window cleaning where the schedule fits.",
    priceCopy:
      "As with the rest of Colchester, guide prices in Prettygate are driven by the size of the job, amount of glass, access, and whether you want regular upkeep or a one-off visit.",
    nearbySummary:
      "Nearby route-fit pages often include Lexden, Stanway, West Bergholt, and the wider Colchester patch.",
    nearby: [
      ["window-cleaner-lexden.html", "Lexden"],
      ["window-cleaner-stanway.html", "Stanway"],
      ["window-cleaner-west-bergholt.html", "West Bergholt"],
      ["index.html", "Colchester"],
    ],
    reviewKeys: ["mike", "helen"],
  },
  {
    slug: "window-cleaner-rowhedge.html",
    area: "Rowhedge",
    title: "Window Cleaner Rowhedge | Regular Local Window Cleaning | SJ Windows",
    description:
      "Need a window cleaner in Rowhedge? I’m Sam from SJ Windows, covering Rowhedge where it fits the local Colchester route. Get a guide price or send the postcode.",
    routeCopy:
      "Rowhedge works best when it links naturally with Wivenhoe, Greenstead, and other nearby eastern Colchester routes. That helps keep regular cleans practical and dependable.",
    priceCopy:
      "Rowhedge prices still come down to property size, glass, access, condition, and frequency, with the exact postcode position helping determine how neatly it fits the wider route.",
    nearbySummary:
      "Nearby overlap often includes Wivenhoe, Greenstead, Hythe-side Colchester, and Mersea-side routes.",
    nearby: [
      ["window-cleaner-wivenhoe.html", "Wivenhoe"],
      ["window-cleaner-greenstead.html", "Greenstead"],
      ["window-cleaner-mersea-island.html", "Mersea Island"],
      ["index.html", "Colchester"],
    ],
    reviewKeys: ["wendy", "audrey"],
  },
  {
    slug: "window-cleaner-west-bergholt.html",
    area: "West Bergholt",
    title: "Window Cleaner West Bergholt | SJ Windows Colchester",
    description:
      "Looking for a window cleaner in West Bergholt? I’m Sam from SJ Windows, covering West Bergholt where it fits the wider Colchester route. Get a guide price or ask directly.",
    routeCopy:
      "West Bergholt usually works best when it ties in with Lexden, Mile End, Stanway-side routes, and other nearby north-west Colchester work.",
    priceCopy:
      "Guide prices in West Bergholt vary with glass, property style, access, and frequency, especially on larger village homes or places with more detail work.",
    nearbySummary:
      "Nearby route-fit pages often include Lexden, Stanway, Mile End, and Dedham-side links.",
    nearby: [
      ["window-cleaner-lexden.html", "Lexden"],
      ["window-cleaner-stanway.html", "Stanway"],
      ["window-cleaner-mile-end-colchester.html", "Mile End"],
      ["window-cleaner-dedham.html", "Dedham"],
    ],
    reviewKeys: ["mike", "adam"],
  },
  {
    slug: "window-cleaner-brightlingsea.html",
    area: "Brightlingsea",
    title: "Window Cleaner Brightlingsea | Regular Local Window Cleaning | SJ Windows",
    description:
      "Looking for a local window cleaner in Brightlingsea? I’m Sam from SJ Windows, covering Brightlingsea where it fits the wider Colchester route. Get a guide price or message me directly.",
    routeCopy:
      "Brightlingsea is part of the wider eastern route, so regular work needs to fit sensibly with nearby places like Wivenhoe, Rowhedge, Alresford-side work, and the rest of the run.",
    priceCopy:
      "Guide prices in Brightlingsea depend on the same practical things as everywhere else, with route-fit, access, and the amount of glass doing most of the heavy lifting.",
    nearbySummary:
      "Nearby overlap often includes Wivenhoe, Rowhedge, Alresford-side routes, and the wider Colchester run.",
    nearby: [
      ["window-cleaner-wivenhoe.html", "Wivenhoe"],
      ["window-cleaner-rowhedge.html", "Rowhedge"],
      ["window-cleaner-mersea-island.html", "Mersea Island"],
      ["index.html", "Colchester"],
    ],
    reviewKeys: ["harry"],
  },
  {
    slug: "window-cleaner-mersea-island.html",
    area: "Mersea Island",
    title: "Window Cleaner Mersea Island | SJ Windows Colchester",
    description:
      "Looking for a local window cleaner on Mersea Island? I’m Sam from SJ Windows, covering Mersea where it fits the wider Colchester route. Get a guide price or message me directly.",
    routeCopy:
      "Mersea work is always best judged as part of the wider route. West Mersea, East Mersea, Abberton, Fingringhoe, and Tiptree-side links can all matter when working out what is practical.",
    priceCopy:
      "Guide prices on Mersea Island depend on the property itself first, then on how neatly the postcode fits with the rest of the route and whether the work is regular.",
    nearbySummary:
      "Nearby route-fit links often include West Mersea, East Mersea, Abberton, Fingringhoe, and the wider south-side run.",
    nearby: [
      ["window-cleaner-abberton.html", "Abberton"],
      ["window-cleaner-fingringhoe.html", "Fingringhoe"],
      ["window-cleaner-tiptree.html", "Tiptree"],
      ["index.html", "Colchester"],
    ],
    reviewKeys: ["rob"],
  },
  {
    slug: "window-cleaner-manningtree.html",
    area: "Manningtree",
    title: "Window Cleaner Manningtree | SJ Windows Colchester",
    description:
      "Looking for a window cleaner in Manningtree? I’m Sam from SJ Windows, covering Manningtree where it fits the wider Colchester route. Get a guide price or ask directly.",
    routeCopy:
      "Manningtree tends to work best when it links in sensibly with Lawford, Dedham-side routes, Ardleigh, and other north-east village work rather than sitting on its own.",
    priceCopy:
      "Manningtree guide prices depend on the house itself first, but the wider route also matters when working out whether regular rounds are practical.",
    nearbySummary:
      "Nearby route-fit pages often include Lawford, Dedham, Ardleigh, and East Bergholt-side work.",
    nearby: [
      ["window-cleaner-dedham.html", "Dedham"],
      ["window-cleaner-ardleigh.html", "Ardleigh"],
      ["window-cleaner-kelvedon.html", "Kelvedon"],
      ["index.html", "Colchester"],
    ],
    reviewKeys: ["adam", "helen"],
  },
  {
    slug: "window-cleaner-tiptree.html",
    area: "Tiptree",
    title: "Window Cleaner Tiptree | Regular Local Window Cleaning | SJ Windows",
    description:
      "Need a window cleaner in Tiptree? I’m Sam from SJ Windows, covering Tiptree where it fits the wider Colchester route. Check the Smart Quote or send the postcode.",
    routeCopy:
      "Tiptree usually works best where it ties into Kelvedon, Marks Tey, Abberton-side routes, and other nearby villages rather than standing alone as a one-off distant visit.",
    priceCopy:
      "The guide price in Tiptree depends on the size and complexity of the property first, with route-fit then helping decide whether regular rounds make sense.",
    nearbySummary:
      "Nearby pages often overlap with Kelvedon, Marks Tey, Abberton, and Mersea-side work.",
    nearby: [
      ["window-cleaner-kelvedon.html", "Kelvedon"],
      ["window-cleaner-marks-tey.html", "Marks Tey"],
      ["window-cleaner-abberton.html", "Abberton"],
      ["window-cleaner-mersea-island.html", "Mersea Island"],
    ],
    reviewKeys: ["rob", "helen"],
  },
  {
    slug: "window-cleaner-marks-tey.html",
    area: "Marks Tey",
    title: "Window Cleaner Marks Tey | SJ Windows Colchester",
    description:
      "Looking for a local window cleaner in Marks Tey? I’m Sam from SJ Windows, covering Marks Tey where it fits the wider Colchester route. Get a guide price or message me directly.",
    routeCopy:
      "Marks Tey sits on the western side of the route and works best where it links naturally with Stanway, Kelvedon, Tiptree, and other nearby areas.",
    priceCopy:
      "Guide prices in Marks Tey still depend on property size, access, glass, and frequency, but the wider route helps decide whether it is a strong fit for regular work.",
    nearbySummary:
      "Nearby overlaps usually include Stanway, Kelvedon, Tiptree, and Copford-side routes.",
    nearby: [
      ["window-cleaner-stanway.html", "Stanway"],
      ["window-cleaner-kelvedon.html", "Kelvedon"],
      ["window-cleaner-tiptree.html", "Tiptree"],
      ["index.html", "Colchester"],
    ],
    reviewKeys: ["mike", "helen"],
  },
  {
    slug: "window-cleaner-kelvedon.html",
    area: "Kelvedon",
    title: "Window Cleaner Kelvedon | SJ Windows Colchester",
    description:
      "Looking for a local window cleaner in Kelvedon? I’m Sam from SJ Windows, covering Kelvedon where it fits the wider Colchester route. Get a guide price or ask directly.",
    routeCopy:
      "Kelvedon usually works best when it sits as part of the Tiptree and Marks Tey side of the wider route, rather than as an isolated one-off job.",
    priceCopy:
      "Kelvedon guide prices vary with the layout of the property, access, amount of glass, and whether it is a regular round or a first clean after a gap.",
    nearbySummary:
      "Nearby route-fit pages often include Tiptree, Marks Tey, Feering-side villages, and the wider western run.",
    nearby: [
      ["window-cleaner-tiptree.html", "Tiptree"],
      ["window-cleaner-marks-tey.html", "Marks Tey"],
      ["window-cleaner-stanway.html", "Stanway"],
      ["index.html", "Colchester"],
    ],
    reviewKeys: ["mike", "helen"],
  },
  {
    slug: "window-cleaner-dedham.html",
    area: "Dedham",
    title: "Window Cleaner Dedham | SJ Windows Colchester",
    description:
      "Looking for a local window cleaner in Dedham? I’m Sam from SJ Windows, covering Dedham where it fits the wider Colchester route. Get a guide price or message me directly.",
    routeCopy:
      "Dedham usually works best as part of the wider north and north-east village route, often linking with Manningtree, Ardleigh, East Bergholt-side work, and other nearby villages.",
    priceCopy:
      "Guide prices in Dedham still depend on the size and style of the home, amount of glass, access, and whether the visit is part of regular upkeep or a first clean.",
    nearbySummary:
      "Nearby pages often overlap with Manningtree, Ardleigh, West Bergholt, and the wider northern route.",
    nearby: [
      ["window-cleaner-manningtree.html", "Manningtree"],
      ["window-cleaner-ardleigh.html", "Ardleigh"],
      ["window-cleaner-west-bergholt.html", "West Bergholt"],
      ["index.html", "Colchester"],
    ],
    reviewKeys: ["adam", "helen"],
  },
  {
    slug: "window-cleaner-ardleigh.html",
    area: "Ardleigh",
    title: "Window Cleaner Ardleigh | SJ Windows Colchester",
    description:
      "Need a window cleaner in Ardleigh? I’m Sam from SJ Windows, covering Ardleigh where it fits the wider Colchester route. Get a guide price or ask directly.",
    routeCopy:
      "Ardleigh works best when it links with Highwoods, Dedham, Manningtree, and other nearby eastern or north-eastern routes rather than being treated as a standalone distant job.",
    priceCopy:
      "Ardleigh guide prices depend on the property setup, access, and frequency first, with the route then helping decide whether regular work is practical.",
    nearbySummary:
      "Nearby overlaps often include Highwoods, Dedham, Manningtree, and the wider Colchester route.",
    nearby: [
      ["window-cleaner-highwoods.html", "Highwoods"],
      ["window-cleaner-dedham.html", "Dedham"],
      ["window-cleaner-manningtree.html", "Manningtree"],
      ["index.html", "Colchester"],
    ],
    reviewKeys: ["adam", "audrey"],
  },
  {
    slug: "window-cleaner-layer-de-la-haye.html",
    area: "Layer-de-la-Haye",
    title: "Window Cleaner Layer-de-la-Haye | SJ Windows Colchester",
    description:
      "Looking for a local window cleaner in Layer-de-la-Haye? I’m Sam from SJ Windows, covering Layer-de-la-Haye where it fits the wider Colchester route. Get a guide price or message me directly.",
    routeCopy:
      "Layer-de-la-Haye usually makes most sense where it sits alongside Abberton, Fingringhoe, Mersea-side routes, and nearby south Colchester work.",
    priceCopy:
      "Guide prices in Layer-de-la-Haye depend on the practical details of the job first, especially access, glass, condition, and whether the route works well for regular visits.",
    nearbySummary:
      "Nearby overlaps often include Abberton, Fingringhoe, Mersea-side work, and south Colchester routes.",
    nearby: [
      ["window-cleaner-abberton.html", "Abberton"],
      ["window-cleaner-fingringhoe.html", "Fingringhoe"],
      ["window-cleaner-mersea-island.html", "Mersea Island"],
      ["index.html", "Colchester"],
    ],
    reviewKeys: ["audrey", "rob"],
  },
  {
    slug: "window-cleaner-abberton.html",
    area: "Abberton",
    title: "Window Cleaner Abberton | SJ Windows Colchester",
    description:
      "Need a window cleaner in Abberton? I’m Sam from SJ Windows, covering Abberton where it fits the wider Colchester route. Get a guide price or send the postcode.",
    routeCopy:
      "Abberton is one of those areas where local route-fit matters a lot. It usually works best where it links naturally with Mersea, Fingringhoe, Layer-de-la-Haye, and nearby south-side routes.",
    priceCopy:
      "Guide prices in Abberton depend on the property itself first, then on how neatly the postcode works with the wider route for regular cleans.",
    nearbySummary:
      "Nearby route-fit pages often include Mersea Island, Fingringhoe, Layer-de-la-Haye, and Tiptree-side links.",
    nearby: [
      ["window-cleaner-mersea-island.html", "Mersea Island"],
      ["window-cleaner-fingringhoe.html", "Fingringhoe"],
      ["window-cleaner-layer-de-la-haye.html", "Layer-de-la-Haye"],
      ["window-cleaner-tiptree.html", "Tiptree"],
    ],
    reviewKeys: ["rob"],
  },
  {
    slug: "window-cleaner-fingringhoe.html",
    area: "Fingringhoe",
    title: "Window Cleaner Fingringhoe | SJ Windows Colchester",
    description:
      "Looking for a local window cleaner in Fingringhoe? I’m Sam from SJ Windows, covering Fingringhoe where it fits the wider Colchester route. Get a guide price or ask directly.",
    routeCopy:
      "Fingringhoe usually works best where it links with Abberton, Mersea-side work, Rowhedge, and the wider south-east side of the Colchester route.",
    priceCopy:
      "Fingringhoe guide prices depend on the usual practical details such as access, amount of glass, and frequency, with route-fit helping decide what works for ongoing cleans.",
    nearbySummary:
      "Nearby overlaps often include Abberton, Mersea Island, Rowhedge, and south-east Colchester links.",
    nearby: [
      ["window-cleaner-abberton.html", "Abberton"],
      ["window-cleaner-mersea-island.html", "Mersea Island"],
      ["window-cleaner-rowhedge.html", "Rowhedge"],
      ["index.html", "Colchester"],
    ],
    reviewKeys: ["rob", "audrey"],
  },
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function areaLinks(items) {
  return items
    .map(
      ([href, name]) =>
        `<a class="area-chip" href="${escapeHtml(href)}">${escapeHtml(name)}</a>`
    )
    .join("");
}

function reviewCards(keys) {
  return keys
    .map((key) => reviews[key])
    .filter(Boolean)
    .map(
      (review) => `
            <article class="review-card">
              <p>${escapeHtml(review.text)}</p>
              <p class="review-card__meta">${escapeHtml(review.author)}</p>
            </article>`
    )
    .join("");
}

function page(area) {
  const nearbyNames = area.nearby.map(([, name]) => name).join(", ");
  return `<!DOCTYPE html>
<html lang="en-GB">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(area.title)}</title>
    <meta name="description" content="${escapeHtml(area.description)}" />
    <meta name="robots" content="index,follow" />
    <meta name="theme-color" content="#132331" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="en_GB" />
    <meta property="og:title" content="${escapeHtml(area.title)}" />
    <meta property="og:description" content="${escapeHtml(area.description)}" />
    <meta property="og:url" content="https://sjwindowscolchester.co.uk/${escapeHtml(area.slug)}" />
    <meta property="og:image" content="https://sjwindowscolchester.co.uk/sam-about-photo-real.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="canonical" href="https://sjwindowscolchester.co.uk/${escapeHtml(area.slug)}" />
    <link rel="icon" href="favicon.svg" type="image/svg+xml" />
    <link rel="stylesheet" href="styles.css" />
    <script src="app.js" defer></script>
  </head>
  <body
    data-page-type="area"
    data-service-name="Window cleaner in ${escapeHtml(area.area)}"
    data-service-type="Residential window cleaning in ${escapeHtml(
      area.area
    )} where the local route fits"
  >
    <a class="skip-link" href="#main">Skip to content</a>
    <div class="topbar">
      <div class="shell topbar__inner">
        <p>Local route-fit matters more than making wild coverage claims.</p>
        <div class="topbar__links">
          <a href="tel:07756514110">Call 07756 514110</a>
          <a href="sms:07756514110">Text me</a>
          <a href="${waHref}">WhatsApp</a>
        </div>
      </div>
    </div>
    <header class="site-header">
      <div class="shell header__inner">
        <a class="brand" href="index.html" aria-label="SJ Windows home">
          <span class="brand__eyebrow">${escapeHtml(area.area)}</span>
          <span class="brand__name">SJ Windows</span>
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
          <span></span><span></span><span></span><span class="sr-only">Open menu</span>
        </button>
        <nav class="site-nav" id="site-nav" aria-label="Primary">
          <a href="index.html">Home</a>
          <a href="index.html#calculator">Smart Quote</a>
          <a href="services.html">Services</a>
          <a href="window-cleaning-prices-colchester.html">Prices</a>
          <a href="window-cleaner-near-colchester.html">Areas</a>
          <a href="reviews.html">Reviews</a>
          <a href="contact.html">Contact</a>
        </nav>
      </div>
    </header>
    <main id="main">
      <section class="page-hero">
        <div class="shell page-hero__grid">
          <div>
            <nav class="breadcrumbs" aria-label="Breadcrumb">
              <a href="index.html">Home</a>
              <a href="window-cleaner-near-colchester.html">Areas</a>
              <span aria-current="page">${escapeHtml(area.area)}</span>
            </nav>
            <p class="eyebrow">Window Cleaner ${escapeHtml(area.area)}</p>
            <h1>Window cleaner in ${escapeHtml(area.area)}</h1>
            <p class="hero__lead">
              If you’re looking for a window cleaner in ${escapeHtml(
                area.area
              )}, I may be able to help where the job fits the local route.
            </p>
            <p>
              I’m Sam, and you deal directly with me from quote to clean. No office, no call centre,
              and no pretending every postcode automatically makes sense.
            </p>
            <div class="hero__actions">
              <a class="button" href="index.html#calculator">Get a guide price</a>
              <a class="button button--ghost" href="contact.html">Ask me directly</a>
            </div>
          </div>
          <aside class="hero-card">
            <p class="hero-card__kicker">Usually works well for</p>
            <ul>
              <li>Regular 4, 6, or 8-weekly cleans where the route fits</li>
              <li>Homes that want direct contact with me from start to finish</li>
              <li>People who want a practical, local service rather than anything corporate</li>
            </ul>
          </aside>
        </div>
      </section>

      <section class="section">
        <div class="shell split">
          <div>
            <p class="eyebrow">Regular Window Cleaning In ${escapeHtml(area.area)}</p>
            <h2>Regular local rounds usually work better than trying to keep it ad-hoc.</h2>
            <p>
              Regular window cleaning in ${escapeHtml(
                area.area
              )} is usually the best fit if you want the property kept on top of properly without
              everything becoming a catch-up clean every time.
            </p>
          </div>
          <div class="stacked-cards">
            <article class="mini-card"><h3>Direct contact</h3><p>You deal with me directly from the first message through to the clean itself.</p></article>
            <article class="mini-card"><h3>Frames and sills included</h3><p>As part of a normal clean, not treated like a surprise add-on.</p></article>
            <article class="mini-card"><h3>Guide prices available</h3><p>The Smart Quote tool gives you a sensible starting point before you book.</p></article>
          </div>
        </div>
      </section>

      <section class="section section--accent">
        <div class="shell split">
          <div>
            <p class="eyebrow">Why Local Route-Fit Matters</p>
            <h2>${escapeHtml(area.area)} works best where the route stays practical and reliable.</h2>
            <p>${escapeHtml(area.routeCopy)}</p>
          </div>
          <div class="stacked-cards">
            <article class="mini-card"><h3>Keep it dependable</h3><p>Staying within a sensible route helps keep communication and repeat visits reliable.</p></article>
            <article class="mini-card"><h3>Good for regular rounds</h3><p>It is usually the regular jobs that fit best, rather than pretending every one-off works perfectly.</p></article>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="shell split">
          <div>
            <p class="eyebrow">What Affects The Price In ${escapeHtml(area.area)}</p>
            <h2>Guide prices still depend on the property, not just the postcode.</h2>
            <p>${escapeHtml(area.priceCopy)}</p>
          </div>
          <div class="stacked-cards">
            <article class="mini-card"><h3>Amount of glass</h3><p>Window count, doors, skylights, bays, and any extras all affect the time needed.</p></article>
            <article class="mini-card"><h3>Access and height</h3><p>Two-storey and mixed-height properties naturally differ from easier single-storey jobs.</p></article>
            <article class="mini-card"><h3>Condition and frequency</h3><p>A well-kept regular clean is often simpler than a heavily overdue first visit.</p></article>
          </div>
        </div>
      </section>

      <section class="section section--accent">
        <div class="shell">
          <div class="section-heading">
            <p class="eyebrow">Nearby Areas Covered</p>
            <h2>${escapeHtml(area.nearbySummary)}</h2>
            <p>
              If you are searching around ${escapeHtml(
                area.area
              )} but your actual postcode is in one of the nearby places below, use the most relevant page or just send the postcode and I’ll let you know.
            </p>
          </div>
          <div class="area-cloud">
            ${areaLinks(area.nearby)}
          </div>
        </div>
      </section>

      <section class="section">
        <div class="shell">
          <div class="section-heading">
            <p class="eyebrow">Local Proof</p>
            <h2>A few kind words from nearby customers on the wider Colchester route.</h2>
          </div>
          <div class="review-grid ${area.reviewKeys.length > 1 ? "review-grid--two" : "review-grid--one"}">
            ${reviewCards(area.reviewKeys)}
          </div>
          <p class="section-linkline"><a class="text-link" href="reviews.html">Read all reviews</a></p>
        </div>
      </section>

      <section class="section section--accent">
        <div class="shell quote-panel">
          <div class="quote-panel__content">
            <p class="eyebrow">How To Get A Quote</p>
            <h2>Send the postcode and I’ll let you know what looks realistic in ${escapeHtml(
              area.area
            )}.</h2>
            <p>
              The quickest route is to use the Smart Quote first, or just text or WhatsApp the postcode,
              rough property type, and whether you want regular work or a one-off.
            </p>
            <div class="contact-points">
              <a href="index.html#calculator"><span>Smart Quote</span><strong>Get a guide price</strong></a>
              <a href="sms:07756514110"><span>Text me</span><strong>Send the postcode</strong></a>
              <a href="${waHref}"><span>WhatsApp</span><strong>Message me directly</strong></a>
            </div>
          </div>
          <div class="panel">
            <p class="eyebrow">Useful Links</p>
            <div class="link-list">
              <a class="text-link" href="window-cleaning-prices-colchester.html">Window cleaning prices in Colchester</a>
              <a class="text-link" href="residential-window-cleaning-colchester.html">Residential window cleaning</a>
              <a class="text-link" href="reviews.html">Customer reviews</a>
              <a class="text-link" href="services.html">Services</a>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="faq">
        <div class="shell">
          <div class="section-heading">
            <p class="eyebrow">FAQ</p>
            <h2>Common ${escapeHtml(area.area)} questions.</h2>
          </div>
          <div class="faq-list">
            <article class="faq-item">
              <button type="button" class="faq-toggle" aria-expanded="false">
                Do you cover ${escapeHtml(area.area)} for regular window cleaning?
              </button>
              <div class="faq-answer">
                <p>
                  Yes, where the postcode fits the wider route well. Regular cleans usually make the
                  most sense in ${escapeHtml(area.area)} if the local route stays practical.
                </p>
              </div>
            </article>
            <article class="faq-item">
              <button type="button" class="faq-toggle" aria-expanded="false">
                What affects the guide price in ${escapeHtml(area.area)}?
              </button>
              <div class="faq-answer">
                <p>${escapeHtml(area.priceCopy)}</p>
              </div>
            </article>
            <article class="faq-item">
              <button type="button" class="faq-toggle" aria-expanded="false">
                Which nearby areas do you also cover around ${escapeHtml(area.area)}?
              </button>
              <div class="faq-answer">
                <p>
                  Nearby route-fit areas often include ${escapeHtml(
                    nearbyNames
                  )}, along with the wider Colchester run where it makes sense.
                </p>
              </div>
            </article>
            <article class="faq-item">
              <button type="button" class="faq-toggle" aria-expanded="false">
                Can I get a guide price before booking?
              </button>
              <div class="faq-answer">
                <p>
                  Yes. Start with the Smart Quote tool, then send the postcode and the guide price
                  to me so I can tell you what looks realistic from there.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="shell footer__grid">
        <div>
          <p class="footer__brand">SJ Windows</p>
          <p>I’m Sam Jones.</p>
          <p>Friendly local window cleaning in Colchester and nearby villages.</p>
        </div>
        <div>
          <p class="footer__heading">Top Services</p>
          <a href="residential-window-cleaning-colchester.html">Residential window cleaning</a>
          <a href="gutter-cleaning-colchester.html">Gutter cleaning</a>
          <a href="conservatory-roof-cleaning-colchester.html">Conservatory roof cleaning</a>
        </div>
        <div>
          <p class="footer__heading">Top Pages</p>
          <a href="index.html#calculator">Smart Quote</a>
          <a href="window-cleaning-prices-colchester.html">Prices</a>
          <a href="reviews.html">Reviews</a>
          <a href="contact.html">Contact</a>
        </div>
        <div>
          <p class="footer__heading">Contact</p>
          <a href="tel:07756514110">07756 514110</a>
          <a href="sms:07756514110">Text me</a>
          <a href="mailto:sjwindows2020@gmail.com">sjwindows2020@gmail.com</a>
        </div>
      </div>
      <div class="shell footer__bottom">
        <p>&copy; 2026 SJ Windows</p>
      </div>
    </footer>

    <div class="mobile-cta">
      <a href="tel:07756514110">Call</a>
      <a href="sms:07756514110">Text</a>
      <a href="${waHref}">WhatsApp</a>
      <a href="index.html#calculator">Quote</a>
    </div>
  </body>
</html>`;
}

for (const area of areas) {
  writeFileSync(resolve(process.cwd(), area.slug), page(area));
}

console.log(`Generated ${areas.length} priority area pages.`);

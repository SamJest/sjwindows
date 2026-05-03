import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const lastmod = "2026-05-01";
const siteUrl = "https://sjwindowscolchester.co.uk";
const waHref =
  "https://wa.me/447756514110?text=Hi%20Sam%2C%20I%27m%20looking%20for%20a%20car%20cleaning%20quote.%20My%20postcode%20is...";

const areas = [
  {
    area: "Wivenhoe",
    slug: "car-cleaning-wivenhoe.html",
    intro:
      "Wivenhoe can work well where the booking fits neatly with the eastern side of the local round.",
    nearby: [
      ["car-cleaning-rowhedge.html", "Rowhedge"],
      ["car-cleaning-greenstead.html", "Greenstead"],
      ["car-cleaning-brightlingsea.html", "Brightlingsea"],
    ],
  },
  {
    area: "Lexden",
    slug: "car-cleaning-lexden.html",
    intro:
      "Lexden is one of the most practical Colchester-side areas for a simple exterior car clean.",
    nearby: [
      ["car-cleaning-stanway.html", "Stanway"],
      ["car-cleaning-west-bergholt.html", "West Bergholt"],
      ["car-cleaning-colchester.html", "Colchester"],
    ],
  },
  {
    area: "Stanway",
    slug: "car-cleaning-stanway.html",
    intro:
      "Stanway works best when it ties in with west Colchester, Lexden, and nearby bookings.",
    nearby: [
      ["car-cleaning-lexden.html", "Lexden"],
      ["car-cleaning-west-bergholt.html", "West Bergholt"],
      ["car-cleaning-colchester.html", "Colchester"],
    ],
  },
  {
    area: "Greenstead",
    slug: "car-cleaning-greenstead.html",
    intro:
      "Greenstead is close to my usual Colchester work, so send the postcode if you want a car clean added.",
    nearby: [
      ["car-cleaning-wivenhoe.html", "Wivenhoe"],
      ["car-cleaning-rowhedge.html", "Rowhedge"],
      ["car-cleaning-highwoods.html", "Highwoods"],
    ],
  },
  {
    area: "Highwoods",
    slug: "car-cleaning-highwoods.html",
    intro:
      "Highwoods is a good one to ask about where the booking links with north Colchester work.",
    nearby: [
      ["car-cleaning-mile-end-colchester.html", "Mile End"],
      ["car-cleaning-greenstead.html", "Greenstead"],
      ["car-cleaning-colchester.html", "Colchester"],
    ],
  },
  {
    area: "Mile End",
    slug: "car-cleaning-mile-end-colchester.html",
    intro:
      "Mile End can fit well for car cleaning where the postcode sits naturally with north Colchester jobs.",
    nearby: [
      ["car-cleaning-highwoods.html", "Highwoods"],
      ["car-cleaning-west-bergholt.html", "West Bergholt"],
      ["car-cleaning-colchester.html", "Colchester"],
    ],
  },
  {
    area: "Rowhedge",
    slug: "car-cleaning-rowhedge.html",
    intro:
      "Rowhedge is most practical when it links with Wivenhoe, Greenstead, or other eastern route work.",
    nearby: [
      ["car-cleaning-wivenhoe.html", "Wivenhoe"],
      ["car-cleaning-greenstead.html", "Greenstead"],
      ["car-cleaning-mersea-island.html", "Mersea Island"],
    ],
  },
  {
    area: "West Bergholt",
    slug: "car-cleaning-west-bergholt.html",
    intro:
      "For West Bergholt, send the postcode and I will check whether I can fit it in.",
    nearby: [
      ["car-cleaning-lexden.html", "Lexden"],
      ["car-cleaning-stanway.html", "Stanway"],
      ["car-cleaning-mile-end-colchester.html", "Mile End"],
    ],
  },
  {
    area: "Brightlingsea",
    slug: "car-cleaning-brightlingsea.html",
    intro:
      "Brightlingsea bookings are best checked by postcode because they need to fit the eastern side of the round.",
    nearby: [
      ["car-cleaning-wivenhoe.html", "Wivenhoe"],
      ["car-cleaning-rowhedge.html", "Rowhedge"],
      ["car-cleaning-mersea-island.html", "Mersea Island"],
    ],
  },
  {
    area: "Mersea Island",
    slug: "car-cleaning-mersea-island.html",
    intro:
      "Mersea Island can be discussed where the booking fits the Colchester and coastal side of the round.",
    nearby: [
      ["car-cleaning-rowhedge.html", "Rowhedge"],
      ["car-cleaning-brightlingsea.html", "Brightlingsea"],
      ["car-cleaning-colchester.html", "Colchester"],
    ],
  },
  {
    area: "Tiptree",
    slug: "car-cleaning-tiptree.html",
    intro:
      "Tiptree is best checked by postcode, especially if you want the car clean to fit around nearby village work.",
    nearby: [
      ["car-cleaning-colchester.html", "Colchester"],
      ["car-cleaning-stanway.html", "Stanway"],
      ["car-cleaning-west-bergholt.html", "West Bergholt"],
    ],
  },
  {
    area: "Manningtree",
    slug: "car-cleaning-manningtree.html",
    intro:
      "Manningtree can be considered where it lines up sensibly with the north-east side of the round.",
    nearby: [
      ["car-cleaning-colchester.html", "Colchester"],
      ["car-cleaning-wivenhoe.html", "Wivenhoe"],
      ["car-cleaning-brightlingsea.html", "Brightlingsea"],
    ],
  },
];

const priceCards = `
            <article class="feature-card"><h3>Small car</h3><p><strong>&pound;12</strong> for a straightforward exterior clean.</p></article>
            <article class="feature-card"><h3>Medium car</h3><p><strong>&pound;15</strong> for a standard medium car.</p></article>
            <article class="feature-card"><h3>Large car</h3><p><strong>&pound;17.50</strong> for a larger car, SUV, or similar.</p></article>
`;

const header = (eyebrow) => `
    <a class="skip-link" href="#main">Skip to content</a>
    <div class="topbar">
      <div class="shell topbar__inner">
        <p>Exterior car cleaning by SJ Windows where the address works for the round.</p>
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
          <span class="brand__eyebrow">${eyebrow}</span>
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
    </header>`;

const footer = `
    <footer class="site-footer">
      <div class="shell footer__grid">
        <div><p class="footer__brand">SJ Windows</p><p>I'm Sam Jones.</p><p>Friendly local window cleaning and exterior car cleaning in Colchester and nearby villages.</p></div>
        <div><p class="footer__heading">Top Services</p><a href="residential-window-cleaning-colchester.html">Residential window cleaning</a><a href="car-cleaning-colchester.html">Car cleaning</a><a href="gutter-cleaning-colchester.html">Gutter cleaning</a><a href="conservatory-roof-cleaning-colchester.html">Conservatory roof cleaning</a></div>
        <div><p class="footer__heading">Car Cleaning Areas</p><a href="car-cleaning-colchester.html">Colchester</a><a href="car-cleaning-wivenhoe.html">Wivenhoe</a><a href="car-cleaning-lexden.html">Lexden</a><a href="car-cleaning-stanway.html">Stanway</a></div>
        <div><p class="footer__heading">Contact</p><a href="tel:07756514110">07756 514110</a><a href="sms:07756514110">Text me</a><a href="mailto:sjwindows2020@gmail.com">sjwindows2020@gmail.com</a></div>
      </div>
      <div class="shell footer__bottom"><p>&copy; 2026 SJ Windows</p></div>
    </footer>
    <div class="mobile-cta">
      <a href="tel:07756514110">Call</a><a href="sms:07756514110">Text</a><a href="${waHref}">WhatsApp</a><a href="car-cleaning-colchester.html">Cars</a>
    </div>`;

function pageShell({ title, description, slug, serviceName, serviceType, body }) {
  return `<!DOCTYPE html>
<html lang="en-GB">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="robots" content="index,follow" />
    <meta name="theme-color" content="#132331" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="en_GB" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${siteUrl}/${slug}" />
    <meta property="og:image" content="${siteUrl}/sj-windows-social.jpg" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="canonical" href="${siteUrl}/${slug}" />
    <link rel="icon" href="favicon.svg" type="image/svg+xml" />
    <link rel="stylesheet" href="styles.css" />
    <script src="app.js" defer></script>
  </head>
  <body data-page-type="service" data-service-name="${serviceName}" data-service-type="${serviceType}">
${body}
${footer}
  </body>
</html>
`;
}

function contactPanel(areaLabel = "Colchester") {
  return `
      <section class="section section--accent">
        <div class="shell quote-panel">
          <div class="quote-panel__content">
            <p class="eyebrow">Book Or Ask</p>
            <h2>Send the postcode, car size, and whether there is an accessible outside tap.</h2>
            <p>
              Text or WhatsApp is usually easiest. If there is no accessible external tap, please say so before booking so I can add the &pound;5 no-tap charge.
            </p>
            <div class="contact-points">
              <a href="sms:07756514110"><span>Text me</span><strong>Send car size and postcode</strong></a>
              <a href="${waHref}"><span>WhatsApp</span><strong>Message me directly</strong></a>
              <a href="contact.html"><span>Contact page</span><strong>Use the form</strong></a>
            </div>
          </div>
          <div class="panel">
            <p class="eyebrow">Helpful Links</p>
            <div class="link-list">
              <a class="text-link" href="car-cleaning-colchester.html">Car cleaning prices in Colchester</a>
              <a class="text-link" href="car-cleaning-near-colchester.html">Car cleaning areas near Colchester</a>
              <a class="text-link" href="services.html">All services</a>
              <a class="text-link" href="window-cleaner-near-colchester.html">Window cleaning areas</a>
            </div>
          </div>
        </div>
      </section>`;
}

function mainPage() {
  const areaLinks = areas
    .map(({ area, slug }) => `<a class="area-chip" href="${slug}">${area}</a>`)
    .join("");

  const body = `${header("Car Cleaning")}
    <main id="main">
      <section class="page-hero">
        <div class="shell page-hero__grid">
          <div>
            <nav class="breadcrumbs" aria-label="Breadcrumb">
              <a href="index.html">Home</a>
              <a href="services.html">Services</a>
              <span aria-current="page">Car cleaning</span>
            </nav>
            <p class="eyebrow">Car Cleaning Colchester</p>
            <h1>Car cleaning in Colchester from SJ Windows</h1>
            <p class="hero__lead">
              Straightforward exterior car cleaning with simple flat-rate pricing for small, medium, and large cars.
            </p>
            <p>
              This is a practical add-on service where the route and setup fit. Tell me the postcode, car size, and whether there is an accessible external tap.
            </p>
            <div class="hero__actions">
              <a class="button" href="sms:07756514110">Text me</a>
              <a class="button button--ghost" href="${waHref}">WhatsApp me</a>
            </div>
          </div>
          <aside class="hero-card">
            <p class="hero-card__kicker">Flat rates</p>
            <ul>
              <li>Small car: &pound;12</li>
              <li>Medium car: &pound;15</li>
              <li>Large car: &pound;17.50</li>
              <li>No accessible external tap: add &pound;5</li>
            </ul>
          </aside>
        </div>
      </section>

      <section class="section">
        <div class="shell">
          <div class="section-heading">
            <p class="eyebrow">Prices</p>
            <h2>Simple car cleaning prices before you message.</h2>
            <p>
              These are flat rates for a straightforward exterior car clean. Heavier jobs, unusual vehicles, or anything beyond a normal outside clean can be discussed first.
            </p>
          </div>
          <div class="card-grid card-grid--three">
${priceCards}
            <article class="feature-card"><h3>No outside tap</h3><p>Add <strong>&pound;5</strong> if there is no accessible external tap at the property.</p></article>
            <article class="feature-card"><h3>Local service</h3><p>Best for Colchester and nearby addresses I already cover.</p></article>
            <article class="feature-card"><h3>Easy to ask</h3><p>Send the postcode, car size, and a quick photo if you want me to check the size.</p></article>
          </div>
        </div>
      </section>

      <section class="section section--accent">
        <div class="shell split">
          <div>
            <p class="eyebrow">What To Send</p>
            <h2>The first message can stay very simple.</h2>
            <p>
              Send your postcode, whether the car is small, medium, or large, and whether there is an accessible external tap. If you are not sure on size, send the make/model or a photo.
            </p>
          </div>
          <div class="stacked-cards">
            <article class="mini-card"><h3>Small cars</h3><p>City cars and smaller hatchbacks usually sit in the &pound;12 bracket.</p></article>
            <article class="mini-card"><h3>Medium cars</h3><p>Most standard hatchbacks, saloons, and estates usually sit in the &pound;15 bracket.</p></article>
            <article class="mini-card"><h3>Large cars</h3><p>Larger SUVs, people carriers, and bigger vehicles usually sit in the &pound;17.50 bracket.</p></article>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="shell">
          <div class="section-heading">
            <p class="eyebrow">Areas</p>
            <h2>Car cleaning in Colchester and nearby areas.</h2>
            <p>
              These pages show the areas I can usually consider. Send the postcode and I will check properly.
            </p>
          </div>
          <div class="area-cloud">
            <a class="area-chip" href="car-cleaning-colchester.html">Colchester</a>${areaLinks}
          </div>
          <p class="section-linkline"><a class="text-link" href="car-cleaning-near-colchester.html">See car cleaning areas near Colchester</a></p>
        </div>
      </section>

      <section class="section section--accent" id="faq">
        <div class="shell">
          <div class="section-heading"><p class="eyebrow">FAQ</p><h2>Car cleaning questions.</h2></div>
          <div class="faq-list">
            <article class="faq-item"><button type="button" class="faq-toggle" aria-expanded="false">How much is car cleaning in Colchester?</button><div class="faq-answer"><p>Small cars are &pound;12, medium cars are &pound;15, and large cars are &pound;17.50. If there is no accessible external tap, add &pound;5.</p></div></article>
            <article class="faq-item"><button type="button" class="faq-toggle" aria-expanded="false">What should I send when I ask?</button><div class="faq-answer"><p>Send the postcode, car size, and whether there is an accessible outside tap. A photo or make and model helps if you are not sure which size bracket applies.</p></div></article>
            <article class="faq-item"><button type="button" class="faq-toggle" aria-expanded="false">Do you cover nearby areas?</button><div class="faq-answer"><p>Yes, where the booking works for the round. Wivenhoe, Lexden, Stanway, Greenstead, Highwoods, Rowhedge, West Bergholt, Brightlingsea, Mersea, Tiptree, and Manningtree can all be discussed.</p></div></article>
          </div>
        </div>
      </section>
${contactPanel()}
    </main>`;

  return pageShell({
    title: "Car Cleaning Colchester | Flat Rate Car Wash Prices | SJ Windows",
    description:
      "Car cleaning in Colchester from SJ Windows. Flat rates: small cars &pound;12, medium cars &pound;15, large cars &pound;17.50, plus &pound;5 if there is no accessible external tap.",
    slug: "car-cleaning-colchester.html",
    serviceName: "Car cleaning in Colchester",
    serviceType: "Exterior car cleaning in Colchester",
    body,
  });
}

function hubPage() {
  const cards = areas
    .map(
      ({ area, slug, intro }) => `
            <article class="service-card">
              <h3>Car cleaning in ${area}</h3>
              <p>${intro}</p>
              <a class="text-link" href="${slug}">Car cleaning in ${area}</a>
            </article>`
    )
    .join("");

  const body = `${header("Car Areas")}
    <main id="main">
      <section class="page-hero">
        <div class="shell page-hero__grid">
          <div>
            <nav class="breadcrumbs" aria-label="Breadcrumb">
              <a href="index.html">Home</a>
              <a href="services.html">Services</a>
              <span aria-current="page">Car cleaning areas</span>
            </nav>
            <p class="eyebrow">Car Cleaning Near Colchester</p>
            <h1>Car cleaning near Colchester and surrounding areas</h1>
            <p class="hero__lead">
              Local car cleaning pages for Colchester, nearby neighbourhoods, and surrounding villages where the route can make sense.
            </p>
            <p>
              Prices stay simple: &pound;12 small car, &pound;15 medium car, &pound;17.50 large car, plus &pound;5 if there is no accessible external tap.
            </p>
          </div>
          <aside class="hero-card">
            <p class="hero-card__kicker">Quick check</p>
            <ul>
              <li>Send postcode</li>
              <li>Send car size</li>
              <li>Say whether there is an outside tap</li>
              <li>Ask if I can cover the address</li>
            </ul>
          </aside>
        </div>
      </section>
      <section class="section">
        <div class="shell">
          <div class="section-heading">
            <p class="eyebrow">Area Pages</p>
            <h2>Long-tail car cleaning pages around the SJ Windows route.</h2>
          </div>
          <div class="card-grid card-grid--three">
            <article class="service-card">
              <h3>Car cleaning in Colchester</h3>
              <p>The main page for exterior car cleaning prices and how the service works.</p>
              <a class="text-link" href="car-cleaning-colchester.html">Car cleaning in Colchester</a>
            </article>${cards}
          </div>
        </div>
      </section>
${contactPanel()}
    </main>`;

  return pageShell({
    title: "Car Cleaning Near Colchester | Areas Covered | SJ Windows",
    description:
      "Car cleaning near Colchester from SJ Windows, including Wivenhoe, Lexden, Stanway, Greenstead, Highwoods, Rowhedge, West Bergholt, Brightlingsea, Mersea, Tiptree, and Manningtree.",
    slug: "car-cleaning-near-colchester.html",
    serviceName: "Car cleaning near Colchester",
    serviceType: "Exterior car cleaning in Colchester and surrounding areas",
    body,
  });
}

function areaPage(areaData) {
  const { area, slug, intro, nearby } = areaData;
  const nearbyLinks = nearby
    .map(([href, label]) => `<a class="area-chip" href="${href}">${label}</a>`)
    .join("");
  const description = `Car cleaning in ${area} from SJ Windows on suitable local rounds. Flat rates: small cars &pound;12, medium cars &pound;15, large cars &pound;17.50, plus &pound;5 with no accessible external tap.`;
  const body = `${header(area)}
    <main id="main">
      <section class="page-hero">
        <div class="shell page-hero__grid">
          <div>
            <nav class="breadcrumbs" aria-label="Breadcrumb">
              <a href="index.html">Home</a>
              <a href="car-cleaning-near-colchester.html">Car cleaning areas</a>
              <span aria-current="page">${area}</span>
            </nav>
            <p class="eyebrow">Car Cleaning ${area}</p>
            <h1>Car cleaning in ${area}</h1>
            <p class="hero__lead">${intro}</p>
            <p>
              The pricing is kept simple: &pound;12 for a small car, &pound;15 for a medium car, and &pound;17.50 for a large car. If there is no accessible external tap, add &pound;5.
            </p>
            <div class="hero__actions">
              <a class="button" href="sms:07756514110">Text me</a>
              <a class="button button--ghost" href="${waHref}">WhatsApp me</a>
            </div>
          </div>
          <aside class="hero-card">
            <p class="hero-card__kicker">Before booking</p>
            <ul>
              <li>Send the ${area} postcode</li>
              <li>Say small, medium, or large car</li>
              <li>Mention whether there is an outside tap</li>
              <li>Send a photo if the size is unclear</li>
            </ul>
          </aside>
        </div>
      </section>
      <section class="section">
        <div class="shell">
          <div class="section-heading"><p class="eyebrow">Prices</p><h2>Car cleaning prices in ${area}.</h2></div>
          <div class="card-grid card-grid--three">
${priceCards}
          </div>
          <p class="section-linkline">No accessible external tap at the property? Add <strong>&pound;5</strong>.</p>
        </div>
      </section>
      <section class="section section--accent">
        <div class="shell split">
          <div>
            <p class="eyebrow">Local Check</p>
            <h2>Car cleaning in ${area} works best when the booking is practical.</h2>
            <p>
              ${intro} Send the postcode first and I will let you know whether it looks realistic.
            </p>
          </div>
          <div class="stacked-cards">
            <article class="mini-card"><h3>Simple flat rates</h3><p>The price bracket is based on car size, with the no-tap charge kept clear upfront.</p></article>
            <article class="mini-card"><h3>Handy add-on</h3><p>Car cleaning can be added to local exterior cleaning work when the setup makes sense.</p></article>
            <article class="mini-card"><h3>Direct contact</h3><p>You are messaging me directly, so any access or tap questions can be cleared up quickly.</p></article>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="shell">
          <div class="section-heading"><p class="eyebrow">Nearby Areas</p><h2>Other car cleaning pages near ${area}.</h2></div>
          <div class="area-cloud">${nearbyLinks}<a class="area-chip" href="car-cleaning-near-colchester.html">All car cleaning areas</a></div>
        </div>
      </section>
      <section class="section section--accent" id="faq">
        <div class="shell">
          <div class="section-heading"><p class="eyebrow">FAQ</p><h2>Car cleaning questions in ${area}.</h2></div>
          <div class="faq-list">
            <article class="faq-item"><button type="button" class="faq-toggle" aria-expanded="false">How much is car cleaning in ${area}?</button><div class="faq-answer"><p>Small cars are &pound;12, medium cars are &pound;15, and large cars are &pound;17.50. If there is no accessible external tap, add &pound;5.</p></div></article>
            <article class="faq-item"><button type="button" class="faq-toggle" aria-expanded="false">Do you need an outside tap?</button><div class="faq-answer"><p>An accessible external tap is best. If there is no accessible outside tap at the property, the price has a &pound;5 extra charge.</p></div></article>
            <article class="faq-item"><button type="button" class="faq-toggle" aria-expanded="false">How do I check if you cover ${area}?</button><div class="faq-answer"><p>Text or WhatsApp the postcode, car size, and whether there is an outside tap. I will let you know what looks realistic.</p></div></article>
          </div>
        </div>
      </section>
${contactPanel(area)}
    </main>`;

  return pageShell({
    title: `Car Cleaning ${area} | Flat Rate Car Wash Prices | SJ Windows`,
    description,
    slug,
    serviceName: `Car cleaning in ${area}`,
    serviceType: `Exterior car cleaning in ${area}`,
    body,
  });
}

writeFileSync(resolve(root, "car-cleaning-colchester.html"), mainPage());
writeFileSync(resolve(root, "car-cleaning-near-colchester.html"), hubPage());
for (const area of areas) {
  writeFileSync(resolve(root, area.slug), areaPage(area));
}

const newPages = [
  "car-cleaning-colchester.html",
  "car-cleaning-near-colchester.html",
  ...areas.map(({ slug }) => slug),
];
const sitemapPath = resolve(root, "sitemap.xml");
let sitemap = readFileSync(sitemapPath, "utf8");
for (const slug of newPages) {
  const loc = `${siteUrl}/${slug}`;
  if (sitemap.includes(`<loc>${loc}</loc>`)) continue;
  const entry = `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${slug === "car-cleaning-colchester.html" ? "0.85" : slug === "car-cleaning-near-colchester.html" ? "0.8" : "0.65"}</priority>
  </url>
`;
  sitemap = sitemap.replace("</urlset>", `${entry}</urlset>`);
}
writeFileSync(sitemapPath, sitemap);

console.log(`Generated ${newPages.length} car cleaning pages and updated sitemap.xml`);

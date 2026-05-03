# SJWindows

This project is now a fully static window cleaning website built to target:

- `window cleaner colchester`
- higher-value residential enquiries
- larger homes with more glass
- homeowners who care about appearance and reliability more than cheap pricing

## What It Includes

- SEO-focused marketing pages
- A static in-browser quote calculator
- Premium residential positioning
- Residential and commercial support pages

## Main Files

- `index.html`: Main Colchester landing page with the quote calculator
- `residential-window-cleaning-colchester.html`: Residential support page for larger homes
- `commercial-window-cleaning-colchester.html`: Secondary commercial support page
- `app.js`: Business details plus calculator logic
- `styles.css`: Shared styling
- `scripts/generate-local-pages.mjs`: Generates the local area, service-area, street, method and sitemap pages
- `scripts/validate-local-pages.mjs`: Checks generated pages, sitemap entries, titles, descriptions and internal links

## How To Use It

Because the site is static, you can:

- open `index.html` directly in a browser
- upload the files to any normal static host
- serve it from a simple web server later if you want

No backend is required for the calculator.

## Local Page Generation

After editing local page data, run:

```bash
node scripts/generate-local-pages.mjs
node scripts/validate-local-pages.mjs
```

The local generator keeps the site static and writes root-ready `.html` files plus `sitemap.xml`.

## Edit Before Launch

Open `app.js` and update:

- `businessName`
- `phoneDisplay`
- `phoneHref`
- `email`
- `websiteUrl`
- `addressLine1`
- `postalCode`
- `serviceAreas`
- `openingHours`

## Calculator Logic

The quote calculator gives a guide price using:

- property type
- glazing count
- french doors, bifolds, skylights
- conservatory panels
- solar panels
- storeys
- access difficulty
- condition level
- cleaning frequency
- travel zone
- additional services

The calculator is designed to support premium positioning by pricing around time and complexity rather than discount messaging.

## Best Next Upgrades

- Add your live domain to `app.js`, then update `robots.txt` and `sitemap.xml`
- Add real photos of larger homes you clean
- Add strong Google reviews
- Add before-and-after examples
- Add route-specific service areas you genuinely want to dominate
- Tune the calculator values to match your real timings and pricing

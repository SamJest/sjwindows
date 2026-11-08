const base = "https://sjwindowscolchester.co.uk";

// Keep the business identity and page/service purpose in static HTML, including
// pages produced by the priority and car template overrides.
export function staticSchema({ title, description, slug, serviceName, serviceType, areaName = "Colchester" }) {
  const url = `${base}/${slug}`;
  return JSON.stringify([
    { "@context": "https://schema.org", "@type": "WebPage", "@id": `${url}#webpage`, url,
      name: title, description, isPartOf: { "@id": `${base}/#website` }, about: { "@id": `${base}/#business` } },
    { "@context": "https://schema.org", "@type": "WebSite", "@id": `${base}/#website`, url: `${base}/`, name: "SJ Windows" },
    { "@context": "https://schema.org", "@type": "LocalBusiness", "@id": `${base}/#business`,
      name: "SJ Windows", url: `${base}/`, telephone: "+447756514110", email: "sjwindows2020@gmail.com",
      image: `${base}/sj-windows-social.jpg` },
    { "@context": "https://schema.org", "@type": "Service", name: serviceName, serviceType,
      description, url, provider: { "@id": `${base}/#business` }, areaServed: { "@type": "Place", name: areaName } },
  ]).replaceAll("<", "\\u003c");
}

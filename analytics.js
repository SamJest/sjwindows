// Local previews and test fixtures must not send hits to the live GA4 property.
(() => {
  if (location.protocol !== "https:" ||
      !["sjwindowscolchester.co.uk", "www.sjwindowscolchester.co.uk"].includes(location.hostname)) return;
  if (window.sjAnalyticsInitialized) return;
  window.sjAnalyticsInitialized = true;
  const measurementId = "G-MCX2ZWX8DQ";
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    page_location: location.origin + location.pathname,
    page_referrer: document.referrer.split("?")[0].split("#")[0],
  });
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);
})();

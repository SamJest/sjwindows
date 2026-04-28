const site = {
  businessName: "SJ Windows",
  ownerName: "Sam Jones",
  phoneDisplay: "07756 514110",
  phoneDigits: "07756514110",
  phoneInternational: "447756514110",
  phoneHref: "tel:07756514110",
  smsHref: "sms:07756514110",
  email: "sjwindows2020@gmail.com",
  websiteUrl: "https://sjwindowscolchester.co.uk",
  ogImagePath: "/sj-windows-social.jpg",
  priceRange: "Guide prices by property",
  description:
    "Friendly, local window cleaning in Colchester and nearby villages, where you deal directly with me and can get a sensible guide price online.",
  serviceAreas: [
    "Colchester",
    "Wivenhoe",
    "Lexden",
    "Stanway",
    "Greenstead",
    "Highwoods",
    "Mile End",
    "Prettygate",
    "Rowhedge",
    "West Bergholt",
    "Brightlingsea",
    "Mersea Island",
    "Manningtree",
    "Tiptree",
    "Marks Tey",
    "Kelvedon",
    "Copford",
    "Dedham",
    "East Bergholt",
    "Eight Ash Green",
    "Elmstead",
    "Elmstead Market",
    "Feering",
    "Frating",
    "Great Bentley",
    "Great Horkesley",
    "Heckfordbridge",
    "Holland-on-Sea",
    "Holton St Mary",
    "Lawford",
    "Ardleigh",
    "Layer-de-la-Haye",
    "Abberton",
    "Fingringhoe",
    "Nayland",
    "Stratford St Mary",
    "Thorpe-le-Soken",
    "Thorrington",
    "Weeley",
  ],
};

const quote = {
  rate: 48,
  visit: 15,
  travel: { core: 8, extended: 18 },
  windowWeights: {
    small: 0.7,
    medium: 1,
    large: 1.45,
    bay: 2.8,
  },
  property: {
    flat_maisonette: {
      label: "Flat or maisonette",
      minPrice: 12,
      prep: 1.5,
      unitRate: 0.72,
      extraFactor: 0.92,
      defaults: {
        smallWindows: 4,
        mediumWindows: 2,
        largeWindows: 0,
        bayWindows: 0,
        frenchDoors: 0,
        bifoldSets: 0,
        skylights: 0,
        conservatoryPanels: 0,
        solarPanels: 0,
        storeys: "1",
        accessLevel: "straightforward",
        conditionLevel: "maintained",
        frequency: "every6",
        travelZone: "core",
      },
    },
    terrace_house: {
      label: "Terraced house",
      minPrice: 12,
      prep: 1,
      unitRate: 0.75,
      extraFactor: 0.95,
      defaults: {
        smallWindows: 4,
        mediumWindows: 4,
        largeWindows: 0,
        bayWindows: 0,
        frenchDoors: 0,
        bifoldSets: 0,
        skylights: 0,
        conservatoryPanels: 0,
        solarPanels: 0,
        storeys: "2",
        accessLevel: "standard",
        conditionLevel: "maintained",
        frequency: "every6",
        travelZone: "core",
      },
    },
    bungalow: {
      label: "Bungalow",
      minPrice: 10,
      prep: 2,
      unitRate: 0.84,
      extraFactor: 0.96,
      defaults: {
        smallWindows: 4,
        mediumWindows: 4,
        largeWindows: 0,
        bayWindows: 0,
        frenchDoors: 0,
        bifoldSets: 0,
        skylights: 0,
        conservatoryPanels: 0,
        solarPanels: 0,
        storeys: "1",
        accessLevel: "straightforward",
        conditionLevel: "maintained",
        frequency: "every6",
        travelZone: "core",
      },
    },
    semi_detached: {
      label: "Semi-detached house",
      minPrice: 12,
      prep: 2.5,
      unitRate: 0.9,
      extraFactor: 1,
      defaults: {
        smallWindows: 4,
        mediumWindows: 6,
        largeWindows: 0,
        bayWindows: 0,
        frenchDoors: 0,
        bifoldSets: 0,
        skylights: 0,
        conservatoryPanels: 0,
        solarPanels: 0,
        storeys: "2",
        accessLevel: "standard",
        conditionLevel: "maintained",
        frequency: "every6",
        travelZone: "core",
      },
    },
    detached_family: {
      label: "Detached family home",
      minPrice: 15,
      prep: 4,
      unitRate: 1.06,
      extraFactor: 1.04,
      defaults: {
        smallWindows: 4,
        mediumWindows: 10,
        largeWindows: 4,
        bayWindows: 0,
        frenchDoors: 1,
        bifoldSets: 0,
        skylights: 0,
        conservatoryPanels: 0,
        solarPanels: 0,
        storeys: "2",
        accessLevel: "standard",
        conditionLevel: "maintained",
        frequency: "every6",
        travelZone: "core",
      },
    },
    executive_home: {
      label: "Executive home",
      minPrice: 15,
      prep: 6,
      unitRate: 1.18,
      extraFactor: 1.08,
      defaults: {
        smallWindows: 4,
        mediumWindows: 14,
        largeWindows: 6,
        bayWindows: 1,
        frenchDoors: 2,
        bifoldSets: 1,
        skylights: 2,
        conservatoryPanels: 0,
        solarPanels: 0,
        storeys: "2",
        accessLevel: "standard",
        conditionLevel: "maintained",
        frequency: "every6",
        travelZone: "core",
      },
    },
    period_property: {
      label: "Period property",
      minPrice: 15,
      prep: 8,
      unitRate: 1.35,
      extraFactor: 1.14,
      defaults: {
        smallWindows: 6,
        mediumWindows: 8,
        largeWindows: 2,
        bayWindows: 2,
        frenchDoors: 1,
        bifoldSets: 0,
        skylights: 1,
        conservatoryPanels: 0,
        solarPanels: 0,
        storeys: "2",
        accessLevel: "awkward",
        conditionLevel: "standard",
        frequency: "every6",
        travelZone: "core",
      },
    },
    large_townhouse: {
      label: "Large townhouse",
      minPrice: 15,
      prep: 6,
      unitRate: 1.18,
      extraFactor: 1.08,
      defaults: {
        smallWindows: 4,
        mediumWindows: 10,
        largeWindows: 2,
        bayWindows: 1,
        frenchDoors: 1,
        bifoldSets: 0,
        skylights: 1,
        conservatoryPanels: 0,
        solarPanels: 0,
        storeys: "3",
        accessLevel: "standard",
        conditionLevel: "maintained",
        frequency: "every6",
        travelZone: "core",
      },
    },
    country_home: {
      label: "Country home or substantial property",
      minPrice: 15,
      prep: 10,
      unitRate: 1.5,
      extraFactor: 1.18,
      defaults: {
        smallWindows: 6,
        mediumWindows: 16,
        largeWindows: 6,
        bayWindows: 1,
        frenchDoors: 2,
        bifoldSets: 1,
        skylights: 3,
        conservatoryPanels: 0,
        solarPanels: 0,
        storeys: "2",
        accessLevel: "awkward",
        conditionLevel: "standard",
        frequency: "every6",
        travelZone: "extended",
      },
    },
  },
  storey: {
    1: ["Single storey", 0],
    2: ["Two storeys", 6],
    3: ["Three storeys", 14],
    4: ["Four storeys / mixed height", 24],
  },
  access: {
    straightforward: ["Straightforward access", 0.95],
    standard: ["Standard access", 1],
    awkward: ["Awkward access", 1.12],
    specialist: ["Specialist / delicate access", 1.22],
  },
  condition: {
    maintained: ["Regularly maintained", 0.95],
    standard: ["Average build-up", 1],
    overdue: ["Overdue clean", 1.12],
    first_clean: ["Heavy first clean", 1.22],
  },
  frequency: {
    every4: [
      "Every 4 weeks",
      0.7,
      "This prices at 30% less than the standard 6-weekly guide because the windows stay on top of the build-up.",
    ],
    every6: [
      "Every 6 weeks",
      1,
      "This is the standard guide and usually the best balance for most homes.",
    ],
    every8: [
      "Every 8 weeks",
      1.4,
      "This prices at 40% more than the standard 6-weekly guide because each visit usually takes more catching up.",
    ],
    quarterly: [
      "Quarterly",
      1.5,
      "This prices at 50% more than the standard 6-weekly guide because each visit usually needs more catching up.",
    ],
    one_off: [
      "One-off visit",
      1.4,
      "One-off cleans usually take a bit longer because there's no regular round behind them.",
    ],
  },
  extra: {
    frames_sills: [
      "Paint or heavy stain removal on frames and sills",
      "f",
      0,
      30,
    ],
    interior_glass: [
      "Interior glass",
      "m",
      1.5,
      0,
    ],
    fascia_soffit: [
      "Fascia and soffit wash",
      "f",
      0,
      60,
    ],
    gutter_clear: [
      "Gutter clearing",
      "f",
      0,
      90,
    ],
    conservatory_roof: [
      "Conservatory roof clean",
      "f",
      0,
      90,
    ],
    solar_panels: [
      "Solar panel clean",
      "i",
      4,
      0,
    ],
    leaded_windows: [
      "Leaded, antique, or delicate older windows",
      "u",
      0.9,
      0,
    ],
  },
};

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

const esc = (value) =>
  String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const clamp = (value, min, max) =>
  Math.min(max, Math.max(min, Number.parseInt(value, 10) || min));
const round5 = (value) => Math.ceil(value / 5) * 5;
const round10p = (value) => Math.round(value * 10) / 10;
const money = (value) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
const trimSlash = (value) => String(value ?? "").trim().replace(/\/+$/, "");
const time = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const remainder = minutes % 60;
  return hours ? `${hours} hr${remainder ? ` ${remainder} min` : ""}` : `${remainder} min`;
};

function siteBaseUrl() {
  const configured = trimSlash(site.websiteUrl);
  if (configured) return configured;
  if (typeof location !== "undefined" && /^https?:$/.test(location.protocol)) {
    return `${location.protocol}//${location.host}`;
  }
  return "";
}

function absoluteUrl(path = "/") {
  const base = siteBaseUrl();
  if (!base) return "";
  return new URL(path, `${base}/`).toString();
}

function currentPath() {
  const canonical = $('link[rel="canonical"]')?.getAttribute("href");
  if (canonical) {
    try {
      return new URL(canonical).pathname || "/";
    } catch {}
  }
  const ogUrl = $('meta[property="og:url"]')?.getAttribute("content");
  if (ogUrl) {
    try {
      return new URL(ogUrl).pathname || "/";
    } catch {}
  }
  if (document.body?.dataset.path) return document.body.dataset.path;
  if (typeof location !== "undefined" && /^https?:$/.test(location.protocol)) {
    return location.pathname || "/";
  }
  return "/";
}

function currentMeta() {
  const legacyArea = document.body?.dataset.page;
  const path = currentPath();
  const pageType =
    document.body?.dataset.pageType ||
    (legacyArea ? "area" : "") ||
    (path.includes("window-cleaner-") ? "area" : "general");
  const areaName = legacyArea
    ? legacyArea
        .split("-")
        .filter(Boolean)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ")
    : "";

  return {
    title: document.title.trim() || site.businessName,
    description:
      $('meta[name="description"]')?.getAttribute("content")?.trim() || site.description,
    path,
    pageType,
    serviceName:
      document.body?.dataset.serviceName ||
      (areaName ? `Window cleaner in ${areaName}` : "") ||
      $("h1")?.textContent?.trim() ||
      document.title.trim() ||
      site.businessName,
    serviceType:
      document.body?.dataset.serviceType ||
      (areaName ? `Residential window cleaning in ${areaName}` : "") ||
      $("h1")?.textContent?.trim() ||
      $('meta[name="description"]')?.getAttribute("content")?.trim() ||
      site.description,
  };
}

function ensureMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function ensureLink(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

function headMeta() {
  const meta = currentMeta();
  const url = absoluteUrl(meta.path);
  const imageUrl = absoluteUrl(site.ogImagePath);

  document.title = meta.title;
  ensureMeta("name", "description", meta.description);
  ensureMeta("name", "robots", "index,follow");
  ensureMeta("property", "og:type", "website");
  ensureMeta("property", "og:locale", "en_GB");
  ensureMeta("property", "og:title", meta.title);
  ensureMeta("property", "og:description", meta.description);
  ensureMeta("property", "og:url", url);
  ensureMeta("property", "og:image", imageUrl);
  ensureMeta("name", "twitter:card", "summary_large_image");
  ensureMeta("name", "twitter:title", meta.title);
  ensureMeta("name", "twitter:description", meta.description);
  ensureMeta("name", "twitter:image", imageUrl);
  ensureLink("canonical", url);
}

function note(el, text, state = "neutral") {
  if (!el) return;
  el.textContent = text;
  el.dataset.state = state;
}

function buildWhatsAppHref(message) {
  return `https://wa.me/${site.phoneInternational}?text=${encodeURIComponent(message)}`;
}

function buildSmsHref(message) {
  return `${site.smsHref}?body=${encodeURIComponent(message)}`;
}

function syncChoiceCards(parent = document) {
  $$(".choice-card", parent).forEach((card) => {
    const input = $("input", card);
    card.classList.toggle("is-selected", Boolean(input?.checked));
  });
}

function faq() {
  $$(".faq-toggle").forEach((el) => {
    el.onclick = () => {
      const expanded = el.getAttribute("aria-expanded") === "true";
      el.setAttribute("aria-expanded", String(!expanded));
    };
  });
}

function nav() {
  const button = $(".nav-toggle");
  const menu = $(".site-nav");
  if (!button || !menu) return;

  button.onclick = () => {
    const open = button.getAttribute("aria-expanded") !== "true";
    button.setAttribute("aria-expanded", String(open));
    menu.classList.toggle("is-open", open);
  };

  $$("a", menu).forEach((link) => {
    link.addEventListener("click", () => {
      button.setAttribute("aria-expanded", "false");
      menu.classList.remove("is-open");
    });
  });
}

function mailBody(form) {
  return [
    ["Name", form.name?.value],
    ["Property type", form.propertyType?.value],
    ["Postcode", form.postcode?.value],
    ["Contact", form.contact?.value],
    ["Details", form.details?.value],
    ["Source", absoluteUrl(currentPath()) || currentPath()],
  ]
    .filter(([, value]) => value)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");
}

function forms() {
  $$("[data-quote-form]").forEach((form) => {
    const feedback = $("[data-form-feedback]", form);
    if (feedback && !feedback.textContent.trim()) {
      note(feedback, "This opens a pre-filled email with your enquiry details.");
    }
    form.onsubmit = (event) => {
      event.preventDefault();
      trackConversion("quote_form_prepare", {
        method: "email",
        page_path: currentPath(),
      });
      location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        `Window cleaning enquiry for ${site.businessName}`
      )}&body=${encodeURIComponent(mailBody(form))}`;
      note(feedback, "Your email app should open with everything filled in for you.", "success");
    };
  });
}

function trackConversion(eventName, params = {}) {
  const payload = {
    event_category: "engagement",
    page_path: currentPath(),
    ...params,
  };

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, payload);
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...payload });
  window.dispatchEvent(new CustomEvent("sjwindows:conversion", { detail: { eventName, ...payload } }));
}

function conversionTracking() {
  document.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;
    const link = event.target.closest("a[href]");
    if (!link) return;

    const href = link.getAttribute("href") || "";
    const label = link.textContent.replace(/\s+/g, " ").trim();
    const detail = {
      link_url: link.href || href,
      link_text: label,
    };

    if (href.startsWith("tel:")) {
      trackConversion("click_call", { method: "phone", ...detail });
    } else if (href.startsWith("sms:")) {
      trackConversion("click_text", { method: "sms", ...detail });
    } else if (href.includes("wa.me/")) {
      trackConversion("click_whatsapp", { method: "whatsapp", ...detail });
    } else if (href.startsWith("mailto:")) {
      trackConversion("click_email", { method: "email", ...detail });
    } else if (href.includes("#calculator")) {
      trackConversion("click_smart_quote", { method: "calculator", ...detail });
    }
  });
}

function breadcrumbItems() {
  const links = $$(".breadcrumbs a").map((link, index) => ({
    name: link.textContent.trim(),
    item: absoluteUrl(link.getAttribute("href")),
    position: index + 1,
  }));
  const current = $(".breadcrumbs [aria-current='page']");
  if (current) {
    links.push({
      name: current.textContent.trim(),
      item: absoluteUrl(currentPath()),
      position: links.length + 1,
    });
  }
  return links.filter((item) => item.name && item.item);
}

function schema() {
  const meta = currentMeta();
  const baseUrl = siteBaseUrl();
  const pageUrl = absoluteUrl(meta.path);
  const businessId = baseUrl ? `${baseUrl}/#business` : "#business";
  const existing = $("script[data-generated-schema]");
  existing?.remove();

  const nodes = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: meta.title,
      description: meta.description,
      ...(pageUrl ? { url: pageUrl } : {}),
      ...(baseUrl ? { isPartOf: { "@id": `${baseUrl}/#website` } } : {}),
    },
  ];

  if (baseUrl) {
    nodes.push({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: site.businessName,
      description: site.description,
    });
  }

  const localBusiness = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": businessId,
      name: site.businessName,
      url: baseUrl || undefined,
      telephone: `+${site.phoneInternational}`,
      email: site.email,
      image: absoluteUrl(site.ogImagePath),
      description: site.description,
      priceRange: site.priceRange,
      serviceType: "Window cleaning",
      areaServed: site.serviceAreas.map((name) => ({ "@type": "Place", name })),
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: `+${site.phoneInternational}`,
          contactType: "customer enquiries",
          areaServed: "GB",
          availableLanguage: "en-GB",
        },
      ],
    };

  nodes.push(localBusiness);

  if (["service", "area", "prices", "residential", "services"].includes(meta.pageType)) {
    nodes.push({
      "@context": "https://schema.org",
      "@type": "Service",
      name: meta.serviceName,
      serviceType: meta.serviceType,
      description: meta.description,
      ...(pageUrl ? { url: pageUrl } : {}),
      provider: baseUrl
        ? {
            "@id": businessId,
            "@type": "LocalBusiness",
            name: site.businessName,
            url: baseUrl,
          }
        : {
            "@type": "LocalBusiness",
            name: site.businessName,
          },
      areaServed: site.serviceAreas.map((name) => ({ "@type": "Place", name })),
    });
  }

  const breadcrumbs = breadcrumbItems();
  if (breadcrumbs.length) {
    nodes.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((item) => ({
        "@type": "ListItem",
        position: item.position,
        name: item.name,
        item: item.item,
      })),
    });
  }

  const faqs = $$(".faq-item")
    .map((item) => {
      const question = $(".faq-toggle", item)?.textContent?.trim();
      const answer = $(".faq-answer", item)?.textContent?.replace(/\s+/g, " ").trim();
      if (!question || !answer) return null;
      return {
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      };
    })
    .filter(Boolean);

  if (faqs.length) {
    nodes.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs,
    });
  }

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.dataset.generatedSchema = "true";
  script.textContent = JSON.stringify(nodes);
  document.head.appendChild(script);
}

function calc(data) {
  const property = quote.property[data.propertyType] || quote.property.detached_family;
  const minPrice = property.minPrice || 15;
  const storey = quote.storey[data.storeys] || quote.storey[2];
  const access = quote.access[data.accessLevel] || quote.access.standard;
  const condition = quote.condition[data.conditionLevel] || quote.condition.standard;
  const frequency = quote.frequency[data.frequency] || quote.frequency.every6;
  const travel = quote.travel[data.travelZone] ?? quote.travel.core;
  const windowCount =
    data.smallWindows + data.mediumWindows + data.largeWindows + data.bayWindows;
  const units =
    data.smallWindows * quote.windowWeights.small +
    data.mediumWindows * quote.windowWeights.medium +
    data.largeWindows * quote.windowWeights.large +
    data.bayWindows * quote.windowWeights.bay +
    data.frenchDoors * 1.2 +
    data.bifoldSets * 1.4 +
    data.skylights * 5.5;
  const glass = units * property.unitRate;
  const base = glass + storey[1];
  const prep = property.prep + travel;
  const adjust = base * access[1] * condition[1] * frequency[1] - base;
  const extras = data.selectedExtras
    .map((key) => {
      const extra = quote.extra[key];
      if (!extra) return null;
      const minutes =
        extra[1] === "m"
          ? glass * extra[2] * (property.extraFactor || 1)
          : extra[1] === "f"
            ? extra[3] +
              (key === "frames_sills"
                ? data.propertyType === "country_home" || data.propertyType === "period_property"
                  ? 30
                  : data.propertyType === "executive_home" || data.propertyType === "large_townhouse"
                    ? 15
                    : 0
                : 0)
            : extra[1] === "u"
              ? Math.max(windowCount * 1.2, units * extra[2] * (property.extraFactor || 1))
              : data.solarPanels
                ? data.solarPanels * extra[2]
                : 0;

      return minutes ? { key, label: extra[0], minutes: Math.round(minutes) } : null;
    })
    .filter(Boolean);

  const extraMinutes = extras.reduce((total, item) => total + item.minutes, 0);
  const adjustedBase = base * access[1] * condition[1];
  const standardWorked = prep + adjustedBase + extraMinutes;
  const regularCycleFactor =
    data.frequency === "every4" ||
    data.frequency === "every6" ||
    data.frequency === "every8" ||
    data.frequency === "quarterly"
      ? frequency[1]
      : null;
  const worked = Math.max(
    quote.visit,
    regularCycleFactor ? standardWorked * regularCycleFactor : prep + base + adjust + extraMinutes
  );
  const total = round5(worked);
  const price = Math.max(minPrice, round10p((worked / 60) * quote.rate));
  const oneOffWorked = Math.max(
    quote.visit,
    prep + adjustedBase * quote.frequency.one_off[1] + extraMinutes
  );
  const oneOff = round5(oneOffWorked);
  const oneOffPrice = Math.max(minPrice, round10p((oneOffWorked / 60) * quote.rate));
  const conditionAdjust = adjustedBase - base;
  const frequencyAdjust =
    regularCycleFactor === null ? adjust - conditionAdjust : worked - standardWorked;
  const suggested = Object.entries(quote.extra)
    .filter(([key]) => !data.selectedExtras.includes(key))
    .filter(([key]) =>
      key === "conservatory_roof"
        ? data.conservatoryPanels
        : key === "solar_panels"
          ? data.solarPanels
          : 1
    )
    .slice(0, 3)
    .map(([key, extra]) => ({ key, label: extra[0] }));

  return {
    price: money(price),
    duration: time(total),
    cycle: frequency[0],
    property: property.label,
    units: units.toFixed(1).replace(".0", ""),
    windowCount: String(windowCount),
    compare:
      data.frequency === "one_off"
        ? "This guide is based on a one-off clean."
        : `If you wanted this as a one-off clean, it would usually be around ${money(oneOffPrice)}.`,
    recommendation: `${worked <= 20 ? "This looks like a smaller job." : worked >= 150 ? "This looks like a bigger job, probably because there's a lot of glass or the property is more involved." : "This looks about average for the kind of property you have entered."} ${frequency[2]}`,
    breakdown: [
      ["Preparation and route time", Math.round(prep)],
      ["Exterior glass and core work", Math.round(base)],
      ["Access, height, and condition adjustment", Math.round(conditionAdjust)],
      ["Cleaning cycle adjustment", Math.round(frequencyAdjust)],
      ...extras.map((item) => [item.label, item.minutes]),
    ],
    selected: extras.map((item) => item.label),
    suggested,
  };
}

function calculator() {
  const form = $("[data-quote-calculator]");
  if (!form) return;

  const feedback = $("[data-quote-feedback]");
  const price = $("[data-quote-price]");
  const duration = $("[data-quote-duration]");
  const comparison = $("[data-quote-comparison]");
  const recommendation = $("[data-quote-recommendation]");
  const breakdown = $("[data-quote-breakdown]");
  const suggestions = $("[data-quote-suggestions]");
  const metrics = $("[data-quote-metrics]");
  const smsButton = $("[data-quote-sms]");
  const whatsappButton = $("[data-quote-whatsapp]");
  const emailButton = $("[data-quote-email]");
  const actionFeedback = $("[data-quote-action-feedback]");
  const customerName = $("[name='quoteCustomerName']");
  const customerAddress = $("[name='quoteCustomerAddress']");

  const applyPropertyDefaults = (propertyType) => {
    const profile = quote.property[propertyType];
    if (!profile?.defaults) return;
    const defaults = profile.defaults;
    form.smallWindows.value = defaults.smallWindows;
    form.mediumWindows.value = defaults.mediumWindows;
    form.largeWindows.value = defaults.largeWindows;
    form.bayWindows.value = defaults.bayWindows;
    form.frenchDoors.value = defaults.frenchDoors;
    form.bifoldSets.value = defaults.bifoldSets;
    form.skylights.value = defaults.skylights;
    form.conservatoryPanels.value = defaults.conservatoryPanels;
    form.solarPanels.value = defaults.solarPanels;
    form.storeys.value = defaults.storeys;
    form.accessLevel.value = defaults.accessLevel;
    form.conditionLevel.value = defaults.conditionLevel;
    form.frequency.value = defaults.frequency;
    form.travelZone.value = defaults.travelZone;
    $$('[name="selectedExtras"]', form).forEach((el) => {
      el.checked = false;
    });
    syncChoiceCards(form);
  };

  const read = () => ({
    propertyType: form.propertyType.value,
    smallWindows: clamp(form.smallWindows.value, 0, 120),
    mediumWindows: clamp(form.mediumWindows.value, 0, 120),
    largeWindows: clamp(form.largeWindows.value, 0, 120),
    bayWindows: clamp(form.bayWindows.value, 0, 40),
    frenchDoors: clamp(form.frenchDoors.value, 0, 16),
    bifoldSets: clamp(form.bifoldSets.value, 0, 12),
    skylights: clamp(form.skylights.value, 0, 24),
    conservatoryPanels: clamp(form.conservatoryPanels.value, 0, 90),
    solarPanels: clamp(form.solarPanels.value, 0, 60),
    storeys: form.storeys.value,
    accessLevel: form.accessLevel.value,
    conditionLevel: form.conditionLevel.value,
    frequency: form.frequency.value,
    travelZone: form.travelZone.value,
    selectedExtras: $$('[name="selectedExtras"]:checked', form).map((el) => el.value),
  });

  const quoteMessage = (data, result) => {
    const address = customerAddress?.value.trim();
    const name = customerName?.value.trim();
    return [
      "Hi Sam, I used the Smart Quote tool and wanted to check what looks realistic from here.",
      name ? `Name: ${name}` : "",
      address ? `Postcode/address: ${address}` : "",
      `Guide price shown: ${result.price}`,
      `Property type: ${result.property}`,
      `Frequency: ${result.cycle}`,
      `Selected extras: ${result.selected.length ? result.selected.join(", ") : "None selected"}`,
      `Window mix: ${data.smallWindows} small, ${data.mediumWindows} medium, ${data.largeWindows} large, ${data.bayWindows} bay`,
      `French doors: ${data.frenchDoors}`,
      `Bifold sets: ${data.bifoldSets}`,
      `Skylights: ${data.skylights}`,
      `Conservatory panels: ${data.conservatoryPanels}`,
      `Solar panels: ${data.solarPanels}`,
      `Estimated visit time: ${result.duration}`,
      "I understand this is a guide price rather than a fixed quote.",
    ]
      .filter(Boolean)
      .join("\n");
  };

  const draw = (result, data) => {
    price.textContent = result.price;
    duration.textContent = result.duration;
    comparison.textContent = result.compare;
    recommendation.textContent = result.recommendation;
    metrics.innerHTML = `
      <article class="metric-card"><span>Property profile</span><strong>${esc(result.property)}</strong></article>
      <article class="metric-card"><span>Window load</span><strong>${esc(result.units)}</strong></article>
      <article class="metric-card"><span>Total windows</span><strong>${esc(result.windowCount)}</strong></article>
      <article class="metric-card"><span>Cleaning cycle</span><strong>${esc(result.cycle)}</strong></article>
    `;
    breakdown.innerHTML = result.breakdown
      .map(
        ([label, minutes]) =>
          `<li><span>${esc(label)}</span><strong>${minutes < 0 ? "-" : ""}${Math.abs(minutes)} min</strong></li>`
      )
      .join("");
    suggestions.innerHTML = `${
      result.selected.length
        ? `<p><strong>Included:</strong> Standard frame and sill clean, plus ${esc(result.selected.join(", "))}.</p>`
        : "<p><strong>Included:</strong> Exterior glass, frames, and sills.</p>"
    }<p><strong>You might also want:</strong></p>${
      result.suggested.length
        ? `<div class="tag-list">${result.suggested
            .map((item) => `<span class="tag">${esc(item.label)}</span>`)
            .join("")}</div>`
        : "<p>No other extras suggested for this setup.</p>"
    }`;

    const message = quoteMessage(data, result);
    if (smsButton) smsButton.href = buildSmsHref(message);
    if (whatsappButton) whatsappButton.href = buildWhatsAppHref(message);
    if (emailButton) {
      emailButton.href = `mailto:${site.email}?subject=${encodeURIComponent(
        "Smart Quote guide price enquiry"
      )}&body=${encodeURIComponent(message)}`;
    }
  };

  const update = (state, text) => {
    const data = read();
    const result = calc(data);
    draw(result, data);
    if (text) note(feedback, text, state);
    return { data, result };
  };

  const live = () =>
    update(
      "neutral",
      "Guide price updates as you change the details. Use the action buttons on the right when you're ready to message me."
    );

  form.propertyType.addEventListener("change", () => {
    applyPropertyDefaults(form.propertyType.value);
    live();
  });

  form.addEventListener("input", () => {
    syncChoiceCards(form);
    live();
  });

  form.addEventListener("change", () => {
    syncChoiceCards(form);
    live();
  });

  [customerName, customerAddress].forEach((field) => {
    field?.addEventListener("input", () => {
      const { data, result } = update("neutral");
      draw(result, data);
      note(
        actionFeedback,
        "The message links now include the latest guide price and any address details you have added."
      );
    });
  });

  form.onsubmit = (event) => {
    event.preventDefault();
    trackConversion("smart_quote_update", {
      method: "calculator",
      page_path: currentPath(),
    });
    update(
      "success",
      "Guide price updated. Final price can still move once I've seen the property, but this gives you a sensible starting point."
    );
  };

  note(
    actionFeedback,
    "Text, WhatsApp, or email the guide price over when you're ready. Adding a postcode or address helps me tell which property the estimate is for."
  );
  applyPropertyDefaults(form.propertyType.value);
  syncChoiceCards(form);
  update(
    "neutral",
    "Guide price updates as you change the details. Use the action buttons on the right when you're ready to message me."
  );
}

faq();
nav();
forms();
headMeta();
schema();
conversionTracking();
calculator();
syncChoiceCards();

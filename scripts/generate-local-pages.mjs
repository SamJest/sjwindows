import { readdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const siteUrl = "https://sjwindowscolchester.co.uk";
const lastmod = "2026-05-01";
const phone = "07756 514110";
const phoneHref = "tel:07756514110";
const smsHref = "sms:07756514110";
const email = "sjwindows2020@gmail.com";
const waHref =
  "https://wa.me/447756514110?text=Hi%20Sam%2C%20I%27m%20looking%20for%20a%20window%20cleaning%20quote.%20My%20postcode%20is...";

const reviews = [
  {
    author: "Wendy, Wivenhoe",
    text:
      "Reliable, friendly and does a proper job every time. Exactly what you want from a local window cleaner.",
  },
  {
    author: "Audrey, Colchester",
    text:
      "Sam is polite, respectful and trustworthy. He turns up when arranged, is careful around the property, and always leaves the windows looking lovely.",
  },
  {
    author: "Mike L, Lexden",
    text:
      "Excellent value for the quality of the clean. Sam does not rush the job and the results are always noticeably better than when we have tried to do it ourselves.",
  },
];

const areas = [
  {
    name: "Colchester",
    slug: "window-cleaner-colchester.html",
    group: "Central Colchester",
    character: "the core local patch",
    propertyMix: "terraces, flats, family homes, bungalows, townhouses and larger homes with more glass",
    route:
      "Colchester is the centre of the SJ Windows route, so regular work is usually the easiest to plan when the address sits close to existing rounds.",
    nearby: ["Greenstead", "Lexden", "Highwoods", "Prettygate", "New Town"],
  },
  {
    name: "Greenstead",
    slug: "window-cleaner-greenstead.html",
    group: "North and east Colchester",
    character: "east Colchester route work",
    propertyMix: "regular homes, flats, maisonettes and smaller family houses",
    route:
      "Greenstead sits close to Wivenhoe, Rowhedge and the Hythe side of Colchester, which can make regular route planning straightforward.",
    nearby: ["Wivenhoe", "Rowhedge", "Highwoods", "Colchester", "St John's"],
  },
  {
    name: "Wivenhoe",
    slug: "window-cleaner-wivenhoe.html",
    group: "North and east Colchester",
    character: "eastern Colchester and riverside route work",
    propertyMix: "terraces, family homes, riverside properties and homes that benefit from regular upkeep",
    route:
      "Wivenhoe works best when it links neatly with Greenstead, Rowhedge and other east-side route work rather than sitting as a separate one-off trip.",
    nearby: ["Rowhedge", "Greenstead", "Fingringhoe", "Brightlingsea", "Colchester"],
  },
  {
    name: "Rowhedge",
    slug: "window-cleaner-rowhedge.html",
    group: "North and east Colchester",
    character: "east and south-east Colchester route work",
    propertyMix: "village homes, terraces and properties where access can vary from road to road",
    route:
      "Rowhedge usually makes most sense when it connects with Wivenhoe, Greenstead, Fingringhoe or Mersea-side work.",
    nearby: ["Wivenhoe", "Greenstead", "Fingringhoe", "Mersea Island", "Colchester"],
  },
  {
    name: "Highwoods",
    slug: "window-cleaner-highwoods.html",
    group: "North and east Colchester",
    character: "north Colchester route work",
    propertyMix: "family houses, estates, bungalows and homes with mixed access",
    route:
      "Highwoods can fit well with Mile End, Greenstead, Ardleigh and the north side of Colchester when regular visits are planned sensibly.",
    nearby: ["Mile End", "Greenstead", "Ardleigh", "Colchester", "St John's"],
  },
  {
    name: "Mile End",
    slug: "window-cleaner-mile-end-colchester.html",
    group: "North and east Colchester",
    character: "north Colchester route work",
    propertyMix: "newer homes, family houses and regular residential rounds",
    route:
      "Mile End is practical when it ties in with Highwoods, West Bergholt, Lexden and other north or west Colchester work.",
    nearby: ["Highwoods", "West Bergholt", "Lexden", "Colchester", "St John's"],
  },
  {
    name: "Lexden",
    slug: "window-cleaner-lexden.html",
    group: "West Colchester",
    character: "west Colchester residential work",
    propertyMix: "larger homes, period properties, family houses and bungalows",
    route:
      "Lexden is one of the most natural areas for regular Colchester work because it sits close to Prettygate, Stanway and the town centre.",
    nearby: ["Prettygate", "Stanway", "West Bergholt", "Colchester", "Shrub End"],
  },
  {
    name: "Stanway",
    slug: "window-cleaner-stanway.html",
    group: "West Colchester",
    character: "west Colchester route work",
    propertyMix: "family homes, newer estates, bungalows and properties with side access to check",
    route:
      "Stanway usually works well where it links with Lexden, Prettygate, Copford, Marks Tey and other west-side bookings.",
    nearby: ["Lexden", "Prettygate", "Copford", "Marks Tey", "Eight Ash Green"],
  },
  {
    name: "Prettygate",
    slug: "window-cleaner-prettygate.html",
    group: "West Colchester",
    character: "west Colchester residential work",
    propertyMix: "family homes, semis, bungalows and regular local rounds",
    route:
      "Prettygate sits neatly between Lexden, Stanway and Shrub End, so regular window cleaning can be a sensible fit.",
    nearby: ["Lexden", "Stanway", "Shrub End", "Colchester", "West Bergholt"],
  },
  {
    name: "Shrub End",
    slug: "window-cleaner-shrub-end.html",
    group: "West Colchester",
    character: "south-west Colchester work",
    propertyMix: "family homes, bungalows, terraces and properties with mixed front and rear access",
    route:
      "Shrub End is best checked by postcode because some roads fit naturally with Prettygate, Lexden and Stanway while others sit better with south Colchester work.",
    nearby: ["Prettygate", "Lexden", "Stanway", "Berechurch", "Colchester"],
  },
  {
    name: "Old Heath",
    slug: "window-cleaner-old-heath.html",
    group: "Central Colchester",
    character: "south and central Colchester work",
    propertyMix: "terraces, older homes, flats and compact regular rounds",
    route:
      "Old Heath can fit well where it links with New Town, Berechurch, Rowhedge and the south side of Colchester.",
    nearby: ["New Town", "Berechurch", "Rowhedge", "Colchester", "Greenstead"],
  },
  {
    name: "New Town",
    slug: "window-cleaner-new-town.html",
    group: "Central Colchester",
    character: "central Colchester work",
    propertyMix: "terraces, flats, maisonettes and homes with tighter access",
    route:
      "New Town is close to the core Colchester route, but access and parking can still affect what is practical.",
    nearby: ["Old Heath", "Colchester", "Berechurch", "Greenstead", "Lexden"],
  },
  {
    name: "Berechurch",
    slug: "window-cleaner-berechurch.html",
    group: "Central Colchester",
    character: "south Colchester work",
    propertyMix: "family homes, terraces and bungalows with varied access",
    route:
      "Berechurch can be a a good fit when it connects with Old Heath, Shrub End and other south Colchester addresses.",
    nearby: ["Old Heath", "Shrub End", "New Town", "Colchester", "Layer-de-la-Haye"],
  },
  {
    name: "Blackheath",
    slug: "window-cleaner-blackheath.html",
    group: "Central Colchester",
    character: "south Colchester and village-edge work",
    propertyMix: "homes on the edge of Colchester, bungalows and properties where the postcode needs checking",
    route:
      "Blackheath is best checked by postcode because it can sit between the Colchester route and the south village run.",
    nearby: ["Berechurch", "Layer-de-la-Haye", "Abberton", "Colchester", "Shrub End"],
  },
  {
    name: "St John's",
    slug: "window-cleaner-st-johns.html",
    group: "North and east Colchester",
    character: "north-east Colchester work",
    propertyMix: "family homes, estates and regular residential properties",
    route:
      "St John's often links sensibly with Highwoods, Greenstead, Mile End and the north-east side of Colchester.",
    nearby: ["Highwoods", "Greenstead", "Mile End", "Colchester", "Ardleigh"],
  },
  {
    name: "St Anne's",
    slug: "window-cleaner-st-annes.html",
    group: "North and east Colchester",
    character: "east Colchester work",
    propertyMix: "terraces, flats, family homes and properties close to the town route",
    route:
      "St Anne's is close enough to the core Colchester route that regular work can often be practical where parking and access are sensible.",
    nearby: ["Greenstead", "New Town", "Colchester", "Wivenhoe", "Highwoods"],
  },
  {
    name: "West Bergholt",
    slug: "window-cleaner-west-bergholt.html",
    group: "West Colchester",
    character: "north-west Colchester village work",
    propertyMix: "village homes, larger properties, bungalows and homes with more glass",
    route:
      "West Bergholt usually fits best when it connects with Lexden, Mile End, Stanway or Dedham-side work.",
    nearby: ["Lexden", "Mile End", "Stanway", "Dedham", "Eight Ash Green"],
  },
  {
    name: "Eight Ash Green",
    slug: "window-cleaner-eight-ash-green.html",
    group: "West Colchester",
    character: "west Colchester village work",
    propertyMix: "village homes, bungalows and larger detached properties",
    route:
      "Eight Ash Green is best judged by postcode because it needs to sit sensibly with Stanway, Copford, Marks Tey or West Bergholt.",
    nearby: ["Stanway", "Copford", "Marks Tey", "West Bergholt", "Lexden"],
  },
  {
    name: "Marks Tey",
    slug: "window-cleaner-marks-tey.html",
    group: "West Colchester",
    character: "west Colchester and village route work",
    propertyMix: "village homes, newer properties and regular residential cleans",
    route:
      "Marks Tey works best when it links with Stanway, Copford, Eight Ash Green, Tiptree or Kelvedon-side work.",
    nearby: ["Stanway", "Copford", "Eight Ash Green", "Tiptree", "West Bergholt"],
  },
  {
    name: "Copford",
    slug: "window-cleaner-copford.html",
    group: "West Colchester",
    character: "west Colchester village work",
    propertyMix: "village houses, bungalows and properties where access is worth checking",
    route:
      "Copford is most practical when it ties in with Stanway, Eight Ash Green, Marks Tey and nearby west-side bookings.",
    nearby: ["Stanway", "Eight Ash Green", "Marks Tey", "Lexden", "Tiptree"],
  },
  {
    name: "Layer-de-la-Haye",
    slug: "window-cleaner-layer-de-la-haye.html",
    group: "Villages and nearby towns",
    character: "south Colchester village work",
    propertyMix: "village homes, bungalows, larger houses and properties where access varies",
    route:
      "Layer-de-la-Haye is best checked by postcode because it usually needs to connect with Abberton, Fingringhoe, Berechurch or Mersea-side work.",
    nearby: ["Abberton", "Fingringhoe", "Berechurch", "Mersea Island", "Colchester"],
  },
  {
    name: "Abberton",
    slug: "window-cleaner-abberton.html",
    group: "Villages and nearby towns",
    character: "south Colchester village work",
    propertyMix: "village homes, larger properties and bungalows",
    route:
      "Abberton can work where it links with Layer-de-la-Haye, Fingringhoe, Mersea Island or Tiptree-side routes.",
    nearby: ["Layer-de-la-Haye", "Fingringhoe", "Mersea Island", "Tiptree", "Colchester"],
  },
  {
    name: "Fingringhoe",
    slug: "window-cleaner-fingringhoe.html",
    group: "Villages and nearby towns",
    character: "south-east Colchester village work",
    propertyMix: "village homes, bungalows and properties where access should be checked",
    route:
      "Fingringhoe usually makes sense when it connects with Wivenhoe, Rowhedge, Abberton or Mersea-side work.",
    nearby: ["Rowhedge", "Wivenhoe", "Abberton", "Mersea Island", "Layer-de-la-Haye"],
  },
  {
    name: "Dedham",
    slug: "window-cleaner-dedham.html",
    group: "Villages and nearby towns",
    character: "north Colchester village work",
    propertyMix: "period homes, cottages, larger properties and homes where careful access matters",
    route:
      "Dedham is a local round area, so regular work needs to sit sensibly with Ardleigh, Manningtree, Lawford or West Bergholt.",
    nearby: ["Ardleigh", "Manningtree", "Lawford", "West Bergholt", "Colchester"],
  },
  {
    name: "Ardleigh",
    slug: "window-cleaner-ardleigh.html",
    group: "Villages and nearby towns",
    character: "north-east Colchester village work",
    propertyMix: "village homes, larger houses and bungalows",
    route:
      "Ardleigh can work well where it links with Highwoods, St John's, Dedham, Manningtree and other north-east route work.",
    nearby: ["Highwoods", "St John's", "Dedham", "Manningtree", "Lawford"],
  },
  {
    name: "Manningtree",
    slug: "window-cleaner-manningtree.html",
    group: "Villages and nearby towns",
    character: "north-east local round work",
    propertyMix: "town houses, cottages, family homes and properties where the postcode needs checking",
    route:
      "Manningtree is one to check carefully because regular work needs to fit with Lawford, Dedham, Ardleigh or other north-east bookings.",
    nearby: ["Lawford", "Dedham", "Ardleigh", "Wivenhoe", "Colchester"],
  },
  {
    name: "Lawford",
    slug: "window-cleaner-lawford.html",
    group: "Villages and nearby towns",
    character: "north-east local round work",
    propertyMix: "family homes, village properties and bungalows",
    route:
      "Lawford usually works best when it sits with Manningtree, Dedham, Ardleigh or a sensible north-east Colchester route.",
    nearby: ["Manningtree", "Dedham", "Ardleigh", "Wivenhoe", "Colchester"],
  },
  {
    name: "Mersea Island",
    slug: "window-cleaner-mersea-island.html",
    group: "Coastal and local round areas",
    character: "coastal and south-side route work",
    propertyMix: "coastal homes, bungalows, holiday properties and larger homes with weather exposure",
    route:
      "Mersea Island is always best checked by postcode because tide, distance and distance and timing can matter more than the area name on its own.",
    nearby: ["Abberton", "Fingringhoe", "Rowhedge", "Layer-de-la-Haye", "Colchester"],
  },
  {
    name: "Tiptree",
    slug: "window-cleaner-tiptree.html",
    group: "Coastal and local round areas",
    character: "wider village route work",
    propertyMix: "family homes, bungalows, village properties and homes on larger plots",
    route:
      "Tiptree is best checked by postcode because it usually needs to fit with Marks Tey, Copford, Abberton or other local round work.",
    nearby: ["Marks Tey", "Copford", "Abberton", "Mersea Island", "Stanway"],
  },
  {
    name: "Brightlingsea",
    slug: "window-cleaner-brightlingsea.html",
    group: "Coastal and local round areas",
    character: "coastal local round work",
    propertyMix: "coastal homes, bungalows, family houses and properties affected by salt and weather",
    route:
      "Brightlingsea can be practical where it links with Wivenhoe, Rowhedge, Fingringhoe or other east-side route work, but it should always be checked first.",
    nearby: ["Wivenhoe", "Rowhedge", "Fingringhoe", "Mersea Island", "Colchester"],
  },
];

const services = {
  solar: {
    key: "solar",
    slugPrefix: "solar-panel-cleaning",
    label: "Solar panel cleaning",
    h1: (area) => `Solar panel cleaning in ${area}`,
    title: (area) => `Solar Panel Cleaning ${area} | SJ Windows`,
    description: (area) =>
      `Solar panel cleaning in ${area} by Sam from SJ Windows. Minimum price from £20, guide from £2 per panel where practical, with access and route checked first.`,
    what:
      "Solar panel cleaning is a straightforward outside clean of the panel surface where it can be done safely and practically. Sam noticed many local solar panels get dirty over time, so it is available as a sensible add-on or stand-alone job where access works.",
    suits:
      "It usually suits homes where panels are visibly dirty, dusty, affected by bird mess, or on lower roofs and bungalows where safe access is simpler.",
    pricing:
      "The minimum price is £20. As a rough guide, panels start from £2 each where practical, but the actual quote depends on panel count, access, height, condition, and whether I can fit the address in.",
    regular:
      "This is often a one-off or occasional clean rather than a fixed monthly job. Dirty panels can reduce performance, but the exact difference varies, so I do not promise guaranteed energy improvements.",
    extraLinks: [
      ["residential-window-cleaning-colchester.html", "Residential window cleaning"],
      ["gutter-cleaning-colchester.html", "Gutter cleaning"],
      ["conservatory-roof-cleaning-colchester.html", "Conservatory roof cleaning"],
    ],
  },
  gutter: {
    key: "gutter",
    slugPrefix: "gutter-cleaning",
    label: "Gutter cleaning",
    h1: (area) => `Gutter cleaning in ${area}`,
    title: (area) => `Gutter Cleaning ${area} | SJ Windows`,
    description: (area) =>
      `Gutter cleaning in ${area} from SJ Windows. Send Sam the postcode and access details for a practical quote where the route and property setup fit.`,
    what:
      "Gutter cleaning helps clear built-up debris from gutters where access is safe and the job is practical for the property.",
    suits:
      "It can suit homes with overflowing gutters, visible debris, trees nearby, or gutters that have not been cleared for a while.",
    pricing:
      "The quote depends on height, access, gutter length, blockage level, property shape and whether the visit can fit with nearby work.",
    regular:
      "Most gutter cleans are occasional rather than every window clean. Some homes with trees nearby may need checking more often.",
    extraLinks: [
      ["fascia-soffit-cleaning-colchester.html", "Fascia and soffit cleaning"],
      ["conservatory-roof-cleaning-colchester.html", "Conservatory roof cleaning"],
      ["services.html", "All services"],
    ],
  },
  conservatory: {
    key: "conservatory",
    slugPrefix: "conservatory-roof-cleaning",
    label: "Conservatory roof cleaning",
    h1: (area) => `Conservatory roof cleaning in ${area}`,
    title: (area) => `Conservatory Roof Cleaning ${area} | SJ Windows`,
    description: (area) =>
      `Conservatory roof cleaning in ${area} from SJ Windows. Direct contact with Sam, practical access checks and clear quote wording before booking.`,
    what:
      "Conservatory roof cleaning is an outside clean of the roof panels, bars and visible build-up where access is safe and the structure is suitable.",
    suits:
      "It suits conservatories with green build-up, dirty roof panels, blocked-looking channels or a roof that has started to make the room feel darker.",
    pricing:
      "The quote depends on roof size, panel count, height, access, condition, water access and how much careful detail work is needed.",
    regular:
      "This is usually a one-off or occasional clean. Regular window cleaning can help keep the surrounding glass in better shape between deeper roof cleans.",
    extraLinks: [
      ["residential-window-cleaning-colchester.html", "Residential window cleaning"],
      ["gutter-cleaning-colchester.html", "Gutter cleaning"],
      ["fascia-soffit-cleaning-colchester.html", "Fascia and soffit cleaning"],
    ],
  },
  residential: {
    key: "residential",
    slugPrefix: "residential-window-cleaning",
    label: "Residential window cleaning",
    h1: (area) => `Residential window cleaning in ${area}`,
    title: (area) => `Residential Window Cleaning ${area} | SJ Windows`,
    description: (area) =>
      `Residential window cleaning in ${area} from Sam at SJ Windows. Regular local cleans, direct contact and guide prices for local homes.`,
    what:
      "Residential window cleaning is the regular outside clean for homes, including glass, frames and sills as part of a normal clean.",
    suits:
      "It suits homeowners who want the windows kept on top of without chasing a company office or starting from scratch each time.",
    pricing:
      "The quote depends on property type, glass, access, storeys, condition, frequency, and whether the address works for the round.",
    regular:
      "Regular 4, 6 or 8-weekly cleans usually work best because the windows stay more manageable and the route can be planned properly.",
    extraLinks: [
      ["window-cleaning-prices-colchester.html", "Window cleaning prices"],
      ["water-fed-pole-window-cleaning-colchester.html", "Water-fed pole cleaning"],
      ["traditional-window-cleaning-colchester.html", "Traditional hand-finish cleaning"],
    ],
  },
};

const serviceAreaPages = [
  ["solar", "Colchester"],
  ["solar", "Greenstead"],
  ["solar", "Wivenhoe"],
  ["solar", "Lexden"],
  ["solar", "Stanway"],
  ["gutter", "Colchester"],
  ["gutter", "Wivenhoe"],
  ["gutter", "Lexden"],
  ["conservatory", "Colchester"],
  ["conservatory", "Wivenhoe"],
  ["residential", "Wivenhoe"],
  ["residential", "Lexden"],
  ["residential", "Stanway"],
  ["residential", "Greenstead"],
];

const streetPages = [
  {
    street: "Lexden Road",
    area: "Lexden",
    slug: "window-cleaner-lexden-road-colchester.html",
    propertyCue:
      "larger detached homes, older character properties, sash or bay windows, and some bigger plots",
    accessCue:
      "more glass, higher detailing, gates, parking, extensions and older frames can all affect the time needed",
    methodCue:
      "Water-fed pole cleaning often makes sense for upper exterior glass, with hand detailing where lower panes or older features need a closer finish.",
    nearbyStreets: ["St Clare Road", "Straight Road", "Prettygate Road"],
  },
  {
    street: "St Clare Road",
    area: "Lexden",
    slug: "window-cleaner-st-clare-road-lexden.html",
    propertyCue:
      "substantial family homes, detached properties, period-style houses and larger window layouts",
    accessCue:
      "the quote usually needs to account for property size, multiple elevations, rear access and any delicate older detailing",
    methodCue:
      "A regular water-fed pole clean can work well outside, with traditional hand-finish work considered for easy lower glass.",
    nearbyStreets: ["Lexden Road", "Straight Road", "Prettygate Road"],
  },
  {
    street: "Prettygate Road",
    area: "Prettygate",
    slug: "window-cleaner-prettygate-road-colchester.html",
    propertyCue:
      "bungalows, detached homes, family houses and properties with drives, garages and garden access to check",
    accessCue:
      "single-storey glass can be simpler, but conservatories, extensions, side access and larger rear windows still matter",
    methodCue:
      "Bungalows and ground-floor glass can suit a traditional hand finish where practical, while regular outside work may still use purified-water cleaning.",
    nearbyStreets: ["The Commons", "Lexden Road", "Straight Road"],
  },
  {
    street: "The Commons",
    area: "Prettygate",
    slug: "window-cleaner-the-commons-prettygate.html",
    propertyCue:
      "bungalows and detached homes with front drives, gardens and lower-level glass that may be easier to access",
    accessCue:
      "the main checks are side access, conservatory or extension glass, and whether rear windows are easy to reach",
    methodCue:
      "This can be a good road to ask about traditional hand-finish work on ground-floor glass or bungalows where access is safe.",
    nearbyStreets: ["Prettygate Road", "Straight Road", "Lexden Road"],
  },
  {
    street: "London Road",
    area: "Stanway",
    slug: "window-cleaner-london-road-stanway.html",
    propertyCue:
      "a mixed road with houses, bungalows, larger homes and some busier-road frontage",
    accessCue:
      "parking, road position, shop or mixed-use frontage, and rear access can matter as much as the number of windows",
    methodCue:
      "Regular outside cleaning is usually quoted around the exact frontage and rear access, with photos useful before booking.",
    nearbyStreets: ["Straight Road", "Prettygate Road", "Lexden Road"],
  },
  {
    street: "Straight Road",
    area: "Lexden",
    slug: "window-cleaner-straight-road-colchester.html",
    propertyCue:
      "a varied west Colchester road with family houses, bungalows and properties that can differ a lot from one end to the other",
    accessCue:
      "postcode position, parking, rear access and whether the property leans more bungalow or larger family home all affect the quote",
    methodCue:
      "The best method depends on the exact property: WFP for regular upstairs glass, hand finish for suitable lower glass.",
    nearbyStreets: ["Lexden Road", "Prettygate Road", "London Road"],
  },
  {
    street: "The Avenue",
    area: "Wivenhoe",
    slug: "window-cleaner-the-avenue-wivenhoe.html",
    propertyCue:
      "a mix of Victorian terraces, detached character homes and properties close to Wivenhoe station and the riverside route",
    accessCue:
      "bay windows, older frames, parking, rear access and any extension glass are the things I would want to check",
    methodCue:
      "Regular purified-water cleaning can suit upper exterior windows, with hand detail considered for lower bay or door glass.",
    nearbyStreets: ["Old Heath Road", "Greenstead Road", "Mile End Road"],
  },
  {
    street: "Old Heath Road",
    area: "Old Heath",
    slug: "window-cleaner-old-heath-road-colchester.html",
    propertyCue:
      "terraced homes, end-of-terrace houses, bay windows and some 1930s-style semis",
    accessCue:
      "rear access, parking, bay windows, garden rooms and covered areas can all change how long the clean takes",
    methodCue:
      "A regular exterior clean can keep terraced and semi-detached glass manageable, with hand detailing on easy lower panes where needed.",
    nearbyStreets: ["Military Road", "Greenstead Road", "The Avenue"],
  },
  {
    street: "Military Road",
    area: "New Town",
    slug: "window-cleaner-military-road-colchester.html",
    propertyCue:
      "central Colchester terraces, flats and houses where parking and access can be tighter",
    accessCue:
      "the quote usually depends on parking, rear access, bay windows, upper glass and whether the clean is regular or one-off",
    methodCue:
      "Regular cleaning is usually the neatest option because central access can be less predictable.",
    nearbyStreets: ["Old Heath Road", "Greenstead Road", "Lexden Road"],
  },
  {
    street: "Mile End Road",
    area: "Mile End",
    slug: "window-cleaner-mile-end-road-colchester.html",
    propertyCue:
      "a mixed north Colchester road with older houses, family homes and properties where road position can matter",
    accessCue:
      "parking, side access, traffic position, upper windows and any extensions are worth checking before quoting",
    methodCue:
      "Water-fed pole cleaning can help with upper windows from the ground where practical, with quote wording based on the exact property.",
    nearbyStreets: ["Greenstead Road", "Lexden Road", "Straight Road"],
  },
  {
    street: "Greenstead Road",
    area: "Greenstead",
    slug: "window-cleaner-greenstead-road-colchester.html",
    propertyCue:
      "a varied east Colchester road with terraces, semis, flats and some busier frontages",
    accessCue:
      "parking, rear access, upper flats, bay windows and whether the address sits closer to town or Greenstead can all matter",
    methodCue:
      "A photo helps here because the best method can change quickly between houses, flats and busier frontages.",
    nearbyStreets: ["The Avenue", "Old Heath Road", "Mile End Road"],
  },
];

function esc(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function areaByName(name) {
  return areas.find((area) => area.name === name);
}

function areaSlug(name) {
  return areaByName(name)?.slug || "areas.html";
}

function serviceSlug(service, area) {
  const areaData = areaByName(area);
  const slug = areaData.slug.replace(/^window-cleaner-/, "").replace(/\.html$/, "");
  const normalized = area === "Mile End" ? "mile-end-colchester" : slug;
  return `${services[service].slugPrefix}-${normalized}.html`;
}

function chips(items) {
  return items
    .map(([href, label]) => `<a class="area-chip" href="${esc(href)}">${esc(label)}</a>`)
    .join("");
}

function reviewCards() {
  return reviews
    .map(
      (review) => `
            <article class="review-card">
              <p>${esc(review.text)}</p>
              <p class="review-card__meta">${esc(review.author)}</p>
            </article>`
    )
    .join("");
}

function header(eyebrow = "Colchester") {
  return `
    <a class="skip-link" href="#main">Skip to content</a>
    <div class="topbar">
      <div class="shell topbar__inner">
        <p>I'm Sam Jones. Local window cleaning where the address works for the round.</p>
        <div class="topbar__links">
          <a href="${phoneHref}">Call ${phone}</a>
          <a href="${smsHref}">Text me</a>
          <a href="${waHref}">WhatsApp</a>
        </div>
      </div>
    </div>
    <header class="site-header">
      <div class="shell header__inner">
        <a class="brand" href="index.html" aria-label="SJ Windows home">
          <span class="brand__eyebrow">${esc(eyebrow)}</span>
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
          <a href="areas.html">Areas</a>
          <a href="reviews.html">Reviews</a>
          <a href="contact.html">Contact</a>
        </nav>
      </div>
    </header>`;
}

function footer() {
  return `
    <footer class="site-footer">
      <div class="shell footer__grid">
        <div>
          <p class="footer__brand">SJ Windows</p>
          <p>I'm Sam Jones.</p>
          <p>Friendly local window cleaning in Colchester and nearby villages.</p>
        </div>
        <div>
          <p class="footer__heading">Top Services</p>
          <a href="residential-window-cleaning-colchester.html">Residential window cleaning</a>
          <a href="car-cleaning-colchester.html">Car cleaning</a>
          <a href="gutter-cleaning-colchester.html">Gutter cleaning</a>
          <a href="conservatory-roof-cleaning-colchester.html">Conservatory roof cleaning</a>
        </div>
        <div>
          <p class="footer__heading">Helpful Pages</p>
          <a href="areas.html">Areas covered</a>
          <a href="window-cleaning-prices-colchester.html">Prices</a>
          <a href="water-fed-pole-window-cleaning-colchester.html">WFP window cleaning</a>
          <a href="traditional-window-cleaning-colchester.html">Traditional cleaning</a>
        </div>
        <div>
          <p class="footer__heading">Contact</p>
          <a href="${phoneHref}">${phone}</a>
          <a href="${smsHref}">Text me</a>
          <a href="mailto:${email}">${email}</a>
        </div>
      </div>
      <div class="shell footer__bottom">
        <p>&copy; 2026 SJ Windows</p>
      </div>
    </footer>
    <div class="mobile-cta">
      <a href="${phoneHref}">Call</a>
      <a href="${smsHref}">Text</a>
      <a href="${waHref}">WhatsApp</a>
      <a href="index.html#calculator">Quote</a>
    </div>`;
}

function pageShell({ title, description, slug, pageType, serviceName, serviceType, body }) {
  return `<!DOCTYPE html>
<html lang="en-GB">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}" />
    <meta name="robots" content="index,follow" />
    <meta name="theme-color" content="#132331" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="en_GB" />
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${esc(description)}" />
    <meta property="og:url" content="${siteUrl}/${esc(slug)}" />
    <meta property="og:image" content="${siteUrl}/sj-windows-social.jpg" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="canonical" href="${siteUrl}/${esc(slug)}" />
    <link rel="icon" href="favicon.svg" type="image/svg+xml" />
    <link rel="stylesheet" href="styles.css" />
    <script src="app.js" defer></script>
  </head>
  <body data-page-type="${esc(pageType)}" data-service-name="${esc(serviceName)}" data-service-type="${esc(serviceType)}">
${body}
${footer()}
  </body>
</html>
`;
}

function contactSection(areaName, serviceLabel = "window cleaning") {
  return `
      <section class="section section--accent">
        <div class="shell quote-panel">
          <div class="quote-panel__content">
            <p class="eyebrow">The Quickest Way To Get A Price</p>
            <h2>Send the postcode and I will let you know what looks realistic.</h2>
            <p>
              Send your postcode, rough property type, and whether you want regular or one-off cleaning.
              A quick photo can help if access is unusual.
            </p>
            <div class="contact-points">
              <a href="index.html#calculator"><span>Smart Quote</span><strong>Get a guide price</strong></a>
              <a href="${smsHref}"><span>Text Sam</span><strong>${areaName === "your area" ? "Send your postcode" : `Send the ${esc(areaName)} postcode`}</strong></a>
              <a href="${waHref}"><span>WhatsApp</span><strong>Ask about ${esc(serviceLabel)}</strong></a>
            </div>
          </div>
          <div class="panel">
            <p class="eyebrow">Prefer To Speak Directly?</p>
            <p>
              No office, no call centre, just direct contact. Call, text or WhatsApp me and I will say if the job looks like a good fit.
            </p>
            <div class="link-list">
              <a class="text-link" href="${phoneHref}">Call ${phone}</a>
              <a class="text-link" href="contact.html">Contact page</a>
              <a class="text-link" href="reviews.html">Customer reviews</a>
            </div>
          </div>
        </div>
      </section>`;
}

function areaPage(area) {
  const title = `Window Cleaner ${area.name} | Regular Local Cleans | SJ Windows`;
  const description = `Window cleaner in ${area.name} from Sam at SJ Windows. Friendly local residential window cleaning, Smart Quote guide prices and direct text or WhatsApp contact.`;
  const nearby = area.nearby.map((name) => [areaSlug(name), name]);
  const body = `${header(area.name)}
    <main id="main">
      <section class="page-hero">
        <div class="shell page-hero__grid">
          <div>
            <nav class="breadcrumbs" aria-label="Breadcrumb">
              <a href="index.html">Home</a>
              <a href="areas.html">Areas</a>
              <span aria-current="page">${esc(area.name)}</span>
            </nav>
            <p class="eyebrow">Window Cleaner ${esc(area.name)}</p>
            <h1>Window cleaner in ${esc(area.name)}</h1>
            <p class="hero__lead">
              I'm Sam from SJ Windows. If you need a window cleaner in ${esc(area.name)}, send the postcode and I will let you know what looks realistic.
            </p>
            <p>
              You deal directly with me from the first message to the clean itself. Regular cleans usually work best where the address works for the round.
            </p>
            <div class="hero__actions">
              <a class="button" href="index.html#calculator">Get a guide price</a>
              <a class="button button--ghost" href="${smsHref}">Text Sam</a>
              <a class="button button--ghost" href="${waHref}">WhatsApp Sam</a>
            </div>
          </div>
          <aside class="hero-card">
            <p class="hero-card__kicker">Usually suits</p>
            <ul>
              <li>${esc(area.propertyMix)}</li>
              <li>Regular 4, 6 or 8-weekly window cleaning</li>
              <li>People who want direct contact instead of a call centre</li>
              <li>Homes where access and the address works for the round</li>
            </ul>
          </aside>
        </div>
      </section>

      <section class="section">
        <div class="shell split">
          <div>
            <p class="eyebrow">Usually Suits</p>
            <h2>For local homes that want the windows kept on top of.</h2>
            <p>
              In ${esc(area.name)}, this usually suits ${esc(area.propertyMix)}. I keep the first conversation simple: postcode, rough property type, and whether you want regular or one-off cleaning.
            </p>
          </div>
          <div class="stacked-cards">
            <article class="mini-card"><h3>Direct contact</h3><p>I am the person you message and the person doing the work.</p></article>
            <article class="mini-card"><h3>Frames and sills</h3><p>Frames and sills are included as part of a normal outside window clean.</p></article>
            <article class="mini-card"><h3>Address check first</h3><p>I would rather be honest about the route than promise every road automatically works.</p></article>
          </div>
        </div>
      </section>

      <section class="section section--accent">
        <div class="shell split">
          <div>
            <p class="eyebrow">What Affects The Price In ${esc(area.name)}</p>
            <h2>The property setup matters more than the area name.</h2>
            <p>
              Prices depend on the amount of glass, access, height, condition, frequency, extras, parking and whether the address fits ${esc(area.character)}.
            </p>
          </div>
          <div class="stacked-cards">
            <article class="mini-card"><h3>Access</h3><p>Side gates, extensions, awkward rear access and higher glass can change the time needed.</p></article>
            <article class="mini-card"><h3>Condition</h3><p>A maintained regular clean is usually easier than a first clean after a long gap.</p></article>
            <article class="mini-card"><h3>Frequency</h3><p>Regular 4, 6 or 8-weekly work is usually easier to price sensibly than a one-off.</p></article>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="shell split">
          <div>
            <p class="eyebrow">Regular Window Cleaning In ${esc(area.name)}</p>
            <h2>Regular cleaning is usually easier when the job fits properly.</h2>
            <p>${esc(area.route)}</p>
            <p>
              If the road works with the route, regular visits are normally the neatest option. If it is a wider or awkward postcode, I will say so before you waste time.
            </p>
          </div>
          <div class="panel">
            <p class="eyebrow">What To Send Me</p>
            <p>
              Send your postcode, rough property type, and whether you want regular or one-off cleaning. A quick photo can help if access is unusual.
            </p>
            <div class="link-list">
              <a class="text-link" href="window-cleaning-prices-colchester.html">Window cleaning prices</a>
              <a class="text-link" href="residential-window-cleaning-colchester.html">Residential window cleaning</a>
              <a class="text-link" href="services.html">All services</a>
              <a class="text-link" href="contact.html">Contact Sam</a>
            </div>
          </div>
        </div>
      </section>

      <section class="section section--accent">
        <div class="shell">
          <div class="section-heading">
            <p class="eyebrow">Nearby Areas</p>
            <h2>Other local pages near ${esc(area.name)}.</h2>
            <p>Not sure if I cover your road? Send the postcode and I will let you know if it fits.</p>
          </div>
          <div class="area-cloud">${chips(nearby)}<a class="area-chip" href="areas.html">All areas covered</a></div>
        </div>
      </section>

      <section class="section">
        <div class="shell">
          <div class="section-heading">
            <p class="eyebrow">Customer Reviews</p>
            <h2>What customers nearby say.</h2>
          </div>
          <div class="review-grid review-grid--three">${reviewCards()}</div>
          <p class="section-linkline"><a class="text-link" href="reviews.html">Read more reviews</a></p>
        </div>
      </section>

      ${contactSection(area.name)}

      <section class="section" id="faq">
        <div class="shell">
          <div class="section-heading">
            <p class="eyebrow">FAQ</p>
            <h2>Window cleaning questions in ${esc(area.name)}.</h2>
          </div>
          <div class="faq-list">
            <article class="faq-item"><button type="button" class="faq-toggle" aria-expanded="false">Do you cover ${esc(area.name)} for window cleaning?</button><div class="faq-answer"><p>Yes, where the postcode fits the local round sensibly. Send the postcode and I will let you know what looks realistic.</p></div></article>
            <article class="faq-item"><button type="button" class="faq-toggle" aria-expanded="false">Can I get regular window cleaning in ${esc(area.name)}?</button><div class="faq-answer"><p>Regular cleans are usually the best fit, especially when the address works with nearby route areas such as ${esc(area.nearby.slice(0, 3).join(", "))}.</p></div></article>
            <article class="faq-item"><button type="button" class="faq-toggle" aria-expanded="false">What affects the price in ${esc(area.name)}?</button><div class="faq-answer"><p>The main factors are property type, glass amount, access, height, condition, frequency, extras, and whether the address works for the round.</p></div></article>
            <article class="faq-item"><button type="button" class="faq-toggle" aria-expanded="false">Do you offer one-off cleans in ${esc(area.name)}?</button><div class="faq-answer"><p>Sometimes, where the job is practical and the route allows it. Regular work is usually easier to fit and price.</p></div></article>
            <article class="faq-item"><button type="button" class="faq-toggle" aria-expanded="false">What should I send for a proper quote?</button><div class="faq-answer"><p>Send your postcode, rough property type, and whether you want regular or one-off cleaning. A quick photo can help if access is unusual.</p></div></article>
          </div>
        </div>
      </section>
    </main>`;

  return pageShell({
    title,
    description,
    slug: area.slug,
    pageType: "area",
    serviceName: `Window cleaner in ${area.name}`,
    serviceType: `Residential window cleaning in ${area.name}`,
    body,
  });
}

function serviceAreaPage(serviceKey, areaName) {
  const service = services[serviceKey];
  const area = areaByName(areaName);
  const slug = serviceSlug(serviceKey, areaName);
  const nearby = area.nearby.slice(0, 4).map((name) => [areaSlug(name), name]);
  const related = service.extraLinks;
  const body = `${header(areaName)}
    <main id="main">
      <section class="page-hero">
        <div class="shell page-hero__grid">
          <div>
            <nav class="breadcrumbs" aria-label="Breadcrumb">
              <a href="index.html">Home</a>
              <a href="services.html">Services</a>
              <a href="areas.html">Areas</a>
              <span aria-current="page">${esc(service.label)} ${esc(areaName)}</span>
            </nav>
            <p class="eyebrow">${esc(service.label)} ${esc(areaName)}</p>
            <h1>${esc(service.h1(areaName))}</h1>
            <p class="hero__lead">${esc(service.what)}</p>
            <p>
              I'm Sam from SJ Windows. Send the postcode and a quick photo if access is unusual, and I will tell you what looks realistic.
            </p>
            <div class="hero__actions">
              <a class="button" href="index.html#calculator">Get a guide price</a>
              <a class="button button--ghost" href="${smsHref}">Text Sam</a>
              <a class="button button--ghost" href="${waHref}">WhatsApp Sam</a>
            </div>
          </div>
          <aside class="hero-card">
            <p class="hero-card__kicker">Who it suits locally</p>
            <ul>
              <li>${esc(service.suits)}</li>
              <li>Homes in ${esc(areaName)} where access is safe and practical</li>
              <li>People who want a clear answer before booking</li>
              <li>Jobs that fit the round sensibly</li>
            </ul>
          </aside>
        </div>
      </section>

      <section class="section">
        <div class="shell split">
          <div>
            <p class="eyebrow">What This Service Is</p>
            <h2>A practical local service, quoted around the actual job.</h2>
            <p>${esc(service.what)}</p>
            <p>${esc(service.suits)}</p>
          </div>
          <div class="stacked-cards">
            <article class="mini-card"><h3>Access first</h3><p>I will check whether the setup is safe and realistic before agreeing the job.</p></article>
            <article class="mini-card"><h3>Photos help</h3><p>A quick photo can save back-and-forth when there is height, awkward access or heavy build-up.</p></article>
            <article class="mini-card"><h3>Direct contact</h3><p>You deal directly with me rather than a booking office.</p></article>
          </div>
        </div>
      </section>

      <section class="section section--accent">
        <div class="shell split">
          <div>
            <p class="eyebrow">Access And Pricing Factors</p>
            <h2>The quote depends on the details, not just the postcode.</h2>
            <p>${esc(service.pricing)}</p>
            <p>
              For ${esc(areaName)}, the address and access still matter. Further or awkward jobs may still be possible, but I will be honest if the run does not make sense.
            </p>
          </div>
          <div class="panel">
            <p class="eyebrow">What To Send Me</p>
            <p>
              Send your postcode, rough property type, and whether you want regular or one-off cleaning. A quick photo can help if access is unusual.
            </p>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="shell split">
          <div>
            <p class="eyebrow">Regular Or One-Off?</p>
            <h2>Some jobs suit regular rounds, others are better as occasional cleans.</h2>
            <p>${esc(service.regular)}</p>
          </div>
          <div class="stacked-cards">
            <article class="mini-card"><h3>Regular work</h3><p>Works best when the road works for the round and the service makes sense to repeat.</p></article>
            <article class="mini-card"><h3>One-off work</h3><p>Good for catch-up cleans, moving-in cleans, or visible build-up where access allows.</p></article>
          </div>
        </div>
      </section>

      <section class="section section--accent">
        <div class="shell">
          <div class="section-heading">
            <p class="eyebrow">Nearby And Related</p>
            <h2>Nearby areas and relevant service pages.</h2>
          </div>
          <div class="area-cloud">${chips(nearby)}<a class="area-chip" href="${esc(area.slug)}">Window cleaner in ${esc(areaName)}</a><a class="area-chip" href="areas.html">All areas</a></div>
          <p class="section-linkline">
            ${related.map(([href, label]) => `<a class="text-link" href="${esc(href)}">${esc(label)}</a>`).join(" ")}
          </p>
        </div>
      </section>

      ${contactSection(areaName, service.label.toLowerCase())}

      <section class="section" id="faq">
        <div class="shell">
          <div class="section-heading">
            <p class="eyebrow">FAQ</p>
            <h2>${esc(service.label)} questions in ${esc(areaName)}.</h2>
          </div>
          <div class="faq-list">
            <article class="faq-item"><button type="button" class="faq-toggle" aria-expanded="false">Do you offer ${esc(service.label.toLowerCase())} in ${esc(areaName)}?</button><div class="faq-answer"><p>Yes, where the postcode, access and the address works for the round. Send the postcode first and I will check it properly.</p></div></article>
            <article class="faq-item"><button type="button" class="faq-toggle" aria-expanded="false">What affects the price?</button><div class="faq-answer"><p>${esc(service.pricing)}</p></div></article>
            <article class="faq-item"><button type="button" class="faq-toggle" aria-expanded="false">Should I send a photo?</button><div class="faq-answer"><p>Yes, especially if access is unusual, the job is higher up, or you are asking about panels, gutters or a conservatory roof.</p></div></article>
            <article class="faq-item"><button type="button" class="faq-toggle" aria-expanded="false">Is it better as a regular or one-off clean?</button><div class="faq-answer"><p>${esc(service.regular)}</p></div></article>
            <article class="faq-item"><button type="button" class="faq-toggle" aria-expanded="false">How do I get a proper quote?</button><div class="faq-answer"><p>Send your postcode, rough property type, and whether you want regular or one-off cleaning. A quick photo can help if access is unusual.</p></div></article>
          </div>
        </div>
      </section>
    </main>`;

  return pageShell({
    title: service.title(areaName),
    description: service.description(areaName),
    slug,
    pageType: "service",
    serviceName: `${service.label} in ${areaName}`,
    serviceType: service.label,
    body,
  });
}

function areasHub() {
  const groups = [...new Set(areas.map((area) => area.group))];
  const grouped = groups
    .map((group) => {
      const links = areas
        .filter((area) => area.group === group)
        .map((area) => [area.slug, area.name]);
      const serviceLinks = serviceAreaPages
        .filter(([, areaName]) => areaByName(areaName)?.group === group)
        .slice(0, 8)
        .map(([serviceKey, areaName]) => [serviceSlug(serviceKey, areaName), `${services[serviceKey].label} in ${areaName}`]);
      return `
            <article class="service-card">
              <h3>${esc(group)}</h3>
              <p>Local pages for ${esc(group)}. The postcode still matters, especially away from the core Colchester run.</p>
              <div class="area-cloud">${chips(links)}</div>
              ${serviceLinks.length ? `<p class="section-linkline">${serviceLinks.map(([href, label]) => `<a class="text-link" href="${esc(href)}">${esc(label)}</a>`).join(" ")}</p>` : ""}
            </article>`;
    })
    .join("");

  const priorityLinks = serviceAreaPages.map(([serviceKey, areaName]) => [
    serviceSlug(serviceKey, areaName),
    `${services[serviceKey].label} in ${areaName}`,
  ]);
  const displayPriorityLinks = [
    ["car-cleaning-colchester.html", "Car cleaning in Colchester"],
    ["car-cleaning-near-colchester.html", "Car cleaning areas"],
    ...priorityLinks,
  ];
  const streetLinks = streetPages.map((street) => [
    street.slug,
    `${street.street}, ${street.area}`,
  ]);

  const body = `${header("Areas Covered")}
    <main id="main">
      <section class="page-hero">
        <div class="shell page-hero__grid">
          <div>
            <nav class="breadcrumbs" aria-label="Breadcrumb">
              <a href="index.html">Home</a>
              <span aria-current="page">Areas covered</span>
            </nav>
            <p class="eyebrow">Areas Covered</p>
            <h1>Window cleaning areas around Colchester</h1>
            <p class="hero__lead">
              Local window cleaning pages for Colchester, nearby neighbourhoods, villages and local round areas.
            </p>
            <p>
              I'm Sam from SJ Windows. The postcode matters, especially for further areas, so send the postcode and I will confirm what looks realistic.
            </p>
            <div class="hero__actions">
              <a class="button" href="index.html#calculator">Get a guide price</a>
              <a class="button button--ghost" href="${smsHref}">Text postcode</a>
              <a class="button button--ghost" href="window-cleaner-near-colchester.html">Near-me guide</a>
            </div>
          </div>
          <aside class="hero-card">
            <p class="hero-card__kicker">Quick check</p>
            <ul>
              <li>Send the postcode first</li>
              <li>Say regular or one-off</li>
              <li>Add a quick photo if access is unusual</li>
              <li>I will let you know what looks realistic</li>
            </ul>
          </aside>
        </div>
      </section>

      <section class="section">
        <div class="shell">
          <div class="section-heading">
            <p class="eyebrow">Area Groups</p>
            <h2>Find the closest local page.</h2>
            <p>
              These pages are here to help local searches find the right information without pretending every road is automatically covered.
            </p>
          </div>
          <div class="card-grid card-grid--three">${grouped}</div>
        </div>
      </section>

      <section class="section section--accent">
        <div class="shell">
          <div class="section-heading">
            <p class="eyebrow">Priority Service Areas</p>
            <h2>Service pages for the areas people ask about most.</h2>
            <p>Use these when you already know the job you want priced.</p>
          </div>
          <div class="area-cloud">${chips(displayPriorityLinks)}</div>
        </div>
      </section>

      <section class="section">
        <div class="shell">
          <div class="section-heading">
            <p class="eyebrow">Road And Street Pages</p>
            <h2>More specific local pages where property type affects the quote.</h2>
            <p>
              These road pages explain common property types and what I would check before pricing. One road can still include a real mix of homes.
            </p>
          </div>
          <div class="area-cloud">${chips(streetLinks)}</div>
        </div>
      </section>

      ${contactSection("your area")}
    </main>`;

  return pageShell({
    title: "Areas Covered | Window Cleaning Around Colchester | SJ Windows",
    description:
      "Areas covered by SJ Windows for local window cleaning around Colchester, including Wivenhoe, Lexden, Stanway, Greenstead, Highwoods, villages and local round areas.",
    slug: "areas.html",
    pageType: "area",
    serviceName: "Window cleaning areas around Colchester",
    serviceType: "Local window cleaning areas",
    body,
  });
}

function nearMePage() {
  const coreLinks = ["Colchester", "Greenstead", "Wivenhoe", "Lexden", "Stanway", "Highwoods", "Mile End", "Prettygate"].map((name) => [
    areaSlug(name),
    name,
  ]);
  const widerLinks = ["Rowhedge", "West Bergholt", "Marks Tey", "Dedham", "Manningtree", "Mersea Island", "Tiptree", "Brightlingsea"].map((name) => [
    areaSlug(name),
    name,
  ]);
  const streetLinks = streetPages.slice(0, 8).map((street) => [
    street.slug,
    `${street.street}, ${street.area}`,
  ]);
  const body = `${header("Near Me")}
    <main id="main">
      <section class="page-hero">
        <div class="shell page-hero__grid">
          <div>
            <nav class="breadcrumbs" aria-label="Breadcrumb">
              <a href="index.html">Home</a>
              <a href="areas.html">Areas</a>
              <span aria-current="page">Window cleaner near Colchester</span>
            </nav>
            <p class="eyebrow">Window Cleaner Near Me Colchester</p>
            <h1>Window cleaner near me in Colchester</h1>
            <p class="hero__lead">
              If you are searching for a window cleaner near me around Colchester, the honest answer is: send the postcode and I will check whether it works for the round.
            </p>
            <p>
              I'm Sam from SJ Windows. You deal directly with me, and I will tell you if your road looks practical for regular window cleaning, one-off work, or an add-on such as gutters, solar panels or a conservatory roof.
            </p>
            <div class="hero__actions">
              <a class="button" href="index.html#calculator">Get a guide price</a>
              <a class="button button--ghost" href="${smsHref}">Text postcode</a>
              <a class="button button--ghost" href="${waHref}">WhatsApp Sam</a>
            </div>
          </div>
          <aside class="hero-card">
            <p class="hero-card__kicker">Best first message</p>
            <ul>
              <li>Postcode and road name</li>
              <li>Rough property type</li>
              <li>Regular or one-off cleaning</li>
              <li>A photo if access is unusual</li>
            </ul>
          </aside>
        </div>
      </section>

      <section class="section">
        <div class="shell split">
          <div>
            <p class="eyebrow">How I Judge Local Check</p>
            <h2>Near me does not always mean the same thing as a good fit.</h2>
            <p>
              Some Colchester roads fit naturally into regular rounds. Further villages can still work, but they need to link sensibly with nearby bookings. That is why the postcode matters more than a broad coverage claim.
            </p>
          </div>
          <div class="stacked-cards">
            <article class="mini-card"><h3>Core Colchester</h3><p>Usually the easiest to check for regular window cleaning.</p></article>
            <article class="mini-card"><h3>Nearby villages</h3><p>Often possible where the work sits neatly with the local round.</p></article>
            <article class="mini-card"><h3>Street-level checks</h3><p>Property type, parking, access and height can change the quote on the same road.</p></article>
          </div>
        </div>
      </section>

      <section class="section section--accent">
        <div class="shell">
          <div class="section-heading">
            <p class="eyebrow">Core Local Areas</p>
            <h2>Pages for Colchester-side searches.</h2>
          </div>
          <div class="area-cloud">${chips(coreLinks)}</div>
        </div>
      </section>

      <section class="section">
        <div class="shell">
          <div class="section-heading">
            <p class="eyebrow">Further Areas</p>
            <h2>Nearby areas where the postcode needs checking.</h2>
          </div>
          <div class="area-cloud">${chips(widerLinks)}<a class="area-chip" href="areas.html">All areas covered</a></div>
        </div>
      </section>

      <section class="section section--accent">
        <div class="shell">
          <div class="section-heading">
            <p class="eyebrow">Street Examples</p>
            <h2>Road-level pages where property type affects the quote.</h2>
            <p>
              These pages are not pretending every home on a road is identical. They explain common property types and what I would check before pricing.
            </p>
          </div>
          <div class="area-cloud">${chips(streetLinks)}</div>
        </div>
      </section>

      ${contactSection("near Colchester")}

      <section class="section" id="faq">
        <div class="shell">
          <div class="section-heading"><p class="eyebrow">FAQ</p><h2>Near-me search questions.</h2></div>
          <div class="faq-list">
            <article class="faq-item"><button type="button" class="faq-toggle" aria-expanded="false">Are you a window cleaner near me in Colchester?</button><div class="faq-answer"><p>If your postcode fits the Colchester route, probably. Send the postcode and I will check it properly before giving a quote.</p></div></article>
            <article class="faq-item"><button type="button" class="faq-toggle" aria-expanded="false">Do you cover villages outside Colchester?</button><div class="faq-answer"><p>Some nearby villages can work where they work for the round. Further areas are best checked by postcode before assuming regular work is practical.</p></div></article>
            <article class="faq-item"><button type="button" class="faq-toggle" aria-expanded="false">What should I send first?</button><div class="faq-answer"><p>Send your postcode, rough property type, and whether you want regular or one-off cleaning. A quick photo can help if access is unusual.</p></div></article>
            <article class="faq-item"><button type="button" class="faq-toggle" aria-expanded="false">Can you quote for gutters, solar panels or conservatory roofs too?</button><div class="faq-answer"><p>Yes, where access is safe and practical. Mention the extra service in your message and send a photo if it helps show the setup.</p></div></article>
          </div>
        </div>
      </section>
    </main>`;

  return pageShell({
    title: "Window Cleaner Near Me Colchester | SJ Windows",
    description:
      "Searching for a window cleaner near me in Colchester? Send Sam your postcode for honest regular local window cleaning, direct contact and local guide prices.",
    slug: "window-cleaner-near-colchester.html",
    pageType: "area",
    serviceName: "Window cleaner near me in Colchester",
    serviceType: "Local regular local window cleaning near Colchester",
    body,
  });
}

function streetPage(street) {
  const area = areaByName(street.area);
  const nearbyStreetLinks = street.nearbyStreets
    .map((name) => streetPages.find((item) => item.street === name))
    .filter(Boolean)
    .map((item) => [item.slug, item.street]);
  const areaNearby = area.nearby.slice(0, 3).map((name) => [areaSlug(name), name]);
  const title = `Window Cleaner ${street.street} ${street.area} | SJ Windows`;
  const description = `Window cleaner for ${street.street}, ${street.area}. Sam from SJ Windows tailors quotes around property type, access, location and whether you want regular or one-off cleaning.`;
  const body = `${header(street.area)}
    <main id="main">
      <section class="page-hero">
        <div class="shell page-hero__grid">
          <div>
            <nav class="breadcrumbs" aria-label="Breadcrumb">
              <a href="index.html">Home</a>
              <a href="areas.html">Areas</a>
              <a href="${esc(area.slug)}">${esc(street.area)}</a>
              <span aria-current="page">${esc(street.street)}</span>
            </nav>
            <p class="eyebrow">Window Cleaner ${esc(street.street)}</p>
            <h1>Window cleaner for ${esc(street.street)}, ${esc(street.area)}</h1>
            <p class="hero__lead">
              If you are on or near ${esc(street.street)}, send the postcode and I will check the property type, access and whether the address works before giving a proper quote.
            </p>
            <p>
              I am not assuming every home on the road is the same. This page is written around the kinds of properties you often see locally, then the actual quote is based on your house.
            </p>
            <div class="hero__actions">
              <a class="button" href="index.html#calculator">Get a guide price</a>
              <a class="button button--ghost" href="${smsHref}">Text Sam</a>
              <a class="button button--ghost" href="${waHref}">WhatsApp Sam</a>
            </div>
          </div>
          <aside class="hero-card">
            <p class="hero-card__kicker">Likely property mix</p>
            <ul>
              <li>${esc(street.propertyCue)}</li>
              <li>Regular cleaning where the address works for the round</li>
              <li>Quote checked by postcode, access and photos when needed</li>
            </ul>
          </aside>
        </div>
      </section>

      <section class="section">
        <div class="shell split">
          <div>
            <p class="eyebrow">Property Type On ${esc(street.street)}</p>
            <h2>The property style changes the time and method.</h2>
            <p>
              Around ${esc(street.street)}, you often see ${esc(street.propertyCue)}. That affects window count, height, detailing and whether a simple regular clean or a more careful first clean is needed.
            </p>
          </div>
          <div class="stacked-cards">
            <article class="mini-card"><h3>Access check</h3><p>${esc(street.accessCue)}.</p></article>
            <article class="mini-card"><h3>Method choice</h3><p>${esc(street.methodCue)}</p></article>
            <article class="mini-card"><h3>Photo helps</h3><p>A quick front and rear photo can help if the property is unusual, extended or hard to access.</p></article>
          </div>
        </div>
      </section>

      <section class="section section--accent">
        <div class="shell split">
          <div>
            <p class="eyebrow">Regular Or One-Off?</p>
            <h2>Regular cleans are usually easier when the street works for the round.</h2>
            <p>
              For ${esc(street.street)}, I will check whether the postcode works with ${esc(street.area)} and nearby route areas. Regular 4, 6 or 8-weekly cleaning is usually easier to keep dependable than a separate one-off visit.
            </p>
          </div>
          <div class="panel">
            <p class="eyebrow">What To Send Me</p>
            <p>
              Send your postcode, rough property type, and whether you want regular or one-off cleaning. A quick photo can help if access is unusual.
            </p>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="shell">
          <div class="section-heading">
            <p class="eyebrow">Nearby Pages</p>
            <h2>Nearby streets and areas.</h2>
          </div>
          <div class="area-cloud">${chips(nearbyStreetLinks)}${chips(areaNearby)}<a class="area-chip" href="${esc(area.slug)}">Window cleaner in ${esc(street.area)}</a><a class="area-chip" href="areas.html">All areas</a></div>
        </div>
      </section>

      ${contactSection(street.street)}

      <section class="section" id="faq">
        <div class="shell">
          <div class="section-heading"><p class="eyebrow">FAQ</p><h2>${esc(street.street)} window cleaning questions.</h2></div>
          <div class="faq-list">
            <article class="faq-item"><button type="button" class="faq-toggle" aria-expanded="false">Do you clean windows on ${esc(street.street)}?</button><div class="faq-answer"><p>Yes, where the postcode works for the round and access is practical. Send the exact postcode and I will check it properly.</p></div></article>
            <article class="faq-item"><button type="button" class="faq-toggle" aria-expanded="false">What kind of properties affect the quote here?</button><div class="faq-answer"><p>On or near ${esc(street.street)}, the quote is shaped by ${esc(street.propertyCue)}, plus access, height, condition and frequency.</p></div></article>
            <article class="faq-item"><button type="button" class="faq-toggle" aria-expanded="false">Can you do a hand finish?</button><div class="faq-answer"><p>Where glass is safe and practical to reach, yes. Traditional hand-finish work is often best for bungalows, ground-floor glass, doors, or detail areas.</p></div></article>
            <article class="faq-item"><button type="button" class="faq-toggle" aria-expanded="false">Should I send photos?</button><div class="faq-answer"><p>Photos help if the property is larger, older, extended, has awkward rear access or you want me to judge the best cleaning method.</p></div></article>
          </div>
        </div>
      </section>
    </main>`;

  return pageShell({
    title,
    description,
    slug: street.slug,
    pageType: "area",
    serviceName: `Window cleaner for ${street.street}, ${street.area}`,
    serviceType: `Residential window cleaning on ${street.street}`,
    body,
  });
}

function methodPage(kind) {
  const isWfp = kind === "wfp";
  const slug = isWfp
    ? "water-fed-pole-window-cleaning-colchester.html"
    : "traditional-window-cleaning-colchester.html";
  const title = isWfp
    ? "Water Fed Pole Window Cleaning Colchester | SJ Windows"
    : "Traditional Window Cleaning Colchester | Hand Finish | SJ Windows";
  const h1 = isWfp
    ? "Water-fed pole window cleaning in Colchester"
    : "Traditional window cleaning and hand-finish work in Colchester";
  const description = isWfp
    ? "A simple guide to water-fed pole window cleaning in Colchester from SJ Windows, including how it works, why pure water is used and when it suits local homes."
    : "Traditional window cleaning in Colchester from SJ Windows, with hand-finish work suited to bungalows, ground-floor glass and detail where practical.";
  const body = `${header(isWfp ? "WFP Cleaning" : "Traditional Cleaning")}
    <main id="main">
      <section class="page-hero">
        <div class="shell page-hero__grid">
          <div>
            <nav class="breadcrumbs" aria-label="Breadcrumb">
              <a href="index.html">Home</a>
              <a href="services.html">Services</a>
              <span aria-current="page">${esc(isWfp ? "Water-fed pole cleaning" : "Traditional cleaning")}</span>
            </nav>
            <p class="eyebrow">${esc(isWfp ? "How WFP Works" : "Hand Finish")}</p>
            <h1>${esc(h1)}</h1>
            <p class="hero__lead">
              ${esc(
                isWfp
                  ? "Water-fed pole cleaning uses purified water fed through a pole and brush, so upstairs windows can often be cleaned safely from the ground."
                  : "Traditional cleaning is the familiar applicator, squeegee and detailing method, often best for ground-floor glass, bungalows, and hand-finish situations."
              )}
            </p>
            <p>I'm Sam from SJ Windows. I will use the method that makes sense for the property, access and finish you need.</p>
            <div class="hero__actions">
              <a class="button" href="index.html#calculator">Get a guide price</a>
              <a class="button button--ghost" href="${smsHref}">Text Sam</a>
            </div>
          </div>
          <aside class="hero-card">
            <p class="hero-card__kicker">${esc(isWfp ? "Good for" : "Best suited to")}</p>
            <ul>
              ${
                isWfp
                  ? "<li>Upper windows cleaned from ground level where practical</li><li>Frames and sills as part of the normal clean</li><li>Regular residential routes</li><li>Safer access where ladders are not sensible</li>"
                  : "<li>Bungalows and single-storey glass</li><li>Ground-floor panes needing a hand finish</li><li>Inside glass where agreed</li><li>Detail work where access is safe</li>"
              }
            </ul>
          </aside>
        </div>
      </section>

      <section class="section">
        <div class="shell split">
          <div>
            <p class="eyebrow">${esc(isWfp ? "How It Works" : "How It Works")}</p>
            <h2>${esc(isWfp ? "Pure water loosens dirt and dries naturally." : "A hands-on clean for suitable glass.")}</h2>
            <p>
              ${esc(
                isWfp
                  ? "The brush agitates the dirt, the purified water rinses it away, and the glass is left to dry naturally. Because the water is purified, it dries without the mineral spots ordinary tap water can leave."
                  : "Traditional cleaning uses a washer, squeegee and detailing cloths. It can be a good option for easy ground-floor glass, bungalows, internal panes and areas where a close hand finish is practical."
              )}
            </p>
          </div>
          <div class="stacked-cards">
            <article class="mini-card"><h3>Access matters</h3><p>Not every method suits every property, so I choose based on safety, finish and practicality.</p></article>
            <article class="mini-card"><h3>Regular work</h3><p>Regular cleans are usually easier to keep consistent when the road works for the round.</p></article>
            <article class="mini-card"><h3>Direct contact</h3><p>Send the postcode and I will explain what makes sense for your home.</p></article>
          </div>
        </div>
      </section>

      <section class="section section--accent">
        <div class="shell split">
          <div>
            <p class="eyebrow">${esc(isWfp ? "Benefits" : "Where Traditional Helps")}</p>
            <h2>${esc(isWfp ? "Good for modern regular window cleaning." : "Good for bungalows and ground-floor hand finish.")}</h2>
            <p>
              ${esc(
                isWfp
                  ? "WFP cleaning can reach many upper windows from the ground, includes frames and sills as part of a normal clean, and works well for regular exterior maintenance."
                  : "Traditional hand-finish work is often best on bungalows, lower panes, doors, mirrors, internal glass where agreed, and ground-floor areas that need close detailing."
              )}
            </p>
          </div>
          <div class="panel">
            <p class="eyebrow">Related Services</p>
            <div class="link-list">
              <a class="text-link" href="residential-window-cleaning-colchester.html">Residential window cleaning</a>
              <a class="text-link" href="window-cleaning-prices-colchester.html">Window cleaning prices</a>
              <a class="text-link" href="${esc(isWfp ? "traditional-window-cleaning-colchester.html" : "water-fed-pole-window-cleaning-colchester.html")}">${esc(isWfp ? "Traditional cleaning" : "Water-fed pole cleaning")}</a>
              <a class="text-link" href="areas.html">Areas covered</a>
            </div>
          </div>
        </div>
      </section>

      ${contactSection("Colchester", isWfp ? "water-fed pole window cleaning" : "traditional window cleaning")}

      <section class="section" id="faq">
        <div class="shell">
          <div class="section-heading"><p class="eyebrow">FAQ</p><h2>${esc(isWfp ? "Water-fed pole questions." : "Traditional cleaning questions.")}</h2></div>
          <div class="faq-list">
            <article class="faq-item"><button type="button" class="faq-toggle" aria-expanded="false">${esc(isWfp ? "What is water-fed pole window cleaning?" : "What is traditional window cleaning?")}</button><div class="faq-answer"><p>${esc(isWfp ? "It is a method using purified water, a brush and an extendable pole to clean exterior glass, frames and sills from the ground where practical." : "It is the hand method using a washer, squeegee and detailing cloths, usually best for easy ground-floor glass, bungalows and internal panes where agreed.")}</p></div></article>
            <article class="faq-item"><button type="button" class="faq-toggle" aria-expanded="false">${esc(isWfp ? "Why does the glass dry naturally?" : "Is traditional cleaning better for bungalows?")}</button><div class="faq-answer"><p>${esc(isWfp ? "The water is purified, so it dries without the mineral marks that normal tap water can leave." : "It can be a good fit for bungalows and ground-floor glass because the panes are easier to reach safely for a hand finish.")}</p></div></article>
            <article class="faq-item"><button type="button" class="faq-toggle" aria-expanded="false">Can I choose the method?</button><div class="faq-answer"><p>You can ask, and I will explain what looks sensible for the property. Access, safety and the finish needed all matter.</p></div></article>
            <article class="faq-item"><button type="button" class="faq-toggle" aria-expanded="false">How do I get a quote?</button><div class="faq-answer"><p>Send your postcode, rough property type, and whether you want regular or one-off cleaning. A quick photo can help if access is unusual.</p></div></article>
          </div>
        </div>
      </section>
    </main>`;

  return pageShell({
    title,
    description,
    slug,
    pageType: "service",
    serviceName: isWfp ? "Water-fed pole window cleaning in Colchester" : "Traditional window cleaning in Colchester",
    serviceType: isWfp ? "Water-fed pole window cleaning" : "Traditional window cleaning",
    body,
  });
}

function writePage(slug, content) {
  writeFileSync(resolve(root, slug), content);
}

function sitemap() {
  const htmlFiles = readdirSync(root)
    .filter((file) => file.endsWith(".html") && file !== "404.html")
    .sort((a, b) => a.localeCompare(b));
  const urls = ["index.html", ...htmlFiles.filter((file) => file !== "index.html")];
  const entries = urls
    .map((file) => {
      const loc = file === "index.html" ? `${siteUrl}/` : `${siteUrl}/${file}`;
      const priority =
        file === "index.html"
          ? "1.0"
          : file === "areas.html"
            ? "0.9"
            : file.includes("prices") || file === "contact.html" || file === "services.html" || file === "reviews.html"
              ? "0.9"
              : file.startsWith("window-cleaner-")
                ? "0.7"
                : "0.75";
      const changefreq = file === "index.html" ? "weekly" : "monthly";
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("\n");
  writeFileSync(resolve(root, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`);
}

for (const area of areas) {
  writePage(area.slug, areaPage(area));
}

for (const [serviceKey, areaName] of serviceAreaPages) {
  writePage(serviceSlug(serviceKey, areaName), serviceAreaPage(serviceKey, areaName));
}

for (const street of streetPages) {
  writePage(street.slug, streetPage(street));
}

writePage("areas.html", areasHub());
writePage("window-cleaner-near-colchester.html", nearMePage());
writePage("water-fed-pole-window-cleaning-colchester.html", methodPage("wfp"));
writePage("traditional-window-cleaning-colchester.html", methodPage("traditional"));
sitemap();

console.log(
  `Generated ${areas.length} area pages, ${serviceAreaPages.length} service-area pages, ${streetPages.length} street pages, near-me page, areas.html, 2 method pages and sitemap.xml`
);

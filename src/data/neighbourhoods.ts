export interface Neighbourhood {
  slug: string;
  name: string;
  region: string; // e.g. "Toronto", "GTA"
  /** City value(s) to match against listing.city in the DB */
  cityMatches: string[];
  tagline: string;
  description: string;
  highlights: { label: string; value: string }[];
  aboutParagraphs: string[];
  buyingPoints: string[];
  streets?: string[];
  lat: number;
  lng: number;
}

export const neighbourhoods: Neighbourhood[] = [
  {
    slug: "north-york",
    name: "North York",
    region: "Toronto",
    cityMatches: ["North York", "Toronto"],
    tagline: "Urban convenience meets residential calm — one of Toronto's most sought-after districts.",
    description:
      "North York sits at the heart of the GTA, stretching from the leafy streets of Bedford Park in the west to the established communities of Willowdale and Bayview Village in the east. Home to some of Toronto's strongest schools, direct subway access, and a thriving dining scene along Yonge Street, it draws families, young professionals, and investors alike.",
    highlights: [
      { label: "Avg. detached price", value: "$1.8M–$2.4M" },
      { label: "Avg. condo price", value: "$650K–$900K" },
      { label: "Transit", value: "Line 1 Yonge–University" },
      { label: "School rating", value: "Above average EQAO" },
      { label: "Walk score", value: "Very Walkable (78+)" },
      { label: "Best for", value: "Families & professionals" },
    ],
    aboutParagraphs: [
      "North York is one of Toronto's most established districts, known for its wide tree-lined streets, strong school catchments, and exceptional transit access via the Yonge–University subway line. The district spans from Lawrence Avenue in the south to Steeles Avenue in the north, encompassing distinct pockets like Lansing, Willowdale, Bayview Village, and Hoggs Hollow.",
      "The real estate market here reflects steady long-term demand. Detached homes on larger lots command premium prices and rarely sit on the market for long. Condominiums along Yonge Street and near Sheppard–Yonge station offer a more accessible entry point without sacrificing access to amenities.",
      "Yorksell's office is located at 4101 Yonge St in the heart of North York — we know this market at a granular level. Whether you're upsizing, downsizing, or buying your first home here, we can give you a precise read on value that generic platforms can't match.",
    ],
    buyingPoints: [
      "Direct subway access on the Yonge–University line from multiple stations",
      "Strong public and private school options including Earl Haig Secondary School",
      "Mix of detached family homes, semis, townhouses, and high-rise condos",
      "Close proximity to Mel Lastman Square, Fairview Mall, and Bayview Village",
      "Consistent demand from downsizers moving from larger GTA homes",
      "Growing restaurant and café scene along Yonge, Sheppard, and Bayview",
    ],
    streets: [
      "Yonge Street",
      "Sheppard Avenue",
      "Bayview Avenue",
      "Willowdale Avenue",
      "Empress Avenue",
      "Elmwood Avenue",
    ],
    lat: 43.7615,
    lng: -79.4111,
  },
  {
    slug: "yorkville",
    name: "Yorkville",
    region: "Toronto",
    cityMatches: ["Toronto"],
    tagline: "Toronto's most prestigious address — luxury living at the intersection of culture and convenience.",
    description:
      "Yorkville is Toronto's premier luxury neighbourhood, bordered by Bloor Street to the south and Davenport Road to the north. World-class boutiques, Michelin-quality dining, major art galleries, and the Royal Ontario Museum sit within walking distance. It is consistently among the most competitive real estate markets in Canada.",
    highlights: [
      { label: "Avg. condo price", value: "$1.1M–$2.5M+" },
      { label: "Avg. house price", value: "$4M+" },
      { label: "Transit", value: "Bay & Bloor–Yonge stations" },
      { label: "Walk score", value: "Walker's Paradise (97)" },
      { label: "Market pace", value: "Fast — low DOM" },
      { label: "Best for", value: "Luxury buyers & investors" },
    ],
    aboutParagraphs: [
      "Yorkville has long been Toronto's address of choice for luxury buyers — a compact, walkable neighbourhood packed with designer boutiques, acclaimed restaurants, and cultural institutions. The ROM, Four Seasons Hotel, and Hazelton Lanes anchor a neighbourhood that feels distinctly cosmopolitan without sacrificing residential character.",
      "The condo market here skews toward larger, high-finish units in boutique buildings. Freehold properties are rare and command significant premiums. Buyers in Yorkville are typically drawn by walkability, prestige, and the neighbourhood's strong long-term value retention.",
      "Competition is intense and well-priced properties move quickly. Having an agent who understands building-level details — maintenance fees, rental restrictions, resale history — is essential in a market this specific.",
    ],
    buyingPoints: [
      "One of Canada's highest Walk Scores — virtually every errand walkable",
      "Steps from Bay and Bloor–Yonge subway stations",
      "Premium boutique condo buildings with concierge, amenities, and security",
      "Consistent rental demand from executives and corporate tenants",
      "Strong long-term price appreciation vs. broader Toronto market",
      "Access to Toronto's best dining, shopping, and cultural institutions",
    ],
    streets: [
      "Bloor Street West",
      "Cumberland Street",
      "Yorkville Avenue",
      "Hazelton Avenue",
      "Scollard Street",
      "Bay Street",
    ],
    lat: 43.6723,
    lng: -79.3935,
  },
  {
    slug: "midtown-toronto",
    name: "Midtown Toronto",
    region: "Toronto",
    cityMatches: ["Toronto"],
    tagline: "The balance point — established neighbourhoods, top schools, and easy access to everything.",
    description:
      "Midtown Toronto covers the belt between Bloor Street and Eglinton Avenue, encompassing Rosedale, Moore Park, Davisville Village, and Deer Park. It offers the rare combination of walkable urban amenities, deep residential character, and direct subway access — making it consistently one of the most competitive markets in the city.",
    highlights: [
      { label: "Avg. detached price", value: "$2.5M–$4M" },
      { label: "Avg. condo price", value: "$750K–$1.3M" },
      { label: "Transit", value: "Line 1 Yonge & Eglinton Crosstown" },
      { label: "School rating", value: "Top-tier TDSB catchments" },
      { label: "Walk score", value: "Walker's Paradise (90+)" },
      { label: "Best for", value: "Families & upsizers" },
    ],
    aboutParagraphs: [
      "Midtown Toronto is where established residential living meets genuine urban walkability. The area includes Rosedale's grand Victorian and Edwardian homes, Moore Park's deep ravine lots, and the more approachable semis and condos of Davisville Village. Each pocket has its own character, but all share strong transit access and top school catchments.",
      "The arrival of the Eglinton Crosstown LRT has reinforced Midtown's long-term value story. Properties near Eglinton stations have seen consistent appreciation, and demand from families relocating from the suburbs continues to support pricing.",
      "Inventory is chronically tight. Desirable homes in Rosedale and Moore Park often receive multiple offers within days of listing. Buyers who move decisively and are pre-approved consistently outperform those who take a passive approach.",
    ],
    buyingPoints: [
      "Top-ranked TDSB school catchments including North Toronto Collegiate",
      "Direct access to Yonge subway and the Eglinton Crosstown LRT",
      "Ravine lots and large private gardens in Rosedale and Moore Park",
      "Davisville Village offers semi-detached entry points with strong resale",
      "Yonge–Eglinton retail and dining hub within walking distance",
      "Strong rental market for basement suites and coach houses",
    ],
    streets: [
      "Yonge Street",
      "Eglinton Avenue",
      "Mount Pleasant Road",
      "Chaplin Crescent",
      "Davisville Avenue",
      "Heath Street",
    ],
    lat: 43.6977,
    lng: -79.3940,
  },
  {
    slug: "forest-hill",
    name: "Forest Hill",
    region: "Toronto",
    cityMatches: ["Toronto"],
    tagline: "Gracious estates, top private schools, and one of Toronto's most coveted addresses.",
    description:
      "Forest Hill is one of Toronto's most prestigious residential enclaves, known for its grand homes on deep lots, mature tree canopy, and proximity to Upper Canada College and Bishop Strachan School. It attracts buyers who prioritise privacy, prestige, and long-term value.",
    highlights: [
      { label: "Avg. detached price", value: "$3M–$7M+" },
      { label: "Lot sizes", value: "50–100 ft frontage common" },
      { label: "Schools", value: "UCC, BSS, Forest Hill CI" },
      { label: "Market pace", value: "Selective — premium properties move fast" },
      { label: "Character", value: "Edwardian, Tudor, custom builds" },
      { label: "Best for", value: "Luxury & estate buyers" },
    ],
    aboutParagraphs: [
      "Forest Hill sits just north of Eglinton Avenue West and is divided into North and South sections. Forest Hill South, closer to Eglinton, features some of Toronto's most architecturally significant homes — grand Edwardian and Tudor-revival estates on wide lots with mature landscaping. Forest Hill North offers slightly more accessible price points while maintaining the same quiet, residential character.",
      "The neighbourhood's proximity to Upper Canada College and Bishop Strachan School is a primary draw for family buyers. Homes in the UCC and BSS catchment routinely command premiums, and demand consistently outpaces supply.",
      "Transactions in Forest Hill are often discreet. Many properties trade off-market or with limited public exposure. Having an agent with strong relationships in the area opens access that MLS alone cannot provide.",
    ],
    buyingPoints: [
      "Home to Upper Canada College and Bishop Strachan School",
      "Deep lots with mature trees — rare privacy for an in-city location",
      "Strong long-term appreciation driven by constrained supply",
      "Off-market opportunities for buyers with established agent relationships",
      "Walking distance to the shops and restaurants of Eglinton West",
      "Excellent connection to downtown via Allen Road and Eglinton Crosstown",
    ],
    streets: [
      "Forest Hill Road",
      "Dunvegan Road",
      "Balmoral Avenue",
      "Old Forest Hill Road",
      "Lonsdale Road",
      "Eglinton Avenue West",
    ],
    lat: 43.6934,
    lng: -79.4184,
  },
  {
    slug: "etobicoke",
    name: "Etobicoke",
    region: "Toronto",
    cityMatches: ["Etobicoke", "Toronto"],
    tagline: "Waterfront living, spacious lots, and more value per square foot than central Toronto.",
    description:
      "Etobicoke stretches along Toronto's western edge, from Humber Bay Shores on the lakefront to the family neighbourhoods of Rexdale and Humber Valley Village in the north. It offers some of the GTA's best value for buyers seeking more space — larger lots, detached homes, and lakefront condos at prices below comparable central Toronto properties.",
    highlights: [
      { label: "Avg. detached price", value: "$1.2M–$2.2M" },
      { label: "Avg. condo price", value: "$550K–$850K" },
      { label: "Transit", value: "Line 2 Bloor–Danforth + GO" },
      { label: "Waterfront", value: "Humber Bay Park & trails" },
      { label: "Value", value: "More space per dollar than central TO" },
      { label: "Best for", value: "Families & value buyers" },
    ],
    aboutParagraphs: [
      "Etobicoke is often underrated by buyers focused exclusively on central Toronto, but it consistently delivers more home for the money. The Kingsway and Humber Valley Village areas feature spacious detached homes on large lots that would cost significantly more east of the 427. Humber Bay Shores offers waterfront condo living with lake and city skyline views.",
      "Transit connectivity has improved significantly with the Eglinton Crosstown LRT bringing rapid transit further into the west end. Combined with existing subway access on Line 2 and GO stations at Mimico and Long Branch, Etobicoke is well positioned for buyers who commute to downtown.",
      "The buyer pool includes a mix of young families upsizing from condos, established buyers from other parts of Toronto, and investors attracted by the rental demand generated by nearby hospitals, Humber College, and the waterfront employment corridor.",
    ],
    buyingPoints: [
      "Significantly more lot and living space per dollar than comparable central Toronto locations",
      "Humber Bay Shores waterfront — condos with lake and skyline views",
      "Strong school options including Richview Collegiate and Bishop Allen Academy",
      "Easy highway access via 427, Gardiner, and QEW",
      "Growing restaurant and café scene in Mimico and The Kingsway",
      "Consistent rental demand from Humber College students and hospital workers",
    ],
    streets: [
      "The Kingsway",
      "Bloor Street West",
      "Lake Shore Boulevard",
      "Royal York Road",
      "Islington Avenue",
      "Evans Avenue",
    ],
    lat: 43.6435,
    lng: -79.5209,
  },
];

export function getNeighbourhood(slug: string): Neighbourhood | undefined {
  return neighbourhoods.find((n) => n.slug === slug);
}

export function getNeighbourhoodSlugs(): string[] {
  return neighbourhoods.map((n) => n.slug);
}

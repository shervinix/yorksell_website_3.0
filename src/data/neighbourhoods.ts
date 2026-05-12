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
  {
    slug: "oakville",
    name: "Oakville",
    region: "Halton Region",
    cityMatches: ["Oakville"],
    tagline: "Lakeside living, top-ranked schools, and some of the GTA's most desirable family estates.",
    description:
      "Oakville sits on the north shore of Lake Ontario, 30 kilometres southwest of Toronto. Known for its tree-lined streets, exceptional school rankings, and thriving waterfront, it consistently attracts families and executives relocating from Toronto in search of more space without sacrificing quality of life. Old Oakville's heritage core and the newer communities of Joshua Creek and Glen Abbey offer a wide range of housing at various price points.",
    highlights: [
      { label: "Avg. detached price", value: "$1.7M–$3.5M" },
      { label: "Avg. condo price", value: "$600K–$950K" },
      { label: "Transit", value: "GO Lakeshore West line" },
      { label: "School ranking", value: "Top-ranked in Ontario" },
      { label: "Waterfront", value: "Lake Ontario & Sixteen Mile Creek" },
      { label: "Best for", value: "Families & executives" },
    ],
    aboutParagraphs: [
      "Oakville is one of the most sought-after communities in the GTA, consistently ranking among Ontario's top municipalities for quality of life, school performance, and safety. The town stretches from the lakefront in the south to major highway corridors in the north, with distinct communities including Old Oakville, Bronte, Clearview, Joshua Creek, and Glen Abbey.",
      "Old Oakville's heritage streetscapes and proximity to the harbour draw buyers who want character homes and walkable access to restaurants and boutiques. Further north, newer subdivisions offer larger lots and more recently built homes at comparatively accessible prices. The town's strong employment base — anchored by major corporate headquarters along the QEW corridor — drives consistent demand from professional families.",
      "GO Transit's Lakeshore West line provides frequent service to Union Station, making Oakville a genuine alternative for Toronto commuters who want significantly more space for their dollar. Buyers consistently find that their budget stretches further here than in comparable central Toronto neighbourhoods.",
    ],
    buyingPoints: [
      "Consistently top-ranked schools including Oakville Trafalgar High School and St. Ignatius of Loyola",
      "GO Train to Union Station in under 40 minutes via Lakeshore West line",
      "Waterfront trail system along Lake Ontario and Sixteen Mile Creek",
      "Strong corporate employment base attracting high-income professional households",
      "Old Oakville heritage district with walkable boutique retail and dining",
      "Significantly more lot size and living space per dollar than comparable Toronto addresses",
    ],
    streets: [
      "Lakeshore Road East",
      "Trafalgar Road",
      "Bronte Road",
      "Rebecca Street",
      "Allan Street",
      "Navy Street",
    ],
    lat: 43.4675,
    lng: -79.6877,
  },
  {
    slug: "bridle-path",
    name: "Bridle Path",
    region: "Toronto",
    cityMatches: ["Toronto"],
    tagline: "Canada's most prestigious address — private estates on ravine lots in the heart of North Toronto.",
    description:
      "The Bridle Path is Toronto's most exclusive neighbourhood and consistently ranks among the most expensive postal codes in Canada. Bordered by Lawrence Avenue to the south and the East Don Parkland ravine system, it is defined by sprawling estate homes on large private lots, strict zoning that has preserved its low-density character, and a resident roster that reads like a who's who of Canadian business and entertainment.",
    highlights: [
      { label: "Avg. estate price", value: "$5M–$25M+" },
      { label: "Lot sizes", value: "1+ acre common" },
      { label: "Character", value: "Private estates, gated drives" },
      { label: "Market pace", value: "Selective — very low inventory" },
      { label: "Nearby amenities", value: "Granite Club, Rosedale Golf Club" },
      { label: "Best for", value: "Ultra-luxury & estate buyers" },
    ],
    aboutParagraphs: [
      "The Bridle Path occupies a unique position in the Canadian real estate landscape — a neighbourhood of genuine estates within city limits. The area is bounded roughly by Lawrence Avenue East, Bayview Avenue, Post Road, and the ravine, forming an enclave of winding private lanes and mature tree canopies that feel removed from the urban grid surrounding it.",
      "Properties here are rarely described in square footage alone — they are assessed by lot dimensions (often exceeding one acre), the quality of construction and landscaping, pool and tennis court infrastructure, and the degree of privacy the site affords. Many homes have been substantially rebuilt or fully custom-constructed in recent decades, combining modern finishes with the scale the neighbourhood demands.",
      "Transactions in the Bridle Path are conducted with discretion. Many properties trade off-market entirely, and those that do list publicly often carry price tags that reflect years of ownership and reinvestment. Access to this market requires established agent relationships and the patience to act decisively when the right property becomes available.",
    ],
    buyingPoints: [
      "The most prestigious residential address in Canada by most measures",
      "Estate-sized lots of one acre or more within Toronto city limits",
      "Immediate access to the East Don ravine trail system",
      "Proximity to the Granite Club, Rosedale Golf Club, and North York's top private schools",
      "Extremely low inventory — constrained supply supports long-term value",
      "Strong international buyer interest from executives, entertainers, and UHNW individuals",
    ],
    streets: [
      "The Bridle Path",
      "Post Road",
      "Fifeshire Road",
      "Bayview Avenue",
      "Lawrence Avenue East",
      "Park Lane Circle",
    ],
    lat: 43.7354,
    lng: -79.3729,
  },
  {
    slug: "mississauga",
    name: "Mississauga",
    region: "Peel Region",
    cityMatches: ["Mississauga"],
    tagline: "A self-contained city with waterfront living, a booming condo market, and strong family communities.",
    description:
      "Mississauga is the GTA's second-largest city, home to nearly 800,000 residents and a diverse real estate market that spans lakefront condos in Port Credit, executive estates in Lorne Park and Clarkson, and high-rise towers in the City Centre around Square One. It offers genuine urban amenities, a growing transit network, and prices that remain more accessible than Toronto proper.",
    highlights: [
      { label: "Avg. detached price", value: "$1.3M–$2.5M" },
      { label: "Avg. condo price", value: "$550K–$850K" },
      { label: "Transit", value: "GO Lakeshore West + MiWay" },
      { label: "Waterfront", value: "Port Credit & Lakeview" },
      { label: "Employment", value: "Major corporate hub (Mississauga Rd corridor)" },
      { label: "Best for", value: "Families, investors & first-time buyers" },
    ],
    aboutParagraphs: [
      "Mississauga's real estate market is more nuanced than its reputation as a suburban alternative might suggest. Port Credit's lakefront village is one of the GTA's most desirable small-scale communities, with heritage cottages, waterfront condos, and a walkable main street. Lorne Park and Clarkson offer large-lot estate properties that rival Oakville in quality. City Centre is a high-density urban core with dozens of condominium towers and direct access to Square One Shopping Centre.",
      "The city's employment base is one of the strongest in Ontario outside Toronto — major pharmaceutical, technology, and financial services companies operate from Mississauga's corporate campuses, generating consistent demand from high-income professional households. This employer concentration also supports a healthy rental market for investors.",
      "Transit access is improving significantly with the Hurontario LRT currently under construction, which will link Port Credit GO station to the Brampton Gateway Terminal. Combined with existing GO Train service and proximity to Pearson Airport, Mississauga is increasingly attractive to buyers who travel frequently for work.",
    ],
    buyingPoints: [
      "Port Credit waterfront village with lakefront condos and heritage homes",
      "Lorne Park and Clarkson offer estate properties at prices below comparable Toronto addresses",
      "Major employment hub reducing commute times for many professional households",
      "Hurontario LRT under construction improving north-south transit connectivity",
      "Pearson Airport proximity — 15 minutes for frequent travellers",
      "More affordable entry points than Toronto with similar urban amenities",
    ],
    streets: [
      "Lakeshore Road East",
      "Port Credit Avenue",
      "Mississauga Road",
      "Hurontario Street",
      "Lorne Park Road",
      "Clarkson Road North",
    ],
    lat: 43.5890,
    lng: -79.6441,
  },
  {
    slug: "richmond-hill",
    name: "Richmond Hill",
    region: "York Region",
    cityMatches: ["Richmond Hill"],
    tagline: "Top-ranked schools, established family communities, and excellent highway access north of Toronto.",
    description:
      "Richmond Hill sits in York Region between Markham and Vaughan, roughly 25 kilometres north of downtown Toronto. It draws families seeking access to some of Ontario's highest-ranked schools, spacious detached homes at prices below central Toronto, and convenient access to Highway 404 and the 407 ETR. The town has a significant and well-established Chinese Canadian community that has shaped its retail, dining, and community character.",
    highlights: [
      { label: "Avg. detached price", value: "$1.6M–$2.8M" },
      { label: "Avg. condo price", value: "$600K–$850K" },
      { label: "Transit", value: "Viva BRT + GO Bus + Hwy 404/407" },
      { label: "School ranking", value: "Top York Region EQAO scores" },
      { label: "Community", value: "Diverse, established Chinese Canadian community" },
      { label: "Best for", value: "Families & school-focused buyers" },
    ],
    aboutParagraphs: [
      "Richmond Hill's appeal is anchored by its school performance — the town consistently produces some of York Region's highest EQAO results, and its proximity to several well-regarded private schools makes it a destination for families who prioritise education. Neighbourhoods like Oak Ridges, Jefferson, and Bayview Hill offer newer subdivisions with larger homes, while Crosby and Mill Pond provide older, more established streetscapes closer to Yonge Street.",
      "The town's Chinese Canadian community, particularly concentrated along Highway 7 and Leslie Street, has transformed Richmond Hill's retail and dining landscape over the past three decades. A wide range of authentic restaurants, supermarkets, and professional services reflect a community that is deeply embedded in the town's identity.",
      "Highway access is a practical draw for buyers who work across the region. The 404 provides a direct route to downtown Toronto, while the 407 ETR connects east to Markham and west to Vaughan and the 400 corridor. Viva rapid transit along Yonge Street and Highway 7 supplements highway commuting for those who prefer transit.",
    ],
    buyingPoints: [
      "Consistently top-ranked York Region schools with above-average EQAO results",
      "Larger detached homes on good-sized lots at prices below comparable Toronto addresses",
      "Strong Chinese Canadian community with excellent dining and retail infrastructure",
      "Highway 404 and 407 ETR access for region-wide commuters",
      "Proximity to Mackenzie Health hospital — strong healthcare infrastructure",
      "Active investor market driven by rental demand from families seeking school catchments",
    ],
    streets: [
      "Yonge Street",
      "Bayview Avenue",
      "Leslie Street",
      "Highway 7",
      "Major Mackenzie Drive",
      "Elgin Mills Road",
    ],
    lat: 43.8828,
    lng: -79.4403,
  },
];

export function getNeighbourhood(slug: string): Neighbourhood | undefined {
  return neighbourhoods.find((n) => n.slug === slug);
}

export function getNeighbourhoodSlugs(): string[] {
  return neighbourhoods.map((n) => n.slug);
}

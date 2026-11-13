// Every guide, grouped as on /guides/. Used by the guides index and by each guide's "More guides" links.
// Icons are 24x24 stroke paths drawn in the same style as the home page tool icons.
export const ICONS = {
  bolt: 'M13 2L5 14h6l-1 8 8-12h-6l1-8z',
  chart: 'M4 18h16M7 14l3-3 3 3 5-6',
  money: 'M12 4v16M8 8h6a3 3 0 0 1 0 6H9',
  search: 'M10 17a7 7 0 1 1 5-2l4 4',
  bars: 'M4 17V9m5 8V5m5 12v-6m5 6V8',
  depot: 'M3 11l9-7 9 7v9H3v-9z',
  road: 'M4 18h16M6 18l3-12h6l3 12M12 6v3m0 3v2',
  list: 'M5 7h14M5 12h14M5 17h9',
  twins: 'M3 12h18M6 9l-3 3 3 3M18 9l3 3-3 3',
  box: 'M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z',
  tick: 'M5 12l4 4 10-10',
  shield: 'M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z',
};

export const GUIDE_SECTIONS = [
  {
    id: 'going-electric',
    title: 'Going electric',
    eyebrow: 'For vans',
    guides: [
      { href: '/guides/should-i-go-electric/', title: 'Should I go electric?', blurb: 'Who it suits, who it doesn’t, and the numbers that decide it.', icon: 'chart' },
      { href: '/guides/charging-an-electric-van/', title: 'Charging an electric van', blurb: 'Home, depot and public charging, and what affects range.', icon: 'bolt' },
      { href: '/guides/grants-and-tax/', title: 'Grants and tax', blurb: 'Van and truck grants, VAT, van benefit tax and London charges.', icon: 'money' },
      { href: '/guides/used-electric-van-buying-guide/', title: 'Buying a used electric van', blurb: 'Battery health, range, charging and warranty checks.', icon: 'search' },
    ],
  },
  {
    id: 'fleets-and-trucks',
    title: 'Fleets and trucks',
    eyebrow: 'For fleets',
    guides: [
      { href: '/guides/fleet-electrification-plan/', title: 'Electrifying a fleet', blurb: 'A step-by-step plan from data to rollout.', icon: 'bars' },
      { href: '/guides/depot-charging/', title: 'Depot charging', blurb: 'Power, grid connections, chargers and smart charging.', icon: 'depot' },
      { href: '/guides/are-electric-trucks-ready/', title: 'Are electric trucks ready?', blurb: 'Where they work today and where they don’t yet.', icon: 'road' },
    ],
  },
  {
    id: 'buying-any-van',
    title: 'Buying any van',
    eyebrow: 'Before you buy',
    guides: [
      { href: '/guides/lease-vs-buy/', title: 'Lease, finance or buy?', blurb: 'The four ways to get a van and who each suits.', icon: 'list' },
      { href: '/guides/rebadged-vans/', title: 'Same van, different badge', blurb: 'Which vans are twins, and how to use that to pay less.', icon: 'twins' },
      { href: '/guides/van-sizes-explained/', title: 'Van sizes and licences', blurb: 'L1H1, payload, gross weight and your licence.', icon: 'box' },
    ],
  },
];

export const ALL_GUIDES = GUIDE_SECTIONS.flatMap((s) => s.guides.map((g) => ({ ...g, section: s.title })));

// Credit line for a photo from images.json or photos.json, written the same way as on the home page.
export const credit = (img) => (img.source ? `Photo: ${img.author} press image` : `Photo: ${img.author}, Wikimedia Commons, ${img.licence}`);

// The Loadspace data score: worked out only from a van's published specs.
// Kept separate from reviews.js so the review layout can use it without a circular import.

// Pull the first number out of a display string like "£38,630" or "1,088 kg".
const WORDS = { three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, twelve: 12 };
const num = (s) => {
  const text = String(s ?? '').replace(/,/g, '').replace(/\b(three|four|five|six|seven|eight|nine|ten|twelve)\b/gi, (w) => WORDS[w.toLowerCase()]);
  const m = text.match(/\d+(?:\.\d+)?/);
  return m ? Number(m[0]) : null;
};
const band = (value, steps) => {
  if (value == null) return null;
  for (const [min, score] of steps) if (value >= min) return score;
  return 1;
};

// The score bands. Change them here and the method page updates too.
// Price isn't scored: prices change often and we can't confirm them for every van,
// so scoring them made vans with a confirmed price look worse. It's shown separately.
export const CRITERIA = [
  {
    key: 'range', label: 'Range', what: 'Official (WLTP) combined range of the longest-range version',
    bands: [['250 miles or more', 5], ['200 to 249 miles', 4], ['160 to 199 miles', 3], ['120 to 159 miles', 2], ['under 120 miles', 1]],
    score: (s) => band(num(s), [[250, 5], [200, 4], [160, 3], [120, 2]]),
  },
  {
    key: 'charging', label: 'Rapid charging', what: 'Fastest DC charging rate offered',
    bands: [['150kW or more', 5], ['100kW to 149kW', 4], ['80kW to 99kW', 3], ['50kW to 79kW', 2], ['under 50kW', 1]],
    score: (s) => band(num(s), [[150, 5], [100, 4], [80, 3], [50, 2]]),
  },
  {
    key: 'payload', label: 'Payload', what: 'Highest payload of any UK panel van version (any version for pickups)',
    bands: [['1,200kg or more', 5], ['1,000kg to 1,199kg', 4], ['800kg to 999kg', 3], ['600kg to 799kg', 2], ['under 600kg', 1]],
    score: (s) => band(num(s), [[1200, 5], [1000, 4], [800, 3], [600, 2]]),
  },
  {
    key: 'batteryWarranty', label: 'Battery warranty', what: 'Length of the battery warranty in years',
    bands: [['10 years or more', 5], ['8 or 9 years', 4], ['7 years', 3], ['5 or 6 years', 2], ['under 5 years', 1]],
    score: (s) => band(num(s), [[10, 5], [8, 4], [7, 3], [5, 2]]),
  },
];

// A figure we couldn't confirm from a current source starts "Not confirmed" and isn't scored.
const unconfirmed = (v) => v == null || /^not confirmed/i.test(String(v));

export const MIN_SCORED = 3;

// The price shown beside the score: confirmed list price, or why we don't have one.
export function priceOf(specs = {}) {
  const v = specs.price;
  if (unconfirmed(v)) return { confirmed: false, value: null, note: v ? String(v).replace(/^not confirmed\s*/i, '').replace(/^\((.*)\)$/, '$1') : '' };
  return { confirmed: true, value: String(v), note: '' };
}

export function scoreSpecs(specs = {}) {
  const rows = CRITERIA.map((c) => ({ ...c, value: specs[c.key], points: unconfirmed(specs[c.key]) ? null : c.score(specs[c.key]) }));
  const scored = rows.filter((r) => r.points != null);
// A score needs at least this many confirmed figures, so it isn't based on too little.
  const overall = scored.length >= MIN_SCORED ? Math.round((scored.reduce((a, r) => a + r.points, 0) / scored.length) * 10) / 10 : null;
  return { rows, overall, scoredCount: scored.length };
}


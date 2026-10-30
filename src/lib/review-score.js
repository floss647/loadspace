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
export const CRITERIA = [
  {
    key: 'price', label: 'Price', what: 'Cheapest version, list price before the van grant, excluding VAT',
    bands: [['under £30,000', 5], ['£30,000 to £34,999', 4], ['£35,000 to £39,999', 3], ['£40,000 to £44,999', 2], ['£45,000 or more', 1]],
    score: (s) => { const p = num(s); return p == null ? null : p < 30000 ? 5 : p < 35000 ? 4 : p < 40000 ? 3 : p < 45000 ? 2 : 1; },
  },
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

export function scoreSpecs(specs = {}) {
  const rows = CRITERIA.map((c) => ({ ...c, value: specs[c.key], points: unconfirmed(specs[c.key]) ? null : c.score(specs[c.key]) }));
  const scored = rows.filter((r) => r.points != null);
  const overall = scored.length ? Math.round((scored.reduce((a, r) => a + r.points, 0) / scored.length) * 10) / 10 : null;
  return { rows, overall, scoredCount: scored.length };
}


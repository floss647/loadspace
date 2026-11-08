// Builds the head-to-head comparison pages from src/data/comparisons.js. Every value shown is
// copied exactly from a signed-off spec file (src/data/specs/<slug>.md): nothing is parsed,
// computed or ranked, and missing figures show as "Not published".
import { COMPARISONS } from '../data/comparisons.js';
import { EV_VANS } from '../data/vans.js';
import { specsFor } from './specs.js';
import { reviewFor } from './reviews.js';

const vanBySlug = (slug) => EV_VANS.find((v) => v.slug === slug);

// Pairs where both vans exist and both have signed-off specs.
export const PAIRS = COMPARISONS
  .filter((c) => vanBySlug(c.a) && vanBySlug(c.b) && specsFor(c.a) && specsFor(c.b))
  .map((c) => {
    const a = vanBySlug(c.a);
    const b = vanBySlug(c.b);
    return { ...c, slug: `${c.a}-vs-${c.b}`, url: `/compare/${c.a}-vs-${c.b}/`, vanA: a, vanB: b, size: a.size };
  });

export const pairsFor = (vanSlug) => PAIRS.filter((p) => p.a === vanSlug || p.b === vanSlug);

// Headline rows of the comparison table, in order. Keys match the spec files' figures and shared blocks.
export const ROWS = [
  ['range', 'Official range'],
  ['battery', 'Battery'],
  ['payload', 'Payload'],
  ['volume', 'Load volume'],
  ['loadLength', 'Load length'],
  ['rapid', 'Rapid charging'],
  ['rapidTime', 'Rapid charge time'],
  ['ac', 'Home and depot (AC) charging'],
  ['warranty', 'Battery warranty'],
  ['gross', 'Gross weight'],
  ['towing', 'Towing (braked)'],
];

// One cell: the figure for every version, grouped where versions share the same value.
// Returns [] when the spec file doesn't publish it.
export function figure(specs, key) {
  const versions = specs.versions || [];
  const groups = [];
  for (const v of versions) {
    const val = v.figures?.[key];
    if (val == null || val === '') continue;
    const g = groups.find((x) => x.value === String(val));
    if (g) g.versions.push(v.name);
    else groups.push({ value: String(val), versions: [v.name] });
  }
  if (groups.length) {
    // One value for every version: no need to name them.
    const covered = groups.reduce((n, g) => n + g.versions.length, 0);
    if (groups.length === 1 && covered === versions.length) return [{ value: groups[0].value, versions: [] }];
    return groups;
  }
  const shared = specs.shared?.[key];
  if (shared != null && shared !== '') return [{ value: String(shared), versions: [] }];
  return [];
}

// Notes that warn the figures are partial or provisional are shown up front, not just in the caveats.
const WARNING = /press kit|provisional|expected targets|not (its|the maker's) current/i;
export function caveats(specs) {
  const notes = (specs.notes || []).map(String);
  return { warnings: notes.filter((n) => WARNING.test(n)), notes: notes.filter((n) => !WARNING.test(n)) };
}

export function sideFor(van) {
  const specs = specsFor(van.slug);
  return { van, specs, review: reviewFor(van.slug), ...caveats(specs) };
}

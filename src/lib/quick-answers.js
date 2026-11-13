// "Quick answers" for each van page: a few common questions, answered only from figures the
// page already shows. Sources, in order: the van's checked spec file (src/data/specs/<van>.md),
// then our fact-checked review's headline figures (src/pages/reviews/<van>.md), then the twins
// list in src/data/vans.js. Figures are copied exactly as written there; nothing is estimated.
// Caveats are sentences copied from the spec file's own notes (picked in CAVEATS below), so the
// answers carry the same warnings as the spec panel. The same text feeds the FAQPage JSON-LD.
import { TWINS, twinsOf } from '../data/vans.js';

const unconfirmed = (v) => v == null || v === '' || /^not confirmed/i.test(String(v));
const reasonOf = (v) => String(v).replace(/^not confirmed\s*/i, '').replace(/^\((.*)\)$/, '$1').trim();
const sentence = (s) => (/[.!?]$/.test(s) ? s : `${s}.`);
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const list = (items) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`);

// Caveats for each van, by question. Each entry is a phrase (or a list of phrases) copied from
// the spec file's notes: the answer adds the whole note sentence containing each phrase. The build
// stops if a phrase is no longer in the notes, so a changed spec file can't leave a stale caveat.
// A { text } entry is a shorter restatement of a note, used where the note's own sentence only
// makes sense next to the sentence before it.
export const CAVEATS = {
  'citroen-berlingo': { payload: ["Payloads are Citroën's maximum indicative figures", "The driver's weight counts towards them"] },
  'citroen-dispatch': { payload: "so the driver's weight comes out of the payload" },
  'citroen-relay': { range: 'so it calculates these ranges using the WLTP method instead', payload: 'so the driver counts against these figures' },
  'farizon-sv': { payload: 'so the payloads appear to already allow for two people in the cab', charging: { text: 'Our review says the 83kWh battery charges at up to 140kW and the other two at up to 120kW.' } },
  'farizon-v7e': { payload: 'The payload of up to 1,338kg is the best case', charging: "The 18-minute rapid charge is Farizon's best case" },
  'fiat-doblo': { payload: ["Payloads are the maximum figures from Fiat's weights table", "so the driver's weight counts against them"] },
  'ford-transit-city': { range: 'The ranges are official WLTP figures', payload: "so allow for the driver's weight on top" },
  'ford-transit-courier': { range: 'The range is the official WLTP figure', payload: "so allow for the driver's weight on top" },
  'ford-transit-custom': { range: 'the city figures are higher and the motorway figures lower', payload: "don't include the driver, so allow for the driver's weight" },
  'isuzu-d-max': { range: "We've converted it to miles and rounded it", payload: 'Isuzu gives the payload only as over 1,000kg' },
  'iveco-daily': {
    range: { text: "These are IVECO's own WLTP-cycle figures from its EU brochure, not yet officially homologated, for vans with a new, fully charged battery driven in Eco mode with no driver assistance systems, air conditioning or heating, and UK figures may differ." },
    charging: 'Rapid (DC) charging is an option',
  },
  'kgm-musso': { range: 'but its range figures differ', payload: 'KGM says the load bed can carry up to 500kg' },
  'kia-pv5-cargo': {
    range: 'expected targets, pending further development',
    payload: { text: "Kia says all its technical figures are targets until the van is homologated, and it doesn't say whether its payloads allow for a driver." },
    charging: { text: 'Kia says all its technical figures are targets until the van is homologated.' },
  },
  'maxus-edeliver-7': { payload: 'or say whether the payload allows for a driver', charging: "Maxus doesn't give a peak charging power" },
  'maxus-eterron-9': { range: ['as WLTC combined figures', 'The miles figure is our conversion, rounded'], payload: { text: "Maxus UK's guide doesn't say whether the kerb weight includes a driver, so ask the dealer what you can carry with people on board." } },
  'mercedes-benz-citan': { range: 'preliminary values', payload: ['Payload depends on the options fitted', { text: "Our review's figure, 616kg for the L2 BASE van, includes the driver." }] },
  'mercedes-benz-sprinter': { range: 'preliminary values', payload: ['Payload depends on the options fitted', { text: "Our review's figure, 1,278kg for the 81kWh 414 L2 van, includes the driver." }] },
  'nissan-interstar': { range: ["Ranges are from Nissan's July 2026 price list", 'pending UK homologation'], payload: "Nissan's payload figures include the driver's weight" },
  'nissan-townstar': { range: ['for the Van L1 Acenta only', 'as still to be confirmed'], payload: 'so the load you can carry is a little less' },
  'peugeot-boxer': { range: 'so it calculates these ranges using the WLTP method instead', payload: 'so the driver counts against these figures' },
  'peugeot-expert': { payload: "so the driver's weight comes out of the payload" },
  'peugeot-partner': { payload: ["Payloads are Peugeot's maximum indicative figures", "The driver's weight counts towards them"] },
  'renault-kangoo': { range: 'without splitting it by version', payload: 'Rough Terrain Pack' },
  'renault-master': { range: 'without saying which versions fall into each class', payload: 'without saying which gross weight it applies to' },
  'toyota-proace-city': { range: 'so check them with a dealer', payload: 'so check them with a dealer' },
  'toyota-proace-max': { range: 'so check them with a dealer', payload: "so we've left payload out" },
  'toyota-proace': { range: 'so check them with a dealer', payload: 'so check them with a dealer' },
  'vauxhall-combo': { payload: ['so check them with the dealer before you order', "Payloads are Vauxhall's maximum indicative figures"], charging: 'so check them with the dealer before you order' },
  'vauxhall-movano': { range: 'so it calculates these ranges using the WLTP method instead', payload: { text: "Vauxhall says the driver's weight is included within the payload, so the driver's weight counts against it." } },
  'vauxhall-vivaro': { charging: 'so check them with the dealer before you order' },
  'volkswagen-id-buzz-cargo': { payload: 'so the payloads already allow for the driver', charging: { text: 'VW says the battery can charge to 80% in around 30 minutes at a fast DC charger, from about 5% at about 23°C, but gives two different charger powers (185kW and 170kW), so treat it as a best case.' } },
  'volkswagen-transporter': { payload: "so the driver's weight comes out of the payload" },
};
// Where the spec panel shows a figure that our review couldn't confirm, the answer says so,
// quoting the review. A van listed here would skip that line (none do at the moment).
const SKIP_REVIEW_NOTE = {};

// Split a note into sentences at a full stop followed by a capital, so "4.0-tonne" stays whole.
const sentencesOf = (text) => String(text).split(/(?<=[.!?])\s+(?=[A-Z])/).map((s) => s.trim()).filter(Boolean);

function caveatFor(slug, topic, specs) {
  const entry = CAVEATS[slug]?.[topic];
  if (!entry) return '';
  return [].concat(entry).map((phrase) => {
    if (phrase.text) return phrase.text;
    const hits = (specs?.notes || []).flatMap(sentencesOf).filter((s) => s.includes(phrase));
    if (hits.length !== 1) throw new Error(`quick-answers: caveat "${phrase}" for ${slug} (${topic}) matches ${hits.length} note sentences, expected 1`);
    return hits[0];
  }).join(' ');
}

const reviewNote = (slug, topic, what, value) =>
  value != null && unconfirmed(value) && !SKIP_REVIEW_NOTE[slug]?.includes(topic)
    ? `Our review lists the ${what} as not confirmed${reasonOf(value) ? ` (${reasonOf(value)})` : ''}.`
    : '';


// Every version's value for one figure, with the version name. Unconfirmed values are kept apart.
function byVersion(specs, key) {
  const versions = specs?.versions || [];
  const rows = versions.map((v) => ({ version: v.name, value: v.figures?.[key] })).filter((r) => r.value != null && r.value !== '');
  const blank = versions.filter((v) => v.figures?.[key] == null || v.figures?.[key] === '').map((v) => ({ version: v.name, value: null }));
  const confirmed = rows.filter((r) => !unconfirmed(r.value));
  return { all: versions.length, confirmed, unconfirmed: [...rows.filter((r) => unconfirmed(r.value)), ...(confirmed.length ? blank : [])] };
}

// Numbers as written in a figure, e.g. "1,052 to 1,126kg" gives ["1,052", "1,126"].
const numbersIn = (s) => String(s).match(/\d[\d,]*(?:\.\d+)?/g) || [];
const toNum = (s) => Number(String(s).replace(/,/g, ''));
const unitOf = (s) => (String(s).match(/\d\s*(miles|km|kg)\b/) || [])[1];
const withUnit = (n, u) => (u === 'miles' ? `${n} miles` : `${n}${u}`);
const lower = (s) => s.replace(/^(Up to|Over|Under|About)\b/, (w) => w.toLowerCase());
// "Panel van" reads as "the panel van" mid-sentence; codes like "L1 H1" keep their capitals.
const versionName = (s) => (/^[A-Z][a-z]/.test(s) ? s.charAt(0).toLowerCase() + s.slice(1) : s);

// One phrase covering every version: the shared value, each of two values, or lowest to highest.
function spread(specs, key) {
  const { all, confirmed, unconfirmed: missing } = byVersion(specs, key);
  if (!confirmed.length) return null;
  const values = [...new Set(confirmed.map((r) => r.value))];
  const units = new Set(confirmed.map((r) => unitOf(r.value)));
  const u = units.size === 1 ? [...units][0] : null;
  let text;
  if (values.length === 1) {
    text = all === 1 ? values[0] : confirmed.length === all ? `${values[0]} for every version` : `${values[0]} (${list(confirmed.map((r) => r.version))})`;
  } else if (confirmed.length === 2) {
    text = confirmed.map((r) => `${lower(r.value)} for the ${versionName(r.version)}`).join(' or ');
  } else if (!u) {
    return null; // mixed or missing units: don't merge
  } else if (values.some((v) => /^(up to|over)\b/i.test(v))) {
    // "Up to" figures are maximums, so only the highest one can be given, as a limit.
    const top = confirmed.flatMap((r) => numbersIn(r.value)).sort((a, b) => toNum(b) - toNum(a))[0];
    text = `up to ${withUnit(top, u)}, depending on version`;
  } else {
    const nums = confirmed.flatMap((r) => numbersIn(r.value)).sort((a, b) => toNum(a) - toNum(b));
    text = `from ${nums[0]} to ${withUnit(nums[nums.length - 1], u)}, depending on version`;
  }
  if (missing.length) text += `, and not confirmed for the ${list(missing.map((r) => r.version))}`;
  return text;
}

// The label a spec table gives a column, e.g. "Range (Kia target)" or "Payload (incl. driver)".
function columnLabel(specs, re, fallback) {
  for (const t of specs?.tables || []) {
    const h = (t.head || []).find((x) => re.test(x || '') && !/city|motorway|urban/i.test(x));
    if (h) return h;
  }
  return fallback;
}

// One answer from a spec figure, falling back to the review's headline figure. The review's
// figures are its scoring inputs, so they're labelled as the review's method page defines them.
function figureAnswer({ slug, specs, review, topic, what, re, specLabel, reviewLabel }) {
  const fromSpec = specs ? spread(specs, topic) : null;
  const reviewValue = review?.specs?.[topic];
  const caveat = caveatFor(slug, topic, specs);
  let main;
  const NOT_OFFICIAL = /preliminary|target|pending|not subject to WLTP|WLTC|not yet officially/i;
  let label = fromSpec ? columnLabel(specs, re, specLabel) : null;
  if (label && NOT_OFFICIAL.test(caveat)) label = cap(label.replace(/^Official\s+/i, ''));
  if (fromSpec) main = `${label}: ${lower(fromSpec)}`;
  else if (reviewValue != null && !unconfirmed(reviewValue)) main = `${reviewLabel}: ${lower(String(reviewValue))}`;
  else if (reviewValue != null) main = `Not confirmed yet${reasonOf(reviewValue) ? ` (${reasonOf(reviewValue)})` : ''}`;
  else if (caveat) return { text: caveat, figure: null }; // the spec notes explain the missing figure
  else return null;
  const extra = fromSpec ? reviewNote(slug, topic, what, reviewValue) : '';
  return { text: [sentence(cap(main)), caveat, extra].filter(Boolean).join(' '), figure: fromSpec ? { name: label, value: fromSpec, note: caveat || undefined } : null };
}

export function quickAnswers(van, specs, review) {
  const slug = van.slug;
  const kind = van.size === 'pickup' ? 'pickup' : 'van';
  const qa = [];

  const range = figureAnswer({ slug, specs, review, topic: 'range', what: 'range', re: /range/i, specLabel: 'Range', reviewLabel: 'Longest official range' });
  if (range) qa.push({ key: 'range', q: `What is the ${van.name}'s range?`, a: range.text, figure: range.figure });

  const payload = figureAnswer({ slug, specs, review, topic: 'payload', what: 'payload', re: /payload/i, specLabel: 'Payload', reviewLabel: 'Max payload' });
  if (payload) qa.push({ key: 'payload', q: `How much can the ${van.name} carry?`, a: payload.text, figure: payload.figure });

  // Charging: the spec panel's rapid charging figures, else the review's fastest rapid charging rate.
  const shared = specs?.shared || {};
  const timeVals = [...new Set((specs?.versions || []).map((v) => v.figures?.rapidTime).filter(Boolean))];
  const rapidTime = shared.rapidTime || (timeVals.length === 1 ? timeVals[0] : null);
  const rapid = shared.rapid;
  const reviewCharging = review?.specs?.charging;
  let charge = null;
  if (rapid && /minutes/i.test(rapid)) charge = `Rapid charging: ${lower(rapid)}`;
  else if (rapid && rapidTime) charge = `Rapid charging: ${lower(rapid)}, with a rapid charge time of ${lower(rapidTime)}`;
  else if (rapid) charge = `Rapid charging: ${lower(rapid)}`;
  else if (rapidTime) charge = `Rapid charge time: ${lower(rapidTime)}`;
  const chargeNote = caveatFor(slug, 'charging', specs);
  if (charge) {
    qa.push({ key: 'charging', q: `How fast does the ${van.name} charge?`, a: [sentence(charge), chargeNote, reviewNote(slug, 'charging', 'rapid charging rate', reviewCharging)].filter(Boolean).join(' ') });
  } else if (reviewCharging != null) {
    const main = unconfirmed(reviewCharging) ? `Not confirmed yet${reasonOf(reviewCharging) ? ` (${reasonOf(reviewCharging)})` : ''}` : `Fastest rapid charging rate: ${reviewCharging}`;
    qa.push({ key: 'charging', q: `How fast does the ${van.name} charge?`, a: [sentence(main), chargeNote].filter(Boolean).join(' ') });
  }

  // Battery warranty: the spec panel's figure, else the review's.
  const w = shared.warranty || review?.specs?.batteryWarranty;
  if (w) {
    const main = unconfirmed(w) ? `Not confirmed yet${reasonOf(w) ? ` (${reasonOf(w)})` : ''}` : `Battery warranty: ${w}`;
    qa.push({ key: 'warranty', q: `What is the ${van.name}'s battery warranty?`, a: sentence(main) });
  }

  // The van grant, only where our review's checked price names the grant it's sold before.
  const price = review?.specs?.price;
  if (price && !unconfirmed(price) && /before the £[\d,]+ grant/.test(price)) {
    qa.push({ key: 'grant', q: `Does the ${van.name} get the plug-in van grant?`, a: `Yes. Our review gives its price as ${price.charAt(0).toLowerCase()}${price.slice(1)}.` });
  }

  // Rebadged twins, from the same data as the page's "Same van, other badges" section.
  const twins = twinsOf(van).filter((t) => t.electric);
  if (twins.length && TWINS[van.twin]) {
    qa.push({ key: 'twins', q: `Is the ${van.name} the same as another ${kind}?`, a: `Yes, the same ${kind} is also sold as the ${list(twins.map((t) => t.name))}. ${TWINS[van.twin].note}` });
  }

  return qa.slice(0, 6);
}

export const faqLd = (qa) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: qa.map((x) => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } })),
});

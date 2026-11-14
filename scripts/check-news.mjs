#!/usr/bin/env node
/**
 * News fact check. Checks news stories, blog columns and reviews. Runs before every build (npm "prebuild"), so a story that fails can't go live.
 *
 * Every news story must list its facts in the frontmatter:
 *
 *   facts:
 *     - claim: "£29,421"                       # text exactly as it appears in the story
 *       source: https://www.example.gov.uk/... # page the fact comes from (trusted sites only)
 *       quote: "copied word for word from the source page, including the number"
 *     - claim: "about £14,000 less"
 *       calc: "£43,630 - £29,421 = £14,209"     # worked from figures that are themselves sourced
 *     - claim: "the size of Wales"
 *       joke: "obvious exaggeration, not a real measurement"  # blog columns only; the checker must agree
 *   factCheck:
 *     by: "independent fact-checker"           # someone other than the writer
 *     date: 2026-10-29
 *
 * Offline checks (always):
 *   - every number in the title, summary, stat, statLabel and body is covered by a fact's claim
 *   - every claim appears in the story, and its numbers appear in its quote (or it has a calc)
 *   - every source is on the trusted list in scripts/news-sources.json, or is a saved document
 *     (archive: sources/<file>) listed in sources/index.json with a trusted publisher and matching fingerprint
 *   - no links to other websites in the story
 *   - the story has a factCheck sign-off
 *
 * Live check (node scripts/check-news.mjs --live): also opens every source page and confirms
 * each quote is really there. Run it before opening a pull request; the GitHub workflow runs it too.
 *
 * --draft skips the factCheck sign-off requirement (for the writer's own checks).
 *
 * Exit code 1 on any problem.
 */
import { readFileSync, readdirSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIRS = ['src/pages/news', 'src/pages/blog', 'src/pages/reviews', 'src/data/rules', 'src/data/specs'].map((d) => join(ROOT, d)).filter((d) => existsSync(d));
const TRUSTED = JSON.parse(readFileSync(join(ROOT, 'scripts/news-sources.json'), 'utf8'));
const LIVE = process.argv.includes('--live');
const DRAFT = process.argv.includes('--draft'); // writer's own run: skip the fact-check sign-off requirement
const only = process.argv.slice(2).filter((a) => !a.startsWith('--'));
// Saved copies of maker documents whose websites block automated visits (see sources/README.md).
const ARCHIVE = existsSync(join(ROOT, 'sources/index.json')) ? JSON.parse(readFileSync(join(ROOT, 'sources/index.json'), 'utf8')) : {};
const UA = 'LoadspaceFactCheck/1.0 (https://loadspace-vans.netlify.app; checking our own news sources)';

// A number not glued to letters before it (so PV5, L1H1, eActros 600 model names aren't counted
// when written as one word), e.g. 29,421  9.6  2027  10  80.
const NUM = /(?<![A-Za-z0-9.,])\d+(?:[.,]\d+)*/g;
const nums = (s) => (String(s).match(NUM) || []).map((n) => n.replace(/[.,]$/, ''));
// Numbers a quote can back up: as printed, plus thousands written with a space ("1 197" is 1197),
// which some maker brochures use. This only adds candidates, so it never hides a missing number.
const quoteNums = (s) => [...nums(s), ...(String(s).match(/(?<![\d.,])\d{1,3}(?: \d{3})+(?![\d.,])/g) || []).map((n) => n.replace(/ /g, ''))];

const norm = (s) => String(s)
  .replace(/&nbsp;| | /g, ' ')
  .replace(/[‘’‛′]/g, "'").replace(/[“”″]/g, '"')
  .replace(/[‐-―−]/g, '-')
  .replace(/\s+/g, ' ').trim().toLowerCase();

// HTML character references in a fetched page (&gt; &#34; &#x22; &pound; ...), decoded in a single pass so
// "&amp;gt;" becomes the text "&gt;", not ">". SMMT stores ">" as &gt; and Ford stores '"' as &#34;, and these
// used to become spaces, so quotes containing them could never match. Names not in this table, and numbers
// that aren't valid characters, still become a space as before.
const ENTITIES = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ',
  lsquo: '‘', rsquo: '’', sbquo: '‚', ldquo: '“', rdquo: '”', bdquo: '„',
  prime: '′', Prime: '″', laquo: '«', raquo: '»',
  ndash: '–', mdash: '—', minus: '−', hyphen: '‐', dash: '‐', hellip: '…',
  middot: '·', bull: '•', ensp: ' ', emsp: ' ', thinsp: ' ',
  pound: '£', euro: '€', cent: '¢', dollar: '$', percnt: '%', num: '#', commat: '@',
  copy: '©', reg: '®', trade: '™', deg: '°', plusmn: '±', times: '×', divide: '÷',
  frac12: '½', frac14: '¼', frac34: '¾', sup2: '²', sup3: '³', micro: 'µ',
  le: '≤', ge: '≥', sect: '§', dagger: '†', Dagger: '‡',
  colon: ':', semi: ';', comma: ',', period: '.', excl: '!', quest: '?', lpar: '(', rpar: ')', sol: '/', ast: '*', plus: '+', equals: '=',
  aacute: 'á', agrave: 'à', acirc: 'â', auml: 'ä', ccedil: 'ç', eacute: 'é', egrave: 'è',
  ecirc: 'ê', euml: 'ë', iacute: 'í', iuml: 'ï', ntilde: 'ñ', oacute: 'ó', ouml: 'ö',
  uacute: 'ú', uuml: 'ü', szlig: 'ß', Eacute: 'É', Auml: 'Ä', Ouml: 'Ö', Uuml: 'Ü',
};
const CHAR_REF = /&(?:#(\d+)|#[xX]([0-9a-fA-F]+)|([A-Za-z][A-Za-z0-9]*));/g;
function decodeRef(ref, dec, hex, name) {
  if (name !== undefined) return Object.hasOwn(ENTITIES, name) ? ENTITIES[name] : ' ';
  const cp = dec !== undefined ? Number(dec) : parseInt(hex, 16);
  if (!cp || cp > 0x10ffff || (cp >= 0xd800 && cp <= 0xdfff)) return ' ';
  return String.fromCodePoint(cp);
}

function hostOk(url) {
  let host;
  try { host = new URL(url).hostname.replace(/^www\./, ''); } catch { return null; }
  for (const tier of ['primary', 'trade']) {
    if (TRUSTED[tier].some((d) => host === d || host.endsWith('.' + d))) return tier;
  }
  return null;
}

// A saved document must be listed in sources/index.json, from a trusted publisher, and unchanged.
function archiveProblem(path) {
  const name = String(path).replace(/^sources\//, '');
  const entry = ARCHIVE[name];
  if (!String(path).startsWith('sources/') || !entry) return `saved document isn't listed in sources/index.json: ${path}`;
  const file = join(ROOT, 'sources', name);
  if (!existsSync(file)) return `saved document is missing: ${path}`;
  if (!hostOk('https://' + entry.publisher + '/')) return `saved document's publisher isn't on the trusted list: ${entry.publisher}`;
  const sha = createHash('sha256').update(readFileSync(file)).digest('hex');
  if (sha !== entry.sha256) return `saved document has changed since it was recorded: ${path}`;
  return null;
}

function archiveText(path) {
  const file = join(ROOT, path);
  if (file.toLowerCase().endsWith('.pdf')) return execFileSync('pdftotext', ['-layout', file, '-'], { maxBuffer: 64e6 }).toString();
  return readFileSync(file, 'utf8').replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ');
}

function parse(file) {
  const text = readFileSync(file, 'utf8');
  const m = text.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return { fm: {}, body: text };
  return { fm: yaml.load(m[1]) || {}, body: m[2] };
}

function storyText(fm, body) {
  // Drop link targets (internal paths) but keep link text; drop markdown syntax that holds no facts.
  const clean = body.replace(/\]\([^)]*\)/g, ']').replace(/<[^>]+>/g, ' ').replace(/\b4x4s?\b/gi, '');
  const specs = fm.specs && typeof fm.specs === 'object' ? Object.values(fm.specs) : [];
  // Spec tables (src/data/specs): every heading and cell counts as text to check.
  const tables = Array.isArray(fm.tables) ? fm.tables.flatMap((t) => [t.title, ...(t.head || []), ...(t.rows || []).flat()]) : [];
  const versions = Array.isArray(fm.versions) ? fm.versions.flatMap((v) => [v.name, ...Object.values(v.figures || {})]) : [];
  const shared = fm.shared && typeof fm.shared === 'object' ? Object.values(fm.shared) : [];
  return [fm.title, fm.summary, fm.stat, fm.statLabel, fm.photoCaption, fm.verdict, fm.sourceLabel, ...versions, ...shared, ...(fm.good || []), ...(fm.bad || []), ...specs, ...tables, ...(fm.notes || []), clean].filter(Boolean).join('\n');
}

function checkOffline(slug, fm, body, isBlog) {
  const errs = [];
  const facts = Array.isArray(fm.facts) ? fm.facts : [];
  if (!facts.length) errs.push('no facts: list. Every story needs its facts and sources listed.');
  if (!DRAFT && (!fm.factCheck || !fm.factCheck.by || !fm.factCheck.date)) errs.push('no factCheck sign-off (by + date).');

  const text = storyText(fm, body);
  const ntext = norm(text);

  // External links are not allowed in stories.
  for (const [, url] of body.matchAll(/\]\((https?:[^)]+)\)/g)) errs.push(`links to another website: ${url}`);
  for (const [url] of body.matchAll(/https?:\/\/\S+/g)) if (!body.includes(`(${url}`)) errs.push(`web address in the story: ${url}`);

  const covered = new Set();
  facts.forEach((f, i) => {
    const label = `fact ${i + 1} (${f.claim ?? 'no claim'})`;
    if (!f.claim) { errs.push(`${label}: missing claim`); return; }
    if (!ntext.includes(norm(f.claim))) errs.push(`${label}: claim text isn't in the story (story changed after checking?)`);
    nums(f.claim).forEach((n) => covered.add(n));
    if (f.calc || f.joke) {
      if (f.source || f.quote) errs.push(`${label}: give either calc/joke or source+quote, not both`);
      if (f.joke && !isBlog) errs.push(`${label}: joke facts are only allowed in blog columns, not news`);
      return;
    }
    if (f.archive) {
      if (f.source) errs.push(`${label}: give either source or archive, not both`);
      if (!f.quote) { errs.push(`${label}: needs a quote from the saved document`); return; }
      const err = archiveProblem(f.archive);
      if (err) errs.push(`${label}: ${err}`);
    } else {
      if (!f.source || !f.quote) { errs.push(`${label}: needs source and quote (or calc)`); return; }
      if (!hostOk(f.source)) errs.push(`${label}: source isn't on the trusted list: ${f.source}`);
    }
    // Thousands separators don't change a number: 3,705 in a claim matches 3705 in a spec table.
    const plain = (n) => n.replace(/,(?=\d{3}\b)/g, '');
    const qn = new Set(quoteNums(f.quote).map(plain));
    const missing = nums(f.claim).filter((n) => !qn.has(plain(n)));
    if (missing.length) errs.push(`${label}: number(s) ${missing.join(', ')} not in the quote. Quote the source exactly, or use calc for conversions.`);
  });

  // Equipment and option lists (src/data/specs): each item carries its own quote from the
  // file's saved maker document, and every number in the item must appear in that quote.
  // Each trim (equipment) or category (options) may name its own saved document with `archive:`;
  // otherwise the file-level archive is used.
  const listItems = [
    ...(fm.equipment || []).flatMap((t) => (t.groups || []).flatMap((g) => (g.items || []).map((it) => ({ where: `${t.trim} / ${g.name}`, text: it.text, quote: it.quote, archive: g.archive || t.archive || fm.archive })))),
    ...(fm.options || []).flatMap((c) => (c.items || []).map((it) => ({ where: `options / ${c.category}`, text: [it.name, it.price, it.note].filter(Boolean).join(' '), quote: it.quote, archive: c.archive || fm.archive }))),
  ];
  const docText = new Map();
  const plainNum = (n) => n.replace(/,(?=\d{3}\b)/g, '').replace(/\.0+$/, '');
  for (const it of listItems) {
    if (!it.text || !it.quote) { errs.push(`${it.where}: item needs text and a quote (${it.text || 'no text'})`); continue; }
    if (/\u2014/.test(it.text)) errs.push(`${it.where}: em dash in "${it.text}"`);
    if (!it.archive) { errs.push(`${it.where}: no saved document (archive) for this item`); continue; }
    if (!docText.has(it.archive)) {
      const problem = archiveProblem(it.archive);
      let src = null;
      if (problem) errs.push(problem);
      else {
        try { src = norm(archiveText(it.archive)); } catch (e) {
          // Netlify's build machines don't have pdftotext. The GitHub check (which merges depend on) does,
          // so there a missing tool is an error; elsewhere we skip just the quote lookup.
          if (process.env.GITHUB_ACTIONS || LIVE) errs.push(`couldn't read ${it.archive} (${e.message})`);
          else console.warn(`  (skipped quote lookup in ${it.archive}: pdftotext not available)`);
        }
      }
      docText.set(it.archive, { problem, src });
    }
    const { problem, src } = docText.get(it.archive);
    if (problem) continue;
    if (src !== null && !src.includes(norm(it.quote))) { errs.push(`${it.where}: quote not found in ${it.archive}: "${it.quote}"`); continue; }
    const qn = new Set(quoteNums(it.quote).map(plainNum));
    const miss = nums(it.text).filter((n) => !qn.has(plainNum(n)));
    if (miss.length) errs.push(`${it.where}: number(s) ${miss.join(', ')} in "${it.text}" not in its quote`);
  }

  const uncovered = [...new Set(nums(text))].filter((n) => !covered.has(n));
  if (uncovered.length) errs.push(`numbers in the story with no fact behind them: ${uncovered.join(', ')}`);
  return errs;
}

const pageCache = new Map();
async function pageText(url) {
  if (pageCache.has(url)) return pageCache.get(url);
  const p = (async () => {
    const res = await fetch(url, { headers: { 'User-Agent': UA }, redirect: 'follow' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const type = res.headers.get('content-type') || '';
    const buf = Buffer.from(await res.arrayBuffer());
    if (type.includes('pdf') || url.toLowerCase().endsWith('.pdf')) {
      const dir = join(ROOT, '.cache'); mkdirSync(dir, { recursive: true });
      const f = join(dir, 'source.pdf'); writeFileSync(f, buf);
      return execFileSync('pdftotext', ['-layout', f, '-'], { maxBuffer: 64e6 }).toString();
    }
    return buf.toString('utf8')
      .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(CHAR_REF, decodeRef);
  })();
  pageCache.set(url, p);
  return p;
}

async function checkLive(slug, fm) {
  const errs = [];
  for (const [i, f] of (fm.facts || []).entries()) {
    if (f.archive && f.quote) {
      try {
        if (!norm(archiveText(f.archive)).includes(norm(f.quote))) errs.push(`fact ${i + 1} (${f.claim}): quote not found in saved document ${f.archive}`);
      } catch (e) { errs.push(`fact ${i + 1} (${f.claim}): couldn't read saved document ${f.archive} (${e.message})`); }
      continue;
    }
    if (!f.source || !f.quote) continue;
    try {
      const t = norm(await pageText(f.source));
      if (!t.includes(norm(f.quote))) errs.push(`fact ${i + 1} (${f.claim}): quote not found on ${f.source}`);
    } catch (e) {
      errs.push(`fact ${i + 1} (${f.claim}): couldn't open ${f.source} (${e.message}). Unchecked facts can't be published.`);
    }
  }
  return errs;
}

let failed = 0;
const files = DIRS.flatMap((d) => readdirSync(d).filter((f) => f.endsWith('.md')).map((f) => join(d, f)))
  .filter((f) => !only.length || only.some((o) => f.includes(o)));
for (const path of files) {
  const slug = path.split('/').pop().replace(/\.md$/, '');
  const isBlog = path.includes('/pages/blog/');
  const { fm, body } = parse(path);
  const errs = checkOffline(slug, fm, body, isBlog);
  if (LIVE) errs.push(...(await checkLive(slug, fm)));
  if (errs.length) {
    failed++;
    console.error(`\n✗ ${slug}`);
    errs.forEach((e) => console.error('   - ' + e));
    // On GitHub, also show each problem as an annotation on the run summary.
    if (process.env.GITHUB_ACTIONS) errs.forEach((e) => console.log(`::error title=${slug}::${e.replace(/\n/g, ' ')}`));
  } else {
    console.log(`✓ ${slug}: ${(fm.facts || []).length} facts${LIVE ? ', all quotes found on source pages' : ''}`);
  }
}
if (failed) {
  console.error(`\nNews check failed for ${failed} of ${files.length} stories. Fix them before publishing (see README "News posts").`);
  process.exit(1);
}
console.log(`\nNews check passed (${files.length} stories${LIVE ? ', sources checked live' : ''}).`);

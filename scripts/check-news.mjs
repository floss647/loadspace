#!/usr/bin/env node
/**
 * News fact check. Runs before every build (npm "prebuild"), so a story that fails can't go live.
 *
 * Every news story must list its facts in the frontmatter:
 *
 *   facts:
 *     - claim: "£29,421"                       # text exactly as it appears in the story
 *       source: https://www.example.gov.uk/... # page the fact comes from (trusted sites only)
 *       quote: "copied word for word from the source page, including the number"
 *     - claim: "about £14,000 less"
 *       calc: "£43,630 - £29,421 = £14,209"     # worked from figures that are themselves sourced
 *   factCheck:
 *     by: "independent fact-checker"           # someone other than the writer
 *     date: 2026-10-29
 *
 * Offline checks (always):
 *   - every number in the title, summary, stat, statLabel and body is covered by a fact's claim
 *   - every claim appears in the story, and its numbers appear in its quote (or it has a calc)
 *   - every source is on the trusted list in scripts/news-sources.json
 *   - no links to other websites in the story
 *   - the story has a factCheck sign-off
 *
 * Live check (node scripts/check-news.mjs --live): also opens every source page and confirms
 * each quote is really there. Run it before opening a pull request; the GitHub workflow runs it too.
 *
 * Exit code 1 on any problem.
 */
import { readFileSync, readdirSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const POSTS = join(ROOT, 'src/pages/news');
const TRUSTED = JSON.parse(readFileSync(join(ROOT, 'scripts/news-sources.json'), 'utf8'));
const LIVE = process.argv.includes('--live');
const only = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const UA = 'LoadspaceFactCheck/1.0 (https://loadspace-vans.netlify.app; checking our own news sources)';

// A number not glued to letters before it (so PV5, L1H1, eActros 600 model names aren't counted
// when written as one word), e.g. 29,421  9.6  2027  10  80.
const NUM = /(?<![A-Za-z0-9.,])\d+(?:[.,]\d+)*/g;
const nums = (s) => (String(s).match(NUM) || []).map((n) => n.replace(/[.,]$/, ''));

const norm = (s) => String(s)
  .replace(/&nbsp;| | /g, ' ')
  .replace(/[‘’‛′]/g, "'").replace(/[“”″]/g, '"')
  .replace(/[‐-―−]/g, '-')
  .replace(/\s+/g, ' ').trim().toLowerCase();

function hostOk(url) {
  let host;
  try { host = new URL(url).hostname.replace(/^www\./, ''); } catch { return null; }
  for (const tier of ['primary', 'trade']) {
    if (TRUSTED[tier].some((d) => host === d || host.endsWith('.' + d))) return tier;
  }
  return null;
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
  return [fm.title, fm.summary, fm.stat, fm.statLabel, clean].filter(Boolean).join('\n');
}

function checkOffline(slug, fm, body) {
  const errs = [];
  const facts = Array.isArray(fm.facts) ? fm.facts : [];
  if (!facts.length) errs.push('no facts: list. Every story needs its facts and sources listed.');
  if (!fm.factCheck || !fm.factCheck.by || !fm.factCheck.date) errs.push('no factCheck sign-off (by + date).');

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
    if (f.calc) {
      if (f.source || f.quote) errs.push(`${label}: give either calc or source+quote, not both`);
      return;
    }
    if (!f.source || !f.quote) { errs.push(`${label}: needs source and quote (or calc)`); return; }
    if (!hostOk(f.source)) errs.push(`${label}: source isn't on the trusted list: ${f.source}`);
    const qn = new Set(nums(f.quote));
    const missing = nums(f.claim).filter((n) => !qn.has(n));
    if (missing.length) errs.push(`${label}: number(s) ${missing.join(', ')} not in the quote. Quote the source exactly, or use calc for conversions.`);
  });

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
      .replace(/&amp;/g, '&').replace(/&pound;/g, '£').replace(/&euro;/g, '€').replace(/&#163;/g, '£')
      .replace(/&#8364;/g, '€').replace(/&#8211;|&ndash;/g, '-').replace(/&#8217;|&rsquo;|&#039;|&#39;/g, "'")
      .replace(/&#8220;|&#8221;|&ldquo;|&rdquo;|&quot;/g, '"').replace(/&#\d+;|&[a-z]+;/g, ' ');
  })();
  pageCache.set(url, p);
  return p;
}

async function checkLive(slug, fm) {
  const errs = [];
  for (const [i, f] of (fm.facts || []).entries()) {
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
const files = readdirSync(POSTS).filter((f) => f.endsWith('.md')).filter((f) => !only.length || only.some((o) => f.includes(o)));
for (const file of files) {
  const slug = file.replace(/\.md$/, '');
  const { fm, body } = parse(join(POSTS, file));
  const errs = checkOffline(slug, fm, body);
  if (LIVE) errs.push(...(await checkLive(slug, fm)));
  if (errs.length) {
    failed++;
    console.error(`\n✗ ${slug}`);
    errs.forEach((e) => console.error('   - ' + e));
  } else {
    console.log(`✓ ${slug}: ${(fm.facts || []).length} facts${LIVE ? ', all quotes found on source pages' : ''}`);
  }
}
if (failed) {
  console.error(`\nNews check failed for ${failed} of ${files.length} stories. Fix them before publishing (see README "News posts").`);
  process.exit(1);
}
console.log(`\nNews check passed (${files.length} stories${LIVE ? ', sources checked live' : ''}).`);

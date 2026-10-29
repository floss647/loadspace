#!/usr/bin/env node
// House style check, run before every build. Fails if any page text contains an em dash.
// Use a comma, colon, full stop or brackets instead. (En dashes in ranges like 10–80% are fine.)
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIRS = ['src', 'public', 'netlify'];
const TEXT = new Set(['.astro', '.md', '.mdx', '.js', '.mjs', '.ts', '.json', '.html', '.css', '.svg', '.txt', '.xml']);
const BANNED = [['—', 'em dash'], ['&mdash;', 'em dash'], ['&#8212;', 'em dash'], ['\\u2014', 'em dash']];

const problems = [];
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) { walk(p); continue; }
    if (!TEXT.has(extname(p))) continue;
    readFileSync(p, 'utf8').split('\n').forEach((line, i) => {
      for (const [s, what] of BANNED) if (line.includes(s)) problems.push(`${p.replace(ROOT + '/', '')}:${i + 1}: ${what}: ${line.trim().slice(0, 100)}`);
    });
  }
}
DIRS.forEach((d) => walk(join(ROOT, d)));

// Stock phrases that make writing read as machine-made. Checked in news stories and blog columns.
const CLICHES = ['delve', 'in today\'s fast-paced', 'game-changer', 'game changer', "it's worth noting", 'navigate the landscape',
  'a testament to', 'in the ever-evolving', 'buckle up', 'let\'s dive in', 'dive into', 'tapestry', 'unleash', 'elevate your',
  'in conclusion', 'at the end of the day', 'a rich tapestry', 'seamless', 'revolutionise', 'revolutionize', 'landscape of'];
for (const dir of ['src/pages/news', 'src/pages/blog']) {
  const full = join(ROOT, dir);
  let names = [];
  try { names = readdirSync(full).filter((f) => f.endsWith('.md')); } catch { continue; }
  for (const name of names) {
    const body = readFileSync(join(full, name), 'utf8').split(/^---$/m).slice(2).join('---').toLowerCase();
    for (const c of CLICHES) if (body.includes(c)) problems.push(`${dir}/${name}: stock phrase "${c}". Say it plainly instead.`);
  }
}
if (problems.length) {
  console.error('Style check failed:\n' + problems.map((p) => '  - ' + p).join('\n'));
  process.exit(1);
}
console.log('Style check passed (no em dashes or stock phrases).');

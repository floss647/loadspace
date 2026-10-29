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
if (problems.length) {
  console.error('Style check failed. No em dashes anywhere on the site:\n' + problems.map((p) => '  - ' + p).join('\n'));
  process.exit(1);
}
console.log('Style check passed (no em dashes).');

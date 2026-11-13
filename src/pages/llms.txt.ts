// /llms.txt: a plain Markdown map of the site for AI assistants and answer engines
// (https://llmstxt.org). Built from the site's own data at build time, so new reviews, vans,
// guides, comparisons and news stories appear here without editing this file.
import { SITE } from '../data/site.js';
import { EV_VANS, SIZES, twinsOf } from '../data/vans.js';
import { ALL_GUIDES } from '../data/guides.js';
import { TOOLS } from '../data/tools.js';
import { REVIEWS, CRITERIA } from '../lib/reviews.js';
import { SPECS } from '../lib/specs.js';
import { PAIRS } from '../lib/compare.js';
import { POSTS } from '../lib/news.js';

// First sentence of a summary, for a one-line description.
const firstSentence = (s: string) => String(s || '').split(/(?<=[.!?])\s+(?=[A-Z])/)[0].trim();
const link = (site: URL, name: string, path: string, note?: string) =>
  `- [${name}](${new URL(path, site).href})${note ? `: ${note}` : ''}`;

export function GET({ site }: { site: URL }) {
  const hasSpecs = new Set(SPECS.map((s: { van: string }) => s.van));
  const vans = Object.keys(SIZES).flatMap((size) => EV_VANS.filter((v) => v.size === size));
  const lines = [
    `# ${SITE.name}`,
    '',
    `> ${SITE.description}`,
    '',
    '## About',
    '',
    `${SITE.name} gives independent UK advice on electric vans and trucks for small businesses and fleets. Spec figures are checked against the maker's own documents before we publish them, and every figure in our reviews and news stories is checked against its source. If we can't confirm a figure from a current source, the page says so. Our reviews are based on published figures, price lists and UK road tests: we haven't road-tested the vans ourselves yet.`,
    '',
    link(site, 'About us and how we make money', '/about/'),
    link(site, 'Report a mistake', '/corrections/', 'tell us about an error and we will check it and correct it openly'),
    '',
    '## How we score',
    '',
    link(site, 'How we review and score electric vans', '/reviews/how-we-score/', `the data score, worked out only from published figures: ${CRITERIA.map((c) => c.label.toLowerCase()).join(', ')}`),
    '',
    '## Reviews',
    '',
    link(site, 'All electric van reviews', '/reviews/'),
    ...REVIEWS.map((r) => link(site, r.title, r.url, firstSentence(r.summary))),
    '',
    '## Van specs and buying guides',
    '',
    link(site, 'Every electric van on sale in the UK', '/vans/'),
    ...vans.map((v) => {
      const parts = [hasSpecs.has(v.slug) ? 'checked maker specs' : 'buying basics', (hasSpecs.has(v.slug) || REVIEWS.some((r) => r.van === v.slug)) && 'quick answers', twinsOf(v).some((t) => t.electric) && 'rebadged twins', 'buying used'].filter(Boolean);
      return link(site, v.name, `/vans/${v.slug}/`, `${SIZES[v.size].label.replace(/s$/, '').toLowerCase()}: ${parts.slice(0, -1).join(', ')} and ${parts[parts.length - 1]}`);
    }),
    '',
    '## Guides',
    '',
    link(site, 'All guides', '/guides/'),
    ...ALL_GUIDES.map((g) => link(site, g.title, g.href, g.blurb)),
    '',
    '## Tools',
    '',
    link(site, 'All tools', '/tools/'),
    ...TOOLS.map(([href, name, blurb]) => link(site, name, href, blurb)),
    '',
    '## Comparisons',
    '',
    link(site, 'Compare electric vans head to head', '/compare/'),
    ...PAIRS.map((p) => link(site, `${p.vanA.name} vs ${p.vanB.name}`, p.url, p.reason)),
    '',
    '## News',
    '',
    link(site, 'All news', '/news/'),
    ...POSTS.map((p) => link(site, p.title, p.url, firstSentence(p.summary))),
    '',
    '## Optional',
    '',
    link(site, 'Used electric vans', '/used-electric-vans/', 'buying guides for used electric vans, model by model'),
    link(site, 'Electric trucks', '/trucks/'),
    link(site, 'Van reliability', '/reliability/', 'MOT failure rates by model and age from official DVSA data'),
    link(site, 'News RSS feed', '/news/rss.xml'),
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}

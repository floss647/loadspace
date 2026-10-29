// GET /api/headlines
// Latest electric van and truck headlines from trade press RSS feeds.
// Headlines link to the original articles. Cached at Netlify's edge for an hour.

const FEEDS = [
  { name: 'SMMT', url: 'https://www.smmt.co.uk/feed/' },
  { name: 'Electrive', url: 'https://www.electrive.com/feed/' },
  { name: 'Van Reviewer', url: 'https://vanreviewer.co.uk/feed/' },
  { name: 'Van Fleet World', url: 'https://vanfleetworld.co.uk/feed/' },
  { name: 'EV Fleet World', url: 'https://evfleetworld.co.uk/feed/' },
  { name: 'Fleet World', url: 'https://fleetworld.co.uk/feed/' },
  { name: 'Transport + Energy', url: 'https://transportandenergy.com/feed/' },
];

// Keep stories about electric commercial vehicles; drop everything else.
const KEEP = /\b(e-?vans?|electric (van|truck|lcv|hgv|pick-?up)s?|zero[- ]emission (van|truck|hgv|lcv)s?|ev vans?|bev vans?|e-transit|esprinter|evito|edaily|eactros|id\. ?buzz cargo|pv5|vivaro electric|zev mandate|van grant|truck grant|depot charging|fleet electrification|hgv)\b/i;
const DROP = /\b(e-?bike|scooter|motorbike|motorcycle)\b/i;

export function parseFeed(xml, source) {
  const items = [];
  const blocks = xml.match(/<item[\s\S]*?<\/item>|<entry[\s\S]*?<\/entry>/gi) || [];
  for (const b of blocks) {
    const pick = (tag) => {
      const m = b.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i'));
      return m ? decode(m[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1').trim()) : '';
    };
    let link = pick('link');
    if (!link) {
      const m = b.match(/<link[^>]*href="([^"]+)"/i);
      link = m ? m[1] : '';
    }
    const title = pick('title').replace(/<[^>]+>/g, '');
    const date = pick('pubDate') || pick('updated') || pick('published') || pick('dc:date');
    const time = Date.parse(date);
    if (title && /^https?:\/\//.test(link)) items.push({ title, link, source, time: Number.isFinite(time) ? time : 0 });
  }
  return items;
}

function decode(s) {
  return s
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16)))
    .replace(/&quot;/g, '"').replace(/&apos;|&#039;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&');
}

export function pickHeadlines(items, { limit = 8, now = Date.now() } = {}) {
  const maxAge = 30 * 864e5;
  const seen = new Set();
  return items
    .filter((i) => KEEP.test(i.title) && !DROP.test(i.title))
    .filter((i) => !i.time || now - i.time < maxAge)
    .sort((a, b) => b.time - a.time)
    .filter((i) => {
      const key = i.title.toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 60);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, limit);
}

async function getFeed(f) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 6000);
  try {
    const res = await fetch(f.url, {
      signal: ctrl.signal,
      headers: { 'user-agent': 'LoadspaceHeadlines/1.0 (https://loadspace-vans.netlify.app)', accept: 'application/rss+xml, application/xml, text/xml' },
    });
    if (!res.ok) throw new Error(`${f.name} ${res.status}`);
    return parseFeed(await res.text(), f.name);
  } finally {
    clearTimeout(t);
  }
}

export default async () => {
  const results = await Promise.allSettled(FEEDS.map(getFeed));
  const failed = results.map((r, i) => (r.status === 'rejected' ? FEEDS[i].name : null)).filter(Boolean);
  if (failed.length) console.log('headline feeds failed:', failed.join(', '));
  const items = pickHeadlines(results.flatMap((r) => (r.status === 'fulfilled' ? r.value : [])));
  return new Response(JSON.stringify({ items, updated: new Date().toISOString() }), {
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, max-age=600',
      'netlify-cdn-cache-control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
};

export const config = { path: '/api/headlines' };

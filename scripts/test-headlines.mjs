// Tests the headline feed parser and filter with sample feeds. No network.
import assert from 'node:assert/strict';
import { parseFeed, pickHeadlines } from '../netlify/functions/headlines.mjs';

const now = Date.parse('2026-10-29T12:00:00Z');
const rss = `<?xml version="1.0"?><rss><channel>
<item><title><![CDATA[Record month for electric vans &amp; pickups]]></title><link>https://example.com/a</link><pubDate>Tue, 28 Oct 2026 09:00:00 +0000</pubDate></item>
<item><title>New hatchback launched</title><link>https://example.com/b</link><pubDate>Tue, 28 Oct 2026 08:00:00 +0000</pubDate></item>
<item><title>Zero-emission truck uptake falls</title><link>https://example.com/c</link><pubDate>Mon, 27 Oct 2026 08:00:00 +0000</pubDate></item>
<item><title>Electric van news from last year</title><link>https://example.com/old</link><pubDate>Mon, 27 Oct 2025 08:00:00 +0000</pubDate></item>
<item><title>Electric e-bike for couriers</title><link>https://example.com/d</link><pubDate>Mon, 27 Oct 2026 08:00:00 +0000</pubDate></item>
</channel></rss>`;
const atom = `<feed><entry><title>Ford E-Transit Custom gets bigger battery</title><link href="https://example.org/x"/><updated>2026-10-28T10:00:00Z</updated></entry>
<entry><title>Record month for electric vans &amp; pickups</title><link href="https://example.org/dup"/><updated>2026-10-26T10:00:00Z</updated></entry></feed>`;

const items = [...parseFeed(rss, 'A'), ...parseFeed(atom, 'B')];
assert.equal(items.length, 7);
assert.equal(items[0].title, 'Record month for electric vans & pickups');
const h = pickHeadlines(items, { now });
assert.deepEqual(h.map((x) => x.link), ['https://example.org/x', 'https://example.com/a', 'https://example.com/c']);
console.log('headline tests passed:', h.map((x) => x.title).join(' | '));

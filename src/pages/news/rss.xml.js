// RSS feed of news stories, newest first.
import rss from '@astrojs/rss';
import { POSTS } from '../../lib/news.js';
import { SITE } from '../../data/site.js';

export function GET(context) {
  return rss({
    title: `${SITE.name} news`,
    description: 'Fact-checked UK news on electric vans and trucks, and what it means for buyers and fleets.',
    site: context.site,
    items: POSTS.map((p) => ({ title: p.title, description: p.summary, pubDate: new Date(p.date), link: p.url })),
    customData: '<language>en-gb</language>',
  });
}

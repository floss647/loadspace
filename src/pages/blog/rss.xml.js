// RSS feed of the Overloaded column, newest first.
import rss from '@astrojs/rss';
import { COLUMNS, COLUMN } from '../../lib/blog.js';

export function GET(context) {
  return rss({
    title: `${COLUMN.name}, the weekly van column from Loadspace`,
    description: COLUMN.strap,
    site: context.site,
    items: COLUMNS.map((p) => ({ title: p.title, description: p.summary, pubDate: new Date(p.date), link: p.url })),
    customData: '<language>en-gb</language>',
  });
}

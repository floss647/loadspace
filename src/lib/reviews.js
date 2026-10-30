// Loadspace reviews: a summary of what published road tests say, plus our own score
// worked out only from the van's published specs. Markdown files in src/pages/reviews.
import { EV_VANS } from '../data/vans.js';
import { scoreSpecs } from './review-score.js';
export { CRITERIA, scoreSpecs } from './review-score.js';

const files = import.meta.glob('../pages/reviews/*.md', { eager: true });

export const REVIEWS = Object.entries(files)
  .map(([path, mod]) => {
    const slug = path.split('/').pop().replace(/\.md$/, '');
    const fm = mod.frontmatter;
    const van = EV_VANS.find((v) => v.slug === fm.van);
    return { ...fm, slug, url: `/reviews/${slug}/`, vanName: van?.name || fm.van, score: scoreSpecs(fm.specs) };
  })
  .filter((r) => r.title && r.date)
  .sort((a, b) => a.vanName.localeCompare(b.vanName));

export const reviewFor = (vanSlug) => REVIEWS.find((r) => r.van === vanSlug);

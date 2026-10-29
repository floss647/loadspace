// Overloaded: the weekly column (Markdown files in src/pages/blog), newest first.
import IMAGES from '../data/blog-images.json';

const files = import.meta.glob('../pages/blog/*.md', { eager: true });

export const COLUMN = {
  name: 'Overloaded',
  strap: 'A weekly, slightly unhinged look at the world of vans, fleets and the people who run them.',
};

export const COLUMNS = Object.entries(files)
  .map(([path, mod]) => {
    const slug = path.split('/').pop().replace(/\.md$/, '');
    return { ...mod.frontmatter, slug, url: `/blog/${slug}/`, img: IMAGES[slug] || null };
  })
  .filter((p) => p.title && p.date)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

// All news posts (Markdown files in src/pages/news), newest first.
const files = import.meta.glob('../pages/news/*.md', { eager: true });

export const POSTS = Object.entries(files)
  .map(([path, mod]) => ({
    ...mod.frontmatter,
    url: '/news/' + path.split('/').pop().replace(/\.md$/, '') + '/',
  }))
  .filter((p) => p.title && p.date)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const fmtDate = (d) =>
  new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

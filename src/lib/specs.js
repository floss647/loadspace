// Checked spec tables for each van, from the maker's own documents (src/data/specs/<van>.md).
// Every figure is fact-checked against its source by scripts/check-news.mjs.
const files = import.meta.glob('../data/specs/*.md', { eager: true });

export const SPECS = Object.values(files)
  .map((mod) => mod.frontmatter)
  .filter((fm) => fm?.van && Array.isArray(fm.tables) && fm.factCheck);

export const specsFor = (vanSlug) => SPECS.find((s) => s.van === vanSlug);

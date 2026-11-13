// Structured data (JSON-LD) helpers. Every URL is built from the site address in
// astro.config.mjs (Astro.site) and every name from SITE, so a domain or brand change needs
// no edits here. Values only restate what the page itself shows.
import { SITE } from '../data/site.js';

export const abs = (path, site) => new URL(path, site).href;

export const orgRef = (site) => ({ '@type': 'Organization', name: SITE.name, url: abs('/', site) });

export const publisherRef = (site) => ({
  ...orgRef(site),
  logo: { '@type': 'ImageObject', url: abs('/favicon.svg', site) },
});

// BreadcrumbList from the page's visible trail. `trail` is [[name, path], ...] from Home down to
// the parent page; the current page is added last.
export function breadcrumbList(site, trail, current) {
  const items = [...trail, current].filter(Boolean);
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: abs(path, site) })),
  };
}

// ItemList for a hub page that lists other pages: [[name, path], ...].
export function itemList(site, name, entries) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    numberOfItems: entries.length,
    itemListElement: entries.map(([itemName, path], i) => ({ '@type': 'ListItem', position: i + 1, name: itemName, url: abs(path, site) })),
  };
}

// A vehicle photo from src/data/images.json, with the same credit the page prints under it.
export function vehicleImage(img, site) {
  if (!img?.file) return undefined;
  const url = abs(img.file, site);
  if (img.source) return { '@type': 'ImageObject', url, contentUrl: url, creditText: `${img.author} press image` };
  // Some Commons author fields carry extra lines after the name; the credit uses the name only.
  const author = String(img.author || 'Wikimedia Commons').split('\n')[0].trim();
  return {
    '@type': 'ImageObject',
    url,
    contentUrl: url,
    creditText: `${author}, Wikimedia Commons, ${img.licence}`,
    ...(img.author ? { creator: { '@type': 'Person', name: author } } : {}),
    ...(img.licenceUrl ? { license: img.licenceUrl } : {}),
    ...(img.page ? { acquireLicensePage: img.page } : {}),
  };
}

// "Last checked: October 2026" as an ISO 8601 year and month ("2026-10"), no more precise than the page.
const MONTHS = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
export function isoMonth(text) {
  const m = String(text || '').trim().match(/^([A-Za-z]+)\s+(\d{4})$/);
  const i = m ? MONTHS.indexOf(m[1].toLowerCase()) : -1;
  return i >= 0 ? `${m[2]}-${String(i + 1).padStart(2, '0')}` : undefined;
}

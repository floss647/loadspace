// Used buying guides per model. Research files live in src/data/used/*.json
// (one array of models per file). Models no longer sold new are listed in USED_ONLY.
import { EV_VANS } from './vans.js';

const files = import.meta.glob('./used/*.json', { eager: true });
const all = Object.values(files).flatMap((m) => m.default || []);

// Vans only found used now, with their size.
export const USED_ONLY = {
  'nissan-e-nv200': 'small',
  'maxus-edeliver-3': 'small',
  'volkswagen-e-crafter': 'large',
  'man-etge': 'large',
  'volkswagen-abt-e-transporter': 'medium',
  'levc-vn5': 'medium',
};

const evBySlug = Object.fromEntries(EV_VANS.map((v) => [v.slug, v]));

export const USED = all
  .filter((u) => u && u.slug && (evBySlug[u.slug] || USED_ONLY[u.slug]))
  .map((u) => ({
    ...u,
    name: u.name.replace(/\s*\(discontinued\)\s*$/i, ''),
    size: evBySlug[u.slug]?.size || USED_ONLY[u.slug],
    newPage: evBySlug[u.slug] ? `/vans/${u.slug}/` : null,
    usedOnly: !evBySlug[u.slug],
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

export const usedBySlug = Object.fromEntries(USED.map((u) => [u.slug, u]));

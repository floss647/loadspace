// UK new van and pickup line-up (late 2026). Check against maker price lists before launch.
// electric: true = a fully electric version is on sale. electricNote adds detail.
// twin: models sharing a key are the same van under different badges.

export const SIZES = {
  small: {
    label: 'Small vans',
    short: 'Small',
    blurb: 'City deliveries, sole traders, light tools. Easy to park, cheapest to run.',
  },
  medium: {
    label: 'Medium vans',
    short: 'Medium',
    blurb: 'The all-rounder for most trades. Fits a 2.4m sheet of plywood in most long-wheelbase versions.',
  },
  large: {
    label: 'Large vans',
    short: 'Large',
    blurb: 'Couriers, builders, removals. The biggest sellers in the UK by volume.',
  },
  pickup: {
    label: 'Pickups',
    short: 'Pickup',
    blurb: 'Towing and off-road work. The first electric pickups arrived in 2026. Diesel sales have dropped sharply since the 2025 tax change for double-cabs.',
  },
};

export const TWINS = {
  'stellantis-small': {
    name: 'Stellantis small van',
    note: 'Built by Stellantis. Same body, engines and electric drivetrain across five badges.',
  },
  'renault-small': {
    name: 'Renault Kangoo family',
    note: 'Built by Renault. Nissan and Mercedes versions share the body and powertrains.',
  },
  'vw-ford-small': {
    name: 'VW Caddy family',
    note: 'The current Ford Transit Connect is built by Volkswagen on the Caddy.',
  },
  'stellantis-medium': {
    name: 'Stellantis medium van',
    note: 'Five badges on one van, including the Toyota Proace.',
  },
  'ford-vw-medium': {
    name: 'Ford Transit Custom family',
    note: 'The latest VW Transporter is built by Ford on the Transit Custom.',
  },
  'renault-medium': {
    name: 'Renault Trafic family',
    note: 'The Nissan Primastar is a rebadged Renault Trafic.',
  },
  'vw-man-large': {
    name: 'VW Crafter family',
    note: 'The MAN TGE is a rebadged Volkswagen Crafter.',
  },
  'renault-large': {
    name: 'Renault Master family',
    note: 'The Nissan Interstar is a rebadged Renault Master.',
  },
  'stellantis-large': {
    name: 'Stellantis large van',
    note: 'Ducato-based. Five badges, including the Toyota Proace Max.',
  },
  'ford-vw-pickup': {
    name: 'Ford Ranger family',
    note: 'The current VW Amarok is built by Ford on the Ranger.',
  },
  'mitsubishi-pickup': {
    name: 'Mitsubishi L200 family',
    note: 'The latest Nissan Navara is built by Mitsubishi on the L200 (Triton).',
  },
};

const v = (make, model, size, opts = {}) => ({
  make,
  model,
  name: `${make} ${model}`,
  slug: `${make} ${model}`
    .toLowerCase()
    .replace(/ë/g, 'e')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, ''),
  size,
  twin: opts.twin || null,
  electric: !!opts.electric,
  electricNote: opts.electricNote || '',
  intro: opts.intro || '',
  topSeller: !!opts.topSeller,
});

export const VANS = [
  // Small
  v('Ford', 'Transit Courier', 'small', {
    electric: true,
    electricNote: 'Sold as the E-Transit Courier.',
  }),
  v('Ford', 'Transit Connect', 'small', { twin: 'vw-ford-small' }),
  v('Volkswagen', 'Caddy Cargo', 'small', { twin: 'vw-ford-small' }),
  v('Citroën', 'Berlingo', 'small', { twin: 'stellantis-small', electric: true }),
  v('Peugeot', 'Partner', 'small', { twin: 'stellantis-small', electric: true }),
  v('Vauxhall', 'Combo', 'small', { twin: 'stellantis-small', electric: true }),
  v('Toyota', 'Proace City', 'small', { twin: 'stellantis-small', electric: true }),
  v('Fiat', 'Doblo', 'small', { twin: 'stellantis-small', electric: true }),
  v('Renault', 'Kangoo', 'small', {
    twin: 'renault-small',
    electric: true,
    electricNote: 'Sold as the Kangoo E-Tech. The older Kangoo ZE is common used.',
  }),
  v('Nissan', 'Townstar', 'small', { twin: 'renault-small', electric: true }),
  v('Citroën', 'ë-C3 Van', 'small', {
    electric: true,
    electricNote: 'Electric only. A car-based van and one of the cheapest electric vans in the UK.',
  }),
  v('Mercedes-Benz', 'Citan', 'small', {
    twin: 'renault-small',
    electric: true,
    electricNote: 'Sold as the eCitan.',
  }),

  // Medium
  v('Ford', 'Transit Custom', 'medium', {
    twin: 'ford-vw-medium',
    electric: true,
    topSeller: true,
    electricNote: 'Sold as the E-Transit Custom.',
    intro:
      "The electric version of the UK's best-selling van (49,774 Transit Customs of all types were registered in 2025). The current generation arrived in 2023, and the latest VW e-Transporter is built on it.",
  }),
  v('Volkswagen', 'Transporter', 'medium', {
    twin: 'ford-vw-medium',
    electric: true,
    electricNote: 'Sold as the e-Transporter.',
    intro:
      'The latest e-Transporter is built by Ford alongside the E-Transit Custom. Compare the two on price, warranty and lease offers: the van underneath is the same.',
  }),
  v('Volkswagen', 'ID. Buzz Cargo', 'medium', {
    electric: true,
    electricNote: 'Electric only.',
  }),
  v('Mercedes-Benz', 'Vito', 'medium', {
    electric: true,
    electricNote: 'Sold as the eVito. A new Vito is due in 2026.',
  }),
  v('Renault', 'Trafic', 'medium', {
    twin: 'renault-medium',
    electricNote: 'An electric Trafic E-Tech is due in the second half of 2026.',
  }),
  v('Nissan', 'Primastar', 'medium', { twin: 'renault-medium' }),
  v('Vauxhall', 'Vivaro', 'medium', {
    twin: 'stellantis-medium',
    electric: true,
    electricNote: 'Sold as the Vivaro Electric. Early Vivaro-e vans are now common used.',
  }),
  v('Citroën', 'Dispatch', 'medium', { twin: 'stellantis-medium', electric: true }),
  v('Peugeot', 'Expert', 'medium', { twin: 'stellantis-medium', electric: true }),
  v('Toyota', 'Proace', 'medium', { twin: 'stellantis-medium', electric: true }),
  v('Fiat', 'Scudo', 'medium', { twin: 'stellantis-medium', electric: true }),
  v('Kia', 'PV5 Cargo', 'medium', {
    electric: true,
    electricNote: 'Electric only. The best-selling electric van in August 2026.',
  }),
  v('Maxus', 'eDeliver 7', 'medium', { electric: true, electricNote: 'Electric only.' }),

  // Large
  v('Ford', 'Transit', 'large', {
    electric: true,
    topSeller: true,
    electricNote: 'Sold as the E-Transit.',
  }),
  v('Mercedes-Benz', 'Sprinter', 'large', {
    electric: true,
    topSeller: true,
    electricNote: 'Sold as the eSprinter.',
  }),
  v('Volkswagen', 'Crafter', 'large', { twin: 'vw-man-large' }),
  v('MAN', 'TGE', 'large', { twin: 'vw-man-large' }),
  v('Renault', 'Master', 'large', {
    twin: 'renault-large',
    electric: true,
    electricNote: 'Sold as the Master E-Tech.',
  }),
  v('Nissan', 'Interstar', 'large', { twin: 'renault-large', electric: true }),
  v('Vauxhall', 'Movano', 'large', { twin: 'stellantis-large', electric: true }),
  v('Citroën', 'Relay', 'large', { twin: 'stellantis-large', electric: true }),
  v('Peugeot', 'Boxer', 'large', { twin: 'stellantis-large', electric: true }),
  v('Fiat', 'Ducato', 'large', { twin: 'stellantis-large', electric: true }),
  v('Toyota', 'Proace Max', 'large', { twin: 'stellantis-large', electric: true }),
  v('Iveco', 'Daily', 'large', { electric: true, electricNote: 'Sold as the eDaily.' }),
  v('Maxus', 'Deliver 9', 'large', {
    electric: true,
    electricNote: 'Sold as the eDeliver 9.',
  }),
  v('Farizon', 'SV', 'large', { electric: true, electricNote: 'Electric only.' }),

  // Pickups
  v('Ford', 'Ranger', 'pickup', { twin: 'ford-vw-pickup', topSeller: true }),
  v('Volkswagen', 'Amarok', 'pickup', { twin: 'ford-vw-pickup' }),
  v('Toyota', 'Hilux', 'pickup', {
    electric: true,
    electricNote: 'A fully electric Hilux has been available to order in the UK since June 2026.',
  }),
  v('Isuzu', 'D-Max', 'pickup', {
    electric: true,
    electricNote: 'The D-Max EV went on sale in the UK in 2026, from about £60,000 excluding VAT, with 3.5-tonne towing.',
  }),
  v('Mitsubishi', 'L200', 'pickup', { twin: 'mitsubishi-pickup' }),
  v('Nissan', 'Navara', 'pickup', { twin: 'mitsubishi-pickup' }),
  v('KGM', 'Musso', 'pickup', {
    electric: true,
    electricNote: 'The Musso EV launched in the UK in 2026.',
  }),
  v('Maxus', 'T60 / T90', 'pickup', {
    electric: true,
    electricNote: 'The T90EV is one of the first fully electric pickups sold in the UK.',
  }),
  v('Maxus', 'eTerron 9', 'pickup', {
    electric: true,
    electricNote: 'Electric only. Official range up to 267 miles, from about £53,000 excluding VAT.',
  }),
  v('BYD', 'Shark', 'pickup', {
    electricNote: 'The Shark is a plug-in hybrid. A fully electric version has not been confirmed for the UK.',
  }),
  v('GWM', 'Cannon', 'pickup'),
];

// Names the electric versions are sold under. Pages show these; baseName keeps the
// original model name (used for MOT reliability, which is mostly diesel data).
const EV_NAMES = {
  'ford-transit-courier': 'Ford E-Transit Courier',
  'citroen-berlingo': 'Citroën ë-Berlingo',
  'peugeot-partner': 'Peugeot E-Partner',
  'vauxhall-combo': 'Vauxhall Combo Electric',
  'toyota-proace-city': 'Toyota Proace City Electric',
  'fiat-doblo': 'Fiat E-Doblo',
  'renault-kangoo': 'Renault Kangoo E-Tech',
  'nissan-townstar': 'Nissan Townstar EV',
  'mercedes-benz-citan': 'Mercedes-Benz eCitan',
  'ford-transit-custom': 'Ford E-Transit Custom',
  'volkswagen-transporter': 'Volkswagen e-Transporter',
  'mercedes-benz-vito': 'Mercedes-Benz eVito',
  'vauxhall-vivaro': 'Vauxhall Vivaro Electric',
  'citroen-dispatch': 'Citroën ë-Dispatch',
  'peugeot-expert': 'Peugeot E-Expert',
  'toyota-proace': 'Toyota Proace Electric',
  'fiat-scudo': 'Fiat E-Scudo',
  'ford-transit': 'Ford E-Transit',
  'mercedes-benz-sprinter': 'Mercedes-Benz eSprinter',
  'renault-master': 'Renault Master E-Tech',
  'nissan-interstar': 'Nissan Interstar-e',
  'vauxhall-movano': 'Vauxhall Movano Electric',
  'citroen-relay': 'Citroën ë-Relay',
  'peugeot-boxer': 'Peugeot E-Boxer',
  'fiat-ducato': 'Fiat E-Ducato',
  'toyota-proace-max': 'Toyota Proace Max Electric',
  'iveco-daily': 'Iveco eDaily',
  'maxus-deliver-9': 'Maxus eDeliver 9',
  'toyota-hilux': 'Toyota Hilux (electric)',
  'isuzu-d-max': 'Isuzu D-Max EV',
  'kgm-musso': 'KGM Musso EV',
  'maxus-t60-t90': 'Maxus T90EV',
};
for (const v of VANS) {
  v.baseName = v.name;
  if (v.electric && EV_NAMES[v.slug]) v.name = EV_NAMES[v.slug];
}

export const EV_VANS = VANS.filter((v) => v.electric);
export const NON_EV_VANS = VANS.filter((v) => !v.electric);

// Electric alternatives for a van with no electric version: twins first, then same size.
export const electricAlternatives = (van) => {
  const pool = VANS.filter((x) => x.electric && x.slug !== van.slug && x.size === van.size);
  const twinEvs = pool.filter((x) => van.twin && x.twin === van.twin);
  const rest = pool.filter((x) => !twinEvs.includes(x)).sort((a, b) => b.topSeller - a.topSeller);
  return [...twinEvs, ...rest].slice(0, 6);
};

export const twinsOf = (van) =>
  van.twin ? VANS.filter((x) => x.twin === van.twin && x.slug !== van.slug) : [];

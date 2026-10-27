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
    blurb: 'Towing and off-road work. Sales have dropped sharply since the 2025 company-car tax change for double-cabs.',
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
      "The UK's best-selling van by a wide margin: 49,774 registered in 2025. The current generation arrived in 2023 with diesel, plug-in hybrid and fully electric versions, and it's the van the latest VW Transporter is built on.",
  }),
  v('Volkswagen', 'Transporter', 'medium', {
    twin: 'ford-vw-medium',
    electric: true,
    electricNote: 'Sold as the e-Transporter.',
    intro:
      'The latest Transporter is built by Ford alongside the Transit Custom. Compare the two on price, warranty and finance offers: the van underneath is the same.',
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
  v('Toyota', 'Hilux', 'pickup'),
  v('Isuzu', 'D-Max', 'pickup'),
  v('Mitsubishi', 'L200', 'pickup', { twin: 'mitsubishi-pickup' }),
  v('Nissan', 'Navara', 'pickup', { twin: 'mitsubishi-pickup' }),
  v('KGM', 'Musso', 'pickup'),
  v('Maxus', 'T60 / T90', 'pickup'),
  v('BYD', 'Shark', 'pickup'),
  v('GWM', 'Cannon', 'pickup'),
];

export const twinsOf = (van) =>
  van.twin ? VANS.filter((x) => x.twin === van.twin && x.slug !== van.slug) : [];

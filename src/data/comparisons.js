// Head-to-head comparison pages (/compare/<a>-vs-<b>/). Each pair is two electric vans buyers
// weigh up against each other. A pair only gets a page when BOTH vans have a signed-off spec
// file (src/data/specs/<slug>.md with a factCheck block); src/lib/compare.js drops any that don't.
// The pages show only figures from those spec files, so they add no new claims.
export const COMPARISONS = [
  // Small
  { a: 'ford-transit-courier', b: 'citroen-berlingo', reason: 'Rival small electric vans' },
  { a: 'citroen-berlingo', b: 'peugeot-partner', reason: 'Twins from the Stellantis small van family' },
  { a: 'renault-kangoo', b: 'nissan-townstar', reason: 'Twins from the Renault Kangoo family' },
  // Medium
  { a: 'ford-transit-custom', b: 'volkswagen-transporter', reason: 'Twins from the Ford Transit Custom family' },
  { a: 'ford-transit-custom', b: 'vauxhall-vivaro', reason: 'Rival medium electric vans' },
  { a: 'citroen-dispatch', b: 'peugeot-expert', reason: 'Twins from the Stellantis medium van family' },
  { a: 'toyota-proace', b: 'citroen-dispatch', reason: 'Twins from the Stellantis medium van family' },
  { a: 'kia-pv5-cargo', b: 'volkswagen-id-buzz-cargo', reason: 'Rival medium electric vans' },
  { a: 'ford-transit-city', b: 'ford-transit-custom', reason: "Ford's two medium electric vans" },
  // Large
  { a: 'ford-transit', b: 'mercedes-benz-sprinter', reason: 'Rival large electric vans' },
  { a: 'vauxhall-movano', b: 'ford-transit', reason: 'Rival large electric vans' },
  { a: 'renault-master', b: 'nissan-interstar', reason: 'Twins from the Renault Master family' },
  { a: 'farizon-sv', b: 'ford-transit', reason: 'Rival large electric vans' },
];

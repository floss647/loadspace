// Electric trucks available or launching in the UK (late 2026).
// Line-ups change quickly: check with makers and dealers before launch.

export const TRUCK_CLASSES = {
  light: {
    label: 'Light trucks (up to 7.5 tonnes)',
    short: 'Up to 7.5t',
    blurb: 'Urban delivery, trades, local authority work. Category C1 licence above 3.5t (or 4.25t for electric).',
  },
  medium: {
    label: 'Medium rigid trucks (12–26 tonnes)',
    short: '12–26t',
    blurb: 'Regional distribution, refuse, construction supply. The easiest heavy trucks to electrify today, because routes are fixed and they return to base.',
  },
  heavy: {
    label: 'Heavy trucks and tractor units (up to 44 tonnes)',
    short: 'Up to 44t',
    blurb: 'Trunking and long-haul. Biggest batteries, highest prices, and the most dependent on fast depot and public charging.',
  },
};

const t = (make, model, cls, note = '') => ({
  make,
  model,
  name: `${make} ${model}`,
  slug: `${make} ${model}`.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
  cls,
  note,
});

export const TRUCKS = [
  // Light
  t('FUSO', 'eCanter', 'light', 'The longest-running electric light truck in the UK, sold through Mercedes-Benz truck dealers. Payload of up to about 4.5 tonnes depending on body.'),
  t('Iveco', 'eDaily (up to 7.2t)', 'light', 'The heaviest versions of the eDaily van range, built as chassis cabs for bodies like tippers and Lutons.'),
  t('Magtec', 'MEV75', 'light', 'A UK-built 7.5-tonne electric truck on an Isuzu-based chassis, with a choice of 80, 120 or 160kWh batteries.'),
  t('Yutong', 'T75e', 'light', 'A new 7.5-tonne electric truck imported by Pelican Engineering, with up to about 180 miles of official range.'),

  // Medium
  t('DAF', 'XB Electric', 'medium', "DAF's smallest electric truck, for city and regional distribution from around 12 tonnes. DAF was reported to lead the UK electric truck market in early 2026."),
  t('MAN', 'eTGL', 'medium', 'A 12-tonne electric rigid for urban distribution.'),
  t('Volvo', 'FL Electric', 'medium', 'A 16-tonne electric rigid, one of the first electric trucks in Volvo’s range.'),
  t('Volvo', 'FE Electric', 'medium', 'A larger electric rigid for urban distribution and refuse work.'),
  t('Renault Trucks', 'E-Tech D', 'medium', 'Renault’s electric distribution truck in 16 to 26-tonne versions.'),
  t('Mercedes-Benz', 'eActros 300/400 (rigid)', 'medium', 'Rigid versions of the eActros for heavier distribution work.'),
  t('DAF', 'XD Electric', 'medium', 'A regional distribution truck available as a rigid or tractor.'),

  // Heavy
  t('Mercedes-Benz', 'eActros 600', 'heavy', 'A long-haul tractor with 621kWh of batteries. Amazon has ordered more than 140 for the UK, the largest single electric HGV order in Britain so far.'),
  t('Volvo', 'FH Electric', 'heavy', 'Volvo’s long-haul electric tractor. A new generation went on order in summer 2026.'),
  t('Volvo', 'FM Electric', 'heavy', 'A regional heavy truck, as a tractor or rigid. Also new generation from 2026.'),
  t('DAF', 'XF Electric', 'heavy', 'Heavy tractor with 315–525kWh batteries and up to 325kW rapid charging.'),
  t('Renault Trucks', 'E-Tech T', 'heavy', 'Renault’s electric tractor unit for regional and long-distance haulage.'),
  t('MAN', 'eTGX / eTGS', 'heavy', 'MAN’s heavy electric trucks for long-haul (eTGX) and regional or construction work (eTGS).'),
  t('Scania', 'Battery-electric range', 'heavy', 'Scania sells battery-electric rigids and tractors across its range.'),
  t('Iveco', 'S-eWay', 'heavy', 'Iveco’s heavy electric tractor unit.'),
];

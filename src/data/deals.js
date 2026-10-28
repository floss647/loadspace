// SAMPLE DATA ONLY. Made-up prices to show how the deals page works.
// Replace with broker feeds before launch. Never show these to the public as real offers.
// Prices are business contract hire, monthly, excluding VAT.
export const DEALS_ARE_SAMPLE = true;

export const DEALS = [
  { van: 'vauxhall-vivaro', version: 'Electric 75kWh L2 Prime', broker: 'Broker C', monthly: 259, upfrontMonths: 6, term: 36, miles: 10000, fee: 0, fuel: 'Electric' },
  { van: 'citroen-dispatch', version: 'ë-Dispatch 75kWh XL Enterprise', broker: 'Broker B', monthly: 249, upfrontMonths: 9, term: 36, miles: 10000, fee: 250, fuel: 'Electric' },
  { van: 'kia-pv5-cargo', version: 'Long Range 71kWh', broker: 'Broker C', monthly: 269, upfrontMonths: 3, term: 48, miles: 10000, fee: 200, fuel: 'Electric' },
  { van: 'ford-transit-custom', version: 'E-Transit Custom 64kWh Trend', broker: 'Broker A', monthly: 349, upfrontMonths: 6, term: 36, miles: 10000, fee: 300, fuel: 'Electric' },
  { van: 'ford-transit', version: 'E-Transit 350 L3H2 Trend', broker: 'Broker B', monthly: 449, upfrontMonths: 9, term: 48, miles: 10000, fee: 300, fuel: 'Electric' },
  { van: 'mercedes-benz-sprinter', version: 'eSprinter L2H2 113kWh', broker: 'Broker C', monthly: 479, upfrontMonths: 6, term: 36, miles: 10000, fee: 250, fuel: 'Electric' },
  { van: 'peugeot-partner', version: 'E-Partner Standard 50kWh', broker: 'Broker A', monthly: 239, upfrontMonths: 6, term: 36, miles: 8000, fee: 0, fuel: 'Electric' },
  { van: 'ford-transit-courier', version: 'E-Transit Courier Limited', broker: 'Broker A', monthly: 219, upfrontMonths: 12, term: 48, miles: 8000, fee: 300, fuel: 'Electric' },
];

// True cost per month: everything you pay over the lease, spread evenly over the term.
// "6 upfront" on a 36-month lease means 6 payments upfront then 35 monthly payments.
export function trueCost(d) {
  const total = d.monthly * d.upfrontMonths + d.monthly * (d.term - 1) + d.fee;
  return { total, perMonth: total / d.term };
}

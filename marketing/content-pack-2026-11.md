# Van Electric content pack: November 2026

Ten LinkedIn posts, twelve YouTube Shorts scripts and one trade press pitch. Every figure comes from the site's own signed-off pages, and each item lists the files its figures came from.

## How to use this

- **Posting rhythm:** 2 to 3 LinkedIn posts a week and 2 to 3 Shorts a week. That's about four weeks of LinkedIn and four to six weeks of Shorts. Pitch one trade title a month, with one angle at a time.
- **Order:** any order works, but keep the two tax posts (5 and 6) apart, and don't post a LinkedIn post and the Short on the same subject in the same week.
- **Links:** every link uses https://loadspace-vans.netlify.app/. When vanelectric.co.uk goes live, swap the domain (the paths stay the same). The repo's `src/data/site.js` still sets the site name to "Loadspace", so check the live site shows "Van Electric" before you start posting.
- **Paste the post text only.** Leave out the "Sources" line under each post and script.
- **Re-check before posting.** Sources can update, so re-check every figure in a post or script against the site's spec pages, reviews, news and tax rules page before you post it, especially anything updated since 8 November 2026. The Budget 2026 changes in post 5, post 6 and Short 7 are not in force yet (the first-year allowance rise is subject to Finance Bill 2026-27), and grant rules can change.
- **Comparison pages:** the /compare/ pages linked in posts 9 and 10 and Shorts 3 and 12 aren't on the live site yet (they're on the `compare-pages` branch). Don't post those four until the pages are live and you've checked each link opens.
- **Images:** don't use maker press photos (editorial use only, see NEWSROOM.md). Use screenshots of our own spec tables and comparison pages, or plain text cards.
- **Shorts:** film the presenter to camera, or use on-screen text over screenshots of our own pages. No van needed. Never say or suggest we drove a van.
- **These posts don't repeat the earlier ones** in `linkedin-posts.md` (MOT data, the ZEV mandate, the grant explainer, the lease calculator's £279 example).
- Fact-checked against the site on 8 November 2026.

---

## Part 1: LinkedIn posts

### Post 1: what a payload figure includes

Payload figures aren't all measured the same way. The question to ask: is the driver already allowed for?

From the makers' own UK documents, as shown on our spec pages:

The driver's weight comes out of the figure
• Citroën ë-Dispatch, M panel van: 1,210kg
• Volkswagen e-Transporter, LWB 136PS: 1,151 to 1,156kg
• Ford Transit City, LWB high roof: 1,275kg

The driver is already allowed for
• Volkswagen ID. Buzz Cargo, 79kWh: 676 to 690kg (VW's unladen weights include 75kg for the driver)

Appears to allow for people in the cab, but the maker doesn't spell it out
• Kia PV5 Cargo: each payload is 75kg less than gross weight minus kerb weight, but Kia doesn't say why (and all Kia's figures are targets, pending homologation)
• Farizon SV: kerb weights are listed "with two occupants"

Options cut payload too. Before you order, ask the dealer for the plated payload of the exact van.

https://loadspace-vans.netlify.app/vans/

#ElectricVans #FleetManagement

> Sources: `src/data/specs/citroen-dispatch.md` (M panel van payload, note on driver), `src/data/specs/volkswagen-transporter.md` (LWB 136PS payload, note on driver), `src/data/specs/ford-transit-city.md` (LWB high-roof payload, note on driver), `src/data/specs/volkswagen-id-buzz-cargo.md` (79kWh payload, note on 75kg driver), `src/data/specs/kia-pv5-cargo.md` (notes on targets and the 75kg gap), `src/data/specs/farizon-sv.md` (note on two occupants). "Plated payload": wording from `src/data/specs/vauxhall-movano.md` notes.

---

### Post 2: rapid charge times start from different places

"Rapid charges in 30 minutes" tells you little until you know where the clock starts.

The makers' own rapid charging figures, as published:

• Ford E-Transit Custom: 10 to 80% in 29 minutes, up to 125kW (Ford's price list; its website says about 39 minutes)
• Volkswagen e-Transporter: 10 to 80% in 29 minutes, up to 125kW
• Citroën ë-Berlingo: 0 to 80% in 30 minutes, up to 100kW
• Ford Transit City: 10 to 80% in 33 minutes, up to 87kW
• Nissan Townstar EV: 15 to 80% in 37 minutes, up to 80kW
• Renault Kangoo E-Tech: 20 to 80% in 40 minutes, up to 80kW
• Citroën ë-Dispatch: 5 to 80% in 45 minutes, 100kW
• Citroën ë-Relay: 5 to 80% in 55 minutes on a 150kW rapid charger

That's five different starting points across eight vans, and the batteries differ in size too. So a longer time doesn't always mean a slower charger.

When you compare vans, check three things: the starting charge, the finishing charge and the charger power the maker used.

https://loadspace-vans.netlify.app/vans/

#ElectricVans #EVCharging #Fleet

> Sources: `src/data/specs/ford-transit-custom.md`, `volkswagen-transporter.md`, `citroen-berlingo.md`, `ford-transit-city.md`, `nissan-townstar.md`, `renault-kangoo.md`, `citroen-dispatch.md`, `citroen-relay.md` (each file's "Charging and battery" or "Range and charging" table). All in `src/data/specs/`. Ford's "about 39 minutes" website figure: `src/pages/reviews/ford-transit-custom.md` (range and charging section).

---

### Post 3: battery warranties, and the small print

On our spec pages, the most common electric van battery warranty is 8 years or 100,000 miles. A few makers go further, and the small print varies.

From the makers' own UK documents:

• Citroën ë-Dispatch and Peugeot E-Expert: 8 years or 100,000 miles (to 70% capacity)
• Volkswagen e-Transporter: 8 years or 100,000 miles (at least 70% capacity)
• Nissan Townstar EV and Interstar-e: 8 years or 100,000 miles (to 70% capacity)
• Renault Kangoo E-Tech: 8 years or 100,000 miles
• Mercedes-Benz eSprinter: 8 years or 100,000 miles
• Farizon SV and V7E: 8 years or 120,000 miles
• KGM Musso EV pickup: 10 years or 1 million km

The capacity figure is the level the battery is covered down to. Where it isn't stated, ask the dealer what the warranty guarantees.

And the battery warranty isn't the van warranty. Citroën's van warranty on the ë-Berlingo, for example, is three years: two years with unlimited mileage from Citroën, then a year from the retailer, limited to 100,000 miles.

https://loadspace-vans.netlify.app/vans/

#ElectricVans #FleetManagement

> Sources: `src/data/specs/citroen-dispatch.md`, `peugeot-expert.md`, `volkswagen-transporter.md`, `nissan-townstar.md`, `nissan-interstar.md`, `renault-kangoo.md`, `mercedes-benz-sprinter.md`, `farizon-sv.md`, `farizon-v7e.md`, `kgm-musso.md` (battery warranty rows and `shared.warranty`); ë-Berlingo van warranty from the notes in `src/data/specs/citroen-berlingo.md`. "Most common": of the 22 spec files that give a battery warranty, 18 give 8 years (or eight years) or 100,000 miles, with or without a capacity level.

---

### Post 4: which electric vans are twins

Some electric vans are the same van with a different badge. Our reviews group them like this:

• Stellantis small van: Citroën ë-Berlingo, Peugeot E-Partner, Vauxhall Combo Electric, Fiat E-Doblo, Toyota Proace City Electric
• Stellantis medium van: Citroën ë-Dispatch, Peugeot E-Expert, Vauxhall Vivaro Electric, Fiat E-Scudo, Toyota Proace Electric
• Stellantis large van: Citroën ë-Relay, Peugeot E-Boxer, Vauxhall Movano Electric, Fiat E-Ducato, Toyota Proace Max Electric
• Renault Kangoo E-Tech, Nissan Townstar EV, Mercedes-Benz eCitan
• Renault Master E-Tech, Nissan Interstar-e
• Close relatives rather than identical: Ford E-Transit Custom and Volkswagen e-Transporter, developed jointly and sharing their underpinnings

Same van doesn't mean same deal. Nissan gives the Townstar EV and Interstar-e a five-year, 100,000-mile van warranty. Renault gives their twins, the Kangoo and Master, three years.

So get a quote on every badge, and compare the warranty and the nearest dealer as well as the price.

https://loadspace-vans.netlify.app/guides/rebadged-vans/

#ElectricVans #Vans

> Sources: twin groups from review text in `src/pages/reviews/peugeot-partner.md` and `toyota-proace-city.md` (small), `citroen-dispatch.md` (medium), `peugeot-boxer.md` (large), `renault-kangoo.md` and `mercedes-benz-citan.md` (Kangoo family), `nissan-interstar.md` and `renault-master.md` (Master), `volkswagen-transporter.md` and `ford-transit-custom.md` (Custom and e-Transporter). Warranties: `src/pages/reviews/nissan-townstar.md`, `renault-kangoo.md`, `nissan-interstar.md`, `renault-master.md`.

---

### Post 5: company van tax, electric v diesel

If your staff take a company van home, the fuel it runs on changes their tax bill.

For 2026/27, an employee who can use a company diesel or petrol van privately pays income tax on a van benefit charge of £4,170, at their own rate: 20% basic, 40% higher or 45% additional (Scotland's bands differ). If the business also pays for private fuel, a van fuel benefit charge of £798 is added.

For a zero-emission van, both are nil.

There's no charge if the van is mainly for business travel, is used privately only for commuting, and the terms of use forbid other private use. HMRC calls this the restricted private use condition. A small detour for a newspaper on the way to work doesn't break it.

Coming next, from Budget 2026 but not yet in force: in the 2027 to 2028 tax year, the van benefit charge is due to rise to £4,310 and the van fuel benefit charge to £825.

Check your own position with your accountant. Our calculator includes the driver's tax:

https://loadspace-vans.netlify.app/tools/electric-vs-diesel/

#CompanyVans #ElectricVans #SmallBusiness

> Sources: `src/data/rules/van-tax-2026-27.md` ("Company vans: the driver's tax" and "Budget 2026" sections; `rates.vanBenefit`, `rates.vanFuelBenefit`, `rates.incomeTax`).

---

### Post 6: tax relief when you buy a van

Electric vans no longer get a tax break of their own when you buy one. The 100% first-year allowance for zero-emission goods vehicles only covered vans bought before April 2025. Now they get the same relief as diesel.

What's available for 2026/27:

• Annual Investment Allowance: deduct the full cost from profits, up to £1 million a year. Diesel and electric vans both qualify, and a used van can qualify too.
• Full expensing: limited companies can deduct 100% of the cost, but only on new and unused vans.
• 40% first-year allowance: for companies, sole traders and partnerships, on new and unused vans bought on or after 1 January 2026.
• Cash basis: sole traders and partnerships using it claim the van's cost as an allowable expense instead.

From 1 January 2027, the first-year allowance on new vans is due to rise from 40% to 50%, subject to Finance Bill 2026-27 becoming law. This Budget 2026 change isn't in force yet.

Double-cab pickups are different: from April 2025, HMRC expects most to count as cars.

Check with your accountant before you buy.

https://loadspace-vans.netlify.app/tools/lease-or-buy/

#SmallBusiness #ElectricVans #Tax

> Sources: `src/data/rules/van-tax-2026-27.md` ("Buying or leasing a van", "Double-cab pickups" and "Budget 2026" sections; `rates.aia`).

---

### Post 7: why a longer van can get a bigger grant

Why can the longer version of a small electric van get £5,000 off, when the shorter one gets £2,500? Gross weight.

The Zero Emission Van Grant takes up to 35% off the price of an eligible new electric van, to a maximum of £2,500 for a small van (under 2,500kg gross vehicle weight) or £5,000 for a large van (2,500kg to 4,250kg).

The Renault Kangoo E-Tech and its twin, the Nissan Townstar EV, sit either side of that line (Renault's figures are for the 45kWh Kangoo):

• Renault Kangoo E-Tech ML19: 2,230kg gross. Renault's price guide shows a £2,500 grant.
• Renault Kangoo E-Tech LL21: 2,510kg gross. £5,000 grant.
• Nissan Townstar EV Van L1: 2,240kg gross. Nissan shows £2,500.
• Nissan Townstar EV Van L2: 2,510kg gross. Nissan shows £5,000.

You don't apply: the dealer takes it off the price. Only listed models qualify, and there are a limited number of grants, so check the exact model and trim before you order. Renault has announced an updated 52kWh Kangoo, so check the figures for the van you're quoted.

https://loadspace-vans.netlify.app/guides/grants-and-tax/

#ElectricVans #SmallBusiness

> Sources: grant rules from `src/data/rules/van-tax-2026-27.md` ("The van grant"; `rates.grant`). Gross weights from `src/data/specs/renault-kangoo.md` and `src/data/specs/nissan-townstar.md`. Grant amounts per version from the price sections of `src/pages/reviews/renault-kangoo.md` and `src/pages/reviews/nissan-townstar.md`.

---

### Post 8: how to read an electric van lease quote

Five things to check on an electric van lease quote before you compare monthly prices:

1. VAT. Check whether each quote includes it, and compare like with like.

2. The grant. The Zero Emission Van Grant applies to leased vans as well as bought ones. Leased vans count against your business's yearly grant limit, not the leasing company's. Ask how the quote reflects it.

3. The total. Add any upfront payment and fees to the monthly payments, then divide by the number of months you'll have the van.

4. The exact van. Battery, body length and options change range and payload. The Kia PV5 Cargo, for example, carries 670 to 800kg depending on version (Kia's target figures, pending homologation).

5. The mileage limit. Make sure it fits your work.

On tax: gov.uk lists vehicle hire charges as an allowable business expense for sole traders and partners. Limited companies should check how van lease rentals are treated with their accountant.

Our free calculator works out the true monthly cost:

https://loadspace-vans.netlify.app/tools/lease-true-cost/

#Leasing #SmallBusiness #ElectricVans

> Sources: grant and leasing from `src/pages/news/zero-emission-van-grant-explained.md` ("Buying or leasing both count"; "Leased vehicles count against you, the end customer, not the leasing company"). PV5 payload range from `src/data/specs/kia-pv5-cargo.md` (versions: 670 to 800kg across all four; note on targets). Tax line from `src/data/rules/van-tax-2026-27.md` ("Buying or leasing a van").

---

### Post 9: Ford E-Transit Custom v Volkswagen e-Transporter

Ford E-Transit Custom or Volkswagen e-Transporter? The two were developed together and share their underpinnings. Here's how they compare on each maker's own UK figures:

Rapid charge, 10 to 80%: 29 minutes in both price lists, at up to 125kW (Ford's website says about 39 minutes for the Ford)
Load volume: 5.8m³ (short wheelbase) or 6.8m³ (long) on both
Highest official range: Ford 230 miles (SWB Trend, 100kW RWD); VW 225.6 miles (SWB, 136PS)
Payload, long wheelbase, 136PS motor: Ford 1,124 to 1,126kg (100kW, RWD); VW 1,151 to 1,156kg. Neither includes the driver.
Cheapest list price, before VAT and the grant: Ford £43,630; VW £42,260
Van warranty: Ford 3 years or 100,000 miles; VW five years or 124,000 miles

Both cover the battery for 8 years or 100,000 miles.

The price lists aren't from the same date (Ford's from 1 June 2026, VW's electric van prices valid from 15 January 2026), so get current quotes for both.

Side by side:
https://loadspace-vans.netlify.app/compare/ford-transit-custom-vs-volkswagen-transporter/

#ElectricVans #FleetManagement

> Sources: `src/data/specs/ford-transit-custom.md` (charging table, load space, range and payload table rows "SWB Trend, 100kW RWD", "LWB Trend, 100kW RWD" and "LWB Limited, 100kW RWD", note on driver, warranty table) and `src/data/specs/volkswagen-transporter.md` (charging table, load space, versions "SWB, 136PS" and "LWB, 136PS", note on driver, battery warranty). Prices, price-list dates, VW van warranty and "developed jointly"/"shares its underpinnings": `src/pages/reviews/ford-transit-custom.md` (price section, battery warranty) and `src/pages/reviews/volkswagen-transporter.md` (summary, price and warranty sections). Ford 100kW = 136PS: Ford spec "Motors and performance" table. Ford's "about 39 minutes" website charge time: `src/pages/reviews/ford-transit-custom.md` (range and charging section).

---

### Post 10: Kia PV5 Cargo v Volkswagen ID. Buzz Cargo

Kia PV5 Cargo or Volkswagen ID. Buzz Cargo? Two electric vans, compared on each maker's own UK figures. Kia says all its figures are targets, pending homologation.

Cheapest list price, before VAT and the grant: Kia £27,355 (L1H1, Standard Range); VW £29,995 (58kWh Commerce)
Load volume: Kia 4.0m³ or 4.4m³; VW 3.9m³
Payload: Kia 670 to 800kg; VW 592 to 690kg (VW's figures allow for a 75kg driver)
Official range: Kia 177 to 258 miles; VW 218 to 277 miles
Braked towing: Kia 750kg or 1,500kg; VW 1,000 to 1,800kg
Van warranty: Kia seven years or 100,000 miles; VW three years or 100,000 miles

Both cover the battery for 8 years or 100,000 miles.

Kia's own pages disagree on the short van's range, so we use its lower figures. And Kia's payloads are higher for its 3-door vans than its 4-door ones, so check which one you're being quoted for.

Side by side:
https://loadspace-vans.netlify.app/compare/kia-pv5-cargo-vs-volkswagen-id-buzz-cargo/

#ElectricVans #SmallBusiness

> Sources: `src/data/specs/kia-pv5-cargo.md` (all four versions; notes on targets, the L1/H1 range disagreement and 3-door/4-door payloads) and `src/data/specs/volkswagen-id-buzz-cargo.md` (all three versions; note on the 75kg driver). Prices and van warranties: `src/pages/reviews/kia-pv5-cargo.md` (price section, "seven-year, 100,000-mile warranty", battery warranty) and `src/pages/reviews/volkswagen-id-buzz-cargo.md` (price section, "three-year, 100,000-mile warranty", battery warranty).

---

## Part 2: YouTube Shorts scripts

Each script runs about 35 to 45 seconds at a steady pace. "Say" is the spoken line; "Show" is the visual.

### Short 1: is the driver in the payload?

- **Hook.** Say: "Two vans can have the same payload figure and still carry different loads. Here's why." Show: presenter to camera, text "PAYLOAD: WHO'S IN THE CAB?"
- **Beat 1.** Say: "Citroën's ë-Dispatch M panel van is rated at 1,210 kilos. Citroën says the driver's weight comes out of that." Show: screenshot of the ë-Dispatch spec table, payload row highlighted.
- **Beat 2.** Say: "Volkswagen's ID. Buzz Cargo is rated at up to 690 kilos, and VW's weights already include 75 kilos for the driver." Show: ID. Buzz Cargo spec table.
- **Beat 3.** Say: "Farizon lists its SV van's kerb weights with two occupants, so its payloads appear to allow for two people already." Show: on-screen text "Farizon SV: kerb weight 'with two occupants'".
- **Beat 4.** Say: "And options add weight, so they cut payload too." Show: text "OPTIONS = LESS PAYLOAD".
- **Close.** Say: "Ask the dealer for the plated payload of your exact van. The small print for each van is on our spec pages at Van Electric." Show: site URL loadspace-vans.netlify.app/vans

> Sources: `src/data/specs/citroen-dispatch.md` (M panel van payload; note on driver), `src/data/specs/volkswagen-id-buzz-cargo.md` (79kWh payload "676 to 690kg"; note on 75kg driver; note "Options and accessories reduce payload"), `src/data/specs/farizon-sv.md` (note on two occupants).

---

### Short 2: where does the rapid charge clock start?

- **Hook.** Say: "Thirty minutes to charge. But from what?" Show: text "30 MINUTES... FROM WHAT?"
- **Beat 1.** Say: "Citroën says the ë-Berlingo goes from 0 to 80% in 30 minutes." Show: text "ë-Berlingo: 0 to 80%, 30 min".
- **Beat 2.** Say: "Ford's price list quotes 10 to 80% for the E-Transit Custom: 29 minutes." Show: text "E-Transit Custom: 10 to 80%, 29 min (price list)".
- **Beat 3.** Say: "Nissan's Townstar starts at 15%. Renault's Kangoo starts at 20%. And they're twins." Show: text "Townstar: 15 to 80%, 37 min" and "Kangoo: 20 to 80%, 40 min".
- **Beat 4.** Say: "Batteries differ in size too, so a longer time doesn't always mean a slower charger. Before you compare, check the start, the finish and the charger power." Show: three ticks on screen: START, FINISH, kW.
- **Close.** Say: "We list each maker's figure exactly as they publish it. Find them on Van Electric." Show: screenshot of a spec table charging row, then the URL.

> Sources: `src/data/specs/citroen-berlingo.md` (Rapid charge, 0 to 80%: 30 minutes), `src/data/specs/ford-transit-custom.md` (10 to 80%: 29 minutes), `src/data/specs/nissan-townstar.md` (15 to 80%: 37 minutes), `src/data/specs/renault-kangoo.md` (20 to 80%: 40 minutes). Twins: `src/pages/reviews/nissan-townstar.md`.

---

### Short 3: ë-Dispatch v E-Expert, spot the difference

- **Hook.** Say: "Citroën ë-Dispatch or Peugeot E-Expert? On paper, the numbers match." Show: split screen of both spec tables.
- **Beat 1.** Say: "Both: 194 to 230 miles of official range, depending on options." Show: text "194 to 230 miles, both".
- **Beat 2.** Say: "Both: 1,210 kilos of payload in the M panel van, and 5 to 80% in 45 minutes on a rapid charger." Show: text "1,210kg / 45 min, both".
- **Beat 3.** Say: "Both start at £41,460, excluding VAT and before the grant." Show: text "£41,460 + VAT, both".
- **Beat 4.** Say: "What differs is the trims, the name of the folding seat and the dealer. And Toyota's version adds 12 months of warranty with every service, for up to 10 years." Show: text "Trims, kit, dealer, warranty".
- **Close.** Say: "See them side by side on Van Electric." Show: URL loadspace-vans.netlify.app/compare/citroen-dispatch-vs-peugeot-expert/

> Sources: `src/data/specs/citroen-dispatch.md` and `src/data/specs/peugeot-expert.md` (M panel van range, payload; rapidTime "45 minutes (5 to 80%)"; notes on the EXTENSO and Moduwork seats). Prices: price sections of `src/pages/reviews/citroen-dispatch.md` and `src/pages/reviews/peugeot-expert.md`. Toyota warranty: `src/pages/reviews/citroen-dispatch.md` ("the Toyota costs slightly more but adds 12 months of warranty with every service, for up to 10 years").

---

### Short 4: Kangoo or Townstar?

- **Hook.** Say: "Same small electric van, two badges, two different warranties." Show: text "RENAULT KANGOO = NISSAN TOWNSTAR".
- **Beat 1.** Say: "Nissan's Townstar EV is the same van as Renault's Kangoo E-Tech underneath, and both are listed with a 45 kilowatt-hour battery. Renault has announced a bigger-battery Kangoo, so check which one you're quoted." Show: text "Same van, 45kWh (check your quote)".
- **Beat 2.** Say: "Renault's van warranty is three years. Nissan's is five years or 100,000 miles." Show: text "Renault 3 years / Nissan 5 years".
- **Beat 3.** Say: "The battery's covered for 8 years or 100,000 miles on both." Show: text "Battery: 8 years / 100,000 miles, both".
- **Beat 4.** Say: "And on both, the long van weighs 2,510 kilos fully loaded, just over the line for the large-van grant. Renault and Nissan both show £5,000 off the long van, against £2,500 off the short one." Show: text "Long van: 2,510kg, £5,000 grant / short van: £2,500".
- **Close.** Say: "Get a quote for both badges. Our reviews are on Van Electric." Show: URL loadspace-vans.netlify.app/reviews/nissan-townstar/

> Sources: `src/pages/reviews/nissan-townstar.md` (same van as the Kangoo; 45kWh battery; five-year, 100,000-mile van warranty; £2,500 grant on the L1, £5,000 on the L2), `src/pages/reviews/renault-kangoo.md` (three-year van warranty; battery 8 years or 100,000 miles; £2,500 grant on the ML19, £5,000 on the LL21), `src/data/specs/renault-kangoo.md` and `src/data/specs/nissan-townstar.md` (45kWh; LL21 and Van L2 gross 2,510kg; battery warranty). Grant bands: `src/data/rules/van-tax-2026-27.md`.

---

### Short 5: Master or Interstar?

- **Hook.** Say: "Renault Master or Nissan Interstar? It's the same big electric van." Show: text "SAME VAN, TWO BADGES".
- **Beat 1.** Say: "Renault's price guide starts the 3.5-tonne L2H2 Master E-Tech panel van at £42,500 before VAT." Show: text "Renault: £42,500 + VAT".
- **Beat 2.** Say: "Nissan's price list starts the 3.5-tonne L2H2 Interstar-e at £43,590 before VAT and the grant." Show: text "Nissan: £43,590 + VAT".
- **Beat 3.** Say: "But Nissan gives you a five-year, 100,000-mile van warranty, with five years of roadside assistance. Renault gives three years." Show: text "Warranty: Nissan 5 years / Renault 3 years".
- **Beat 4.** Say: "The battery's covered for 8 years or 100,000 miles on both." Show: text "Battery cover: same".
- **Close.** Say: "Price up both badges for the same body and weight. Our reviews are on Van Electric." Show: URL loadspace-vans.netlify.app/reviews/nissan-interstar/

> Sources: `src/pages/reviews/renault-master.md` (price section: £42,500 before VAT, MM35 3.5-tonne L2H2, price guide valid from 1 September 2026; three-year van warranty; eight-year battery warranty) and `src/pages/reviews/nissan-interstar.md` (£43,590 before VAT and the grant, 3.5-tonne L2H2 Acenta, price list from 1 July 2026; five-year, 100,000-mile van warranty with five years of roadside assistance; battery 8 years or 100,000 miles on both badges).

---

### Short 6: the company van tax that's zero

- **Hook.** Say: "Take a diesel company van home and you could pay tax on it. Take an electric one home and you won't pay this charge." Show: presenter to camera.
- **Beat 1.** Say: "For 2026/27, the van benefit charge for a diesel or petrol van is £4,170, taxed at the driver's own rate." Show: text "Diesel van benefit: £4,170".
- **Beat 2.** Say: "If the business pays for private fuel, add a fuel benefit charge of £798." Show: text "+ £798 fuel benefit".
- **Beat 3.** Say: "For a zero-emission van, both are nil." Show: text "Electric: £0".
- **Beat 4.** Say: "And there's no charge if the van is mainly for business travel, is used privately only for commuting, and the terms of use forbid other private use." Show: text "Business use + commuting only = no charge".
- **Close.** Say: "Check your own position with your accountant, and try our free electric versus diesel calculator on Van Electric." Show: URL loadspace-vans.netlify.app/tools/electric-vs-diesel/

> Sources: `src/data/rules/van-tax-2026-27.md` ("Company vans: the driver's tax"; `rates.vanBenefit`, `rates.vanFuelBenefit`). If you shorten beat 4, keep all three conditions.

---

### Short 7: buying a van? The tax relief changed

- **Hook.** Say: "If you think electric vans still get a special tax break when you buy one, that changed in April 2025." Show: text "100% ALLOWANCE FOR ELECTRIC VANS: ENDED".
- **Beat 1.** Say: "The 100% first-year allowance for zero-emission goods vehicles only covered vans bought before April 2025." Show: text "Only before April 2025".
- **Beat 2.** Say: "Now electric and diesel vans get the same relief. The Annual Investment Allowance lets you deduct the full cost, up to £1 million a year, and used vans can qualify." Show: text "AIA: up to £1m a year".
- **Beat 3.** Say: "There's also a 40% first-year allowance on new and unused vans bought on or after 1 January 2026." Show: text "40% first-year allowance".
- **Beat 4.** Say: "That's due to rise to 50% from 1 January 2027, if the Finance Bill becomes law." Show: text "50% from Jan 2027 (not law yet)".
- **Close.** Say: "Ask your accountant, then try our lease or buy calculator on Van Electric." Show: URL loadspace-vans.netlify.app/tools/lease-or-buy/

> Sources: `src/data/rules/van-tax-2026-27.md` ("Buying or leasing a van" and "Budget 2026: changes not yet in force"; `rates.aia`).

---

### Short 8: 3.5 tonnes or 4.25?

- **Hook.** Say: "Same big electric van, two weights. One carries more than twice the payload of the other." Show: text "730kg v 1,480kg".
- **Beat 1.** Say: "Citroën's ë-Relay L3H2 at 3,500 kilos gross: payload 730 kilos." Show: ë-Relay spec table, 3,500kg row.
- **Beat 2.** Say: "The same body at 4,250 kilos: 1,480 kilos." Show: 4,250kg row highlighted.
- **Beat 3.** Say: "And the driver's weight counts against both figures. Citroën's own weights leave 655 kilos for the 3,500 kilo van once you count the driver." Show: text "3,500kg van: 655kg with driver".
- **Beat 4.** Say: "The catch: the 4,250 kilo versions are legally limited to 56 miles an hour and must have a tachograph." Show: text "4,250kg: 56mph limit + tachograph".
- **Close.** Say: "All five versions are on our ë-Relay spec page at Van Electric." Show: URL loadspace-vans.netlify.app/vans/citroen-relay/

> Sources: `src/data/specs/citroen-relay.md` (versions "L3H2, 3,500kg" 730kg and "L3H2, 4,250kg" 1,480kg; notes on the driver, the 655kg figure from mass in running order, and the 56mph limit and tachograph). "More than twice the payload": 730kg x 2 = 1,460kg, which is less than 1,480kg.

---

### Short 9: four range figures to read carefully

- **Hook.** Say: "Not every range figure is a final, tested WLTP figure. Here are four to watch." Show: text "RANGE: READ THE SMALL PRINT".
- **Beat 1.** Say: "Kia says all its PV5 Cargo figures are targets, pending homologation." Show: text "Kia PV5: targets".
- **Beat 2.** Say: "Mercedes says the eSprinter's ranges are preliminary, measured in-house and not yet certified." Show: text "eSprinter: preliminary".
- **Beat 3.** Say: "Citroën says the ë-Relay isn't subject to WLTP testing, so it works out the range using the WLTP method instead." Show: text "ë-Relay: calculated, not tested".
- **Beat 4.** Say: "And Nissan's July price list shows every Townstar EV range as still to be confirmed." Show: text "Townstar: to be confirmed".
- **Close.** Say: "We flag every one of these on our spec pages at Van Electric." Show: URL loadspace-vans.netlify.app/vans/

> Sources: notes in `src/data/specs/kia-pv5-cargo.md`, `src/data/specs/mercedes-benz-sprinter.md`, `src/data/specs/citroen-relay.md` and `src/data/specs/nissan-townstar.md`.

---

### Short 10: a lease quote checklist

- **Hook.** Say: "Comparing van lease quotes? Don't start with the monthly price." Show: presenter to camera, text "LEASE QUOTE CHECKLIST".
- **Beat 1.** Say: "One: is VAT in or out? Compare like with like." Show: text "1. VAT".
- **Beat 2.** Say: "Two: the electric van grant counts on leased vans too, and it counts against your business's yearly limit, not the leasing company's." Show: text "2. Grant".
- **Beat 3.** Say: "Three: add the upfront payment and fees to the monthly payments, and divide by the months you'll have the van." Show: text "3. Total cost".
- **Beat 4.** Say: "Four: check the exact battery and body. They change the range and the payload." Show: text "4. Exact van".
- **Close.** Say: "Our free lease true cost calculator does the sum. It's on Van Electric." Show: screenshot of the lease true cost tool, then URL loadspace-vans.netlify.app/tools/lease-true-cost/

> Sources: `src/pages/news/zero-emission-van-grant-explained.md` ("Buying or leasing both count"; "Leased vehicles count against you, the end customer, not the leasing company"). No other figures.

---

### Short 11: the Ford Transit City in four numbers

- **Hook.** Say: "Ford's Transit City is electric only. Four numbers to know." Show: text "FORD TRANSIT CITY".
- **Beat 1.** Say: "Price: from £29,000 before VAT and before the grant." Show: text "£29,000 + VAT".
- **Beat 2.** Say: "Range: 158 miles official for the short van, 139 for the long high roof." Show: text "158 / 139 miles".
- **Beat 3.** Say: "Payload: 1,085 or 1,275 kilos, and Ford's figures don't include the driver." Show: text "1,085 / 1,275kg (no driver)".
- **Beat 4.** Say: "Rapid charging: 10 to 80% in 33 minutes, at up to 87 kilowatts. One catch: Van Reviewer reports it can't tow." Show: text "33 min / can't tow (reported)".
- **Close.** Say: "We haven't driven one yet. The full figures are on Van Electric." Show: URL loadspace-vans.netlify.app/vans/ford-transit-city/

> Sources: `src/data/specs/ford-transit-city.md` (versions: 158 and 139 miles, 1,085kg and 1,275kg; note on driver; rapid 33 minutes 10 to 80%, up to 87kW). Price, towing report and "We haven't driven one yet": `src/pages/news/ford-transit-city-on-sale.md`.

---

### Short 12: Transit Custom or e-Transporter?

- **Hook.** Say: "Ford and Volkswagen developed these two medium vans together. So what's different?" Show: text "E-TRANSIT CUSTOM v e-TRANSPORTER".
- **Beat 1.** Say: "On their price lists, the same rapid charge: 10 to 80% in 29 minutes, at up to 125 kilowatts. Ford's website says about 39 minutes for the Ford, so allow for that." Show: text "29 min on paper, both (Ford website: about 39)".
- **Beat 2.** Say: "The same load volume: 5.8 cubic metres short, 6.8 long." Show: text "5.8 / 6.8m³, both".
- **Beat 3.** Say: "Highest official range: Ford 230 miles, VW 225.6. Long van with the entry motor: Ford carries up to 1,126 kilos, VW up to 1,156, and neither figure includes the driver." Show: text "230 v 225.6 miles" then "1,126kg v 1,156kg (no driver)".
- **Beat 4.** Say: "The big difference is the warranty: Ford, 3 years or 100,000 miles on the van. VW, five years or 124,000 miles." Show: text "3 years v 5 years".
- **Close.** Say: "See them side by side on Van Electric." Show: URL loadspace-vans.netlify.app/compare/ford-transit-custom-vs-volkswagen-transporter/

> Sources: `src/data/specs/ford-transit-custom.md` (charging table; load volume; "SWB Trend, 100kW RWD" 230 miles; vehicle warranty) and `src/data/specs/volkswagen-transporter.md` (charging table; load volume; "SWB, 136PS" 224.9 to 225.6 miles). Ford's "about 39 minutes" website figure: `src/pages/reviews/ford-transit-custom.md` (range and charging section). LWB payloads: Ford table rows "LWB Trend, 100kW RWD" (1,124kg) and "LWB Limited, 100kW RWD" (1,126kg), Ford note on driver; VW version "LWB, 136PS" (1,151 to 1,156kg), VW note on driver. VW van warranty and joint development: `src/pages/reviews/volkswagen-transporter.md`.

---

## Part 3: trade press pitch

### The email

**Subject:** Data offer: how electric van payloads and charge times are really quoted

Hello,

Van Electric is an independent UK site that keeps fact-checked spec tables for electric vans, taken from each maker's own documents. Comparing them side by side turned up two stories your readers may find useful:

1. **The 3.5-tonne payload squeeze.** The Citroën ë-Relay L3H2 carries 730kg at 3,500kg gross and 1,480kg at 4,250kg, but the heavier version is limited to 56mph and needs a tachograph. And makers measure payload differently: some take the driver out of the figure, VW's ID. Buzz Cargo figures already allow 75kg for the driver, Farizon lists kerb weights "with two occupants" and Ford's E-Transit Courier price list doesn't say.

2. **Badge twins: same van, different deal.** Nissan gives the Interstar-e and Townstar EV a five-year van warranty; Renault gives their twins, the Master and Kangoo, three. VW covers the e-Transporter for five years or 124,000 miles; Ford covers the E-Transit Custom for 3 years or 100,000 miles.

Rapid charge times aren't like for like either: across eight vans, makers' published times start from five different charge levels, from 0% to 20%.

The one-page data summary is below. It covers 13 vans, and I can send it as a spreadsheet with the source document for each figure.

https://loadspace-vans.netlify.app/vans/

[YOUR NAME]
Van Electric

> Word count: about 220 words including the subject line. Sources: `src/data/specs/citroen-relay.md`, `volkswagen-id-buzz-cargo.md`, `farizon-sv.md`, `ford-transit-courier.md` (payload notes); `src/pages/reviews/nissan-interstar.md`, `nissan-townstar.md`, `renault-master.md`, `renault-kangoo.md`, `volkswagen-transporter.md`, `src/data/specs/ford-transit-custom.md` (warranties); charging rows as in LinkedIn post 2. Don't send maker press photos with the pitch. Find each title's news desk contact on its website (see the list in `press-pitch.md`).

### One-page data summary

**Electric vans: official range, payload and rapid charge time, as each maker publishes them**

| Van and version | Official range | Payload | Rapid charge |
|---|---|---|---|
| Citroën ë-Berlingo, M panel van | 180 to 219 miles (a) | 759kg (b) | 30 minutes, 0 to 80%, up to 100kW |
| Peugeot E-Partner, M panel van | 180 to 219 miles (a) | 759kg (b) | 30 minutes, 0 to 80%, up to 100kW |
| Renault Kangoo E-Tech, LL21 panel van | Up to 190 miles (c) | 764kg (c) | 40 minutes, 20 to 80%, up to 80kW |
| Nissan Townstar EV, Van L1 | Up to 178 miles (d) | 502kg (d) | 37 minutes, 15 to 80%, up to 80kW |
| Ford Transit City, SWB low-roof van | 158 miles (e) | 1,085kg (e) | 33 minutes, 10 to 80%, up to 87kW |
| Ford E-Transit Custom, SWB Trend, 100kW RWD | 230 miles | 1,046kg (f) | 29 minutes, 10 to 80%, up to 125kW (l) |
| Volkswagen e-Transporter, SWB, 136PS | 224.9 to 225.6 miles | 1,071 to 1,076kg (f) | 29 minutes, 10 to 80%, up to 125kW |
| Citroën ë-Dispatch, M panel van | 194 to 230 miles (g) | 1,210kg (g) | 45 minutes, 5 to 80%, 100kW |
| Peugeot E-Expert, M panel van | 194 to 230 miles (g) | 1,210kg (g) | 45 minutes, 5 to 80%, 100kW |
| Kia PV5 Cargo, L2/H1, 71.2kWh | 258 miles (h) | 670 to 695kg (h) | Under 30 minutes, 10 to 80%, on a 150kW charger (h) |
| Farizon SV, L1 H1 | Up to 247 miles (i) | 1,265 to 1,350kg (i) | 36 minutes, 20 to 80%, depending on model (i) |
| Mercedes-Benz eSprinter, L2, 81kWh, 3,500kg | 165 to 167 miles (j) | 644 to 651kg (j) | 34 minutes, 10 to 80%, up to 115kW |
| Mercedes-Benz eSprinter, L2, 81kWh, 4,150kg | 183 to 185 miles (j) | 1,278kg (j) | 34 minutes, 10 to 80%, up to 115kW |
| Citroën ë-Relay, L3H2, 3,500kg | 235 miles (k) | 730kg (k) | 55 minutes, 5 to 80%, on a 150kW rapid charger |
| Citroën ë-Relay, L3H2, 4,250kg | 263 miles (k) | 1,480kg (k) | 55 minutes, 5 to 80%, on a 150kW rapid charger |

Source: makers' own UK price/spec guides, checked by Van Electric (Kia and Farizon figures from their UK specification web pages).

**Notes**

- (a) Citroën and Peugeot give the official (WLTP) range as 180 to 219 miles for every version, depending on specification. Their technical pages also give a single figure of 213 miles without saying which specification it applies to.
- (b) Maximum indicative payload. The driver's weight counts towards it, and it doesn't allow for options.
- (c) Renault quotes a single official (WLTP) range for the Kangoo E-Tech, not split by version. Figures are for the 45kWh van in Renault UK's July 2026 brochure. The payload is Renault's maximum; the optional Rough Terrain Pack cuts it by around 250kg.
- (d) Nissan quotes 178 miles for the Van L1 Acenta only, and its July 2026 price list shows every version's range as still to be confirmed. Nissan's payload includes the driver's weight, so the load you can carry is a little less.
- (e) Official WLTP range, tested at 23°C with no climate control. Ford's payloads don't include the driver.
- (f) The driver's weight isn't included, so it comes out of the payload. Options reduce payload.
- (g) The WLTP table gives 194 to 230 miles, depending on options; Citroën's and Peugeot's technical pages quote 219 miles. Maximum indicative payload, worked out without a driver: on mass in running order, which includes the driver, the M panel van carries 1,135kg.
- (h) Kia says all figures are expected targets, pending further development and homologation. The higher payload is for the 3-door van, the lower for the 4-door.
- (i) Farizon gives one best-case range for the whole SV line-up. Payloads appear to allow for two people in the cab (kerb weights "with two occupants"). Farizon's warranty page gives 18 minutes for the rapid charge, its product page 36; it doesn't give the charger power.
- (j) Mercedes says the ranges are preliminary values, measured in-house using the WLTP method and not yet certified. Payload depends on the options fitted.
- (k) Citroën says all ë-Relay versions are homologated as heavy vehicles and aren't subject to WLTP testing, so it calculates the range using the WLTP method instead. The driver's weight counts against the payload; on mass in running order the 3,500kg van carries 655kg. The 4,250kg version is legally limited to 56mph and must have a tachograph.
- (l) Ford's price list figure. Ford's website gives about 39 minutes for the same 10 to 80% charge.

Rapid charge times start and finish at different charge levels, as each maker states them, so they are not directly comparable.

> Sources for every row: `src/data/specs/citroen-berlingo.md`, `peugeot-partner.md`, `renault-kangoo.md`, `nissan-townstar.md`, `ford-transit-city.md`, `ford-transit-custom.md` (table row "SWB Trend, 100kW RWD"), `volkswagen-transporter.md`, `citroen-dispatch.md`, `peugeot-expert.md`, `kia-pv5-cargo.md`, `farizon-sv.md`, `mercedes-benz-sprinter.md`, `citroen-relay.md`. Range and payload from each file's `versions` or main table; rapid times from its charging table or `shared.rapidTime`; footnotes from its `notes`. Note (l): `src/pages/reviews/ford-transit-custom.md` (range and charging section).

### Two angles to offer

1. **"The 3.5-tonne payload squeeze."** Heavier-rated versions of the same electric van can carry far more, and the ë-Relay's come with strings attached. ë-Relay L3H2: 730kg at 3,500kg gross, 1,480kg at 4,250kg (56mph limit and tachograph). eSprinter L2 81kWh: 644 to 651kg at 3,500kg, 1,278kg at 4,150kg. Add the hidden variable: whether the driver is in the payload figure (see notes b, d, e, f, g, i and k). Only use the rows and notes in the table above.
   > Sources: `src/data/specs/citroen-relay.md`, `src/data/specs/mercedes-benz-sprinter.md`, plus the payload notes listed in the table.
2. **"Badge twins: same van, different deal."** Kangoo and Townstar, Master and Interstar-e, E-Transit Custom and e-Transporter: same underpinnings, different van warranties (three years against five). Prices: Renault Master E-Tech 3.5-tonne L2H2 from £42,500 before VAT (Renault price guide, 1 September 2026); Nissan Interstar-e 3.5-tonne L2H2 from £43,590 before VAT and the grant (Nissan price list, 1 July 2026). The ë-Dispatch and E-Expert both start at £41,460 excluding VAT, before the grant (both price lists dated 8 October 2026), so the difference there is trims, kit and dealer.
   > Sources: `src/pages/reviews/renault-kangoo.md`, `nissan-townstar.md`, `renault-master.md`, `nissan-interstar.md`, `volkswagen-transporter.md`, `ford-transit-custom.md`, `citroen-dispatch.md`, `peugeot-expert.md` (warranty and price sections); twins as in LinkedIn post 4.

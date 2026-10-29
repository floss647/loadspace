# Loadspace LinkedIn posts: first month

Eight posts for the founder's personal profile, two a week for four weeks.

**Links:** every link below uses https://loadspace-vans.netlify.app/. When the custom domain goes live, swap the domain before posting (the paths stay the same).

**Before posting each one:**
- Re-check any news figure against the live story. The ZEV mandate decision is due by the end of 2026, SMMT publishes new van figures early each month, and grant rules can change.
- Paste the post text only (not the "Facts used" note).
- Images: don't attach maker press photos. Their terms allow editorial use only, not promotion (see NEWSROOM.md). A screenshot of our own reliability table or calculator is fine.
- Put the link in the post as written. If you'd rather put it in the first comment, change "Link below" lines accordingly.

**How to read the reliability figures** (applies to posts 3, 6 and 8): every figure is an *initial MOT failure rate*: the share of MOT tests (retests left out) where the vehicle failed, or only passed after faults were fixed during the test (PRS). Source: DVSA anonymised MOT tests and results, file "MOT testing data results (2024)", processed by `scripts/mot_reliability.py` into `src/data/reliability.json`. Classes 4 and 7 only. Age = whole years from first use to the test date. Figures are only published from at least 300 tests (`minTests: 300`). "All vans" (`allVansByAge`) is pooled: every initial test of every van and pickup model Loadspace tracks, combined (so weighted by number of tests, and including models too small to publish separately). It is not an average of the model figures, and not every van in the UK. Different models appear in different age bands, so the bands are not a like-for-like set. The data is almost all diesel, and some models include passenger versions or motorhome conversions sold under the same name. Each model's figure covers every generation sold under that name.

---

## Week 1

### Post 1 (Tuesday 3 November): why Loadspace exists

Advice on electric vans should come from someone who isn't trying to sell you one.

That's why I built Loadspace.

[ADD YOUR OWN LINE: why you started it, in your own words]

It's an independent UK site, in plain English, for sole traders, small businesses and fleet managers weighing up electric vans and trucks.

What's on it:
• Buying pages for electric vans, pickups and trucks, plus guides to buying used
• Free calculators: electric vs diesel, fleet switch, lease vs buy, lease true cost, and a van check by registration
• MOT reliability rankings built from DVSA's own data
• News where every figure is checked

That matters most to me. Every number in a story is backed by a word-for-word quote from its source, or by a calculation from sourced figures that we show. A script confirms each quote is on that page, a separate fact-checker re-reads every source, and an editor signs it off. If we can't open and read the source, the fact doesn't go in. If we get something wrong, we correct it with a dated note.

We don't sell vans or trucks, and rankings are never for sale.

[ADD YOUR OWN LINE: who you'd like to hear from]

https://loadspace-vans.netlify.app/

#ElectricVans #FleetManagement

> **Facts used**
> - No figures in this post.
> - Site sections and tools listed: `src/pages/` (vans, trucks, used-electric-vans, tools: electric-vs-diesel, fleet-cost, lease-or-buy, lease-true-cost, van-check; reliability).
> - "backed by a word-for-word quote ... or by a calculation": `NEWSROOM.md` (facts list with exact quotes; conversions and sums go in as a `calc:` showing the working).
> - The four checks (sourced quote, automatic check, independent fact-check, editor approval), "If you can't open and read the page, the fact doesn't go in" and dated corrections: `NEWSROOM.md`.
> - "We don't sell vans or trucks" and "Rankings and reviews are never for sale": `src/pages/about.astro`.
> - Placeholders: the founder must write both [ADD YOUR OWN LINE] parts. Don't post with them in.

---

### Post 2 (Thursday 5 November): ZEV mandate review and SMMT September figures

A record month for electric vans. Still less than half the target.

According to SMMT, 4,832 battery electric vans were registered in September, the best month ever and up 13.4% on last September. That's 9.6% of the market. Between January and September the share was 10.8%. The zero emission vehicle mandate requires 24% this year.

Under current rules, that target rises to 70% in 2030. The government's review of the mandate closed on 23 October. For vans, its consultation sets out options to cut the 2030 target to 60%, 50% or 40%, or keep 70% and extend the flexibilities makers can use. Every option still reaches 100% by 2035.

No decision yet. The government says it aims to respond by the end of 2026.

If you're buying: SMMT says substantial discounts helped drive September's record. If the target is cut, the pressure behind those discounts could ease.

The full story, and what each option means:
https://loadspace-vans.netlify.app/news/zev-mandate-van-consultation-closes/

#ElectricVans #ZEVMandate #Fleet

> **Facts used** (all from `src/pages/news/record-september-electric-van-sales-2026.md` and `src/pages/news/zev-mandate-van-consultation-closes.md`, which hold the exact quotes)
> - "4,832", "best month ever", "13.4%": SMMT, https://www.smmt.co.uk/septembers-record-electric-van-uptake-still-less-than-half-mandated/ ("rising 13.4% to reach a record 4,832 units"; "Best ever month for new battery electric van uptake").
> - "9.6%" and "10.8%": same SMMT page ("with a market share of 9.6% in September and 10.8% in the year to date"). Note: SMMT's 9.6% is 4,832 out of 50,358, a total that includes heavier electric vans of 3.5 to 4.25 tonnes (calc in the September story).
> - "24% this year": same SMMT page ("the 24% target set by the Zero Emission Vehicle Mandate"); also the consultation PDF.
> - "70% in 2030": GOV.UK consultation PDF, https://assets.publishing.service.gov.uk/media/6ab52a53734e2435f202f032/zev-mandate-review-consultation.pdf ("rising steadily to 70% of vans by 2030").
> - "closed on 23 October": same PDF ("will run for 10 weeks until 23 October 2026").
> - "60%, 50% or 40%" and "keep 70% and extend the flexibilities": same PDF ("reaching 60% ZEV sales in 2030"; "reach 50% ZEV sales in 2030"; "reach 40% ZEV sales in 2030"; "extends key flexibilities such as borrowing, banking and CO2 conversion to 2034").
> - "100% by 2035": same PDF ("reaching 60% ZEV sales in 2030 and rising to 100% in 2035"). The story states every option reaches 100% by 2035.
> - "respond by the end of 2026": Budget 2026, https://www.gov.uk/government/publications/budget-2026-document/budget-2026-html ("The government aims to publish a shared response to the consultation by the end of 2026").
> - "substantial discounts helped drive September's record": SMMT page above, Mike Hawes ("substantial discounts helping operators make the switch").
> - Re-check before posting: SMMT's October figures are usually published in the first week of November, and the government response may land.

---

## Week 2

### Post 3 (Tuesday 10 November): which vans fail their MOT least

Which vans are least likely to fail their MOT at five or six years old?

We ranked 34 van and pickup models using DVSA's MOT results for 2024, comparing every model at the same age so older vans don't skew it.

Lowest initial failure rates at 5–6 years:
• Mitsubishi L200: 18.2%
• Volkswagen Amarok: 19.2% (the previous, VW-built generation)
• Toyota Hilux: 21.3%
• Volkswagen Transporter: 21.7%, the lowest of the non-pickups (the T6/T6.1 generation, including passenger and camper versions)

These are vans from around 2018, so for some models that means an earlier generation than today's. Across all the models we track, combined, 28.1% of initial tests at that age were fails. Highest: KGM Musso (38.4%, a small sample), Renault Kangoo (37.1%) and Vauxhall Movano (37.0%).

Two caveats. Mileage matters: 5–6 year old L200s averaged 65,223 miles, against 83,815 across all the models we track, combined. And the data is almost all diesel, because few electric vans are old enough yet. It shows how each model's body, brakes, suspension and steering hold up, not its battery.

Full table:
https://loadspace-vans.netlify.app/reliability/

#Vans #MOT #FleetManagement

> **Facts used** (all `src/data/reliability.json`; initial MOT failure rate, retests excluded, fail = failed or passed after faults fixed at the test; age 5–6 years since first use; DVSA "MOT testing data results (2024)"; classes 4 and 7; only figures from at least 300 tests, `minTests: 300`)
> - "34 van and pickup models": count of models in `models` with a `byAge["5-6"]` entry (34 of 39). These are the ranked rows on `/reliability/`.
> - "Mitsubishi L200: 18.2%": `models.mitsubishi-l200.byAge.5-6.failRate` = 18.2 (16,065 tests).
> - "Volkswagen Amarok: 19.2%": `models.volkswagen-amarok.byAge.5-6.failRate` = 19.2 (5,186 tests). "Previous, VW-built generation": 5–6 year olds in 2024 tests were first used about 2017–2019, before the current Ford Ranger-based Amarok (`TWINS["ford-vw-pickup"]` in `src/data/vans.js` says the current one is built by Ford). Generation dating is background knowledge, not from the repo.
> - "Toyota Hilux: 21.3%": `models.toyota-hilux.byAge.5-6.failRate` = 21.3 (10,687 tests).
> - "Volkswagen Transporter: 21.7%": `models.volkswagen-transporter.byAge.5-6.failRate` = 21.7 (42,644 tests). `includesPassengerVersions: true`, `includesMotorhomes: true`. Lowest of the non-pickup models. "T6/T6.1 generation": first used about 2017–2019, before the latest Ford-built Transporter (`TWINS["ford-vw-medium"]`). Generation names are background knowledge, not from the repo.
> - "vans from around 2018": age 5–6 at a 2024 test means first use roughly 2017–2019 (age = whole years from first use to test date, `scripts/mot_reliability.py`).
> - "28.1%": `allVansByAge.5-6.failRate` = 28.1 (620,587 tests). Pooled across all initial tests of the models Loadspace tracks at 5–6 years, combined, not an average of the model figures.
> - "KGM Musso (38.4%, a small sample)": `models.kgm-musso.byAge.5-6.failRate` = 38.4 (876 tests).
> - "Renault Kangoo (37.1%)": `models.renault-kangoo.byAge.5-6.failRate` = 37.1 (5,011 tests). Includes passenger versions.
> - "Vauxhall Movano (37.0%)": `models.vauxhall-movano.byAge.5-6.failRate` = 37.0 (7,740 tests).
> - "65,223 miles": `models.mitsubishi-l200.byAge.5-6.avgMiles` = 65223.
> - "83,815": `allVansByAge.5-6.avgMiles` = 83815 (pooled, as above).
> - "almost all diesel" and "body, brakes, suspension and steering": wording follows `src/pages/reliability.astro` notice. Electric first tests are a few hundred to a few thousand per model in `byFuel.Electric`, against tens or hundreds of thousands for diesel.

---

### Post 4 (Friday 13 November): Overloaded, the weekly column

Every Friday, we publish a column about vans. The first one featured a Polo mint so old it may now be load-bearing.

It's called Overloaded. It's grumpy, it wanders off down side roads, and it always sides with the person in the driver's seat with a pasty on the dashboard. Think strong opinions, daft tangents and potholes deep enough to have their own weather.

There's a serious bit too. Every real fact in it goes through the same checks as our news. The jokes are allowed to be ridiculous. The numbers aren't.

If you spend your working day in a van, or managing people who do, it's written for your tea break.

https://loadspace-vans.netlify.app/blog/

#Vans #Fleet

> **Facts used**
> - No figures. "Every Friday" and "same checks as our news": `NEWSROOM.md` (Overloaded section: "It's out every Friday at `/blog/`, and every column goes through the same four checks as the news").
> - "grumpy, it wanders off down side roads, and it always sides with the person in the driver's seat with a pasty on the dashboard" and "potholes deep enough to have their own weather": lines from the first column, `src/pages/blog/overloaded-2026-10-30-van-family-car.md`.
> - "Polo mint so old it may now be load-bearing": the running joke in that first column ("one Polo mint of unknown age ... It may be load-bearing"). A joke, not a factual claim.

---

## Week 3

### Post 5 (Tuesday 17 November): the Zero Emission Van Grant

If you're buying a new electric van, you don't apply for the government grant. The dealer does it for you.

Since April 2026 it's been called the Zero Emission Van Grant, an updated version of the old Plug-in Van Grant. According to GOV.UK:

• Up to £2,500 off some small electric vans (under 2,500kg gross vehicle weight)
• Up to £5,000 off some large ones (2,500kg to 4,250kg)
• The seller takes it off the purchase price. There's no paperwork for you.
• Each business, organisation or individual can get up to 1,500 van grants a financial year, and leased vans count against you, not the leasing company

The catches: new vans only, at first registration. The exact model and trim must be on the approved list. The dealer has to put your order on the government's grant portal before the van is registered, and the grant isn't guaranteed until the vehicle has been validated through the portal.

Some electric trucks over 26 tonnes can get up to £81,000, or 40% of the cost if that's lower (less for large firms in Northern Ireland).

Plain-English guide:
https://loadspace-vans.netlify.app/news/zero-emission-van-grant-explained/

#ElectricVans #SmallBusiness #Fleet

> **Facts used** (all from `src/pages/news/zero-emission-van-grant-explained.md`, which holds the exact quotes)
> - "you don't apply": https://www.gov.uk/zero-emission-vehicle-grants ("You do not apply for the grant. The seller includes it as a discount in the purchase price.").
> - "Since April 2026": CMA Subsidy Advice Unit report, https://assets.publishing.service.gov.uk/media/69c145efcfa346b9d4704a82/Commercial_Vehicles_Final_Report.pdf ("The Scheme will run from 1 April 2026").
> - "updated version of the old Plug-in Van Grant": https://www.gov.uk/cma-cases/referral-of-the-zero-emission-truck-grant-zetg-and-zero-emission-van-grant-zevg-scheme-by-the-office-for-zero-emission-vehicles-ozev ("The Scheme is an updated version of existing van and truck grants").
> - "£2,500" and "under 2,500kg": https://www.gov.uk/zero-emission-vehicle-grants/vans ("The maximum discount available for some small vans is £2,500"; "be less than 2,500 kilograms (kg) gross vehicle weight").
> - "£5,000" and "2,500kg to 4,250kg": same page ("The maximum discount available for some large vans is £5,000"; "be between 2,500kg and 4,250kg gross vehicle weight").
> - "no paperwork": https://www.gov.uk/government/publications/plug-in-van-grant/plug-in-van-and-truck-grant-eligibility-and-applications ("There is no paperwork for customers to complete in order to benefit from the grant.").
> - "1,500 van grants a financial year": https://www.gov.uk/government/publications/plug-in-vehicle-grant-portal-guidance/using-the-plug-in-vehicle-grant-portal ("each business, organisation or individual may receive up to 1,500 zero emission van grants each financial year").
> - "leased vans count against you": same page ("Limits apply to end customers and not to lease companies.").
> - "new vans only, at first registration": eligibility page ("The ZEVG or ZETG can only be claimed for by new vans and trucks at first registration.").
> - "exact model and trim": eligibility page ("New variants of a vehicle that is already eligible for the grant are not automatically eligible.") and the approved list on the vans page.
> - "before the van is registered": portal guidance ("An order cannot be placed on the portal and registered on the same day."), as summarised in the story.
> - "isn't guaranteed until validated": portal guidance ("A grant is not guaranteed until the vehicle has been validated through the portal.").
> - "£81,000, or 40%": https://www.gov.uk/zero-emission-vehicle-grants/trucks ("The maximum discount available for some trucks weighing over 26 tonnes is the lower of: £81,000 40% of the upfront cost of the vehicle"). This is the England, Scotland and Wales rate; in Northern Ireland large firms are capped at 30% for trucks over 12 tonnes (see story).

---

### Post 6 (Thursday 19 November): how MOT failure rates rise with age

A five-year-old van is not a ten-year-old van. The MOT data shows how big the difference is.

Across all the initial MOT tests of the van and pickup models we track, combined, DVSA's 2024 results give these failure rates by age:

3–4 years: 24.0%
5–6 years: 28.1%
7–9 years: 34.8%
10–14 years: 43.3%

Average mileage climbs with it, from 62,544 to 130,747.

Some models age much worse than others. The Citroën Relay, the same Ducato-based van in both age bands, goes from 32.5% at 3–4 years to 43.4% at 10–14.

Its twin, the Fiat Ducato, barely moves: 23.2% to 25.3%. That's a clue, not a miracle. Both names include motorhome conversions, so look at the mileage: 10–14 year old Ducatos averaged 66,883 miles, against 125,726 for Relays. Fewer miles is the likely explanation.

So compare like with like: same age, and look at the mileage.

https://loadspace-vans.netlify.app/reliability/

#Vans #MOT #FleetManagement

> **Facts used** (all `src/data/reliability.json`; initial MOT failure rate, retests excluded, fail = failed or passed after faults fixed at the test; DVSA "MOT testing data results (2024)"; age = years since first use; at least 300 tests per figure)
> - "24.0%", "28.1%", "34.8%", "43.3%": `allVansByAge["3-4"|"5-6"|"7-9"|"10-14"].failRate` = 24.0, 28.1, 34.8, 43.3 (583,522; 620,587; 859,970; 794,989 tests). Pooled across all initial tests of the models Loadspace tracks, combined (test-weighted, including models too small to publish separately, and passenger and motorhome versions sold under those names). Not an average of the model figures, and the mix of models differs between bands.
> - "62,544 to 130,747": `allVansByAge.3-4.avgMiles` = 62544, `allVansByAge.10-14.avgMiles` = 130747 (pooled, as above).
> - "Fiat Ducato 23.2% to 25.3%": `models.fiat-ducato.byAge.3-4.failRate` = 23.2 (8,226 tests), `byAge.10-14.failRate` = 25.3 (18,426 tests).
> - "66,883 miles": `models.fiat-ducato.byAge.10-14.avgMiles` = 66883.
> - "Both names include motorhome conversions": `models.fiat-ducato.includesMotorhomes` = true and `models.citroen-relay.includesMotorhomes` = true. The data doesn't say what share are motorhomes, so the post offers lower mileage as the likely explanation, not proof.
> - "Citroën Relay 32.5% to 43.4%, at 125,726 miles": `models.citroen-relay.byAge.3-4.failRate` = 32.5 (11,452 tests), `byAge.10-14.failRate` = 43.4 (12,286 tests), `byAge.10-14.avgMiles` = 125726.
> - "the same Ducato-based van in both age bands" / "Its twin": Relay and Ducato are in the same twin group (`stellantis-large`, "Ducato-based") in `src/data/vans.js`. That the Relay has been Ducato-based since 2006, covering both bands (first use about 2009–2021), is background knowledge, not from the repo. The Vivaro and Trafic were dropped because their 3–4 and 10–14 bands are different generations.

---

## Week 4

### Post 7 (Tuesday 24 November): the lease true-cost calculator

"£279 a month" is almost never £279 a month.

Van leases are often quoted with a profile like "6 + 35". On a 36-month lease, that means six monthly payments up front, then 35 more. That's 41 payments for 36 months, before any fees.

Take the example our free calculator starts with: £279 a month, 6 + 35, and a £300 admin fee. You pay £11,739 in total. Spread over the 36 months, that's about £326 a month, around 17% more than the advertised price.

It's the fairest way to compare two quotes for the same van with different upfront payments. Then check the mileage limit fits your work, and whether the price includes VAT (business deals are usually shown without it).

Put your own quote in. It's free and there's no sign-up:
https://loadspace-vans.netlify.app/tools/lease-true-cost/

#Vans #SmallBusiness #Leasing

> **Facts used** (all from `src/pages/tools/lease-true-cost.astro`)
> - "£279", "6 + 35", "36-month", "£300": the calculator's default inputs (`monthly` 279, `upfront` 6, `term` 36, `fee` 300). The post calls it "the example our calculator starts with", so it's an illustration, not a real quote.
> - "41 payments for 36 months": page text ("you make 41 payments in total over 36 months, plus any fee").
> - "£11,739": calc, the page's formula: 279 × 6 + 279 × 35 + 300 = 1,674 + 9,765 + 300 = 11,739.
> - "about £326 a month": calc, 11,739 ÷ 36 = 326.08 (the calculator shows £326).
> - "around 17%": calc, (326.08 − 279) ÷ 279 = 16.9%, which the calculator shows as "17% above the advertised price".
> - "business deals are usually shown without it": page text.
> - "no sign-up": the calculator runs in the page with no form submission or account (see the page's script).

---

### Post 8 (Thursday 26 November): same van, different badge, different MOT results

Same van. Different badge. Different MOT results.

The MAN TGE is a rebadged Volkswagen Crafter, so you'd expect the two to have much the same MOT record.

DVSA's 2024 data says otherwise. Compared at the same age, 3–4 years old:

• MAN TGE: 20.8% initial MOT failure rate (4,086 tests, average 90,629 miles)
• Volkswagen Crafter: 26.0% (15,396 tests, average 80,498 miles)

The TGE failed less often despite averaging about 10,000 more miles. And the Crafter's figure includes camper conversions, which usually do fewer miles and would be expected to flatter it, not hurt it.

The data can't tell us why. It may come down to who buys each badge and how they're looked after. That's a guess, not a finding.

What it does show: with twins, don't assume the badge you don't buy has the same record. Look up the one you're buying, at the age you're buying it.

https://loadspace-vans.netlify.app/reliability/

#Vans #MOT #FleetManagement

> **Facts used** (all `src/data/reliability.json`; initial MOT failure rate, retests excluded, fail = failed or passed after faults fixed at the test; age 3–4 years since first use; DVSA "MOT testing data results (2024)"; at least 300 tests per figure; both models all diesel in this data)
> - "MAN TGE is a rebadged Volkswagen Crafter": `src/data/vans.js`, `TWINS["vw-man-large"].note` ("The MAN TGE is a rebadged Volkswagen Crafter.").
> - "MAN TGE: 20.8% ... 4,086 tests ... 90,629 miles": `models.man-tge.byAge.3-4` = { tests: 4086, failRate: 20.8, avgMiles: 90629 }.
> - "Volkswagen Crafter: 26.0% ... 15,396 tests ... 80,498 miles": `models.volkswagen-crafter.byAge.3-4` = { tests: 15396, failRate: 26.0, avgMiles: 80498 }.
> - "about 10,000 more miles": calc, 90,629 − 80,498 = 10,131.
> - "Crafter's figure includes camper conversions": `models.volkswagen-crafter.includesMotorhomes` = true; `models.man-tge.includesMotorhomes` = false. "usually do fewer miles" is the site's wording in `src/components/Reliability.astro`.
> - Why 3–4 years: each model's figure covers every generation sold under that name. The TGE has only ever been a Crafter twin, but older Crafters in the 5–6 band and above may include the previous Crafter generation, so 3–4 is the fairest like-for-like band. (The TGE has no published figure above 5–6 years.)

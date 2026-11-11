# Van Electric lease explainer Shorts: November 2026

Ten YouTube Shorts scripts explaining van leasing. Each script runs about 45 to 60 seconds at a steady pace (about 110 to 150 spoken words). "Say" is the spoken line; "Show" is the visual.

## How to use these

- Film with no van needed: presenter to camera, or on-screen text and voice over screenshots of our own pages. Never say or suggest we drove or tested a van.
- Every Close sends viewers to the lease enquiry page (loadspace-vans.netlify.app/get-lease-quotes/; swap the domain when vanelectric.co.uk is live). Lease quotes aren't open yet and we don't pass details on, so never promise quotes, prices or deals. Leave out the "Sources" line when you post.
- Don't post until the Van Electric rename is live: until then the enquiry page and its consent text still say Loadspace.
- Screenshots of the calculators must not show £ figures: crop to the labels or blank the numbers, so no lease prices appear on screen.
- Every figure was checked against the site on 11 November 2026. Re-check before posting, as grant and tax rules can change.

---

### Short 1: how a van lease works in 60 seconds

- **Hook.** Say: "How does a van lease actually work? Here it is in under a minute." Show: presenter to camera, text "VAN LEASING IN 60 SECONDS".
- **Beat 1.** Say: "For most businesses, leasing a van means contract hire. You use the van for a fixed term, then hand it back. You don't own it at the end." Show: text "Contract hire: use it, hand it back".
- **Beat 2.** Say: "First, there's an upfront payment, sometimes called the initial rental. It's often three, six, nine or twelve times the monthly price." Show: text "Upfront: often 3, 6, 9 or 12 months".
- **Beat 3.** Say: "Then a fixed monthly payment for the rest of the term. Our lease calculator covers 24, 36, 48 and 60-month terms." Show: screenshot of the lease true cost calculator's lease length menu.
- **Beat 4.** Say: "There's a mileage limit, and going over it costs a set amount per mile. When the van goes back, there can be damage charges too." Show: text "Mileage limit + damage charges".
- **Beat 5.** Say: "In return, if van values fall, that's the leasing company's risk, not yours." Show: text "Falling values: the leasing company's risk".
- **Close.** Say: "Want fixed costs and a new van every few years? Contract hire suits that. Make a lease enquiry on Van Electric. Quotes aren't open yet, and your details stay with us." Show: text "General guidance, not a finance offer", then URL loadspace-vans.netlify.app/get-lease-quotes/

> Sources: `src/pages/guides/lease-vs-buy.md` ("The short answer": "Want fixed costs and a new van every few years? Contract hire (leasing)"; "The four options" table: own it at the end "No, hand it back", mileage limit "Yes", risk if values fall "The leasing company's", damage charges at the end "Yes"; "Contract hire, explained": "upfront payment (often 3, 6, 9 or 12 times the monthly price), then a fixed monthly payment, and hand the van back at the end"; "Going over costs a set amount per mile"). Terms of 24, 36, 48 and 60 months: `src/pages/tools/lease-true-cost.astro` (lease length options 24, 36, 48, 60). "Your details stay with us": consent text on `src/pages/get-lease-quotes.astro`. "Initial rental" and "for most businesses, leasing a van means contract hire" are general wording, not on the site.

---

### Short 2: "3 + 47" explained

- **Hook.** Say: "Three plus 47. You see numbers like that on van lease ads. Here's what they mean." Show: text "3 + 47 = ?"
- **Beat 1.** Say: "The first number is the upfront payment, counted in monthly payments. So three means three monthly payments at the start." Show: text "3 = three payments upfront".
- **Beat 2.** Say: "The second number is how many monthly payments follow. It's the term minus one, so 3 plus 47 is a 48-month lease." Show: text "47 more = 48-month lease".
- **Beat 3.** Say: "That's 50 payments over 48 months, plus any fee." Show: text "50 payments in 48 months + fees".
- **Beat 4.** Say: "So a lower monthly price with a bigger upfront payment isn't always cheaper. To compare, add the upfront payment, the remaining monthly payments and any fees, then divide by the number of months in the lease." Show: text "(upfront + remaining payments + fees) ÷ months".
- **Beat 5.** Say: "And check whether VAT is included. Business deals are usually shown without it." Show: text "VAT in or out?"
- **Close.** Say: "Our free lease true cost calculator does the sum for you. Ready to lease? Make a lease enquiry on Van Electric. Lease quotes aren't open yet, so we won't quote you a price." Show: screenshot of the lease true cost calculator's input labels only (no £ figures), text "General guidance, not a finance offer", then URL loadspace-vans.netlify.app/get-lease-quotes/

> Sources: `src/pages/tools/lease-true-cost.astro` ("How it works": "A lease shown as "6 + 35" on a 36-month term means you pay six monthly payments upfront, then 35 more. So you make 41 payments in total over 36 months, plus any fee"; "True cost per month = (upfront payment + remaining payments + fees) ÷ lease length"; "whether prices include VAT (business deals are usually shown without it)"; the script's profile label is upfront + (term minus 1), so 3 upfront on 48 months shows "3 + 47"). 3 + 47 = 50 payments: same method as the site's 6 + 35 = 41. `src/pages/guides/lease-vs-buy.md` ("A lower monthly price with a bigger upfront payment is not always cheaper").

---

### Short 3: is the van grant in the lease price?

- **Hook.** Say: "Leasing an electric van? The van grant can still apply, with a catch." Show: text "VAN GRANT + LEASING".
- **Beat 1.** Say: "The Zero Emission Van Grant takes up to £2,500 off a small van, under 2,500 kilos gross weight, and up to £5,000 off a large van, 2,500 to 4,250 kilos." Show: text "Small: up to £2,500 / Large: up to £5,000".
- **Beat 2.** Say: "Buying or leasing both count. You don't apply: the dealer or manufacturer takes it off the price at the point of sale." Show: text "Buying or leasing: both count".
- **Beat 3.** Say: "Each business can get up to 1,500 van grants each financial year, and leased vans count against you, the end customer, not the leasing company. Linked companies can be treated as one." Show: text "Leased vans count against YOUR limit".
- **Beat 4.** Say: "It's for new vans on the government's approved list, and new versions of an approved van aren't automatically covered. Grant levels and rules can change." Show: text "New, listed vans only".
- **Close.** Say: "So ask how your quote reflects the grant, and check the exact model and trim. Then make a lease enquiry on Van Electric. We don't give quotes yet." Show: text "General guidance, not a finance offer", then URL loadspace-vans.netlify.app/get-lease-quotes/

> Sources: `src/pages/news/zero-emission-van-grant-explained.md` ("Vans" table: small under 2,500kg up to £2,500, large 2,500kg to 4,250kg up to £5,000; "New versions of an approved van aren't automatically covered, so check the exact model and trim"; "How you get it": "The dealer or manufacturer takes it off the price at the point of sale", "Buying or leasing both count", "New only"; "Limits and catches": "up to 1,500 van grants and 100 truck grants each financial year", "Leased vehicles count against you, the end customer, not the leasing company", "Linked companies in the same group can be treated as one business", "Grant levels and rules can change"). "You don't apply": `src/data/rules/van-tax-2026-27.md` ("The van grant"). "Ask how the quote reflects it": LinkedIn Post 8 in `marketing/content-pack-2026-11.md`.

---

### Short 4: why your mileage limit matters

- **Hook.** Say: "Set your lease mileage too low and it can cost you when the van goes back." Show: presenter to camera, text "MILEAGE LIMIT".
- **Beat 1.** Say: "A contract hire lease comes with a mileage limit. Hire purchase and buying outright don't have one." Show: screenshot of the lease vs buy guide table, mileage limit row.
- **Beat 2.** Say: "Go over the limit and you pay a set amount for every extra mile. Your contract sets the rate, so read it before you sign." Show: text "Over the limit = a set charge per mile".
- **Beat 3.** Say: "So be honest about your miles at the start. Use the miles you really do in a year, and check the limit matches your work." Show: text "Your real yearly miles".
- **Beat 4.** Say: "Doing very high or unpredictable miles? Buying usually beats leasing, because lease mileage limits are expensive to break." Show: text "High or unpredictable miles? Consider buying".
- **Beat 5.** Say: "And for high-mileage vans, a maintenance package is often worth it. For low-mileage ones, less so." Show: text "Maintenance package: high miles".
- **Close.** Say: "Check the mileage limit before you compare monthly prices. If leasing suits your work, make a lease enquiry on Van Electric. Lease quotes aren't open yet." Show: text "General guidance, not a finance offer", then URL loadspace-vans.netlify.app/get-lease-quotes/

> Sources: `src/pages/guides/lease-vs-buy.md` ("The short answer": "Doing very high or unpredictable miles? Buying usually beats leasing, because lease mileage limits are expensive to break"; "The four options" table, mileage limit row: contract hire "Yes", hire purchase "No", cash "No"; "Watch for": "Mileage limits. Going over costs a set amount per mile. Be honest about your miles at the start", "Maintenance packages. Often worth it for high-mileage vans; less so for low-mileage ones"). "Check the limit matches your work": `src/pages/tools/lease-true-cost.astro` ("Also check the mileage limit matches your work"). "Your contract sets the rate, so read it before you sign" is general wording, not on the site.

---

### Short 5: damage at hand-back

- **Hook.** Say: "At the end of a van lease, the van goes back. Here's how to avoid a damage bill when it does." Show: presenter to camera, text "HAND-BACK DAMAGE".
- **Beat 1.** Say: "On contract hire, there can be damage charges at the end of the lease. With hire purchase or buying outright, there aren't." Show: screenshot of the lease vs buy guide table, damage charges row.
- **Beat 2.** Say: "Most leasing companies use the BVRLA's fair wear and tear standard. It sets out what counts as normal wear and what counts as damage, so ask which standard your contract uses and read it before you sign." Show: text "Fair wear and tear: read the standard".
- **Beat 3.** Say: "A work van's load area takes the knocks, so ply-line it." Show: text "Ply-line the load area".
- **Beat 4.** Say: "Take photos when you collect the van and again when you return it, so you have a record of its condition both times." Show: text "Photos at collection AND return".
- **Beat 5.** Say: "And our lease or buy calculator doesn't include damage charges, so allow for them yourself." Show: text "Damage charges: not in the calculator".
- **Close.** Say: "Thinking about contract hire? Make a lease enquiry on Van Electric. Quotes aren't open yet, and your details stay with us." Show: text "General guidance, not a finance offer", then URL loadspace-vans.netlify.app/get-lease-quotes/

> Sources: `src/pages/guides/lease-vs-buy.md` ("The four options" table, damage charges at the end: contract hire "Yes", hire purchase "No", cash "No"; "Watch for": "End-of-lease damage charges. Most leasing companies use the BVRLA "fair wear and tear" standard. Ply-line the load area and keep photos at collection and return"). Calculator: `src/pages/tools/lease-or-buy.astro` ("Not included: insurance, downtime when a van breaks, and lease mileage or damage charges"). "It sets out what counts as normal wear and what counts as damage" and "ask which standard your contract uses" are general wording, not on the site.

---

### Short 6: electric v diesel, the total monthly cost

- **Hook.** Say: "Leasing an electric van or a diesel? Compare the total, not just the monthly price." Show: text "ELECTRIC v DIESEL: THE TOTAL".
- **Beat 1.** Say: "Step one: put each lease quote into our lease true cost calculator. Enter the monthly payment, the upfront payment in months, the lease length and any fee. It gives you the true cost per month." Show: screenshot of the lease true cost calculator's input labels only (no £ figures).
- **Beat 2.** Say: "Step two: our electric versus diesel calculator. Enter your yearly miles, diesel price and miles per gallon, then the electric van's miles per kilowatt-hour, electricity prices and how much you charge in public." Show: screenshot of the electric v diesel calculator inputs.
- **Beat 3.** Say: "It gives a yearly running cost for each van. Put those running costs alongside each lease's true monthly cost. Road tax is the same for both vans, so it doesn't change the gap." Show: text "Running costs + true lease cost, side by side".
- **Beat 4.** Say: "It doesn't include servicing, insurance or a home charger, and its starting figures are rough examples, not quotes." Show: text "Not included: servicing, insurance, charger".
- **Close.** Say: "Try it with your own quote. When you're ready to lease, make a lease enquiry on Van Electric. Lease quotes aren't open yet." Show: text "General guidance, not a finance offer", then URLs loadspace-vans.netlify.app/tools/lease-true-cost/, loadspace-vans.netlify.app/tools/electric-vs-diesel/ and loadspace-vans.netlify.app/get-lease-quotes/

> Sources: `src/pages/tools/lease-true-cost.astro` (inputs: monthly payment, upfront payment in months, lease length, admin or arrangement fee; result "True cost per month"). `src/pages/tools/electric-vs-diesel.astro` (inputs: miles per year, diesel price in pence per litre, miles per gallon, miles per kWh, home or depot electricity price, public rapid charging price, share of charging on public chargers; results "Your yearly running cost", "Road tax ... included in the yearly costs above"; "Not included: purchase or lease price, servicing (usually lower for electric), insurance, a home charger"; lede: "The defaults are rough examples for a medium van, not quotes"). "Road tax: £360 for both". Putting the two results side by side is our own suggestion; neither tool combines them.

---

### Short 7: lease or buy?

- **Hook.** Say: "Lease or buy? The tax relief works differently." Show: presenter to camera, text "LEASE OR BUY?"
- **Beat 1.** Say: "Buy one, new or used, and the Annual Investment Allowance can let a business deduct the price from profits in the year it buys, up to £1 million a year, though tax can come back when you sell. Most sole traders on cash basis claim it as an expense instead." Show: text "Buying: AIA, up to £1m a year".
- **Beat 2.** Say: "Limited companies can use full expensing instead, on new and unused vans only. Electric vans get the same relief as diesel: their special 100% allowance ended in April 2025." Show: text "Full expensing: new vans, companies only".
- **Beat 3.** Say: "Lease one, and for sole traders and partners, gov.uk lists vehicle hire charges as an allowable business expense. Limited companies should check how lease rentals are treated with their accountant." Show: text "Leasing: check with your accountant".
- **Beat 4.** Say: "Timing differs too: buying gives most of the relief in year one, and leasing spreads it over the contract." Show: text "Buy: year one / Lease: spread out".
- **Close.** Say: "Try our lease or buy calculator. If leasing suits you, make a lease enquiry on Van Electric. Lease quotes aren't open yet." Show: text "General guidance, not a finance offer. Check with your accountant", then URLs loadspace-vans.netlify.app/tools/lease-or-buy/ and loadspace-vans.netlify.app/get-lease-quotes/

> Sources: `src/pages/tools/lease-or-buy.astro` ("How tax relief works on a van": AIA "lets you deduct the price from your profits in the year you buy, up to £1 million of spending a year. Diesel and electric vans both qualify", "used vans can qualify too", "Sole traders and partnerships using cash basis (the standard method for most) claim the cost as an allowable expense instead", sale value "goes back into your tax calculation", "Limited companies can use full expensing instead, but only on new and unused vans"; "Leasing: for sole traders and partners, gov.uk lists vehicle hire charges as an allowable business expense. Limited companies should check how van lease rentals are treated with their accountant"; "Timing: buying gives most of the relief in year one, which helps cash flow. Leasing spreads it over the contract"; "Electric vans get the same relief as diesel: the special 100% first-year allowance for zero-emission vans ended in April 2025"; "check with your accountant"). Same rules in `src/data/rules/van-tax-2026-27.md` ("Buying or leasing a van"; `rates.aia`).

---

### Short 8: five things to ask before you sign

- **Hook.** Say: "Five things to ask before you sign an electric van lease." Show: presenter to camera, text "5 QUESTIONS BEFORE YOU SIGN".
- **Beat 1.** Say: "One: is VAT in or out? Business deals are usually shown without it." Show: text "1. VAT".
- **Beat 2.** Say: "Two: how does the quote reflect the van grant? If the van's on the approved list, it applies to leased vans too, and they count against your business's yearly grant limit, not the leasing company's." Show: text "2. Grant".
- **Beat 3.** Say: "Three: what's the total? Add any upfront payment and fees to the remaining monthly payments, then divide by the months you'll have the van." Show: text "3. Total cost".
- **Beat 4.** Say: "Four: which exact van? Battery, body length and options change range and payload. Kia's PV5 Cargo carries 670 to 800 kilos depending on version, and those are Kia's targets until the van is homologated." Show: text "4. Exact van".
- **Beat 5.** Say: "Five: what's the mileage limit? Make sure it fits your work, because going over costs a set amount per mile." Show: text "5. Mileage limit".
- **Close.** Say: "Make a lease enquiry on Van Electric. Lease quotes aren't open yet, and your details stay with us." Show: text "General guidance, not a finance offer", then URL loadspace-vans.netlify.app/get-lease-quotes/

> Sources: checklist from LinkedIn Post 8 in `marketing/content-pack-2026-11.md`. VAT: `src/pages/tools/lease-true-cost.astro` ("business deals are usually shown without it"). Grant: `src/pages/news/zero-emission-van-grant-explained.md` ("Buying or leasing both count"; "Leased vehicles count against you, the end customer, not the leasing company"). Total: `src/pages/tools/lease-true-cost.astro` ("True cost per month" formula). PV5: `src/data/specs/kia-pv5-cargo.md` (versions: 670 to 800kg across all four; Kia's figures are targets pending homologation). Mileage: `src/pages/guides/lease-vs-buy.md` ("Going over costs a set amount per mile").

---

### Short 9: payload and leasing

- **Hook.** Say: "Leasing a van for years? Make sure it can carry your load." Show: presenter to camera, text "PAYLOAD + LEASING".
- **Beat 1.** Say: "Options add weight, so they cut payload. Ford estimates power sliding doors on both sides of the E-Transit Custom add 34 kilos." Show: text "Options = less payload".
- **Beat 2.** Say: "Renault says the optional Rough Terrain Pack cuts the Kangoo E-Tech's payload by around 250 kilos." Show: text "Kangoo Rough Terrain Pack: around 250kg less".
- **Beat 3.** Say: "Makers measure payload differently, too. On Citroën's ë-Dispatch, the driver's weight comes out of the payload, while Volkswagen's ID. Buzz Cargo figures already allow 75 kilos for the driver." Show: text "Driver in or out?"
- **Beat 4.** Say: "And the weight rating matters. Citroën's ë-Relay L3H2 carries 730 kilos at 3,500 kilos gross, or 1,480 at 4,250. But the heavier version is limited to 56 miles an hour and must have a tachograph." Show: text "730kg v 1,480kg (56mph + tachograph)".
- **Beat 5.** Say: "So before you sign, ask for the plated payload of the exact van on your quote, options and all." Show: text "Ask for the PLATED payload".
- **Close.** Say: "Know what you need to carry? Make a lease enquiry on Van Electric. Quotes aren't open yet." Show: text "General guidance, not a finance offer", then URL loadspace-vans.netlify.app/get-lease-quotes/

> Sources: `src/data/specs/ford-transit-custom.md` (note: "Options add weight and cut payload: Ford estimates power sliding doors on both sides add 34kg"), `src/data/specs/renault-kangoo.md` (note: "The optional Rough Terrain Pack cuts payload by around 250kg"), `src/data/specs/citroen-dispatch.md` (note: "worked out from a kerb weight without a driver, so the driver's weight comes out of the payload"), `src/data/specs/volkswagen-id-buzz-cargo.md` (note: "VW's unladen weights include 75kg for the driver"), `src/data/specs/citroen-relay.md` (versions "L3H2, 3,500kg" 730kg and "L3H2, 4,250kg" 1,480kg; note: "The 4,250kg versions are legally limited to 56mph and must have a tachograph"). "Plated payload": wording from `src/pages/reviews/nissan-townstar.md` ("Ask the dealer for the plated payload of the exact van before you sign") and other reviews.

---

### Short 10: sort the charger before the van arrives

- **Hook.** Say: "Electric van on its way? Sort the charging before it arrives." Show: presenter to camera, text "CHARGER FIRST, VAN SECOND".
- **Beat 1.** Say: "At home, you need off-street parking, like a driveway. Running cables across the pavement is generally not allowed without council permission." Show: text "Home: off-street parking".
- **Beat 2.** Say: "A dedicated home charger is safer and faster than a three-pin plug. On a 7 kilowatt wall charger, most vans get a full charge overnight." Show: text "7kW: full charge overnight for most vans".
- **Beat 3.** Say: "If the business provides the van, agree how home charging is repaid before you start, so drivers aren't out of pocket." Show: text "Agree repayment first".
- **Beat 4.** Say: "At a depot, count the vans, their daily miles and the hours they're parked. Vans parked 10 hours or more overnight usually manage with 7 to 22 kilowatt chargers." Show: text "Depot: vans, miles, hours parked".
- **Beat 5.** Say: "Check your site's electricity supply early. A bigger grid connection can take months or longer, so talk to your network operator before you order vehicles." Show: text "Check your supply EARLY".
- **Close.** Say: "Make a lease enquiry on Van Electric. Lease quotes aren't open yet, and your details stay with us." Show: text "General guidance, not a finance offer", then URL loadspace-vans.netlify.app/get-lease-quotes/

> Sources: `src/pages/guides/charging-an-electric-van.md` ("The three ways to charge" table: home 7kW wall charger, "A full charge overnight for most vans"; "Charging at home": off-street parking, "Running cables across pavements is generally not allowed without council permission", "A dedicated home charger is safer and faster than a 3-pin plug", "agree how home charging is repaid before you start, so drivers aren't out of pocket"; "Charging at a depot": "Count vehicles, daily miles and the hours vans are parked", "Check your site's electricity supply early. Adding several chargers may need a bigger grid connection, which can take months or longer"). `src/pages/guides/depot-charging.md` ("Talk to your network operator before you order vehicles"; Step 2: "Vans parked for 10+ hours overnight usually manage with" 7 to 22kW chargers).

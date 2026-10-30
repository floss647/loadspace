# Press pitch: MOT reliability findings

**Links:** written with https://loadspace-vans.netlify.app/. Swap the domain when the custom domain goes live (paths stay the same).

**Images:** don't send maker press photos with the pitch (editorial-only terms, see NEWSROOM.md). Offer a screenshot of our table instead.

---

**Subject:** Story offer: the vans least likely to fail their MOT, from DVSA's 2024 data

Hello,

Loadspace, an independent UK advice site on electric vans, has ranked 34 van and pickup models by initial MOT failure rate, using DVSA's anonymised MOT results for 2024. Three findings:

1. **Pickups top the table at 5–6 years old.** Mitsubishi L200 18.2%, VW Amarok 19.2% (previous generation), Toyota Hilux 21.3%, against 28.1% for all the models we track, combined. Lowest non-pickup: VW Transporter (T6/T6.1), 21.7%.
2. **Failure rates climb steeply with age:** 24.0% at 3–4 years, 43.3% at 10–14.
3. **Badge twins differ.** At 3–4 years, the MAN TGE failed 20.8% of initial tests and the VW Crafter it's rebadged from 26.0%, though the TGEs averaged more miles.

The data: initial tests only, retests excluded. A fail includes vans that passed only after faults were fixed at the test. Classes 4 and 7, compared by age band, at least 300 tests per figure. Limits: almost all diesel; some models include passenger or motorhome versions sold under the same name; each covers every generation sold under that name.

Method and table: https://loadspace-vans.netlify.app/reliability/

I'm happy to send the full table, with test counts and average mileages.

[YOUR NAME]
Loadspace

---

## Facts behind the pitch

All from `src/data/reliability.json` (DVSA anonymised MOT tests and results, file "MOT testing data results (2024)"; initial MOT failure rate = share of non-retest MOT tests that failed or passed after faults were fixed at the test; age = whole years since first use; classes 4 and 7; `minTests: 300`):

- 34 models: models with a `byAge["5-6"]` entry, the ranked rows on `/reliability/`.
- Mitsubishi L200 18.2% (16,065 tests), VW Amarok 19.2% (5,186), Toyota Hilux 21.3% (10,687), VW Transporter 21.7% (42,644; includes passenger versions and motorhomes): `models.<slug>.byAge.5-6.failRate`. 5–6 year olds in 2024 were first used about 2017–2019, so these are the previous VW-built Amarok and the T6/T6.1 Transporter, not today's Ford-built versions (generation dating is background knowledge, not from the repo).
- 28.1%: `allVansByAge.5-6.failRate` (620,587 tests): pooled across all initial tests of the models Loadspace tracks at that age, combined (test-weighted, including models too small to publish separately). Not an average of the model figures, and not every van in the UK.
- 24.0% and 43.3%: `allVansByAge.3-4.failRate` (583,522 tests) and `allVansByAge.10-14.failRate` (794,989 tests), pooled the same way. The mix of models differs between age bands.
- MAN TGE 20.8% (4,086 tests, 90,629 average miles) and VW Crafter 26.0% (15,396 tests, 80,498 average miles): `models.man-tge.byAge.3-4` and `models.volkswagen-crafter.byAge.3-4`. "Rebadged from": `src/data/vans.js`, `TWINS["vw-man-large"]`.

If a journalist asks for "the full table": export `models` from `reliability.json` (all ages, test counts, average mileage, fuel split and the passenger/motorhome flags), with the method notes above. Don't send figures from fewer than 300 tests.

## Who to pitch

UK trade titles and section types. Don't guess names or addresses: find the news desk contact on each title's website.

1. **Van Reviewer**: van news and reviews. Find the news desk contact on their website.
2. **What Van?**: van buyers and fleets. Find the news desk contact on their website.
3. **Fleet News**: fleet managers. Find the news desk contact on their website.
4. **Commercial Fleet**: commercial vehicle fleet managers. Find the news desk contact on their website.
5. **Fleet World**: fleet managers. Find the news desk contact on their website.
6. **Van Fleet World**: van fleet operators. Find the news desk contact on their website.
7. **Commercial Motor**: commercial vehicle operators. Find the news desk contact on their website.
8. **Business Car**: company vehicle decision-makers. Find the news desk contact on their website.
9. **Trade press for the trades** (electrical, plumbing and heating, building): readers who buy and run their own vans. Pitch the used-van and age angles. Find the news desk contact on each title's website.
10. **Regional business news sections**: small-business owners. Offer a short version with the top three and bottom three. Find the news desk contact on their website.

## Three angles for later

1. **"Why the Fiat Ducato seems not to age."** Its initial MOT failure rate is 23.2% at 3–4 years and 25.3% at 10–14, and its 10–14 year olds averaged 66,883 miles, fewer than its 3–4 year olds (67,202). The Citroën Relay, the same basic van, goes from 32.5% to 43.4%, at 125,726 miles at 10–14. A story about motorhome conversions flattering the figures, and why buyers should compare mileage as well as age. (Sources: `models.fiat-ducato.byAge`, `models.citroen-relay.byAge`; both flagged `includesMotorhomes: true`. The data doesn't say what share are motorhomes, so present it as a likely explanation, not a finding.)
2. **"Twins that age differently."** Compare badge twins from 3–4 to 10–14 years, using only models that were one generation across both bands. For example the Citroën Relay goes from 32.5% to 43.4% while its twin, the Fiat Ducato, goes from 23.2% to 25.3% (`models.citroen-relay.byAge`, `models.fiat-ducato.byAge`). Both can include motorhome conversions, so check mileage before drawing conclusions. Many models (for example the Vauxhall Vivaro and Renault Trafic) changed generation in between, so check each one before including it.
3. **"What MOT data can and can't tell you about used electric vans."** Few electric vans are old enough for meaningful MOT data yet, and some electric goods vehicles are exempt from the MOT (`src/pages/reliability.astro`). The figures still show how the shared body, brakes, suspension and steering hold up. Pair with our used electric van buying guide. Don't present electric-only fail rates from `byFuel` as a reliability finding: those vans are younger and have done far fewer miles than the diesels.

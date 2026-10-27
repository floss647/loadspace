# Loadspace (working name)

Independent UK van advice site: reviews, used and electric buying guides, leasing advice, tools and deals.

## Run it

    npm install
    npm run dev      # local preview at http://localhost:4321
    npm run build    # static site in dist/

## Where things live

- `src/data/site.js`: brand name and tagline (change the name here).
- `src/data/vans.js`: every van model, sizes, rebadged twins, electric versions. Model pages are generated from this.
- `src/data/deals.js`: **sample deals only** plus the true-cost formula. Replace with broker feeds.
- `src/pages/guides/`: guides (Markdown).
- `src/pages/tools/`: electric vs diesel and lease true-cost calculators.

## Before launch

- Replace sample deals with real broker feeds; turn off `DEALS_ARE_SAMPLE`.
- Check the van line-up against maker price lists.
- Have tax and VAT wording checked by an accountant.
- Get FCA compliance advice before showing finance deals or passing on enquiries.
- Set the real domain in `astro.config.mjs`.

## Real data

### MOT reliability (free, DVSA open data)

1. Download the latest "Anonymised MOT tests and results" test-result file(s) from data.gov.uk.
2. Run:

       python3 scripts/mot_reliability.py path/to/test_results_2025.csv.gz --out src/data/reliability.json

3. Rebuild. Van pages show a reliability section and `/reliability/` shows rankings. Until then they stay hidden or show "coming soon".

The script prints the biggest unmatched van makes so missing models can be added to `MATCHERS`.

### Van check by registration (free government APIs)

Apply for keys:
- DVLA Vehicle Enquiry Service API (tax, MOT status, Euro emissions standard).
- DVSA MOT History API (full MOT record, mileage, defects).

Set these in Netlify, never in code: `DVLA_API_KEY`, `MOT_CLIENT_ID`, `MOT_CLIENT_SECRET`, `MOT_API_KEY`, `MOT_TOKEN_URL` (and optional `MOT_SCOPE`).
Until keys are set, the page says checks are "being switched on". The site works with either API on its own.

Test without keys: `node scripts/test-van-check.mjs`

## Hosting

Live at https://loadspace-vans.netlify.app (Netlify project `loadspace-vans`, site ID `a03df618-92d0-461d-b5de-16dce9d8e585`).
Deploy updates to this site ID rather than creating a new site.

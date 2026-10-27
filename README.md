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

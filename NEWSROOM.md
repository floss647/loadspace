# Loadspace newsroom rules

These rules apply to every news story, whether a person or the twice-weekly automated run writes it. **The goal is zero factual errors.** When in doubt, leave it out.

## The four checks

A story only goes live after passing all four:

1. **Sourced facts.** Every number, date, price, name and claim in the story comes from a source page on the trusted list (`scripts/news-sources.json`). The writer records each one in the story's `facts:` list with the **exact words copied from the source**.
2. **Automatic check.** `npm run check-news:live` opens every source page and confirms each quote is really there. The site build (`npm run build`) refuses to build if any number in a story isn't backed by a fact, so an unchecked story can't go live.
3. **Independent fact-check.** A separate checker, who didn't write the story, re-reads every source and compares it with the story line by line. They also check the things a script can't: meaning, context, dates, "up to" vs "from", ex-VAT vs inc-VAT, and whether a newer source changes the picture. Only then does the story get its `factCheck:` sign-off.
4. **Editor approval.** New stories arrive as a pull request with a preview link. Nothing goes live until the editor reads it and merges.

## Writing rules

- **Primary sources first.** Use the organisation that owns the fact: GOV.UK for grants and law, SMMT for registrations, the maker's own press site for prices and specs, the award organiser for awards. Use trade press only when there's no primary source, and say "reported" when you do.
- **Never use search-result snippets, AI summaries, Wikipedia or forums as a source.** If you can't open and read the page, the fact doesn't go in.
- **Conflicting sources:** use the primary source. If there's no primary source, leave the fact out or say clearly that reports differ.
- **Be exact about what a figure is.** Ex VAT or inc VAT, before or after the grant, official (WLTP) or real-world, UK or another country, provisional or final.
- **Conversions and sums** (km to miles, differences between prices) go in the facts list as a `calc:` showing the working, using only sourced figures.
- **Quotes from people** must be copied word for word from the source. Otherwise, paraphrase without quote marks.
- **No em dashes, ever.** Use a comma, colon, full stop or brackets. The build fails if one appears anywhere on the site. En dashes in ranges (10–80%) are fine. If a source quote in the facts list contains an em dash, type it as a hyphen: the checker treats all dashes as the same.
- **Write in our own words.** Credit figures in the text ("according to SMMT"). No links to other websites. Internal links to our own guides and van pages are encouraged.
- **Dates.** Check the source's publication date. Don't present old news as new.
- **Photos.** Licensed photos only (see `README.md`). The photo must be the right vehicle: the panel van, not the passenger version.

## Facts list format

```yaml
facts:
  - claim: "£29,421"                 # text exactly as it appears in the story
    source: https://www.ford.co.uk/...
    quote: "The Transit City L1H1 is priced from £29,421 excluding VAT"
  - claim: "158 miles"
    calc: "254km WLTP (fact above) ÷ 1.609 = 158 miles"
factCheck:
  by: "independent fact-checker"
  date: 2026-10-29
```

## Corrections

If a mistake gets through, correct it as soon as it's confirmed. Fix the text, update the facts list, and add a dated note so readers can see what changed:

```yaml
corrections:
  - date: 2026-11-02
    text: "We originally said X. It's Y. Corrected after a reader pointed it out."
```

Readers can report mistakes at `/corrections/`.

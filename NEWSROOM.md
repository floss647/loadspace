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

## Overloaded: the weekly column

**Overloaded** is our weekly comment column on vans, fleets and the motor industry. It's out every Friday at `/blog/`, and every column goes through the same four checks as the news.

### The voice

Think of a surreal, silly TV comic crossed with a grumpy, opinionated motoring presenter. That means:

- Daft tangents and absurd comparisons ("a van so quiet you could hear a parish council change its mind").
- Running gags that come back later in the column.
- Strong opinions, put with mock outrage and big exaggeration.
- Underneath it all, real affection for vans and the people who drive them.

It should make a van driver laugh out loud on a tea break. Write it in our own voice: never borrow anyone's catchphrases or suggest a real presenter wrote it.

### Structure

- **Length:** 600–900 words.
- **Content:** three or four real stories from the past week, in vans, fleets, trucks and the wider motor industry.
- **Each story:** give it a short headline-style subhead and riff on it.
- **The ending:** a closing gag or call-back.
- **Links:** to our own guides, news or tools where it's genuinely useful.

### The rules that keep it funny and safe

- **Real facts must be right.** Every real number, date, price, name and event goes in `facts:` with an exact source quote, the same as the news. Joking about a real fact is fine. Getting the fact wrong isn't.
- **Jokes must be unmistakably jokes.** An invented number or claim needs a `joke:` fact explaining why no reader could take it as true ("a van the size of Wales"). If a reader could plausibly believe it, it isn't a joke: cut it or make it sillier. The fact-checker must agree.
- **Punch up, not down.** Mock companies, products, policies, prices, bureaucracy, the industry and ourselves. Never mock ordinary people, drivers' jobs, or anyone for who they are (race, religion, sex, sexuality, disability, age, nationality or accent).
- **No made-up facts about real people.** Don't put invented words in a real person's mouth, or suggest they did, said or believe something they didn't. Don't imply wrongdoing, dishonesty or incompetence that isn't on the public record. Teasing a public figure over something they really said or did, fairly described, is fine.
- **No swearing beyond "bloody" and the occasional "blimey".**
- The usual house style applies: no em dashes, no stock phrases (the style check lists them), no links to other websites, and our own words throughout.

### Images

**Every column has a real photo.** Pick the column's best story and find a freely licensed photo for it:
1. Search Wikimedia Commons with `python3 scripts/find_photos.py <folder> "query" "another query"`. It only returns photos licensed CC BY, CC BY-SA, CC0 or public domain.
2. Look at the candidates. Choose a sharp, landscape photo of the right subject, UK-plated or UK-set if possible. Avoid photos where an identifiable private person is the focus, and anything that would mislead about the story. Commons limits how fast we can download, so fetch thumbnails at standard sizes (330px or 1280px) and pause between requests.
3. Add it with `python3 scripts/add_photo.py <slug> "File:Name.jpg" "what it shows"`. That checks the licence, downloads it and records the credit in `src/data/photos.json`. Photos already in `src/data/images.json` (vehicles) or `photos.json` can be reused.
4. Set `photo: <slug>` and a short, accurate `photoCaption:`, then run `python3 scripts/news_images.py`. It adds the OVERLOADED badge and the credit line.

Only if no suitable licensed photo exists, leave out `photo:` and the build makes the amber Overloaded card from the headline.

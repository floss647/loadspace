# Saved source documents

Some makers' websites block automated visits, so our fact-checker can't open their price lists. When that happens, the editor downloads the document from the maker's own UK website and we keep a copy here.

- `index.json` records each file's title, publisher (the maker's website, which must be on the trusted list), effective date, when and how we got it, and a SHA-256 fingerprint.
- A fact can point at a saved copy with `archive: sources/<file>` instead of `source:`. The checker then reads the saved copy (PDFs via pdftotext) and confirms the quote is in it, exactly as it would for a live page.
- The checker refuses a saved copy that isn't in `index.json`, whose publisher isn't trusted, or whose fingerprint has changed. To replace a document, add the new file under a new name with its own entry.
- Price rules still apply: a saved price list only counts for the price slot if it's the maker's current list or under six months old.

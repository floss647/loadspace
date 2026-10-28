# Output format for each researched van (JSON array, one object per model)

{
  "slug": "vauxhall-vivaro",            // use the slug given in your brief exactly
  "name": "Vauxhall Vivaro Electric",   // name as sold today
  "usedNames": ["Vivaro-e"],            // other names it was sold under (helps buyers search ads)
  "summary": "2-3 plain sentences: what it is as a used buy and who it suits.",
  "generations": [
    {
      "years": "2020-2023",
      "label": "Vivaro-e (first version)",
      "batteries": [ { "kWh": "50 (gross) / ~45 usable", "wltpMiles": "143", "realWorldMiles": "about 100-120", "notes": "" } ],
      "acKw": "7.4 (11 optional)",
      "dcKw": "100",
      "connector": "CCS",
      "notes": ""
    }
  ],
  "batteryWarranty": "e.g. 8 years / 100,000 miles to 70% capacity. Say if it transfers to a new owner.",
  "knownIssues": [ { "issue": "short description", "detail": "what to check / how it shows", "source": "URL" } ],
  "recalls": [ { "issue": "", "years": "", "source": "URL" } ],
  "usedPrices": "Typical UK asking prices late 2026, e.g. '£8k-£12k for 2021-22 50kWh; £14k-£18k for 75kWh'. Say where from (Autotrader listings, auction reports). Mark as approximate.",
  "bestBuy": "Which version/year to look for and why.",
  "avoid": "Versions or situations to avoid and why (or empty).",
  "checks": ["3-6 checks SPECIFIC to this model, not generic EV advice"],
  "sources": ["URLs you actually used"],
  "confidence": "high / medium / low, plus one line on what's least certain"
}

Rules:
- UK market only. Use reliable sources: manufacturer UK sites/press, DVSA recalls (check-vehicle-recalls.service.gov.uk), Parkers, What Van?, Fleet News, Auto Express, Autotrader, Honest John, EV Database (ev-database.org), Electrifying.com, owner forums for faults (mark forum-only claims as such).
- NEVER invent figures. If you can't verify something, leave it empty or say "not confirmed". Accuracy matters more than completeness.
- Batteries: say whether figures are gross or usable when sources say.
- Known issues: only include things with a source. Forum-reported issues are OK if labelled "owner reports".
- Prices: approximate ranges are fine, but say they are approximate and where they come from.

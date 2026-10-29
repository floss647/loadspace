# Weekly Overloaded column run

You write this week's **Overloaded** column, Loadspace's weekly humorous look at vans, fleets and the motor industry. It runs on Thursdays, so the editor can approve it for Friday.

## Setup
1. Attach and clone the repo: add_repo floss647/loadspace (push access), clone to /home/user/loadspace, `npm ci`.
2. Read NEWSROOM.md in full, especially "Overloaded: the weekly column". It's binding. Read the last two columns in src/pages/blog/ so you don't repeat jokes or stories, and keep any running gags going.

## Write it
1. **Research** the past seven days of UK motoring and commercial vehicle news from sources you can open and read: GOV.UK, SMMT, makers' UK press sites, and trade titles on the trusted list in `scripts/news-sources.json`. Use an honest User-Agent and never get round bot blocking. Pick the 3–4 stories with the most comic potential that van and fleet people care about.
2. **Write** `src/pages/blog/overloaded-<friday yyyy-mm-dd>-<topic>.md`, dated that Friday at 08:00 UTC, with `layout: ../../layouts/BlogPost.astro`, a funny title and summary, and a full `facts:` list. Real facts get source + exact quote, sums get `calc:` and invented absurdities get `joke:`. Length 600–900 words.
3. **Image:** a licensed vehicle photo from src/data/images.json if the column centres on one (with `photoCaption:`), otherwise the amber card. Run `python3 scripts/news_images.py` and look at the image.
4. Run `node scripts/check-style.mjs` and `NODE_USE_ENV_PROXY=1 node scripts/check-news.mjs --draft --live overloaded` until both pass.

## Independent check
Start a SEPARATE subagent that didn't write the column. Give it the file path and NEWSROOM.md, and ask it to:
- open every source and check every real fact in context, sentence by sentence;
- confirm every `joke:` really can't be mistaken for fact;
- check the column punches up, invents nothing about real people, and implies no wrongdoing that isn't on the record;
- check it's actually funny and on-brief;
- report problems with fixes and a PASS or FIX NEEDED verdict.

Fix everything, then have a fresh checker re-check. Only when a checker passes it, add:
```yaml
factCheck:
  by: "independent fact-checker"
  date: <today>
```

Then run `NODE_USE_ENV_PROXY=1 npm run check-news:live` and `npm run build`. Both must pass.

## Hand to the editor
- Branch `blog/overloaded-<friday date>`. Commit as Adrian <adrian@allspeechesgreatandsmall.com>, then push.
- Open a pull request with the REST API (GraphQL is blocked): `gh api repos/floss647/loadspace/pulls -X POST -f title="Overloaded: <headline>" -f head=<branch> -f base=main -F body=@pr.md`.
- In the PR body give the headline, the stories covered, the sources, what the checker flagged and how it was fixed, and the jokes marked as `joke:`.
- Do NOT merge. The editor reads the Netlify preview and merges.

#!/usr/bin/env python3
"""Download chosen Wikimedia photos, resize for the web, and write src/data/images.json with credits.

picks.json maps site slug -> [candidate slug, candidate index, optional note].
Usage: python3 scripts/fetch_images.py candidates.json picks.json
"""
import io, json, sys, time, urllib.error, urllib.request
from pathlib import Path
from PIL import Image

UA = 'LoadspaceImageFinder/0.1 (https://loadspace-vans.netlify.app; editorial van guides)'
OUT = Path('public/images/vehicles')


def fetch(url):
    for attempt in range(5):
        try:
            req = urllib.request.Request(url, headers={'User-Agent': UA})
            with urllib.request.urlopen(req, timeout=60) as r:
                return r.read()
        except urllib.error.HTTPError as e:
            if e.code != 429 or attempt == 4:
                raise
            time.sleep(10 * (attempt + 1))


cands = json.load(open(sys.argv[1]))
picks = json.load(open(sys.argv[2]))
OUT.mkdir(parents=True, exist_ok=True)
data_path = Path('src/data/images.json')
data = json.loads(data_path.read_text()) if data_path.exists() else {}
for slug, (src, idx, note) in picks.items():
    c = cands[src][idx]
    try:
        im = Image.open(io.BytesIO(fetch(c['thumb']))).convert('RGB')
    except Exception as e:
        print('FAILED', slug, e, flush=True)
        continue
    im.thumbnail((1200, 1200))
    im.save(OUT / f'{slug}.jpg', quality=80, optimize=True, progressive=True)
    data[slug] = {
        'file': f'/images/vehicles/{slug}.jpg', 'page': c['page'], 'author': c['author'],
        'licence': c['licence'], 'licenceUrl': c['licenceUrl'], 'title': c['title'], 'note': note,
    }
    print('ok', slug, im.size, flush=True)
    time.sleep(1.5)
data_path.write_text(json.dumps(dict(sorted(data.items())), indent=1, ensure_ascii=False))

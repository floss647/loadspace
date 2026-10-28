#!/usr/bin/env python3
"""Download candidate thumbnails and make labelled contact sheets for picking images by eye.

Usage: python3 scripts/contact_sheet.py candidates.json out_dir
Each sheet shows several vehicles, one row each, candidates numbered 0-5.
"""
import io, json, re, sys, time, urllib.error, urllib.request
from pathlib import Path
from PIL import Image, ImageDraw

UA = 'LoadspaceImageFinder/0.1 (https://loadspace-vans.netlify.app; editorial van guides)'
TW, TH, LABEL = 240, 135, 230
PER_SHEET = 6


def fetch(url):
    # Back off and retry when Wikimedia says we're going too fast.
    for attempt in range(5):
        req = urllib.request.Request(url, headers={'User-Agent': UA})
        try:
            with urllib.request.urlopen(req, timeout=30) as r:
                return Image.open(io.BytesIO(r.read())).convert('RGB')
        except urllib.error.HTTPError as e:
            if e.code != 429 or attempt == 4:
                raise
            time.sleep(10 * (attempt + 1))


def main():
    cands = json.load(open(sys.argv[1]))
    out = Path(sys.argv[2]); out.mkdir(parents=True, exist_ok=True)
    slugs = [s for s, c in cands.items() if c]
    for n in range(0, len(slugs), PER_SHEET):
        group = slugs[n:n + PER_SHEET]
        sheet = Image.new('RGB', (LABEL + 6 * (TW + 6), len(group) * (TH + 24)), 'white')
        d = ImageDraw.Draw(sheet)
        for r, slug in enumerate(group):
            y = r * (TH + 24)
            d.text((4, y + 4), slug, fill='black')
            for i, c in enumerate(cands[slug][:6]):
                try:
                    im = fetch(re.sub(r'/\d+px-', '/330px-', c['thumb']))
                    im.thumbnail((TW, TH))
                    x = LABEL + i * (TW + 6)
                    sheet.paste(im, (x, y + 18))
                    d.text((x + 2, y + 2), str(i), fill='red')
                except Exception as e:
                    print('fail', slug, i, e, flush=True)
                time.sleep(1.5)
        sheet.save(out / f'sheet_{n // PER_SHEET:02d}.jpg', quality=82)
        print('sheet', n // PER_SHEET, group, flush=True)


if __name__ == '__main__':
    main()

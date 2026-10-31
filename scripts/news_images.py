#!/usr/bin/env python3
"""
Make an image for every news post and every Overloaded blog column.

For each Markdown post in src/pages/news/ and src/pages/blog/:
  - if it sets `photo: <vehicle-slug>` and we have that licensed vehicle photo, use it;
  - otherwise draw a branded image from `stat` + `statLabel` (or the title if there's no stat).

Writes public/images/<section>/<post>.jpg (1600x900) and a card/ copy (800x450),
and src/data/<section>-images.json with the image path and any photo credit.

Run after adding or editing a post:  python3 scripts/news_images.py
"""
import json, re, textwrap
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter, ImageFont, ImageOps

ROOT = Path(__file__).resolve().parent.parent
SECTIONS = [  # (posts folder, image folder, data file, branded style)
    ('news', 'news'),
    ('blog', 'column'),
]
FONTS = ROOT / 'scripts/fonts'
PHOTOS = json.loads((ROOT / 'src/data/images.json').read_text())
_extra = ROOT / 'src/data/photos.json'  # general photo library (scripts/add_photo.py)
if _extra.exists():
    PHOTOS.update(json.loads(_extra.read_text()))

NAVY, NAVY2, AMBER, WHITE, MUTED = '#14213d', '#0b1a33', '#f2b705', '#ffffff', '#c9d1de'
W, H = 1600, 900


def font(name, size):
    return ImageFont.truetype(str(FONTS / name), size)


def frontmatter(text):
    m = re.match(r'^---\n(.*?)\n---', text, re.S)
    data = {}
    if not m:
        return data
    for line in m.group(1).splitlines():
        kv = re.match(r'^([A-Za-z]+):\s*(.*)$', line)
        if kv and kv.group(2):
            data[kv.group(1)] = kv.group(2).strip().strip('"')
    return data


def fit_lines(draw, text, fnt, max_w, max_lines):
    """Wrap text to max_w pixels; returns lines (ellipsis if too long)."""
    words, lines, cur = text.split(), [], ''
    for w in words:
        test = (cur + ' ' + w).strip()
        if draw.textlength(test, font=fnt) <= max_w:
            cur = test
        else:
            lines.append(cur); cur = w
    lines.append(cur)
    if len(lines) > max_lines:
        lines = lines[:max_lines]
        lines[-1] = lines[-1].rstrip('.,') + '…'
    return lines


def badge(im):
    """Small amber OVERLOADED tag in the corner of a column photo."""
    d = ImageDraw.Draw(im)
    f = font('InterDisplay-Bold.otf', 40)
    w = d.textlength('OVERLOADED', font=f)
    d.rounded_rectangle([48, 48, 48 + w + 56, 48 + 74], radius=37, fill=AMBER)
    d.text((76, 60), 'OVERLOADED', font=f, fill=NAVY)


def column_card(fm):
    """Branded image for the Overloaded column: amber, with the column name and headline."""
    im = Image.new('RGB', (W, H), AMBER)
    d = ImageDraw.Draw(im)
    d.polygon([(W * 0.66, 0), (W, 0), (W, H), (W * 0.5, H)], fill='#e0a800')
    sil = [(1180, 690), (1180, 520), (1420, 520), (1500, 590), (1560, 590), (1560, 690)]
    d.polygon(sil, fill='#cf9b00')
    for cx in (1250, 1490):
        d.ellipse([cx - 38, 652, cx + 38, 728], fill=NAVY)
    d.rectangle([0, 0, 18, H], fill=NAVY)
    d.text((90, 70), 'OVERLOADED', font=font('InterDisplay-Bold.otf', 64), fill=NAVY)
    d.text((92, 150), 'The weekly van column from Loadspace', font=font('Inter-Medium.otf', 30), fill=NAVY)
    hf = font('InterDisplay-Bold.otf', 82)
    y = 270
    for line in fit_lines(d, fm.get('title', ''), hf, 1080, 5):
        d.text((90, y), line, font=hf, fill=NAVY); y += 98
    return im


def branded(fm):
    im = Image.new('RGB', (W, H), NAVY)
    d = ImageDraw.Draw(im)
    # Subtle diagonal band and van silhouette for texture.
    d.polygon([(W * 0.62, 0), (W, 0), (W, H), (W * 0.42, H)], fill=NAVY2)
    sil = [(1180, 690), (1180, 520), (1420, 520), (1500, 590), (1560, 590), (1560, 690)]
    d.polygon(sil, fill='#1c2c4f')
    for cx in (1250, 1490):
        d.ellipse([cx - 38, 652, cx + 38, 728], fill=NAVY2)
    # Accent bar, brand and tag.
    d.rectangle([0, 0, 18, H], fill=AMBER)
    d.text((90, 78), 'Loadspace', font=font('InterDisplay-Bold.otf', 46), fill=WHITE)
    tag = (fm.get('tag') or 'News').upper()
    tf = font('Inter-SemiBold.otf', 30)
    tw = d.textlength(tag, font=tf)
    d.rounded_rectangle([90, 160, 90 + tw + 44, 214], radius=27, fill=AMBER)
    d.text((112, 167), tag, font=tf, fill=NAVY)

    stat = fm.get('stat')
    if stat:
        size = 230 if len(stat) <= 6 else 170 if len(stat) <= 10 else 130
        sf = font('InterDisplay-Bold.otf', size)
        d.text((86, 250), stat, font=sf, fill=AMBER)
        y = 250 + size + 40
        lf = font('Inter-Medium.otf', 52)
        for line in fit_lines(d, fm.get('statLabel', ''), lf, 1000, 3):
            d.text((92, y), line, font=lf, fill=WHITE); y += 68
    else:
        hf = font('InterDisplay-Bold.otf', 84)
        y = 280
        for line in fit_lines(d, fm.get('title', ''), hf, 1080, 4):
            d.text((90, y), line, font=hf, fill=WHITE); y += 100
    d.text((92, H - 92), 'loadspace · independent electric van advice', font=font('Inter-Medium.otf', 28), fill=MUTED)
    return im


def from_photo(slug):
    src = ROOT / 'public' / PHOTOS[slug]['file'].lstrip('/')
    return ImageOps.fit(Image.open(src).convert('RGB'), (W, H), method=Image.LANCZOS, centering=(0.5, 0.55))


def main():
    for section, style in SECTIONS:
        make_section(section, style)


def make_section(section, style):
    POSTS = ROOT / 'src/pages' / section
    OUT = ROOT / 'public/images' / section
    if not POSTS.exists():
        return
    (OUT / 'card').mkdir(parents=True, exist_ok=True)
    meta = {}
    for md in sorted(POSTS.glob('*.md')):
        fm = frontmatter(md.read_text())
        slug = md.stem
        photo = fm.get('photo')
        if photo and photo in PHOTOS:
            im = from_photo(photo)
            # Press photos are editorial-only and mustn't be edited, so no badge on them.
            if style == 'column' and not PHOTOS[photo].get('editorialOnly'):
                badge(im)
            p = PHOTOS[photo]
            meta[slug] = {'image': f'/images/{section}/{slug}.jpg', 'credit': (f"Photo: {p.get('author')} press image" if p.get('source') else f"Photo: {p.get('author') or 'Wikimedia Commons'}, Wikimedia Commons, {p.get('licence')}"), 'creditUrl': p.get('page'), 'alt': fm.get('title', '')}
        else:
            im = column_card(fm) if style == 'column' else branded(fm)
            meta[slug] = {'image': f'/images/{section}/{slug}.jpg', 'alt': fm.get('stat', '') + ' ' + fm.get('statLabel', fm.get('title', ''))}
        im.save(OUT / f'{slug}.jpg', quality=85, optimize=True, progressive=True)
        card = im.resize((800, 450), Image.LANCZOS).filter(ImageFilter.UnsharpMask(radius=1, percent=50, threshold=2))
        card.save(OUT / 'card' / f'{slug}.jpg', quality=86, optimize=True, progressive=True)
        print(slug, 'photo' if photo in PHOTOS else 'branded')
    (ROOT / f'src/data/{section}-images.json').write_text(json.dumps(meta, indent=1, ensure_ascii=False))


if __name__ == '__main__':
    main()

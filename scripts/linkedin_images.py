#!/usr/bin/env python3
"""
Images for the LinkedIn posts in marketing/linkedin-posts.md (1200x1200, our own charts and cards).

Every figure here is copied from src/data/reliability.json, a verified news story or the
lease calculator, as listed in each post's "Facts used" note. Press photos are never used:
their terms allow editorial use only.

Run: python3 scripts/linkedin_images.py   ->  marketing/images/post-1.png ... post-8.png
"""
import json
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageOps

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / 'marketing/images'
FONTS = ROOT / 'scripts/fonts'
REL = json.loads((ROOT / 'src/data/reliability.json').read_text())

S = 1200
NAVY, NAVY2, AMBER, WHITE, INK, MUTED, GRID, BG = '#1c1426', '#130d1a', '#ff4f9a', '#ffffff', '#1c1426', '#5b6573', '#e3e6eb', '#fcfcfb'
BLUE, GOLD = '#3b6bc6', '#c98a00'  # validated chart pair (dataviz validator: all checks pass, labels required)


def font(name, size):
    return ImageFont.truetype(str(FONTS / name), size)


BOLD = lambda s: font('InterDisplay-Bold.otf', s)
SEMI = lambda s: font('Inter-SemiBold.otf', s)
MED = lambda s: font('Inter-Medium.otf', s)


def text(d, xy, s, f, fill, anchor='la'):
    assert '\u2014' not in s, f'em dash in image text: {s}'
    d.text(xy, s, font=f, fill=fill, anchor=anchor)


def wrap(d, s, f, width):
    words, lines, cur = s.split(), [], ''
    for w in words:
        t = (cur + ' ' + w).strip()
        if d.textlength(t, font=f) <= width:
            cur = t
        else:
            lines.append(cur)
            cur = w
    return lines + [cur]


def frame(title, subtitle=None, dark=False):
    im = Image.new('RGB', (S, S), NAVY if dark else BG)
    d = ImageDraw.Draw(im)
    d.rectangle([0, 0, S, 14], fill=AMBER)
    text(d, (70, 70), 'LOADSPACE', BOLD(30), AMBER if dark else NAVY)
    y = 130
    for line in wrap(d, title, BOLD(60), S - 140):
        text(d, (70, y), line, BOLD(60), WHITE if dark else INK)
        y += 70
    if subtitle:
        y += 6
        for line in wrap(d, subtitle, MED(30), S - 140):
            text(d, (70, y), line, MED(30), '#e6dced' if dark else MUTED)
            y += 40
    return im, d, y + 30


def footer(d, source, dark=False):
    y = S - 70
    for line in reversed(wrap(d, source, MED(22), S - 140)):
        text(d, (70, y), line, MED(22), '#b9a9c9' if dark else MUTED)
        y -= 30


def hbars(d, top, rows, vmax, highlight=None, ref=None, bottom=S - 230, maxstep=92):
    """Horizontal bars with labels on the left and values at the bar end."""
    left, right = 470, S - 150
    n = len(rows)
    step = min(maxstep, (bottom - top - 40) / n)
    bar = step * 0.56
    scale = lambda v: left + (right - left) * v / vmax
    for gx in range(0, int(vmax) + 1, 10):
        x = scale(gx)
        d.line([(x, top - 10), (x, top + step * n)], fill=GRID, width=2)
        text(d, (x, top + step * n + 10), f'{gx}%', MED(20), MUTED, 'ma')
    if ref is not None:
        x = scale(ref[0])
        for yy in range(int(top - 14), int(top + step * n), 14):
            d.line([(x, yy), (x, yy + 7)], fill=NAVY, width=3)
        text(d, (x - 8, top - 44), ref[1], SEMI(22), NAVY, 'ra')
    for i, (label, value, note) in enumerate(rows):
        y = top + i * step
        colour = GOLD if highlight and highlight(label) else BLUE
        d.rounded_rectangle([left, y, scale(value), y + bar], radius=4, fill=colour)
        d.rectangle([left, y, left + 6, y + bar], fill=colour)
        text(d, (left - 18, y + bar / 2), label, SEMI(26), INK, 'rm')
        if note:
            text(d, (left - 18, y + bar / 2 + 24), note, MED(18), MUTED, 'rm')
        lab = f'{value}%'
        lw = d.textlength(lab, font=BOLD(28))
        d.rectangle([scale(value) + 6, y + bar / 2 - 18, scale(value) + 18 + lw, y + bar / 2 + 18], fill=BG)
        text(d, (scale(value) + 12, y + bar / 2), lab, BOLD(28), INK, 'lm')


def post1():
    im, d, y = frame('Straight answers on electric vans and trucks', 'Independent, plain English, and every figure checked against its source.', dark=True)
    items = ['Buying guides for every electric van, pickup and truck on sale in the UK',
             'Used electric van guides', 'Free calculators: electric vs diesel, fleet switch, lease vs buy, lease true cost',
             'MOT reliability rankings from DVSA data', 'Fact-checked news, and a weekly column']
    y += 30
    for it in items:
        d.rounded_rectangle([70, y + 8, 88, y + 26], radius=4, fill=AMBER)
        for line in wrap(d, it, SEMI(34), S - 220):
            text(d, (115, y), line, SEMI(34), WHITE)
            y += 46
        y += 22
    text(d, (70, S - 120), 'We don\'t sell vans or trucks. Rankings are never for sale.', MED(28), '#e6dced')
    return im


def post2():
    im, d, y = frame('Record month for electric vans. Still well short of the target.', 'Battery electric share of new vans, against the zero emission vehicle mandate')
    rows = [('September 2026', 9.6, ''), ('Jan to Sep 2026', 10.8, ''), ('2026 target', 24, ''), ('2030 target (current rules)', 70, 'under review: options 60, 50 or 40%')]
    hbars(d, y + 60, rows, 80, highlight=lambda l: 'target' in l)
    footer(d, 'Sources: SMMT September 2026 van registrations; DfT ZEV mandate review consultation, August 2026. Shares are of all new light commercial vehicles, as SMMT reports them.')
    return im


def post3():
    by = lambda slug: REL['models'][slug]['byAge']['5-6']['failRate']
    allv = REL['allVansByAge']['5-6']['failRate']
    im, d, y = frame('Which vans fail their MOT least at 5 to 6 years old?', 'Share of 2024 MOT tests failed at the first attempt. Lower is better.')
    rows = [('Mitsubishi L200', by('mitsubishi-l200'), ''), ('VW Amarok', by('volkswagen-amarok'), 'previous, VW-built generation'),
            ('Toyota Hilux', by('toyota-hilux'), ''), ('VW Transporter', by('volkswagen-transporter'), 'T6/T6.1, incl. passenger and camper'),
            ('Vauxhall Movano', by('vauxhall-movano'), ''), ('Renault Kangoo', by('renault-kangoo'), ''), ('KGM Musso', by('kgm-musso'), 'small sample')]
    hbars(d, y + 70, rows, 45, ref=(allv, f'All tracked vans combined: {allv}%'))
    footer(d, 'Source: DVSA anonymised MOT data, 2024 tests. Initial tests only, not retests. Models with at least 300 tests. Almost all diesel: it shows how bodies, brakes, suspension and steering hold up, not batteries.')
    return im


def post4():
    src = ROOT / 'public/images/photos/royal-mail-electric-van.jpg'
    photo = ImageOps.fit(Image.open(src).convert('RGB'), (S, 760), centering=(0.5, 0.5))
    im = Image.new('RGB', (S, S), AMBER)
    im.paste(photo, (0, 0))
    d = ImageDraw.Draw(im)
    text(d, (70, 800), 'OVERLOADED', BOLD(76), NAVY)
    text(d, (70, 900), 'A weekly, slightly unhinged look at vans,', MED(34), NAVY)
    text(d, (70, 945), 'fleets and the people who run them.', MED(34), NAVY)
    text(d, (70, 1030), 'Out every Friday at Loadspace.', SEMI(30), NAVY)
    text(d, (70, S - 60), 'Photo: Aethonatic, Wikimedia Commons, CC0', MED(20), NAVY)
    return im


def post5():
    im, d, y = frame('The Zero Emission Van Grant, in two numbers', 'Taken off the price by the dealer. You don\'t apply.', dark=True)
    y += 40
    for amount, label in [('£2,500', 'up to, off some small electric vans (under 2,500kg)'), ('£5,000', 'up to, off some large electric vans (2,500 to 4,250kg)')]:
        text(d, (70, y), amount, BOLD(150), AMBER)
        for line in wrap(d, label, SEMI(36), S - 140):
            y += 0
        y += 170
        for line in wrap(d, label, SEMI(36), S - 140):
            text(d, (75, y), line, SEMI(36), WHITE)
            y += 46
        y += 40
    footer(d, 'Source: GOV.UK, Zero Emission Vehicle Grants: vans. New vans only, on the approved list. Check with your dealer before you order.', dark=True)
    return im


def post6():
    A = REL['allVansByAge']
    im, d, y = frame('A five-year-old van is not a ten-year-old van', 'Share of 2024 MOT tests failed at the first attempt, all tracked van and pickup models combined')
    bands = [('3–4', '3-4'), ('5–6', '5-6'), ('7–9', '7-9'), ('10–14', '10-14')]
    left, right, base, topy = 150, S - 90, S - 230, y + 90
    vmax = 50
    scale = lambda v: base - (base - topy) * v / vmax
    for g in range(0, vmax + 1, 10):
        d.line([(left - 20, scale(g)), (right, scale(g))], fill=GRID, width=2)
        text(d, (left - 30, scale(g)), f'{g}%', MED(20), MUTED, 'rm')
    w = (right - left) / len(bands)
    for i, (lab, key) in enumerate(bands):
        v = A[key]['failRate']
        x0, x1 = left + i * w + w * 0.2, left + (i + 1) * w - w * 0.2
        d.rounded_rectangle([x0, scale(v), x1, base], radius=4, fill=BLUE)
        d.rectangle([x0, base - 6, x1, base], fill=BLUE)
        text(d, ((x0 + x1) / 2, scale(v) - 14), f'{v}%', BOLD(34), INK, 'md')
        text(d, ((x0 + x1) / 2, base + 16), f'{lab} years', SEMI(26), INK, 'ma')
        text(d, ((x0 + x1) / 2, base + 50), f'avg {A[key]["avgMiles"]:,} miles', MED(20), MUTED, 'ma')
    footer(d, 'Source: DVSA anonymised MOT data, 2024 tests. Initial tests only, not retests. Each age band includes a different mix of models.')
    return im


def post7():
    im, d, y = frame('"£279 a month" is almost never £279 a month', 'Example: 6 + 35 profile on a 36-month lease, plus a £300 admin fee', dark=True)
    y += 60
    text(d, (70, y), 'Advertised', SEMI(34), '#e6dced')
    text(d, (70, y + 50), '£279', BOLD(140), WHITE)
    text(d, (620, y), 'What you really pay', SEMI(34), '#e6dced')
    text(d, (620, y + 50), '£326', BOLD(140), AMBER)
    text(d, (620, y + 210), 'a month, spread over 36 months', MED(28), '#e6dced')
    y += 330
    for line in ['41 payments of £279 for 36 months, plus the fee:', '£11,739 in total, about 17% more than the advert.']:
        text(d, (70, y), line, SEMI(34), WHITE)
        y += 50
    footer(d, 'Worked example from the Loadspace lease true-cost calculator. Put your own quote in, free, no sign-up.', dark=True)
    return im


def post8():
    tge, cra = REL['models']['man-tge']['byAge']['3-4'], REL['models']['volkswagen-crafter']['byAge']['3-4']
    im, d, y = frame('Same van. Different badge. Different MOT results.', 'Share of 2024 MOT tests failed at the first attempt, vans aged 3 to 4 years')
    rows = [('MAN TGE', tge['failRate'], f'{tge["tests"]:,} tests, avg {tge["avgMiles"]:,} miles'),
            ('VW Crafter', cra['failRate'], f'{cra["tests"]:,} tests, avg {cra["avgMiles"]:,} miles, incl. campers')]
    hbars(d, y + 150, rows, 30, highlight=lambda l: l == 'MAN TGE', bottom=y + 150 + 2 * 170 + 40, maxstep=170)
    text(d, (70, y + 610), 'The TGE is a rebadged Crafter, yet it failed less often', SEMI(32), INK)
    text(d, (70, y + 655), 'despite averaging about 10,000 more miles.', SEMI(32), INK)
    footer(d, 'Source: DVSA anonymised MOT data, 2024 tests. Initial tests only, not retests. Same generation of van in both.')
    return im


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    for n, fn in enumerate([post1, post2, post3, post4, post5, post6, post7, post8], 1):
        fn().save(OUT / f'post-{n}.png', optimize=True)
        print('made', f'post-{n}.png')


if __name__ == '__main__':
    main()

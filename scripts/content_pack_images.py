#!/usr/bin/env python3
"""
Images for the LinkedIn posts in marketing/content-pack-2026-11.md, Part 1 (1200x1200, our own
charts and cards).

Every figure here is copied exactly from its post's text in marketing/content-pack-2026-11.md
(which was fact-checked against the site's spec pages, reviews and tax rules page). No figure
appears that isn't in the post, and each post's caveats are carried as a footnote. Maker press
photos and logos are never used: their terms allow editorial use only.

Style and helpers follow scripts/linkedin_images.py, branded "Van Electric".

Run: python3 scripts/content_pack_images.py   ->  marketing/images/pack-post-1.png ... pack-post-10.png
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / 'marketing/images'
FONTS = ROOT / 'scripts/fonts'

S = 1200
NAVY, NAVY2, AMBER, WHITE, INK, MUTED, GRID, BG = '#14213d', '#0b1a33', '#f2b705', '#ffffff', '#14213d', '#5b6573', '#e3e6eb', '#fcfcfb'
BLUE, GOLD = '#3b6bc6', '#c98a00'  # validated chart pair (dataviz validator: all checks pass, labels required)
PALE_BLUE, CARD = '#c9d6ef', '#f1f3f6'
LIGHT_ON_DARK, FAINT_ON_DARK = '#c9d1de', '#9aa4b2'


def font(name, size):
    return ImageFont.truetype(str(FONTS / name), size)


BOLD = lambda s: font('InterDisplay-Bold.otf', s)
SEMI = lambda s: font('Inter-SemiBold.otf', s)
MED = lambda s: font('Inter-Medium.otf', s)


def text(d, xy, s, f, fill, anchor='la'):
    assert '\u2014' not in s, f'em dash in image text: {s}'
    x0, y0, x1, y1 = d.textbbox(xy, s, font=f, anchor=anchor)
    assert x0 >= 40 and x1 <= S - 40 and y0 >= 0 and y1 <= S, f'text off the card: {s!r} {(x0, y0, x1, y1)}'
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


def para(d, x, y, s, f, fill, width, lh):
    """Wrapped paragraph; returns the y below it."""
    for line in wrap(d, s, f, width):
        text(d, (x, y), line, f, fill)
        y += lh
    return y


def frame(title, subtitle=None, dark=False, tsize=60):
    im = Image.new('RGB', (S, S), NAVY if dark else BG)
    d = ImageDraw.Draw(im)
    d.rectangle([0, 0, S, 14], fill=AMBER)
    text(d, (70, 70), 'VAN ELECTRIC', BOLD(30), AMBER if dark else NAVY)
    y = 130
    for line in wrap(d, title, BOLD(tsize), S - 140):
        text(d, (70, y), line, BOLD(tsize), WHITE if dark else INK)
        y += int(tsize * 1.17)
    if subtitle:
        y += 6
        y = para(d, 70, y, subtitle, MED(30), LIGHT_ON_DARK if dark else MUTED, S - 140, 40)
    return im, d, y + 30


def footer(d, notes, content_bottom, url='vanelectric.co.uk', dark=False):
    """Footnote lines above a URL line. Asserts the content above doesn't run into them."""
    size = 26
    while d.textlength(url, font=SEMI(size)) > S - 140:
        size -= 1
    text(d, (70, S - 60), url, SEMI(size), AMBER if dark else NAVY, 'ls')
    lines = [l for n in notes for l in wrap(d, n, MED(22), S - 140)]
    y = S - 100 - 30 * (len(lines) - 1)
    top = y - 24
    assert content_bottom <= top - 16, f'content ({content_bottom}) overlaps footnotes ({top})'
    for line in lines:
        text(d, (70, y), line, MED(22), FAINT_ON_DARK if dark else MUTED, 'ls')
        y += 30


def legend(d, x, y, items):
    for colour, label in items:
        d.rounded_rectangle([x, y + 4, x + 26, y + 30], radius=4, fill=colour)
        text(d, (x + 38, y), label, SEMI(26), INK)
        y += 42
    return y


def hbars(d, top, rows, vmax, grid_step, unit_fmt, left=470, right=S - 290, step=100):
    """rows: (label, note, low, high, value label, colour). A range is a solid bar to the low
    value with a paler extension to the high value."""
    n = len(rows)
    scale = lambda v: left + (right - left) * v / vmax
    for g in range(0, int(vmax) + 1, grid_step):
        x = scale(g)
        d.line([(x, top - 10), (x, top + step * n - 20)], fill=GRID, width=2)
        text(d, (x, top + step * n - 10), unit_fmt(g), MED(20), MUTED, 'ma')
    bar = 46
    for i, (label, note, lo, hi, vlab, colour) in enumerate(rows):
        y = top + i * step
        pale = PALE_BLUE if colour == BLUE else '#f0d9a3'
        if hi > lo:
            d.rounded_rectangle([left, y, scale(hi), y + bar], radius=4, fill=pale)
        d.rounded_rectangle([left, y, scale(lo), y + bar], radius=4, fill=colour)
        d.rectangle([left, y, left + 6, y + bar], fill=colour)
        text(d, (left - 18, y + (bar / 2 - 12 if note else bar / 2)), label, SEMI(26), INK, 'rm')
        if note:
            text(d, (left - 18, y + bar / 2 + 18), note, MED(20), MUTED, 'rm')
        text(d, (scale(hi) + 14, y + bar / 2), vlab, BOLD(28), INK, 'lm')
    return top + step * n + 20


# ---------------------------------------------------------------- posts

def post1():
    im, d, y = frame('Is the driver in the payload figure?', "Payload figures from the makers' own UK documents, as shown on our spec pages")
    y = legend(d, 70, y, [(BLUE, "The driver's weight comes out of the figure"), (GOLD, 'The driver is already allowed for')])
    kg = lambda v: f'{v:,}kg'
    rows = [('Citroën ë-Dispatch', 'M panel van', 1210, 1210, '1,210kg', BLUE),
            ('Volkswagen e-Transporter', 'LWB 136PS', 1151, 1156, '1,151 to 1,156kg', BLUE),
            ('Ford Transit City', 'LWB high roof', 1275, 1275, '1,275kg', BLUE),
            ('Volkswagen ID. Buzz Cargo', '79kWh, includes 75kg driver', 676, 690, '676 to 690kg', GOLD)]
    y = hbars(d, y + 30, rows, 1500, 500, kg, step=96)
    y += 20
    text(d, (70, y), "Appears to allow for people in the cab, but the maker doesn't spell it out:", SEMI(26), INK)
    y = para(d, 70, y + 40, 'Kia PV5 Cargo: each payload is 75kg less than gross weight minus kerb weight. Farizon SV: kerb weights are listed "with two occupants".', MED(24), MUTED, S - 140, 34)
    footer(d, ["Kia's figures are all targets, pending homologation. VW's unladen weights include 75kg for the driver.",
               'Options cut payload too. Ask the dealer for the plated payload of the exact van.'], y)
    return im


def post2():
    im, d, y = frame('Rapid charge times start from different places', "The makers' own figures. Check the start and finish charge, and the charger power.", tsize=56)
    rows = [('Ford E-Transit Custom', '10 to 80%, up to 125kW', 29, "Ford's price list"),
            ('Volkswagen e-Transporter', '10 to 80%, up to 125kW', 29, ''),
            ('Citroën ë-Berlingo', '0 to 80%, up to 100kW', 30, ''),
            ('Ford Transit City', '10 to 80%, up to 87kW', 33, ''),
            ('Nissan Townstar EV', '15 to 80%, up to 80kW', 37, ''),
            ('Renault Kangoo E-Tech', '20 to 80%, up to 80kW', 40, ''),
            ('Citroën ë-Dispatch', '5 to 80%, 100kW', 45, ''),
            ('Citroën ë-Relay', '5 to 80%, 150kW rapid charger', 55, '')]
    rows = [(l, n, v, v, f'{v} min', BLUE) for l, n, v, _ in rows]
    y = hbars(d, y + 20, rows, 60, 10, lambda g: f'{g} min', left=430, right=S - 200, step=74)
    footer(d, ["Ford E-Transit Custom: 29 minutes is Ford's price list figure; its website says about 39 minutes.",
               'Five different starting points across eight vans, and the batteries differ in size too.'], y + 20)
    return im


def post3():
    im, d, y = frame('Electric van battery warranties', "From the makers' own UK documents. The capacity figure is the level the battery is covered down to.")
    rows = [('Citroën ë-Dispatch and Peugeot E-Expert', '8 years or 100,000 miles', 'to 70%'),
            ('Volkswagen e-Transporter', '8 years or 100,000 miles', 'at least 70%'),
            ('Nissan Townstar EV and Interstar-e', '8 years or 100,000 miles', 'to 70%'),
            ('Renault Kangoo E-Tech', '8 years or 100,000 miles', 'not stated'),
            ('Mercedes-Benz eSprinter', '8 years or 100,000 miles', 'not stated'),
            ('Farizon SV and V7E', '8 years or 120,000 miles', 'not stated'),
            ('KGM Musso EV pickup', '10 years or 1 million km', 'not stated')]
    c1, c2, c3 = 70, 560, 920
    text(d, (c1, y), 'Van', SEMI(22), MUTED)
    text(d, (c2, y), 'Battery warranty', SEMI(22), MUTED)
    text(d, (c3, y), 'Capacity', SEMI(22), MUTED)
    y += 38
    for name, war, cap in rows:
        longer = not war.startswith('8 years or 100,000')
        nl = wrap(d, name, SEMI(26), c2 - c1 - 30)
        h = max(len(nl), 1) * 34 + 40
        if longer:
            d.rectangle([50, y, S - 50, y + h], fill='#fbefc9')
        d.line([(50, y), (S - 50, y)], fill=GRID, width=2)
        yy = y + 20
        for line in nl:
            text(d, (c1, yy), line, SEMI(26), INK)
            yy += 34
        text(d, (c2, y + 20), war, BOLD(26), INK)
        text(d, (c3, y + 20), cap, MED(26), MUTED if cap == 'not stated' else INK)
        y += h
    d.line([(50, y), (S - 50, y)], fill=GRID, width=2)
    footer(d, ['Not stated: ask the dealer what the warranty guarantees. Shaded: longer than 8 years or 100,000 miles.',
               "The battery warranty isn't the van warranty. Citroën's van warranty on the ë-Berlingo is three years: two years with unlimited mileage from Citroën, then a year from the retailer, limited to 100,000 miles."], y)
    return im


def post4():
    im, d, y = frame('Which electric vans are twins', 'The same van with a different badge, as our reviews group them')
    groups = [('Stellantis small van', ['Citroën ë-Berlingo', 'Peugeot E-Partner', 'Vauxhall Combo Electric', 'Fiat E-Doblo', 'Toyota Proace City Electric']),
              ('Stellantis medium van', ['Citroën ë-Dispatch', 'Peugeot E-Expert', 'Vauxhall Vivaro Electric', 'Fiat E-Scudo', 'Toyota Proace Electric']),
              ('Stellantis large van', ['Citroën ë-Relay', 'Peugeot E-Boxer', 'Vauxhall Movano Electric', 'Fiat E-Ducato', 'Toyota Proace Max Electric']),
              ('Kangoo family', ['Renault Kangoo E-Tech', 'Nissan Townstar EV', 'Mercedes-Benz eCitan']),
              ('Master family', ['Renault Master E-Tech', 'Nissan Interstar-e']),
              ('Close relatives, not identical', ['Ford E-Transit Custom', 'Volkswagen e-Transporter', 'Developed jointly, sharing their underpinnings'])]
    w, gap = (S - 140 - 24) / 2, 24
    heights = [228, 228, 178]
    for i, (head, names) in enumerate(groups):
        r, c = divmod(i, 2)
        x0 = 70 + c * (w + gap)
        y0 = y + sum(heights[:r]) + r * 20
        relative = head.startswith('Close')
        d.rounded_rectangle([x0, y0, x0 + w, y0 + heights[r]], radius=10, fill=CARD, outline=GOLD if relative else BLUE, width=3)
        text(d, (x0 + 22, y0 + 16), head.upper(), BOLD(22), GOLD if relative else BLUE)
        yy = y0 + 52
        for j, nm in enumerate(names):
            note = relative and j == 2
            for line in wrap(d, nm, MED(20) if note else SEMI(25), w - 44):
                text(d, (x0 + 22, yy), line, MED(20) if note else SEMI(25), MUTED if note else INK)
                yy += 28 if note else 33
        assert yy <= y0 + heights[r] + 4, f'box overflow: {head}'
    bottom = y + sum(heights) + 40
    footer(d, ["Same van doesn't mean same deal: Nissan gives the Townstar EV and Interstar-e a five-year, 100,000-mile van warranty. Renault gives their twins, the Kangoo and Master, three years."], bottom)
    return im


def post5():
    im, d, y = frame('Company van tax: electric v diesel', '2026/27, when an employee can use a company van privately', dark=True)
    y += 30
    cols = [(70, 'Diesel or petrol van', '£4,170', 'van benefit charge', '+ £798', 'van fuel benefit charge, if the business pays for private fuel', WHITE),
            (650, 'Zero-emission van', 'Nil', 'van benefit charge', 'Nil', 'van fuel benefit charge', AMBER)]
    for x, head, big, lab, big2, lab2, colour in cols:
        text(d, (x, y), head, SEMI(32), LIGHT_ON_DARK)
        text(d, (x, y + 50), big, BOLD(120), colour)
        text(d, (x, y + 200), lab, SEMI(28), WHITE)
        text(d, (x, y + 270), big2, BOLD(64), colour)
        yy = y + 350
        for line in wrap(d, lab2, SEMI(26), 480):
            text(d, (x, yy), line, SEMI(26), WHITE)
            yy += 36
    d.line([(620, y), (620, y + 440)], fill='#33415e', width=2)
    bottom = para(d, 70, y + 470, "Taxed at the employee's own rate: 20% basic, 40% higher or 45% additional (Scotland's bands differ).", MED(26), LIGHT_ON_DARK, S - 140, 36)
    footer(d, ['No charge under the restricted private use condition. Check your own position with your accountant.',
               'Budget 2026, not yet in force: in the 2027 to 2028 tax year the van benefit charge is due to rise to £4,310 and the van fuel benefit charge to £825.'], bottom, dark=True)
    return im


def post6():
    im, d, y = frame('Tax relief when you buy a van', "2026/27. Electric vans now get the same relief as diesel. The 100% first-year allowance for zero-emission goods vehicles only covered vans bought before April 2025.")
    rows = [('£1 million', 'Annual Investment Allowance', 'Deduct the full cost from profits, up to £1 million a year. Diesel and electric, and a used van can qualify.'),
            ('100%', 'Full expensing', 'Limited companies, on new and unused vans only.'),
            ('40%', 'First-year allowance', 'Companies, sole traders and partnerships, on new and unused vans bought on or after 1 January 2026.'),
            ('Cash basis', 'Sole traders and partnerships', "Using the cash basis, claim the van's cost as an allowable expense instead.")]
    y += 10
    for big, head, body in rows:
        d.line([(70, y), (S - 70, y)], fill=GRID, width=2)
        text(d, (70, y + 22), big, BOLD(54 if len(big) > 5 else 64), BLUE)
        text(d, (420, y + 20), head, BOLD(30), INK)
        yy = para(d, 420, y + 62, body, MED(24), MUTED, S - 490, 32)
        y = max(yy, y + 100) + 10
    d.line([(70, y), (S - 70, y)], fill=GRID, width=2)
    footer(d, ['Budget 2026, not yet in force: from 1 January 2027 the first-year allowance on new vans is due to rise from 40% to 50%, subject to Finance Bill 2026-27 becoming law.',
               'Double-cab pickups: from April 2025, HMRC expects most to count as cars. Check with your accountant before you buy.'], y)
    return im


def post7():
    im, d, y = frame('Why a longer van can get a bigger grant', 'Zero Emission Van Grant: up to 35% off the price of an eligible new electric van. The line is gross vehicle weight.')
    tiles = [('Small van, under 2,500kg', 'up to £2,500'), ('Large van, 2,500kg to 4,250kg', 'up to £5,000')]
    w = (S - 140 - 24) / 2
    for i, (lab, amt) in enumerate(tiles):
        x0 = 70 + i * (w + 24)
        d.rounded_rectangle([x0, y, x0 + w, y + 150], radius=10, fill=NAVY)
        text(d, (x0 + 24, y + 22), lab, SEMI(26), LIGHT_ON_DARK)
        text(d, (x0 + 24, y + 62), amt, BOLD(64), AMBER)
    y += 190
    c1, c2, c3 = 70, 680, 930
    text(d, (c1, y), 'Version', SEMI(22), MUTED)
    text(d, (c2, y), 'Gross weight', SEMI(22), MUTED)
    text(d, (c3, y), 'Grant shown', SEMI(22), MUTED)
    y += 40
    rows = [('Renault Kangoo E-Tech ML19', '2,230kg', '£2,500'), ('Nissan Townstar EV Van L1', '2,240kg', '£2,500'), None,
            ('Renault Kangoo E-Tech LL21', '2,510kg', '£5,000'), ('Nissan Townstar EV Van L2', '2,510kg', '£5,000')]
    for r in rows:
        if r is None:
            for x in range(50, S - 50, 24):
                d.line([(x, y + 14), (x + 12, y + 14)], fill=GOLD, width=4)
            text(d, (S - 70, y + 32), '2,500kg line', SEMI(22), GOLD, 'ra')
            y += 64
            continue
        d.line([(50, y), (S - 50, y)], fill=GRID, width=2)
        text(d, (c1, y + 18), r[0], SEMI(28), INK)
        text(d, (c2, y + 18), r[1], MED(28), INK)
        text(d, (c3, y + 18), r[2], BOLD(30), INK)
        y += 72
    footer(d, ["Renault's figures are for the 45kWh Kangoo. Renault has announced an updated 52kWh Kangoo, so check the figures for the van you're quoted.",
               "Grants as shown in Renault's price guide and by Nissan. Only listed models qualify and grants are limited: check the exact model and trim."], y)
    return im


def post8():
    im, d, y = frame('How to read an electric van lease quote', 'Five things to check before you compare monthly prices', dark=True)
    items = [('VAT', 'Check whether each quote includes it, and compare like with like.'),
             ('The grant', "It applies to leased vans too, and counts against your business's yearly grant limit, not the leasing company's."),
             ('The total', "Add any upfront payment and fees to the monthly payments, then divide by the months you'll have the van."),
             ('The exact van', 'Battery, body length and options change range and payload. A Kia PV5 Cargo carries 670 to 800kg depending on version.'),
             ('The mileage limit', 'Make sure it fits your work.')]
    y += 10
    for i, (head, body) in enumerate(items, 1):
        d.ellipse([70, y, 122, y + 52], fill=AMBER)
        text(d, (96, y + 26), str(i), BOLD(30), NAVY, 'mm')
        text(d, (150, y + 6), head, BOLD(34), WHITE)
        y = para(d, 150, y + 50, body, MED(26), LIGHT_ON_DARK, S - 220, 34) + 16
    footer(d, ["Kia PV5 Cargo payloads are Kia's target figures, pending homologation. General guidance, not a finance offer.",
               'Limited companies should check how van lease rentals are treated with their accountant.'], y, dark=True)
    return im


def compare(title, subtitle, names, rows, notes, slug):
    """Side-by-side card. rows: (label, sublabel, left, left note, right, right note) or
    (label, sublabel, both, note) when both makers share the figure."""
    im, d, y = frame(title, subtitle, tsize=56)
    c0, c1, c2, cw = 70, 400, 800, 340
    for x, nm, colour in [(c1, names[0], BLUE), (c2, names[1], GOLD)]:
        d.rounded_rectangle([x - 14, y, x + cw + 4, y + 50], radius=8, fill=colour)
        text(d, (x, y + 25), nm, BOLD(24), WHITE, 'lm')
    y += 66
    for r in rows:
        d.line([(50, y), (S - 50, y)], fill=GRID, width=2)
        yl = para(d, c0, y + 12, r[0], SEMI(24), INK, c1 - c0 - 30, 30)
        if r[1]:
            yl = para(d, c0, yl, r[1], MED(19), MUTED, c1 - c0 - 30, 25)
        if len(r) == 4:
            yv = para(d, c1, y + 10, r[2], BOLD(27), INK, c2 + cw - c1, 35)
            if r[3]:
                yv = para(d, c1, yv, r[3], MED(19), MUTED, c2 + cw - c1, 25)
        else:
            yv = y + 10
            for x, v, n in [(c1, r[2], r[3]), (c2, r[4], r[5])]:
                yy = para(d, x, y + 10, v, BOLD(27), INK, cw, 35)
                if n:
                    yy = para(d, x, yy, n, MED(19), MUTED, cw, 25)
                yv = max(yv, yy)
        y = max(yl, yv) + 12
    d.line([(50, y), (S - 50, y)], fill=GRID, width=2)
    footer(d, notes, y, url=f'Full comparison: vanelectric.co.uk/compare/{slug}/')
    return im


def post9():
    rows = [('Rapid charge, 10 to 80%', '', '29 minutes in both price lists, at up to 125kW', "Ford's website says about 39 minutes for the Ford"),
            ('Load volume', '', '5.8m³ (short wheelbase) or 6.8m³ (long) on both', ''),
            ('Highest official range', '', '230 miles', 'SWB Trend, 100kW RWD', '225.6 miles', 'SWB, 136PS'),
            ('Payload', 'Long wheelbase, 136PS motor. Neither includes the driver.', '1,124 to 1,126kg', '100kW, RWD', '1,151 to 1,156kg', ''),
            ('Cheapest list price', 'Before VAT and the grant', '£43,630', '', '£42,260', ''),
            ('Van warranty', '', '3 years or 100,000 miles', '', 'five years or 124,000 miles', ''),
            ('Battery warranty', '', '8 years or 100,000 miles on both', '')]
    return compare('E-Transit Custom v e-Transporter', "Developed together, sharing their underpinnings. Each maker's own UK figures.",
                   ['Ford E-Transit Custom', 'VW e-Transporter'], rows,
                   ["Ford's 29 minutes is its price list figure; its website says about 39 minutes.",
                    "Price lists aren't from the same date (Ford's from 1 June 2026, VW's electric van prices valid from 15 January 2026), so get current quotes for both."],
                   'ford-transit-custom-vs-volkswagen-transporter')


def post10():
    rows = [('Cheapest list price', 'Before VAT and the grant', '£27,355', 'L1H1, Standard Range', '£29,995', '58kWh Commerce'),
            ('Load volume', '', '4.0m³ or 4.4m³', '', '3.9m³', ''),
            ('Payload', '', '670 to 800kg', '', '592 to 690kg', "VW's figures allow for a 75kg driver"),
            ('Official range', '', '177 to 258 miles', '', '218 to 277 miles', ''),
            ('Braked towing', '', '750kg or 1,500kg', '', '1,000 to 1,800kg', ''),
            ('Van warranty', '', 'seven years or 100,000 miles', '', 'three years or 100,000 miles', ''),
            ('Battery warranty', '', '8 years or 100,000 miles on both', '')]
    return compare('PV5 Cargo v ID. Buzz Cargo', "Each maker's own UK figures. Kia says all its figures are targets, pending homologation.",
                   ['Kia PV5 Cargo', 'VW ID. Buzz Cargo'], rows,
                   ["Kia's figures are targets, pending homologation. Kia's own pages disagree on the short van's range, so we use its lower figures.",
                    "Kia's payloads are higher for its 3-door vans than its 4-door ones: check which one you're being quoted for."],
                   'kia-pv5-cargo-vs-volkswagen-id-buzz-cargo')


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    for n, fn in enumerate([post1, post2, post3, post4, post5, post6, post7, post8, post9, post10], 1):
        fn().save(OUT / f'pack-post-{n}.png', optimize=True)
        print('made', f'pack-post-{n}.png')


if __name__ == '__main__':
    main()

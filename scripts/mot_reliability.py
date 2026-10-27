#!/usr/bin/env python3
"""
Build van reliability figures from DVSA's anonymised MOT test results.

Source: "Anonymised MOT tests and results" on data.gov.uk (DVSA).
Each yearly test-result file is pipe-delimited with a header row like:
  test_id|vehicle_id|test_date|test_class_id|test_type|test_result|test_mileage|
  postcode_area|make|model|colour|fuel_type|cylinder_capacity|first_use_date

What it does:
  - keeps first tests only (test_type NT), not retests
  - keeps class 4 (cars and light vans) and class 7 (goods vehicles 3,000-3,500kg)
  - matches each test to a van on the site by make and model name
  - counts initial MOT failure rate by model, by age, and by fuel

A "fail" is result F (failed) or PRS (passed after faults were fixed at the test),
matching how DVSA counts initial failures. Abandoned tests are ignored.

Usage:
  python3 scripts/mot_reliability.py results_2025.csv [more files...] \
      --out src/data/reliability.json

Files can be plain, .gz or .zip. Rows are streamed, so big files are fine.
"""
import argparse
import csv
import gzip
import io
import json
import re
import sys
import zipfile
from collections import defaultdict
from datetime import date

# Site slug -> (make pattern, model pattern). Model names in MOT data are free-ish
# text like "TRANSIT CUSTOM 300 LIMITED", so patterns match the start of the name.
# Order matters: more specific models first (Transit Custom before Transit).
MATCHERS = [
    ('ford-transit-custom', r'^FORD$', r'^(E-?)?TRANSIT CUSTOM'),
    ('ford-transit-courier', r'^FORD$', r'^(E-?)?TRANSIT COURIER'),
    ('ford-transit-connect', r'^FORD$', r'^(E-?)?TRANSIT CONNECT|^GRAND TOURNEO CONNECT'),
    ('ford-transit', r'^FORD$', r'^(E-?)?TRANSIT\b'),
    ('volkswagen-id-buzz-cargo', r'^VOLKSWAGEN$', r'^ID\.? ?BUZZ CARGO'),
    ('volkswagen-transporter', r'^VOLKSWAGEN$', r'^(E-?)?TRANSPORTER'),
    ('volkswagen-caddy-cargo', r'^VOLKSWAGEN$', r'^CADDY'),
    ('volkswagen-crafter', r'^VOLKSWAGEN$', r'^(E-?)?CRAFTER'),
    ('mercedes-benz-sprinter', r'^MERCEDES', r'^(E-?)?SPRINTER|^[2-5]\d{2} ?CDI'),
    ('mercedes-benz-vito', r'^MERCEDES', r'^(E-?)?VITO|^1\d{2} ?CDI'),
    ('mercedes-benz-citan', r'^MERCEDES', r'^(E-?)?CITAN'),
    ('vauxhall-vivaro', r'^VAUXHALL$', r'^VIVARO'),
    ('vauxhall-movano', r'^VAUXHALL$', r'^MOVANO'),
    ('vauxhall-combo', r'^VAUXHALL$', r'^COMBO'),
    ('citroen-berlingo', r'^CITRO[EË]N$', r'^(E-|Ë-)?BERLINGO'),
    ('citroen-dispatch', r'^CITRO[EË]N$', r'^(E-|Ë-)?DISPATCH'),
    ('citroen-relay', r'^CITRO[EË]N$', r'^(E-|Ë-)?RELAY'),
    ('peugeot-partner', r'^PEUGEOT$', r'^(E-)?PARTNER'),
    ('peugeot-expert', r'^PEUGEOT$', r'^(E-)?EXPERT'),
    ('peugeot-boxer', r'^PEUGEOT$', r'^(E-)?BOXER'),
    ('toyota-proace-city', r'^TOYOTA$', r'^PROACE CITY'),
    ('toyota-proace-max', r'^TOYOTA$', r'^PROACE MAX'),
    ('toyota-proace', r'^TOYOTA$', r'^PROACE'),
    ('toyota-hilux', r'^TOYOTA$', r'^HILUX'),
    ('fiat-doblo', r'^FIAT$', r'^(E-)?DOBLO'),
    ('fiat-scudo', r'^FIAT$', r'^(E-)?SCUDO'),
    ('fiat-ducato', r'^FIAT$', r'^(E-)?DUCATO'),
    ('renault-kangoo', r'^RENAULT$', r'^KANGOO'),
    ('renault-trafic', r'^RENAULT$', r'^TRAFIC'),
    ('renault-master', r'^RENAULT$', r'^MASTER'),
    ('nissan-townstar', r'^NISSAN$', r'^TOWNSTAR'),
    ('nissan-primastar', r'^NISSAN$', r'^PRIMASTAR'),
    ('nissan-interstar', r'^NISSAN$', r'^INTERSTAR'),
    ('nissan-navara', r'^NISSAN$', r'^NAVARA|^NP300'),
    ('man-tge', r'^MAN$', r'^TGE'),
    ('iveco-daily', r'^IVECO$', r'^(E-?)?DAILY|^\d{2}[CS]\d{2}'),
    ('maxus-deliver-9', r'^MAXUS$', r'^E?DELIVER ?9'),
    ('maxus-edeliver-7', r'^MAXUS$', r'^E?DELIVER ?7'),
    ('maxus-t60-t90', r'^MAXUS$', r'^E?T(60|90)'),
    ('kia-pv5-cargo', r'^KIA$', r'^PV5'),
    ('ford-ranger', r'^FORD$', r'^RANGER'),
    ('volkswagen-amarok', r'^VOLKSWAGEN$', r'^AMAROK'),
    ('isuzu-d-max', r'^ISUZU$', r'^D-?MAX'),
    ('mitsubishi-l200', r'^MITSUBISHI$', r'^L200'),
    ('kgm-musso', r'^(KGM|SSANGYONG)$', r'^MUSSO'),
    ('byd-shark', r'^BYD$', r'^SHARK'),
    ('gwm-cannon', r'^(GWM|GREAT WALL)$', r'^CANNON'),
    ('farizon-sv', r'^FARIZON$', r'^SV'),
]
COMPILED = [(slug, re.compile(mk), re.compile(md)) for slug, mk, md in MATCHERS]

# Models also sold as cars or people carriers with the same name. Their figures
# include passenger versions, so the site shows a note.
SHARED_WITH_CARS = {
    'citroen-berlingo', 'peugeot-partner', 'vauxhall-combo', 'toyota-proace-city',
    'fiat-doblo', 'renault-kangoo', 'nissan-townstar', 'mercedes-benz-citan',
    'volkswagen-caddy-cargo', 'ford-transit-connect', 'mercedes-benz-vito',
    'volkswagen-transporter', 'vauxhall-vivaro', 'citroen-dispatch', 'peugeot-expert',
    'toyota-proace', 'kia-pv5-cargo', 'volkswagen-id-buzz-cargo',
}

# Vans often converted to motorhomes or campervans, which do low miles and
# are kept carefully. Their figures include those conversions.
MOTORHOME_BASES = {
    'fiat-ducato', 'peugeot-boxer', 'citroen-relay', 'volkswagen-transporter',
    'ford-transit', 'mercedes-benz-sprinter', 'renault-master', 'volkswagen-crafter',
}

AGE_BANDS = [(3, 4, '3-4'), (5, 6, '5-6'), (7, 9, '7-9'), (10, 14, '10-14')]
FUELS = {'DI': 'Diesel', 'PE': 'Petrol', 'EL': 'Electric', 'HY': 'Hybrid'}
MIN_TESTS = 300  # don't publish a figure from fewer first tests than this


def match(make, model):
    make, model = make.strip().upper(), model.strip().upper()
    for slug, mk, md in COMPILED:
        if mk.search(make) and md.search(model):
            return slug
    return None


def open_any(path):
    if path.endswith('.gz'):
        return [io.TextIOWrapper(gzip.open(path, 'rb'), encoding='utf-8', errors='replace')]
    if path.endswith('.zip'):
        z = zipfile.ZipFile(path)
        return [io.TextIOWrapper(z.open(n), encoding='utf-8', errors='replace')
                for n in z.namelist()
                if not n.endswith('/') and not n.startswith('__MACOSX') and not n.split('/')[-1].startswith('._')]
    return [open(path, encoding='utf-8', errors='replace')]


def years_between(d1, d2):
    y = d2.year - d1.year
    if (d2.month, d2.day) < (d1.month, d1.day):
        y -= 1
    return y


def parse_date(s):
    s = s.strip()[:10]
    try:
        return date.fromisoformat(s)
    except ValueError:
        return None


def new_bucket():
    return {'tests': 0, 'fails': 0, 'miles': 0, 'miles_n': 0}


def add(b, failed, miles):
    b['tests'] += 1
    b['fails'] += failed
    if miles:
        b['miles'] += miles
        b['miles_n'] += 1


def summarise(b):
    if b['tests'] < MIN_TESTS:
        return None
    return {
        'tests': b['tests'],
        'failRate': round(100 * b['fails'] / b['tests'], 1),
        'avgMiles': round(b['miles'] / b['miles_n']) if b['miles_n'] else None,
    }


def main():
    csv.field_size_limit(10_000_000)
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('files', nargs='+')
    ap.add_argument('--out', default='src/data/reliability.json')
    args = ap.parse_args()

    overall = defaultdict(new_bucket)
    by_age = defaultdict(lambda: defaultdict(new_bucket))
    by_fuel = defaultdict(lambda: defaultdict(new_bucket))
    all_vans = defaultdict(new_bucket)  # every matched van, per age band, for comparison
    seen = kept = dupes = 0
    seen_ids = set()  # DVSA files repeat some test rows; count each test once
    unmatched_makes = defaultdict(int)

    for path in args.files:
        for fh in open_any(path):
            sample = fh.readline()
            delim = '|' if sample.count('|') > sample.count(',') else ','
            header = [h.strip().lower() for h in next(csv.reader([sample], delimiter=delim))]
            reader = csv.DictReader(fh, fieldnames=header, delimiter=delim, escapechar='\\')
            for row in reader:
                seen += 1
                if row.get('test_type', '').strip() != 'NT':
                    continue
                if row.get('test_class_id', '').strip() not in ('4', '7'):
                    continue
                result = row.get('test_result', '').strip()
                if result not in ('P', 'F', 'PRS'):
                    continue
                slug = match(row.get('make', ''), row.get('model', ''))
                if not slug:
                    if row.get('test_class_id', '').strip() == '7':
                        unmatched_makes[row.get('make', '').strip().upper()] += 1
                    continue
                tid = row.get('test_id', '').strip()
                if tid:
                    if tid in seen_ids:
                        dupes += 1
                        continue
                    seen_ids.add(tid)
                td, fu = parse_date(row.get('test_date', '')), parse_date(row.get('first_use_date', ''))
                if not td or not fu:
                    continue
                kept += 1
                failed = 1 if result in ('F', 'PRS') else 0
                try:
                    miles = int(float(row.get('test_mileage') or 0))
                except ValueError:
                    miles = 0
                miles = miles if 0 < miles < 1_000_000 else 0
                age = years_between(fu, td)
                band = next((label for lo, hi, label in AGE_BANDS if lo <= age <= hi), None)

                add(overall[slug], failed, miles)
                if band:
                    add(by_age[slug][band], failed, miles)
                    add(all_vans[band], failed, miles)
                fuel = FUELS.get(row.get('fuel_type', '').strip().upper())
                if fuel:
                    add(by_fuel[slug][fuel], failed, miles)

    models = {}
    for slug, b in overall.items():
        s = summarise(b)
        if not s:
            continue
        s['byAge'] = {k: v for k, v in ((band, summarise(by_age[slug][band])) for _, _, band in AGE_BANDS) if v}
        s['byFuel'] = {k: v for k, v in ((f, summarise(by_fuel[slug][f])) for f in FUELS.values()) if v}
        s['includesPassengerVersions'] = slug in SHARED_WITH_CARS
        s['includesMotorhomes'] = slug in MOTORHOME_BASES
        models[slug] = s

    out = {
        'source': 'DVSA anonymised MOT tests and results',
        'files': [p.split('/')[-1] for p in args.files],
        'generated': date.today().isoformat(),
        'method': 'First MOT tests only (not retests). Fail = failed or passed after faults were fixed at the test.',
        'minTests': MIN_TESTS,
        'allVansByAge': {k: v for k, v in ((band, summarise(all_vans[band])) for _, _, band in AGE_BANDS) if v},
        'models': dict(sorted(models.items())),
    }
    with open(args.out, 'w') as f:
        json.dump(out, f, indent=1)

    print(f'rows read: {seen:,}  van first tests kept: {kept:,}  duplicate rows skipped: {dupes:,}  models published: {len(models)}', file=sys.stderr)
    top = sorted(unmatched_makes.items(), key=lambda x: -x[1])[:15]
    if top:
        print('largest unmatched class 7 makes (check for missing vans):', top, file=sys.stderr)


if __name__ == '__main__':
    main()

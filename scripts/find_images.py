#!/usr/bin/env python3
"""
Find freely licensed vehicle photos on Wikimedia Commons.

For each vehicle, searches Commons with a few queries, keeps only photos under
licences that allow reuse with credit (CC BY, CC BY-SA, CC0, public domain),
skips interiors and details, and saves up to 6 candidates with their licence
and author so a person can pick the right one.

Polite to Wikimedia: identifies itself and waits between requests.

Usage: python3 scripts/find_images.py vehicles.json out_dir
"""
import json, re, sys, time, urllib.parse, urllib.request
from pathlib import Path

UA = 'LoadspaceImageFinder/0.1 (https://loadspace-vans.netlify.app; editorial van guides)'
API = 'https://commons.wikimedia.org/w/api.php'
OK_LICENCE = re.compile(r'^(CC BY(-SA)? [0-9.]+|CC0|Public domain|PD)', re.I)
SKIP = re.compile(r'interior|dashboard|cockpit|engine|motor|badge|logo|emblem|wheel|tyre|tire|seat|steering|charging port|plug|battery pack|detail|rear light|headlight|lamp|model|toy|scale|diagram|icon|svg', re.I)

QUERIES = {
  'ford-transit-courier': ['Ford E-Transit Courier', 'Ford Transit Courier 2024'],
  'citroen-berlingo': ['Citroën ë-Berlingo van', 'Citroen e-Berlingo'],
  'peugeot-partner': ['Peugeot e-Partner', 'Peugeot E-Partner van'],
  'vauxhall-combo': ['Vauxhall Combo-e', 'Opel Combo-e Cargo'],
  'toyota-proace-city': ['Toyota Proace City Electric', 'Toyota Proace City'],
  'fiat-doblo': ['Fiat E-Doblo', 'Fiat Doblo 2022'],
  'renault-kangoo': ['Renault Kangoo E-Tech', 'Renault Kangoo Z.E.'],
  'nissan-townstar': ['Nissan Townstar EV', 'Nissan Townstar'],
  'citroen-e-c3-van': ['Citroën ë-C3', 'Citroen e-C3 2024'],
  'mercedes-benz-citan': ['Mercedes-Benz eCitan', 'Mercedes-Benz Citan 2021'],
  'ford-transit-city': ['Ford Transit City', 'Ford Transit City IAA 2026'],
  'ford-transit-custom': ['Ford E-Transit Custom', 'Ford Transit Custom 2023'],
  'volkswagen-transporter': ['Volkswagen e-Transporter 2024', 'Volkswagen Transporter T7 2025'],
  'volkswagen-id-buzz-cargo': ['Volkswagen ID. Buzz Cargo', 'VW ID Buzz Cargo'],
  'mercedes-benz-vito': ['Mercedes-Benz eVito', 'Mercedes-Benz eVito Kastenwagen'],
  'renault-trafic': ['Renault Trafic E-Tech IAA Transportation 2026', 'Renault Trafic E-Tech'],
  'vauxhall-vivaro': ['Vauxhall Vivaro-e', 'Opel Vivaro-e'],
  'citroen-dispatch': ['Citroën ë-Jumpy', 'Citroen e-Dispatch'],
  'peugeot-expert': ['Peugeot e-Expert', 'Peugeot Expert 2016'],
  'toyota-proace': ['Toyota Proace Electric', 'Toyota Proace 2016'],
  'fiat-scudo': ['Fiat E-Scudo', 'Fiat Scudo 2022'],
  'kia-pv5-cargo': ['Kia PV5', 'Kia PV5 Cargo'],
  'maxus-edeliver-7': ['Maxus eDeliver 7', 'Maxus Deliver 7'],
  'ford-transit': ['Ford E-Transit', 'Ford E-Transit van'],
  'mercedes-benz-sprinter': ['Mercedes-Benz eSprinter', 'Mercedes eSprinter 2024'],
  'renault-master': ['Renault Master E-Tech', 'Renault Master 2024'],
  'nissan-interstar': ['Nissan Interstar 2024', 'Nissan Interstar-e'],
  'vauxhall-movano': ['Vauxhall Movano-e', 'Opel Movano-e'],
  'citroen-relay': ['Citroën ë-Jumper', 'Citroen e-Relay'],
  'peugeot-boxer': ['Peugeot e-Boxer', 'Peugeot Boxer 2024'],
  'fiat-ducato': ['Fiat E-Ducato', 'Fiat Ducato electric'],
  'toyota-proace-max': ['Toyota Proace Max'],
  'iveco-daily': ['Iveco eDaily', 'Iveco Daily electric'],
  'maxus-deliver-9': ['Maxus eDeliver 9', 'Maxus Deliver 9'],
  'farizon-sv': ['Farizon SV', 'Farizon SuperVan'],
  'toyota-hilux': ['Toyota Hilux BEV', 'Toyota Hilux 2024'],
  'isuzu-d-max': ['Isuzu D-Max EV', 'Isuzu D-Max 2024'],
  'kgm-musso': ['KGM Musso EV', 'SsangYong Musso'],
  'maxus-t60-t90': ['Maxus T90 EV', 'LDV eT60', 'Maxus T60'],
  'maxus-eterron-9': ['Maxus eTerron 9', 'Maxus Terron 9'],
  'nissan-e-nv200': ['Nissan e-NV200 van', 'Nissan e-NV200'],
  'maxus-edeliver-3': ['Maxus eDeliver 3', 'LDV eDeliver 3'],
  'volkswagen-e-crafter': ['Volkswagen e-Crafter'],
  'man-etge': ['MAN eTGE', 'MAN TGE'],
  'volkswagen-abt-e-transporter': ['ABT e-Transporter', 'Volkswagen T6.1 e-Transporter'],
  'levc-vn5': ['LEVC VN5'],
  'fuso-ecanter': ['Fuso eCanter'],
  'iveco-edaily-up-to-7-2t': ['Iveco eDaily chassis', 'Iveco eDaily truck'],
  'magtec-mev75': ['Magtec MEV75', 'Magtec electric truck'],
  'yutong-t75e': ['Yutong T75e', 'Yutong electric truck'],
  'daf-xb-electric': ['DAF XB Electric', 'DAF XB'],
  'man-etgl': ['MAN eTGL', 'MAN eTGM'],
  'volvo-fl-electric': ['Volvo FL Electric'],
  'volvo-fe-electric': ['Volvo FE Electric'],
  'renault-trucks-e-tech-d': ['Renault Trucks E-Tech D', 'Renault D Wide Z.E.'],
  'mercedes-benz-eactros-300-400-rigid': ['Mercedes-Benz eActros', 'eActros 300'],
  'daf-xd-electric': ['DAF XD Electric', 'DAF XD'],
  'mercedes-benz-eactros-600': ['Mercedes-Benz eActros 600', 'eActros 600'],
  'volvo-fh-electric': ['Volvo FH Electric'],
  'volvo-fm-electric': ['Volvo FM Electric'],
  'daf-xf-electric': ['DAF XF Electric', 'DAF CF Electric'],
  'renault-trucks-e-tech-t': ['Renault Trucks E-Tech T', 'Renault T E-Tech'],
  'man-etgx-etgs': ['MAN eTGX', 'MAN eTGS'],
  'scania-battery-electric-range': ['Scania battery electric truck', 'Scania BEV'],
  'iveco-s-eway': ['Iveco S-eWay', 'Iveco S-Way electric'],
}


def get(params):
    url = API + '?' + urllib.parse.urlencode({**params, 'format': 'json', 'formatversion': '2'})
    for attempt in range(4):
        req = urllib.request.Request(url, headers={'User-Agent': UA})
        try:
            with urllib.request.urlopen(req, timeout=30) as r:
                return json.load(r)
        except Exception as e:
            time.sleep(5 * (attempt + 1))
    return {}


def strip(html):
    return re.sub(r'<[^>]+>', '', html or '').strip()


def search(query):
    data = get({
        'action': 'query', 'generator': 'search', 'gsrsearch': f'{query} filetype:bitmap',
        'gsrnamespace': 6, 'gsrlimit': 10, 'prop': 'imageinfo',
        'iiprop': 'url|size|mime|extmetadata', 'iiurlwidth': 1200,
    })
    out = []
    for p in (data.get('query') or {}).get('pages', []):
        ii = (p.get('imageinfo') or [{}])[0]
        md = ii.get('extmetadata') or {}
        lic = strip((md.get('LicenseShortName') or {}).get('value'))
        title = p.get('title', '')
        if ii.get('mime') not in ('image/jpeg', 'image/png'):
            continue
        if not OK_LICENCE.match(lic) or SKIP.search(title):
            continue
        w, h = ii.get('width', 0), ii.get('height', 0)
        if w < 1000 or h == 0 or w / h < 1.15:  # want landscape, reasonably large
            continue
        out.append({
            'title': title, 'page': ii.get('descriptionurl'), 'thumb': ii.get('thumburl'),
            'width': w, 'height': h, 'licence': lic,
            'licenceUrl': strip((md.get('LicenseUrl') or {}).get('value')),
            'author': strip((md.get('Artist') or {}).get('value'))[:120],
            'query': query,
        })
    return out


def main():
    vehicles = json.load(open(sys.argv[1]))
    out_dir = Path(sys.argv[2]); out_dir.mkdir(parents=True, exist_ok=True)
    results = {}
    for v in vehicles:
        slug = v['slug']
        seen, cands = set(), []
        for q in QUERIES.get(slug, [v.get('name') or slug]):
            for c in search(q):
                if c['title'] not in seen:
                    seen.add(c['title']); cands.append(c)
            time.sleep(1.5)
            if len(cands) >= 6:
                break
        results[slug] = cands[:6]
        print(f'{slug:40} {len(results[slug])} candidates', flush=True)
    json.dump(results, open(out_dir / 'candidates.json', 'w'), indent=1)


if __name__ == '__main__':
    main()

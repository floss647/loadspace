#!/usr/bin/env python3
"""
Add a freely licensed Wikimedia Commons photo to the site's general photo library
(src/data/photos.json), for use as `photo:` in blog columns and news stories.

Usage: python3 scripts/add_photo.py <slug> "File:Title on Commons.jpg" "short description of what it shows"

Checks the licence is reusable with credit (CC BY, CC BY-SA, CC0, public domain), downloads
a 1280px copy to public/images/photos/<slug>.jpg and records author, licence and page.
Always look at the photo first: right subject, UK if possible, no identifiable private
people as the focus, nothing misleading for the story.
"""
import io, json, re, sys, time, urllib.parse, urllib.request
from pathlib import Path
from PIL import Image

UA = 'LoadspaceImageFinder/0.1 (https://loadspace-vans.netlify.app; editorial van guides)'
OK = re.compile(r'^(CC BY(-SA)? [0-9.]+|CC0|Public domain|PD)', re.I)
ROOT = Path(__file__).resolve().parent.parent


def get(url):
    for a in range(5):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': UA}), timeout=60) as r:
                return r.read()
        except Exception as e:
            if a == 4:
                raise
            time.sleep(10 * (a + 1))


slug, title, desc = sys.argv[1], sys.argv[2], sys.argv[3]
title = title if title.startswith('File:') else 'File:' + title
q = urllib.parse.urlencode({'action': 'query', 'titles': title, 'prop': 'imageinfo', 'iiprop': 'url|extmetadata',
                            'iiurlwidth': 1280, 'format': 'json', 'formatversion': 2})
page = json.loads(get('https://commons.wikimedia.org/w/api.php?' + q))['query']['pages'][0]
ii = page['imageinfo'][0]
md = ii['extmetadata']
strip = lambda h: re.sub(r'<[^>]+>', '', h or '').strip()
lic = strip(md.get('LicenseShortName', {}).get('value'))
if not OK.match(lic):
    sys.exit(f'Licence "{lic}" is not one we can reuse. Pick another photo.')
thumb = ii['thumburl'].replace('thumb.wikimedia.org', 'upload.wikimedia.org').split('?')[0]
im = Image.open(io.BytesIO(get(thumb))).convert('RGB')
im.thumbnail((1280, 1280))
out = ROOT / 'public/images/photos'; out.mkdir(parents=True, exist_ok=True)
im.save(out / f'{slug}.jpg', quality=82, optimize=True, progressive=True)
data_path = ROOT / 'src/data/photos.json'
data = json.loads(data_path.read_text()) if data_path.exists() else {}
data[slug] = {'file': f'/images/photos/{slug}.jpg', 'page': ii['descriptionurl'], 'title': title,
              'author': strip(md.get('Artist', {}).get('value'))[:120], 'licence': lic,
              'licenceUrl': strip(md.get('LicenseUrl', {}).get('value')), 'note': desc}
data_path.write_text(json.dumps(dict(sorted(data.items())), indent=1, ensure_ascii=False))
print('added', slug, im.size, lic, data[slug]['author'])

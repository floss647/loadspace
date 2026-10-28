#!/usr/bin/env python3
"""Make crisp card-sized copies of vehicle photos (800x450, cropped to 16:9, lightly sharpened)."""
from pathlib import Path
from PIL import Image, ImageFilter, ImageOps

SRC = Path('public/images/vehicles')
OUT = SRC / 'card'
OUT.mkdir(exist_ok=True)
for f in sorted(SRC.glob('*.jpg')):
    im = Image.open(f).convert('RGB')
    im = ImageOps.fit(im, (800, 450), method=Image.LANCZOS, centering=(0.5, 0.55))
    im = im.filter(ImageFilter.UnsharpMask(radius=1.2, percent=70, threshold=2))
    im.save(OUT / f.name, quality=86, optimize=True, progressive=True)
    print(f.name)

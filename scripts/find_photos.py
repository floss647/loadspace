#!/usr/bin/env python3
"""
Search Wikimedia Commons for freely licensed photos on any topic (not just vehicles),
for blog columns and news stories.

Usage: python3 scripts/find_photos.py out_dir "query one" "query two" ...
Writes out_dir/candidates.json ({query: [candidates]}) for scripts/contact_sheet.py,
then pick one and add it with scripts/add_photo.py.
"""
import json, sys, time
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))
from find_images import search  # licence filter, landscape, 1000px+, skips details/logos

out = Path(sys.argv[1]); out.mkdir(parents=True, exist_ok=True)
results = {}
for q in sys.argv[2:]:
    results[q] = search(q)[:6]
    print(f'{q:50} {len(results[q])} candidates', flush=True)
    for i, c in enumerate(results[q]):
        print(f'   {i} {c["title"]} | {c["licence"]} | {c["author"][:40]}')
    time.sleep(2)
json.dump(results, open(out / 'candidates.json', 'w'), indent=1)

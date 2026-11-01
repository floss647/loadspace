---
van: nissan-interstar
title: "Nissan Interstar-e specs"
summary: "Load space, payload, range, towing and charging for each Interstar-e electric panel van, from Nissan UK's own price list and brochure."
date: 2026-11-01T09:00:00Z
sourceLabel: "Nissan UK LCV price list, 1 July 2026, and Interstar brochure"
tables:
  - title: "Range, payload and weight"
    head: ["Version", "Gross weight", "Official range (combined)", "Official range (city)", "Payload (incl. driver)", "Towing (braked)"]
    rows:
      - ["L2H2 van", "3.5 tonnes", "258 miles", "384 miles", "844 to 1,197kg", "2,000kg"]
      - ["L2H2 van", "4.0 tonnes", "275 to 276 miles", "367 to 368 miles", "1,344 to 1,694kg", "1,500kg"]
      - ["L3H2 van", "3.5 tonnes", "256 to 257 miles", "380 miles", "711 to 1,116kg", "2,000kg"]
      - ["L3H2 van", "4.0 tonnes", "273 miles", "364 miles", "1,210 to 1,614kg", "1,500kg"]
  - title: "Load space"
    head: ["", "L2H2", "L3H2"]
    rows:
      - ["Load length (at floor)", "3,225mm", "3,855mm"]
      - ["Width between wheel arches", "1,380mm", "1,380mm"]
      - ["Maximum load width", "1,789mm", "1,789mm"]
      - ["Load height", "1,885mm", "1,885mm"]
      - ["Load volume", "10.8m³", "13.0m³"]
  - title: "Charging and battery"
    head: ["", ""]
    rows:
      - ["Battery", "87kWh"]
      - ["Rapid charging (DC)", "Up to 130kW"]
      - ["Home and depot charging (AC)", "22kW"]
      - ["Vehicle-to-load (V2L) power output", "Up to 3.6kW"]
      - ["Battery warranty", "8 years or 100,000 miles (to 70% capacity)"]
      - ["Towing (unbraked)", "750kg"]
      - ["Gross train weight", "5,500kg"]
notes:
  - "Ranges are from Nissan's July 2026 price list. Its brochure quotes up to 283 miles for the 4.0-tonne version and says the range figures are pending UK homologation."
  - "Payload is shown from a fully optioned van to a basic one. Nissan's payload figures include the driver's weight and are pending homologation."
  - "The 4.0-tonne versions are homologated as N2 vehicles and the 3.5-tonne versions as N1."
  - "Towing is also limited by the gross train weight of 5,500kg."
versions:
  - name: "L2H2, 3.5 tonnes"
    figures:
      range: "258 miles"
      payload: "844 to 1,197kg"
      volume: "10.8m³"
      loadLength: "3,225mm"
      loadHeight: "1,885mm"
      loadWidth: "1,380mm"
      gross: "3.5 tonnes"
      towing: "2,000kg"
  - name: "L2H2, 4.0 tonnes"
    figures:
      range: "275 to 276 miles"
      payload: "1,344 to 1,694kg"
      volume: "10.8m³"
      loadLength: "3,225mm"
      loadHeight: "1,885mm"
      loadWidth: "1,380mm"
      gross: "4.0 tonnes"
      towing: "1,500kg"
  - name: "L3H2, 3.5 tonnes"
    figures:
      range: "256 to 257 miles"
      payload: "711 to 1,116kg"
      volume: "13.0m³"
      loadLength: "3,855mm"
      loadHeight: "1,885mm"
      loadWidth: "1,380mm"
      gross: "3.5 tonnes"
      towing: "2,000kg"
  - name: "L3H2, 4.0 tonnes"
    figures:
      range: "273 miles"
      payload: "1,210 to 1,614kg"
      volume: "13.0m³"
      loadLength: "3,855mm"
      loadHeight: "1,885mm"
      loadWidth: "1,380mm"
      gross: "4.0 tonnes"
      towing: "1,500kg"
shared:
  battery: "87kWh"
  rapid: "Up to 130kW"
  ac: "22kW"
  warranty: "8 years or 100,000 miles (to 70% capacity)"
  train: "5,500kg"
archive: sources/nissan-lcv-price-list-2026-07.pdf
options:
  - category: "Paint"
    items:
      - name: "Metallic paint (Blue Grey, Silver, Black)"
        price: "£750"
        note: "All panel vans, Acenta and Tekna"
        quote: "Metallic Paint Blue Grey, Silver, Black ○ ○ ○ ○ ○ ○ £750 £780"
  - category: "Load area"
    items:
      - name: "Offside sliding panel door"
        price: "£400"
        note: "All panel vans, Acenta and Tekna"
        quote: "Offside Sliding Panel Door ○ ○ - - - - £400 £480"
  - category: "Windows and mirrors"
    items:
      - name: "Glazed pack"
        price: "£650"
        note: "All panel vans, Acenta and Tekna"
        quote: "Glazed Pack ○ ○ - - - - £650 £900"
facts:
  - claim: "1 July 2026"
    archive: sources/nissan-lcv-price-list-2026-07.pdf
    quote: "Prices effective from 1 st July 2026"
  - claim: "July 2026"
    archive: sources/nissan-lcv-price-list-2026-07.pdf
    quote: "Prices effective from 1 st July 2026"
  - claim: "87kWh"
    archive: sources/nissan-lcv-price-list-2026-07.pdf
    quote: "H2 87kWh 130kW DC Automatic 143HP"
  - claim: "Up to 130kW"
    archive: sources/nissan-interstar-brochure-2026-08.pdf
    quote: "up to 130kW max speed for the 87kWh battery"
  - claim: "22kW"
    archive: sources/nissan-lcv-price-list-2026-07.pdf
    quote: "35 22kW AC + Tekna £45,090"
  - claim: "Up to 3.6kW"
    archive: sources/nissan-interstar-brochure-2026-08.pdf
    quote: "Delivering up to 3.6kW of power, Interstar's V2L system"
  - claim: "8 years or 100,000 miles (to 70% capacity)"
    archive: sources/nissan-interstar-brochure-2026-08.pdf
    quote: "Nissan guarantee the Li-ion battery capacity to be over 70% for 8 years or 100,000 miles"
  - claim: "3.5 tonnes"
    archive: sources/nissan-interstar-brochure-2026-08.pdf
    quote: "Panel Van EV L2H2 L3H2 Version 3.5T 4.0T 3.5T 4.0T Battery size 87kWh"
  - claim: "4.0 tonnes"
    archive: sources/nissan-interstar-brochure-2026-08.pdf
    quote: "Panel Van EV L2H2 L3H2 Version 3.5T 4.0T 3.5T 4.0T Battery size 87kWh"
  - claim: "The 4.0-tonne versions are homologated as N2 vehicles and the 3.5-tonne versions as N1"
    archive: sources/nissan-interstar-brochure-2026-08.pdf
    quote: "Version 3.5T 4.0T 3.5T 4.0T Battery size 87kWh 87kWh 87kWh 87kWh Homologation N1 N2 N1 N2"
  - claim: "258 miles"
    archive: sources/nissan-lcv-price-list-2026-07.pdf
    quote: "PANEL VAN L2 Acenta £43,590 £55 £360 £44,005 £5,000 £49,005 384 258 35 22kW AC + Tekna £45,090 £55 £360 £45,505 £5,000 £50,505 384 258"
  - claim: "384 miles"
    archive: sources/nissan-lcv-price-list-2026-07.pdf
    quote: "PANEL VAN L2 Acenta £43,590 £55 £360 £44,005 £5,000 £49,005 384 258 35 22kW AC + Tekna £45,090 £55 £360 £45,505 £5,000 £50,505 384 258"
  - claim: "275 to 276 miles"
    archive: sources/nissan-lcv-price-list-2026-07.pdf
    quote: "Acenta £44,990 £55 £177 £45,222 £5,000 £50,222 368 276 40 (Inc. V2L) Tekna £46,490 £55 £177 £46,722 £5,000 £51,722 367 275"
  - claim: "367 to 368 miles"
    archive: sources/nissan-lcv-price-list-2026-07.pdf
    quote: "Acenta £44,990 £55 £177 £45,222 £5,000 £50,222 368 276 40 (Inc. V2L) Tekna £46,490 £55 £177 £46,722 £5,000 £51,722 367 275"
  - claim: "256 to 257 miles"
    archive: sources/nissan-lcv-price-list-2026-07.pdf
    quote: "PANEL VAN L3 Acenta £44,490 £55 £360 £44,905 £5,000 £49,905 380 257 35 22kW AC + Tekna £45,990 £55 £360 £46,405 £5,000 £51,405 380 256"
  - claim: "380 miles"
    archive: sources/nissan-lcv-price-list-2026-07.pdf
    quote: "PANEL VAN L3 Acenta £44,490 £55 £360 £44,905 £5,000 £49,905 380 257 35 22kW AC + Tekna £45,990 £55 £360 £46,405 £5,000 £51,405 380 256"
  - claim: "273 miles"
    archive: sources/nissan-lcv-price-list-2026-07.pdf
    quote: "Acenta £45,890 £55 £177 £46,122 £5,000 £51,122 364 273 40 (Inc. V2L) Tekna £47,390 £55 £177 £47,622 £5,000 £52,622 364 273"
  - claim: "364 miles"
    archive: sources/nissan-lcv-price-list-2026-07.pdf
    quote: "Acenta £45,890 £55 £177 £46,122 £5,000 £51,122 364 273 40 (Inc. V2L) Tekna £47,390 £55 £177 £47,622 £5,000 £52,622 364 273"
  - claim: "up to 283 miles for the 4.0-tonne version"
    archive: sources/nissan-interstar-brochure-2026-08.pdf
    quote: "283 miles is obtained with the 87kWh battery on the 4.0T N2 version."
  - claim: "844 to 1,197kg"
    calc: "Interstar brochure, Panel Van EV weights, prints \"Max payload 1 197 1 694 1 116 1 614 Min payload 844 1 344 711 1 210\" with a space as the thousands separator. L2H2 3.5T: min 844, max 1 197 = 844 to 1,197kg"
  - claim: "1,344 to 1,694kg"
    calc: "Same brochure row: L2H2 4.0T min 1 344, max 1 694 = 1,344 to 1,694kg"
  - claim: "711 to 1,116kg"
    calc: "Same brochure row: L3H2 3.5T min 711, max 1 116 = 711 to 1,116kg"
  - claim: "1,210 to 1,614kg"
    calc: "Same brochure row: L3H2 4.0T min 1 210, max 1 614 = 1,210 to 1,614kg"
  - claim: "2,000kg"
    archive: sources/nissan-interstar-brochure-2026-08.pdf
    quote: "towing capacity of up to 2000kg"
  - claim: "1,500kg"
    calc: "Interstar brochure, Panel Van EV weights, prints \"Max towing capacity - braked 2 000 1 500 2 000 1 500\" with a space as the thousands separator. 4.0T versions: 1 500 = 1,500kg"
  - claim: "750kg"
    archive: sources/nissan-interstar-brochure-2026-08.pdf
    quote: "Max towing capacity - braked 2 000 1 500 2 000 1 500 Max towing capacity - unbraked 750 750 750 750"
  - claim: "5,500kg"
    calc: "Interstar brochure, Panel Van EV weights, prints \"Gross combination weight 5 500 5 500 5 500 5 500\" with a space as the thousands separator: 5 500 = 5,500kg"
  - claim: "3,225mm"
    calc: "Interstar brochure, panel van dimensions (mm), prints \"Load area length (at floor) 3 225 3 855 3 855\" (L2H2, L3H2, L3H3) with a space as the thousands separator. L2H2: 3 225 = 3,225mm"
  - claim: "3,855mm"
    calc: "Same brochure row: L3H2 3 855 = 3,855mm"
  - claim: "1,380mm"
    calc: "Interstar brochure, panel van dimensions (mm), prints \"Load area width between wheel arches 1 380 1 380 1 380\" with a space as the thousands separator: 1 380 = 1,380mm"
  - claim: "1,789mm"
    calc: "Interstar brochure, panel van dimensions (mm), prints \"Load area width at widest point 1 789 1 789 1 789\" with a space as the thousands separator: 1 789 = 1,789mm"
  - claim: "1,885mm"
    calc: "Interstar brochure, panel van dimensions (mm), prints \"Load area height 1 885 1 885 2 138\" (L2H2, L3H2, L3H3) with a space as the thousands separator: 1 885 = 1,885mm for both H2 vans"
  - claim: "10.8m³"
    archive: sources/nissan-interstar-brochure-2026-08.pdf
    quote: "Cargo area volume (m3) 10.8 13.0 14.8"
  - claim: "13.0m³"
    archive: sources/nissan-interstar-brochure-2026-08.pdf
    quote: "Cargo area volume (m3) 10.8 13.0 14.8"
---

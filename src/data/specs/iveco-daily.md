---
van: iveco-daily
title: "IVECO eDaily specs"
summary: "Range, batteries, load volume, gross weights and charging times for the eDaily van, from IVECO's own brochure."
date: 2026-11-01T09:00:00Z
sourceLabel: "IVECO eDaily brochure (EU edition), March 2026"
tables:
  - title: "Range by model and battery"
    head: ["Van", "77kWh battery", "74kWh battery", "111kWh battery"]
    rows:
      - ["35S van", "290km", "Not listed", "Not listed"]
      - ["42S van", "280km", "Not listed", "400km"]
      - ["50C van", "Not listed", "200km", "260km"]
      - ["72C van", "Not listed", "140km", "200km"]
  - title: "Load space and gross weight"
    head: ["Wheelbase", "Van length", "H1 roof (1,545mm)", "H2 roof (1,900mm)", "H3 roof (2,100mm)", "Gross weight"]
    rows:
      - ["3,520mm", "5,718mm", "9.0m³", "10.8m³", "Not offered", "3.5 to 4.2 tonnes"]
      - ["3,520mm (L)", "6,118mm", "Not offered", "12.0m³", "13.4m³", "3.5 to 5.4 tonnes"]
      - ["4,100mm", "7,283mm", "Not offered", "16.0m³", "18.0m³", "3.5 to 7.2 tonnes"]
      - ["4,100mm (L)", "7,678mm", "Not offered", "17.5m³", "19.6m³", "4.6 to 7.2 tonnes"]
  - title: "Charging times"
    head: ["", "77kWh or 74kWh battery", "111kWh battery"]
    rows:
      - ["AC 11kW (standard), full charge", "6 hours 20 minutes", "9 hours 30 minutes"]
      - ["AC 22kW (optional), full charge", "3 hours 10 minutes", "4 hours 50 minutes"]
      - ["DC 80kW (optional), 20 to 80%", "30 minutes", "50 minutes"]
      - ["DC 115kW (optional), 20 to 80%", "Not listed", "35 minutes"]
  - title: "Battery and towing"
    head: ["", ""]
    rows:
      - ["Battery warranty", "8 years or 250,000km"]
      - ["Towing (braked)", "Up to 3.5 tonnes"]
notes:
  - "This is IVECO's EU brochure, not a UK document. UK versions, batteries and figures may differ, so check with a UK IVECO dealer."
  - "IVECO says its figures are based on internal tests and simulations, pending the vehicle homologation, so they may change."
  - "Ranges are IVECO's own WLTP-cycle figures in kilometres, not yet officially homologated. They are for reference vans with a new, fully charged battery, driven in Eco mode with no driver assistance systems, air conditioning or heating."
  - "The brochure gives no payloads or load floor dimensions, and doesn't say whether the roof heights are inside or outside measurements."
  - "Rapid (DC) charging is an option, not standard."
  - "The brochure's 148kWh battery is listed for the 72C chassis cab, not the van, so it isn't shown here."
versions:
  - name: "35S van, 77kWh"
    figures:
      battery: "77kWh"
      range: "290km (WLTP)"
  - name: "42S van, 77kWh"
    figures:
      battery: "77kWh"
      range: "280km (WLTP)"
  - name: "42S van, 111kWh"
    figures:
      battery: "111kWh"
      range: "400km (WLTP)"
  - name: "50C van, 74kWh"
    figures:
      battery: "74kWh"
      range: "200km (WLTP)"
  - name: "50C van, 111kWh"
    figures:
      battery: "111kWh"
      range: "260km (WLTP)"
  - name: "72C van, 74kWh"
    figures:
      battery: "74kWh"
      range: "140km (WLTP)"
  - name: "72C van, 111kWh"
    figures:
      battery: "111kWh"
      range: "200km (WLTP)"
shared:
  rapid: "Up to 115kW (optional)"
  ac: "11kW as standard, 22kW optional"
  warranty: "8 years or 250,000km"
factCheck:
  by: "independent fact-checker"
  date: 2026-11-01
facts:
  - claim: "March 2026"
    calc: "The brochure's publication code is \"PUBLICATION L2645501MASTER - 03/26\", which ends in the month and year 03/26, i.e. March 2026"
  - claim: "EU edition"
    archive: sources/iveco-edaily-brochure-2026-03.pdf
    quote: "This content is intended for the EU markets."
  - claim: "77kWh"
    archive: sources/iveco-edaily-brochure-2026-03.pdf
    quote: "RANGES 77 kW/h 74 kW/h 111 kW/h 148 kW/h"
  - claim: "74kWh"
    archive: sources/iveco-edaily-brochure-2026-03.pdf
    quote: "RANGES 77 kW/h 74 kW/h 111 kW/h 148 kW/h"
  - claim: "111kWh"
    archive: sources/iveco-edaily-brochure-2026-03.pdf
    quote: "RANGES 77 kW/h 74 kW/h 111 kW/h 148 kW/h"
  - claim: "35S van"
    archive: sources/iveco-edaily-brochure-2026-03.pdf
    quote: "35S WLTP 290"
  - claim: "290km"
    archive: sources/iveco-edaily-brochure-2026-03.pdf
    quote: "RANGES 77 kW/h 74 kW/h 111 kW/h 148 kW/h 35S WLTP 290"
  - claim: "42S van"
    archive: sources/iveco-edaily-brochure-2026-03.pdf
    quote: "42S WLTP 280 - 400"
  - claim: "280km"
    archive: sources/iveco-edaily-brochure-2026-03.pdf
    quote: "42S WLTP 280 - 400"
  - claim: "400km"
    archive: sources/iveco-edaily-brochure-2026-03.pdf
    quote: "42S WLTP 280 - 400"
  - claim: "50C van"
    archive: sources/iveco-edaily-brochure-2026-03.pdf
    quote: "50C WLTP - 200 260"
  - claim: "260km"
    archive: sources/iveco-edaily-brochure-2026-03.pdf
    quote: "50C WLTP - 200 260"
  - claim: "200km"
    archive: sources/iveco-edaily-brochure-2026-03.pdf
    quote: "50C WLTP - 200 260"
  - claim: "72C van"
    archive: sources/iveco-edaily-brochure-2026-03.pdf
    quote: "72C WLTP - 140 200 240"
  - claim: "140km"
    archive: sources/iveco-edaily-brochure-2026-03.pdf
    quote: "72C WLTP - 140 200 240"
  - claim: "WLTP-cycle figures"
    archive: sources/iveco-edaily-brochure-2026-03.pdf
    quote: "together with up to 400 km autonomy in WLTP cycle"
  - claim: "not yet officially homologated"
    archive: sources/iveco-edaily-brochure-2026-03.pdf
    quote: "Officially homologated driving range will be published closer to the vehicle’s sales date"
  - claim: "driven in Eco mode with no driver assistance systems, air conditioning or heating"
    archive: sources/iveco-edaily-brochure-2026-03.pdf
    quote: "vehicles set in Eco Driving Modes and in Standard Regenerative Mode with no ADAS and air conditioning or heating"
  - claim: "new, fully charged battery"
    archive: sources/iveco-edaily-brochure-2026-03.pdf
    quote: "batteries at beginning of life and fully charged"
  - claim: "148kWh battery is listed for the 72C chassis cab"
    archive: sources/iveco-edaily-brochure-2026-03.pdf
    quote: "72C CAB 5,25 m2 WB 5.100 148 kWh battery"
  - claim: "H1 roof (1,545mm)"
    calc: "Brochure line-up table header \"H1 (1.545 mm) H2 (1.900 mm) H3 (2.100 mm)\" uses a full stop as the thousands separator: 1.545 mm = 1,545mm"
  - claim: "H2 roof (1,900mm)"
    calc: "Brochure line-up table header \"H1 (1.545 mm) H2 (1.900 mm) H3 (2.100 mm)\": 1.900 mm = 1,900mm"
  - claim: "H3 roof (2,100mm)"
    calc: "Brochure line-up table header \"H1 (1.545 mm) H2 (1.900 mm) H3 (2.100 mm)\": 2.100 mm = 2,100mm"
  - claim: "3,520mm"
    calc: "Brochure line-up table row \"3.520 5.718 9,0 m3 10,8 m3 - 3,5 4,2\" (wheelbase in mm, full stop as thousands separator): 3.520 = 3,520mm"
  - claim: "5,718mm"
    calc: "Brochure line-up table row \"3.520 5.718 9,0 m3 10,8 m3 - 3,5 4,2\" (vehicle length in mm): 5.718 = 5,718mm"
  - claim: "9.0m³"
    calc: "Brochure line-up table row \"3.520 5.718 9,0 m3 10,8 m3 - 3,5 4,2\" (decimal comma), H1 column: 9,0 m3 = 9.0m³"
  - claim: "10.8m³"
    calc: "Brochure line-up table row \"3.520 5.718 9,0 m3 10,8 m3 - 3,5 4,2\" (decimal comma), H2 column: 10,8 m3 = 10.8m³"
  - claim: "3.5 to 4.2 tonnes"
    calc: "Brochure line-up table row \"3.520 5.718 9,0 m3 10,8 m3 - 3,5 4,2\" (decimal comma), gross vehicle weight min 3,5 and max 4,2 tons = 3.5 to 4.2 tonnes"
  - claim: "6,118mm"
    calc: "Brochure line-up table row \"3.520L 6.118 - 12,0 m3 13,4 m 3 3,5 5,4\": vehicle length 6.118 = 6,118mm"
  - claim: "12.0m³"
    calc: "Brochure line-up table row \"3.520L 6.118 - 12,0 m3 13,4 m 3 3,5 5,4\" (decimal comma), H2 column: 12,0 m3 = 12.0m³"
  - claim: "13.4m³"
    calc: "Brochure line-up table row \"3.520L 6.118 - 12,0 m3 13,4 m 3 3,5 5,4\" (decimal comma), H3 column: 13,4 m3 = 13.4m³"
  - claim: "3.5 to 5.4 tonnes"
    calc: "Brochure line-up table row \"3.520L 6.118 - 12,0 m3 13,4 m 3 3,5 5,4\" (decimal comma): gross vehicle weight min 3,5 and max 5,4 tons = 3.5 to 5.4 tonnes"
  - claim: "4,100mm"
    calc: "Brochure line-up table row \"4.100 7.283 - 16,0 m3 18,0 m3 3,5 7,2\" (wheelbase in mm, full stop as thousands separator): 4.100 = 4,100mm"
  - claim: "7,283mm"
    calc: "Brochure line-up table row \"4.100 7.283 - 16,0 m3 18,0 m3 3,5 7,2\": vehicle length 7.283 = 7,283mm"
  - claim: "16.0m³"
    calc: "Brochure line-up table row \"4.100 7.283 - 16,0 m3 18,0 m3 3,5 7,2\" (decimal comma), H2 column: 16,0 m3 = 16.0m³"
  - claim: "18.0m³"
    calc: "Brochure line-up table row \"4.100 7.283 - 16,0 m3 18,0 m3 3,5 7,2\" (decimal comma), H3 column: 18,0 m3 = 18.0m³"
  - claim: "3.5 to 7.2 tonnes"
    calc: "Brochure line-up table row \"4.100 7.283 - 16,0 m3 18,0 m3 3,5 7,2\" (decimal comma): gross vehicle weight min 3,5 and max 7,2 tons = 3.5 to 7.2 tonnes"
  - claim: "7,678mm"
    calc: "Brochure line-up table row \"4.100L 7.678 - 17,5 m3 19,6 m3 4,6 7,2\": vehicle length 7.678 = 7,678mm"
  - claim: "17.5m³"
    calc: "Brochure line-up table row \"4.100L 7.678 - 17,5 m3 19,6 m3 4,6 7,2\" (decimal comma), H2 column: 17,5 m3 = 17.5m³"
  - claim: "19.6m³"
    calc: "Brochure line-up table row \"4.100L 7.678 - 17,5 m3 19,6 m3 4,6 7,2\" (decimal comma), H3 column: 19,6 m3 = 19.6m³"
  - claim: "4.6 to 7.2 tonnes"
    calc: "Brochure line-up table row \"4.100L 7.678 - 17,5 m3 19,6 m3 4,6 7,2\" (decimal comma): gross vehicle weight min 4,6 and max 7,2 tons = 4.6 to 7.2 tonnes"
  - claim: "6 hours 20 minutes"
    archive: sources/iveco-edaily-brochure-2026-03.pdf
    quote: "Standard AC 11 kW 6 h 20’ 9 h 30’"
  - claim: "9 hours 30 minutes"
    archive: sources/iveco-edaily-brochure-2026-03.pdf
    quote: "Standard AC 11 kW 6 h 20’ 9 h 30’"
  - claim: "3 hours 10 minutes"
    archive: sources/iveco-edaily-brochure-2026-03.pdf
    quote: "Optional AC 22 kW 3 h 10’ 4 h 50’"
  - claim: "4 hours 50 minutes"
    archive: sources/iveco-edaily-brochure-2026-03.pdf
    quote: "Optional AC 22 kW 3 h 10’ 4 h 50’"
  - claim: "11kW as standard, 22kW optional"
    archive: sources/iveco-edaily-brochure-2026-03.pdf
    quote: "Standard AC 11 kW 6 h 20’ 9 h 30’ 12 h 40’ (Time for full charge) Mode 2/3 on-board charger Easy-access front charging plug Optional AC 22 kW"
  - claim: "DC 80kW (optional), 20 to 80%"
    archive: sources/iveco-edaily-brochure-2026-03.pdf
    quote: "Optional DC 80 kW indicator shows the status and level of charge. (Time for 20% - 80% of battery charge)"
  - claim: "30 minutes"
    archive: sources/iveco-edaily-brochure-2026-03.pdf
    quote: "DC 80 kW indicator shows the status and level of charge. (Time for 20% - 80% of battery charge) 30’ 50’ 1h"
  - claim: "50 minutes"
    archive: sources/iveco-edaily-brochure-2026-03.pdf
    quote: "DC 80 kW indicator shows the status and level of charge. (Time for 20% - 80% of battery charge) 30’ 50’ 1h"
  - claim: "35 minutes"
    archive: sources/iveco-edaily-brochure-2026-03.pdf
    quote: "DC 115 kW sockets and home sockets. Fast charging up to 115 kW. (Time for 20% - 80% of battery charge) - 35’ 47’"
  - claim: "Up to 115kW (optional)"
    archive: sources/iveco-edaily-brochure-2026-03.pdf
    quote: "Fast charging up to 115 kW."
  - claim: "8 years"
    archive: sources/iveco-edaily-brochure-2026-03.pdf
    quote: "8-year and up to 250.000 km battery warranty."
  - claim: "250,000km"
    calc: "Brochure: \"8-year and up to 250.000 km battery warranty\" (full stop as thousands separator): 250.000 km = 250,000km"
  - claim: "Up to 3.5 tonnes"
    archive: sources/iveco-edaily-brochure-2026-03.pdf
    quote: "Best-in-class towing capacity. Up to 3.5 t."
  - claim: "internal tests and simulations, pending the vehicle homologation"
    archive: sources/iveco-edaily-brochure-2026-03.pdf
    quote: "based on the best data available to Iveco Group following its internal tests and simulations, pending the vehicle homologation"
---

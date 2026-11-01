---
van: renault-master
title: "Renault Master E-Tech specs"
summary: "Load space, payload, range and charging for each Master E-Tech panel van, with standard kit and option prices from Renault UK's own price guide and brochure."
date: 2026-11-01T09:00:00Z
sourceLabel: "Renault UK van price guide, 1 September 2026, and Master brochure, 1 July 2026"
tables:
  - title: "Range, payload and weight"
    head: ["Version", "Gross weight", "Official range", "Payload", "Top speed"]
    rows:
      - ["L2H2 van (MM35)", "3,500kg", "255 miles", "Not quoted", "75mph"]
      - ["L2H2 van (MM40)", "4,000kg", "285 miles", "Up to 1,606kg", "56mph"]
      - ["L3H2 van (LM35)", "3,500kg", "255 miles", "Not quoted", "75mph"]
      - ["L3H2 van (LM40)", "4,000kg", "285 miles", "Up to 1,499kg", "56mph"]
      - ["L3H3 van (LH35)", "3,500kg", "255 miles", "Not quoted", "75mph"]
      - ["L3H3 van (LH40)", "4,000kg", "285 miles", "Up to 1,488kg", "56mph"]
  - title: "Load space"
    head: ["", "L2H2", "L3H2", "L3H3"]
    rows:
      - ["Load length", "3,225mm", "3,855mm", "3,855mm"]
      - ["Load height", "1,885mm", "1,885mm", "2,138mm"]
      - ["Sliding door width", "1,312mm", "1,312mm", "1,312mm"]
      - ["Load volume", "10.8m³", "13m³", "14.8m³"]
      - ["Overall length", "5,680mm", "6,315mm", "6,315mm"]
      - ["Overall height", "2,502mm", "2,502mm", "2,780mm"]
      - ["Kerb weight", "2,121 to 2,434kg", "2,191 to 2,501kg", "2,203 to 2,512kg"]
  - title: "Charging and battery"
    head: ["", ""]
    rows:
      - ["Battery", "87kWh"]
      - ["Rapid charging (DC)", "Up to 130kW"]
      - ["Rapid charge, 112 miles of range", "19 minutes"]
      - ["Home and depot charging (AC)", "22kW (11kW on V2L versions)"]
      - ["Motor", "105kW (140hp), 300Nm"]
notes:
  - "Renault quotes range and top speed by vehicle class: N1 for the 3,500kg vans and N2 for the 4,000kg vans. The N2 vans are limited to 56mph."
  - "Renault gives one maximum payload for each body, and links its best figure (up to 1,600kg) to the 4 tonne L2H2 van. We have not shown a payload for the 3,500kg vans, which carry less."
  - "V2L versions of the MM35, MM40, LM35 and LM40 add a 220V socket in the load area, but have an 11kW on-board AC charger instead of 22kW."
  - "Renault's rapid charging times are measured on a 150kW public charger."
  - "Renault's price guide also lists an electric parking brake and one-touch electric front windows as standard on the Master E-Tech."
versions:
  - name: "L2H2, 3,500kg"
    figures:
      range: "255 miles"
      volume: "10.8m³"
      loadLength: "3,225mm"
      loadHeight: "1,885mm"
      gross: "3,500kg"
      topSpeed: "75mph"
  - name: "L2H2, 4,000kg"
    figures:
      range: "285 miles"
      payload: "Up to 1,606kg"
      volume: "10.8m³"
      loadLength: "3,225mm"
      loadHeight: "1,885mm"
      gross: "4,000kg"
      topSpeed: "56mph"
  - name: "L3H2, 3,500kg"
    figures:
      range: "255 miles"
      volume: "13m³"
      loadLength: "3,855mm"
      loadHeight: "1,885mm"
      gross: "3,500kg"
      topSpeed: "75mph"
  - name: "L3H2, 4,000kg"
    figures:
      range: "285 miles"
      payload: "Up to 1,499kg"
      volume: "13m³"
      loadLength: "3,855mm"
      loadHeight: "1,885mm"
      gross: "4,000kg"
      topSpeed: "56mph"
  - name: "L3H3, 3,500kg"
    figures:
      range: "255 miles"
      volume: "14.8m³"
      loadLength: "3,855mm"
      loadHeight: "2,138mm"
      gross: "3,500kg"
      topSpeed: "75mph"
  - name: "L3H3, 4,000kg"
    figures:
      range: "285 miles"
      payload: "Up to 1,488kg"
      volume: "14.8m³"
      loadLength: "3,855mm"
      loadHeight: "2,138mm"
      gross: "4,000kg"
      topSpeed: "56mph"
shared:
  battery: "87kWh"
  rapid: "Up to 130kW"
  ac: "22kW (11kW on V2L versions)"
archive: sources/renault-van-price-guide-2026-09.pdf
equipment:
  - trim: "Advance E-Tech"
    archive: sources/renault-master-van-brochure-2026-06.pdf
    groups:
      - name: "Safety and driver assistance"
        items:
          - text: "Automatic emergency braking"
            quote: "• automatic emergency braking"
          - text: "Pedestrian and cyclist detection for emergency braking (MM40 and LM40)"
            quote: "** Pedestrian/cyclist on MM40 and LM40 only."
          - text: "Road sign recognition and speeding alert"
            quote: "• road sign recognition and speeding alert"
          - text: "Rear parking sensors"
            quote: "• rear parking sensors"
          - text: "Dynamic braking system"
            quote: "• dynamic braking system"
          - text: "Anti-lock brakes"
            quote: "• anti-lock braking system"
      - name: "Cab and comfort"
        items:
          - text: "Manual air conditioning"
            quote: "• manual air conditioning"
          - text: "7-inch colour driver information display"
            quote: "• 7\" colour TFT driver information display (E-Tech only)"
          - text: "12V socket in the centre console"
            quote: "• 12 V socket in central console"
          - text: "Dark marl fabric upholstery, with a reinforced coated-textile side on the driver's seat"
            quote: "dark grey marled fabric upholstery and reinforced driver seat side in grained coated textile"
          - text: "Nine storage areas, 135 litres in total"
            quote: "With nine storage areas with a total capacity of 135L"
          - text: "66-litre storage under the front passenger seats"
            quote: "66-litre storage compartment under front passenger seats"
      - name: "Multimedia and connectivity"
        items:
          - text: "10-inch openR link multimedia system"
            quote: "• 10” openR link multimedia system"
      - name: "Charging and battery"
        items:
          - text: "87kWh battery"
            quote: "The 87kWh battery provides a range"
          - text: "22kW AC and 130kW DC charging"
            quote: "comes with 22kw AC and 130 DC charging as standard"
          - text: "11kW AC charging on V2L versions"
            quote: "11kW AC with DC 130 for V2L specific versions"
          - text: "Vehicle-to-load (V2L) 220V socket in the load area (V2L versions)"
            quote: "V2L provides a 220v socket in the cargo area"
          - text: "Mode 3 charging cable"
            quote: "delivered with a mode 3-type cable"
      - name: "Exterior"
        items:
          - text: "LED headlights with C-shaped light signature"
            quote: "• front LED lights with C-shaped signature"
          - text: "Automatic headlights and wipers"
            quote: "• automatic headlights and wipers"
          - text: "16-inch steel wheels with extended Vango protection"
            quote: "16” steel wheel rim 16” steel wheel rims airna extended vango"
options:
  - category: "Seats and cab"
    items:
      - name: "Additional key"
        price: "£50"
        quote: "Additional key (same as main key) o o o £50.00"
      - name: "Hands-free key card with zoning"
        price: "£200"
        quote: "Handsfree key card with zoning o o o £200.00"
      - name: "Automatic air conditioning"
        price: "£300"
        note: "Not with the bulkhead removed"
        quote: "Automatic Air Conditioning(5) o o o £300.00"
      - name: "Tachograph"
        price: "£650"
        note: "MM35, LM35 and LH35. Standard on MM40, LM40 and LH40"
        quote: "Tachograph(4) o o/ • o £650.00"
  - category: "Multimedia"
    items:
      - name: "10.1-inch openR link touchscreen with navigation and Google built-in"
        price: "£800"
        quote: "10.1\" open Rlink touchscreen with navigation and google built-in o o • £800.00"
      - name: "Conversion interface box"
        price: "£150"
        quote: "Conversion Interface Box o o o £150.00"
      - name: "Converter companion"
        price: "£500"
        note: "Needs the openR link screen with Google built-in"
        quote: "Converter companion(15) o o o £500.00"
  - category: "Charging"
    items:
      - name: "Mode 2 charging cable"
        price: "£450"
        quote: "Mode 2 charging cable - o - £450.00"
  - category: "Safety and driver assistance"
    items:
      - name: "Automatic cruise control with stop and go"
        price: "£150"
        quote: "Automatic Cruise Control Stop and Go(9) o o o £150.00"
      - name: "Blind spot warning"
        price: "£350"
        note: "Not on MM40 or LM40"
        quote: "Blind Spot Warning(10) o o/- o £350.00"
      - name: "Blind spot warning and blind spot information"
        price: "£250"
        note: "MM40 and LM40 only"
        quote: "Blind Spot warning and blind spot information(11) - MM40 and LM40 only - £250.00"
      - name: "360-degree parking sensors"
        price: "£300"
        note: "Not on MM40 or LM40"
        quote: "360 Parking sensors(12) o o/- o £300.00"
      - name: "Rear view camera"
        price: "£375"
        quote: "Rear view camera o o o £375.00"
      - name: "Reversing warning sound"
        price: "£50"
        quote: "Reversing light sound generation o o o £50.00"
      - name: "Smart rear view mirror"
        price: "£800"
        note: "Not with glazed rear doors or with the bulkhead removed"
        quote: "Smart rear view mirror(13) o o o £800.00"
      - name: "Spare wheel"
        price: "£250"
        note: "MM35, LM35 and LH35. Standard on MM40, LM40 and LH40"
        quote: "Spare wheel(14) o o/ • o £250.00"
      - name: "Under body protection"
        price: "£250"
        quote: "Under body protection o o o £250.00"
      - name: "Speed limiter, 56mph, 62mph or 68mph"
        price: "£65"
        quote: "Speed Limiter - 56mph / 62mph / 68mph o o o £65.00"
  - category: "Packs"
    items:
      - name: "Visibility Pack"
        price: "£200"
        note: "Automatic high beam and cornering front fog lights"
        quote: "Visibility Pack Automatic High beam o o - £200.00"
      - name: "Driver assistance pack"
        price: "£600"
        note: "Automatic high beam, blind spot warning and rear view camera"
        quote: "Driver assistance pack Automatic high beam o o - £600.00"
  - category: "Load area"
    items:
      - name: "Glazed and grilled bulkhead"
        price: "£200"
        quote: "Glazed and grilled Bulkhead o o o £200.00"
      - name: "Solid panel instead of driver-side sliding door"
        price: "£500"
        quote: "One solid panel (driver side) o o o £500.00"
      - name: "Glazed fixed-window left sliding door"
        price: "£150"
        quote: "One glazed (fixed) sliding door (left side) o o o £150.00"
      - name: "Right-side sliding door, no window"
        price: "£400"
        quote: "Right side sliding door no window o o o £400.00"
      - name: "No right sliding door with fixed window"
        price: "£500"
        note: "Renault's own wording"
        quote: "No right sliding door with fixed window o o o £500.00"
      - name: "Rear panel doors opening to 270 degrees"
        price: "£200"
        quote: "Rear panel doors - 270 degree opening o o o £200.00"
      - name: "Rear step board to load area"
        price: "£300"
        quote: "Rear step board to cargo area o o o £300.00"
      - name: "Pneumatic suspension"
        price: "£2,000"
        note: "Not on MM35 or MM40. Needs the conversion interface box"
        quote: "Pneumatic Suspension(1) o o o £2,000.00"
      - name: "Reinforced L5 VRLA battery and 230A alternator for converters"
        price: "£100"
        quote: "Reinforced L5 VRLA battery and 230A alternator for converters o o o £100.00"
  - category: "Windows and mirrors"
    items:
      - name: "Non-heated glazing"
        price: "£150"
        quote: "Non heated glazing o o o £150.00"
      - name: "Heated rear window"
        price: "£110"
        note: "Must be taken with rear glazing"
        quote: "Heated and defogging rear window(8) o o o £110.00"
      - name: "Glazed rear doors, 180-degree opening"
        price: "£150"
        quote: "Glazed rear doors - 180 degree opening o o o £150.00"
      - name: "Glazed rear doors, 270-degree opening"
        price: "£400"
        quote: "Glazed rear doors - 270 degree opening o o o £400.00"
      - name: "Glazing pack 1"
        price: "£450"
        note: "Glazed left sliding door and right side panel, glazed 180-degree rear doors, glazed and grilled bulkhead, heated rear glass and glazed rear quarters"
        quote: "Glazing pack 1 Left side loading door - glazed with non opening window Right side panel - glazed with non opening window Rear doors - glazed, 180 degree o o o £450.00"
      - name: "Glazing pack 2"
        price: "£600"
        note: "Glazed left and right sliding doors, glazed 180-degree rear doors, glazed and grilled bulkhead, heated rear glass and glazed rear quarters"
        quote: "Glazing pack 2 Left side loading door - glazed with non opening window Right side loading door - glazed with non opening window Rear doors - glazed, 180 degree o o o £600.00"
      - name: "Glazing pack 3"
        price: "£400"
        note: "Glazed left sliding door and right side panel and glazed 180-degree rear doors, with no bulkhead"
        quote: "Glazing pack 3 Left side loading door - glazed with non opening window Right side panel - glazed with non opening window Rear doors - glazed, 180 degree o o o £400.00"
      - name: "Glazing pack 4"
        price: "£550"
        note: "Glazed left and right sliding doors and glazed 180-degree rear doors, with no bulkhead"
        quote: "Glazing pack 4 Left side loading door - glazed with non opening window Right side loading door - glazed with non opening window Rear doors - glazed, 180 degree o o o £550.00"
  - category: "Wheels and tyres"
    items:
      - name: "All-weather tyres"
        price: "£300"
        quote: "All weather tyres o o o £300.00"
      - name: "16-inch steel wheels with Airna hubcaps"
        price: "£50"
        quote: "16\" steel wheels with airna hubcaps o o o £50.00"
  - category: "Towing"
    items:
      - name: "Tow ball attachment and wiring"
        price: "£500"
        note: "Needs the conversion interface box"
        quote: "Tow ball attachment and wiring(16) o o o £500.00"
  - category: "Paint"
    items:
      - name: "Metallic paint (Agave Blue and Energy Red are priced as metallic)"
        price: "£750"
        quote: "Metallic paint (please note Agave Blue and Energy red are priced as metallic) o o o £750.00"
facts:
  - claim: "1 September 2026"
    archive: sources/renault-van-price-guide-2026-09.pdf
    quote: "prices valid from 1 September 2026"
  - claim: "1 July 2026"
    archive: sources/renault-master-van-brochure-2026-06.pdf
    quote: "1 July 2026"
  - claim: "3,500kg"
    archive: sources/renault-master-van-brochure-2026-06.pdf
    quote: "gross vehicle weight (kg) 3500 or 4000"
  - claim: "4,000kg"
    archive: sources/renault-master-van-brochure-2026-06.pdf
    quote: "gross vehicle weight (kg) 3500 or 4000"
  - claim: "255 miles"
    archive: sources/renault-master-van-brochure-2026-06.pdf
    quote: "255 miles (N1) 285 miles (N2)"
  - claim: "285 miles"
    archive: sources/renault-master-van-brochure-2026-06.pdf
    quote: "255 miles (N1) 285 miles (N2)"
  - claim: "75mph"
    archive: sources/renault-master-van-brochure-2026-06.pdf
    quote: "75mph (120 km/h) for N1 versions 56mph (88km/h) for N2 versions"
  - claim: "56mph"
    archive: sources/renault-master-van-brochure-2026-06.pdf
    quote: "75mph (120 km/h) for N1 versions 56mph (88km/h) for N2 versions"
  - claim: "Up to 1,606kg"
    archive: sources/renault-master-van-brochure-2026-06.pdf
    quote: "max payload (kg) 1606 1499 1488"
  - claim: "Up to 1,499kg"
    archive: sources/renault-master-van-brochure-2026-06.pdf
    quote: "max payload (kg) 1606 1499 1488"
  - claim: "Up to 1,488kg"
    archive: sources/renault-master-van-brochure-2026-06.pdf
    quote: "max payload (kg) 1606 1499 1488"
  - claim: "up to 1,600kg"
    archive: sources/renault-master-van-brochure-2026-06.pdf
    quote: "up to 1,600kg of payload and"
  - claim: "4 tonne L2H2 van"
    archive: sources/renault-master-van-brochure-2026-06.pdf
    quote: "on the L2H2 E-Tech 100% electric version – 87 kWh – 4 tonnes"
  - claim: "3,225mm"
    archive: sources/renault-master-van-brochure-2026-06.pdf
    quote: "Loading length (mm) 3,225 3855 3855"
  - claim: "3,855mm"
    archive: sources/renault-master-van-brochure-2026-06.pdf
    quote: "Loading length (mm) 3,225 3855 3855"
  - claim: "1,885mm"
    archive: sources/renault-master-van-brochure-2026-06.pdf
    quote: "Load area height (mm) 1885 1885 2138"
  - claim: "2,138mm"
    archive: sources/renault-master-van-brochure-2026-06.pdf
    quote: "Load area height (mm) 1885 1885 2138"
  - claim: "1,312mm"
    archive: sources/renault-master-van-brochure-2026-06.pdf
    quote: "Sliding door width (mm) 1,312 1,312 1,312"
  - claim: "10.8m³"
    archive: sources/renault-master-van-brochure-2026-06.pdf
    quote: "Load volume (m3) 10.8 13 14.8"
  - claim: "13m³"
    archive: sources/renault-master-van-brochure-2026-06.pdf
    quote: "Load volume (m3) 10.8 13 14.8"
  - claim: "14.8m³"
    archive: sources/renault-master-van-brochure-2026-06.pdf
    quote: "Load volume (m3) 10.8 13 14.8"
  - claim: "5,680mm"
    archive: sources/renault-master-van-brochure-2026-06.pdf
    quote: "Overall length (mm) 5680 6315"
  - claim: "6,315mm"
    archive: sources/renault-master-van-brochure-2026-06.pdf
    quote: "Overall length (mm) 5680 6315"
  - claim: "2,502mm"
    archive: sources/renault-master-van-brochure-2026-06.pdf
    quote: "Overall height (mm) 2502 2780"
  - claim: "2,780mm"
    archive: sources/renault-master-van-brochure-2026-06.pdf
    quote: "Overall height (mm) 2502 2780"
  - claim: "2,121 to 2,434kg"
    archive: sources/renault-master-van-brochure-2026-06.pdf
    quote: "kerb weight (kg) 2121-2434 2191-2501 2203-2512"
  - claim: "2,191 to 2,501kg"
    archive: sources/renault-master-van-brochure-2026-06.pdf
    quote: "kerb weight (kg) 2121-2434 2191-2501 2203-2512"
  - claim: "2,203 to 2,512kg"
    archive: sources/renault-master-van-brochure-2026-06.pdf
    quote: "kerb weight (kg) 2121-2434 2191-2501 2203-2512"
  - claim: "87kWh"
    archive: sources/renault-master-van-brochure-2026-06.pdf
    quote: "The 87kWh battery provides a range"
  - claim: "Up to 130kW"
    archive: sources/renault-master-van-brochure-2026-06.pdf
    quote: "11kW AC with DC 130 for V2L specific versions 22 kW AC with DC 130"
  - claim: "22kW (11kW on V2L versions)"
    archive: sources/renault-master-van-brochure-2026-06.pdf
    quote: "11kW AC with DC 130 for V2L specific versions 22 kW AC with DC 130"
  - claim: "11kW on-board AC charger instead of 22kW"
    archive: sources/renault-master-van-brochure-2026-06.pdf
    quote: "11kW AC with DC 130 for V2L specific versions 22 kW AC with DC 130"
  - claim: "112 miles of range"
    archive: sources/renault-master-van-brochure-2026-06.pdf
    quote: "112 miles → 5 h 44 112 miles → 11 h 46 112 miles → 21 h 59 112 miles → 19 min"
  - claim: "19 minutes"
    archive: sources/renault-master-van-brochure-2026-06.pdf
    quote: "112 miles → 5 h 44 112 miles → 11 h 46 112 miles → 21 h 59 112 miles → 19 min"
  - claim: "150kW public charger"
    archive: sources/renault-master-van-brochure-2026-06.pdf
    quote: "connected to a 150kW public fast charging station"
  - claim: "105kW (140hp), 300Nm"
    archive: sources/renault-master-van-brochure-2026-06.pdf
    quote: "max. power kW EEC (hp) 105(140) max. torque EEC-Nm 300"
  - claim: "220V socket in the load area"
    archive: sources/renault-master-van-brochure-2026-06.pdf
    quote: "V2L provides a 220v socket in the cargo area"
---

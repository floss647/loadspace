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
  - "Payload is shown as Nissan's minimum to maximum figure, which depends on the kerb weight of the van as built. Nissan's payload figures include the driver's weight, and its kerb weights are pending homologation."
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
equipment:
  - trim: "Acenta"
    archive: sources/nissan-interstar-brochure-2026-08.pdf
    groups:
      - name: "Safety and driver assistance"
        items:
          - text: "Automatic forward emergency braking (AEBS)"
            quote: "• Automatic Forward Emergency • Protection under engine (40 GVW driver side Braking System (AEBS)"
          - text: "Lane departure warning"
            quote: "• Lane Departure Warning"
          - text: "Lane keeping assist"
            quote: "• Lane Keeping Assist"
          - text: "Intelligent speed assist with cruise control and traffic sign recognition"
            quote: "• Intelligent Speed Assist (Cruise • USB port & AUX socket Control + Traffic Sign Recognition)"
          - text: "Distance warning in the instrument display"
            quote: "• Distance Warning (time in sec) in TFT EXTERIOR STYLING COMFORT AND CONVENIENCE instr panel"
          - text: "Driver drowsiness and attention warning"
            quote: "• Driver Drowsiness and Attention WHEELS • LED light in cabin Warning"
          - text: "ABS, brake assist, stability control, hill start assist and trailer sway assistant"
            quote: "• ABS and brake assist, VDC + ASR, • Lamp High Beam adj, backrest inclination and armrest Hill Start Assist and Trailer Sway"
          - text: "Automatic high and low beam"
            quote: "• Auto High Low Beam"
          - text: "Automatic lights and wipers"
            quote: "• Automatic lights and wipers"
          - text: "Rear parking sensors"
            quote: "• Rear Parking Sensors"
          - text: "Driver's and passenger airbags"
            quote: "• Driver’s and passenger airbag"
          - text: "Height-adjustable 3-point seatbelts with pretensioners and reminders"
            quote: "• Seatbelts - 3 point height-adjustable Charger (87kWh battery) Van version seatbelts with pretensioners and • Vehicle-to-load (V2L) reminder"
          - text: "Tyre pressure monitoring"
            quote: "• TPMS"
          - text: "e-Call emergency call"
            quote: "• e-Call"
          - text: "Blind spot information system (N2 versions only)"
            quote: "• Blind Spot Info System (N2 • Mode 3 Type 2 Cable 6.5m with Adaption Module) homologated versions only)"
          - text: "Tachograph (N2 versions only)"
            quote: "• Tachograph (N2 variants only)"
          - text: "Remote central locking"
            quote: "• Remote central door locking"
          - text: "Automatic door locking at 5mph"
            quote: "• Automatic door locking (at 5MPH)"
          - text: "Superlocking"
            quote: "• Superlocking"
          - text: "3-button key"
            quote: "• 3-button key"
          - text: "Nissan Anti Theft System immobiliser"
            quote: "• Nissan Anti Theft System immobiliser"
          - text: "Thatcham alarm"
            quote: "• Thatcham alarm"
      - name: "Cab and comfort"
        items:
          - text: "Manual air conditioning"
            quote: "• Manual A/C"
          - text: "Driver's seat with reach, height and backrest adjustment and armrest"
            quote: "• Driver seat with longitudinal, height • ABS and brake assist, VDC + ASR, • Lamp High Beam adj, backrest inclination and armrest"
          - text: "2-seat passenger bench"
            quote: "• 2-seater passenger bench"
          - text: "Fold-down centre seat with underseat storage"
            quote: "• Fold-down central seat with • Front Fog Lights with cornering underseat storage"
          - text: "Acenta seat trim"
            quote: "• Seat trim Acenta"
          - text: "Steering wheel with rake and reach adjustment"
            quote: "• Steering wheel - rake and reach adj"
          - text: "Electric front windows, one-touch on the driver's side"
            quote: "• Electric front windows, one touch • Protection under engine (40 GVW driver side"
          - text: "Electronic parking brake"
            quote: "• Electronic parking brake"
          - text: "2 cup holders on the dashboard"
            quote: "• 2 cup holders on dashboard"
          - text: "Closed glovebox"
            quote: "• Closed glovebox"
          - text: "LED cabin light"
            quote: "• LED light in cabin"
          - text: "Overhead parcel shelves"
            quote: "• Overhead parcel shelves"
      - name: "Multimedia and connectivity"
        items:
          - text: "10.1-inch touchscreen with DAB radio, Bluetooth, Android Auto and Apple CarPlay"
            quote: "• Media center 10.1” touchscreen with • Auto High Low Beam • 50:50 split 180 degree unglazed twin radio DAB, bluetooth, 2 speakers and • Automatic lights and wipers rear doors Android Auto / Apple Carplay"
          - text: "7-inch colour TFT instrument cluster"
            quote: "• 7” colour TFT cluster"
          - text: "Nissan Connect"
            quote: "• Nissan Connect"
          - text: "USB port and AUX socket"
            quote: "• USB port & AUX socket"
      - name: "Charging and battery"
        items:
          - text: "22kW AC on-board charger and 130kW DC rapid charging (87kWh battery)"
            quote: "• 22kW AC On-board & 130kW DC Rapid • Seatbelts - 3 point height-adjustable Charger (87kWh battery)"
          - text: "Vehicle-to-load (V2L)"
            quote: "• Vehicle-to-load (V2L)"
          - text: "6.5m mode 3 type 2 cable with storage bag"
            quote: "• Mode 3 Type 2 Cable 6.5m with Adaption Module) homologated versions only) storage bag"
      - name: "Load area"
        items:
          - text: "Full steel bulkhead without window"
            quote: "• Full steel bulkhead without window"
          - text: "Soundproofing trim on the bulkhead"
            quote: "• Soundproofing trim on bulkhead"
          - text: "Nearside sliding door, unglazed"
            quote: "• Nearside sliding panel door unglazed"
          - text: "50:50 split unglazed rear doors opening to 180 degrees"
            quote: "• 50:50 split 180 degree unglazed twin radio DAB, bluetooth, 2 speakers and • Automatic lights and wipers rear doors"
          - text: "Floor-level anchorage rings: 4 each side in the L2, 5 each side in the L3"
            quote: "• Anchorage fix rings in loadspace EV SPECIFICS • Thatcham alarm (close to the floor): 4 on each side of L2 Van version, 5 on each side of L3"
          - text: "LED load area light"
            quote: "• LED light in cargo"
      - name: "Exterior"
        items:
          - text: "16-inch steel wheels with full wheel covers"
            quote: "• 16\" steel wheels with full wheel covers"
          - text: "LED daytime running lights"
            quote: "• LED Daytime Running Lights"
          - text: "LED low beam headlights"
            quote: "• LED Low Beam"
          - text: "Front fog lights with cornering function"
            quote: "• Front Fog Lights with cornering underseat storage • Lane Departure Warning function"
          - text: "Electrically adjustable, heated door mirrors"
            quote: "• El. Adjustable, heated door mirrors"
          - text: "Rear step"
            quote: "• Rear step"
          - text: "Towbar pre-wiring (underfloor)"
            quote: "• Towing predisposal (underfloor wiring)"
  - trim: "Tekna (adds to Acenta)"
    archive: sources/nissan-interstar-brochure-2026-08.pdf
    groups:
      - name: "Safety and driver assistance"
        items:
          - text: "Adaptive cruise control"
            quote: "• Advance Automatic Cruise Control • Driver seat with longitudinal, height (EV and Diesel auto versions only)"
          - text: "360-degree parking sensors (replaces rear sensors)"
            quote: "• 360 parking sensors"
          - text: "Rear view camera"
            quote: "• Rear View Camera • 12 V Power socket in load area"
      - name: "Cab and comfort"
        items:
          - text: "Automatic air conditioning (replaces manual)"
            quote: "• Automatic A/C"
          - text: "Driver's seat with lumbar adjustment (replaces Acenta driver's seat)"
            quote: "• Driver seat with longitudinal, height (EV and Diesel auto versions only) and lumbar adj, backrest inclination and armrest"
          - text: "Heated windscreen"
            quote: "• Heated windscreen"
      - name: "Multimedia and connectivity"
        items:
          - text: "Navigation with Google Maps, Google Play and Google Assistant (not on 4.0-tonne versions)"
            quote: "• Navigation with Google Maps, Google Play, Google Assistant (n/a with 4Ton versions)"
      - name: "Load area"
        items:
          - text: "50:50 split unglazed rear doors opening to 270 degrees (replaces the Acenta rear doors)"
            quote: "• 50:50 split 270 degree unglazed twin COMFORT AND CONVENIENCE rear doors"
          - text: "2 extra anchorage rings on each rear door pillar"
            quote: "• Additional 2 anchorage fix rings on • 360 parking sensors each D pillar"
          - text: "12V power socket in the load area"
            quote: "• 12 V Power socket in load area"
options:
  - category: "Paint"
    items:
      - name: "Metallic paint (Blue Grey, Silver, Black)"
        price: "£750"
        note: "All panel vans, Acenta and Tekna. The VAT-inclusive price Nissan prints beside it does not match, so confirm the price with the dealer"
        quote: "Metallic Paint Blue Grey, Silver, Black ○ ○ ○ ○ ○ ○ £750 £780"
  - category: "Load area"
    items:
      - name: "Offside sliding panel door"
        price: "£400"
        note: "All panel vans, Acenta and Tekna"
        quote: "Offside Sliding Panel Door ○ ○ - - - - £400 £480"
factCheck:
  by: "independent fact-checker"
  date: 2026-11-01
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
    archive: sources/nissan-interstar-brochure-2026-08.pdf
    quote: "Max payload 1 197 1 694 1 116 1 614 Min payload 844 1 344 711 1 210"
  - claim: "1,344 to 1,694kg"
    archive: sources/nissan-interstar-brochure-2026-08.pdf
    quote: "Max payload 1 197 1 694 1 116 1 614 Min payload 844 1 344"
  - claim: "711 to 1,116kg"
    archive: sources/nissan-interstar-brochure-2026-08.pdf
    quote: "Max payload 1 197 1 694 1 116 1 614 Min payload 844 1 344 711 1 210"
  - claim: "1,210 to 1,614kg"
    archive: sources/nissan-interstar-brochure-2026-08.pdf
    quote: "Max payload 1 197 1 694 1 116 1 614 Min payload 844 1 344 711 1 210"
  - claim: "2,000kg"
    archive: sources/nissan-interstar-brochure-2026-08.pdf
    quote: "Max towing capacity - braked 2 000 1 500 2 000 1 500"
  - claim: "1,500kg"
    archive: sources/nissan-interstar-brochure-2026-08.pdf
    quote: "Max towing capacity - braked 2 000 1 500 2 000 1 500"
  - claim: "750kg"
    archive: sources/nissan-interstar-brochure-2026-08.pdf
    quote: "Max towing capacity - braked 2 000 1 500 2 000 1 500 Max towing capacity - unbraked 750 750 750 750"
  - claim: "5,500kg"
    archive: sources/nissan-interstar-brochure-2026-08.pdf
    quote: "Gross combination weight 5 500 5 500 5 500 5 500"
  - claim: "3,225mm"
    archive: sources/nissan-interstar-brochure-2026-08.pdf
    quote: "Load area length (at floor) 3 225 3 855 3 855"
  - claim: "3,855mm"
    archive: sources/nissan-interstar-brochure-2026-08.pdf
    quote: "Load area length (at floor) 3 225 3 855 3 855"
  - claim: "1,380mm"
    archive: sources/nissan-interstar-brochure-2026-08.pdf
    quote: "Load area width between wheel arches 1 380 1 380 1 380"
  - claim: "1,789mm"
    archive: sources/nissan-interstar-brochure-2026-08.pdf
    quote: "Load area width at widest point 1 789 1 789 1 789"
  - claim: "1,885mm"
    archive: sources/nissan-interstar-brochure-2026-08.pdf
    quote: "Load area height 1 885 1 885 2 138"
  - claim: "10.8m³"
    archive: sources/nissan-interstar-brochure-2026-08.pdf
    quote: "Cargo area volume (m3) 10.8 13.0 14.8"
  - claim: "13.0m³"
    archive: sources/nissan-interstar-brochure-2026-08.pdf
    quote: "Cargo area volume (m3) 10.8 13.0 14.8"
---

---
van: citroen-relay
title: "Citroën ë-Relay specs"
summary: "Load space, payload, range, towing, charging, kit and options for each ë-Relay electric panel van, from Citroën UK's own price and specification guide."
date: 2026-11-01T09:00:00Z
sourceLabel: "Citroën UK ë-Relay and Relay prices and specifications, 1 October 2026"
tables:
  - title: "Range, payload and weight"
    head: ["Version", "Gross weight", "Range", "Payload", "Towing (braked)", "Top speed"]
    rows:
      - ["L3H2 van", "3,500kg", "235 miles", "730kg", "2,400kg", "81mph"]
      - ["L3H2 van", "4,250kg", "263 miles", "1,480kg", "2,400kg", "56mph"]
      - ["L3H3 van", "4,250kg", "254 miles", "1,455kg", "2,400kg", "56mph"]
      - ["L4H2 van", "4,250kg", "262 miles", "1,435kg", "2,400kg", "56mph"]
      - ["L4H3 van", "4,250kg", "252 miles", "1,385kg", "2,400kg", "56mph"]
  - title: "Prices"
    head: ["Version", "Gross weight", "List price before VAT", "On the road after the grant, before VAT"]
    rows:
      - ["L3H2 van", "3,500kg", "£49,735", "£46,224.17"]
      - ["L3H2 van", "4,250kg", "£50,545", "£46,674.17"]
      - ["L3H3 van", "4,250kg", "£51,355", "£47,484.17"]
      - ["L4H2 van", "4,250kg", "£51,355", "£47,484.17"]
      - ["L4H3 van", "4,250kg", "£52,165", "£48,294.17"]
  - title: "Load space"
    head: ["", "L3H2", "L3H3", "L4H2", "L4H3"]
    rows:
      - ["Load length (at floor)", "3,705mm", "3,705mm", "4,070mm", "4,070mm"]
      - ["Width between wheel arches", "1,422mm", "1,422mm", "1,422mm", "1,422mm"]
      - ["Maximum load width", "1,870mm", "1,870mm", "1,870mm", "1,870mm"]
      - ["Load height", "1,932mm", "2,172mm", "1,932mm", "2,172mm"]
      - ["Load volume", "13m³", "15m³", "15m³", "17m³"]
  - title: "Charging and battery"
    head: ["", ""]
    rows:
      - ["Battery", "110kWh (97.8kWh usable)"]
      - ["Rapid charging (DC)", "5 to 80% in 55 minutes on a 150kW rapid charger"]
      - ["Home and depot charging (AC)", "22kW"]
      - ["Full charge on a 22kW three-phase wallbox", "6h 05min"]
      - ["Full charge on a 7.4kW single-phase wallbox", "16h 40min"]
      - ["Battery warranty", "8 years or 100,000 miles (to 70% capacity)"]
      - ["Motor", "270hp (205kW), 410Nm"]
      - ["Towing (unbraked)", "750kg"]
notes:
  - "Citroën says the ë-Relay is not subject to WLTP testing, as all versions are homologated as heavy vehicles, so it calculates these ranges using the WLTP method instead."
  - "The 4,250kg versions are legally limited to 56mph and must have a tachograph."
  - "Citroën's payloads are maximum indicative figures worked out from the kerb weight with no driver, and it says the driver's weight is included within the payload, so the driver counts against these figures. Working from Citroën's mass in running order, which includes the driver, leaves 655kg for the 3,500kg van. The payloads also don't allow for any options you order."
  - "Towing is also limited by the gross train weight of 5,500kg, so a fully loaded 4,250kg van can tow up to 1,250kg and a fully loaded 3,500kg van up to 2,000kg."
  - "The ë-Relay panel van comes in one trim, Enterprise. The on-the-road prices include delivery and number plates and take off the £5,000 plug-in van grant."
versions:
  - name: "L3H2, 3,500kg"
    figures:
      range: "235 miles"
      payload: "730kg"
      volume: "13m³"
      loadLength: "3,705mm"
      loadHeight: "1,932mm"
      loadWidth: "1,422mm"
      gross: "3,500kg"
      towing: "2,400kg"
      topSpeed: "81mph"
  - name: "L3H2, 4,250kg"
    figures:
      range: "263 miles"
      payload: "1,480kg"
      volume: "13m³"
      loadLength: "3,705mm"
      loadHeight: "1,932mm"
      loadWidth: "1,422mm"
      gross: "4,250kg"
      towing: "2,400kg"
      topSpeed: "56mph"
  - name: "L3H3, 4,250kg"
    figures:
      range: "254 miles"
      payload: "1,455kg"
      volume: "15m³"
      loadLength: "3,705mm"
      loadHeight: "2,172mm"
      loadWidth: "1,422mm"
      gross: "4,250kg"
      towing: "2,400kg"
      topSpeed: "56mph"
  - name: "L4H2, 4,250kg"
    figures:
      range: "262 miles"
      payload: "1,435kg"
      volume: "15m³"
      loadLength: "4,070mm"
      loadHeight: "1,932mm"
      loadWidth: "1,422mm"
      gross: "4,250kg"
      towing: "2,400kg"
      topSpeed: "56mph"
  - name: "L4H3, 4,250kg"
    figures:
      range: "252 miles"
      payload: "1,385kg"
      volume: "17m³"
      loadLength: "4,070mm"
      loadHeight: "2,172mm"
      loadWidth: "1,422mm"
      gross: "4,250kg"
      towing: "2,400kg"
      topSpeed: "56mph"
shared:
  battery: "110kWh (97.8kWh usable)"
  rapid: "5 to 80% in 55 minutes on a 150kW rapid charger"
  rapidTime: "55 minutes"
  ac: "22kW"
  warranty: "8 years or 100,000 miles (to 70% capacity)"
archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
equipment:
  - trim: "Enterprise"
    groups:
      - name: "Safety and driver assistance"
        items:
          - text: "Advanced emergency braking, with pedestrian and cyclist detection"
            quote: "Advanced Emergency Braking System (AEBS) - Moving Of Information System (MOIS) 5\" DAB Radio with Bluetooth® and USB Pedestrian and Cyclist"
          - text: "Electronic stability control and ABS with hill start assist"
            quote: "Electronic Stability Control and ABS with Hill Start Assist, EBA and EBFD"
          - text: "Lane keeping assist"
            quote: "Lane Keeping Assist"
          - text: "Traffic sign recognition"
            quote: "Traffic Sign Recognition"
          - text: "Intelligent speed assistance"
            quote: "Intelligent Speed Assistance"
          - text: "Driver attention alert with driver weariness camera"
            quote: "Driver Attention Alert level 4 (includes Driver Weariness Camera)"
          - text: "Driver and front passenger airbags"
            quote: "Driver and front passenger’s airbags"
          - text: "Rear parking sensors"
            quote: "Rear parking sensors"
          - text: "Hazard lights switch on automatically under heavy braking"
            quote: "Automatic activation of hazard warning lights on major deceleration"
          - text: "Tyre pressure monitoring"
            quote: "Tyre pressure monitor"
          - text: "Puncture repair kit"
            quote: "Puncture repair kit"
          - text: "Pedestrian warning sound at low speed (AVAS)"
            quote: "AVAS: Acoustic Vehicle Alerting System"
          - text: "Thatcham category 1 alarm"
            quote: "Perimetric and volumetric, Thatcham category 1 approved alarm"
          - text: "Remote central locking with deadlocks"
            quote: "Remote central locking with deadlocking."
          - text: "Thatcham-approved immobiliser"
            quote: "Rolling code transponder immobiliser (Thatcham approved)"
          - text: "Moving off information and blind spot information systems (4.25-tonne versions)"
            quote: "Blind spot information systems l l works (BSIS) 4.25T"
          - text: "Smart tachograph and 56mph speed limiter (4.25-tonne versions)"
            quote: "Smart Tachograph & 56mph Speed Limiter l l l l 4.25T"
      - name: "Cab and comfort"
        items:
          - text: "Automatic air conditioning"
            quote: "Automatic air-conditioning"
          - text: "Cruise control with speed limiter (Citroën's trim summary excludes 4.25-tonne versions, though its equipment table does not)"
            quote: "Cruise control with speed limiter (excl. 4.25T)"
          - text: "Electric parking brake"
            quote: "Electric parking brake"
          - text: "Electric front windows"
            quote: "Front electric windows"
          - text: "Electric power steering"
            quote: "Electronic Power Steering (EPS)"
          - text: "Reach-adjustable steering wheel"
            quote: "Reach adjustable steering wheel"
          - text: "6-way adjustable driver's seat with lumbar adjustment and armrest"
            quote: "6-way driver's seat with lumbar & armrest"
          - text: "Two-seat passenger bench"
            quote: "Dual front passenger bench seat"
          - text: "Crepe Black fabric upholstery"
            quote: "Crepe Black trim with single stitching fabric upholstery"
          - text: "12-volt socket in the cab"
            quote: "12 volt socket in cabin"
          - text: "Two cup holders and phone storage in the lower dashboard"
            quote: "Two cup holders and mobile phone storage in centre of lower dashboard"
          - text: "Closed upper and open lower glove boxes"
            quote: "Closed upper and open lower glove boxes"
          - text: "Front door pockets with 1.5-litre bottle holders"
            quote: "Front door pockets with 1.5 litre bottle holders"
          - text: "Overhead console with ceiling lamps"
            quote: "Overhead console with ceiling lamps"
          - text: "Overhead shelf (4.25-tonne versions)"
            quote: "Overhead shelf l l Tailboard features dual-mode hinge enabling both tip-through and tip- 4.25T"
          - text: "Laminated acoustic windscreen"
            quote: "Laminated acoustic windscreen"
          - text: "Front windows tinted to 30% opacity"
            quote: "Front windows tinted to 30% opacity"
      - name: "Multimedia and connectivity"
        items:
          - text: "7-inch colour touchscreen with DAB radio and Bluetooth"
            quote: "Multimedia featuring 7” Colour touchscreen with DAB radio, Bluetooth"
          - text: "Apple CarPlay and Android Auto"
            quote: "Apple CarPlay/Android Auto™"
          - text: "USB-A and USB-C ports"
            quote: "Double USB Ports (A type and C type)"
          - text: "7-inch digital instrument cluster"
            quote: "7\" digital instrument cluster"
          - text: "Trip computer"
            quote: "Multi-function on-board trip computer"
          - text: "Citroën Connect Box with emergency and assistance calls"
            quote: "Citroën Connect Box with Emergency & Assistance system"
          - text: "Telematics box"
            quote: "Global telematics box"
      - name: "Charging and battery"
        items:
          - text: "110kWh lithium-ion battery (97.8kWh usable)"
            quote: "Gross/Net Capacity 110kWh (97.8kWh)"
          - text: "22kW on-board AC charger with 6-metre Mode 3 cable"
            quote: "22KW On Board Charger with Mode 3 charging cable – 6 metres"
          - text: "CCS rapid charging up to 150kW"
            quote: "Rapid Charging (150kW) DC - CCS Socket"
          - text: "Remote pre-conditioning (needs the ë-Remote Control subscription)"
            quote: "Remote temperature pre-conditioning (requires ë-Remote Control"
      - name: "Load area"
        items:
          - text: "Full-height steel bulkhead"
            quote: "Fixed full height steel bulkhead"
          - text: "Nearside sliding side door"
            quote: "Nearside sliding side loading door"
          - text: "Twin unglazed rear doors, opening to 180 degrees"
            quote: "Twin unglazed rear doors, opening to 180°"
          - text: "Load tie-down hooks (8 in L3, 10 in L4)"
            quote: "Load tie-down hooks in cargo area (6 in L2; 8 in L3; 10 in L4)"
      - name: "Exterior"
        items:
          - text: "16-inch steel wheels with black centre caps"
            quote: "16\" steel wheels with black centre caps"
          - text: "Halogen headlamps with daytime running lights"
            quote: "Halogen Headlamp with integrated daytime running lights"
          - text: "Twin-lens door mirrors, electrically adjustable and heated upper mirror"
            quote: "Twin lens door mirrors with electrically adjustable and heated upper"
          - text: "Aerodynamic kit with spoiler, air guides and active grille shutter"
            quote: "Aerodynamic kit featuring central spoiler, air guides and active Grille"
          - text: "Black bumpers, side rubbing strips, door handles and mirrors"
            quote: "Black front and rear bumpers, side rubbing strips, exterior door handles"
          - text: "High-level third brake light"
            quote: "High level third brake light"
options:
  - category: "Packs"
    items:
      - name: "Techno Pack"
        price: "£900"
        note: "Adds a 10-inch touchscreen with TomTom navigation. The pack's double USB ports and automatic air conditioning are already standard on the electric van"
        quote: "Techno Pack: - High Beam Recognition - 10\" Touchscreen radio with TomTom® Navigation, Bluetooth, - Rain & Dusk Sensor £1050 £1150 Diesel £1150 Diesel £1150 Diesel Android Auto™ / Apple CarPlay™ ZJB5 £1150 Diesel - Adaptive Cruise Control I401 G,K,M,R,S Diesel Auto - - - - £900 Electric"
      - name: "Interior Upgrade Pack"
        price: "£350"
        note: "Adds upgraded fabric, a compartment under the driver's seat and an Eat and Work bench seat"
        quote: "Interior Upgrade Pack: Conversion Pack: - Crepe Black trim with backrest graphics, and double stitching - Transformation socket (silver) Fabric - 220A Alternator JI01L,O £230 Diesel £230 Diesel £230 Diesel - BUFX £350"
      - name: "Level 2 Autonomous Driving Pack"
        price: "£700"
        note: "Adds adaptive cruise control, lane centring traffic jam assist, high beam recognition and rain and dusk sensors. Needs the Interior Upgrade Pack too"
        quote: "Level 2 Autonomous Driving: Techno Pack: - High Beam Recognition - 10\" Touchscreen radio with TomTom® Navigation, Bluetooth, - Rain & Dusk Sensor £1050 £1150 Diesel £1150 Diesel £1150 Diesel Android Auto™ / Apple CarPlay™ ZJB5 £1150 Diesel - Adaptive Cruise Control I401 G,K,M,R,S Diesel Auto - - - - £900 Electric £900 Electric £900 Electric l - Double USB charging port (type A + type C) - Speed Limiter £700 Electric"
      - name: "Cargo Pack (L3)"
        price: "£400"
        note: "Adds a load area socket, rear doors opening to 270 degrees, a door-activated LED load light and half-height wall protection"
        quote: "Cargo Pack (L2/L3): - 12v Socket in cargo bay - 270 Rear opening rear doors J6K7 £400"
      - name: "Cargo Pack (L4)"
        price: "£320"
        note: "Adds a load area socket, rear doors opening to 270 degrees and a door-activated LED load light"
        quote: "Cargo Pack (L4): - 12v Socket in cargo bay J6K8 £320 £320 - - - - 270 Rear opening rear doors"
  - category: "Paint"
    items:
      - name: "Expedition Grey (solid)"
        price: "£800"
        quote: "Expedition Grey (F) P0PR P04K £800+VAT"
      - name: "Thunder Grey (solid)"
        price: "£800"
        quote: "Thunder Grey (F) Cumulus Grey (M) P04K M0F4 £800+VAT"
  - category: "Wheels and tyres"
    items:
      - name: "16-inch alloy wheels"
        price: "£500"
        quote: "16\" Alloy Wheels [Heavy and/or Automatic versions] ZIBB £500"
  - category: "Load area"
    items:
      - name: "Rear doors opening to 270 degrees"
        price: "£270"
        quote: "270 degree opening rear doors LL02† £270"
      - name: "Twin glazed rear doors, fixed and heated windows"
        price: "£320"
        quote: "Twin glazed rear doors (windows fixed & heated) £400 Diesel £400 Diesel External rear-view mirrors for body size kit 2.35 m RX05D - - - £50 - PB04I,O - - £320 Electric"
      - name: "Glazed sliding side door"
        price: "£180"
        quote: "Glazed sliding side door [not available on L2H1 Panel Van] PC10 £180"
      - name: "Second sliding side door, unglazed"
        price: "£530"
        quote: "2nd sliding side door (unglazed) PC12 £530"
      - name: "Second sliding side door, glazed"
        price: "£550"
        quote: "2nd sliding side door (glazed) [not available on L2H1 Panel Van] PC13 £550"
      - name: "Glazed bulkhead"
        price: "£100"
        quote: "Glazed bulkhead PX09 £100"
  - category: "Seats and cab"
    items:
      - name: "Front side and window airbags, with a single passenger seat with armrest and lumbar adjustment"
        price: "£540"
        note: "Needs the Interior Upgrade Pack"
        quote: "Front side air bags and window airbags with single front Smart tachograph and speed limiter exclusions HC08P £0 £0 £0 £0 - passenger seat incl. armrest and adjustable lumbar support NF04 C,E,G,U,V £540"
      - name: "Single front passenger seat"
        price: "£50"
        quote: "Single front passenger seat WM08 £50"
      - name: "Additional remote key"
        price: "£50"
        quote: "Additional Remote (Plip) Key [Maximum of 1 additional key per order] JA17G £50"
      - name: "Smart tachograph and overhead storage"
        price: "£700"
        note: "A tachograph is already standard on the heavier N2 versions"
        quote: "Smart tachograph and overhead storage space HC09K £700"
  - category: "Safety and driver assistance"
    items:
      - name: "360-degree parking sensors, cornering fog lights, rear view camera and 7-inch touchscreen"
        price: "£700"
        quote: "360° parking sensors + fog lights with cornering function Oversized rear suspensions SE16 - - - £270 - + rearview camera with dynamic gridlines + 7\" colour UB24 £700"
      - name: "Digital rear-view mirror, with rear view camera"
        price: "£600"
        quote: "Digital central rearview mirror N201 £600"
      - name: "Rear view camera with dynamic guidelines"
        price: "£200"
        quote: "Rearview camera with dynamic gridlines QK13 £200"
  - category: "Lighting"
    items:
      - name: "Full LED headlights"
        price: "£500"
        quote: "Full LED Headlights LA05 £500"
  - category: "Windows and mirrors"
    items:
      - name: "Power-folding door mirrors"
        price: "£100"
        quote: "Power Folding Exterior Mirrors HU02ˆN £100"
  - category: "Multimedia"
    items:
      - name: "DAB aerial built into the right-hand door mirror"
        price: "£130"
        quote: "DAB radio antenna integrated in right external mirror £530 Diesel £530 Diesel £530 Diesel AT22 - - 2nd sliding side door (unglazed) PC12 £530 £530 - - - [brings in ZJC8 on Diesel, ZJC8 is already standard on Electric] £130 Electric"
  - category: "Exterior"
    items:
      - name: "Body-coloured front bumper with black skid plate and front fog lights"
        price: "£400"
        note: "Not available on 4.25-tonne versions or with special paint colours"
        quote: "Body Colour Front Bumper with Black Skid Plate and front fog UXACE,T £400 £400 - - - lights [not available on 4.25T versions"
      - name: "Wheel arch mouldings"
        price: "£200"
        note: "Citroën lists these for Heavy versions only, and says every ë-Relay is homologated as Heavy"
        quote: "Wheel Arches Mouldings - Van [only available on Heavy versions] XX03R £200"
factCheck:
  by: "independent fact-checker"
  date: 2026-11-07
facts:
  - claim: "1 October 2026"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "Effective from 1st October 2026 - MY26"
  - claim: "235 miles"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "Panel Van L3H2 3.5T Heavy Electric 270hp Automatic 378 235 537 334 294 207"
  - claim: "263 miles"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "Panel Van L3H2 4.25T Electric 270hp Automatic 424 263 504 313 262 220"
  - claim: "254 miles"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "Panel Van L3H3 4.25T Electric 270hp Automatic 409 254 488 303 271 227"
  - claim: "262 miles"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "Panel Van L4H2 4.25T Electric 270hp Automatic 422 262 501 311 263 222"
  - claim: "252 miles"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "Panel Van L4H3 4.25T Electric 270hp Automatic 406 252 491 305 273 226"
  - claim: "730kg"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "Panel Van L3H2 3.5T Electric 270hp Automatic 3500 2845 2770 730 2100 2400 5500 2400 750 100 3"
  - claim: "3,500kg"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "Panel Van L3H2 3.5T Electric 270hp Automatic 3500 2845 2770 730 2100 2400 5500 2400 750 100 3"
  - claim: "2,400kg"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "Panel Van L3H2 3.5T Electric 270hp Automatic 3500 2845 2770 730 2100 2400 5500 2400 750 100 3"
  - claim: "750kg"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "Panel Van L3H2 3.5T Electric 270hp Automatic 3500 2845 2770 730 2100 2400 5500 2400 750 100 3"
  - claim: "1,480kg"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "Panel Van L3H2 4.25T Electric 270hp Automatic 4250 2845 2770 1480 2100 2400 5500 2400 750 100 3"
  - claim: "4,250kg"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "Panel Van L3H2 4.25T Electric 270hp Automatic 4250 2845 2770 1480 2100 2400 5500 2400 750 100 3"
  - claim: "1,455kg"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "Panel Van L3H3 4.25T Electric 270hp Automatic 4250 2870 2795 1455 2100 2400 5500 2400 750 100 3"
  - claim: "1,435kg"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "Panel Van L4H2 4.25T Electric 270hp Automatic 4250 2890 2815 1435 2100 2400 5500 2400 750 100 3"
  - claim: "1,385kg"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "Panel Van L4H3 4.25T Electric 270hp Automatic 4250 2940 2865 1385 2100 2400 5500 2400 750 100 3"
  - claim: "gross train weight of 5,500kg"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "Panel Van L4H3 4.25T Electric 270hp Automatic 4250 2940 2865 1385 2100 2400 5500 2400 750 100 3"
  - claim: "a fully loaded 4,250kg van can tow up to 1,250kg"
    calc: "Gross train weight 5,500kg minus gross vehicle weight 4,250kg = 1,250kg, below the 2,400kg braked towing limit"
  - claim: "a fully loaded 3,500kg van up to 2,000kg"
    calc: "Gross train weight 5,500kg minus gross vehicle weight 3,500kg = 2,000kg, below the 2,400kg braked towing limit"
  - claim: "81mph"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "Max speed (mph) 81 56"
  - claim: "56mph"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "All N2 vehicles are legally required to be speed limited to 56mph"
  - claim: "legally limited to 56mph and must have a tachograph"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "Specific differences, all N2 vehicles are legally required to be speed limited at 56mph, and have a tachograph"
  - claim: "£49,735"
    calc: "Citroën UK price guide, ë-Relay prices page, Basic Price (£) exc VAT column for the ë-Relay Panel Van L3H2 3.5T Heavy row: £49,735.00, written as £49,735 (the same row is quoted for its on-the-road price below)"
  - claim: "£46,224.17"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "ë-Relay Panel Van L3H2 3.5T Heavy Electric 270hp Automatic Enterprise 3500 730 13.0 0 235 2CXE5LHYAFTXA014 £49,735.00 £5,000.00 £51,224.17 £46,224.17"
  - claim: "£50,545"
    calc: "Citroën UK price guide, ë-Relay prices page, Basic Price (£) exc VAT column for the ë-Relay Panel Van L3H2 4.25T row: £50,545.00, written as £50,545 (the same row is quoted for its on-the-road price below)"
  - claim: "£46,674.17"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "ë-Relay Panel Van L3H2 4.25T Electric 270hp Automatic Enterprise 4250 1480 13.0 0 263 2CXE5MHYAFTXA014 £50,545.00 £5,000.00 £51,674.17 £46,674.17"
  - claim: "£51,355"
    calc: "Citroën UK price guide, ë-Relay prices page, Basic Price (£) exc VAT column for the ë-Relay Panel Van L3H3 4.25T and L4H2 4.25T rows: £51,355.00, written as £51,355 (the same row is quoted for its on-the-road price below)"
  - claim: "£47,484.17"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "ë-Relay Panel Van L4H2 4.25T Electric 270hp Automatic Enterprise 4250 1435 15.0 0 262 2CXE7MHYAFTXA014 £51,355.00 £5,000.00 £52,484.17 £47,484.17"
  - claim: "£52,165"
    calc: "Citroën UK price guide, ë-Relay prices page, Basic Price (£) exc VAT column for the ë-Relay Panel Van L4H3 4.25T row: £52,165.00, written as £52,165 (the same row is quoted for its on-the-road price below)"
  - claim: "£48,294.17"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "ë-Relay Panel Van L4H3 4.25T Electric 270hp Automatic Enterprise 4250 1385 17.0 0 252 2CXE7PHYAFTXA014 £52,165.00 £5,000.00 £53,294.17 £48,294.17"
  - claim: "List price before VAT"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "All Manufacturer’s Recommended Basic Prices are exclusive of VAT."
  - claim: "take off the £5,000 plug-in van grant"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "and including any discounts applied up to a maximum of £5,000."
  - claim: "comes in one trim, Enterprise"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "ë-Relay Panel Van L4H3 4.25T Electric 270hp Automatic Enterprise"
  - claim: "3,705mm"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "Load length at floor 3120 3705 4070"
  - claim: "4,070mm"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "Load length at floor 3120 3705 4070"
  - claim: "1,422mm"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "Load width between wheel arches 1422"
  - claim: "1,870mm"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "Load width (maximum) 1870"
  - claim: "1,932mm"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "Load height (maximum) 1662 1932 1932 2172"
  - claim: "2,172mm"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "Load height (maximum) 1662 1932 1932 2172"
  - claim: "13m³"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "L3 H2 13m3 L4 H3 17m3"
  - claim: "15m³"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "L2 H2 11.5m3 L4 H2 15m3"
  - claim: "17m³"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "L3 H2 13m3 L4 H3 17m3"
  - claim: "110kWh (97.8kWh usable)"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "Gross/Net Capacity 110kWh (97.8kWh)"
  - claim: "5 to 80% in 55 minutes on a 150kW rapid charger"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "Rapid Charging (150kW) DC - CCS Socket 55min [5 to 80%]"
  - claim: "55 minutes"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "Rapid Charging (150kW) DC - CCS Socket 55min [5 to 80%]"
  - claim: "22kW"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "22KW On Board Charger with Mode 3 charging cable – 6 metres"
  - claim: "Full charge on a 22kW three-phase wallbox"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "Three Phase Wallbox (22kW) AC - Type 2 Socket 6h 05min [100%]"
  - claim: "6h 05min"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "Three Phase Wallbox (22kW) AC - Type 2 Socket 6h 05min [100%]"
  - claim: "Full charge on a 7.4kW single-phase wallbox"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "Single Phase Wallbox (7.4kW) AC - Type 2 Socket 16h 40min [100%]"
  - claim: "16h 40min"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "Single Phase Wallbox (7.4kW) AC - Type 2 Socket 16h 40min [100%]"
  - claim: "8 years or 100,000 miles (to 70% capacity)"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "Battery Warranty 8 years / 100,000 miles / 70% capacity"
  - claim: "270hp (205kW)"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "Max power CEE (hp (kW)) 270hp (205kW)"
  - claim: "410Nm"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "Torque Nm 410 Nm"
  - claim: "not subject to WLTP testing"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "As all e-Relay are homologated as Heavy and are not subject to WLTP testing, the range and electric consumption figures mentioned are calculated using WLTP Test Procedure methodology"
  - claim: "maximum indicative figures worked out from the kerb weight with no driver"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "Includes Driver No Driver No Driver"
  - claim: "the driver's weight is included within the payload"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "When Kerb Weight used, driver weight is Roof loads should be evenly distributed. Max roof load on L2 is 100kg, L3 150kg Specific differences: N2 vehicles are legally required to be speed limited at included within the Maximum Indicative Payload weight."
  - claim: "leaves 655kg for the 3,500kg van"
    calc: "Citroën's weights table, L3H2 3.5T van: gross weight 3,500kg minus mass in running order including driver 2,845kg = 655kg"
  - claim: "don't allow for any options you order"
    archive: sources/citroen-e-relay-van-price-spec-guide-2026-10.pdf
    quote: "Payload does Category N1: Vehicles designed and constructed for the carriage of goods and these weights are exceeded. not consider any additional options that a customer may order."
---

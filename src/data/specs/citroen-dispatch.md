---
van: citroen-dispatch
title: "Citroën ë-Dispatch specs"
summary: "Load space, payload, range, towing and charging for each ë-Dispatch panel van and crew van, plus standard kit by trim and Citroën's paid options before VAT."
date: 2026-11-01T09:00:00Z
sourceLabel: "Citroën UK ë-Dispatch and Dispatch prices and specifications, 8 October 2026"
tables:
  - title: "Range, payload and weight"
    head: ["Version", "Gross weight", "Payload", "Official range (WLTP)", "Load volume"]
    rows:
      - ["M panel van", "3,230kg", "1,210kg", "194 to 230 miles", "5.3m³"]
      - ["XL panel van", "3,190kg", "1,138kg", "194 to 230 miles", "6.1m³"]
      - ["M crew van", "3,200kg", "1,075kg", "194 to 230 miles", "3.2m³"]
      - ["XL crew van", "3,160kg", "1,011kg", "194 to 230 miles", "4.0m³"]
  - title: "Panel van load space"
    head: ["", "M panel van", "XL panel van"]
    rows:
      - ["Load length at floor", "2,512mm", "2,862mm"]
      - ["Load length at floor with load-through bulkhead open", "3,674mm", "4,026mm"]
      - ["Width between wheel arches", "1,258mm", "1,258mm"]
      - ["Maximum load width", "1,628mm", "1,628mm"]
      - ["Load height", "1,397mm", "1,397mm"]
      - ["Load volume", "5.3m³", "6.1m³"]
      - ["Load volume with load-through bulkhead open", "5.8m³", "6.6m³"]
      - ["Loading height", "539 to 608mm", "595 to 628mm"]
      - ["Side door opening width", "935mm", "935mm"]
      - ["Rear door opening width", "1,282mm", "1,282mm"]
  - title: "Crew van load space"
    head: ["", "M crew van", "XL crew van"]
    rows:
      - ["Load length at floor", "2,017mm", "2,365mm"]
      - ["Load volume", "3.2m³", "4.0m³"]
  - title: "Charging and battery"
    head: ["", ""]
    rows:
      - ["Battery", "75kWh (69kWh usable)"]
      - ["Rapid charging (DC)", "100kW"]
      - ["Rapid charge, 5 to 80%", "45 minutes"]
      - ["Home and depot charging (AC)", "11kW"]
      - ["11kW three-phase wallbox, to 100%", "7 hours 30 minutes"]
      - ["7.4kW single-phase wallbox, to 100%", "11 hours 20 minutes"]
      - ["Battery warranty", "8 years or 100,000 miles (to 70% capacity)"]
  - title: "Towing and performance"
    head: ["", ""]
    rows:
      - ["Motor", "136hp (100kW), 270Nm"]
      - ["Towing (braked)", "1,000kg"]
      - ["Towing (unbraked)", "750kg"]
      - ["Gross train weight", "4,100kg"]
      - ["Top speed", "81mph"]
      - ["0 to 62mph", "13.6 seconds"]
notes:
  - "Citroën's WLTP table gives 194 to 230 miles for every electric version, depending on the options fitted, but its technical page and introduction quote up to 219 miles. We show the table figures."
  - "Citroën lists these as maximum indicative payloads, worked out from a kerb weight without a driver, so the driver's weight comes out of the payload. It says its mass in running order, which includes the driver, gives a more realistic figure: on that basis the M panel van carries 1,135kg and the XL 1,063kg."
  - "Driver and VTR panel vans have the EXTENSO folding passenger seat with a load-through bulkhead, which adds 1,162mm of load length and 0.5m³ of volume."
  - "Citroën rates the ë-Dispatch to tow 1,000kg braked, but the only towbar on its options list is marked diesel only."
  - "The crew van has a second row of three seats behind a plastic bulkhead with a window."
  - "VTR is a limited edition, so check availability with a dealer. Its price includes metallic paint."
versions:
  - name: "M panel van"
    figures:
      range: "194 to 230 miles"
      battery: "75kWh"
      payload: "1,210kg"
      volume: "5.3m³"
      loadLength: "2,512mm"
      loadHeight: "1,397mm"
      loadWidth: "1,258mm"
      gross: "3,230kg"
      towing: "1,000kg"
  - name: "XL panel van"
    figures:
      range: "194 to 230 miles"
      battery: "75kWh"
      payload: "1,138kg"
      volume: "6.1m³"
      loadLength: "2,862mm"
      loadHeight: "1,397mm"
      loadWidth: "1,258mm"
      gross: "3,190kg"
      towing: "1,000kg"
  - name: "M crew van"
    figures:
      range: "194 to 230 miles"
      battery: "75kWh"
      payload: "1,075kg"
      volume: "3.2m³"
      loadLength: "2,017mm"
      gross: "3,200kg"
      towing: "1,000kg"
      topSpeed: "81mph"
  - name: "XL crew van"
    figures:
      range: "194 to 230 miles"
      battery: "75kWh"
      payload: "1,011kg"
      volume: "4.0m³"
      loadLength: "2,365mm"
      gross: "3,160kg"
      towing: "1,000kg"
      topSpeed: "81mph"
shared:
  battery: "75kWh (69kWh usable)"
  rapid: "100kW"
  rapidTime: "45 minutes, 5 to 80%"
  ac: "11kW"
  warranty: "8 years or 100,000 miles (to 70% capacity)"
  train: "4,100kg"
archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
equipment:
  - trim: "Enterprise panel van"
    groups:
      - name: "Safety and driver assistance"
        items:
          - text: "Advanced emergency braking"
            quote: "Advanced Emergency Braking System"
          - text: "Lane keeping assist"
            quote: "Lane Keeping Assist"
          - text: "Intelligent speed assistance"
            quote: "Intelligent Speed Assistance"
          - text: "Driver attention alert"
            quote: "Driver Attention Alert-3 (GB only)"
          - text: "High beam assist"
            quote: "High Beam Assist"
          - text: "Cruise control with speed limiter"
            quote: "Cruise Control with speed limiter"
          - text: "Rear parking sensors"
            quote: "Rear parking sensors"
          - text: "Stability control and ABS with hill start assist"
            quote: "Electronic Stability Control and ABS with Hill Start Assist, EBA and EBFD"
          - text: "Driver and front passenger airbags, with passenger airbag switch"
            quote: "Driver and front passenger’s airbags with passengers’ airbag deactivate switch"
          - text: "Height-adjustable seat belts with pre-tensioners"
            quote: "Height-adjustable 3-point pre-tensioner seat belts with force limiter"
          - text: "Tyre pressure monitor"
            quote: "Tyre pressure monitor"
          - text: "Puncture repair kit"
            quote: "Puncture repair kit"
          - text: "Remote central locking with deadlocking"
            quote: "Remote central locking with deadlocking."
          - text: "Separate cab and load area locking, with two remote keys"
            quote: "Selective cabin and cargo area locking via 3-button plip remote control key (x2)"
          - text: "Automatic locking above 7mph"
            quote: "Dashboard mounted central locking push button and auto locking above 7 mph"
          - text: "Thatcham-approved immobiliser"
            quote: "Rolling code transponder immobiliser (Thatcham approved)"
          - text: "Automatic door unlocking after an accident"
            quote: "Automatic door unlocking in event of accident"
          - text: "Pedestrian warning sound at low speed"
            quote: "AVAS: Acoustic Vehicle Alerting System"
      - name: "Cab and comfort"
        items:
          - text: "Air conditioning"
            quote: "Air conditioning"
          - text: "10-inch digital instrument cluster"
            quote: "Full 10\" colour digital cluster"
          - text: "Trip computer"
            quote: "Multi-function on-board trip computer"
          - text: "Paddles for three levels of regenerative braking"
            quote: "Paddles for regenerative braking selection. Three levels – light; medium; strong"
          - text: "e-Toggle gear selector"
            quote: "AT shifting by e-Toggle (Automatic only)"
          - text: "Electric parking brake"
            quote: "Electric Parking Brake"
          - text: "Electric power steering"
            quote: "Electronic Power Steering (EPS)"
          - text: "Height and reach adjustable steering wheel"
            quote: "Height and reach adjustable steering wheel"
          - text: "Driver's seat adjustable for height, rake and reach, with lumbar adjustment and armrest"
            quote: "Driver’s seat height, rake and reach adjustable with lumbar adjustment and armrest (6-Way)"
          - text: "Two-seat passenger bench with storage tray underneath"
            quote: "Dual front passenger bench seat with under-seat storage tray"
          - text: "Front electric windows with one-touch operation"
            quote: "Front electric windows with ‘one-touch’ operation and anti-pinch"
          - text: "Laminated acoustic windscreen"
            quote: "Laminated acoustic windscreen"
          - text: "12V socket in cab"
            quote: "12 volt socket in cabin"
          - text: "USB socket in cab"
            quote: "USB socket in cabin"
          - text: "Closed upper and open lower glove boxes"
            quote: "Closed upper and open lower glove boxes"
          - text: "Front door pockets with 1.5-litre bottle holders"
            quote: "Front door pockets with 1.5 litre bottle holders"
          - text: "Hard plastic floor protection in cab"
            quote: "Hard plastic floor protection in cabin"
          - text: "Overhead console with ceiling lamps"
            quote: "Overhead console with ceiling lamps"
      - name: "Multimedia and connectivity"
        items:
          - text: "10-inch touchscreen with DAB radio"
            quote: "My Citroën Play Plus audio system - 10in HD colour touch screen, AM/FM/DAB digital radio,"
          - text: "Citroën Connect Box with emergency and assistance call"
            quote: "Citroën Connect Box with Emergency & Assistance system"
          - text: "Steering wheel audio controls"
            quote: "Audio Controls through steering wheel buttons"
      - name: "Charging and battery"
        items:
          - text: "11kW on-board charger with 6-metre charging cable"
            quote: "11KW On Board Charger with Mode 3 charging cable – 6 metres (for use with wallbox)"
          - text: "Remote pre-conditioning (needs a subscription)"
            quote: "Remote temperature pre-conditioning (requires ë-Remote Control service subscription)"
      - name: "Load area"
        items:
          - text: "Two sliding side doors"
            quote: "Twin sliding side doors (manually operated)"
          - text: "Unglazed rear doors opening to 180 degrees"
            quote: "Twin unglazed rear doors, opening to 180°"
          - text: "Full steel bulkhead"
            quote: "Full steel bulkhead"
          - text: "Load tie-down hooks (6 in the M, 8 in the XL)"
            quote: "Load tie-down hooks in cargo area (6 in M versions, 8 in XL versions)"
      - name: "Exterior"
        items:
          - text: "Halogen headlights with daytime running lights"
            quote: "Halogen Headlamp with integrated daytime running lights"
          - text: "Automatic headlights"
            quote: "Automatic on/off headlight control"
          - text: "Automatic wipers"
            quote: "Automatic two-speed and intermittent front wipers"
          - text: "Electrically adjustable heated door mirrors"
            quote: "Electrically adjustable heated door mirrors"
          - text: "Manually folding door mirrors"
            quote: "Manually folding door mirrors"
          - text: "Rear fog lights"
            quote: "Fog lights, rear"
          - text: "Front windows tinted to 30%"
            quote: "Front windows tinted to 30% opacity"
          - text: "16-inch steel wheels with black centre caps"
            quote: "16 inch steel wheels with black centre caps"
          - text: "Black bumpers, rubbing strips, door handles and mirrors"
            quote: "Black front and rear bumpers, side rubbing strips, exterior door handles and door mirrors"
  - trim: "Driver panel van (adds to Enterprise)"
    groups:
      - name: "Safety and driver assistance"
        items:
          - text: "Dynamic Surround View: digital rear-view mirror, reversing camera, blind spot monitoring, front parking sensors and side obstacle detection"
            quote: "Dynamic Surround View: Digital rear view mirror and lateral side view, Reversing Camera"
          - text: "Thatcham category 1 alarm"
            quote: "Perimetric and volumetric, Thatcham category 1 approved alarm"
          - text: "Front fog lights"
            quote: "Fog lights, front"
      - name: "Cab and comfort"
        items:
          - text: "EXTENSO folding passenger bench with writing table and load-through hatch in the bulkhead (replaces two-seat bench and full steel bulkhead)"
            quote: "EXTENSO® modular folding passenger bench seat with pivoting writing table, storage"
          - text: "Storage under the centre passenger seat"
            quote: "Storage under squab of central passenger seat"
      - name: "Multimedia and connectivity"
        items:
          - text: "10-inch touchscreen with Citroën Connect navigation, Apple CarPlay and Android Auto (replaces Play Plus system)"
            quote: "My Citroën Drive Plus featuring 10 inch HD Colour touch screen with Citroën Connect"
      - name: "Load area"
        items:
          - text: "12V socket in load area"
            quote: "12 volt socket in cargo area"
      - name: "Exterior"
        items:
          - text: "LED headlights with daytime running lights (replaces halogen)"
            quote: "Eco LED Headlamps with integrated daytime running lights"
          - text: "Electrically folding heated door mirrors (replaces manually folding)"
            quote: "Electrically folding heated door mirrors with temperature sensor (painted black as standard)"
          - text: "17-inch steel wheels with full wheel covers (replaces steel wheels with centre caps)"
            quote: "17 inch steel wheels with full wheel cover"
          - text: "Painted front bumper"
            quote: "Painted front bumper"
          - text: "Painted rear bumper (M) or rear bumper corners (XL)"
            quote: "Painted rear bumper corners (centre section of rear bumper not painted on XL versions.)"
          - text: "Painted door handles"
            quote: "Painted exterior handles"
          - text: "Painted side mouldings"
            quote: "Painted decor strips (side mouldings)"
          - text: "Painted sliding door rail cover"
            quote: "Painted Sliding Door Rail Cover"
  - trim: "VTR panel van (adds to Driver)"
    groups:
      - name: "Safety and driver assistance"
        items:
          - text: "Static Surround View, without the digital rear-view mirror (replaces Dynamic Surround View)"
            quote: "Static Surround View: Reversing Camera with Top Rear Vision, Blind Spot Monitoring, Front"
          - text: "Front side airbags"
            quote: "Front lateral airbags"
          - text: "Full-size spare wheel (replaces puncture repair kit)"
            quote: "Full sized spare wheel with black steel rim (speed restricted)"
      - name: "Cab and comfort"
        items:
          - text: "Dual-zone climate control (replaces air conditioning)"
            quote: "Dual-zone electronic climate control"
          - text: "Eco-leather seats, with a sports driver's seat"
            quote: "Hand-crafted and fitted eco-leather seats with embossed logo, bold stitching, and"
          - text: "Heated driver's seat"
            quote: "Heated driver’s seat"
          - text: "Heated steering wheel"
            quote: "Heated steering wheel"
          - text: "Keyless entry and start"
            quote: "Keyless entry and start"
          - text: "VTR floor mats"
            quote: "Branded Floor Mats in 1st Row"
      - name: "Multimedia and connectivity"
        items:
          - text: "Wireless phone charging"
            quote: "Wireless charging"
      - name: "Exterior"
        items:
          - text: "18-inch diamond-cut alloy wheels (replaces steel wheels)"
            quote: "Exclusive Diamond-Cut Dynamic 18” alloy wheels"
          - text: "Body kit with front lip spoiler, side skirts, rear spoiler and unique rear bumper (Citroën does not list the Driver's painted sliding door rail cover or XL rear bumper corners on VTR)"
            quote: "Unique body kit featuring Front Lip Spoiler, Side skirts with integrated front mud guards,"
          - text: "VTR badging and livery"
            quote: "Unique VTR Badging and Livery"
  - trim: "Crew van (differs from the panel van of the same trim)"
    groups:
      - name: "Safety and driver assistance"
        items:
          - text: "Front side and curtain airbags on every trim"
            quote: "Driver and front passengers’ curtain and side-impact"
      - name: "Cab and comfort"
        items:
          - text: "Two-seat front passenger bench with storage tray on every trim, so Driver and VTR crew vans do not get the EXTENSO seat"
            quote: "Dual front passenger bench seat with under-seat storage tray"
          - text: "Three individual second-row seats with two armrests and storage underneath"
            quote: "Three individually contoured seats in row 2 with two armrests and under-seat storage"
          - text: "Fixed tinted second-row side windows (darker tint on VTR)"
            quote: "Fixed Side Windows in row 2 tinted to 70% opacity"
      - name: "Load area"
        items:
          - text: "Plastic bulkhead with fixed window behind the second row, insulated for sound and temperature (replaces full steel bulkhead)"
            quote: "Full toughened plastic bulkhead with polycarbonate window fixed behind row 2 seats,"
          - text: "Load tie-down hooks (4 in the M, 6 in the XL)"
            quote: "Load tie-down hooks in cargo area (4 in M versions, 6 in XL versions)"
options:
  - category: "Packs"
    items:
      - name: "Winter Pack: heated driver's seat, front side and curtain airbags, heated leather steering wheel"
        price: "£500"
        note: "Enterprise and Driver panel vans (£300 on crew vans, which already have the airbags); standard on VTR"
        quote: "driver and passenger thorax in the seats + curtain for the head [NF26], Heated Leather NA03 £500 £500 ● £300 £300"
  - category: "Paint"
    items:
      - name: "Titanium Grey metallic paint"
        price: "£650"
        note: "Enterprise and Driver"
        quote: "Titanium Grey (M) (P0PR) (M01J) Standard Option £650"
      - name: "Cumulus Grey metallic paint"
        price: "£650"
        note: "Enterprise and Driver"
        quote: "Cumulus Grey (M) Perla Nera Black (M) Interior ambience (M0F4) (M09V) Option £650 Option £650"
      - name: "Perla Nera Black metallic paint"
        price: "£650"
        note: "Enterprise and Driver; included in the VTR's price"
        quote: "Cumulus Grey (M) Perla Nera Black (M) Interior ambience (M0F4) (M09V) Option £650 Option £650"
      - name: "Passion Red special paint"
        price: "£750"
        note: "Enterprise only"
        quote: "Passion Red (S) (M) Metallic (F) Flat (E09X) Option availability varies according to version/engine/trim level. Enterprise Only £750"
  - category: "Wheels and tyres"
    items:
      - name: "17-inch steel wheels with black centre caps and CrossClimate all-season tyres"
        price: "£400"
        note: "Enterprise"
        quote: "17 inch steel wheels with black centre caps and 3PMSF CrossClimate tyres ZHZQ £400"
      - name: "17-inch Phoenix alloy wheels"
        price: "£650"
        note: "Enterprise and Driver"
        quote: "17 inch \"\"Phoenix\"\" alloy wheels in Anthra with Westlake Loadforce 326+ tyres ZHZJ £650"
      - name: "Full-size spare wheel"
        price: "£160"
        note: "Enterprise and Driver; standard on VTR"
        quote: "Full sized spare wheel with black steel rim RS03 £160"
  - category: "Seats and cab"
    items:
      - name: "EXTENSO folding passenger bench with writing table"
        price: "£350"
        note: "Enterprise panel van; standard on Driver and VTR"
        quote: "in central seat back and storage under central seat. Height adjustable driver’s seat with WAAT £350"
      - name: "Polycarbonate glazed bulkhead, with more seat travel and tilt for the driver"
        price: "£200"
        note: "Enterprise panel van. Citroën says it reduces load length at a height of a metre"
        quote: "Provides an additional 40mm of seat travel and 8.5° of tilt on the driver's seat. Reduces PX37 £200"
  - category: "Multimedia"
    items:
      - name: "My Citroën Drive Plus touchscreen with navigation"
        price: "£650"
        note: "Enterprise; standard on Driver and VTR"
        quote: "Navigation & DAB radio, Mirror Screen® (Apple CarPlay™ and Android Auto™), ZJA9 £650"
  - category: "Safety and driver assistance"
    items:
      - name: "Reversing camera"
        price: "£350"
        note: "Enterprise; standard on Driver and VTR"
        quote: "Reversing Camera: Visiopark Rear Park assist (by camera 180°) with touchscreen XL XL WYAX £350"
      - name: "Static Surround View: reversing camera, front and rear parking sensors, side obstacle detection and blind spot detection"
        price: "£550"
        note: "Enterprise; standard on VTR"
        quote: "display, Front/Rear parking sensors, Flankguard (lateral park assist) and Blindspot WYAY £550"
      - name: "Dynamic Surround View with digital rear-view mirror"
        price: "£750"
        note: "Enterprise; standard on Driver"
        quote: "Dynamic Surround View: GENTEX with Digital Rear View mirror and Passenger Blind Spot in a dedicated screen, Visiopark Rear Park assist (by camera 180°) with WYAZ £750"
      - name: "Adaptive cruise control with stop and go, and driver drowsiness camera"
        price: "£600"
        note: "Enterprise"
        quote: "If MT: decelerates to 18mph £600"
      - name: "Driver drowsiness camera"
        price: "£150"
        note: "Enterprise and Driver"
        quote: "GSR2.2 including Driver Drowsiness Camera (standard on NI versions but optional on GB ZVOE £150"
      - name: "Thatcham category 1 alarm"
        price: "£225"
        note: "Enterprise; standard on Driver and VTR"
        quote: "Perimetric and volumetric, Thatcham category 1 approved alarm AB08 £225"
  - category: "Windows and doors"
    items:
      - name: "Fixed windows in the sliding side doors"
        price: "£120"
        note: "Enterprise and Driver panel vans"
        quote: "Fixed side windows in sliding side doors, with noise-reducing tinted glass VG07 £120 £120"
      - name: "Glazed rear doors with glazed bulkhead, heated windows and wash-wipe"
        price: "£300"
        note: "Enterprise; not with Dynamic Surround View"
        quote: "Twin glazed rear doors (opening to 180°) with Glazed Bulkhead, heated rear windows WO05 £300"
      - name: "Tailgate with glazed bulkhead, heated window and wash-wipe"
        price: "£300"
        note: "Enterprise; not with Dynamic Surround View"
        quote: "Tailgate with Glazed Bulkhead, heated window and wash-wipe WO06 £300"
  - category: "Load area"
    items:
      - name: "Anti-slip 9mm wood floor with aluminium rods"
        price: "£400"
        note: "Enterprise and Driver"
        quote: "Coated anti-slip 9mm wood floor with aluminium rods GB33 £400"
  - category: "Other"
    items:
      - name: "e-PTO high-power connector from the 400V battery"
        price: "£350"
        note: "Enterprise panel van"
        quote: "e-PTO (Electrical Power Take Off) on 400V battery: High power connector on junction Safety and security 4204 £350"
factCheck:
  by: "independent fact-checker"
  date: 2026-11-01
facts:
  - claim: "8 October 2026"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Effective from 8 October 2026 - MY27 (M0)"
  - claim: "3,230kg"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Panel Van M Electric 136hp Automatic 3230 2095 2020 1210 1530 1800 4100 1000 750 60 3"
  - claim: "1,210kg"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Panel Van M Electric 136hp Automatic 3230 2095 2020 1210 1530 1800 4100 1000 750 60 3"
  - claim: "3,190kg"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Panel Van XL Electric 136hp Automatic 3190 2127 2052 1138"
  - claim: "1,138kg"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Panel Van XL Electric 136hp Automatic 3190 2127 2052 1138"
  - claim: "3,200kg"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Crew Van M Electric 136hp Automatic 3200 2200 2125 1075"
  - claim: "1,075kg"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Crew Van M Electric 136hp Automatic 3200 2200 2125 1075"
  - claim: "3,160kg"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Crew Van XL Electric 136hp Automatic 3160 2224 2149 1011"
  - claim: "1,011kg"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Crew Van XL Electric 136hp Automatic 3160 2224 2149 1011"
  - claim: "194 to 230 miles"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Panel Van M Electric 136hp Automatic 370 313 230 194"
  - claim: "up to 219 miles"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "The fully electric Citroën ë-Dispatch has a range of up to 219 miles"
  - claim: "5.3m³"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Load volume m3 (without load-through bulkhead) 5.3 6.1"
  - claim: "6.1m³"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Load volume m3 (without load-through bulkhead) 5.3 6.1"
  - claim: "5.8m³"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Load volume m3 (with load-through bulkhead open) 5.8 6.6"
  - claim: "6.6m³"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Load volume m3 (with load-through bulkhead open) 5.8 6.6"
  - claim: "3.2m³"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Load volume m3 3.2 4.0"
  - claim: "4.0m³"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Load volume m3 3.2 4.0"
  - claim: "2,512mm"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Load length at floor (without load-through bulkhead) 2512 2862"
  - claim: "2,862mm"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Load length at floor (without load-through bulkhead) 2512 2862"
  - claim: "3,674mm"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Load length at floor (with load-through bulkhead open) 3674 4026"
  - claim: "4,026mm"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Load length at floor (with load-through bulkhead open) 3674 4026"
  - claim: "1,258mm"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Load width between wheel arches 1258"
  - claim: "1,628mm"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Maximum load width (SLD both sides) 1628"
  - claim: "1,397mm"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Maximum load height 1397"
  - claim: "539 to 608mm"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Loading height (Minimum to maximum) 539 to 608 595 to 628"
  - claim: "595 to 628mm"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Loading height (Minimum to maximum) 539 to 608 595 to 628"
  - claim: "935mm"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Side door aperture width 935"
  - claim: "1,282mm"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Rear door aperture width 1282"
  - claim: "2,017mm"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Load length at floor 2017 2365"
  - claim: "2,365mm"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Load length at floor 2017 2365"
  - claim: "75kWh (69kWh usable)"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Gross/Net Capacity 75/69kWh"
  - claim: "75kWh"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Gross/Net Capacity 75/69kWh"
  - claim: "100kW"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Rapid (DC) Charging (100 kW) - CCS Socket 45m (5 to 80%)"
  - claim: "Rapid charge, 5 to 80%"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Rapid (DC) Charging (100 kW) - CCS Socket 45m (5 to 80%)"
  - claim: "45 minutes, 5 to 80%"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Rapid (DC) Charging (100 kW) - CCS Socket 45m (5 to 80%)"
  - claim: "11kW three-phase wallbox, to 100%"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Three Phase Wallbox (11kW) - Type 2 Socket 7h 30m (100%)"
  - claim: "7 hours 30 minutes"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Three Phase Wallbox (11kW) - Type 2 Socket 7h 30m (100%)"
  - claim: "7.4kW single-phase wallbox, to 100%"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Single Phase Wallbox (7.4kW) - Type 2 Socket 11h 20m (100%)"
  - claim: "11 hours 20 minutes"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Single Phase Wallbox (7.4kW) - Type 2 Socket 11h 20m (100%)"
  - claim: "8 years or 100,000 miles (to 70% capacity)"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Battery Warranty 8 years/100,000 miles/70% capacity"
  - claim: "136hp (100kW)"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Max power CEE (hp (kw) / rpm) 136 (100) / 3540"
  - claim: "270Nm"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Torque Nm 270 Nm @ 3530 rpm"
  - claim: "1,000kg"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Panel Van M Electric 136hp Automatic 3230 2095 2020 1210 1530 1800 4100 1000 750 60 3"
  - claim: "750kg"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Panel Van M Electric 136hp Automatic 3230 2095 2020 1210 1530 1800 4100 1000 750 60 3"
  - claim: "4,100kg"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Panel Van M Electric 136hp Automatic 3230 2095 2020 1210 1530 1800 4100 1000 750 60 3"
  - claim: "81mph"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Max speed (mph) 81 (130kph)"
  - claim: "0 to 62mph"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Acceleration (0-62 mph) 13.6sec"
  - claim: "13.6 seconds"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Acceleration (0-62 mph) 13.6sec"
  - claim: "Citroën lists these as maximum indicative payloads, worked out from a kerb weight without a driver"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Maximum indicative payload is calculated as the difference between GVW and kerb weight"
  - claim: "kerb weight without a driver"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "(1) Without driver"
  - claim: "the M panel van carries 1,135kg"
    calc: "Citroën's weights table, M panel van: gross weight 3,230kg minus mass in running order including driver 2,095kg = 1,135kg"
  - claim: "the XL 1,063kg"
    calc: "Citroën's weights table, XL panel van: gross weight 3,190kg minus mass in running order including driver 2,127kg = 1,063kg"
  - claim: "1,162mm"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "an additional load length of 1162mm and increases the load volume"
  - claim: "0.5m³"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "by 0.5m3"
  - claim: "the only towbar on its options list is marked diesel only"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Removable Towbar with ball and hook, 13 pin connector and Trailer Sway Mitigation"
  - claim: "VTR is a limited edition"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "VTR is produced as a Limited Edition"
  - claim: "Its price includes metallic paint"
    archive: sources/citroen-e-dispatch-van-price-spec-guide-2026-10.pdf
    quote: "Metallic is not a cost option but included already in list price"
---

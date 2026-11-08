---
van: ford-transit-city
title: "Ford Transit City specs"
summary: "Load space, payload, range, charging and standard kit for the electric Transit City panel van, from Ford UK's own price list."
date: 2026-11-01T09:00:00Z
sourceLabel: "Ford UK Transit City price list, 29 April 2026"
tables:
  - title: "Range, payload and weight"
    head: ["Version", "Battery", "Official range (WLTP)", "City range (WLTP)", "Payload", "Gross weight"]
    rows:
      - ["SWB low-roof van", "56kWh", "157.8 miles", "236.7 miles", "1,085kg", "3,000kg"]
      - ["LWB high-roof van", "56kWh", "139.2 miles", "211.2 miles", "1,275kg", "3,270kg"]
  - title: "Load space"
    head: ["", "SWB low-roof van", "LWB high-roof van"]
    rows:
      - ["Load length at floor", "2,770mm", "3,070mm"]
      - ["Load height (floor to roof)", "1,456mm", "1,746mm"]
      - ["Maximum load width", "1,740mm", "1,740mm"]
      - ["Width between wheel arches", "1,300mm", "1,300mm"]
      - ["Side door opening width", "1,164mm", "1,164mm"]
      - ["Side door opening height", "1,397mm", "1,397mm"]
      - ["Rear door opening width", "1,593mm", "1,593mm"]
      - ["Rear door opening height", "1,330mm", "1,620mm"]
      - ["Load sill height", "550mm", "552mm"]
      - ["Load volume", "6.43m³", "8.5m³"]
  - title: "Charging and battery"
    head: ["", "Both vans"]
    rows:
      - ["Usable battery", "56kWh"]
      - ["Rapid charging (DC)", "Up to 87kW"]
      - ["Rapid charge, 10 to 80%", "33 minutes"]
      - ["On-board charger (AC)", "11kW"]
      - ["AC charge, 10 to 100%, 7.4kW single-phase", "8 hours"]
      - ["AC charge, 10 to 100%, 11kW three-phase", "5.5 hours"]
      - ["Battery warranty", "8 years or 100,000 miles"]
  - title: "Motor, efficiency and weights"
    head: ["", "SWB low-roof van", "LWB high-roof van"]
    rows:
      - ["Motor", "110kW (150PS), 260Nm", "110kW (150PS), 260Nm"]
      - ["Gearbox and drive", "1-speed automatic, front-wheel drive", "1-speed automatic, front-wheel drive"]
      - ["Energy use (WLTP combined)", "38.3kWh per 100 miles", "43.45kWh per 100 miles"]
      - ["Kerb weight", "1,915kg", "1,995kg"]
      - ["Maximum front axle load", "1,330kg", "1,440kg"]
      - ["Maximum rear axle load", "1,780kg", "1,920kg"]
      - ["Overall length", "4,985mm", "5,285mm"]
      - ["Overall height", "1,991mm", "2,285mm"]
      - ["Wheelbase", "3,060mm", "3,360mm"]
      - ["Width with mirrors", "2,258mm", "2,258mm"]
      - ["Width without mirrors", "1,885mm", "1,885mm"]
notes:
  - "The Transit City comes in one trim, Trend. Ford also lists a chassis cab for conversions, which isn't covered here."
  - "The ranges are official WLTP figures. Ford says the tests are run at 23°C with no heating or other electrical load, and that actual range varies with temperature, driving style, route and battery age."
  - "Ford's payloads are gross figures that don't include the driver, so allow for the driver's weight on top."
  - "Ford's powertrain table gives a usable battery of 56kWh, while its equipment list names the traction battery as 55.59kWh."
  - "Ford's price list doesn't give a top speed or towing limits. The battery warranty is from Ford's UK electric vehicle benefits page, not the price list."
versions:
  - name: "SWB low-roof van"
    figures:
      range: "158 miles"
      battery: "56kWh"
      payload: "1,085kg"
      volume: "6.43m³"
      loadLength: "2,770mm"
      loadHeight: "1,456mm"
      loadWidth: "1,300mm"
      gross: "3,000kg"
      rapidTime: "33 minutes"
  - name: "LWB high-roof van"
    figures:
      range: "139 miles"
      battery: "56kWh"
      payload: "1,275kg"
      volume: "8.5m³"
      loadLength: "3,070mm"
      loadHeight: "1,746mm"
      loadWidth: "1,300mm"
      gross: "3,270kg"
      rapidTime: "33 minutes"
shared:
  battery: "56kWh"
  rapid: "87kW"
  rapidTime: "33 minutes (10 to 80%)"
  ac: "11kW"
  warranty: "8 years or 100,000 miles"
archive: sources/ford-transit-city-price-list-2026-04.pdf
equipment:
  - trim: "Trend"
    groups:
      - name: "Safety and driver assistance"
        items:
          - text: "Automatic emergency braking"
            quote: "Automatic Emergency Brake FCBAF"
          - text: "Electro-hydraulic brake assist"
            quote: "Electro-Hydraulic Braking Assist FCAAD"
          - text: "Adaptive cruise control"
            quote: "Adaptive Speed Control & Cruise Control GTDBC"
          - text: "Speed sign recognition"
            quote: "Speed Sign Recognition HLQAB"
          - text: "Driver impairment monitor camera"
            quote: "Driver Impairment Monitor - Camera HLFAC"
          - text: "Front parking sensors"
            quote: "Front Parking Aid - 4 ultrasonic sensors CL7AB"
          - text: "Rear parking sensors"
            quote: "Rear Parking Aid - 4 ultrasonic sensors CLUAB"
          - text: "Rear view camera"
            quote: "Fixed Rear View Camera J3KAB"
          - text: "Selectable drive modes: Normal, Eco and Slippery"
            quote: "Selectable Drive Modes - Normal, Eco & Slippery DMSAB"
          - text: "Electric parking brake"
            quote: "Electric Parking Brake FAJAC"
          - text: "Driver airbag"
            quote: "Driver Airbag CPGAB"
          - text: "Passenger airbag, with deactivation"
            quote: "Passenger Airbag Deactivation CPQAB"
          - text: "Seat belt warning buzzer for driver and passenger"
            quote: "Seat Belt Warning Buzzer (Driver & Passenger) BY5AG"
          - text: "Emergency call button"
            quote: "Emergency Call Button HKKAB"
          - text: "Alcohol interlock interface"
            quote: "Alcohol Interlock Interface A5HAD"
          - text: "Central locking"
            quote: "Central Power Lock Group CBBAD"
          - text: "Automatic delayed door locking"
            quote: "Automatic Delayed Door Locking CBUAB"
          - text: "Thatcham double locking"
            quote: "Double Locking (Thatcham) HNABD"
          - text: "Perimeter alarm"
            quote: "Perimeter Alarm TBC"
          - text: "Warning triangle"
            quote: "Breakdown Warning Sign with Warning Triangle AHHAB"
          - text: "Safety vest"
            quote: "Safety Vest ADMAD"
      - name: "Cab and comfort"
        items:
          - text: "Manual air conditioning"
            quote: "Manual Air Conditioner AC--B"
          - text: "PTC heater"
            quote: "PTC Heater G2AAF"
          - text: "Heated driver's seat"
            quote: "Driver Heated Seat BY1AB"
          - text: "Manual 6-way driver's seat"
            quote: "Manual 6-way Driver Seat Adjuster BYPAE"
          - text: "Double passenger seat"
            quote: "Dual Passenger Seat FS--G"
          - text: "Domino cloth upholstery"
            quote: "C - Cloth Trim #3 - Domino 3JTTV S"
          - text: "2-way front head restraints"
            quote: "2-way Front Head restraints BVRAC"
          - text: "Smart key fob"
            quote: "Smart Key Fob CBPAK"
          - text: "Electric front windows with one-touch down"
            quote: "Power Front Windows One Touch Down B2CAE"
          - text: "7-inch instrument cluster"
            quote: "7\" Cluster HCAAX"
          - text: "Fixed steering column"
            quote: "Fixed Steering Column GRAAB"
          - text: "Polyurethane steering wheel"
            quote: "Base Steering Wheel - PU GTAAB"
          - text: "Driver's sun visor, without mirror or light"
            quote: "Driver side sun visor - without mirror & lights BCAAB"
          - text: "Passenger sun visor, without mirror or light"
            quote: "Passenger side sun visor - without mirror & lights BCBAB"
          - text: "Black inside door handles"
            quote: "Black Inside Door Handles BCFAC"
      - name: "Multimedia and connectivity"
        items:
          - text: "12.3-inch multi-function display"
            quote: "12.3\" Multi Function Display HJGBB"
          - text: "Infotainment with Apple CarPlay and Android Auto"
            quote: "In-Vehicle Infotainment (Incl. Apple CarPlay & Android Au IEVAU"
          - text: "2 speakers"
            quote: "2 Radio Speaker IDBAB"
          - text: "2 USB sockets"
            quote: "USB Interface - 2 Units A2EAC"
      - name: "Charging and battery"
        items:
          - text: "55.59kWh traction battery"
            quote: "Traction Battery #3 (55.59 KWH) HTHAF"
          - text: "Battery heater"
            quote: "Battery Heater HTEAB"
          - text: "CCS2 charging port"
            quote: "EV Charge Port - CCS2 JZCAN"
      - name: "Load area"
        items:
          - text: "Kerbside side load door"
            quote: "Kerbside Side Load Door A4LAB"
          - text: "Hinged rear doors, opening to 180°"
            quote: "Hinged Rear Cargo Door (180°) A6KAN"
          - text: "Half-height load area lining"
            quote: "Interior Cargo Trim - Half Height BAUAB"
          - text: "PVC load floor cover"
            quote: "Load Space Floor Cover - PVC BBFAC"
          - text: "Load area light"
            quote: "Load Compartment Light JCMAB"
      - name: "Exterior"
        items:
          - text: "Halogen headlamps"
            quote: "Halogen Headlamps JBBAB"
          - text: "Automatic headlamps"
            quote: "Automatic Headlamp On/Off JEDAD"
          - text: "Follow-me-home headlamps"
            quote: "Auto Headlamps - Follow Me Home JB1AB"
          - text: "LED daytime running lamps"
            quote: "LED Daytime Running Lamps JBCAB"
          - text: "Halogen tail lamps"
            quote: "Halogen Taillamps JDAAT"
          - text: "High-level brake light"
            quote: "High Mounted Stop Lamp JDDAB"
          - text: "Variable intermittent wipers"
            quote: "Intermittent Variable Windshield Wiper CFFAB"
          - text: "Electrically adjustable door mirrors with manual folding, not heated"
            quote: "Manual Fold, Electrically Adjustable, Non-Heated Mirrors BSHA6"
          - text: "Partly body-coloured front bumper"
            quote: "Partial Body Colour Front Bumper CLFBW"
          - text: "Black plastic rear bumper"
            quote: "Black Plastic Rear Bumper CLMAJ"
          - text: "Black door handles"
            quote: "Black Exterior Door Handle CAAAB"
          - text: "16-inch steel wheels with covers"
            quote: "Steel Wheels 16\" with Wheel Cover D2BDC"
          - text: "215/65 R16C tyres"
            quote: "215/65 R16C Black Side Wall Tyre D3JRC"
          - text: "Tyre repair kit"
            quote: "Tire Repair Kit AHTAB"
options:
  - category: "Paint"
    items:
      - name: "Frozen White (solid)"
        price: "No extra cost"
        note: "Both vans"
        quote: "Frozen White PN3GZ O 0 0"
      - name: "Ingot Silver (metallic)"
        price: "£650"
        note: "Both vans"
        quote: "Ingot Silver Metallic PN4AG O 650 780"
      - name: "Blue Panther (metallic)"
        price: "£650"
        note: "Both vans"
        quote: "Blue Panther Metallic PN4HE O 650 780"
      - name: "Panther Black (metallic)"
        price: "£650"
        note: "Both vans"
        quote: "Panther Black Metallic PNJAB O 650 780"
      - name: "Broom Yellow (special-order colour)"
        price: "£1,000"
        note: "Both vans"
        quote: "Broom Yellow SVO PSTBL O 1,000 1,200"
facts:
  - claim: "29 April 2026"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "This price list is effective from 29th April 2026"
  - claim: "56kWh"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "E-Motor 11kW 87kW 56kWh 110kW / 150PS 260Nm"
  - claim: "87kW"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "E-Motor 11kW 87kW 56kWh 110kW / 150PS 260Nm"
  - claim: "11kW"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "E-Motor 11kW 87kW 56kWh 110kW / 150PS 260Nm"
  - claim: "110kW (150PS), 260Nm"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "E-Motor 11kW 87kW 56kWh 110kW / 150PS 260Nm"
  - claim: "1-speed automatic, front-wheel drive"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "Van Trend 300S SWB H1 56kWh 110kW / 150PS 1-speed automatic FWD"
  # Range, consumption and charging
  - claim: "157.8 miles"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "SWB Low Roof 157.8 38.3 236.7 24.95 33 mins 87 8 hours 5.5 hours"
  - claim: "236.7 miles"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "SWB Low Roof 157.8 38.3 236.7 24.95 33 mins 87 8 hours 5.5 hours"
  - claim: "38.3kWh"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "SWB Low Roof 157.8 38.3 236.7 24.95 33 mins 87 8 hours 5.5 hours"
  - claim: "139.2 miles"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "LWB High Roof 139.2 43.45 211.2 28 33 mins 87 8 hours 5.5 hours"
  - claim: "211.2 miles"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "LWB High Roof 139.2 43.45 211.2 28 33 mins 87 8 hours 5.5 hours"
  - claim: "43.45kWh"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "LWB High Roof 139.2 43.45 211.2 28 33 mins 87 8 hours 5.5 hours"
  - claim: "kWh per 100 miles"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "(kWh/100m)"
  - claim: "158 miles"
    calc: "Ford UK price list, WLTP Combined Range (m), SWB Low Roof: 157.8 (fact above), rounded to the nearest mile = 158 miles"
  - claim: "139 miles"
    calc: "Ford UK price list, WLTP Combined Range (m), LWB High Roof: 139.2 (fact above), rounded to the nearest mile = 139 miles"
  - claim: "33 minutes"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "SWB Low Roof 157.8 38.3 236.7 24.95 33 mins 87 8 hours 5.5 hours"
  - claim: "Rapid charge, 10 to 80%"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "10-80%"
  - claim: "33 minutes (10 to 80%)"
    calc: "Ford UK price list: DC Fast Charging Time 10-80% column reads 33 mins for both vans (facts above), so 33 minutes (10 to 80%)"
  - claim: "8 hours"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "SWB Low Roof 157.8 38.3 236.7 24.95 33 mins 87 8 hours 5.5 hours"
  - claim: "5.5 hours"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "SWB Low Roof 157.8 38.3 236.7 24.95 33 mins 87 8 hours 5.5 hours"
  - claim: "AC charge, 10 to 100%, 7.4kW single-phase"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "10-100% - 7.4kW"
  - claim: "AC charge, 10 to 100%, 11kW three-phase"
    calc: "Ford UK price list column headed 'AC Charging Time 10-100% - 11kW 3-phase' (header fragments '10-100% - 7.4kW' and '11kW 3-phase' in facts around this one): 10 to 100%, 11kW three-phase"
  - claim: "11kW three-phase"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "11kW 3-phase"
  - claim: "8 years or 100,000 miles"
    calc: "Ford UK EV benefits page: 'all Ford EVs come with an eight-year, 100,000 mile EV battery warranty' (fact below). Eight years written as a figure: 8 years or 100,000 miles"
  - claim: "100,000 miles"
    source: https://www.ford.co.uk/hybrid-electric/benefits
    quote: "all Ford EVs come with an eight-year, 100,000 mile EV battery warranty"
  - claim: "23°C"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "conducted in controlled conditions with an ambient temperature of 23 degrees Celsius and no climate or electrical load"
  - claim: "55.59kWh"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "Traction Battery #3 (55.59 KWH) HTHAF"
  # Weights
  - claim: "1,085kg"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "300S 56kWh 110kW / 150PS 1-speed automatic FWD 1,915 3,000 1,085 1,990 1,330 1,780"
  - claim: "3,000kg"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "300S 56kWh 110kW / 150PS 1-speed automatic FWD 1,915 3,000 1,085 1,990 1,330 1,780"
  - claim: "1,915kg"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "300S 56kWh 110kW / 150PS 1-speed automatic FWD 1,915 3,000 1,085 1,990 1,330 1,780"
  - claim: "1,330kg"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "300S 56kWh 110kW / 150PS 1-speed automatic FWD 1,915 3,000 1,085 1,990 1,330 1,780"
  - claim: "1,780kg"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "300S 56kWh 110kW / 150PS 1-speed automatic FWD 1,915 3,000 1,085 1,990 1,330 1,780"
  - claim: "1,275kg"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "Van LWB High Roof 330M 56kWh 110kW / 150PS 1-speed automatic FWD 1,995 3,270 1,275 2,070 1,440 1,920"
  - claim: "3,270kg"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "Van LWB High Roof 330M 56kWh 110kW / 150PS 1-speed automatic FWD 1,995 3,270 1,275 2,070 1,440 1,920"
  - claim: "1,995kg"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "Van LWB High Roof 330M 56kWh 110kW / 150PS 1-speed automatic FWD 1,995 3,270 1,275 2,070 1,440 1,920"
  - claim: "1,440kg"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "Van LWB High Roof 330M 56kWh 110kW / 150PS 1-speed automatic FWD 1,995 3,270 1,275 2,070 1,440 1,920"
  - claim: "1,920kg"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "Van LWB High Roof 330M 56kWh 110kW / 150PS 1-speed automatic FWD 1,995 3,270 1,275 2,070 1,440 1,920"
  - claim: "Ford's payloads are gross figures that don't include the driver"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "The payload stated above is the gross payload not including the driver"
  # Load space and dimensions
  - claim: "2,770mm"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "Maximum loadspace length (at floor with bulkhead) 2,770 3,070"
  - claim: "3,070mm"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "Maximum loadspace length (at floor with bulkhead) 2,770 3,070"
  - claim: "1,456mm"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "Load floor to roof 1,456 1,746"
  - claim: "1,746mm"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "Load floor to roof 1,456 1,746"
  - claim: "1,740mm"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "Maximum loadspace width 1,740 1,740"
  - claim: "1,300mm"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "Loadspace between wheel arches 1,300 1,300"
  - claim: "1,164mm"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "Side door entry width 1,164 1,164"
  - claim: "1,397mm"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "Side load door entry height 1,397 1,397"
  - claim: "1,593mm"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "Rear door entry width 1,593 1,593"
  - claim: "1,330mm"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "Rear door entry height 1,330 1,620"
  - claim: "1,620mm"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "Rear door entry height 1,330 1,620"
  - claim: "550mm"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "Loading height (SRW) 550 552"
  - claim: "552mm"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "Loading height (SRW) 550 552"
  - claim: "6.43m³"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "Maximum load volume (with bulkhead) 6.43 8.5"
  - claim: "8.5m³"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "Maximum load volume (with bulkhead) 6.43 8.5"
  - claim: "4,985mm"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "Overall length 4,985 5,285"
  - claim: "5,285mm"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "Overall length 4,985 5,285"
  - claim: "1,991mm"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "Overall height 1,991 2,285"
  - claim: "2,285mm"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "Overall height 1,991 2,285"
  - claim: "3,060mm"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "Wheelbase 3,060 3,360"
  - claim: "3,360mm"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "Wheelbase 3,060 3,360"
  - claim: "2,258mm"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "Overall width with mirrors 2,258 2,258"
  - claim: "1,885mm"
    archive: sources/ford-transit-city-price-list-2026-04.pdf
    quote: "Overall width without mirrors 1,885 1,885"
---

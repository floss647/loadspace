---
van: toyota-proace
title: "Toyota Proace Electric specs"
summary: "Load space, payload, range, towing and charging for each Proace Electric panel van, plus Toyota's paid options and their prices before VAT."
date: 2026-11-01T09:00:00Z
sourceLabel: "Toyota UK Proace Electric price list, April 2026, and Toyota UK Proace brochure"
tables:
  - title: "Range, payload and weight"
    head: ["Version", "Battery", "Range", "Payload", "Gross weight"]
    rows:
      - ["Medium van", "50kWh", "133 miles", "1,400kg", "3,100kg"]
      - ["Medium van", "75kWh", "Up to 215 miles", "1,000kg", "3,021kg"]
      - ["Long van", "75kWh", "Up to 215 miles", "1,360kg", "3,053kg"]
  - title: "Load space"
    head: ["", "Medium van", "Long van"]
    rows:
      - ["Load length at floor level", "2,512mm", "2,862mm"]
      - ["Load length with Smart Cargo", "3,674mm", "4,026mm"]
      - ["Deck width", "1,636mm", "1,636mm"]
      - ["Interior width", "1,515mm", "1,515mm"]
      - ["Load height", "1,397mm", "1,397mm"]
      - ["Load volume", "5.3m³", "6.1m³"]
      - ["Load volume with Smart Cargo", "5.8m³", "6.6m³"]
  - title: "Charging, towing and performance"
    head: ["", "50kWh", "75kWh"]
    rows:
      - ["Rapid charging (DC)", "100kW", "100kW"]
      - ["Rapid charge, 0 to 80%", "30 minutes", "45 minutes"]
      - ["Home and depot charging (AC)", "11kW", "11kW"]
      - ["Towing (braked)", "1,000kg", "1,000kg"]
      - ["Towing (unbraked)", "750kg", "750kg"]
      - ["Gross train weight", "4,100kg", "4,021kg (medium), 4,053kg (long)"]
      - ["Top speed", "80mph", "80mph"]
notes:
  - "The range, payload, load space, charging and towing figures come from Toyota's UK Proace brochure, which is older than the April 2026 price list and carries no printed date, so check them with a dealer."
  - "For the 50kWh van, the brochure's WLTP table gives 133 miles, but another page says up to 143 miles. We show the WLTP table figure."
  - "For the 75kWh vans, Toyota gives one figure of up to 215 miles. Its WLTP table shows 132 to 215 miles across all 75kWh bodies, including the platform cab, without splitting them."
  - "The 50kWh and long 75kWh vans come as Icon only. The medium 75kWh van comes as Icon or Sport, and Toyota doesn't list a separate payload for the Sport."
  - "Option prices are from the April 2026 price list. Toyota's standard equipment list is only in the older brochure, so it is not shown here."
versions:
  - name: "Medium, 50kWh"
    figures:
      range: "133 miles"
      battery: "50kWh"
      payload: "1,400kg"
      volume: "5.3m³"
      loadLength: "2,512mm"
      loadHeight: "1,397mm"
      gross: "3,100kg"
      towing: "1,000kg"
      rapidTime: "30 minutes"
  - name: "Medium, 75kWh"
    figures:
      range: "Up to 215 miles"
      battery: "75kWh"
      payload: "1,000kg"
      volume: "5.3m³"
      loadLength: "2,512mm"
      loadHeight: "1,397mm"
      gross: "3,021kg"
      towing: "1,000kg"
      rapidTime: "45 minutes"
  - name: "Long, 75kWh"
    figures:
      range: "Up to 215 miles"
      battery: "75kWh"
      payload: "1,360kg"
      volume: "6.1m³"
      loadLength: "2,862mm"
      loadHeight: "1,397mm"
      gross: "3,053kg"
      towing: "1,000kg"
      rapidTime: "45 minutes"
shared:
  rapid: "100kW"
  ac: "11kW"
archive: sources/toyota-proace-electric-price-list-2026-04.pdf
equipment:
  - trim: "Icon"
    archive: sources/toyota-proace-brochure-2025-04.pdf
    groups:
      - name: "Safety and driver assistance"
        items:
          - text: "Pre-Collision System with driver monitoring camera"
            quote: "Driver Monitoring Camera on Pre-Collision System z z z z"
          - text: "Lane Departure Alert"
            quote: "Lane Departure Alert (LDA) z z z z"
          - text: "Speed limiter with Road Sign Assist"
            quote: "Speed limiter with Road Sign Assist (RSA) z z z z"
          - text: "Intelligent Speed Assist"
            quote: "Intelligent Speed Assist z z z z"
          - text: "Cruise control"
            quote: "Cruise Control z z z z"
          - text: "Automatic High Beam"
            quote: "Automatic High Beam (AHB) z z z z"
          - text: "Rear parking sensors"
            quote: "Rear parking sensors – z z z"
          - text: "Hill-start Assist Control"
            quote: "Hill-start Assist Control (HAC) z z z z"
          - text: "Tyre pressure warning system"
            quote: "Tyre Pressure Warning System (TPWS) z z z z"
          - text: "Driver and front passenger airbags"
            quote: "Driver & passenger front airbag z z z z"
          - text: "Intrusion alarm"
            quote: "Intrusion Alarm z z z z"
          - text: "Motion sensor alarm"
            quote: "Motion sensor alarm z z z z"
          - text: "Glass-breaking alarm sensors"
            quote: "Glass-breaking alarm sensors z z z z"
          - text: "Anti-tamper alarm"
            quote: "Anti-tamper alarm z z z z"
      - name: "Cab and comfort"
        items:
          - text: "Manual air conditioning"
            quote: "Manual air conditioning z z z –"
          - text: "Heated driver's seat"
            quote: "Heated drivers seat z z z z"
          - text: "Height-adjustable driver's seat"
            quote: "Height-adjustable driver seat z z z z"
          - text: "Adjustable lumbar support on driver's seat"
            quote: "Adjustable lumbar support on driver seat z z z z"
          - text: "Driver's armrest"
            quote: "Drivers armrest z z z z"
          - text: "Two-seat front passenger bench"
            quote: "2-seater front passenger bench z z z z"
          - text: "10-inch digital instrument cluster"
            quote: "10\" Full Digital Instrument Cluster – z z z"
          - text: "Colour multi-information display"
            quote: "Colour multi-information display – z z z"
          - text: "Audio switches on steering wheel"
            quote: "Audio switches on steering wheel z z z z"
          - text: "Front power windows with auto up and down"
            quote: "Auto up & down function on power windows z z z z"
          - text: "Noise reduction layer on front windows"
            quote: "Noise reduction layer on front windows z z z z"
          - text: "Remote door locking"
            quote: "Remote door lock z z z z"
          - text: "Power door locking"
            quote: "Power door lock z z z z"
          - text: "Driver and front passenger personal lights"
            quote: "Driver & front passenger personal lights z z z z"
          - text: "Manual day and night rear-view mirror"
            quote: "Manual day/night rear-view mirror z z z z"
          - text: "Front 12V power outlet"
            quote: "12V power outlet - Front z z z z"
          - text: "Open upper dashboard storage"
            quote: "Open upper dashboard storage compartment z z z –"
          - text: "Front cup holders"
            quote: "Front cup holders z z z z"
          - text: "Front door pockets"
            quote: "Front door pockets z z z z"
          - text: "Plastic floor trim in cab"
            quote: "Plastic floor trim in driver cabin z z z z"
      - name: "Multimedia and connectivity"
        items:
          - text: "10-inch Toyota Pro-touch multimedia with navigation"
            quote: "10\" Toyota Pro-touch Multimedia High with Navigation – z z z"
          - text: "Wireless phone charger"
            quote: "Wireless mobile phone charger – z z z"
          - text: "DAB digital radio"
            quote: "Digital Audio Broadcast (DAB) z z z z"
          - text: "Four speakers"
            quote: "4 speakers z z z z"
      - name: "Charging and battery"
        items:
          - text: "11kW on-board charger"
            quote: "11 kW On Board Charger (OBC) z z z z"
      - name: "Load area"
        items:
          - text: "Two sliding side doors"
            quote: "Two sliding side doors – z z z"
          - text: "Panel rear doors opening to 180 degrees"
            quote: "180° opening on rear wing doors – z z z"
          - text: "Panel bulkhead"
            quote: "Panel bulkhead – z z z"
          - text: "Smart Cargo"
            quote: "Smart Cargo z* z z z"
          - text: "Two load area lights"
            quote: "Cargo area room lights x 2 – z z z"
          - text: "12V power outlet in load area"
            quote: "12V power outlet - Cargo area – z z z"
      - name: "Exterior"
        items:
          - text: "Multi-reflector halogen headlights"
            quote: "Multi-reflector halogen headlights z z z z"
          - text: "Automatic headlights"
            quote: "Auto headlights z z z z"
          - text: "Automatic wipers"
            quote: "Auto wipers z z z z"
          - text: "Power-adjustable door mirrors"
            quote: "Power-adjustable door mirrors z z z z"
          - text: "Electrically heated door mirrors"
            quote: "Electric heated door mirrors z z z z"
          - text: "Manually folding door mirrors"
            quote: "Manually retractable door mirrors z z z z"
          - text: "Black door mirrors"
            quote: "Black door mirrors z z z –"
          - text: "Black door handles"
            quote: "Black door handles z z z –"
          - text: "Black front bumper"
            quote: "Black front bumper z z z –"
          - text: "Black rear bumper"
            quote: "Black rear bumper – z z –"
          - text: "Privacy glass, 30% smoke tint"
            quote: "Privacy Glass - 30% (Smoke tint)* z z z z"
          - text: "16-inch steel wheels with wheel caps"
            quote: "16\" Steel wheels with wheel caps (5-triple-spoke) – z – –"
          - text: "Full-size temporary spare wheel"
            quote: "Full size Temporary spare wheel z z z z"
  - trim: "Sport (adds to Icon)"
    archive: sources/toyota-proace-brochure-2025-04.pdf
    groups:
      - name: "Safety and driver assistance"
        items:
          - text: "LED front fog lights"
            quote: "LED Front fog lights – – – z"
      - name: "Cab and comfort"
        items:
          - text: "Automatic air conditioning (replaces manual)"
            quote: "Automatic air conditioning – – z z"
          - text: "Smart entry and push-button start"
            quote: "Smart Entry & Push-button Start – – – z"
          - text: "Closed upper dashboard storage (replaces open)"
            quote: "Closed upper dashboard storage compartment – – – z"
      - name: "Exterior"
        items:
          - text: "17-inch black painted alloy wheels (replaces steel wheels with caps)"
            quote: "17\" Black Painted Alloy wheels (5-double-spoke) – – – z"
          - text: "Body-coloured front and rear bumpers (replaces black)"
            quote: "Body-coloured front & rear bumper – – – z"
          - text: "Black painted door handles"
            quote: "Black painted door handles – – – z"
          - text: "Silver surround on lower front grille"
            quote: "Silver surround on lower front grille – – – z"
          - text: "Silver surrounds on front fog lights"
            quote: "Silver surrounds on front fog lights – – – z"
          - text: "Black painted protection mouldings on side doors"
            quote: "Black painted protection moulding on side doors – – – z"
options:
  - category: "Paint"
    items:
      - name: "Metallic paint"
        price: "£608.33"
        note: "Icon and Sport"
        quote: "Metallic Paint \uF0A1 \uF0A1 \uF0A1 £608.33"
  - category: "Load area"
    items:
      - name: "Premium racking, right side (medium van, without ply lining only)"
        price: "£1,037.50"
        note: "Icon and Sport"
        quote: "Premium Racking, Right Side (Medium – Non Ply Lined only) – \uF0A1 \uF0A1 £1,037.50"
      - name: "Premium racking, left side (long van, without ply lining only)"
        price: "£1,049.17"
        note: "Icon"
        quote: "Premium Racking, Left Side (Long – Non Ply Lined only) – \uF0A1 \uF0A1 £1,049.17"
      - name: "Premium racking, both sides (medium van, without ply lining only)"
        price: "£1,565.83"
        note: "Icon and Sport"
        quote: "Premium Racking, Both Sides (Medium – Non Ply Lined only) – \uF0A1 \uF0A1 £1,565.83"
      - name: "Premium racking, both sides (long van, without ply lining only)"
        price: "£1,582.50"
        note: "Icon"
        quote: "Premium Racking, Both Sides (Long – Non Ply Lined only) – \uF0A1 – £1,582.50"
      - name: "Aluminium scuff plates"
        price: "£65.83"
        note: "Icon and Sport"
        quote: "Aluminium Scuff Plates \uF0A1 \uF0A1 \uF0A1 £65.83"
  - category: "Security"
    items:
      - name: "Meroni smart locks (three deadlocks or slam locks)"
        price: "£665.83"
        note: "Icon and Sport"
        quote: "Meroni Smart Locks (3 Locks): Deadlock/Slamlock – \uF0A1 \uF0A1 £665.83"
  - category: "Safety and driver assistance"
    items:
      - name: "Life Hammer Plus safety hammer"
        price: "£15.83"
        note: "Icon and Sport"
        quote: "Safety Hammer - Life Hammer Plus \uF0A1 \uF0A1 \uF0A1 £15.83"
facts:
  - claim: "April 2026"
    archive: sources/toyota-proace-electric-price-list-2026-04.pdf
    quote: "Offers available on Eligible Vehicles purchased between 1st April 2026"
  - claim: "50kWh"
    archive: sources/toyota-proace-brochure-2025-04.pdf
    quote: "Battery energy 50 kWh Battery energy 75 kWh"
  - claim: "75kWh"
    archive: sources/toyota-proace-brochure-2025-04.pdf
    quote: "Battery energy 50 kWh Battery energy 75 kWh"
  - claim: "133 miles"
    archive: sources/toyota-proace-brochure-2025-04.pdf
    quote: "Pure Electric Range - Combined WLTP (miles) 133 132-215"
  - claim: "up to 143 miles"
    archive: sources/toyota-proace-brochure-2025-04.pdf
    quote: "Pure Electric Range Up to 143 miles Pure Electric Range Up to 215 miles"
  - claim: "Up to 215 miles"
    archive: sources/toyota-proace-brochure-2025-04.pdf
    quote: "Pure Electric Range Up to 143 miles Pure Electric Range Up to 215 miles"
  - claim: "up to 215 miles"
    archive: sources/toyota-proace-brochure-2025-04.pdf
    quote: "Pure Electric Range Up to 143 miles Pure Electric Range Up to 215 miles"
  - claim: "132 to 215 miles"
    archive: sources/toyota-proace-brochure-2025-04.pdf
    quote: "Pure Electric Range - Combined WLTP (miles) 133 132-215"
  - claim: "1,400kg"
    archive: sources/toyota-proace-brochure-2025-04.pdf
    quote: "1400 kg 50 kWh / 1000 kg 75 kWh"
  - claim: "1,000kg"
    archive: sources/toyota-proace-brochure-2025-04.pdf
    quote: "1400 kg 50 kWh / 1000 kg 75 kWh"
  - claim: "1,360kg"
    archive: sources/toyota-proace-brochure-2025-04.pdf
    quote: "Payload (kg) 1400 1000 / 1360§"
  - claim: "3,100kg"
    archive: sources/toyota-proace-brochure-2025-04.pdf
    quote: "Gross Vehicle Weight - Total (kg) 3100 2809** / 3021* / 3053§"
  - claim: "3,021kg"
    archive: sources/toyota-proace-brochure-2025-04.pdf
    quote: "Gross Vehicle Weight - Total (kg) 3100 2809** / 3021* / 3053§"
  - claim: "3,053kg"
    archive: sources/toyota-proace-brochure-2025-04.pdf
    quote: "Gross Vehicle Weight - Total (kg) 3100 2809** / 3021* / 3053§"
  - claim: "4,100kg"
    archive: sources/toyota-proace-brochure-2025-04.pdf
    quote: "Gross Train Weight - Total (kg) 4100 3809** / 4021* / 4053§"
  - claim: "4,021kg (medium), 4,053kg (long)"
    archive: sources/toyota-proace-brochure-2025-04.pdf
    quote: "Gross Train Weight - Total (kg) 4100 3809** / 4021* / 4053§"
  - claim: "2,512mm"
    archive: sources/toyota-proace-brochure-2025-04.pdf
    quote: "2512 mm at floor level 2862 mm at floor level"
  - claim: "2,862mm"
    archive: sources/toyota-proace-brochure-2025-04.pdf
    quote: "2512 mm at floor level 2862 mm at floor level"
  - claim: "3,674mm"
    archive: sources/toyota-proace-brochure-2025-04.pdf
    quote: "3674 with Smart Cargo 4026 mm with Smart Cargo"
  - claim: "4,026mm"
    archive: sources/toyota-proace-brochure-2025-04.pdf
    quote: "3674 with Smart Cargo 4026 mm with Smart Cargo"
  - claim: "1,636mm"
    archive: sources/toyota-proace-brochure-2025-04.pdf
    quote: "Deck Width (mm) - 1636 1636"
  - claim: "1,515mm"
    archive: sources/toyota-proace-brochure-2025-04.pdf
    quote: "Interior Width (mm) 1515 1515 1515"
  - claim: "1,397mm"
    archive: sources/toyota-proace-brochure-2025-04.pdf
    quote: "Interior Load Area Height (mm) - 1397 1397"
  - claim: "5.3m³"
    archive: sources/toyota-proace-brochure-2025-04.pdf
    quote: "5.3/5.8m3* 6.1/6.6m3*"
  - claim: "5.8m³"
    archive: sources/toyota-proace-brochure-2025-04.pdf
    quote: "5.3/5.8m3* 6.1/6.6m3*"
  - claim: "6.1m³"
    archive: sources/toyota-proace-brochure-2025-04.pdf
    quote: "5.3/5.8m3* 6.1/6.6m3*"
  - claim: "6.6m³"
    archive: sources/toyota-proace-brochure-2025-04.pdf
    quote: "5.3/5.8m3* 6.1/6.6m3*"
  - claim: "100kW"
    archive: sources/toyota-proace-brochure-2025-04.pdf
    quote: "30 mins on 100 kW Rapid Charger 45 mins on 100 kW Rapid Charger"
  - claim: "0 to 80%"
    archive: sources/toyota-proace-brochure-2025-04.pdf
    quote: "Battery charging time 0-80% in Battery charging time 0-80% in"
  - claim: "30 minutes"
    archive: sources/toyota-proace-brochure-2025-04.pdf
    quote: "30 mins on 100 kW Rapid Charger 45 mins on 100 kW Rapid Charger"
  - claim: "45 minutes"
    archive: sources/toyota-proace-brochure-2025-04.pdf
    quote: "30 mins on 100 kW Rapid Charger 45 mins on 100 kW Rapid Charger"
  - claim: "11kW"
    archive: sources/toyota-proace-brochure-2025-04.pdf
    quote: "11 kW On Board Charger (OBC) z z z z"
  - claim: "1,000kg"
    archive: sources/toyota-proace-brochure-2025-04.pdf
    quote: "Maximum Trailer Weight - Braked (kg) 1000 1000"
  - claim: "750kg"
    archive: sources/toyota-proace-brochure-2025-04.pdf
    quote: "Maximum Trailer Weight - Unbraked (kg) 750 750"
  - claim: "80mph"
    archive: sources/toyota-proace-brochure-2025-04.pdf
    quote: "Maximum Speed (mph) 80 80"
---

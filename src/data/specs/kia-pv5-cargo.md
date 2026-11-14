---
van: kia-pv5-cargo
title: "Kia PV5 Cargo specs"
summary: "Range, payload, load space, towing and charging for each PV5 Cargo van, from Kia UK's own specification and pricing pages. Kia says all figures are targets until the van is homologated."
date: 2026-11-01T09:00:00Z
sourceLabel: "Kia UK PV5 Cargo specification and pricing pages, model year 2027"
tables:
  - title: "Range, payload and weight"
    head: ["Version", "Battery", "Range (Kia target)", "Payload", "Towing (braked)"]
    rows:
      - ["L1/H1 van", "51.5kWh", "177 miles", "755 to 800kg", "750kg"]
      - ["L1/H1 van", "71.2kWh", "243 miles", "675 to 700kg", "1,500kg"]
      - ["L2/H1 van", "51.5kWh", "184 miles", "750 to 795kg", "750kg"]
      - ["L2/H1 van", "71.2kWh", "258 miles", "670 to 695kg", "1,500kg"]
  - title: "Load space"
    head: ["", "L1/H1", "L2/H1"]
    rows:
      - ["Load length", "2,055mm", "2,255mm"]
      - ["Width between wheel arches", "1,330mm", "1,330mm"]
      - ["Width above wheel arches", "1,565mm", "1,565mm"]
      - ["Load height", "1,520mm", "1,520mm"]
      - ["Load volume", "4.0m³", "4.4m³"]
      - ["Rear step height", "419mm", "419mm"]
      - ["Side door opening width", "775mm", "775mm"]
  - title: "Charging times"
    head: ["", "51.5kWh battery", "71.2kWh battery"]
    rows:
      - ["AC 7kW, 10 to 100%", "Up to 7 hours", "Up to 10 hours"]
      - ["AC 11kW, 10 to 100%", "4 hours 45 minutes", "6 hours 30 minutes"]
      - ["DC 150kW, 10 to 80%", "Under 30 minutes", "Under 30 minutes"]
  - title: "Other figures"
    head: ["", ""]
    rows:
      - ["Gross weight", "2,650kg"]
      - ["Top speed", "84mph"]
notes:
  - "Kia says all technical data and ranges are expected targets, pending further development and homologation, and may change. Treat every figure here as provisional until Kia publishes final ones."
  - "Kia's two pages disagree on the L1/H1 van's range. Its specification page gives 179 miles (51.5kWh) and 251 miles (71.2kWh) as WLTP combined figures, while its pricing page gives 177 and 243 miles. We show the lower figures. Both pages give 184 and 258 miles for the L2/H1 van."
  - "Kia lists separate payloads for the 3-door and 4-door vans. The higher figure in each range is for the 3-door van."
  - "Kia's kerb weights exclude the driver. Its payloads are 75kg less than gross weight minus kerb weight for every version, so they appear to allow for a driver, but Kia doesn't say so."
versions:
  - name: "L1/H1, 51.5kWh"
    figures:
      range: "177 miles"
      battery: "51.5kWh"
      payload: "755 to 800kg"
      volume: "4.0m³"
      loadLength: "2,055mm"
      loadHeight: "1,520mm"
      loadWidth: "1,330mm"
      gross: "2,650kg"
      towing: "750kg"
  - name: "L1/H1, 71.2kWh"
    figures:
      range: "243 miles"
      battery: "71.2kWh"
      payload: "675 to 700kg"
      volume: "4.0m³"
      loadLength: "2,055mm"
      loadHeight: "1,520mm"
      loadWidth: "1,330mm"
      gross: "2,650kg"
      towing: "1,500kg"
  - name: "L2/H1, 51.5kWh"
    figures:
      range: "184 miles"
      battery: "51.5kWh"
      payload: "750 to 795kg"
      volume: "4.4m³"
      loadLength: "2,255mm"
      loadHeight: "1,520mm"
      loadWidth: "1,330mm"
      gross: "2,650kg"
      towing: "750kg"
  - name: "L2/H1, 71.2kWh"
    figures:
      range: "258 miles"
      battery: "71.2kWh"
      payload: "670 to 695kg"
      volume: "4.4m³"
      loadLength: "2,255mm"
      loadHeight: "1,520mm"
      loadWidth: "1,330mm"
      gross: "2,650kg"
      towing: "1,500kg"
shared:
  rapidTime: "Under 30 minutes on a 150kW charger, 10 to 80%"
factCheck:
  by: "independent fact-checker"
  date: 2026-11-01
facts:
  - claim: "model year 2027"
    source: https://www.kia.com/uk/pbv/lineup/pv5-cargo/specification/
    quote: "CARGO AREA DIMENSIONS AND CAPACITY - MODEL YEAR 2027"
  - claim: "51.5kWh"
    source: https://www.kia.com/uk/pbv/lineup/pv5-cargo/specification/
    quote: "Battery 51.5 kWh Li-ion battery 71.2 kWh Li-ion battery"
  - claim: "71.2kWh"
    source: https://www.kia.com/uk/pbv/lineup/pv5-cargo/specification/
    quote: "Battery 51.5 kWh Li-ion battery 71.2 kWh Li-ion battery"
  - claim: "WLTP combined figures"
    source: https://www.kia.com/uk/pbv/lineup/pv5-cargo/specification/
    quote: "WLTP PURE ELECTRIC ENERGY CONSUMPTION AND RANGE"
  - claim: "Range (Kia target)"
    source: https://www.kia.com/uk/pbv/lineup/pv5-cargo/pricing/
    quote: "All technical data and range are expected targets, pending further development and homologation."
  - claim: "179 miles"
    source: https://www.kia.com/uk/pbv/lineup/pv5-cargo/specification/
    quote: "Range (mi) - Combined 179 251 184 258"
  - claim: "251 miles"
    source: https://www.kia.com/uk/pbv/lineup/pv5-cargo/specification/
    quote: "Range (mi) - Combined 179 251 184 258"
  - claim: "184 miles"
    source: https://www.kia.com/uk/pbv/lineup/pv5-cargo/specification/
    quote: "Range (mi) - Combined 179 251 184 258"
  - claim: "258 miles"
    source: https://www.kia.com/uk/pbv/lineup/pv5-cargo/specification/
    quote: "Range (mi) - Combined 179 251 184 258"
  - claim: "755 to 800kg"
    source: https://www.kia.com/uk/pbv/lineup/pv5-cargo/specification/
    quote: "Payload (kg)* 3Dr Standard Range: 800kg 3Dr Long Range: 700kg 4Dr Standard Range: 755kg 4Dr Long Range: 675kg"
  - claim: "675 to 700kg"
    source: https://www.kia.com/uk/pbv/lineup/pv5-cargo/specification/
    quote: "Payload (kg)* 3Dr Standard Range: 800kg 3Dr Long Range: 700kg 4Dr Standard Range: 755kg 4Dr Long Range: 675kg"
  - claim: "750 to 795kg"
    source: https://www.kia.com/uk/pbv/lineup/pv5-cargo/specification/
    quote: "3Dr Standard Range: 795kg 3Dr Long Range: 695kg 4Dr Standard Range: 750kg 4Dr Long Range: 670kg"
  - claim: "670 to 695kg"
    source: https://www.kia.com/uk/pbv/lineup/pv5-cargo/specification/
    quote: "3Dr Standard Range: 795kg 3Dr Long Range: 695kg 4Dr Standard Range: 750kg 4Dr Long Range: 670kg"
  - claim: "3-door and 4-door vans"
    source: https://www.kia.com/uk/pbv/lineup/pv5-cargo/specification/
    quote: "Payload (kg)* 3Dr Standard Range: 800kg 3Dr Long Range: 700kg 4Dr Standard Range: 755kg"
  - claim: "750kg"
    source: https://www.kia.com/uk/pbv/lineup/pv5-cargo/specification/
    quote: "Maximum Braked Trailer Weight (kg) Standard Range: 750kg Long Range: 1500kg"
  - claim: "1,500kg"
    source: https://www.kia.com/uk/pbv/lineup/pv5-cargo/specification/
    quote: "Maximum Braked Trailer Weight (kg) Standard Range: 750kg Long Range: 1500kg Standard Range: 750kg Long Range: 1,500kg"
  - claim: "2,055mm"
    source: https://www.kia.com/uk/pbv/lineup/pv5-cargo/specification/
    quote: "CARGO AREA DIMENSIONS AND CAPACITY - MODEL YEAR 2027 L1/H1 L2/H1 Length (mm) 2,055 2,255"
  - claim: "2,255mm"
    source: https://www.kia.com/uk/pbv/lineup/pv5-cargo/specification/
    quote: "CARGO AREA DIMENSIONS AND CAPACITY - MODEL YEAR 2027 L1/H1 L2/H1 Length (mm) 2,055 2,255"
  - claim: "1,330mm"
    source: https://www.kia.com/uk/pbv/lineup/pv5-cargo/specification/
    quote: "Width (between wheelarches) (mm) 1,330 1,330"
  - claim: "1,565mm"
    source: https://www.kia.com/uk/pbv/lineup/pv5-cargo/specification/
    quote: "Width (above wheelarches) (mm) 1,565 1,565"
  - claim: "1,520mm"
    source: https://www.kia.com/uk/pbv/lineup/pv5-cargo/specification/
    quote: "Width (above wheelarches) (mm) 1,565 1,565 Height 1,520 1,520"
  - claim: "4.0m³"
    source: https://www.kia.com/uk/pbv/lineup/pv5-cargo/specification/
    quote: "Cargo Volume (m 3 ) 4.0 4.4"
  - claim: "4.4m³"
    source: https://www.kia.com/uk/pbv/lineup/pv5-cargo/specification/
    quote: "Cargo Volume (m 3 ) 4.0 4.4"
  - claim: "419mm"
    source: https://www.kia.com/uk/pbv/lineup/pv5-cargo/specification/
    quote: "Rear Step Height (mm) 419 419"
  - claim: "775mm"
    source: https://www.kia.com/uk/pbv/lineup/pv5-cargo/specification/
    quote: "Opening Width (Side) (mm) 775 775"
  - claim: "AC 7kW, 10 to 100%"
    source: https://www.kia.com/uk/pbv/lineup/pv5-cargo/specification/
    quote: "AC Charge Time 230V 7kW (10-100%)"
  - claim: "Up to 7 hours"
    source: https://www.kia.com/uk/pbv/lineup/pv5-cargo/specification/
    quote: "AC Charge Time 230V 7kW (10-100%) Up to 7 hours Up to 10 hours"
  - claim: "Up to 10 hours"
    source: https://www.kia.com/uk/pbv/lineup/pv5-cargo/specification/
    quote: "AC Charge Time 230V 7kW (10-100%) Up to 7 hours Up to 10 hours"
  - claim: "AC 11kW, 10 to 100%"
    source: https://www.kia.com/uk/pbv/lineup/pv5-cargo/specification/
    quote: "AC Charge Time 230V 11kW (10-100%)"
  - claim: "4 hours 45 minutes"
    source: https://www.kia.com/uk/pbv/lineup/pv5-cargo/specification/
    quote: "AC Charge Time 230V 11kW (10-100%) 4hrs 45 mins 6hrs 30 mins"
  - claim: "6 hours 30 minutes"
    source: https://www.kia.com/uk/pbv/lineup/pv5-cargo/specification/
    quote: "AC Charge Time 230V 11kW (10-100%) 4hrs 45 mins 6hrs 30 mins"
  - claim: "DC 150kW, 10 to 80%"
    source: https://www.kia.com/uk/pbv/lineup/pv5-cargo/specification/
    quote: "DC Charge Time (10-80%) - 150kW <30 mins <30 mins"
  - claim: "Under 30 minutes on a 150kW charger, 10 to 80%"
    source: https://www.kia.com/uk/pbv/lineup/pv5-cargo/specification/
    quote: "DC Charge Time (10-80%) - 150kW <30 mins <30 mins"
  - claim: "2,650kg"
    source: https://www.kia.com/uk/pbv/lineup/pv5-cargo/specification/
    quote: "Gross Vehicle Weight (kg) 2,650 2,650"
  - claim: "84mph"
    source: https://www.kia.com/uk/pbv/lineup/pv5-cargo/specification/
    quote: "Maximum Speed (mph) 84 84 84 84"
  - claim: "expected targets, pending further development and homologation"
    source: https://www.kia.com/uk/pbv/lineup/pv5-cargo/specification/
    quote: "All technical data and range are expected targets, pending further development and homologation. All figures are subject to change."
  - claim: "177 miles"
    source: https://www.kia.com/uk/pbv/lineup/pv5-cargo/pricing/
    quote: "Essential 51.5kWh L1/H1 3Dr 2-Seat FWD 0 177"
  - claim: "243 miles"
    source: https://www.kia.com/uk/pbv/lineup/pv5-cargo/pricing/
    quote: "Essential 71.2kWh L1/H1 3Dr 2-Seat FWD 0 243"
  - claim: "Both pages give 184"
    source: https://www.kia.com/uk/pbv/lineup/pv5-cargo/pricing/
    quote: "Essential 51.5kWh L2/H1 3Dr 2-Seat FWD 0 184"
  - claim: "258 miles for the L2/H1 van"
    source: https://www.kia.com/uk/pbv/lineup/pv5-cargo/pricing/
    quote: "Essential 71.2kWh L2/H1 3Dr 2-Seat FWD 0 258"
  - claim: "Kia says all figures are targets until the van is homologated"
    source: https://www.kia.com/uk/pbv/lineup/pv5-cargo/specification/
    quote: "All technical data and range are expected targets, pending further development and homologation. All figures are subject to change."
  - claim: "Its payloads are 75kg less than gross weight minus kerb weight for every version"
    calc: "L1/H1: 2,650 - 1,775 = 875, payload 800; 2,650 - 1,875 = 775, payload 700; 2,650 - 1,820 = 830, payload 755; 2,650 - 1,900 = 750, payload 675. L2/H1: 2,650 - 1,780 = 870, payload 795; 2,650 - 1,880 = 770, payload 695; 2,650 - 1,825 = 825, payload 750; 2,650 - 1,905 = 745, payload 670. Each gap is 75kg"
  - claim: "Kia's kerb weights exclude the driver"
    source: https://www.kia.com/uk/pbv/lineup/pv5-cargo/specification/
    quote: "Kerb Weight (kg exc Driver)"
---

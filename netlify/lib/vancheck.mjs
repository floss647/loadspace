// Turns raw DVLA and DVSA responses into a plain summary for the van check page.
// Kept separate from the handler so it can be tested without API keys.

export function cleanReg(input) {
  const reg = String(input || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
  return /^[A-Z0-9]{2,8}$/.test(reg) ? reg : null;
}

const KM_TO_MI = 0.621371;

function readings(motTests = []) {
  return motTests
    .filter((t) => t.odometerResultType === 'READ' && t.odometerValue && t.completedDate)
    .map((t) => {
      const raw = Number(t.odometerValue);
      const miles = t.odometerUnit === 'KM' ? Math.round(raw * KM_TO_MI) : raw;
      return { date: t.completedDate.slice(0, 10), miles };
    })
    .filter((r) => Number.isFinite(r.miles))
    .sort((a, b) => a.date.localeCompare(b.date));
}

function normalise(text) {
  return String(text || '').toLowerCase().replace(/\([^)]*\)/g, '').replace(/[^a-z ]/g, ' ').replace(/\s+/g, ' ').trim();
}

// Advisories or minor defects that appear in two or more of the last three tests.
function repeatedAdvisories(motTests = []) {
  const recent = [...motTests]
    .sort((a, b) => String(b.completedDate).localeCompare(String(a.completedDate)))
    .slice(0, 3);
  const counts = new Map();
  for (const t of recent) {
    const seen = new Set();
    for (const d of t.defects || []) {
      if (!['ADVISORY', 'MINOR'].includes(d.type)) continue;
      const key = normalise(d.text);
      if (!key || seen.has(key)) continue;
      seen.add(key);
      const prev = counts.get(key) || { text: d.text, count: 0 };
      prev.count += 1;
      counts.set(key, prev);
    }
  }
  return [...counts.values()].filter((x) => x.count >= 2).sort((a, b) => b.count - a.count).slice(0, 6);
}

export function summarise(ves, mot) {
  const tests = [...(mot?.motTests || [])].sort((a, b) =>
    String(b.completedDate).localeCompare(String(a.completedDate))
  );
  const latest = tests[0];
  const miles = readings(tests);

  let mileageWentDown = false;
  for (let i = 1; i < miles.length; i++) {
    if (miles[i].miles < miles[i - 1].miles - 50) mileageWentDown = true;
  }

  let avgPerYear = null;
  if (miles.length >= 2) {
    const first = miles[0], last = miles[miles.length - 1];
    const years = (new Date(last.date) - new Date(first.date)) / (365.25 * 864e5);
    if (years >= 0.5) avgPerYear = Math.round((last.miles - first.miles) / years);
  }

  const flags = [];
  if (mileageWentDown) flags.push({ level: 'bad', text: 'Recorded mileage went down between MOTs. Ask why before buying: it can mean a clocked van or a replaced instrument cluster.' });
  if (ves?.taxStatus && ves.taxStatus !== 'Taxed') flags.push({ level: 'warn', text: `Tax status is "${ves.taxStatus}".` });
  if (ves?.markedForExport) flags.push({ level: 'bad', text: 'DVLA has this vehicle marked for export.' });
  if (mot?.hasOutstandingRecall === 'Yes') flags.push({ level: 'warn', text: 'There is an outstanding safety recall. Ask the seller for proof it has been fixed.' });
  if (latest && latest.testResult === 'FAILED') flags.push({ level: 'warn', text: 'The most recent MOT test was a fail.' });

  const fails = tests.filter((t) => t.testResult === 'FAILED').length;

  return {
    registration: ves?.registrationNumber || mot?.registration || null,
    vehicle: {
      make: mot?.make || ves?.make || null,
      model: mot?.model || null,
      colour: ves?.colour || mot?.primaryColour || null,
      fuel: ves?.fuelType || mot?.fuelType || null,
      firstRegistered: ves?.monthOfFirstRegistration || mot?.firstUsedDate || null,
      yearOfManufacture: ves?.yearOfManufacture || null,
      engineCc: ves?.engineCapacity || mot?.engineSize || null,
      euroStatus: ves?.euroStatus || null,
      typeApproval: ves?.typeApproval || null,
      revenueWeightKg: ves?.revenueWeight || null,
      co2: ves?.co2Emissions ?? null,
    },
    tax: ves ? { status: ves.taxStatus || null, due: ves.taxDueDate || null } : null,
    mot: {
      status: ves?.motStatus || null,
      expiry: ves?.motExpiryDate || latest?.expiryDate || null,
      totalTests: tests.length,
      fails,
      outstandingRecall: mot?.hasOutstandingRecall || null,
      latest: latest
        ? {
            date: latest.completedDate?.slice(0, 10),
            result: latest.testResult,
            defects: (latest.defects || []).map((d) => ({ type: d.type, text: d.text, dangerous: !!d.dangerous })),
          }
        : null,
    },
    mileage: { readings: miles, avgPerYear, wentDown: mileageWentDown },
    repeatedAdvisories: repeatedAdvisories(tests),
    flags,
  };
}

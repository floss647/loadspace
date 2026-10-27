// Tests the van check with simulated DVLA/DVSA responses. No real API calls.
import assert from 'node:assert/strict';
import { handle } from '../netlify/functions/van-check.mjs';
import { cleanReg } from '../netlify/lib/vancheck.mjs';

assert.equal(cleanReg('ab12 cde'), 'AB12CDE');
assert.equal(cleanReg('!!'), null);

const env = { DVLA_API_KEY: 'k', MOT_CLIENT_ID: 'c', MOT_CLIENT_SECRET: 's', MOT_API_KEY: 'm', MOT_TOKEN_URL: 'https://token.test/' };
const ves = { registrationNumber: 'AB12CDE', taxStatus: 'Taxed', taxDueDate: '2027-01-01', motStatus: 'Valid', motExpiryDate: '2027-03-01', make: 'FORD', colour: 'WHITE', fuelType: 'DIESEL', monthOfFirstRegistration: '2019-03', euroStatus: 'EURO 6', revenueWeight: 3200, engineCapacity: 1995 };
const mot = { registration: 'AB12CDE', make: 'FORD', model: 'TRANSIT CUSTOM', hasOutstandingRecall: 'Yes', motTests: [
  { completedDate: '2025-02-20T10:00:00Z', testResult: 'PASSED', expiryDate: '2026-02-19', odometerValue: '98000', odometerUnit: 'MI', odometerResultType: 'READ', defects: [{ text: 'Nearside Front Tyre worn close to legal limit (5.2.3 (e))', type: 'ADVISORY' }] },
  { completedDate: '2024-02-20T10:00:00Z', testResult: 'FAILED', odometerValue: '101000', odometerUnit: 'MI', odometerResultType: 'READ', defects: [{ text: 'Nearside Front Tyre worn close to legal limit (5.2.3 (e))', type: 'ADVISORY' }, { text: 'Brake pipe corroded', type: 'MAJOR' }] },
  { completedDate: '2026-02-18T10:00:00Z', testResult: 'PASSED', expiryDate: '2027-02-17', odometerValue: '190000', odometerUnit: 'KM', odometerResultType: 'READ', defects: [] },
]};

let calls = [];
globalThis.fetch = async (url, opts = {}) => {
  calls.push(String(url));
  if (String(url).startsWith('https://token.test')) return new Response(JSON.stringify({ access_token: 't', expires_in: 3600 }));
  if (String(url).includes('driver-vehicle-licensing')) { assert.equal(opts.headers['x-api-key'], 'k'); return new Response(JSON.stringify(ves)); }
  if (String(url).includes('history.mot.api')) { assert.equal(opts.headers.authorization, 'Bearer t'); return new Response(JSON.stringify(mot)); }
  throw new Error('unexpected ' + url);
};

let r = await handle(new Request('https://x/api/van-check?reg=ab12%20cde'), env);
assert.equal(r.status, 200);
let d = await r.json();
assert.equal(d.vehicle.model, 'TRANSIT CUSTOM');
assert.equal(d.mileage.readings.length, 3);
assert.equal(d.mileage.readings[2].miles, Math.round(190000 * 0.621371)); // km converted
assert.equal(d.mileage.wentDown, true); // 101,000 -> 98,000
assert.equal(d.repeatedAdvisories.length, 1);
assert.equal(d.mot.fails, 1);
assert.equal(d.mot.latest.date, '2026-02-18');
assert.ok(d.flags.some((f) => f.text.includes('recall')));
assert.ok(d.flags.some((f) => f.text.includes('mileage went down')));

// Not configured
r = await handle(new Request('https://x/api/van-check?reg=AB12CDE'), {});
assert.equal(r.status, 503);

// Bad reg
r = await handle(new Request('https://x/api/van-check?reg=%3F'), env);
assert.equal(r.status, 400);

// One service down: still returns partial data
globalThis.fetch = async (url) => String(url).includes('driver-vehicle') ? new Response('{}', { status: 500 }) : (String(url).startsWith('https://token') ? new Response(JSON.stringify({ access_token: 't' })) : new Response(JSON.stringify(mot)));
r = await handle(new Request('https://x/api/van-check?reg=AB12CDE'), env);
d = await r.json();
assert.equal(r.status, 200); assert.equal(d.partial, true);

// Not found anywhere
globalThis.fetch = async (url) => String(url).startsWith('https://token') ? new Response(JSON.stringify({ access_token: 't' })) : new Response('{}', { status: 404 });
r = await handle(new Request('https://x/api/van-check?reg=ZZ99ZZZ'), env);
assert.equal(r.status, 404);

console.log('van-check tests passed');

// GET /api/van-check?reg=AB12CDE
// Combines DVLA Vehicle Enquiry Service and DVSA MOT History API results.
//
// Environment variables (set in Netlify, never in code):
//   DVLA_API_KEY       DVLA Vehicle Enquiry Service API key
//   MOT_CLIENT_ID      DVSA MOT History API client ID
//   MOT_CLIENT_SECRET  DVSA MOT History API client secret
//   MOT_API_KEY        DVSA MOT History API key
//   MOT_TOKEN_URL      Token URL DVSA gives you when you register
//   MOT_SCOPE          Optional, defaults to https://tapi.dvsa.gov.uk/.default
import { cleanReg, summarise } from '../lib/vancheck.mjs';

const DVLA_URL = 'https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles';
const MOT_URL = 'https://history.mot.api.gov.uk/v1/trade/vehicles/registration/';

const json = (status, body, extra = {}) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json', ...extra },
  });

let cachedToken = null; // reused while the function instance stays warm

async function motToken(env) {
  if (cachedToken && cachedToken.expires > Date.now() + 60_000) return cachedToken.value;
  const res = await fetch(env.MOT_TOKEN_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: env.MOT_CLIENT_ID,
      client_secret: env.MOT_CLIENT_SECRET,
      scope: env.MOT_SCOPE || 'https://tapi.dvsa.gov.uk/.default',
    }),
  });
  if (!res.ok) throw new Error(`MOT token ${res.status}`);
  const t = await res.json();
  cachedToken = { value: t.access_token, expires: Date.now() + (t.expires_in || 3600) * 1000 };
  return cachedToken.value;
}

async function getVes(reg, env) {
  const res = await fetch(DVLA_URL, {
    method: 'POST',
    headers: { 'x-api-key': env.DVLA_API_KEY, 'content-type': 'application/json' },
    body: JSON.stringify({ registrationNumber: reg }),
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`DVLA ${res.status}`);
  return res.json();
}

async function getMot(reg, env) {
  const token = await motToken(env);
  const res = await fetch(MOT_URL + encodeURIComponent(reg), {
    headers: { authorization: `Bearer ${token}`, 'x-api-key': env.MOT_API_KEY },
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`MOT ${res.status}`);
  return res.json();
}

export function configured(env) {
  return {
    dvla: !!env.DVLA_API_KEY,
    mot: !!(env.MOT_CLIENT_ID && env.MOT_CLIENT_SECRET && env.MOT_API_KEY && env.MOT_TOKEN_URL),
  };
}

export async function handle(req, env) {
  const reg = cleanReg(new URL(req.url).searchParams.get('reg'));
  if (!reg) return json(400, { error: 'Enter a valid UK registration.' });

  const on = configured(env);
  if (!on.dvla && !on.mot) return json(503, { error: 'not_configured' });

  const [ves, mot] = await Promise.allSettled([
    on.dvla ? getVes(reg, env) : Promise.resolve(null),
    on.mot ? getMot(reg, env) : Promise.resolve(null),
  ]);
  const v = ves.status === 'fulfilled' ? ves.value : null;
  const m = mot.status === 'fulfilled' ? mot.value : null;
  const failed = [ves, mot].filter((x) => x.status === 'rejected').map((x) => x.reason?.message);
  if (failed.length) console.error('van-check lookup failed', failed);

  if (!v && !m) {
    if (failed.length) return json(502, { error: 'The government lookup services are not responding. Try again shortly.' });
    return json(404, { error: 'No vehicle found with that registration.' });
  }

  return json(
    200,
    { ...summarise(v, m), partial: failed.length > 0, sources: { dvla: !!v, mot: !!m } },
    { 'cache-control': 'public, max-age=3600' }
  );
}

export default async (req) => handle(req, process.env);

export const config = { path: '/api/van-check' };

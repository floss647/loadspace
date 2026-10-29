// Adds a newsletter sign-up to the Beehiiv list.
// Needs BEEHIIV_API_KEY and BEEHIIV_PUBLICATION_ID in Netlify's environment variables.

const API = 'https://api.beehiiv.com/v2';

export function subscriberFrom(submission) {
  const data = submission?.data || {};
  const email = String(data.email || '').trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;
  return {
    email,
    reactivate_existing: false,
    send_welcome_email: true,
    utm_source: 'loadspace-website',
    utm_medium: String(data.source || 'site').slice(0, 50),
    utm_campaign: String(data.audience || '').slice(0, 80),
    referring_site: 'https://loadspace-vans.netlify.app',
  };
}

export async function addSubscriber(sub, { apiKey, publicationId, fetchImpl = fetch } = {}) {
  if (!apiKey || !publicationId) return { ok: false, skipped: 'Beehiiv is not configured yet' };
  const res = await fetchImpl(`${API}/publications/${encodeURIComponent(publicationId)}/subscriptions`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(sub),
  });
  if (!res.ok) return { ok: false, status: res.status, error: (await res.text()).slice(0, 300) };
  return { ok: true };
}

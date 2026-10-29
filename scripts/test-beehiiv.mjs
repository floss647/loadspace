// Offline tests for the Beehiiv sign-up hand-off (no network calls).
import assert from 'node:assert/strict';
import { subscriberFrom, addSubscriber } from '../netlify/lib/beehiiv.mjs';
import { handler } from '../netlify/functions/submission-created.mjs';

const sub = subscriberFrom({ data: { email: ' Van@Example.co.uk ', audience: 'a fleet manager', source: 'footer' } });
assert.equal(sub.email, 'van@example.co.uk');
assert.equal(sub.send_welcome_email, true);
assert.equal(sub.utm_campaign, 'a fleet manager');
assert.equal(subscriberFrom({ data: { email: 'not-an-email' } }), null);

let called;
const fakeFetch = async (url, opts) => { called = { url, opts }; return { ok: true, text: async () => '' }; };
assert.deepEqual(await addSubscriber(sub, { apiKey: 'k', publicationId: 'pub_123', fetchImpl: fakeFetch }), { ok: true });
assert.equal(called.url, 'https://api.beehiiv.com/v2/publications/pub_123/subscriptions');
assert.equal(called.opts.headers.Authorization, 'Bearer k');
assert.equal(JSON.parse(called.opts.body).email, 'van@example.co.uk');

const bad = async () => ({ ok: false, status: 401, text: async () => 'unauthorised' });
assert.equal((await addSubscriber(sub, { apiKey: 'k', publicationId: 'p', fetchImpl: bad })).status, 401);
assert.equal((await addSubscriber(sub, {})).skipped, 'Beehiiv is not configured yet');

const ev = (form_name, data) => ({ body: JSON.stringify({ payload: { form_name, data } }) });
assert.equal((await handler(ev('fleet-enquiry', { email: 'a@b.co' }))).body, 'Not a newsletter sign-up');
assert.equal((await handler(ev('newsletter', { email: 'nope' }))).body, 'No valid email');
delete process.env.BEEHIIV_API_KEY;
assert.equal((await handler(ev('newsletter', { email: 'a@b.co' }))).body, 'Kept in Netlify Forms');
console.log('Beehiiv hand-off tests passed');

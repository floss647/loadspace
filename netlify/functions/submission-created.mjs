// Netlify runs this automatically after every verified form submission (spam is filtered first).
// Newsletter sign-ups are passed on to Beehiiv, which sends the welcome email.
// Submissions stay in Netlify Forms too, so nothing is lost if Beehiiv is down.
import { subscriberFrom, addSubscriber } from '../lib/beehiiv.mjs';

export const handler = async (event) => {
  let payload;
  try {
    payload = JSON.parse(event.body || '{}').payload;
  } catch {
    return { statusCode: 400, body: 'Bad event' };
  }
  if (payload?.form_name !== 'newsletter') return { statusCode: 200, body: 'Not a newsletter sign-up' };
  const sub = subscriberFrom(payload);
  if (!sub) return { statusCode: 200, body: 'No valid email' };
  const result = await addSubscriber(sub, {
    apiKey: process.env.BEEHIIV_API_KEY,
    publicationId: process.env.BEEHIIV_PUBLICATION_ID,
  });
  if (!result.ok) console.error('Beehiiv sign-up failed', JSON.stringify(result));
  return { statusCode: 200, body: result.ok ? 'Added to Beehiiv' : 'Kept in Netlify Forms' };
};

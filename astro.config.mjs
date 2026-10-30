import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The site's public address. Change this one line when the site moves to its own domain;
// canonical links, the sitemap, RSS feeds and structured data all follow it.
export default defineConfig({
  site: 'https://loadspace-vans.netlify.app',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      // Thank-you pages and form landing pages aren't useful in search results.
      filter: (page) => !/\/(thanks|get-lease-quotes|404)\/?$/.test(page),
    }),
  ],
});

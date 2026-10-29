import { defineConfig } from 'astro/config';

// Update `site` when the site moves to its own domain.
export default defineConfig({
  site: 'https://loadspace-vans.netlify.app',
  trailingSlash: 'ignore',
});

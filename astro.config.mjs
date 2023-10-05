import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

import robots from "astro-robots";

// https://astro.build/config
export default defineConfig({
  site: 'https://bitcoin-is-complex.com',
  integrations: [sitemap(), tailwind(), robots()],
  output: 'static',
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  }
});
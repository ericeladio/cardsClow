// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: "https://cardsclow.vercel.app",
  integrations: [react(), markdoc(), keystatic(), sitemap({
    i18n: { defaultLocale: 'es', locales: { es: 'es', en: 'en' } }
  })],
  output: "static",
  adapter: vercel(),
});

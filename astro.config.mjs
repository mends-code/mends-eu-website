import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import AstroPWA from '@vite-pwa/astro'
import robotsTxt from "astro-robots-txt";
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: 'https://mends.eu',
  integrations: [tailwind(), sitemap(), robotsTxt(), AstroPWA(), alpinejs()],
  i18n: {
    defaultLocale: "en",
    locales: ["en"]
  }
});
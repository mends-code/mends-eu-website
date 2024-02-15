import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://mends.eu',
  integrations: [tailwind(), sitemap(), robotsTxt()],
  i18n: {
    defaultLocale: "en",
    locales: ["en"]
  }
});
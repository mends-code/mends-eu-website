import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import AstroPWA from '@vite-pwa/astro';
import robotsTxt from 'astro-robots-txt';
import alpinejs from '@astrojs/alpinejs';
import Unfonts from 'unplugin-fonts/astro';

// https://astro.build/config
export default defineConfig({
	site: 'https://mends.eu',
	integrations: [
		tailwind(),
		sitemap(),
		robotsTxt(),
		AstroPWA(),
		alpinejs(),
		Unfonts({
			// Typekit API
			typekit: {
				/**
				 * Typekit project id
				 */
				id: 'dwq1bvn',

				/**
				 * enable non-blocking renderer
				 *   <link rel="preload" href="xxx" as="style" onload="this.rel='stylesheet'">
				 * default: true
				 */
				defer: true,

				/**
				 * define where the font load tags should be inserted
				 * default: 'head-prepend'
				 *   values: 'head' | 'body' | 'head-prepend' | 'body-prepend'
				 */
				injectTo: 'head-prepend',
			},
		}),
	],
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},
});

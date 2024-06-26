import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import { defineConfig, envField } from "astro/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import { SITE } from "./src/config";
import { remarkReadingTime } from "./src/utils/remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
	site: SITE.website,
	base: "/",
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		react(),
		svelte(),
		mdx(),
		sitemap(),
	],
	markdown: {
		remarkPlugins: [
			remarkToc,
			remarkReadingTime,
			[
				remarkCollapse,
				{
					test: "Table of contents",
				},
			],
		],
		shikiConfig: {
			theme: "one-dark-pro",
			wrap: true,
		},
	},
	vite: {
		optimizeDeps: {
			exclude: ["@resvg/resvg-js"],
		},
	},
	scopedStyleStrategy: "where",
	i18n: {
		defaultLocale: "en",
		locales: ["en", "es"],
		fallback: {
			es: "en",
		},
		// routing: {
		// 	prefixDefaultLocale: false,
		// 	strategy: "pathname",
		// 	redirectToDefaultLocale: false,
		// },
	},
	experimental: {
		env: {
			schema: {
				ASTRO_TELEMETRY_DISABLED: envField.number({
					context: "server",
					access: "public",
					default: 1,
				}),
			},
		},
	},
});

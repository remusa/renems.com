import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import remarkCollapse from 'remark-collapse'
import remarkToc from 'remark-toc'
import { SITE } from './src/config'
import { remarkReadingTime } from './src/utils/remark-reading-time.mjs'

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    svelte(),
    sitemap(),
  ],
  markdown: {
    remarkPlugins: [
      remarkToc,
      remarkReadingTime,
      [
        remarkCollapse,
        {
          test: 'Table of contents',
        },
      ],
    ],
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: true,
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
  scopedStyleStrategy: 'where',
})

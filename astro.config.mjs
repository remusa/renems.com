import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'

// https://astro.build/config
import svelte from '@astrojs/svelte'

// https://astro.build/config
export default defineConfig({
  site: 'https://renems.com',
  integrations: [mdx(), sitemap(), svelte()],
})

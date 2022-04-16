import adapter from '@sveltejs/adapter-static'
import { mdsvex } from 'mdsvex'
import preprocess from 'svelte-preprocess'
import mdsvexConfig from './mdsvex.config.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true,
    }),

    mdsvex(mdsvexConfig),
  ],

  extensions: ['.svelte', ...mdsvexConfig.extensions],

  kit: {
    adapter: adapter(),

    // if you are not using the static adapter and
    // you don't want prerendering, remove this section
    prerender: {
      entries: ['*', '/sitemap.xml', '/rss.xml'],
    },

    package: {
      // exclude auxiliary files from package.json "exports"
      exports: (filepath) => [`Toc.svelte`, `index.ts`, `package.json`].includes(filepath),
    },

    // Override http methods in the Todo forms
    methodOverride: {
      allowed: ['PATCH', 'DELETE'],
    },
  },
}

export default config

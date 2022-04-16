import adapter from '@sveltejs/adapter-static'
import { mdsvex } from 'mdsvex'
import preprocess from 'svelte-preprocess'
import mdsvexConfig from './mdsvex.config.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],

  preprocess: [
    mdsvex(mdsvexConfig),
    [
      preprocess({
        postcss: true,
      }),
    ],
  ],

  kit: {
    adapter: adapter({
      pages: 'public',
      assets: 'public',
    }),

    // if you are not using the static adapter and
    // you don't want prerendering, remove this section
    prerender: {
      entries: ['*', '/sitemap.xml', '/rss.xml'],
    },

    vite: {
      // allows vite access to ./posts
      server: {
        fs: {
          allow: ['./'],
        },
      },
    },
  },
}

export default config

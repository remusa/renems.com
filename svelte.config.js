// import adapter from '@sveltejs/adapter-auto'
import adapter from '@sveltejs/adapter-static'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import { mdsvex } from 'mdsvex'
import relativeImages from 'mdsvex-relative-images'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import preprocess from 'svelte-preprocess'

const mode = process.env.NODE_ENV
const dev = mode === 'development'

const devPlugins = !dev
  ? [
      cssnano({
        preset: 'default',
      }),
    ]
  : []

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: {
        plugins: [autoprefixer, ...devPlugins],
      },
    }),
    mdsvex({
      extensions: ['.md'],
      layout: {
        blog: 'src/routes/blog/_post.svelte',
      },
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'wrap',
          },
        ],
      ],
      remarkPlugins: [relativeImages],
    }),
  ],

  extensions: ['.svelte', '.svx', '.md'],

  prerender: {
    entries: ['*', '/sitemap.xml', '/rss.xml'],
  },

  kit: {
    adapter: adapter(),

    // Override http methods in the Todo forms
    methodOverride: {
      allowed: ['PATCH', 'DELETE'],
    },
  },
}

export default config

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
      extensions: [`.svx`, `.md`],

      layout: {
        blog: 'src/routes/blog/_post.svelte',
      },

      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'wrap',
            // test: [`h2`, `h3`, `h4`, `h5`, `h6`], // don't auto-link <h1>
          },
        ],
      ],

      remarkPlugins: [relativeImages, getHeadings],
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

function getHeadings() {
  let visit
  let treeToString

  return async function transformer(tree, vFile) {
    if (!visit) {
      treeToString = (await import('mdast-util-to-string')).toString
      visit = (await import('unist-util-visit')).visit
    }

    vFile.data.headings = []

    visit(tree, 'heading', (node) => {
      vFile.data.headings.push({
        level: node.depth,
        title: treeToString(node),
      })
    })

    if (!vFile.data.fm) vFile.data.fm = {}

    vFile.data.fm.headings = vFile.data.headings
  }
}

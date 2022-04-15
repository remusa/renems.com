import adapter from '@sveltejs/adapter-static'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import { s } from 'hastscript'
import { mdsvex } from 'mdsvex'
import relativeImages from 'mdsvex-relative-images'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import remarkAbbr from 'remark-abbr'
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
            test: [`h2`, `h3`, `h4`, `h5`, `h6`], // don't auto-link <h1>
            content: s(
              `svg`,
              { width: 16, height: 16, viewBox: `0 0 16 16` },
              // symbol #octicon-link defined in app.html
              s(`use`, { 'xlink:href': `#octicon-link` })
            ),
          },
        ],
      ],

      remarkPlugins: [relativeImages, remarkAbbr, getHeadings],
    }),
  ],

  extensions: ['.svelte', '.svx', '.md'],

  prerender: {
    entries: ['*', '/sitemap.xml', '/rss.xml'],
  },

  kit: {
    adapter: adapter(),

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
      const title = treeToString(node)
      const slug = slugify(title)

      vFile.data.headings.push({
        level: node.depth,
        title,
        slug,
      })
    })

    if (!vFile.data.fm) vFile.data.fm = {}

    vFile.data.fm.headings = vFile.data.headings
  }
}

function slugify(title) {
  return `${
    '#' +
    title
      .trim()
      .toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-')
  }`
}

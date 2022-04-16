import { s } from 'hastscript'
import relativeImages from 'mdsvex-relative-images'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import remarkAbbr from 'remark-abbr'

const config = {
  extensions: [`.svx`, `.md`],

  rehypePlugins: [
    rehypeSlug,
    [
      rehypeAutolinkHeadings,
      {
        behavior: 'wrap',
        // test: [`h2`, `h3`, `h4`, `h5`, `h6`], // don't auto-link <h1>
        content: s(
          `svg`,
          { width: 16, height: 16, viewBox: `0 0 16 16` },
          // symbol #octicon-link defined in app.html
          s(`use`, { 'xlink:href': `#octicon-link` })
        ),
      },
    ],
  ],

  remarkPlugins: [videos, relativeImages, remarkAbbr],
}

export default config

/**
 * Adds support to video files in markdown image links
 */
function videos() {
  let visit
  const extensions = ['mp4', 'webm']

  return async function transformer(tree) {
    if (!visit) {
      visit = (await import('unist-util-visit')).visit
    }

    visit(tree, 'image', (node) => {
      if (extensions.some((ext) => node.url.endsWith(ext))) {
        node.type = 'html'
        node.value = `
            <video
              src="${node.url}"
              autoplay
              muted
              playsinline
              loop
              title="${node.alt}"
            />
          `
      }
    })
  }
}

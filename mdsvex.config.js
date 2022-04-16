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

  remarkPlugins: [videos, relativeImages, remarkAbbr, getHeadings],
}

export default config

/**
 * Gets headingsfrom markdown files
 */
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
        title: treeToString(node),
        level: node.depth,
      })
    })

    if (!vFile.data.fm) vFile.data.fm = {}

    vFile.data.fm.headings = vFile.data.headings
  }
}

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

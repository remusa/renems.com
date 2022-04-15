import { browser } from '$app/env'
import { parse } from 'node-html-parser'
import readingTime from 'reading-time/lib/reading-time.js'

// we require some server-side APIs to parse all metadata
if (browser) {
  throw new Error(`get-posts.ts should not be used on the browser, fetch from /posts.json instead`)
}

function addTimezoneOffset(date) {
  const offsetInMilliseconds = new Date().getTimezoneOffset() * 60 * 1000
  return new Date(new Date(date).getTime() + offsetInMilliseconds)
}

function formatDate(date) {
  if (!date) return undefined
  const formatter = new Intl.DateTimeFormat('en-US')
  return formatter.format(date)
}

function slugify(str) {
  return str.slice(2, -3)
  // return `${
  //   '#' +
  //   str
  //     .trim()
  //     .toLowerCase()
  //     .replace(/[^\w ]+/g, '')
  //     .replace(/ +/g, '-')
  // }`
}

function getSortedPosts(posts) {
  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date))
  return sortedPosts
}

function getPostsLimit({ posts, page, limit }) {
  if (!limit) {
    return posts
  }
  return posts.slice((page - 1) * limit, page * limit)
}

// parse HTML output for content metadata (preview, reading time, toc)
function getPostsExtraMetadata(posts) {
  return posts.map((post) => {
    const parsedHtml = parse(post.component.render().html)

    // Use the custom preview in the metadata, if availabe, or the first paragraph of the post for the preview
    const preview = post?.customPreview ?? parsedHtml.querySelector('p')

    return {
      ...post,

      preview: {
        html: preview.toString(),
        // text-only preview (i.e no html elements), used for SEO
        text: preview.structuredText,
      },

      // get estimated reading time for the post
      readingTime: readingTime(parsedHtml.structuredText).text,
    }
  })
}

function getPostsReferences(posts) {
  return posts.map((post, index, allPosts) => ({
    ...post,
    next: allPosts[index - 1],
    previous: allPosts[index + 1],
  }))
}

type PostsParams = { page?: number; limit?: number }

export async function getPosts({ page = 1, limit = 100 }: PostsParams) {
  const allPostFiles = import.meta.glob('../blog/**/*.{md,svx}')
  const iterablePostFiles = Object.entries(allPostFiles)
  const postsPromises = iterablePostFiles.map(async ([path, resolver]) => {
    const { metadata, ...rest } = await resolver()

    return {
      ...metadata,

      // get slug from file path
      slug: slugify(path),
      // slug: slugify(metadata.title),

      // TODO: handle /index.md posts https://github.com/mattjennings/sveltekit-blog-template/blob/1e3d3097abefd8b0835c2957643112d182acd8e3/src/routes/posts/%5Bslug%5D.svelte#L19
      // whether or not this file is `my-post.md` or `my-post/index.md`
      // (needed to do correct dynamic import in posts/[slug].svelte)
      isIndexFile: path.endsWith('/index.md'),

      // add offset and format date
      date: formatDate(
        // offset by timezone so that the date is correct
        addTimezoneOffset(new Date(metadata.date))
      ),

      // svelte component
      component: rest.default,

      // add preview
      customPreview: metadata.preview,
    }
  })
  const postsResults = await Promise.all(postsPromises)
  const postsExtraMetadata = getPostsExtraMetadata(postsResults)
  const postsReferences = getPostsReferences(postsExtraMetadata)
  const sortedPosts = getSortedPosts(postsReferences)
  const postsLimit = getPostsLimit({ posts: sortedPosts, page, limit })
  const posts = postsLimit
  return posts
}

export async function get({ url: { searchParams } }) {
  const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')) : undefined
  const page = searchParams.get('page') ? parseInt(searchParams.get('page')) : undefined
  const posts = await getPosts({ limit, page })

  return {
    status: 200,
    body: posts,
  }
}

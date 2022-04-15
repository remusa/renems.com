import { browser } from '$app/env'
// TODO: get post reading time

// we require some server-side APIs to parse all metadata
if (browser) {
  throw new Error(`get-posts.ts should not be used on the browser, fetch from /posts.json instead`)
}

function addTimezoneOffset(date) {
  const offsetInMilliseconds = new Date().getTimezoneOffset() * 60 * 1000
  return new Date(new Date(date).getTime() + offsetInMilliseconds)
}

function format(date) {
  if (!date) return undefined
  return date
}

function slugify(str) {
  return `${
    '#' +
    str
      .trim()
      .toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-')
  }`
}

export function getSortedPosts(posts) {
  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date))
  return sortedPosts
}

function getPostsLimit({ posts, page, limit }) {
  if (!limit) {
    return posts
  }
  return posts.slice((page - 1) * limit, page * limit)
}

export async function getPosts({ page = 1, limit }: { page: number; limit: number }) {
  const allPostFiles = import.meta.glob('../blog/**/*.{md,svx}')
  const iterablePostFiles = Object.entries(allPostFiles)
  const postsPromises = iterablePostFiles.map(async ([path, resolver]) => {
    const { metadata } = await resolver()

    return {
      metadata: metadata,

      // Get slug from file path
      slug: path.slice(2, -3),
      // slug: slugify(metadata.title),

      // add offset and format date
      date: format(
        // offset by timezone so that the date is correct
        addTimezoneOffset(new Date(metadata.date))
      ),
    }
  })
  const posts = await Promise.all(postsPromises)
  const postsLimit = getPostsLimit({ posts, page, limit })
  return postsLimit
}

export async function get({ url: { searchParams } }) {
  const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')) : undefined
  const page = searchParams.get('page') ? parseInt(searchParams.get('page')) : undefined
  const allPosts = await getPosts({ limit, page })
  const sortedPosts = getSortedPosts(allPosts)

  return {
    status: 200,
    body: sortedPosts,
  }
}

export async function getPosts({ limit, page }: { limit: number; page: number }) {
  const allPostFiles = import.meta.glob('../blog/**/*.{md,svx}')
  const iterablePostFiles = Object.entries(allPostFiles)
  const postsPromises = iterablePostFiles.map(async ([path, resolver]) => {
    const { metadata } = await resolver()
    const slug = path.slice(2, -3)
    return {
      metadata: metadata,
      slug,
    }
  })
  const allPosts = await Promise.all(postsPromises)
  return allPosts
}

export function getSortedPosts(posts) {
  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date))
  return sortedPosts
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

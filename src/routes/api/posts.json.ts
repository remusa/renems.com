export async function getPosts() {
  const allPostFiles = import.meta.glob('../blog/**/*.md')
  const iterablePostFiles = Object.entries(allPostFiles)
  const postsPromise = iterablePostFiles.map(async ([path, resolver]) => {
    const { metadata } = await resolver()
    const slug = path.slice(2, -3)

    return {
      metadata: metadata,
      slug,
    }
  })
  const allPosts = await Promise.all(postsPromise)
  return allPosts
}

export function getSortedPosts(posts) {
  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date))
  return sortedPosts
}

export async function get() {
  const allPosts = await getPosts()
  const sortedPosts = getSortedPosts(allPosts)

  return {
    status: 200,
    body: sortedPosts,
  }
}

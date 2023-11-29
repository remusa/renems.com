import type { CollectionEntry } from 'astro:content'

function getSortedPosts(posts: CollectionEntry<'blog'>[]) {
  return posts
    .filter(({ data }) => !data.draft)
    .sort(
      (a, b) =>
        Math.floor(new Date(b.data.pubDatetime).getTime() / 1000) -
        Math.floor(new Date(a.data.pubDatetime).getTime() / 1000)
    )
}

export default getSortedPosts

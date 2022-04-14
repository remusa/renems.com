import { siteTitle, siteDescription, siteURL } from '$lib/info'
import { getPosts, getSortedPosts } from './api/posts.json'

export const headers = {
  'Cache-Control': 'max-age=0, s-maxage=3600',
  'Content-Type': 'application/xml',
}

export async function get() {
  const allPosts = await getPosts()
  const posts = getSortedPosts(allPosts)
  const body = render(posts)

  return {
    headers,
    body,
  }
}

function render(posts) {
  return `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteTitle}</title>
    <description>${siteDescription}</description>
    <link>${siteURL}</link>
    <atom:link href="${siteURL}/rss.xml" rel="self" type="application/rss+xml"/>
    ${posts
      .map(
        (post) => `<item>
    <guid isPermaLink="true">${siteURL}/blog/${post.slug}</guid>
    <title>${post.title}</title>
    <link>${siteURL}/blog/${post.slug}</link>
    <description>${post.excerpt}</description>
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>`
      )
      .join('')}
    </channel>
  </rss>
  `
}

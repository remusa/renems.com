import { siteURL } from '$lib/info'
import { getPosts, getSortedPosts } from './api/posts.json'
import { headers } from './rss.xml'

export async function get() {
  const allPosts = await getPosts()
  const posts = getSortedPosts(allPosts)
  const pages = [`about`, `contact`, `blog`]
  const body = render({ posts, pages })

  return {
    headers,
    body,
  }
}

function render({ posts, pages }) {
  return `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
      <url>
        <loc>${siteURL}</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>
      ${pages
        .map(
          (page) => `
      <url>
        <loc>${siteURL}/${page}</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>
      `
        )
        .join('')}
      ${posts
        .map((post) =>
          post.isPrivate
            ? null
            : `
      <url>
        <loc>${siteURL}/posts/${post.slug}</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>
      `
        )
        .join('')}
    </urlset>`
}

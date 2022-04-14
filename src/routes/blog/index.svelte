<script context="module">
  export async function load({ fetch }) {
    const allPosts = await fetch('/api/posts.json')
    const posts = await allPosts.json()

    return {
      props: {
        posts,
      },
    }
  }
</script>

<script>
  import Head from '$lib/components/Head.svelte'

  export let posts
</script>

<Head title="Blog" />

<h1>Blog</h1>

<h2>Blog Posts</h2>

{#each posts as post}
  <li>
    <h2>
      <a href={post.slug}>
        {post.metadata.title}
      </a>
    </h2>
    Published {post.metadata.date}
  </li>
{/each}

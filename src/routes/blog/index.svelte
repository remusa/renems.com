<script context="module">
  export async function load({ fetch }) {
    const posts = await fetch('/api/posts.json')
    const allPosts = await posts.json()

    return {
      props: {
        posts: allPosts,
      },
    }
  }
</script>

<script>
  export let posts
</script>

<h1>Blog</h1>

<h2>Blog Posts</h2>

{#each posts as post}
  <li>
    <h2>
      <a href={post.path}>
        {post.metadata.title}
      </a>
    </h2>
    Published {post.metadata.date}
  </li>
{/each}

<style>
</style>

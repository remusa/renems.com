<script context="module">
  export async function load({ fetch }) {
    const posts = await fetch('/api/posts.json')
    const allPosts = await posts.json()
    console.log('allPosts', allPosts)

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
        {post.meta.title}
      </a>
    </h2>
    Published {post.meta.date}
  </li>
{/each}

<style>
</style>

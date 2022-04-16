<script context="module">
  export const prerender = true
  export async function load({ fetch }) {
    const allPosts = await fetch('api/posts.json?limit=2')
    const recentPosts = await allPosts.json()

    return {
      props: {
        recentPosts,
      },
    }
  }
</script>

<script>
  import Head from '$lib/components/Head.svelte'
  import PostPreview from '$lib/components/PostPreview.svelte'

  export let recentPosts
</script>

<Head title="index" />

<h1>Welcome to SvelteKit</h1>

<h2>Recent Posts</h2>

<div>
  {#each recentPosts as post}
    <div>
      <PostPreview {post} small />
    </div>
  {/each}
</div>

<a href="/blog">View All Posts</a>

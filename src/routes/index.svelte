<script context="module">
  export const prerender = true
  export async function load({ fetch }) {
    const posts = await fetch('/posts.json?limit=2')
    const recentPosts = await posts.json()
    console.log('recentPosts', recentPosts)
    return {
      props: {
        recentPosts,
      },
    }
  }
</script>

<script>
  import Head from '$lib/components/Head.svelte'

  export let recentPosts
</script>

<Head title="index" />

<h1>Welcome to SvelteKit</h1>

<!-- recent posts -->
<!-- https://github.com/mattjennings/sveltekit-blog-template/blob/main/src/routes/index.svelte -->
<h2>
  Recent Posts
  <button href="/posts">View All</button>
</h2>

<div >
  {#each recentPosts as post}
    <div >
      <PostPreview {post} small />
    </div>
  {/each}
</div>

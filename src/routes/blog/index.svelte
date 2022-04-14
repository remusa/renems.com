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
  import PostList from '$lib/components/PostList.svelte'

  export let posts
</script>

<Head title="Blog" />

<PostList {posts} heading="Blog" />

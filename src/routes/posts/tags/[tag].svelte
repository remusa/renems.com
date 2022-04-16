<script lang="ts" context="module">
  export async function load({ params, fetch }) {
    const { tag } = params
    const response = await fetch('/api/posts.json')
    const posts = await response.json()
    const matchingPosts = posts.filter((post) => post.tags.includes(tag))

    return {
      props: {
        tag,
        posts: matchingPosts,
      },
    }
  }
</script>

<script>
  import Head from '$lib/components/Head.svelte'
  import PostList from '$lib/components/PostList.svelte'

  export let tag
  export let posts
</script>

<Head title={tag} />

<PostList {posts} heading={`Tag: ${tag}`} />

<script lang="ts" context="module">
  export async function load({ params, fetch }) {
    const { category } = params
    const response = await fetch('/api/posts.json')
    const posts = await response.json()
    const matchingPosts = posts.filter((post) => post.categories.includes(category))

    return {
      props: {
        category,
        posts: matchingPosts,
      },
    }
  }
</script>

<script>
  import Head from '$lib/components/Head.svelte'
  import PostList from '$lib/components/PostList.svelte'

  export let category
  export let posts
</script>

<Head title={category} />

<PostList {posts} heading={`Category: ${category}`} />

<script context="module">
  export async function load({ params, fetch }) {
    const currentTag = params.category
    const response = await fetch('/api/posts.json')
    const posts = await response.json()

    const matchingPosts = posts.filter((post) => post.meta.tags.includes(currentTag))

    return {
      props: {
        posts: matchingPosts,
      },
    }
  }
</script>

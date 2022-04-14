<script context="module">
  export async function load({ params, fetch }) {
    const { category: currentCategory } = params
    const response = await fetch('/api/posts.json')
    const posts = await response.json()

    const matchingPosts = posts.filter((post) => post.meta.categories.includes(currentCategory))

    return {
      props: {
        posts: matchingPosts,
      },
    }
  }
</script>

<script context="module">
  export async function load({ page, fetch }) {
    const slug = page.params.slug
    const post = await fetch(`${slug}.json`).then((r) => r.json())
    return {
      props: { post },
    }
  }
</script>

<script>
  // post will have metadata and content
  export let post
</script>

<!--show the post html with @html-->
{@html post.content}

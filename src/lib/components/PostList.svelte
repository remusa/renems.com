<script>
  export let posts = []
  export let heading
</script>

<h1>{heading}</h1>
<h2>Blog Posts</h2>

{#each posts as post}
  <li>
    <h2>
      <a href={post.slug} sveltekit:prefetch>
        {post.metadata.title}
      </a>
    </h2>
    Published {post.metadata.date}
  </li>
{/each}

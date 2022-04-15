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
        {post.title}
      </a>
    </h2>
    <p>Published {post.date}</p>
    <p>Reading time: {post.readingTime}</p>
  </li>
{/each}

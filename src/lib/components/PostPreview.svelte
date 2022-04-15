<script>
  export let post
  export let small = false
  // https://github.com/mattjennings/sveltekit-blog-template/blob/main/src/lib/components/PostPreview.svelte
  const { slug } = post
</script>

<div>
  <div>
    {#if !small}
      <h1>
        <a href={slug}>{post.metadata.title}</a>
      </h1>
    {:else}
      <h3>
        <a href={slug}>{post.metadata.title}</a>
      </h3>
    {/if}

    <div>
      <time>{new Date(post.metadata.date)}</time>
      •
      <span
        >Reading time:
        <!-- TODO: show reading time -->
        {post.metadata?.readingTime}
      </span>
    </div>
  </div>

  <!-- TODO: show post preview -->
  <div>{@html post.metadata?.preview?.html}</div>
  <slot>
    <div>
      <button href={slug}>Read More</button>
    </div>
  </slot>
</div>

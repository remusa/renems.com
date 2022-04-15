<script>
  export let post
  export let small = false
  // https://github.com/mattjennings/sveltekit-blog-template/blob/main/src/lib/components/PostPreview.svelte
</script>

<div>
  <div>
    {#if !small}
      <h1>
        <a href={post.slug}>{post.title}</a>
      </h1>
    {:else}
      <h3>
        <a href={post.slug}>{post.title}</a>
      </h3>
    {/if}

    <div>
      <time>{new Date(post.date)}</time>
      •
      <span
        >Reading time:
        {post.readingTime}
      </span>
    </div>
  </div>

  <div>{@html post.preview.html}</div>

  <slot>
    <div>
      <a href={post.slug}>Read More</a>
    </div>
  </slot>
</div>

<script>
  import { format } from 'date-fns'
  import ButtonLink from './ButtonLink.svelte'

  export let post
  export let small = false
  const date = format(new Date(post.date), 'MMMM d, yyyy')
  const url = post.slug
</script>

<div class="flex flex-col">
  <div>
    {#if !small}
      <h1 class="!mt-0 !mb-2">
        <a href={url}>{post.title}</a>
      </h1>
    {:else}
      <h3 class="!mt-0 !mb-2">
        <a href={url}>{post.title}</a>
      </h3>
    {/if}

    <div class="opacity-70">
      <time>{date}</time>
      •
      <span>{post.readingTime}</span>
    </div>
  </div>

  <div class="flex-1">{@html post.preview.html}</div>

  <slot name="actions">
    <div class="flex justify-end w-full">
      <ButtonLink href={url}>Read More</ButtonLink>
    </div>
  </slot>
</div>

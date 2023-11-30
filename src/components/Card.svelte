<script lang="ts">
  import { slugifyStr } from '@utils/slugify'
  import type { CollectionEntry } from 'astro:content'
  import Datetime from './Datetime.svelte'

  export let href: string | undefined
  export let frontmatter: CollectionEntry<'blog'>['data']
  export let secHeading: boolean | undefined = false

  const { title, pubDatetime, description, readingTime } = frontmatter

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    class: 'text-lg font-medium decoration-slice hover:underline',
  }
</script>

<li class="my-6">
  <a
    {href}
    class="inline-block decoration-slice text-lg font-medium text-skin-accent underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
  >
    {#if secHeading}
      <h2 {...headerProps}>{title}</h2>
    {:else}
      <h3 {...headerProps}>{title}</h3>
    {/if}
  </a>
  <Datetime datetime={pubDatetime} {readingTime} />
  <p>{description}</p>
</li>

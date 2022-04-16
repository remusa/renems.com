<script context="module">
  export async function load({ params, fetch }) {
    const { slug } = params

    // fetch posts from endpoint so that it includes all metadata (see posts.json.js for explanation)
    const posts = await fetch('/api/posts.json').then((res) => res.json())
    const post = posts.find((post) => slug === post.slug)

    if (!post) {
      return {
        status: 404,
        error: 'Post not found',
      }
    }

    const component = post.isIndexFile
      ? // vite requires relative paths and explicit file extensions for dynamic imports
        await import(`../../../posts/${post.slug}/index.md`)
      : await import(`../../../posts/${post.slug}.md`)

    return {
      props: {
        ...post,
        component: component.default,
      },
    }
  }
</script>

<script>
  import { page } from '$app/stores'
  import '$lib/assets/styles/themes/prism-one-dark.css'
  import '$lib/assets/styles/_layout.scss'
  import ArrowLeftIcon from '$lib/components/ArrowLeftIcon.svelte'
  import ButtonLink from '$lib/components/ButtonLink.svelte'
  import Head from '$lib/components/Head.svelte'
  import PostPreview from '$lib/components/PostPreview.svelte'
  import ToC from '$lib/components/ToC.svelte'
  import { siteURL } from '$lib/info'
  import { format, parseISO } from 'date-fns'

  export let component

  // metadata
  export let title
  export let date
  export let preview
  export let readingTime
  export let slug
  export let next
  export let previous
  export let path
  export let author
  export let tags
  export let categories
  export let language
  export let type

  const url = `${siteURL}/${slug}`
</script>

<Head {title} {url} text={preview.text} />

<article class="relative">
  <!-- TODO: show extra post metadata -->
  <!-- <p>Published: {date}</p>
  <p>Path: {path}</p>
  <p>Author: {author}</p>
  <p>Categories: {categories}</p>
  <p>Tags: {tags}</p>
  <p>Language: {language}</p>
  <p>Type: {type}</p> -->

  <!-- {#if categories.length}
    <aside>
      <p>Categories:</p>
      <ul>
        {#each categories as category}
          <li>
            <a href="/posts/categories/{category}">
              {category}
            </a>
          </li>
        {/each}
      </ul>
    </aside>
  {/if}

  {#if tags.length}
    <aside>
      <p>Tags:</p>
      <ul>
        {#each tags as tag}
          <li>
            <a href="/posts/tags/{tag}">
              {tag}
            </a>
          </li>
        {/each}
      </ul>
    </aside>
  {/if} -->

  <hr />

  <!-- <a href="/posts">Go back to posts</a> -->

  <h1 class="!mt-0 !mb-2">
    <a class="!font-medium" href={$page.url.pathname}>
      {title}
    </a>
  </h1>

  <div class="opacity-70">
    <span>By {author}</span>
    •
    <time datetime={new Date(parseISO(date)).toISOString()}
      >{format(new Date(parseISO(date)), 'MMMM d, yyyy')}</time
    >
    •
    <span>{readingTime}</span>
  </div>

  <div class="relative">
    <!-- render the post -->
    <svelte:component this={component} />

    <!-- table of contents -->
    <div class="hidden xl:block absolute not-prose left-[100%]" aria-label="Table of Contents">
      <div class="fixed z-10 px-4 py-2 ml-8 top-[4.5rem]">
        <!-- ignore h1 tags as they should only be used for the post title -->
        <ToC allowedHeadings={['h2', 'h3', 'h4', 'h5', 'h6']} />
      </div>
    </div>
  </div>
</article>

<div class="pt-12 flex justify-between">
  <ButtonLink href={`/posts`}>
    <slot slot="icon-start">
      <ArrowLeftIcon class="h-5 w-5" />
    </slot>
    Back to Posts
    <slot slot="icon-end" />
  </ButtonLink>
</div>

<!-- next/previous posts -->
{#if previous || next}
  <hr />

  <div class="grid gap-8 grid-cols-1 sm:grid-cols-2">
    {#if previous}
      <div class="flex flex-col">
        <h6 class="not-prose post-preview-label">Previous Post</h6>
        <div class="flex-1 post-preview">
          <PostPreview post={previous} small />
        </div>
      </div>
    {:else}
      <div />
    {/if}

    {#if next}
      <div class="flex flex-col">
        <h6 class="not-prose post-preview-label flex justify-end">Next Post</h6>
        <div class="flex-1 post-preview">
          <PostPreview post={next} small />
        </div>
      </div>
    {/if}
  </div>
{/if}

<style lang="postcss">
  .post-preview {
    @apply flex p-4 border border-slate-300 rounded-lg;
  }

  .post-preview-label {
    @apply mb-2 text-slate-500 uppercase text-base font-medium;
  }

  :global(.dark) .post-preview {
    @apply border-slate-700;
  }

  :global(.dark) .post-preview-label {
    @apply text-slate-400;
  }
</style>

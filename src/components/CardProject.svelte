<script lang="ts">
  // import { Image } from '@unpic/astro'
  import { slugifyStr } from '@utils/slugify'
  import type { CollectionEntry } from 'astro:content'

  export let frontmatter: CollectionEntry<'projects'>['data']

  const { title, description, tags, url, repository, ogImage } = frontmatter

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    class: 'text-lg font-medium decoration-slice hover:underline',
  }
</script>

<li class="my-6">
  <img
    class="rounded-md shadow-2xl"
    src={`src/assets/images/projects/${ogImage}`}
    alt={`image of project ${title}`}
  />
  <div
    class="mt-2 inline-block decoration-slice text-lg font-medium text-skin-accent underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
  >
    <h3 {...headerProps}>{title}</h3>
  </div>
  <p>{description}</p>
  <ul>
    {#each tags as tag}
      <li class="inline-block my-1 underline-offset-4">
        <p class="tag-wrapper text-sm pr-2 group">
          <svg xmlns="http://www.w3.org/2000/svg" class="scale-50"
            ><path
              d="M16.018 3.815 15.232 8h-4.966l.716-3.815-1.964-.37L8.232 8H4v2h3.857l-.751 4H3v2h3.731l-.714 3.805 1.965.369L8.766 16h4.966l-.714 3.805 1.965.369.783-4.174H20v-2h-3.859l.751-4H21V8h-3.733l.716-3.815-1.965-.37zM14.106 14H9.141l.751-4h4.966l-.752 4z"
            ></path>
          </svg>
          &nbsp;<span>{tag.toLowerCase()}</span>
        </p>
      </li>
    {/each}
  </ul>
  <p class="text-right text-skin-accent">
    <a href={url} target="_blank" rel="noopener noreferrer">Demo</a>
    <a
      class="font-mono"
      href={repository}
      target="_blank"
      rel="noopener noreferrer">Code</a
    >
  </p>
</li>

<style lang="postcss">
  .tag-wrapper {
    @apply relative decoration-slice hover:-top-0.5 hover:text-skin-accent focus-visible:p-1;
  }
  .tag-wrapper svg {
    @apply -mr-2 h-6 w-6 scale-95 text-skin-base opacity-80 group-hover:fill-skin-accent;
  }
</style>

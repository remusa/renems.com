<script lang="ts">
  import { listFormatter } from '@utils/formatters'
  import { slugifyStr } from '@utils/slugify'
  import type { CollectionEntry } from 'astro:content'
  import Datetime from './Datetime'

  export let href: string
  export let frontmatter: CollectionEntry<'projects'>['data']

  const { title, description, type, tech, url, repository, ogImage } =
    frontmatter

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
  </a>

  <img src={`src/assets/images/projects/${ogImage}`} alt="something" />
  <h3 {...headerProps}>{title}</h3>
  <p>{description}</p>
  <p>{listFormatter.format(type)}</p>
  <p>{listFormatter.format(tech)}</p>
  <a href={url} target="_blank" rel="noopener noreferrer"> Demo </a>
  <a href={repository} target="_blank" rel="noopener noreferrer"> Code </a>

  <!-- <Datetime datetime={pubDatetime} {readingTime} /> -->
  <p>{description}</p>
</li>

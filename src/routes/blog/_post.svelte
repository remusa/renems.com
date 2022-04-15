<script>
  import '$lib/assets/styles/themes/prism-one-dark.css'
  import '$lib/assets/styles/_layout.scss'
  import Head from '$lib/components/Head.svelte'
  import TableContents from '$lib/components/TableContents.svelte'
  import Toc from 'svelte-toc'

  export let date = ''
  export let title = ''
  export let path = ''
  export let author = 'RMS'
  export let tags
  export let categories
  export let language = 'english'
  export let type = 'BLOG'
  export let published = false
  export let headings = []
</script>

<Head title="Test" />

<p>Published: {date}</p>
<p>Path: {path}</p>
<p>Author: {author}</p>
<p>Categories: {categories}</p>
<p>Tags: {tags}</p>
<p>Language: {language}</p>
<p>Type: {type}</p>
<p>Published: {published}</p>

{#if categories.length}
  <aside>
    <p>Categories:</p>
    <ul>
      {#each categories as category}
        <li>
          <a href="/blog/categories/{category}">
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
          <a href="/blog/tags/{tag}">
            {tag}
          </a>
        </li>
      {/each}
    </ul>
  </aside>
{/if}

<hr />

<a href="/blog">Go back to posts</a>

<h1>{title}</h1>

<div class="container">
  <div class="toc-wrapper">
    <TableContents {headings} />

    <div class="toc" style="1px solid crimson;">
      <Toc />
    </div>
  </div>

  <div class="content">
    <slot />
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
    width: 700px;
  }

  .content {
    max-height: 500px;
    overflow-y: scroll;
  }
</style>

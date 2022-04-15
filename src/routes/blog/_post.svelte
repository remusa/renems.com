<script>
  import '$lib/assets/styles/themes/prism-one-dark.css'
  import '$lib/assets/styles/_layout.scss'
  import Head from '$lib/components/Head.svelte'
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
    <h2>Categories:</h2>
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
    <h2>Tags:</h2>
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

{@debug headings}
<div class="toc">
  <Toc />
</div>

<slot />

<style>
  .toc {
    min-height: 50px;
    border: 1px solid crimson;
  }
</style>

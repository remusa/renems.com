<script lang="ts">
  type Heading = {
    level: number
    title: string
    url: string
  }

  export let headings: Heading[] = []
</script>

{@debug headings}
<div class="wrapper">
  {#if headings.length > 0}
    <summary>Table of Contents</summary>
    <ol>
      {#each headings as heading}
        {@debug heading}
        {@const { level, title, url } = heading}
        <li class={`level-${level}`}>
          <a href={url}>
            {title}
          </a>
        </li>
      {/each}
    </ol>
  {/if}
</div>

<style>
  .wrapper {
    height: 300px;
    overflow: scroll;
    padding: 1rem 0 1rem 0;
    margin: 0 0 2rem 0;
  }

  a {
    cursor: pointer;
  }

  ol {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  .level-1 {
    padding-left: 0rem;
  }

  .level-2 {
    padding-left: 1rem;
  }

  .level-3 {
    padding-left: 2rem;
  }

  .level-4 {
    padding-left: 3rem;
  }

  .level-5 {
    padding-left: 4rem;
  }

  .level-6 {
    padding-left: 5rem;
  }
</style>

<script lang="ts">
  import { onMount } from 'svelte'

  type Heading = {
    level: number
    title: string
    url: string
  }

  export let top = -80
  export let bottom = 0
  export let left = 0
  export let right = 0
  export let once = false
  let rendered = false
  let intersecting = false

  export let headings: Heading[] = []
  let ids = getIds(headings)
  let activeId
  console.log('activeId', activeId)
  $: activeUrl = getActiveUrl(activeId)
  console.log('activeUrl', activeUrl)

  function getIds(items) {
    return items.reduce((acc, item) => {
      if (item.url) {
        // url has a # as first character, remove it to get the raw CSS-id
        acc.push(item.url.slice(1))
      }
      if (item.items) {
        acc.push(...getIds(item.items))
      }
      return acc
    }, [])
  }

  function getActiveUrl(url) {
    return url?.startsWith('#') ? url.slice(1) : url
  }

  onMount(() => {
    if (!ids) return
    if (typeof IntersectionObserver === 'undefined') return

    rendered = true

    const rootMargin = `${bottom}% ${left}% ${top}% ${right}%`

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const {
            isIntersecting,
            target: { id },
          } = entry

          if (isIntersecting) {
            activeId = id
          }
        })
      },
      { rootMargin }
    )

    ids.forEach((id) => {
      observer.observe(document.getElementById(id))
    })

    return () => {
      ids.forEach((id) => {
        observer.unobserve(document.getElementById(id))
      })
    }
  })
</script>

<div class="wrapper">
  {#if headings.length > 0}
    <details open>
      <summary>Table of Contents</summary>
      <ol>
        {#each headings as heading}
          {@const { level, title, url } = heading}
          <li class={`level-${level}`}>
            <a class:active={getActiveUrl(url) === activeUrl} href={url}>
              {title}
            </a>
          </li>
        {/each}
      </ol>
    </details>
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

  .active {
    color: crimson;
    border: 1px solid crimson;
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

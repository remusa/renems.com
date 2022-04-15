<script context="module">
  export async function load({ url }) {
    const path = url.pathname

    return {
      props: {
        path,
      },
    }
  }
</script>

<script>
  import { prefetch } from '$app/navigation'
  // TODO: update styles
  // import '$lib/assets/styles/app.css'
  import Footer from '$lib/components/Footer.svelte'
  import Header from '$lib/components/Header.svelte'
  import { navItems } from '$lib/config'
  import { currentPage } from '$lib/store'
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'

  // prefetchRoutes() // Loads ALL routes in the background

  export let path

  /**
   * Updates the global store with the current path. (Used for highlighting
   * the current page in the nav, but could be useful for other purposes.)
   **/
  $: currentPage.set(path)
  /**
   * This pre-fetches all top-level routes on the site in the background for faster loading.
   * https://kit.svelte.dev/docs#modules-$app-navigation
   *
   * Any route added in src/lib/config.js will be prefetched automatically. You can add your
   * own prefetch() calls here, too.
   **/
  onMount(() => {
    navItems.forEach((item) => prefetch(item.route))
  })
</script>

<div class="">
  <Header />

  {#key path}
    <main
      id="main"
      tabindex="-1"
      in:fade={{ duration: 150, delay: 150 }}
      out:fade={{ duration: 150 }}
    >
      <slot />
    </main>
  {/key}

  <Footer />
</div>

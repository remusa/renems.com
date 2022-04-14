<script context="module">
  export async function load({ url }) {
    const currentRoute = url.pathname

    return {
      props: {
        currentRoute,
      },
    }
  }
</script>

<script>
  import Footer from '$lib/components/Footer.svelte'
  import Header from '$lib/components/Header.svelte'
  import '$lib/assets/styles/app.css'
  import { fade } from 'svelte/transition'

  export let currentRoute
</script>

<div class="">
  <Header />

  {#key currentRoute}
    <main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
      <slot />
    </main>
  {/key}

  <Footer />
</div>

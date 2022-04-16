<script>
  import { browser } from '$app/env'
  import { siteTitle } from '$lib/config'
  import MoonIcon from 'heroicons-svelte/solid/MoonIcon.svelte'
  import SunIcon from 'heroicons-svelte/solid/SunIcon.svelte'

  export let prefersLight
</script>

<header class="flex h-16 px-4 py-2 justify-between items-center">
  <h2
    class="!text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500 dark:from-violet-500 dark:to-pink-500"
  >
    <a class="text-lg sm:text-2xl font-bold" href="/">
      {siteTitle}
    </a>
  </h2>

  <!-- TODO: fix header nav links -->
  <nav>
    <ul>
      <li>
        <a href="/blog">Blog</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </nav>

  {#if browser}
    <button
      type="button"
      role="switch"
      aria-label="Toggle Dark Mode"
      aria-checked={!prefersLight}
      class="h-4 w-4 sm:h-8 sm:w-8 sm:p-1"
      on:click={() => {
        prefersLight = !prefersLight
        localStorage.setItem('prefersLight', prefersLight.toString())

        if (prefersLight) {
          document.querySelector('html').classList.remove('dark')
        } else {
          document.querySelector('html').classList.add('dark')
        }
      }}
    >
      {#if prefersLight}
        <MoonIcon class="text-slate-500" />
      {:else}
        <SunIcon class="text-slate-400" />
      {/if}
    </button>
  {/if}
</header>

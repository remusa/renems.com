<script context="module">
  export async function load({ error, status }) {
    return {
      props: {
        error,
        status,
      },
    }
  }
</script>

<script>
  import { dev } from '$app/env'
  import Head from '$lib/components/Head.svelte'

  export let status
  export let error
</script>

<Head title={status} />

<h1>{error.name} {status}</h1>

{#if status === 404}
  <p>
    Page not found. Back to <a sveltekit:prefetch href="/">landing page</a>. 🤦‍♂️
  </p>
{/if}

<p><strong>Error!</strong> Try these links</p>
<ul>
  <li><a href="/">Home</a></li>
</ul>

{#if dev && error?.stack}
  <h2>Stack Trace</h2>
  <pre>{error.stack}</pre>
{/if}

<style>
  h1 {
    text-align: center;
  }
  div {
    max-width: 45em;
    padding: 5em 3em;
    margin: auto;
  }
  p {
    text-align: center;
  }
  pre {
    overflow: scroll;
    font-size: 0.9em;
    white-space: pre-wrap;
    background: var(--accentBg);
    padding: 5pt 1em;
    border-radius: 3pt;
  }
</style>

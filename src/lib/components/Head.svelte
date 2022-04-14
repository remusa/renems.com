<script>
  import { siteTitle } from '$lib/info'

  export let title = ''

  const finalTitle = title ? `${title} | ${siteTitle}` : siteTitle
</script>

<svelte:head>
  <title>{finalTitle}</title>
  <meta property="og:title" content={finalTitle} />
</svelte:head>

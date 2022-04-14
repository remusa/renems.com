<script>
  import { siteTitle } from '$lib/config'

  export let title = ''

  const finalTitle = title ? `${title} | ${siteTitle}` : siteTitle
</script>

<svelte:head>
  <title>{finalTitle}</title>
  <meta property="og:title" content={finalTitle} />
</svelte:head>

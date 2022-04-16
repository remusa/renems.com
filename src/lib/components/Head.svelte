<script>
  import { siteTitle } from '$lib/config'

  export let title
  export let url
  export let text

  const finalTitle = title ? `${title} | ${siteTitle}` : siteTitle

  // generated open-graph image for sharing on social media. Visit https://og-image.vercel.app/ to see more options.
  const ogImage = `https://og-image.vercel.app/**${encodeURIComponent(
    title
  )}**?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg`
</script>

<svelte:head>
  <title>{finalTitle}</title>
  <meta name="description" content={text} />
  <meta name="author" content={finalTitle} />

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content={url} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={finalTitle} />
  <meta property="og:description" content={text} />
  <meta property="og:image" content={ogImage} />

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content={finalTitle} />
  <meta property="twitter:url" content={url} />
  <meta name="twitter:title" content={finalTitle} />
  <meta name="twitter:description" content={text} />
  <meta name="twitter:image" content={ogImage} />
</svelte:head>

<script>
  import '$lib/styles/themes/prism-one-dark.css'
  export let date = '2020-07-15'
  export let title = 'MDX Test'
  export let path = '/test-mdx'
  export let author = 'RMS'
  export let tags = ['mdx']
  export let language = 'english'
  export let type = 'BLOG'
  export let published = false
</script>

<h1>Title: {title}</h1>

<p>Published: {date}</p>
<p>Path: {path}</p>
<p>Author: {author}</p>
<p>Tags: {tags}</p>
<p>Language: {language}</p>
<p>Type: {type}</p>
<p>Published: {published}</p>

<slot />

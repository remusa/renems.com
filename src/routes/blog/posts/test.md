---
path: '/test-mdx'
date: '2020-07-15'
title: 'MDX Test'
author: 'RMS'
tags: ['mdx']
language: 'english'
type: 'BLOG'
published: false
---

<script>
  import Header from '$lib/components/Header.svelte'
</script>

## Test

```js
// JavaScript goes here,
// And will be syntax-highlighted!
const test = 'hello world'

export default function Layout({ children }) {
  return <>{children}</>
}
```

<Header />

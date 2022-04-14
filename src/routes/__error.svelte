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
  export let status
  export let error
</script>

<h2>{status}</h2>

<p class="subhead">{error.message}</p>

<p><strong>Error!</strong> Try these links</p>
<ul>
  <li><a href="/">Home</a></li>
</ul>

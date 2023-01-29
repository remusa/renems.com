<script lang="ts">
  export let messages: string[] = []
  let greeting: string = messages.at(0)

  function randomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
  }

  function onClick() {
    greeting = randomMessage()
  }
</script>

<div>
  <h3>{greeting}! Thank you for visiting!</h3>
  <button on:click={onClick}> New Greeting </button>
</div>

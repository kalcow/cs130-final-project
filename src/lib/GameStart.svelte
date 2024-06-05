<script lang="ts">
  import { start, update } from "../server";
</script>

<button on:click={start}>Start game</button>
<button
  on:click={() => {
    update(0, 0);
  }}>Update game</button
>

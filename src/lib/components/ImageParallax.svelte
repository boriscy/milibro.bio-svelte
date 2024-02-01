<script lang="ts">
  import { onMount } from "svelte"

  type imgType = {
    alt: string
    src: string
    mult: number
  }
  export let images: imgType[] = []
  export let width: number
  export let height: number
  export let center = 50

  let y = 0
  let winWidth = 1
  let winHeight = 1

  type winEvent = {
    innerWidth: number
    innerHeight: number
  }

  function resize(target: any): void {
    if (target?.innerWidth && target?.innerHeight) {
      winWidth = target.innerWidth
      winHeight = target.innerHeight
    }
  }

  onMount(() => {
    winWidth = window.innerWidth
    winHeight = window.innerHeight
    console.log(winWidth, winHeight, (winWidth * 1.0) / (winHeight * 1.0))
  })

  let aspectRatio = "3/2"
  $: aspectRatio = `${winWidth}/${winHeight}`
</script>

<svelte:window
  bind:scrollY={y}
  on:resize={({ target }) => {
    if (target) resize(target)
  }}
/>

<div class="img-cont">
  {#each images as image, idx}
    <img
      class="img-{idx + 1}"
      src={image.src}
      alt={image.alt}
      style="aspect-ratio: {winWidth}/{winHeight}"
    />
  {/each}
</div>
<div class="font-bold text-gray-400">
  {winWidth} : {winHeight}
</div>

<style lang="postcss">
  .img-cont {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 700px;
    width: 100%;
    overflow: hidden;
    transform-style: preserve-3d;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: -1;
    background-color: red;
  }

  .img-1,
  .img-2,
  .img-3,
  .img-4 {
    position: absolute;
    object-fit: cover;
    z-index: -1;
  }
</style>

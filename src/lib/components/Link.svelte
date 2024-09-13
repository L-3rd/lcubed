<script lang="ts">
  export let href: string;
  export let target: string = "";

  let link: HTMLDivElement;
  let background: HTMLDivElement;
  $: {
    if (link && background) {
      background.style.height = `${link.offsetHeight}px`;
    }
  }
</script>

<div
  class="relative w-72"
  style={link ? `height: ${link.offsetHeight}px;` : ""}
>
  <div bind:this={background} class="absolute left-2 top-2 w-72 border-2 border-gray-500 bg-red-800" />
  <a {href} {target}>
    <div
      class="absolute left-0 top-0 flex items-center justify-center w-72 border-2 border-gray-500 bg-white px-3 py-2 text-center go-back"
      bind:this={link}
    >
      <slot />
    </div>
  </a>
</div>

<style>
  .go-back {
    transition: transform 0.25s;
  }
  
  .go-back:hover {
    transition: transform 0.25s;
    transform: translate(0.2rem, 0.2rem);
  }
  
  .go-back:active {
    transition: transform 0.1s;
    transform: translate(0.5rem, 0.5rem);
  }
</style>

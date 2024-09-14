<script lang="ts">
  export let href: string;
  export let target: string | null = null;
  export let borderColor: string | null = null;
  export let color: string | null = "";
  export let secondaryColor: string | null = "";

  let link: HTMLDivElement;
  let background: HTMLDivElement;
  $: {
    if (link && background) {
      background.style.height = `${link.offsetHeight}px`;
    }
  }
</script>

<div class="relative w-72" style={link ? `height: ${link.offsetHeight}px;` : ""}>
  <div
    bind:this={background}
    class="absolute left-2 top-2 w-72 border-2"
    class:bg-red-800={!secondaryColor}
    style={(secondaryColor ? `background-color: ${secondaryColor};` : "") + (borderColor ? `border-color: ${borderColor}` : "")}
  />
  <a {href} {target}>
    <div
      bind:this={link}
      class="go-back absolute left-0 top-0 flex w-72 items-center justify-center border-2 px-3 py-2 text-center"
      class:bg-white={!color}
      style={(color ? `background-color: ${color};` : "") + (borderColor ? `border-color: ${borderColor}` : "")}
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

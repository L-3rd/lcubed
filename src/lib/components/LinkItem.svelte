<script lang="ts">
  export let href: string;
  export let target: string | null = null;
  export let borderColor: string | null = null;
  export let color: string | null = "";
  export let secondaryColor: string | null = "";

  let backgroundHeight: number;
</script>

<div class="relative w-full">
  <div
    class="absolute left-2 top-2 z-0 w-full border-2"
    class:bg-red-800={!secondaryColor}
    style={`${secondaryColor ? `background-color: ${secondaryColor};` : ""}
      ${borderColor ? `border-color: ${borderColor}` : ""}; height: ${backgroundHeight + "px"};`}
  />
  <a {href} {target} class="relative">
    <div
      bind:offsetHeight={backgroundHeight}
      class="go-back relaltive flex w-full items-center justify-center border-2 px-3 py-2 text-center"
      class:bg-white={!color}
      style={`${color ? `background-color: ${color};` : ""} ${borderColor ? `border-color: ${borderColor};` : ""}`}
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

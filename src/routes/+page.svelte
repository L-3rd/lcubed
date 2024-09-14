<script lang="ts">
  import { browser } from "$app/environment";
  import { page } from "$app/stores";

  import LinkItem from "$lib/components/LinkItem.svelte";
  import { dataFromSearchParams } from "$lib/types";

  let links: HTMLDivElement;
  let data = dataFromSearchParams($page.url.searchParams);
  $: {
    if (browser) {
      document.documentElement.style.setProperty("--background", data.backgroundCss || "#ffffff");
      document.documentElement.style.setProperty(
        "--background-opacity",
        (data.backgroundOpacity as string) || "1",
      );
    }
  }
</script>

<div
  class="fake-background relative flex min-h-screen w-full flex-col items-center justify-center gap-7 p-3 min-[900px]:flex-row min-[900px]:gap-20"
>
  {#if data.header?.image || data.header?.text}
    <div class="section-width flex items-center justify-center text-center">
      <div
        class="border-2 px-6 py-5 tiny:px-11 min-[900px]:py-11"
        style={`border-color: ${data.borderColor};`}
      >
        {#if data.header.image}
          <img src={data.header.image} alt="Header" class="max-w-full" />
        {/if}
        {#if data.header.text}
          <p class="w-full text-2xl">{data.header.text}</p>
        {/if}
      </div>
    </div>
  {/if}
  <div bind:this={links} class="section-width flex items-center justify-center">
    <div
      class="flex w-full flex-col items-center justify-center border-2 px-6 py-5 tiny:px-11 min-[900px]:py-11 [&>*:not(:last-child)]:mb-5"
      style={`border-color: ${data.borderColor}`}
    >
      {#if data.links}
        {#each data.links as link}
          <LinkItem
            href={link.href}
            target={data.embed ? "_parent" : null}
            borderColor={data.borderColor}
            color={data.color}
            secondaryColor={data.secondaryColor}
          >
            {link.text}
          </LinkItem>
        {/each}
      {/if}
    </div>
  </div>
</div>

<style lang="scss">
  .fake-background::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: var(--background);
    opacity: var(--background-opacity);
    z-index: -1;
  }

  .section-width {
    width: 80%;

    @media (min-width: 550px) {
      width: 60%;
    }

    @media (min-width: 900px) {
      width: 33.333%;
    }

    @media (min-width: 1536px) {
      width: 25%;
    }
  }
</style>

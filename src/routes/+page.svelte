<script lang="ts">
  import { browser } from "$app/environment";
  import { page } from "$app/stores";

  import LinkItem from "$lib/components/LinkItem.svelte";
  import { dataFromSearchParams } from "$lib/types";

  let data = dataFromSearchParams($page.url.searchParams);
  $: {
    if (browser) {
      document.documentElement.style.setProperty("--background", data.backgroundCss || "#ffffff");
      document.documentElement.style.setProperty("--background-opacity", data.backgroundOpacity as string || "1");
    }
  }
</script>

<div class="fake-background flex relative min-h-screen w-full justify-center">
  <div class="flex w-1/3 items-center justify-center">
    <div
      class="flex h-fit flex-col items-center justify-center p-11 border-2 [&>*:not(:last-child)]:mb-5"
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

<style>
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
</style>

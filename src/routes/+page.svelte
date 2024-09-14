<script lang="ts">
  import { browser } from "$app/environment";
  import { page } from "$app/stores";

  import LinkItem from "$lib/components/LinkItem.svelte";
  import { dataFromSearchParams } from "$lib/types";

  let data = dataFromSearchParams($page.url.searchParams);
  $: {
    if (browser) {
      document.documentElement.style.setProperty("--background", data.backgroundCss || "#ffffff");
    }
  }
</script>

<div class="flex min-h-screen w-full justify-center">
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

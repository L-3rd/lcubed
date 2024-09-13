<script lang="ts">
  import { page } from "$app/stores";

  import Link from "$lib/components/Link.svelte";
  import { onMount } from "svelte";

  let embed = $page.url.searchParams.get("embed") != null;
  let formattedLinks: Array<Link>;
  $: {
    if (formattedLinks == null) formattedLinks = [];

    const links = $page.url.searchParams.get("links");
    if (links) {
      links.split(",").forEach((set) => {
        const split = set.split("*");
        if (split.length === 2) {
          formattedLinks.push({ href: split[1], text: split[0] });
        }
      });
    }
  }

  onMount(() => {
    document.documentElement.style.setProperty("--background", "#ffffff");
  });

  interface Link {
    href: string;
    text: string;
  }
</script>

<div class="flex w-full min-h-screen justify-center">
  <div class="flex items-center justify-center w-1/3">
    <div class="flex flex-col items-center justify-center h-fit p-11 border border-gray-700 [&>*:not(:last-child)]:mb-5">
      {#each formattedLinks as link}
          <Link href={link.href} target={embed ? "_parent" : ""}>{link.text}</Link>
      {/each}
    </div>
  </div>
</div>

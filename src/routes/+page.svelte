<script lang="ts">
  import { page } from "$app/stores";

  import Link from "$lib/components/Link.svelte";
  import { onMount } from "svelte";

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

<div class="flex w-full justify-center">
  <ul class="flex w-1/3 flex-col items-center">
    {#each formattedLinks as link}
      <li class="mb-5 flex-grow">
        <Link href={link.href}>{link.text}</Link>
      </li>
    {/each}
  </ul>
</div>

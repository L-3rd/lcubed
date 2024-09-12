<script lang="ts">
  import { page } from "$app/stores";

  import Link from "$lib/components/Link.svelte";

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

  interface Link {
    href: string;
    text: string;
  }
</script>

<div class="flex w-full justify-center">
  <ul class="flex flex-col items-center w-1/3">
    {#each formattedLinks as link}
      <li class="flex-grow mb-5">
        <Link href={link.href}>{link.text}</Link>
      </li>
    {/each}
  </ul>
</div>

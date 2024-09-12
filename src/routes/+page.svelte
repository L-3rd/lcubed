<script lang="ts">
  import { page } from "$app/stores";

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

<ul>
  {#each formattedLinks as link}
    <li>
      <a href={link.href}>
        {link.text}
      </a>
    </li>
  {/each}
</ul>

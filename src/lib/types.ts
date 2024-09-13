interface Data {
  backgroundCss?: string | null;
  color?: string | null;
  embed?: boolean;
  links?: Array<Link>;
  secondaryColor?: string | null;
}

interface Link {
  href: string;
  text: string;
}

export function dataFromSearchParams(searchParams: URLSearchParams) {
  const data: Data = {
    backgroundCss: searchParams.get("backgroundCss"),
    color: searchParams.get("color"),
    embed: searchParams.get("embed") != null,
    links: [],
    secondaryColor: searchParams.get("secondaryColor"),
  };

  const links = searchParams.get("links");
  if (links) {
    links.split(",").forEach((set) => {
      const split = set.split("*");
      if (split.length === 2) {
        data.links?.push({ href: split[1], text: split[0] });
      }
    });
  }

  return data;
}

import { client } from "@/sanity/lib/client";

export async function getBlogData(slug: string) {
  const query = `
    *[_type == "post" && slug.current =="${slug}"]
    {
      title,
      author->{name},
      "slugCurrent": slug.current,
      "categoryTitle": categories[]->title,
      "imagePost": mainImage.asset._ref,
      "contentPost": body,
      publishedAt,
    }[0]`;

  const data = await client.fetch(query);
  return data;
}

export async function getHomeData() {
  const query = `*[_type == "post"] | order(_updatedAt desc)
  {
    _id,
    title,
    author->{name},
    "slugCurrent": slug.current,
    "categoryTitle": categories[]->title,
    "imagePost": mainImage.asset._ref,
    description,
    "updatedAt": _updatedAt
  }`;

  const posts = await client.fetch(query);
  return posts;
}

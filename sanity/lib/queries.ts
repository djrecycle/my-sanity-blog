import { groq } from "next-sanity";

export const POSTS_QUERY = groq`*[_type == "post"] | order(_updatedAt desc)
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

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug]{
    title,
    "author": author->{name},
    "slugCurrent": slug.current,
    "categoryTitle": categories[]->title,
    "imagePost": mainImage.asset._ref,
    "contentPost": body,
    publishedAt,
  }[0]`;

export const POSTS_QUERYY = groq`*[_type == "post" && defined(slug)]`;

export const POST_QUERYY = groq`*[_type == "post" && slug.current == $slug][0]`;

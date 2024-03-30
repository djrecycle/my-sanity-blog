import { QueryParams, SanityDocument } from "next-sanity";
import { draftMode } from "next/headers";
import { loadQuery } from "@/sanity/lib/store";
import { POSTS_QUERY, POST_QUERY } from "@/sanity/lib/queries";
import Blog from "@/components/blog/Blog";
import BlogPreview from "@/components/client/BlogPreview";
import { client } from "@/sanity/lib/client";

export const revalidate = 30; // revalidate at most 30 seconds

export async function generateStaticParams() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY);

  return posts.map((post) => ({
    slug: post.slugCurrent,
  }));
}

export default async function BlogArticle({ params }: { params: QueryParams }) {
  // data
  const initial = await loadQuery<SanityDocument>(POST_QUERY, params, {
    perspective: draftMode().isEnabled ? "previewDrafts" : "published",
  });

  return draftMode().isEnabled ? (
    <BlogPreview initial={initial} params={params} />
  ) : (
    // <>dadadadad</>
    <Blog post={initial.data} />
  );
}

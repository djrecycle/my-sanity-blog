import HomepageMain from "@/components/blog/HomepageMain";
import { draftMode } from "next/headers";
import { SanityDocument } from "next-sanity";
import { loadQuery } from "@/sanity/lib/store";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import BlogsPreview from "@/components/client/BlogsPreview";

export const revalidate = 30;

const homeMetadata = {
  title: "Home | My Blog",
  description: "My Blog",
};

export default async function Home() {
  const initial = await loadQuery<SanityDocument[]>(
    POSTS_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );
  return draftMode().isEnabled ? (
    <>
      <title>{homeMetadata.title}</title>
      <BlogsPreview initial={initial} />
    </>
  ) : (
    <>
      <title>{homeMetadata.title}</title>
      <HomepageMain posts={initial.data} />
    </>
  );
}

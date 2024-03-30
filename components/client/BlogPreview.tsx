"use client";

import { POST_QUERY } from "@/sanity/lib/queries";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { QueryParams, SanityDocument } from "next-sanity";
import Blog from "@/components/blog/Blog";

export default function BlogPreview({
  initial,
  params,
}: {
  initial: QueryResponseInitial<SanityDocument>;
  params: QueryParams;
}) {
  const { data } = useQuery<SanityDocument | null>(POST_QUERY, params, {
    initial,
  });

  return data ? (
    <Blog post={data} />
  ) : (
    <div className="bg-red-200">Post not found</div>
  );
}

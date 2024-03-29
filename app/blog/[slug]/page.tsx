import React from "react";
import { fullBlog } from "@/lib/interface";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import NavbarHeader from "@/components/blog/NavbarHeader";
import { Badge } from "@/components/ui/badge";
import ArticleBlog from "@/components/blog/ArticleBlog";
import ContentImageComponent from "@/components/blog/ContentImageComponent";
import { getBlogData } from "@/components/blog/GetBlogData";

export const revalidate = 30; // revalidate at most 30 seconds

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  // data
  const data: fullBlog = await getBlogData(params.slug);

  // Title Blog
  const blogMetadata = {
    title: `My Blog | ${data.slugCurrent}`,
  };

  // Component Image in article
  const components = {
    types: {
      image: ContentImageComponent,
    },
  };

  // const componentsAlign = {
  //   types: {
  //     p: textAlignLeft || textAlignCenter || textAlignRight || textAlignJustify,
  //   }
  // }

  return (
    <>
      <title>{blogMetadata.title}</title>

      <NavbarHeader />
      <div className="md:w-lvw m-auto grid  w-full  mt-0 dark:bg-gray-800 font-text transition-all">
        <main className="box-border pt-24 w-full md:max-w-[700px] justify-self-center text-wrap px-7 py-0 dark:bg-gray-950 shadow-2xl rounded-b-lg border-solid border-gray-300 border-x-2">
          <h1>
            <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
              My-Blog
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
              {data.title}
            </span>
          </h1>
          <div className="flex pt-3 justify-between">
            <i className="text-gray-400">By.{data.author.name}</i>
            <div className="flex">
              {data.categoryTitle.map((category: string, index: number) => (
                <Badge key={index} className="w-fit dark:bg-red-800 ml-2">
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          <Image
            src={data.imagePost ? urlForImage(data.imagePost).toString() : ""}
            width={800}
            height={800}
            alt="Title Image"
            priority
            className="rounded-lg mt-8 border"
          />

          <ArticleBlog>
            <PortableText value={data.contentPost} components={components} />
          </ArticleBlog>
        </main>
      </div>
    </>
  );
}

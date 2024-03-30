import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { SanityDocument } from "next-sanity";
import NavbarHeader from "@/components/blog/NavbarHeader";
import { Badge } from "@/components/ui/badge";
import ArticleBlog from "@/components/blog/ArticleBlog";
import { urlForImage } from "@/sanity/lib/image";
import ContentImageComponent from "@/components/blog/ContentImageComponent";

export default function Blog({ post }: { post: SanityDocument }) {
  console.log(post);
  const {
    title,
    author,
    slugCurrent,
    categoryTitle,
    imagePost,
    contentPost,
    publishedAt,
  } = post;

  const components = {
    types: {
      image: ContentImageComponent,
    },
  };

  const blogMetadata = {
    title: `My Blog | ${slugCurrent}`,
  };

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
              {title}
            </span>
          </h1>
          <div className="flex pt-3 justify-between">
            <i className="text-gray-400">By.{author.name}</i>
            <div className="flex">
              {categoryTitle.map((category: string, index: number) => (
                <Badge key={index} className="w-fit dark:bg-red-800 ml-2">
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          <Image
            src={imagePost ? urlForImage(imagePost).toString() : ""}
            width={800}
            height={800}
            alt="Title Image"
            priority
            className="rounded-lg mt-8 border"
          />

          <ArticleBlog>
            <PortableText value={contentPost} components={components} />
          </ArticleBlog>
        </main>
      </div>
    </>
  );
}

import React from "react";
// import { simpleBlogCard } from "@/lib/interface";
// import { getHomeData } from "@/components/blog/GetBlogData";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import dateFormat from "dateformat";
import { FaArrowRight } from "react-icons/fa";
import { urlForImage } from "@/sanity/lib/image";
import { SanityDocument } from "next-sanity";
import NavbarHeader from "./NavbarHeader";

export default function HomepageMain({ posts }: { posts: SanityDocument[] }) {
  console.log(posts);
  // const posts: simpleBlogCard[] = await getHomeData();
  return (
    <>
      <NavbarHeader />
      <main className="md:w-lvw md:h-screen">
        <div className="pt-24 flex justify-center flex-col md:flex-row md:flex-wrap md:items-stretch md:gap-3 p-4">
          {posts?.length > 0 ? (
            posts.map((post) => (
              <Card
                key={post._id}
                className="flex flex-col w-[100%] md:w-[30%] shadow-xl p-4 rounded-xl my-2"
              >
                <CardHeader className="p-4">
                  <div className="flex justify-end items-end">
                    {post.categoryTitle.map(
                      (category: string, index: number) => (
                        <Badge
                          key={index}
                          className="w-fit dark:bg-red-800 ml-2"
                        >
                          {category}
                        </Badge>
                      )
                    )}
                  </div>
                  <Image
                    src={
                      post.imagePost
                        ? urlForImage(post.imagePost).toString()
                        : ""
                    }
                    alt={post.title}
                    width={300}
                    height={300}
                    className="rounded-lg shadow-xl w-[100%] md:w-[30%]-min h-[240px]"
                  />
                </CardHeader>
                <CardContent>
                  <h1 className="text-3xl pt-4 font-bold">{post.title}</h1>
                  <i className="text-gray-500 text-sm">by.{post.author.name}</i>
                  <p className="text-wrap">{post.description}</p>
                </CardContent>
                <CardFooter className="flex flex-row justify-between items-between content-between">
                  <i className="text-sm dark:text-gray-500 ">
                    Update: {dateFormat(post.updatedAt, "mmmm dS, yyyy")}
                  </i>
                  <Link href={`/blog/${post.slugCurrent}`}>
                    <FaArrowRight className="text-3xl dark:text-gray-500 hover:text-gray-200 dark:hover:text-gray-900" />
                  </Link>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="p-4 text-red-500">No posts found</div>
          )}
        </div>
      </main>
    </>
  );
}

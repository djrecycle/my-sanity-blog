import React from "react";

function ArticleBlog(props: any) {
  return (
    <article className="prose prose-img:rounded-xl prose-img:md:max-w-[600px] prose-figure:flex pt-5 prose-figure:flex-col prose-figure:mx-auto prose-figure:md:ms-0 prose-headings:underline prose-headings:underline-offset-4 prose-headings:dark:text-white prose-p:dark:text-gray-400 prose-strong:text-2xl prose-strong:font-bold prose-strong:dark:text-white prose-figcaption:text-center prose-figcaption:italic mb-24 prose-ul:text-xl prose-blockquote:text-gray-500 prose-blockquote:dark:text-gray-400  prose-blockquote:dark:bg-gray-800 prose-blockquote:bg-gray-100 prose-blockquote:w-fit prose-blockquote:p-2">
      {props.children}
    </article>
  );
}

export default ArticleBlog;

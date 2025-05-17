import React, { FC } from "react";

const BlogSection: FC = () => {
  return (
    <section className="container flex flex-col items-center">
      <p className="text-amberOrange font-vibes text-[32px]">Blog Post</p>
      <h1 className="font-bold text-white leading-none text-[48px] ">
        <span className="text-amberOrange">La</span>test news & blog
      </h1>
    </section>
  );
};

export default BlogSection;

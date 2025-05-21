import React, { FC } from "react";
import BlogComponent from "@/components/home-page/BlogComponent";
import { Carousel } from "flowbite-react";

import Burger from "@/images/home-page/why-choose-us/burger-image.svg";
const BlogSection: FC = () => {
  return (
    <section className="container flex flex-col items-center my-[50px] space-y-[15px] lg:space-y-[30px] lg:my-[70px]">
      <p className="text-amberOrange font-vibes text-[32px]">Blog Post</p>
      <h1 className="font-bold text-white leading-none text-[48px] text-center">
        <span className="text-amberOrange">La</span>test news & blog
      </h1>

      {/*змінити на справжні дані*/}
      <div className="hidden justify-between w-full gap-[20px] lg:flex">
        <BlogComponent
          imageSrc={Burger}
          imageAlt="vfbdf"
          postDate="10 February 2022"
          title="Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis"
        />

        <BlogComponent
          imageSrc={Burger}
          imageAlt="vfbdf"
          postDate="10 February 2022"
          title="Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis"
        />

        <BlogComponent
          imageSrc={Burger}
          imageAlt="vfbdf"
          postDate="10 February 2022"
          title="Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis"
        />
      </div>

      <div className="max-w-[500px] lg:hidden">
        <Carousel slide={false} indicators={true}>
          <BlogComponent
            key={1}
            imageSrc={Burger}
            imageAlt="vfbdf"
            postDate="10 February 2022"
            title="Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis"
          />

          <BlogComponent
            key={2}
            imageSrc={Burger}
            imageAlt="vfbdf"
            postDate="10 February 2022"
            title="Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis"
          />

          <BlogComponent
            key={3}
            imageSrc={Burger}
            imageAlt="vfbdf"
            postDate="10 February 2022"
            title="Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis"
          />
        </Carousel>
      </div>
    </section>
  );
};

export default BlogSection;

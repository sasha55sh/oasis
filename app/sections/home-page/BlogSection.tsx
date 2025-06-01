import React, { FC } from "react";
import BlogComponent from "@/components/home-page/BlogComponent";
import { Carousel } from "flowbite-react";

import Burger from "@/images/home-page/why-choose-us/burger-image.svg";

const blogCards = [
  {
    src: Burger,
    alt: "ferferfre",
    date: "10 February 2022",
    title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
  },
  {
    src: Burger,
    alt: "ferferfre",
    date: "10 February 2022",
    title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
  },
  {
    src: Burger,
    alt: "ferferfre",
    date: "10 February 2022",
    title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
  },
];
const BlogSection: FC = () => {
  return (
    <section className="container flex flex-col items-center py-[50px] space-y-[15px] lg:space-y-[30px] lg:py-[70px]">
      <p className="text-amberOrange font-vibes text-[32px]">Blog Post</p>
      <h1 className="font-bold text-white leading-none text-[48px] text-center">
        <span className="text-amberOrange">La</span>test news & blog
      </h1>

      {/*змінити на справжні дані*/}
      <div className="hidden justify-between w-full gap-[20px] lg:flex">
        {blogCards.map((card, index) => (
          <BlogComponent
            key={index}
            imageSrc={card.src}
            imageAlt={card.alt}
            postDate={card.date}
            title={card.title}
          />
        ))}
      </div>

      <div className="max-w-[700px] max-h-[800px] lg:hidden">
        <Carousel slide={false} indicators={true}>
          {blogCards.map((card, index) => (
            <BlogComponent
              key={index}
              imageSrc={card.src}
              imageAlt={card.alt}
              postDate={card.date}
              title={card.title}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default BlogSection;

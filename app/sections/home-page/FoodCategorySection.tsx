import React, { FC } from "react";
import SaleCard from "@/components/home-page/SaleCardComponent";
import { Carousel } from "flowbite-react";

import ChickenRoll from "@/images/home-page/food-category/chicken-roll.svg";
import Burger from "@/images/home-page/food-category/burger.svg";
import Salad from "@/images/home-page/food-category/salad.svg";
import Donuts from "@/images/home-page/food-category/donuts.svg";

const cardsData = [
  {
    title: "Breakfast",
    discount: "Save 30%",
    src: ChickenRoll,
    alt: "chicken roll",
    href: "/shop",
  },
  {
    title: "Main",
    discount: "Save 10%",
    src: Burger,
    alt: "burger",
    href: "/shop",
  },
  {
    title: "Bowl",
    discount: "Save 20%",
    src: Salad,
    alt: "salad",
    href: "/shop",
  },
  {
    title: "Dessert",
    discount: "Save 5%",
    src: Donuts,
    alt: "donuts",
    href: "/shop",
  },
];
const FoodCategoryComponent: FC = () => {
  return (
    <section className="container flex flex-col space-y-[15px] items-center my-[50px] lg:my-[70px] lg:space-y-[30px]">
      <p className="text-amberOrange font-vibes text-[32px]">Food category</p>
      <h1 className="font-bold leading-none text-[42px] text-white text-center lg:text-[60px]">
        <span className="text-amberOrange">Ch</span>oose food item
      </h1>

      <div className="hidden justify-between gap-[20px] lg:flex">
        {cardsData.map((card, index) => (
          <SaleCard
            key={index}
            discount={card.discount}
            title={card.title}
            imageScr={card.src}
            imageAlt={card.alt}
            href={card.href}
          />
        ))}
      </div>

      <div className="max-w-[500px] mx-auto lg:hidden">
        <Carousel slide={false} indicators={true} draggable>
          {cardsData.map((card, index) => (
            <SaleCard
              key={index}
              discount={card.discount}
              title={card.title}
              imageScr={card.src}
              imageAlt={card.alt}
              href={card.href}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default FoodCategoryComponent;

import React from "react";
import SaleCard from "@/components/home-page/SaleCardComponent";
import ChickenRoll from "@/images/home-page/food-category/chicken-roll.svg";
import Burger from "@/images/home-page/food-category/burger.svg";
import Salad from "@/images/home-page/food-category/salad.svg";
import Donuts from "@/images/home-page/food-category/donuts.svg";

const cardsData = [
  {
    title: "diet food",
    discount: "save 30%",
    src: ChickenRoll,
    alt: "chicken roll",
  },
  { title: "fast food", discount: "save 10%", src: Burger, alt: "burger" },
  { title: "healthy food", discount: "save 20%", src: Salad, alt: "salad" },
  { title: "baking", discount: "save 5%", src: Donuts, alt: "donuts" },
];
const FoodCategoryComponent = () => {
  return (
    <section className="container flex flex-col space-y-[20px] items-center">
      <p className="text-amberOrange font-vibes text-[32px]">Food Category</p>
      <h1 className="font-bold leading-none text-[48px] text-white">
        <span className="text-amberOrange">Ch</span>oose food Item
      </h1>
      <div className="flex justify-between">
        {cardsData.map((card, index) => (
          <SaleCard
            key={index}
            discount={card.discount}
            title={card.title}
            imageScr={card.src}
            imageAlt={card.alt}
          />
        ))}
      </div>
    </section>
  );
};

export default FoodCategoryComponent;

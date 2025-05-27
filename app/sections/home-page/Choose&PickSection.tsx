import React, { FC } from "react";
import Image from "next/image";

import Salad from "@/images/home-page/choose-and-pick/asparagus.svg";

const foodTitles = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Dessert",
  "Drink",
  "Snack",
  "Suops",
];

const ChooseAndPickSection: FC = () => {
  return (
    <section className="container flex flex-col my-[50px] items-center space-y-[15px] lg:space-y-[30px] lg:my-[70px]">
      <p className="text-amberOrange font-vibes text-[32px]">Choose & pick</p>
      <h1 className="font-bold text-white leading-none text-[48px]">
        <span className="text-amberOrange">Fr</span>om our menu
      </h1>

      <div className="flex justify-between gap-[50px]">
        {foodTitles.map((title, index) => (
          <p
            className="text-[20px] text-white hover:text-amberOrange"
            key={index}
          >
            {title}
          </p>
        ))}
      </div>

      <div className="grid grid-rows-4 grid-cols-3">
        <Image
          src={Salad}
          alt="asparagula salad"
          className="row-span-4 col-span-1"
        />
      </div>
    </section>
  );
};

export default ChooseAndPickSection;

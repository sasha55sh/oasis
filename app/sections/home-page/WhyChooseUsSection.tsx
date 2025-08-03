import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import Taco from "@/images/home-page/why-choose-us/taco-image.svg";
import Burger from "@/images/home-page/why-choose-us/burger-image.svg";
import Chicken from "@/images/home-page/why-choose-us/chicken-image.svg";
import Cheeseburger from "@/images/home-page/why-choose-us/cheeseburger-image.svg";
import Potato from "@/images/home-page/why-choose-us/potato-image.svg";
import Fish from "@/images/home-page/why-choose-us/fish-image.svg";
import BurgerIcon from "@/images/home-page/why-choose-us/burger.svg";
import CookieIcon from "@/images/home-page/why-choose-us/сookie.svg";
import WineIcon from "@/images/home-page/why-choose-us/wine.svg";

const buttonsItems = [
  { src: BurgerIcon, alt: "Burger icon", title: "Breakfast", href: "/shop" },
  { src: CookieIcon, alt: "Cookie icon", title: "Dessert", href: "/shop" },
  { src: WineIcon, alt: "Wine icon", title: "Main", href: "/shop" },
];

const WhyChooseUsSection = () => {
  return (
    <section className="container flex flex-col justify-between my-[50px] lg:my-[70px] lg:gap-[50px] lg:flex-row xl:gap-0">
      <div className="hidden grid-cols-3 auto-rows-auto gap-[10px] max-w-[640px] scale-[95%] lg:grid">
        <Image
          src={Taco}
          alt="Tacos"
          className="col-span-2 row-span-1 justify-self-end place-self-end duration-300 hover:scale-105 "
        />
        <div className="flex justify-center items-end">
          <Image
            src={Burger}
            alt="Burger"
            className="row-span-1 duration-300 hover:scale-105"
          />
        </div>
        <Image
          src={Chicken}
          alt="Chicken strips"
          className="row-span-1 duration-300 hover:scale-105"
        />
        <Image
          src={Cheeseburger}
          alt="Cheesy burger"
          className="duration-300 hover:scale-105"
        />
        <div className="flex flex-col gap-4 items-center">
          <Image
            src={Potato}
            alt="Burger with fries"
            className="rounded-xl w-[90%] duration-300 hover:scale-105"
          />
          <Image
            src={Fish}
            alt="Salmon plate"
            className="rounded-xl w-[90%] duration-300 hover:scale-105"
          />
        </div>
      </div>

      <div className="flex flex-col items-center text-white space-y-[15px] my-[50px] lg:my-[70px] lg:space-y-[30px] lg:items-start">
        <p className="text-amberOrange font-vibes text-[32px]">Why Choose us</p>
        <h1 className="font-bold leading-none max-w-[550px] text-[42px] text-center lg:text-[60px] lg:text-left lg:max-w-[450px] xl:max-w-[550px]">
          <span className="text-amberOrange">Ex</span>tra ordinary taste and
          experienced
        </h1>
        <p className="text-center max-w-[550px] lg:my-[50px] lg:text-left lg:max-w-[450px] xl:max-w-[550px]">
          At Oasis, we blend passion with perfection to create dishes that
          delight your senses. Every recipe is crafted with the finest
          ingredients, ensuring a burst of authentic flavors in every bite. Our
          commitment to quality and exceptional service makes every visit
          unforgettable.
        </p>
        <div className="flex space-x-[20px]">
          {buttonsItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-[10px] justify-center"
            >
              <Link
                className="w-[100px] h-[100px] rounded-xl bg-amberOrange duration-300 hover:scale-105 flex items-center justify-center"
                href={item.href}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  className="max-w-[70%] max-h-[70%]"
                />
              </Link>
              <span>{item.title}</span>
            </div>
          ))}
        </div>

        <div className="flex">
          <div className="bg-amberOrange w-[10px] rounded-l-lg"></div>
          <div className="flex items-center bg-white py-[15px] px-[34px] text-black rounded-r-lg">
            <h2 className="text-amberOrange text-[48px] font-bold">30+</h2>
            <div className="leading-tight ml-[20px]">
              <span className="text-[20px]">Years of</span>
              <span className="block text-[24px] font-bold">Experienced</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

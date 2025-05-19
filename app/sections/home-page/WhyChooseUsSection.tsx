import React, { FC } from "react";
import Image from "next/image";

import tacoImage from "@/images/home-page/why-choose-us/taco-image.svg";
import burgerImage from "@/images/home-page/why-choose-us/burger-image.svg";
import chickenImage from "@/images/home-page/why-choose-us/chicken-image.svg";
import cheeseburgerImage from "@/images/home-page/why-choose-us/cheeseburger-image.svg";
import potatoImage from "@/images/home-page/why-choose-us/potato-image.svg";
import fishImage from "@/images/home-page/why-choose-us/fish-image.svg";
import burgerIcon from "@/images/vectors/burger.svg";
import cookieIcon from "@/images/vectors/сookie.svg";
import wineIcon from "@/images/vectors/wine.svg";

const buttonsItems = [
  { src: burgerIcon, alt: "burger-icon", title: "Fast Food" },
  { src: cookieIcon, alt: "cookie-icon", title: "Lunch" },
  { src: wineIcon, alt: "wine-icon", title: "Dinner" },
];

const WhyChooseUsSection = () => {
  return (
    <section className="container flex flex-col justify-between my-[50px] lg:my-[70px] lg:flex-row">
      <div className="hidden grid-cols-3 auto-rows-auto gap-[10px] max-w-[640px] scale-[95%] lg:grid">
        
        <Image
          src={tacoImage}
          alt="Tacos"
          className="col-span-2 row-span-1 justify-self-end place-self-end duration-300 hover:scale-105 "
        />

        <div className="flex justify-center items-end">
          <Image
            src={burgerImage}
            alt="Burger"
            className="row-span-1 duration-300 hover:scale-105"
          />
        </div>

        <Image
          src={chickenImage}
          alt="Chicken Strips"
          className="row-span-1 duration-300 hover:scale-105"
        />

        <Image
          src={cheeseburgerImage}
          alt="Cheesy Burger"
          className="duration-300 hover:scale-105"
        />

        <div className="flex flex-col gap-4 items-center">
          <Image
            src={potatoImage}
            alt="Burger with fries"
            className="rounded-xl w-[90%] duration-300 hover:scale-105"
          />
          <Image
            src={fishImage}
            alt="Salmon plate"
            className="rounded-xl w-[90%] duration-300 hover:scale-105"
          />
        </div>
      </div>

      <div className="flex flex-col items-center text-white space-y-[30px] lg:items-start">
        <p className="text-amberOrange font-vibes text-[32px]">Why Choose us</p>
        <h1 className="font-bold leading-none max-w-[550px] text-[42px] text-center lg:text-[60px] lg:text-left lg:max-w-[450px] xl:max-w-[550px]">
          <span className="text-amberOrange">Ex</span>tra ordinary taste and
          experienced
        </h1>
        <p className="text-center max-w-[550px] lg:my-[50px] lg:text-left lg:max-w-[450px] xl:max-w-[550px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequata
        </p>
        <div className="flex space-x-[20px]">
          {buttonsItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-[10px]"
            >
              <button className="w-[100px] h-[100px] rounded-xl bg-amberOrange duration-300 hover:scale-105">
                <Image src={item.src} alt={item.alt} className="m-auto" />
              </button>
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

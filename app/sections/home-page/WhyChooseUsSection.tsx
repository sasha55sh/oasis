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
    <section className="container flex flex-col justofy-between lg:flex-row">
      {/* <div className="grid grid-cols-3 grid-rows-3 place-content-center max-w-[650px] gap-[10px]">
        <Image
          src={tacoImage}
          alt="tacos"
          className="duration-300 hover:scale-105"
        />
        <Image
          src={burgerImage}
          alt="burger"
          className="duration-300 hover:scale-105"
        />
        <Image
          src={chickenImage}
          alt="chicken"
          className="row-span-2 row-start-2 duration-300 hover:scale-105"
        />
        <Image
          src={cheeseburgerImage}
          alt="cheeseburger"
          className="row-start-2 duration-300 hover:scale-105"
        />
        <Image
          src={potatoImage}
          alt="potato"
          className="row-start-2 duration-300 hover:scale-105"
        />
        <Image
          src={fishImage}
          alt="fish"
          className="col-start-3 row-start-3 duration-300 hover:scale-105"
        />
      </div> */}

<div className="grid grid-cols-4 grid-rows-4 place-items-center max-w-[650px] max-h-[700px] gap-[10px]">
        <Image
          src={tacoImage}
          alt="tacos"
          className="duration-300 hover:scale-105 col-span-2"
        />
        <Image
          src={burgerImage}
          alt="burger"
          className="duration-300 hover:scale-105 col-span-2 col-start-3"
        />
        {/* <Image
          src={chickenImage}
          alt="chicken"
          className="row-span- row-start- duration-300 hover:scale-105"
        />
        <Image
          src={cheeseburgerImage}
          alt="cheeseburger"
          className="row-start- duration-300 hover:scale-105"
        />
        <Image
          src={potatoImage}
          alt="potato"
          className="row-start- duration-300 hover:scale-105"
        />
        <Image
          src={fishImage}
          alt="fish"
          className="col-start- row-start- duration-300 hover:scale-105"
        /> */}
      </div>

      <div className="flex flex-col justify-center items-center lg:items-start text-white space-y-[30px]">
        <p className="text-amberOrange font-vibes text-[32px]">Why Choose us</p>
        <h1 className="font-bold lg:text-[60px] leading-none max-w-[550px] text-[42px] text-center lg:text-left lg:max-w-[450px] xl:max-w-[550px]">
          <span className="text-amberOrange">Ex</span>tra ordinary taste and
          experienced
        </h1>
        <p className="lg:my-[50px] text-center lg:text-left lg:max-w-[450px] xl:max-w-[550px]">
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

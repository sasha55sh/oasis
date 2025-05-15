import React, { FC } from "react";
import Image from "next/image";

import Button from "@/components/ButtonComponent";
import listIcon from "@/images/vectors/list-image.svg";
import image1 from "@/images/home-page/about-us/image-1.svg";
import image2 from "@/images/home-page/about-us/image-2.svg";
import image3 from "@/images/home-page/about-us/image-3.svg";

const listItems = [
  "Lacus nisi, et ac dapibus sit eu velit in consequat",
  "Quisque diam pellentesque bibendum non dui volutpat fringilla",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
];

const AboutUsSection: FC = () => {
  return (
    <section className="container flex flex-col justify-between lg:flex-row">
      <div className="flex flex-col justify-center items-center lg:items-start text-white space-y-[30px]">
        <p className="text-amberOrange font-vibes text-[32px]">About us</p>
        <h1 className="font-bold lg:text-[60px] leading-none max-w-[550px] text-[42px] text-center lg:text-left lg:max-w-[450px] xl:max-w-[550px]">
          <span className="text-amberOrange">We </span>create the best foody
          product
        </h1>
        <p className="lg:my-[50px] text-center lg:text-left lg:max-w-[450px] xl:max-w-[550px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequata
        </p>
        <ul className="list-none">
          {listItems.map((item, index) => (
            <li key={index} className="flex">
              <Image src={listIcon} alt="list-icon" className="m-[5px]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <Button text="Read more" fullWidth className="max-w-[190px]" />
      </div>
      <div className="hidden md:grid grid-cols-2 gap-[20px] place-content-center">
        <Image src={image1} alt="egg-toast" className="col-span-2" /> 
        <Image src={image2} alt="salad" />
        <Image src={image3} alt="salat-toast" />
      </div>
    </section>
  );
};

export default AboutUsSection;

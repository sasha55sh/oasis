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
    <section className="container flex flex-col justify-between my-[50px] lg:my-[70px] lg:gap-[50px] lg:flex-row xl:gap-0">
      <div className="flex flex-col justify-center items-center text-white space-y-[15px] lg:space-y-[30px] lg:items-start">
        <p className="text-amberOrange font-vibes text-[32px]">About us</p>
        <h1 className="font-bold leading-none max-w-[550px] text-[42px] text-center lg:text-left lg:max-w-[450px] lg:text-[60px] xl:max-w-[550px]">
          <span className="text-amberOrange">We </span>create the best foody
          product
        </h1>
        <p className="text-center max-w-[550px] lg:my-[50px] lg:text-left lg:max-w-[450px] xl:max-w-[550px]">
          At Oasis, we craft flavors that bring joy to every bite. Our passion
          for quality and taste drives us to select the finest ingredients and
          prepare dishes with care. From classic favorites to bold new
          creations, every meal is made to satisfy and inspire. Enjoy the
          perfect harmony of taste and freshness with us
        </p>
        <ul className="list-none">
          {listItems.map((item, index) => (
            <li key={index} className="flex">
              <Image src={listIcon} alt="list-icon" className="m-[5px]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <Button
          text="Read more"
          fullWidth
          className="max-w-[190px]"
          tag="a"
          href="/about-us"
        />
      </div>
      <div className="hidden grid-cols-2 gap-[20px] mt-[30px] max-w-[660px] content-center mx-auto md:grid xl:ml-[90px]">
        <Image src={image1} alt="egg-toast" className="col-span-2" />
        <Image src={image2} alt="salad" />
        <Image src={image3} alt="salat-toast" />
      </div>
    </section>
  );
};

export default AboutUsSection;

import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import Facebook from "@/images/vectors/facebook-logo.svg";
import Instagram from "@/images/vectors/instagram-logo.svg";
import Tiktok from "@/images/vectors/tiktok-logo.svg";
import mainDish from "@/images/home-page/hero-section/main-dish.svg";

import Button from "@/components/ButtonComponent";

interface HeroProps {
  className?: string;
}

const SocialObject = [
  { href: "https://www.instagram.com/", title: "Instagram", image: Instagram },
  { href: "https://www.facebook.com/", title: "Facebook", image: Facebook },
  { href: "https://www.tiktok.com/", title: "Tiktok", image: Tiktok },
];

const Links: FC<HeroProps> = ({ className }) => {
  return (
    <div className={`${className} flex flex-col items-center space-y-[30px]`}>
      <hr className="hidden lg:block bg-white h-[100px] w-[1px] border-0" />
      <div className="flex space-x-[50px] lg:flex-col lg:items-center lg:space-y-[50px] lg:space-x-0">
        {SocialObject.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-[10px] hover:bg-amberOrange"
          >
            <Image
              src={item.image}
              alt={item.title}
              height={12}
              className="h-[25px] w-[25px]"
            />
          </Link>
        ))}
      </div>
      <hr className="hidden lg:block bg-white h-[100px] w-[1px] border-0" />
    </div>
  );
};

const HeroSection: FC = () => {
  return (
    <section className="container lg:flex-row items-center justify-between flex flex-col">
      <div className="flex flex-col justify-center items-center lg:items-start text-white space-y-[30px] lg:order-2">
        <p className="text-amberOrange font-vibes text-[32px]">
          Welcome to Oasis restaurant!
        </p>
        <h1 className="font-bold lg:text-[60px] leading-none max-w-[550px] text-[42px] text-center lg:text-left lg:max-w-[450px] xl:max-w-[550px]">
          <span className="text-amberOrange">Di</span>scover the taste of
          elegance
        </h1>
        <p className="lg:my-[50px] text-center lg:text-left lg:max-w-[450px] xl:max-w-[550px]">
          Exquisite dishes, warm ambiance, and unforgettable moments await you
          <br />
          Where passion meets the plate and each meal becomes a moment to savor
        </p>
        <Button
          text="See menu"
          background="amberOrange"
          fullWidth
          className="max-w-[190px]"
        />
      </div>
      <Links className="lg:order-1" />
      <Image
        src={mainDish}
        alt="mainDish"
        className="w-[600px] lg:w-[430px] xl:w-[600px] lg:order-3"
      />
    </section>
  );
};

export default HeroSection;

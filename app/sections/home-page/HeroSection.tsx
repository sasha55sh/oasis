import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ButtonComponent";

import Facebook from "@/images/vectors/facebook-logo.svg";
import Instagram from "@/images/vectors/instagram-logo.svg";
import Tiktok from "@/images/vectors/tiktok-logo.svg";
import mainDish from "@/images/home-page/hero/main-dish.svg";

interface heroProps {
  className?: string;
}

const SocialObject = [
  { href: "https://www.instagram.com/", title: "Instagram", image: Instagram },
  { href: "https://www.facebook.com/", title: "Facebook", image: Facebook },
  { href: "https://www.tiktok.com/", title: "Tiktok", image: Tiktok },
];

const Links: FC<heroProps> = ({ className }) => {
  return (
    <div className={`${className} flex flex-col items-center space-y-[30px]`}>
      <hr className="hidden bg-white h-[100px] w-[1px] border-0 lg:block" />
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
      <hr className="hidden bg-white h-[100px] w-[1px] border-0 lg:block" />
    </div>
  );
};

const HeroSection: FC = () => {
  return (
    <section className="container flex flex-col items-center justify-between py-[30px] lg:py-[70px] lg:flex-row">
      <div className="flex flex-col justify-center items-center text-white space-y-[15px] lg:space-y-[30px] lg:items-start lg:order-2">
        <p className="text-amberOrange font-vibes text-[32px]">
          Welcome to Oasis restaurant!
        </p>
        <h1 className="font-bold leading-none max-w-[550px] text-[42px] text-center lg:text-left lg:max-w-[450px] lg:text-[60px] xl:max-w-[550px]">
          <span className="text-amberOrange">Di</span>scover the taste of
          elegance
        </h1>
        <p className="text-center max-w-[550px] lg:text-left lg:my-[50px] lg:max-w-[450px] xl:max-w-[550px]">
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
        className="w-[600px] lg:w-[430px] lg:order-3 xl:w-[600px]"
      />
    </section>
  );
};

export default HeroSection;

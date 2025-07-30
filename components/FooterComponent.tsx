import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import Instagram from "@/images/vectors/instagram-logo.svg";
import Pinterest from "@/images/vectors/pinterest-logo.svg";
import Facebook from "@/images/vectors/facebook-logo.svg";
import Tiktok from "@/images/vectors/tiktok-logo.svg";
import Clockwise from "@/images/vectors/clockwise-right.svg";

const socialObjects = [
  { href: "https://www.instagram.com/", title: "Instagram", image: Instagram },
  { href: "https://www.pinterest.com/", title: "Pinterest", image: Pinterest },
  { href: "https://www.facebook.com/", title: "Facebook", image: Facebook },
  { href: "https://www.tiktok.com/", title: "Tiktok", image: Tiktok },
];

const mainLinks = [
  { href: "menu", text: "Menu" },
  { href: "shop", text: "Shop" },
  { href: "delivery", text: "Delivery" },
  { href: "faq", text: "FAQ" },
  { href: "news", text: "News" },
];

const numbersData = [
  "+380 (68) 68 68 686",
  "+380 (99) 00 00 000",
  "+380 (67) 67 67 676",
];

const Footer: FC<{ className?: string }> = ({ className }) => {
  const currentYear = new Date().getFullYear();

  const FooterMain = () => {
    return (
      <div className="container flex flex-col justify-between my-[30px] space-y-[15px] sm:grid sm:grid-cols-2 sm:gap-[20px] lg:grid-cols-4">
        <div className="space-y-[10px]">
          <h2 className="font-bold text-[24px] text-amberOrange">About Us</h2>
          <p className="max-w-[310px]">
            A restaurant with exquisite dishes, where every visit is a new
            gastronomic experience, unique flavors and an impeccable atmosphere
            for true gourmets
          </p>
          <div className="flex space-x-[15px] ">
            <button
              className="p-[15px] bg-amberOrange cursor-default rounded-md"
              aria-label="clockwise"
            >
              <Image src={Clockwise} alt="clockwise" height={40} width={40} />
            </button>
            <div className="flex flex-col text-[14px]">
              <p className="text-[18px]">Opening hours:</p>
              <p>
                Monday - Friday(<time dateTime="11:00">11:00</time> -
                <time dateTime="22:00"> 22:00)</time>
              </p>
              <p>
                Saturday - Sunday(<time dateTime="10:00">10:00</time> -
                <time dateTime="22:00"> 22:00)</time>
              </p>
            </div>
          </div>
        </div>

        <div className="sm:justify-self-center">
          <h2 className="font-bold text-[24px] text-amberOrange">
            Place an order
          </h2>
          <ul className="space-y-[8px] mt-[10px] flex flex-col">
            {numbersData.map((number, index) => (
              <li key={index}>{number}</li>
            ))}
          </ul>
        </div>

        <div className="hidden sm:block lg:justify-self-center">
          <h2 className="font-bold text-[24px] text-amberOrange">
            Useful links
          </h2>
          <ul className="space-y-[8px] mt-[20px] grid grid-cols-3 lg:grid-cols-1 lg:justify-self-center lg:text-center">
            {mainLinks.map(({ href, text }, index) => (
              <li
                key={index}
                className="transition-transform duration-300 hover:scale-105 hover:text-amberOrange"
              >
                <Link href={href}>{text}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="sm:justify-self-center">
          <h2 className="font-bold text-[24px] text-amberOrange whitespace-nowrap">
            We are on social media
          </h2>
          <ul className="flex mt-[20px] space-x-[20px] sm:justify-center">
            {socialObjects.map((obj, index) => (
              <li key={index}>
                <Link href={obj.href} target="_blank">
                  <Image
                    src={obj.image}
                    alt={obj.title}
                    height={25}
                    width={25}
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <footer className={`${className} bg-black text-white pt-[10px]`}>
      <FooterMain />
      <div className="bg-amberOrange p-[30px] text-center">
        Oasis © {currentYear} by Oleksandra Shapovaliuk. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;

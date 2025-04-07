import React from "react";
import Image from "next/image";
import Link from "next/link";
import Input from "@/components/InputComponent";
import Button from "@/components/ButtonComponent";

import Instagram from "@/images/vectors/instagram-logo.svg";
import Pinterest from "@/images/vectors/pinterest-logo.svg";
import Facebook from "@/images/vectors/facebook-logo.svg";
import Tiktok from "@/images/vectors/tiktok-logo.svg";
import Corner from "@/images/backgrounds/corner-salad.svg";
import Clockwise from "@/images/vectors/clockwise-right.svg";

const socialObject = [
  { href: "https://www.instagram.com/", title: "Instagram", image: Instagram },
  { href: "https://www.pinterest.com/", title: "Pinterest", image: Pinterest },
  { href: "https://www.facebook.com/", title: "Facebook", image: Facebook },
  { href: "https://www.tiktok.com/", title: "Tiktok", image: Tiktok },
];

const mainLinks = [
  { href: "#", text: "Текст" },
  { href: "#", text: "Текст" },
  { href: "#", text: "Текст" },
  { href: "#", text: "Текст" },
  { href: "#", text: "Текст" },
  { href: "#", text: "Текст" },
];

const additionalLink = [
  { href: "#about", text: "Текст" },
  { href: "#", text: "Текст" },
  { href: "#", text: "Текст" },
  { href: "#", text: "Текст" },
  { href: "#", text: "Текст" },
  { href: "#", text: "Текст" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-black text-white relative">
      <div className="container flex justify-around items-center my-[30px]">
        <div className="flex flex-col space-y-[15px]">
          <h1 className="font-bold text-[32px]">
            Дізнавайся першим про найсмачніше!
          </h1>
          <p>Підпишись на розсилку та отримуй акції та спеціальні пропозиції</p>
        </div>

        <div className="flex">
          <Input
            inputType="input"
            placeholder="Введіть свій емейл"
            background="amberOrange"
            className="max-w-[300px] rounded-md"
          />
          <Button
            text="Підписатися"
            background="white"
            className="rounded-md ml-[-10px]"
          />
        </div>
      </div>

      <hr className="max-w-[1150px] h-[1px] bg-amberOrange border-0 m-auto" />

      <div className="container flex justify-between my-[30px]">
        <div className="space-y-[20px]">
          <h2 className="font-bold text-[24px]">Інформація</h2>
          <p className="max-w-[310px]">
            Ресторан з вишуканими стравами, де кожен візит — це нові
            гастрономічні враження, унікальні смаки та бездоганна атмосфера для
            справжніх гурманів
          </p>
          <div className="flex space-x-[15px] ">
            <button
              className="p-[15px] bg-amberOrange cursor-default rounded-md"
              aria-label="clockwise"
            >
              <Image src={Clockwise} alt="clockwise" height={40} width={40} />
            </button>
            <div className="flex flex-col text-[14px]">
              <p className="text-[18px]">Години роботи:</p>
              <p>
                Понеділок - П'ятниця(<time dateTime="11:00">11:00</time> -
                <time dateTime="22:00"> 22:00)</time>
              </p>
              <p>
                Субота - Неділя(<time dateTime="10:00">10:00</time> -
                <time dateTime="22:00"> 22:00)</time>
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-[24px]">Корисні посилання</h2>
          <ul className="hidden space-y-2 mt-[20px] md:block">
            {additionalLink.map(({ href, text }, index) => (
              <li
                key={index}
                className="transition-transform duration-300 hover:scale-105 hover:text-amberOrange"
              >
                <Link href={href}>{text}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-[24px]">Потрібна допомога?</h2>
          <ul className="hidden space-y-2  mt-[20px] mini:block">
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
        <div>
          <h2  className="font-bold text-[24px]">Наш блог</h2>
        </div>
      </div>

      <div className="bg-amberOrange p-[30px] text-center">
        Oasis © {currentYear} by Oleksandra Shapovaliuk. All rights reserved
      </div>

      {/* <Image
        src={Corner}
        alt="corner"
        className="absolute z-10 bottom-0 right-0 border-0"
      /> */}
    </footer>
  );
};

export default Footer;

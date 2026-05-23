import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { Instagram, Pinterest, Facebook, Tiktok, Clockwise } from "@/components/icons";

const socialObjects = [
  { href: "https://www.instagram.com/", title: "Instagram", image: Instagram },
  { href: "https://www.pinterest.com/", title: "Pinterest", image: Pinterest },
  { href: "https://www.facebook.com/", title: "Facebook", image: Facebook },
  { href: "https://www.tiktok.com/", title: "Tiktok", image: Tiktok },
];

const mainLinks = [
  { href: "menu", text: "Меню" },
  { href: "shop", text: "Замовити" },
  { href: "delivery", text: "Доставка" },
  { href: "faq", text: "FAQ" },
  { href: "news", text: "Новини" },
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
          <h2 className="font-bold text-[24px] text-amberOrange">Про нас</h2>
          <p className="max-w-[310px]">
            Ресторан із вишуканими стравами, де кожен візит стає новим
            гастрономічним досвідом, унікальними смаками та бездоганною
            атмосферою для справжніх гурманів.
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

        <div className="sm:justify-self-center">
          <h2 className="font-bold text-[24px] text-amberOrange">
            Оформити замовлення
          </h2>
          <ul className="space-y-[8px] mt-[10px] flex flex-col">
            {numbersData.map((number, index) => (
              <li key={index}>{number}</li>
            ))}
          </ul>
        </div>

        <div className="hidden sm:block lg:justify-self-center">
          <h2 className="font-bold text-[24px] text-amberOrange">
            Корисні посилання
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
            Наші соціальні мережі
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
        Oasis © {currentYear} by Oleksandra Shapovaliuk. Усі права захищенно
      </div>
    </footer>
  );
};

export default Footer;

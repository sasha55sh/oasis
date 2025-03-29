import React from "react";
import Image from "next/image";
import Link from "next/link";

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
      <div>
        <h1 className="font-bold text-[32px]">
          Дізнавайся першим про найсмачніше
        </h1>
        <p>
          Підпишись на розсилку та отримуй акції, спеціальні пропозиції й нові
          страви!
        </p>
      </div>
      <hr className="max-w-[1170px] h-[1px] bg-amberOrange" />
      <div>
        <div>
          <h2 className="font-bold text-[24px]">Про нас</h2>
          <p>
            Ресторан з вишуканими стравами, де кожен візит — це нові
            гастрономічні враження, унікальні смаки та бездоганна атмосфера для
            справжніх гурманів
          </p>
          <div>
            <button
              className="p-[25px] bg-amberOrange cursor-default rounded-md"
              aria-label="clockwise"
            >
              <Image src={Clockwise} alt="clockwise" height={40} width={40} />
            </button>
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
        <div>
          <h2 className="font-bold text-[24px]">Корисні посилання</h2>

          <ul className="hidden space-y-2 md:block">
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
          <h2>Потрібна допомога?</h2>
          <ul className="hidden space-y-2 mini:block">
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
          <h2>Наш блог</h2>
          {socialObject.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  height={40}
                  width={40}
                  className="transition delay-150 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 p-[10px] rounded-full bg-white"
                />
              </Link>
            ))}
        </div>
      </div>
      <div className="bg-amberOrange p-[30px] text-center">
        Oasis © {currentYear} by Oleksandra Shapovaliuk. All rights reserved
      </div>

      <Image
        src={Corner}
        alt="corner"
        className="absolute z-10 bottom-0 right-0 border-0"
      />
    </footer>
  );
};

export default Footer;

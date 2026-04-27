import React, { FC } from "react";
import Image from "next/image";

import ListIcon from "@/images/home-page/about-us/list-image.svg";
import Image1 from "@/images/home-page/about-us/image-1.svg";
import Image2 from "@/images/home-page/about-us/image-2.svg";
import Image3 from "@/images/home-page/about-us/image-3.svg";

const listItems = [
  "Свіжі локальні інгредієнти у кожній страві",
  "Затишна та елегантна атмосфера, ідеальна для сімейних вечерь",
  "Ексклюзивне сезонне меню та особливі страви від шефа щотижня",
];

const AboutUsSection: FC = () => {
  return (
    <section className="container flex flex-col justify-between my-[50px] lg:my-[70px] lg:gap-[50px] lg:flex-row xl:gap-0">
      <div className="flex flex-col justify-center items-center text-white space-y-[15px] lg:space-y-[30px] lg:items-start">
        <p className="text-amberOrange font-vibes text-[32px]">Про нас</p>
        <h1 className="font-bold leading-none max-w-[550px] text-[42px] text-center lg:text-left lg:max-w-[450px] lg:text-[60px] xl:max-w-[550px]">
          <span className="text-amberOrange">Ми </span>створюємо найкращі
          гастрономічні продукти
        </h1>
        <p className="text-center text-pretty max-w-[550px] lg:my-[50px] lg:text-left lg:max-w-[450px] xl:max-w-[550px]">
          У ресторані Oasis ми створюємо смаки, що дарують радість у кожному
          шматочку. Наша пристрасть до якості та смаку спонукає нас обирати
          найкращі інгредієнти та готувати страви з особливою турботою. Від
          класичних улюбленців до сміливих нових поєднань — кожна страва
          створена, щоб дарувати задоволення та надихати. Насолоджуйтеся
          ідеальною гармонією смаку та свіжості разом із нами.
        </p>
        <ul className="list-none">
          {listItems.map((item, index) => (
            <li key={index} className="flex">
              <Image src={ListIcon} alt="list-icon" className="m-[5px]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden grid-cols-2 gap-[20px] mt-[30px] max-w-[660px] content-center mx-auto md:grid xl:ml-[90px]">
        <Image src={Image1} alt="Egg toast" className="col-span-2" />
        <Image src={Image2} alt="Salad" />
        <Image src={Image3} alt="Salat and toast" />
      </div>
    </section>
  );
};

export default AboutUsSection;

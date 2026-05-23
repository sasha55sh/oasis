import React, { FC } from "react";
import Image from "next/image";

import { BenefitBg as Background } from "@/public/home-page/backgrounds";
import { Pizza, Tools, Cap, Food } from "@/public/home-page";

const data = [
  { src: Cap, alt: "Cap", title: "Професійних кухарів", quantity: 10 },
  { src: Food, alt: "food", title: "Страв у меню", quantity: 320 },
  { src: Tools, alt: "Tools", title: "Років досвіду", quantity: 5 },
  { src: Pizza, alt: "Pizza", title: "Задоволених клієнтів", quantity: 2000 },
];

const BenefitSection: FC = () => {
  return (
    <section className="hidden my-[50px] justify-center items-center lg:flex lg:my-[120px]">
      <Image
        src={Background}
        alt="Background"
        className="relative z-1 lg:scale-y-[130%] xl:scale-none"
      />

      <div className="absolute z-2 flex text-center justify-between">
        {data.map((item, index) => (
          <div
            className="flex flex-col items-center space-y-[10px] px-[50px] text-white"
            key={index}
          >
            <Image src={item.src} alt={item.alt} />
            <h5 className="font-bold lg:text-[24px]">{item.title}</h5>
            <h3 className="font-bold text-[28px] lg:text-[40px]">
              {item.quantity}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitSection;

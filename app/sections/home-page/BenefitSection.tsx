import React, { FC } from "react";
import Image from "next/image";

import Background from "@/images/home-page/backgrounds/benefit-section-bg.svg";
import Pizza from "@/images/home-page/pizza-benefit.svg";
import Tools from "@/images/home-page/spoon-fork-benefit.svg";
import Cap from "@/images/home-page/cap-benefit.svg";
import Food from "@/images/home-page/food-benefit.svg";

const data = [
  { src: Cap, alt: "Cap", title: "Professional chefs", quantity: 10 },
  { src: Food, alt: "food", title: "Items of food", quantity: 320 },
  { src: Tools, alt: "Tools", title: "Years of experienced", quantity: 5 },
  { src: Pizza, alt: "Pizza", title: "Happy customers", quantity: 2000 },
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
            <h5 className="font-bold lg:text-[24px]">
              {item.title}
            </h5>
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

import React, { FC } from "react";
import Image from "next/image";

import background from "@/images/home-page/backgrounds/benefit-section-bg.svg";
import pizza from "@/images/vectors/pizza-benefit.svg";
import tools from "@/images/vectors/spoon-fork-benefit.svg";
import cap from "@/images/vectors/cap-benefit.svg";
import food from "@/images/vectors/food-benefit.svg";

const data = [
  { src: cap, alt: "cap", title: "Professional chefs", quantity: 10 },
  { src: food, alt: "food", title: "Items of food", quantity: 320 },
  { src: tools, alt: "tools", title: "Years of experienced", quantity: 5 },
  { src: pizza, alt: "pizza", title: "Happy customers", quantity: 2000 },
];

const BenefitSection: FC = () => {
  return (
    <section className="hidden my-[50px] justify-center items-center lg:flex lg:my-[120px]">
      <Image
        src={background}
        alt="Background"
        className="relative -z-10 lg:scale-y-[130%] xl:scale-none"
      />

      <div className="absolute flex text-center justify-between">
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

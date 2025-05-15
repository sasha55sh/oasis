import React, { FC } from "react";
import Image from "next/image";

import background from "@/images/home-page/backgrounds/benefit-section-bg.svg";
import pizza from "@/images/vectors/pizza-benefit.svg";
import tools from "@/images/vectors/spoon-fork-benefit.svg";
import cap from "@/images/vectors/cap-benefit.svg";
import food from "@/images/vectors/food-benefit.svg";

const data = [
  { src: cap, alt: "cap", title: "Професіональні кухарі", quantity: 10 },
  { src: food, alt: "food", title: "Кількість страв", quantity: 320 },
  { src: tools, alt: "tools", title: "Років досвіду", quantity: 5 },
  { src: pizza, alt: "pizza", title: "Щасливих клієнтів", quantity: 2000 },
];

const BenefitSection: FC = () => {
  return (
    <section className="container relative flex justify-evenly items-center">
      {data.map((item, index) => (
        <div
          className="flex flex-col items-center space-y-[10px] p-[50px] text-white"
          key={index}
        >
          <Image src={item.src} alt={item.alt} />
          <h5 className="font-bold text-[24px]">{item.title}</h5>
          <h3 className="font-bold text-[40px]">{item.quantity}</h3>
        </div>
      ))}

      <Image
        src={background}
        alt="Background"
        className="absolute -z-10 top-0 "
      />
    </section>
  );
};

export default BenefitSection;

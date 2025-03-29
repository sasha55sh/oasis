import React, { FC } from "react";
import Image from "next/image";

import Background from "@/images/backgrounds/benefit-section-bg.svg";
import Pizza from "@/images/vectors/pizza-benefit.svg";
import Tools from "@/images/vectors/spoon-fork-benefit.svg";
import Cap from "@/images/vectors/cap-benefit.svg";
import Food from "@/images/vectors/food-benefit.svg";

const data = [
  { src: Cap, alt: "cap", title: "Професіональні кухарі", quantity: 10 },
  { src: Food, alt: "food", title: "Кількість страв", quantity: 320 },
  { src: Tools, alt: "tools", title: "Років досвіду", quantity: 5 },
  { src: Pizza, alt: "pizza", title: "Щасливих клієнтів", quantity: 2000 },
];

const BenefitSection: FC = () => {
  return (
    <section className="relative flex justify-evenly items-center">
 
        
        {data.map((item, index) => (
          <div className="flex flex-col items-center space-y-[10px] p-[50px] text-white" key={index}>
            <Image src={item.src} alt={item.alt} />
            <h5 className="font-bold text-[24px]">{item.title}</h5>
            <h3 className="font-bold text-[40px]">{item.quantity}</h3>
          </div>
        ))}
    

      <Image
        src={Background}
        alt="Background"
        className="absolute -z-10 top-0"
      />
    </section>
  );
};

export default BenefitSection;

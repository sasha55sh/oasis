import React, { FC } from "react";
import Image from "next/image";

import Restaurant from "@/images/menu-page/restaurant-logo.svg";
import SweetBakery from "@/images/menu-page/sweet-bakery-logo.svg";
import ForkAndSpoon from "@/images/menu-page/fork&spoon-logo.svg";
import WolfCoffee from "@/images/menu-page/wolf-coffee-logo.svg";
import Bistro from "@/images/menu-page/bistro-logo.svg";
import Bakery from "@/images/menu-page/bakery-logo.svg";

const partnersData = [
  { src: Restaurant, alt: "Restaurant logo" },
  { src: SweetBakery, alt: "Sweet bakery logo" },
  { src: ForkAndSpoon, alt: "Fork and spoon logo" },
  { src: WolfCoffee, alt: "wolf coffee logo" },
  { src: Bistro, alt: "Bistro logo" },
  { src: Bakery, alt: "Bakery logo" },
];

const PartnersSection: FC = () => {
  return (
    <section className="my-[50px] lg:my-[70px]">
      <div className="flex flex-col items-center justify-center space-y-[15px] text-darkCharcoal">
        <p className="text-[18px] capitalize">partners & clients</p>
        <h2 className="text-[36px] font-bold text-center lg:text-[48px] ">
          We work with the best people
        </h2>

        <div className="hidden justify-between w-full lg:flex">
          {partnersData.map((partner, index) => (
            <Image key={index} src={partner.src} alt={partner.alt} className="lg:px-[20px] xl:px-0" />
          ))}
        </div>

        <div className="grid grid-cols-3 justify-items-center lg:hidden">
          {partnersData.map((partner, index) => (
            <Image key={index} src={partner.src} alt={partner.alt} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

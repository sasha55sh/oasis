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
    <div className="flex flex-col items-center justify-center space-y-[15px] my-[50px] text-darkCharcoal lg:my-[70px]">
      <p className="text-[18px] capitalize">partners & clients</p>
      <h2 className="text-[48px] font-bold">We work with the best people</h2>
      <div className="flex justify-between">
        {partnersData.map((partner, index) => (
          <Image key={index} src={partner.src} alt={partner.alt} className="p-[10px]"/>
        ))}
      </div>
    </div>
  );
};

export default PartnersSection;

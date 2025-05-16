import React, { FC } from "react";
import Image from "next/image";
import Button from "@/components/ButtonComponent";

import Estwood from "@/images/home-page/our-chefs/d-estwood.svg";
import Scoriesh from "@/images/home-page/our-chefs/d-scoriesh.svg";
import William from "@/images/home-page/our-chefs/m-william.svg";
import Readfrod from "@/images/home-page/our-chefs/w-readfrod.svg";

const chefsData = [
  { src: Estwood, alt: "D Estwood" },
  {
    src: Scoriesh,
    alt: "D Scoriesh",
  },
  {
    src: William,
    alt: "M William",
  },
  {
    src: Readfrod,
    alt: "W Readfroad",
  },
];
const OurChefsSection: FC = () => {
  return (
    <section className="container flex flex-col space-y-[20px] items-center">
      <p className="text-amberOrange font-vibes text-[32px] ">Chefs</p>
      <h1 className="font-bold text-[48px] text-white leading-none">
        <span className="text-amberOrange ">Me</span>et our chefs
      </h1>
      <div className="flex justify-evenly">
        {chefsData.map((chef, index) => (
          <Image src={chef.src} alt={chef.alt} key={index} />
        ))}
      </div>
      <Button text="See More" bordered />
    </section>
  );
};

export default OurChefsSection;

import React, { FC } from "react";
import Image from "next/image";
import { Carousel } from "flowbite-react";

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
    <section className="container flex flex-col my-[30px] space-y-[20px] items-center">
      <p className="text-amberOrange font-vibes text-[32px]">Chefs</p>
      <h1 className="font-bold text-[42px] text-white leading-none text-center lg:text-[60px]">
        <span className="text-amberOrange ">Me</span>et our chefs
      </h1>

      <div className="hidden justify-between gap-[20px] lg:flex">
        {chefsData.map((chef, index) => (
          <div key={index}>
            <Image src={chef.src} alt={chef.alt} />
          </div>
        ))}
      </div>

      <div className="max-w-[500px] mx-auto lg:hidden">
        <Carousel slide={false} indicators={true}>
          {chefsData.map((chef, index) => (
            <div key={index} className="relative flex justify-center">
              <Image src={chef.src} alt={chef.alt} />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default OurChefsSection;

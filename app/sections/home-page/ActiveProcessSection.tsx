import React, { FC } from "react";
import Image from "next/image";
import Button from "@/components/ButtonComponent";

import background from "@/images/home-page/backgrounds/active-process-section.svg";
import playIcon from "@/images/vectors/play-icon.svg";

const ActiveProcessSection: FC = () => {
  return (
    <section className="flex justify-end items-center">
      <Image src={background} alt="Background" className="relative -z-10" />
      <div className="container flex flex-col absolute text-white text-right items-end space-y-[20px] ">
        <p className="text-amberOrange font-vibes text-[32px]">
          Restaurant Active Process
        </p>
        <h1 className="font-bold text-[48px] max-w-[750px] leading-none">
          <span className="text-amberOrange">We </span>document every food bean
          process untile it is saved
        </h1>
        <p className="max-w-[650px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna,
        </p>

        <div className="flex max-w-[390px] items-center space-x-[20px]">
          <Button text="Read more" bordered />

          <button
            className="bg-amberOrange rounded-full p-[15px] hover:bg-amberOrange/60"
            aria-label="play"
          >
            <Image src={playIcon} alt="play" />
          </button>
          <span>Play Video</span>
        </div>
      </div>
    </section>
  );
};

export default ActiveProcessSection;

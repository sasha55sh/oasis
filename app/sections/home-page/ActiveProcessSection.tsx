import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import background from "@/images/home-page/backgrounds/active-process-section.svg";
import playIcon from "@/images/vectors/play-icon.svg";

const ActiveProcessSection: FC = () => {
  return (
    <section className="relative flex justify-center items-center my-[50px] lg:justify-end lg:my-[120px] ">
      <Image
        src={background}
        alt="Background"
        className="hidden z-1 lg:scale-y-[120%] lg:block xl:scale-none"
      />
      <div className="container z-2 flex flex-col text-white text-center items-center space-y-[20px] lg:text-right lg:items-end lg:absolute">
        <p className="text-amberOrange font-vibes text-[32px]">
          Restaurant Active Process
        </p>
        <h1 className="font-bold text-[48px] max-w-[750px] leading-none">
          <span className="text-amberOrange">We </span>document every food bean
          process untile it is saved
        </h1>
        <p className="max-w-[650px]">
          We capture every detail of the culinary journey, from the freshest
          ingredients to the final presentation on your plate. Our commitment to
          transparency ensures you enjoy not only great taste but also trust in
          every dish we serve
        </p>

        <div className="flex max-w-[390px] items-center space-x-[20px]">
          <Link
            href="https://www.youtube.com/@JoshuaWeissman"
            target="_blank"
            className="bg-amberOrange rounded-full p-[15px] hover:bg-amberOrange/60"
            aria-label="play"
          >
            <Image src={playIcon} alt="play" />
          </Link>
          <span>Play Video</span>
        </div>
      </div>
    </section>
  );
};

export default ActiveProcessSection;

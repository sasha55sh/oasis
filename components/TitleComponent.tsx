import React, { FC } from "react";
import { Breadcrumb } from "flowbite-react";
import Image from "next/image";

import Background from "@/images/home-page/backgrounds/title-bg.svg";

interface titleProps {
  className?: string;
  title: string;
}

const TitleComponent: FC<titleProps> = ({ className, title }) => {
  return (
    <div
      className={`${className} relative flex items-center justify-center w-full h-[150px]`}
    >
      <Image src={Background} alt="Background" className="object-cover" fill />
      <h1 className="capitalize font-bold text-[48px] text-white z-10">
        {title}
      </h1>
    </div>
  );
};

export default TitleComponent;

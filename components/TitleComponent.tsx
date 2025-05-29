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
    <div className={`${className} flex items-center justify-center`}>
      <Image src={Background} alt="Background" className="relative" />
      <h1 className="capitalize font-bold text-[48px] text-white absolute">{title}</h1>
    </div>
  );
};

export default TitleComponent;

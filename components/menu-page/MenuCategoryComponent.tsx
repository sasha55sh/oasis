import React, { FC } from "react";
import Image from "next/image";
import { Menu } from "@/config/types";
import MenuItemComponent from "./MenuItemComponent";
import CoffeeIcon from "@/images/menu-page/coffee-icon.svg";

interface menuProps {
  className?: string;
  sectionTitle: string;
  imageSrc: string;
  imageAlt: string;
  items: Menu[];
}

const MenuCategoryComponent: FC<menuProps> = ({
  className,
  sectionTitle,
  items,
  imageSrc,
  imageAlt,
}: menuProps) => {
  return (
    <div
      className={`${className} flex flex-col space-y-[30px] items-center lg:gap-x-[40px] lg:flex-row xl:gap-x-[70px]`}
    >
      <Image src={imageSrc} alt={imageAlt} priority />
      <div className="w-full">
        <Image src={CoffeeIcon} alt="coffe icon" className="hidden md:block" />
        <h1 className="text-[36px] text-darkCharcoal font-bold text-center md:text-left lg:text-[48px]">
          {sectionTitle}
        </h1>
        <div className="flex flex-col space-y-[10px] ">
          {items.map((item, index) => (
            <div key={index}>
              <MenuItemComponent item={item} />
              <hr className="max-w-[760px] h-[5px] border-t border-dotted border-gainsboro mt-[10px] xl:ml-[30px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuCategoryComponent;

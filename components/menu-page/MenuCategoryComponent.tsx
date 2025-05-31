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
    <div className={`${className} flex `}>
      <Image src={imageSrc} alt={imageAlt} />
      <div>
        <Image src={CoffeeIcon} alt="coffe icon" />
        <h1 className="text-[48px] text-darkCharcoal font-bold">
          {sectionTitle}
        </h1>
        <div className="flex flex-col space-y-[10px]">
          {items.map((item, index) => (
            <MenuItemComponent key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuCategoryComponent;

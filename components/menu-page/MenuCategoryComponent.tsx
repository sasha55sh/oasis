import React, { FC } from "react";
import Image from "next/image";
import { Menu } from "@/config/types";
import CoffeeIcon from "@/images/menu-page/coffee-icon.svg";

interface menuProps {
  className?: string;
  menu: Menu;
}

const MenuCategoryComponent: FC<menuProps> = ({ className, menu }) => {
  return (
    <div className="bg-darkCharcoal">
      <Image src={CoffeeIcon} alt="Coffee icon" />
      <h1 className="font-bold text-[48px]">{menu.category}</h1>
      
    </div>
  );
};

export default MenuCategoryComponent;

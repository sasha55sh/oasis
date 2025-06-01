import React, { FC } from "react";
import { Menu } from "@/config/types";

interface menuItemProps {
  className?: string;
  item: Menu;
}

const MenuItemComponent: FC<menuItemProps> = ({ className, item }) => {
  return (
    <div
      className={`${className} flex justify-between max-w-[760px] xl:ml-[30px]`}
    >
      <div className="space-y-[8px]">
        <h2 className="text-[20px] font-bold text-darkCharcoal capitalize md:text-[24px]">
          {item.title}
        </h2>
        <p className="text-darkLiver">{item.description}</p>
        <p className="text-oldSilver">{item.cal} CAL</p>
      </div>
      <p className="text-amberOrange text-[20px] text-nowrap font-bold md:text-[24px]">
        {item.price} $
      </p>
    </div>
  );
};

export default MenuItemComponent;

import React, { FC } from "react";
import { Menu } from "@/config/types";

interface menuItemProps {
  className?: string;
  item: Menu;
}

const MenuItemComponent: FC<menuItemProps> = ({ className, item }) => {
  return (
    <div className={`${className} flex justify-between max-w-[760px]`}>
      <div>
        <h2 className="text-[24px] font-bold text-darkCharcoal">
          {item.title}
        </h2>
        <p className="text-darkLiver">{item.description}</p>
        <p className="text-oldSilver">{item.cal} CAL</p>
      </div>
      <p className="text-amberOrange text-[24px]">{item.price} $</p>
      <hr className="max-w-[760px] border-t border-dotted border-gainsboro" />
    </div>
  );
};

export default MenuItemComponent;

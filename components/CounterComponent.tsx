import React, { FC } from "react";
import Image from "next/image";

import Plus from "@/images/vectors/plus-icon.svg";
import Minus from "@/images/vectors/minus-icon.svg";

interface counterProps {
  className?: string;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  maxQuantity: number;
}

const CounterComponent: FC<counterProps> = ({
  className,
  quantity,
  onDecrease,
  onIncrease,
  maxQuantity,
}) => {
  return (
    <div className={`${className} flex items-center`}>
      <button
        onClick={onDecrease}
        className="w-[56px] h-[56px] bg-amberOrange/50 rounded-xl relative flex items-center justify-center transition-colors hover:bg-amberOrange group"
      >
        <Image
          src={Minus}
          alt="Minus Icon"
          className="transition-colors group-hover:filter group-hover:brightness-0 group-hover:invert"
        />
      </button>

      <span className="w-[35px] h-[40px] flex items-center justify-center text-[22px] text-darkLiver font-medium">
        {quantity}
      </span>

      <button
        onClick={onIncrease}
        className={`w-[56px] h-[56px] rounded-xl relative flex items-center justify-center transition-colors group ${
          quantity < maxQuantity
            ? "bg-amberOrange/50 hover:bg-amberOrange"
            : "bg-gray-200 opacity-50 cursor-not-allowed"
        }`}
        disabled={quantity >= maxQuantity}
      >
        <Image
          src={Plus}
          alt="Plus Icon"
          className={`transition-colors group-hover:filter group-hover:brightness-0 group-hover:invert ${
            quantity >= maxQuantity ? "opacity-50 grayscale" : ""
          }`}
        />
      </button>
    </div>
  );
};

export default CounterComponent;

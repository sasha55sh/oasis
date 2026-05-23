import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface cardProps {
  className?: string;
  quantity: number;
  title: string;
  type: "г" | "ккал";
}

const EnergyCardComponent: FC<cardProps> = ({
  className,
  quantity,
  title,
  type,
}) => {
  return (
    <div
      className={cn(
        "border-[1px] border-oldSilver/40 rounded-xl px-[30px] py-[5px]",
        className,
      )}
    >
      <p className="text-[14px] text-oldSilver">{title}</p>
      <p className="text-darkLiver font-semibold">
        {quantity}
        <span className="text-amberOrange">{type}</span>
      </p>
    </div>
  );
};

export default EnergyCardComponent;

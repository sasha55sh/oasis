import React, { FC } from "react";

interface cardProps {
  className?: string;
  quantity: number;
  title: string;
  type: "g" | "cal";
}

const EnergyCardComponent: FC<cardProps> = ({
  className,
  quantity,
  title,
  type,
}) => {
  return (
    <div
      className={`${className} border-[1px] border-oldSilver/40 rounded-xl px-[30px] py-[5px]`}
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

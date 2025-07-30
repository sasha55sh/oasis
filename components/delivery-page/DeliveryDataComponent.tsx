import React, { FC } from "react";
import Image from "next/image";

interface deliveryProps {
  className?: string;
  src: string;
  title: string;
  description?: string;
}

const DeliveryDataComponent: FC<deliveryProps> = ({
  className,
  src,
  title,
  description,
}) => {
  return (
    <div
      className={`${className} w-full p-[15px] rounded-xl border border-amberOrange flex justify-start space-x-[20px] items-center md:flex-col md:space-x-0 md:space-y-[20px] md:py-[50px]`}
    >
      <Image
        src={src}
        alt="Delivery icons"
        className="w-[50px] h-[50px] md:w-[55px] md:h-[55px]"
      />
      <div className="flex flex-col space-y-[10px] md:text-center md:space-y-0">
        <p className="text-darkCharcoal text-[18px] font-semibold md:text-[20px]">
          {title}
        </p>
        <p className="text-darkLiver text-[14px] lg:text-[16px]">
          {description}
        </p>
      </div>
    </div>
  );
};
export default DeliveryDataComponent;

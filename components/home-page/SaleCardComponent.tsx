import React, { FC } from "react";
import Image from "next/image";
import Button from "../Button";
import { cn } from "@/lib/utils";

interface cardProps {
  className?: string;
  title: string;
  discount: string;
  imageScr: string;
  imageAlt: string;
  href: string;
}
const SaleCardComponent: FC<cardProps> = ({
  className,
  title,
  discount,
  imageAlt,
  imageScr,
  href,
}) => {
  return (
    <div className={cn("relative group flex justify-center", className)}>
      <Image src={imageScr} alt={imageAlt} />

      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 *:rounded-md">
        <p className="text-amberOrange py-[5px] px-[15px] bg-white">
          {discount}
        </p>

        <Button
          text={title}
          className="py-[10px] px-[20px]"
          tag="a"
          href={href}
        />
      </div>
    </div>
  );
};

export default SaleCardComponent;

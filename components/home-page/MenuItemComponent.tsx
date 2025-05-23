import React, { FC } from "react";
import Image from "next/image";

interface menuProps {
  className?: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  price: string;
}

const MenuItemComponent: FC<menuProps> = ({
  className,
  imageSrc,
  imageAlt,
  title,
  description,
  price,
}) => {
  return (
    <div className={`${className} flex max-w-[380px]`}>
      <Image src={imageSrc} alt={imageAlt} height={80} width={80} />
      <div className="text-white space-y-[10px]">
        <p className="font-bold text-[20px]">{title}</p>
        <p className="text-[14px]">{description}</p>
      </div>
    </div>
  );
};

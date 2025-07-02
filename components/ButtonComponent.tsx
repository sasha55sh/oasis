import React, { FC } from "react";
import Image from "next/image";

import FilterIcon from "@/images/vectors/filter-icon.svg";
import BasketIcon from "@/images/vectors/basket.svg";

interface ButtonProps {
  className?: string;
  text: string;
  type?: "button" | "submit" | "reset";
  background?: "amberOrange" | "transparent" | "white";
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  bordered?: boolean;
  href?: string;
  tag?: "a" | "button";
  icon?: "filter" | "basket";
}

const Button: FC<ButtonProps> = ({
  className,
  text,
  type = "button",
  background = "amberOrange",
  fullWidth = false,
  disabled,
  onClick,
  bordered = false,
  href,
  tag = "button",
  icon,
}) => {
  const Tag = tag;
  const finalBackground = bordered ? "transparent" : background;
  const backgroundClass =
    finalBackground === "amberOrange"
      ? "bg-amberOrange"
      : finalBackground === "white"
      ? "bg-white border border-transparent"
      : "bg-transparent";
  const disabledBg = "disabled:bg-romance disabled:text-warmWhite";
  const textClass =
    finalBackground === "amberOrange"
      ? "text-white"
      : finalBackground === "white"
      ? "text-amberOrange"
      : bordered
      ? "text-white"
      : "";
  const borderClass = bordered ? "border border-amberOrange border-solid" : "";
  const widthClass = fullWidth ? "w-[100%]" : "";
  const hoverClass =
    finalBackground === "amberOrange"
      ? "hover:bg-romance hover:text-amberOrange transition-colors duration-300"
      : finalBackground === "white"
      ? "hover:bg-transparent hover-white hover:border hover:border-amberOrange border-solid"
      : bordered
      ? "hover:bg-amberOrange transition-colors duration-300"
      : "";

  const renderIcon = () => {
    if (icon === "filter") {
      return (
        <Image
          src={FilterIcon}
          alt="Filter icon"
          width={14}
          height={14}
          className="mr-[8px] inline-block"
        />
      );
    }
    if (icon === "basket") {
      return (
        <Image
          src={BasketIcon}
          alt="Basket icon"
          width={20}
          height={20}
          className="ml-[8px] inline-block"
        />
      );
    }
  };
  return (
    <>
      <Tag
        className={`${className} ${disabledBg} ${backgroundClass} ${borderClass} ${textClass} ${widthClass} ${hoverClass} py-[12px] px-[24px] rounded-xl flex items-center justify-center disabled:cursor-not-allowed group`}
        type={type}
        onClick={onClick}
        disabled={disabled}
        href={href}
      >
        {text}
        {renderIcon()}
      </Tag>
    </>
  );
};

export default Button;

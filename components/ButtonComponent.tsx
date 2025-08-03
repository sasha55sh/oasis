import React, { FC } from "react";
import Image from "next/image";

import FilterIcon from "@/images/vectors/filter-icon.svg";
import BasketIcon from "@/images/vectors/basket.svg";
import SignOutIcon from "@/images/vectors/sign-out-icon.svg";
import Back from "@/images/vectors/back-arrow.svg";

interface ButtonProps {
  className?: string;
  text: string;
  type?: "button" | "submit" | "reset";
  background?: "amberOrange" | "transparent" | "white" | "limeGreen";
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void | string | undefined;
  bordered?: boolean;
  href?: string;
  tag?: "a" | "button";
  icon?: "filter" | "basket" | "signOut" | "back";
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
      : finalBackground === "limeGreen"
      ? "bg-limeGreen border border-transparent"
      : "bg-transparent";
  const disabledBg = "disabled:bg-romance disabled:text-warmWhite";
  const textClass =
    finalBackground === "amberOrange"
      ? "text-white"
      : finalBackground === "white"
      ? "text-amberOrange"
      : finalBackground === "limeGreen"
      ? "text-white"
      : bordered
      ? "text-amberOrange"
      : "";
  const borderClass = bordered ? "border border-amberOrange border-solid" : "";
  const widthClass = fullWidth ? "w-[100%]" : "";
  const hoverClass =
    finalBackground === "amberOrange"
      ? "hover:bg-amberOrange/50 duration-300"
      : finalBackground === "white"
      ? "hover:bg-transparent hover-white hover:border hover:border-amberOrange border-solid"
      : finalBackground === "limeGreen"
      ? "hover:bg-limeGreen/50 duration-300"
      : bordered
      ? "hover:bg-amberOrange/20 transition-colors duration-300"
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
    if (icon === "signOut") {
      return (
        <Image
          src={SignOutIcon}
          alt="Sign out icon"
          width={20}
          height={20}
          className="ml-[8px] inline-block fill-[#fff]"
        />
      );
    }
    if (icon === "back") {
      return (
        <Image
          src={Back}
          alt="Back arrow"
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

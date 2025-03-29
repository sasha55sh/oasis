import React, { FC } from "react";

interface ButtonProps {
  className?: string;
  text: string;
  type?: "button" | "submit";
  background?: "amberOrange" | "transparent";
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  bordered?: boolean;
  href?: string;
  tag?: "a" | "button";
  icon?: " ";
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
}) => {
  const Tag = tag;
  const finalBackground = bordered ? "transparent" : background;
  const backgroundClass =
    finalBackground === "amberOrange" ? "bg-amberOrange" : "bg-transparent";
  const disabledBg = "disabled:bg-romance disabled:text-warmWhite";
  const textClass =
    finalBackground === "amberOrange"
      ? "text-white"
      : bordered
      ? "text-amberOrange"
      : "";
  const borderClass = bordered ? "border border-amberOrange border-solid" : "";
  const widthClass = fullWidth ? "w-[100%]" : "";
  const hoverClass =
    finalBackground === "amberOrange"
      ? "hover:bg-romance hover:text-amberOrange transition-colors duration-300"
      : bordered
      ? "hover:bg-amberOrange hover:text-white transition-colors duration-300"
      : "";
  return (
    <>
      <Tag
        className={`${className} ${disabledBg} ${backgroundClass} ${borderClass} ${textClass} ${widthClass} ${hoverClass} py-[12px] px-[24px] rounded-3xl flex items-center justify-center disabled:cursor-not-allowed group`}
        type={type}
        onClick={onClick}
        disabled={disabled}
        href={href}
      >
        {text}
      </Tag>
    </>
  );
};

export default Button;

"use client";
import React, { FC, useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Arrow from "@/images/vectors/arrow-down-filter.svg";
import Close from "@/images/vectors/close.svg";

type Option = {
  value: string;
  label: string;
};

type SelectProps = {
  options: Option[];
  onSelect: (value: string) => void;
  placeholder?: string;
  left?: boolean;
  className?: string;
  disabled?: boolean;
  value: string;
};

const CustomSelect: FC<SelectProps> = ({
  options,
  placeholder = "Sort from...",
  onSelect,
  disabled = false,
  className,
  value,
  left = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value: string) => {
    onSelect(value);
    setIsOpen(false);
  };

  const handleResetOption = () => {
    onSelect("");
  };

  const selectedLabel = options.find((option) => option.value === value)?.label;

  return (
    <div
      className={`${className} relative w-[350px] lg:max-w-[320px] shadow-xl text-darkCharcoal rounded-xl text-center cursor-pointer   ${
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
      }
      `}
      ref={selectRef}
      aria-disabled={disabled}
    >
      <div
        className="px-[25px] py-[22px] rounded-xl"
        onClick={!disabled ? toggleDropdown : undefined}
      >
        {selectedLabel || placeholder}

        <Image
          src={Arrow}
          alt="Arrow"
          width={25}
          className={`absolute top-1/2 -translate-y-1/2 transition-transform z-10 w-[30px] ${
            isOpen ? "rotate-180" : "rotate-0"
          } ${left ? "left-[15px]" : "right-[25px]"}`}
        />

        {value && (
          <button
            className={`absolute top-1/2 -translate-y-1/2 hover:rotate-180 duration-500 ${
              left ? "right-[15px] " : "left-[25px]"
            }`}
            onClick={handleResetOption}
          >
            <Image src={Close} alt="Arrow" width={20} className="w-[20px]" />
          </button>
        )}
      </div>

      {isOpen && !disabled && (
        <motion.ul
          className="absolute mt-[8px] w-full rounded-lg bg-white z-10 overflow-hidden text-darkCharcoal"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {options.map((option) => (
            <li
              key={option.value}
              className="px-[8px] py-[16px] hover:bg-amberOrange/30"
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
};

export default CustomSelect;

"use client";
import React, { FC, useState, useRef, useEffect } from "react";

import Image from "next/image";
import { motion } from "framer-motion";

import Arrow from "@/images/vectors/arrow-down-filter.svg";
import CloseSvg from "@/images/vectors/close.svg";

type Option = {
  value: string;
  label: string;
};

type SelectProps = {
  options: Option[];
  placeholder?: string;
  left?: boolean;
  sort: string;
  className?: string;
  onSelect: (value: string) => void;
};

const CustomSelect: FC<SelectProps> = ({
  options,
  placeholder = "Select an option",
  onSelect,
  className,
  left = false,
  sort = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(
    options.length > 0 ? options[0].value : null
  );
  const selectRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (sort === "RELEVANCE") {
      setSelected(null);
      onSelect("");
    }
  }, [sort]);

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

  const handleResetOption = () => {
    setSelected(null);
    onSelect("");
  };

  const handleSelect = (value: string) => {
    setSelected(value);
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <div className={`${className} relative w-[190px] md:w-56 bg-pearl rounded-md `} ref={selectRef}>
      <div
        className="px-[25px] py-[17px] md:py-[22px] text-[15px] text-silver rounded-lg cursor-pointer text-center"
        onClick={toggleDropdown}
      >
        {selected
          ? options.find((option) => option.value === selected)?.label
          : placeholder}
      </div>

      <Image
        src={Arrow}
        alt="Arrow"
        width={14}
        className={`absolute top-1/2 -translate-y-1/2 transition-transform z-10 w-[12px] md:w-[14px] ${
          isOpen ? "rotate-180" : "rotate-0"
        } ${left ? "left-[15px]" : "right-[25px]"}`}
      />

      {options.find((option) => option.value === selected) ? (
        <button
          className={`absolute top-1/2 -translate-y-1/2 hover:rotate-180 duration-500 ${
            left ? "right-[15px] " : "left-[25px]"
          }`}
          onClick={handleResetOption}
        >
          <Image src={CloseSvg} alt="Arrow" width={14}  className="w-[11px] md:w-[14px]"/>
        </button>
      ) : (
        ""
      )}

      {isOpen && (
        <motion.ul
          className="absolute border mt-2 w-full border-silver rounded-lg bg-pearl z-10 overflow-hidden text-silver text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {options.map((option) => (
            <li
              key={option.value}
              className="px-2 py-4 hover:bg-gray-200 cursor-pointer"
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

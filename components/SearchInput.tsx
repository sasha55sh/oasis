import React, { FC } from "react";
import Image from "next/image";

import { Close, Search } from "@/components/icons";
import { cn } from "@/lib/utils";

interface searchProps {
  className?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const SearchInputComponent: FC<searchProps> = ({
  className,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div
      className={cn(
        "flex p-[15px] rounded-xl shadow-xl max-w-[350px]",
        className,
      )}
    >
      <Image src={Search} alt="search icon" width={30} height={30} />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-[350px] border-transparent bg-transparent focus:ring-0 focus:border-transparent"
      />

      {value && (
        <button onClick={() => onChange("")}>
          <Image src={Close} alt="Close icon" />
        </button>
      )}
    </div>
  );
};

export default SearchInputComponent;

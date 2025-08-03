import React, { FC } from "react";

const FiltersSkeleton: FC = () => {
  return (
    <div className="flex flex-col items-center my-[30px] space-y-[15px]">
      <div className="animate-pulse h-[50px] w-[300px] bg-gray-300 rounded-lg md:w-[450px]"></div>
      <div className="space-y-[15px] sm:w-full sm:flex sm:space-x-[50px] sm:space-y-0">
        <div className="animate-pulse h-[50px] w-[300px] bg-gray-300 rounded-lg"></div>
        <div className="animate-pulse h-[50px] w-[300px] bg-gray-300 rounded-lg"></div>
      </div>
    </div>
  );
};

export default FiltersSkeleton;

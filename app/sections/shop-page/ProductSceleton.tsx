import React, { FC } from "react";

const ProductSceleton: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[310px] gap-[10px] bg-darkCharcoal p-[10px] rounded-md">
      <div className="animate-pulse w-full h-[300px] rounded-md bg-amberOrange mb-2"></div>
      <div className="animate-pulse h-3 w-2/3 bg-gray-300 rounded-sm"></div>
      <div className="animate-pulse h-4 w-1/3 bg-gray-300 rounded-sm"></div>
    </div>
  );
};

export default ProductSceleton;

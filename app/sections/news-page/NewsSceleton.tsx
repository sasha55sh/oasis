import React, { FC } from "react";

const NewsSceleton: FC = () => {
  return (
    <div className="flex flex-col w-full gap-[10px] bg-oldSilver/60 p-[10px] rounded-md">
      <div className="animate-pulse w-full h-[170px] rounded-xl bg-oldSilver/30 mb-[8px]"></div>
      <div className="w-full flex justify-between">
        <div className="animate-pulse h-[12px] w-[90px] bg-gray-300 rounded-xl"></div>
        <div className="animate-pulse h-[12px] w-[50px] bg-gray-300 rounded-xl"></div>
      </div>
      <div className="animate-pulse h-[16px] w-[255px] h-[25px] bg-gray-300 rounded-xl"></div>
      <div className="animate-pulse h-[12px] w-[50px] bg-gray-300 rounded-xl"></div>
    </div>
  );
};

export default NewsSceleton;

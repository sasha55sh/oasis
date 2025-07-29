"use client";
import React, { FC } from "react";
import { Card } from "flowbite-react";
import { News } from "@/config/types";
import Image from "next/image";

const NewsCardComponent: FC<News & { className?: string }> = ({
  className,
  image,
  handle,
  title,
  date,
  category,
}) => {
  return (
    <Card
      className={`${className} w-full`}
      renderImage={() => (
        <Image
          width={340}
          height={170}
          src={image}
          alt={handle}
          className="h-[170px] w-full rounded-b-lg object-cover"
        />
      )}
    >
      <a href={`/news/${handle}`} className="flex flex-col space-y-[10px]">
        <div className="w-full flex justify-between text-darkLiver">
          <p className="bg-oldSilver/30 rounded-lg px-[10px] py-[5px] text-[10px] md:text-[14px] xl:text-[16px]">
            {category}
          </p>
          <p className="text-[10px] md:text-[12px] xl:text-[14px]">{date}</p>
        </div>

        <h5 className="text-amberOrange text-[18px] font-bold h-[55px]">
          {title}
        </h5>
        <p className="text-[12px] text-limeGreen xl:text-[14px]">Read more</p>
      </a>
    </Card>
  );
};

export default NewsCardComponent;

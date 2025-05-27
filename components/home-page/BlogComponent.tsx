import React, { FC } from "react";
import Image from "next/image";

import thumbUp from "@/images/vectors/thumb-up-icon.svg";
import chat from "@/images/vectors/chat-icon.svg";
import share from "@/images/vectors/share-icon.svg";

interface blogProps {
  className?: string;
  imageSrc: string;
  imageAlt: string;
  postDate: string;
  title: string;
}

const BlogComponent: FC<blogProps> = ({
  className,
  imageSrc,
  imageAlt,
  postDate,
  title,
}) => {
  return (
    <div
      className={`${className} relative text-white flex flex-col items-center`}
    >
      <Image src={imageSrc} alt={imageAlt} width={360} height={330} />
      <div className="p-[10px] space-y-[20px] py-[20px] border border-[1px] border-solid border-white max-w-[360px] border-t-transparent">
        <p className="text-amberOrange">{postDate}</p>
        <h2 className="text-[24px] font-bold max-w-[340px]">{title}</h2>
        <div className="flex justify-between">
          <p>Learn more</p>
          <div className="flex space-x-[10px]">
            <Image src={thumbUp} alt="thumb up" />
            <Image src={chat} alt="chat" />
            <Image src={share} alt="share" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;

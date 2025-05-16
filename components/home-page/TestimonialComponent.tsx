import React, { FC } from "react";
import Image from "next/image";

import flowersBg from "@/images/home-page/testimonials/flowers-bg.svg";
import quotes from "@/images/home-page/testimonials/quotes.svg";

interface testimonialProps {
  className?: string;
  reviewerSrc: string;
  responseText: string;
  ratingStars: string;
  reviewerName: string;
  reviewerOccupation: string;
}
const TestimonialComponent: FC<testimonialProps> = ({
  className,
  responseText,
  reviewerName,
  ratingStars,
  reviewerSrc,
  reviewerOccupation,
}) => {
  return (
    <div
      className={`${className} bg-white py-[30px] px-[60px] rounded-lg relative`}
    >
      <Image src={flowersBg} alt="flowers background" className="adsolute" />

      <div className="adsolute flex flex-col items-center space-y-[20px]">
        <Image src={reviewerSrc} alt="reviewer photo" />
        <Image src={quotes} alt="quotes" />
        <p className="text-[18px] text-darkLiver text-center max-w-[700px]">{responseText}</p>
        <Image src={ratingStars} alt="rating stars" />
        <p className="text-[24px] text-darkCharcoal font-bold">{reviewerName}</p>
        <p className="text-[16px] text-oldSilver">{reviewerOccupation}</p>
      </div>
    </div>
  );
};

export default TestimonialComponent;

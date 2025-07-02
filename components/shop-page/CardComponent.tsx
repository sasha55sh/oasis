import React, { FC, MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card } from "flowbite-react";

import { CardProps } from "@/config/types";
import { useCart } from "@/hooks/useCart";
import Basket from "@/images/vectors/basket.svg";

const CardComponent: FC<CardProps & { className?: string }> = ({
  className,
  id,
  handle,
  title,
  price,
  discount,
  image,
  quantity,
  gramm,
}) => {
  const { addToCart, isOpen, changeOpenState } = useCart();

  const handleAddToBasket = (e: MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("add_to_backet"));
    !isOpen && changeOpenState(true);

    addToCart(
      {
        id: id,
        handle: handle,
        title: title,
        price: +price,
        image: image,
        quantity: 1,
        maxQuantity: quantity,
        gramm: gramm,
      },
      1
    );
  };
  return (
    <Card className="max-w-sm relative" imgAlt={title} imgSrc={image}>
      {discount !== 0 && (
        <div className="absolute z-10 bg-[red] text-white rounded-md px-2 py-1 top-2 left-2 font-semibold">
          - {discount}%
        </div>
      )}
      <a href={`/catalog/${handle}`}>
        <h5 className="text-[18px] font-semibold tracking-tight text-darkLiver">
          {title}
        </h5>
        <p>{gramm} g</p>
        <div className="flex items-center justify-between">
          <span>
            {discount !== 0 ? (
              <p className="flex gap-3">
                <span className="font-light text-xl text-silver line-through">
                  {Number(Number(price) / (1 - discount / 100)).toFixed(2)}
                </span>
                <span className="text-xl text-darkBlack font-medium">
                  {Number(price)} $
                </span>
              </p>
            ) : (
              <span className="font-normal text-xl text-onyx">
                {Number(price)} $
              </span>
            )}
          </span>
        </div>
      </a>
    </Card>
  );
};

export default CardComponent;

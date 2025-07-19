"use client";
import React, { FC, useEffect, useState } from "react";
import { Card } from "flowbite-react";
import { CardProps } from "@/config/types";
import { useCart } from "@/hooks/useCart";
import Image from "next/image";
import Counter from "@/components/CounterComponent";

import Heart from "@/images/vectors/heart-icon.svg";
import Plus from "@/images/vectors/plus-icon.svg";

const CardComponent: FC<CardProps & { className?: string }> = ({
  className,
  id,
  handle,
  title,
  price,
  discount,
  image,
  description,
  grams,
}) => {
  const [showCounter, setShowCounter] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(0);
  const [maxQuantity, setMaxQuantity] = useState<number>(10);
  const { addToCart, isOpen, changeOpenState } = useCart();

  useEffect(() => {
    if (quantity <= 0) {
      setShowCounter(false);
    }
  }, [quantity]);

  const handleIncrement = () => {
    setQuantity((prev) => Math.min(prev + 1, maxQuantity));
  };

  const handleDecrement = () => {
    setQuantity((prev) => Math.max(prev - 1, 0));
  };

  const handleAddToBasket = (id: string) => {
    !isOpen && changeOpenState(true);

    addToCart(
      {
        id: id,
        handle: handle,
        title: title,
        price: +price,
        image: image,
      },
      quantity
    );
  };

  const discountedPrice = (
    Number(price) -
    Number(price) * Number(discount)
  ).toFixed(2);

  return (
    <Card
      className={`${className} max-w-sm relative`}
      renderImage={() => (
        <Image
          width={385}
          height={385}
          src={image}
          alt={handle}
          className="h-[380px] rounded-t-lg object-cover"
        />
      )}
    >
      {discount > 0 && (
        <span className="absolute p-[10px] bg-electricRed text-white top-0 left-0 rounded-xl">
          -{Number(discount) * 100}%
        </span>
      )}

      <a href={`/shop/${handle}`} className="flex flex-col space-y-[10px]">
        <h5 className="text-[22px] text-darkLiver font-bold leading-none h-[45px]">
          {title}
        </h5>
        <p className="text-amberOrange">{grams} g</p>
        <p className="text-oldSilver h-[80px]">{description}</p>
      </a>

      <div className="flex justify-between items-center">
        {discount !== 0 ? (
          <div className="flex gap-[10px] items-center">
            <p className="text-[24px] text-electricRed font-bold">
              {discountedPrice} $
            </p>
            <p className="text-amberOrange font-medium line-through">
              {Number(price)} $
            </p>
          </div>
        ) : (
          <p className="text-[24px] text-amberOrange font-bold">
            {Number(price)} $
          </p>
        )}

        {!showCounter ? (
          <div className="flex gap-[10px]">
            <button
              className="p-[10px] rounded-xl bg-oldSilver/10 w-[56px] h-[56px] flex items-center justify-center"
              aria-label="like-button"
            >
              <Image src={Heart} alt="heart-icon" />
            </button>
            <button
              className="w-[56px] h-[56px] rounded-xl flex items-center justify-center bg-amberOrange/50 hover:bg-amberOrange transition-colors group"
              onClick={() => {
                setShowCounter(true);
                setQuantity(1);
                handleAddToBasket(id);
              }}
              aria-label="add-to-cart"
            >
              <Image
                src={Plus}
                alt="Plus Icon"
                className="transition-colors group-hover:filter group-hover:brightness-0 group-hover:invert"
              />
            </button>
          </div>
        ) : (
          <Counter
            quantity={quantity}
            onIncrease={handleIncrement}
            onDecrease={handleDecrement}
            maxQuantity={maxQuantity}
          />
        )}
      </div>
    </Card>
  );
};

export default CardComponent;

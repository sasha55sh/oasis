"use client";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import { Card } from "flowbite-react";
import { CardProps } from "@/config/types";
import { useCart } from "@/hooks/useCart";
import { toggleFavorite } from "@/service/UserService";
import Counter from "@/components/CounterComponent";
import AuthModal from "@/components/account-page/LoginComponent";

import Heart from "@/images/vectors/heart-icon.svg";
import HeartFilled from "@/images/vectors/filled-heard-icon.svg";
import Plus from "@/images/vectors/plus-icon.svg";

const CardComponent: FC<
  CardProps & {
    className?: string;
    initialFavorite?: boolean;
    onFavoriteChange?: () => void;
  }
> = ({
  className,
  id,
  handle,
  title,
  price,
  discount,
  image,
  description,
  grams,
  initialFavorite = false,
  onFavoriteChange,
}) => {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);
  const [openModal, setOpenModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { addToCart, products, removeFromCart } = useCart();

  const cartProduct = products.find((p) => p.id === id);
  const quantity = cartProduct?.quantity || 0;
  const maxQuantity = cartProduct?.maxQuantity || 100;

  useEffect(() => setIsFavorite(initialFavorite), [initialFavorite]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleToggleFavorite = async () => {
    if (isLoggedIn) {
      await toggleFavorite({
        id,
        handle,
        title,
        price,
        image,
        grams,
        description,
        discount,
      });

      setIsFavorite(!isFavorite);

      if (onFavoriteChange) {
        onFavoriteChange();
      }
    } else {
      setOpenModal(true);
    }
  };

  const handleAddToCart = () => {
    addToCart(
      { id, handle, title, price, image, grams, maxQuantity, quantity: 1 },
      1
    );
  };

  const handleIncrease = () => handleAddToCart();

  const handleDecrease = () => {
    if (quantity === 1) removeFromCart(id);
    else
      addToCart(
        { id, handle, title, price, image, grams, maxQuantity, quantity: 1 },
        -1
      );
  };

  const discountedPrice = (
    Number(price) -
    Number(price) * Number(discount)
  ).toFixed(2);

  return (
    <>
      <AuthModal openModal={openModal} setOpenModal={setOpenModal} />
      <Card
        className={`${className} max-w-sm relative`}
        renderImage={() => (
          <Image
            width={385}
            height={385}
            src={image}
            alt={handle}
            priority
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
                {Number(price).toFixed(2)} $
              </p>
            </div>
          ) : (
            <p className="text-[24px] text-amberOrange font-bold">
              {Number(price).toFixed(2)} $
            </p>
          )}

          {quantity > 0 ? (
            <Counter
              quantity={quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              maxQuantity={maxQuantity}
            />
          ) : (
            <div className="flex gap-[10px]">
              <button
                onClick={handleToggleFavorite}
                className="p-[10px] rounded-xl bg-oldSilver/10 w-[56px] h-[56px] flex items-center justify-center"
                aria-label="like-button"
              >
                <Image
                  src={isFavorite ? HeartFilled : Heart}
                  alt="heart-icon"
                />
              </button>

              <button
                className="w-[56px] h-[56px] rounded-xl flex items-center justify-center bg-amberOrange/50 hover:bg-amberOrange transition-colors group"
                onClick={handleAddToCart}
                aria-label="add-to-cart"
              >
                <Image
                  src={Plus}
                  alt="Plus Icon"
                  className="transition-colors group-hover:filter group-hover:brightness-0 group-hover:invert"
                />
              </button>
            </div>
          )}
        </div>
      </Card>
    </>
  );
};

export default CardComponent;

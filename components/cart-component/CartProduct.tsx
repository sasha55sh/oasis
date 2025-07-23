import React from "react";
import Image from "next/image";
import { CartProductProps } from "@/config/types";
import close from "@/images/vectors/close-orange.svg";
import { useCart } from "@/hooks/useCart";
import Counter from "../CounterComponent";

const CartProduct = ({ product }: { product: CartProductProps }) => {
  const {
    products,
    addQuantity,
    removeQuantity,
    removeFromCart,
    changeOpenState,
  } = useCart();

  const onHandleClickDelete = (id: string) => {
    removeFromCart(id);
    products.length == 1 && changeOpenState(false);
  };

  const onHandleClickAddQuantity = (id: string) => {
    addQuantity(id);
  };

  const onHandleClickRemoveQuantity = (id: string) => {
    removeQuantity(id);
  };

  return (
    <li className="relative bg-warmWhite/50 rounded-xl flex pl-[10px] py-[10px]">
      <div>
        <button
          className="absolute bg-warmWhite/90 rounded-full left-[-7px] top-1/2 -translate-y-1/2 "
          onClick={() => onHandleClickDelete(product.id)}
        >
          <Image src={close} alt="close" />
        </button>
        <Image
          src={product.image}
          alt={product.handle}
          width={100}
          height={120}
          className="rounded-md"
        />
      </div>

      <div className="flex flex-col gap-y-[5px] ml-[10px] pr-[5px] w-full">
        <h2 className="text-darkLiver font-bold leading-none">
          {product.title}
        </h2>
        <p className="text-oldSilver text-[14px]"> {product.grams} g</p>

        <div className="flex w-full justify-between items-center">
          <p className="text-amberOrange font-bold text-[24px]">
            {Number(product.price).toFixed(2)}
            <span className="text-[16px] text-oldSilver"> $</span>
          </p>

          <Counter
            maxQuantity={100}
            quantity={product.quantity}
            onDecrease={() => onHandleClickRemoveQuantity(product.id)}
            onIncrease={() => onHandleClickAddQuantity(product.id)}
            className="scale-[0.75]"
          />
        </div>
      </div>
    </li>
  );
};

export default CartProduct;

import React, { FC } from "react";
import Image from "next/image";
import { Product } from "@/config/types";
import { useCart } from "@/hooks/useCart";
import Plus from "@/images/vectors/plus-icon.svg";

interface productProps {
  product: Product;
  className?: string;
}

const RecommendedProduct: FC<productProps> = ({ product, className }) => {
  const { addQuantity, products, addToCart } = useCart();

  const discountedPrice = (
    Number(product.price) -
    Number(product.price) * Number(product.discount)
  ).toFixed(2);

  const finalPrice =
    product.discount && product.discount > 0
      ? Number(discountedPrice)
      : Number(product.price);

  const handleAddToCart = (product: Product) => {
    const existingProduct = products.find((p) => p.id === product.id);

    if (existingProduct) {
      addQuantity(product.id);
    } else {
      addToCart(
        { ...product, price: finalPrice, quantity: 1, maxQuantity: 100 },
        1
      );
    }
  };

  return (
    <li
      className={`${className} rounded-md p-[10px] shadow-md flex flex-col items-center max-w-[250px]`}
    >
      <div className="flex flex-col space-y-[8px]">
        <Image
          src={product.image}
          alt={product.title}
          width={100}
          height={100}
          className="rounded-xl object-fill w-[220px] h-[220px]"
        />

        <p className="text-[18px] font-bold text-darkLiver h-[55px]">
          {product.title}
        </p>
        <p className="text-oldSilver">{product.grams} g</p>
      </div>

      <div className="flex justify-between w-full items-center px-[5px]">
        {product.discount && product.discount > 0 ? (
          <div className="flex gap-[10px] items-center">
            <p className="text-[24px] text-electricRed font-bold">
              {discountedPrice} $
            </p>
            <p className="text-amberOrange font-medium line-through">
              {Number(product.price).toFixed(2)} $
            </p>
          </div>
        ) : (
          <p className="text-[24px] text-amberOrange font-bold">
            {Number(product.price).toFixed(2)} $
          </p>
        )}

        <button
          onClick={() => handleAddToCart(product)}
          className="group bg-amberOrange/50 hover:bg-amberOrange p-[10px] rounded-xl"
        >
          <Image
            src={Plus}
            alt="Plus icon"
            className="transition-colors group-hover:filter group-hover:brightness-0 group-hover:invert"
          />
        </button>
      </div>
    </li>
  );
};

export default RecommendedProduct;

"use client";

import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import { useCart } from "@/hooks/useCart";
import { Product } from "@/config/types";
import { getProducts } from "@/service/ProductService";
import EmptyCart from "@/images/vectors/cart-empty.svg";
import Title from "@/components/TitleComponent";
import CartProduct from "@/components/cart-component/CartProduct";
import CardComponent from "@/components/shop-page/CardComponent";
import ProductSceleton from "@/app/sections/shop-page/ProductSceleton";

const CartSection: FC = () => {
  const [randomProducts, setRandomProducts] = useState<Product[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { products } = useCart();

  useEffect(() => {
    const fetchRandomProducts = async () => {
      setIsLoading(true);
      const data = await getProducts();
      if (data?.length) {
        const shuffled = [...data].sort(() => 0.5 - Math.random());
        setRandomProducts(shuffled.slice(0, 4));
      }
      setIsLoading(false);
    };
    fetchRandomProducts();
  }, []);

  return (
    <section>
      <Title title="Cart" />
      <div className="container my-[30px] space-y-[25px]">
        <h1 className="text-[24px] text-darkLiver font-bold sm:text-[30px] lg:text-[36px]">
          Your order
        </h1>

        {isLoading ? (
          <>
            {Array.from({ length: 3 }, (_, index) => (
              <div
                key={index}
                className="animate-pulse h-[100px] w-full bg-gray-300 rounded-lg"
              ></div>
            ))}
          </>
        ) : products.length === 0 ? (
          <div className="flex flex-col items-center shadow-xl rounded-xl space-y-[15px] py-[50px]">
            <Image src={EmptyCart} alt="Empty cart" width={400} height={400} />
            <p className="text-[24px] text-amberOrange font-bold sm:text-[30px] lg:text-[36px]">
              Oops! Cart is empty
            </p>
            <p className="text-darkLiver font-bold text-[18px] sm:text-[22px]">
              Choose something tasty
            </p>
          </div>
        ) : (
          <ul className="flex flex-col space-y-[15px]">
            {products.map((product, index) => (
              <CartProduct key={index} product={product} />
            ))}
          </ul>
        )}

        <p className="text-center text-[20px] text-amberOrange font-bold sm:text-[26px] lg:text-[30px]">
          Oasis recommends
        </p>

        <div className="grid gap-[20px] grid-cols-1 justify-center place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {isLoading ? (
            <>
              {Array.from({ length: 4 }, (_, index) => (
                <ProductSceleton key={index} />
              ))}
            </>
          ) : (
            <>
              {randomProducts?.map((product, index) => (
                <CardComponent key={index} {...product} />
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default CartSection;

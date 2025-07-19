"use client";
import React, { useContext } from "react";
import { CardProps } from "@/config/types";
import ProductSceleton from "./ProductSceleton";
import { ProductsContext } from "./ShopMain";
import CardComponent from "@/components/shop-page/CardComponent";

const ShopSection = ({
  totalProducts,
  isLoading,
}: {
  totalProducts: number;
  isLoading: boolean;
}) => {
  const allProducts = useContext(ProductsContext);

  return (
    <section className="container my-[50px]">
      <div className="grid gap-[20px] grid-cols-1 justify-center place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {isLoading ? (
          <>
            {Array.from({ length: 9 }, (_, index) => (
              <ProductSceleton key={index} />
            ))}
          </>
        ) : (
          <>
            {allProducts.map((card: CardProps, index) => (
              <CardComponent {...card} key={index} />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default ShopSection;

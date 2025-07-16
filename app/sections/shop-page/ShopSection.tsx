"use client";
import React, { useContext } from "react";
import { CardProps } from "@/config/types";
import ProductSceleton from "./ProductSceleton";
import { ProductsContext } from "./ShopMain";
import CardComponent from "@/components/shop-page/CardComponent";

const ShopSection = ({
  totalProducts,
  limit,
  isLoading,
}: {
  totalProducts: number;
  limit: number;
  isLoading: boolean;
}) => {
  const allProducts = useContext(ProductsContext);

  return (
    <section>
      {isLoading ? (
        <div>
          {Array.from({ length: limit }, (_, index) => (
            <ProductSceleton key={index} />
          ))}
        </div>
      ) : (
        <div>
          {allProducts.map((card: CardProps, index) => (
            <CardComponent {...card} key={index} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ShopSection;

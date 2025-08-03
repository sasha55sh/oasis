"use client";
import React, { FC, useState, useEffect, createContext } from "react";
import ShopSection from "./ShopSection";
import ShopFilters from "./ShopFilters";
import Title from "@/components/TitleComponent";
import { CardProps } from "@/config/types";
import { getProducts } from "@/service/ProductService";

export const ProductsContext = createContext<CardProps[]>([]);

const ShopMain: FC = () => {
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const [products, setProducts] = useState<CardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const data = await getProducts();
      if (data?.length) {
        setProducts(data);
        setTotalProducts(data.length);
      } else {
        setProducts([]);
        setTotalProducts(0);
      }
      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      <Title title="Shop" />
      <ShopFilters
        setProducts={setProducts}
        products={products}
        isLoading={isLoading}
      />
      <ShopSection totalProducts={totalProducts} isLoading={isLoading} />
    </ProductsContext.Provider>
  );
};

export default ShopMain;

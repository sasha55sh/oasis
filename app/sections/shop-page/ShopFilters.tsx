"use client";
import React, { useState, useEffect, FC } from "react";
import Image from "next/image";
import { categoryButton } from "@/config/types";
import {
  getProductsByCategory,
  searchProducts,
  getProducts,
} from "@/service/ProductService";
import SearchInput from "@/components/SearchInputComponent";
import { useDebounce } from "@/hooks/useDebounce"; // шлях до файлу

import Bowl from "@/images/vectors/bowl-icon.svg";
import Breakfast from "@/images/vectors/breakfast-icon.svg";
import Dessert from "@/images/vectors/dessert-icon.svg";
import Main from "@/images/vectors/mainDish-icon.svg";
import Soup from "@/images/vectors/soup-icon.svg";
import NotFound from "@/images/vectors/not-found.svg";

const menuData: categoryButton[] = [
  { title: "Bowl", src: Bowl, alt: "bowl icon", value: "bowl" },
  {
    title: "Breakfast",
    src: Breakfast,
    alt: "breakfast icon",
    value: "breakfast",
  },
  { title: "Dessert", src: Dessert, alt: "dessert icon", value: "dessert" },
  { title: "Main", src: Main, alt: "main dish icon", value: "main" },
  { title: "Soup", src: Soup, alt: "soup icon", value: "soup" },
];

const ShopFilters: FC<{
  setProducts: any;
  products: any;
  isLoading: boolean;
}> = ({ setProducts, products, isLoading }) => {
  const [searchedText, setSearchedText] = useState<string>("");
  const debouncedQuery = useDebounce(searchedText, 600);

  const handleCategoryClick = async (category: string) => {
    const data = await getProductsByCategory(category);
    setProducts(data);
  };

  const handleSearch = async (value: string) => {
    const data = await searchProducts(value);
    setProducts(data);
  };

  useEffect(() => {
    if (debouncedQuery.trim() !== "") {
      handleSearch(debouncedQuery);
    } else {
      const fetchAllProducts = async () => {
        const data = await getProducts();
        setProducts(data);
      };
      fetchAllProducts();
    }
  }, [debouncedQuery]);

  return (
    <section className="container my-[30px]">
      <div className="flex space-x-[10px] justify-center">
        {menuData.map((item, index) => (
          <button
            key={index}
            onClick={() => handleCategoryClick(item.value)}
            className="rounded-lg flex items-center space-x-[10px] shadow-xl p-[10px] hover:bg-amberOrange"
          >
            <Image src={item.src} alt={item.alt} />
            <p className="font-bold">{item.title}</p>
          </button>
        ))}
      </div>

      <SearchInput
        value={searchedText}
        onChange={setSearchedText}
        placeholder="Enter product or ingredient name"
      />

      {!isLoading && products.length === 0 && (
        <div className="rounded-xl shadow-xl my-[20px] flex justify-center space-x-[50px] items-center">
          <Image src={NotFound} alt="Not found" width={600} height={600} />
          <div>
            <p className="text-[42px] font-medium text-amberOrange">
              Nothing found
            </p>
            <p className="text-[22px] text-oldSilver">
              Try selecting other filters
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ShopFilters;

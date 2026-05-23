"use client";
import React, { useState, useEffect, FC } from "react";
import Image from "next/image";
import { CategoryButton, CardProps } from "@/config/types";
import { useDebounce } from "@/hooks/useDebounce";
import FiltersSkeleton from "./FilterSceleton";
import {
  getProductsByCategory,
  searchProducts,
  getProducts,
  getSortedProducts,
} from "@/service/productService";

import { SearchInput, Select } from "@/components/ui";
import {
  Bowl,
  Breakfast,
  Dessert,
  Main,
  Soup,
  NotFound,
} from "@/public/shop-page";

const categoryMap: Record<string, string> = {
  bowl: "Боули",
  breakfast: "Cніданки",
  dessert: "Десерти",
  main: "Основні страви",
  soup: "Супи",
};

const menuData: CategoryButton[] = [
  { title: "Боули", src: Bowl, alt: "Bowl icon", value: "bowl" },
  {
    title: "Сніданки",
    src: Breakfast,
    alt: "breakfast icon",
    value: "breakfast",
  },
  { title: "Десерти", src: Dessert, alt: "Dessert icon", value: "dessert" },
  { title: "Основні страви", src: Main, alt: "Main dish icon", value: "main" },
  { title: "Супи", src: Soup, alt: "Soup icon", value: "soup" },
];

const optionsData = [
  { value: "new", label: "Нове" },
  { value: "lprice", label: "Від дешевого до дорогого" },
  { value: "hprice", label: "Від дорогого до дешевого" },
];

const ShopFilters: FC<{
  setProducts: (products: CardProps[]) => void;
  products: CardProps[];
  isLoading: boolean;
}> = ({ setProducts, products, isLoading }) => {
  const [searchedText, setSearchedText] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [selectedValue, setSelectedValue] = useState<string>("");

  const debouncedQuery = useDebounce(searchedText, 600);

  const handleCategoryClick = async (category: string) => {
    const data = await getProductsByCategory(category);
    setCategory(category);
    setProducts(data);
  };

  const handleSearch = async (value: string) => {
    const data = await searchProducts(value);
    setProducts(data);
  };

  const handleSort = async (sort: string) => {
    const data = await getSortedProducts(sort);
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
    <section className="flex flex-col my-[30px] space-y-[15px] items-center">
      {isLoading ? (
        <FiltersSkeleton />
      ) : (
        <>
          <div className="container flex space-x-[10px] justify-start overflow-x-auto custom-scrollbar py-[10px] sm:justify-center">
            {menuData.map((item, index) => (
              <button
                key={index}
                onClick={() => handleCategoryClick(item.value)}
                className="rounded-lg flex items-center space-x-[10px] shadow-md p-[10px] hover:bg-amberOrange/60 flex-shrink-0"
              >
                <Image src={item.src} alt={item.alt} />
                <p className="font-bold">{item.title}</p>
              </button>
            ))}
          </div>

          <SearchInput
            value={searchedText}
            onChange={setSearchedText}
            placeholder="Введіть назву страви або інгредієнта"
          />
          <div className="md:container md:flex md:items-center md:justify-between">
            <h2 className="hidden capitalize text-[24px] text-darkLiver font-bold md:inline">
              {categoryMap[category]}
            </h2>
            <Select
              options={optionsData}
              value={selectedValue}
              onSelect={(value) => {
                setSelectedValue(value);
                handleSort(value);
              }}
            />
          </div>

          {!isLoading && products.length === 0 && (
            <div className="flex flex-col-reverse justify-center items-center rounded-xl shadow-xl my-[20px] py-[30px] text-center lg:flex-row lg:justify-evenly w-full">
              <Image src={NotFound} alt="Not found" width={600} height={600} />
              <div>
                <p className="text-[30px] font-medium text-amberOrange md:text-[42px]">
                  Нічого не знайдено
                </p>
                <p className="text-[22px] text-oldSilver">
                  Спробуйте обрати інші фільтри
                </p>
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default ShopFilters;

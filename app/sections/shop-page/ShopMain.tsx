"use client";
import React, { FC, useState, useEffect, createContext } from "react";

import Title from "@/components/TitleComponent";
import { CardProps } from "@/config/types";
import ShopSection from "./ShopSection";
import { useAlert } from "@/hooks/alertContext";
import { getFilters } from "@/service/ProductService";
import { PaginationProvider } from "@/hooks/useCustomPagination";

export const ProductsContext = createContext<CardProps[]>([]);
const LIMIT = 12;

const ShopMain: FC = () => {
  const [filters, setFilters] = useState({});
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const [products, setProducts] = useState<CardProps[]>([]);
  const [isStart, setIsStart] = useState<boolean>(true);
  const [isFilter, setIsFilter] = useState<boolean>(false);
  const [sort, setSort] = useState<string>("LPRICE");
  const [reverse, setReverse] = useState<boolean>(true);

  const [isOpenFilters, setIsOpenFilters] = useState(false);
  const [isSearchLoading, setIsSearchLoading] = useState(false);

  const { setInfoMessage } = useAlert();

  useEffect(() => {
    const fetchFilters = async () => {
      const data = await getFilters(setInfoMessage);
      if (data.priceRange.values[0].value[1] != 10) {
        setFilters(data);
        setIsFilter(true);
      }
    };

    fetchFilters();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (isOpenFilters) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }

    return () => document.documentElement.classList.remove("overflow-hidden");
  }, [isOpenFilters]);

  const handleChangeTotalProducts = (num: number) => {
    setTotalProducts(num);
  };

  const handleUpdateProducts = (newProducts: CardProps[]) => {
    setProducts(newProducts);
  };

  const handleToggleFilter = (value: boolean) => {
    setIsOpenFilters(value);
  };

  const handleToggleIsSearch = (value: boolean) => {
    setIsSearchLoading(value);
  };

  return (
    <>
      <PaginationProvider>
        <ProductsContext.Provider value={products}>
          <Title title="our shop" />
          <div>
            <ShopSection
              isFilter={isFilter}
              isStart={isStart}
              totalProducts={totalProducts}
              limit={LIMIT}
              setSort={setSort}
              setReverse={setReverse}
              sort={sort}
              handleToggleFilter={handleToggleFilter}
              isSearchLoading={isSearchLoading}
            />
          </div>
        </ProductsContext.Provider>
      </PaginationProvider>
    </>
  );
};

export default ShopMain;

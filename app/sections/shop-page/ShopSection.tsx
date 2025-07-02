"use client";
import React, { FC, useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePagination } from "@mantine/hooks";

import { CardProps } from "@/config/types";
import ProductSceleton from "./ProductSceleton";
import { ProductsContext } from "./ShopMain";
import CardComponent from "@/components/shop-page/CardComponent";
import CustomSelect from "@/components/SelectComponent";
import { useCustomPagination } from "@/hooks/useCustomPagination";
import Button from "@/components/ButtonComponent";
import { Loader } from "@mantine/core";

const ShopSection = ({
  isFilter,
  totalProducts,
  limit,
  sort,
  setSort,
  setReverse,
  isStart,
  handleToggleFilter,
  isSearchLoading,
}: {
  isFilter: boolean;
  totalProducts: number;
  limit: number;
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
  setReverse: React.Dispatch<React.SetStateAction<boolean>>;
  isStart: boolean;
  handleToggleFilter: (value: boolean) => void;
  isSearchLoading: boolean;
}) => {
  const { goToPage, currentPage } = useCustomPagination();
  const allProducts = useContext(ProductsContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isStart) {
      if (allProducts.length != 0) {
        setTimeout(() => {
          setIsLoading(false);
        }, 30);
      } else {
        setTimeout(() => {
          setIsLoading(false);
        }, 21000);
      }
    }
  }, [allProducts]);

  useEffect(() => {
    if (currentPage === 1) {
      pagination.setPage(0);
      goToPage(1);
    }
  }, [currentPage]);

  const pagination = usePagination({
    total: Math.ceil(totalProducts / limit),
    initialPage: 1,
    siblings: 1,
    boundaries: 1,
  });

  const generatePaginationRange = () => {
    const range = [];
    const totalPages = Math.ceil(totalProducts / limit);
    const currentPage = pagination.active;
    if (currentPage !== 1) {
      range.push(1);
    }
    if (currentPage > 3) {
      range.push("...");
    }
    if (currentPage > 2) {
      range.push(currentPage - 1);
    }
    range.push(currentPage);
    if (currentPage < totalPages - 1) {
      range.push(currentPage + 1);
    }
    if (currentPage === totalPages - 1) {
      range.push(totalPages);
    }
    if (currentPage < totalPages - 2) {
      range.push("...");
    }
    return range;
  };

  const handleChangePage = (range: number) => {
    pagination.setPage(range);
    goToPage(range);
    window.scrollTo({ top: 100, behavior: "smooth" });
  };

  const handleChangeSorting = (value: string) => {
    let newValue = value == "HPRICE" || value == "LPRICE" ? "PRICE" : value;

    if (value === "HPRICE") setReverse(true);
    if (value === "LPRICE") setReverse(false);
    if (value === null || value === "") {
      setReverse(true);
      newValue = "CREATED_AT";
    }

    setSort(newValue);
  };

  return (
    <section>
      <div className={`${!isFilter ? "opacity-0" : "opacity-100 "}`}>
        <Button
          text="Filter"
          icon="filter"
          onClick={() => handleToggleFilter(true)}
        />

        <CustomSelect
          left
          placeholder="Sort by"
          options={[
            { value: "LPRICE", label: "Cheaper at first" },
            {
              value: "HPRICE",
              label: "Сheaper at first",
            },
            {
              value: "BEST_SELLING",
              label: "Top sales",
            },
          ]}
          onSelect={handleChangeSorting}
          sort={sort}
        />
      </div>

      {isLoading ? (
        <div>
          {Array.from({ length: limit }, (_, index) => (
            <ProductSceleton key={index} />
          ))}
        </div>
      ) : isSearchLoading ? (
       <div className="flex justify-center items-center min-h-[80vh] w-full ">
        <Loader className="animate-spin rounded-full border-4 border-darkBlack border-b-transparent w-10 h-10" />
      </div>
      ) : allProducts.length === 0 && !isStart ? (
        <motion.div
          className="text-center text-gray-500 text-lg py-[40px] lg:py-[60px] lg:text-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          No product with these characteristics was found
        </motion.div>
      ) : (
        <>
          <div>
            {allProducts.map((card: CardProps) => (
              <CardComponent {...card} key={card.id} />
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-10 items-center text-[18px]">
            <button
              disabled={pagination.active === 1}
              onClick={() => handleChangePage(pagination.active - 1)}
              className="h-7 w-3 text-darkBlack rounded-sm disabled:opacity-0 hover:font-extrabold"
            >
              &lt;
            </button>
            {generatePaginationRange().map((range, index) =>
              range === "..." ? (
                <button
                  key={index}
                  className="h-[28px] rounded-sm text-center text-[10px] bg-pearl text-silver px-2"
                >
                  ...
                </button>
              ) : (
                <button
                  key={index}
                  className={`h-7 w-7 rounded-sm ${
                    pagination.active === range
                      ? "bg-darkBlack text-white"
                      : "bg-pearl text-silver hover:font-bold"
                  }`}
                  onClick={() => handleChangePage(range as number)}
                >
                  {range}
                </button>
              )
            )}
            <button
              disabled={pagination.active === Math.ceil(totalProducts / limit)}
              onClick={() => handleChangePage(pagination.active + 1)}
              className="h-7 w-3 text-darkBlack rounded-sm disabled:opacity-0 hover:font-extrabold "
            >
              &gt;
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default ShopSection;

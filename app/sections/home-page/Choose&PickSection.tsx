"use client";
import React, { FC, useEffect, useState } from "react";
import ProductSceleton from "@/app/sections/shop-page/ProductSceleton";
import CardComponent from "@/components/shop-page/CardComponent";
import { getProducts } from "@/service/ProductService";
import { Carousel } from "flowbite-react";
import { Product } from "@/config/types";

const ChooseAndPickSection: FC = () => {
  const [randomProducts, setRandomProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRandomProducts = async () => {
      setIsLoading(true);
      const data = await getProducts();
      if (data?.length) {
        const shuffled = [...data].sort(() => 0.5 - Math.random());
        let count = 2;
        const width = window.innerWidth;
        if (width >= 1024) count = 3;
        else if (width >= 768) count = 2; 
        setRandomProducts(shuffled.slice(0, count));
      }
      setIsLoading(false);
    };
    fetchRandomProducts();
  }, []);

  return (
    <section className="container flex flex-col my-[50px] items-center space-y-[15px] lg:space-y-[30px] lg:my-[70px]">
      <p className="text-amberOrange font-vibes text-[32px]">Choose & pick</p>
      <h1 className="font-bold text-white leading-none text-[48px] text-center">
        <span className="text-amberOrange">Fr</span>om our menu
      </h1>

      <div className="hidden gap-[20px] justify-center place-items-center w-full md:grid md:grid-cols-2 lg:grid-cols-3">
        {isLoading ? ( 
          <>
            {Array.from({ length: 3 }, (_, index) => (
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

      <div className="md:hidden w-full mx-auto flex items-center">
        <Carousel slide={false} indicators={true} draggable>
          {randomProducts?.map((product, index) => (
            <CardComponent key={index} {...product} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default ChooseAndPickSection;

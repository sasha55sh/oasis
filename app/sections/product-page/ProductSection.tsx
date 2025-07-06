"use client";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "@/config/types";
import { useAlert } from "@/hooks/alertContext";
import { useCart } from "@/hooks/useCart";
import { Loader } from "@mantine/core";
import { getProductByHandle } from "@/service/ProductService";

import Counter from "@/components/CounterComponent";
import Button from "@/components/ButtonComponent";
import EnergyCard from "@/components/shop-page/EnergyCardComponent";

interface productProps {
  productHandle: string;
}

const ProductSection: FC<productProps> = ({ productHandle }) => {
  const [maxQuantity, setMaxQuantity] = useState<number>(10);
  const [quantity, setQuantity] = useState<number>(0);
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState<boolean>(true);
  const [showCounter, setShowCounter] = useState<boolean>(false);

  const { setInfoMessage } = useAlert();
  const { addToCart, isOpen, changeOpenState } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData: Product = await getProductByHandle(
          productHandle,
          setInfoMessage
        );
        if (productData) {
          setProduct(productData);
          setMaxQuantity(10);
        }
      } catch (error) {
        console.error("Failed to fetch product data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productHandle]);

  useEffect(() => {
    if (quantity <= 0) {
      setShowCounter(false);
    }
  }, [quantity]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[80vh] w-full ">
        <Loader className="animate-spin rounded-full border-4 border-amberOrange border-b-transparent w-10 h-10" />
      </div>
    );
  }

  const handleIncrement = () => {
    setQuantity((prev) => Math.min(prev + 1, maxQuantity));
  };

  const handleDecrement = () => {
    setQuantity((prev) => Math.max(prev - 1, 0));
  };

  const handleAddToBasket = (id: string) => {
    !isOpen && changeOpenState(true);

    if (product) {
      addToCart(
        {
          id: product.id,
          title: product.title,
          handle: product.handle,
          price: product.price,
          image: product.image,
        },
        quantity
      );
    }
  };

  const discountedPrice = (
    (Number(product?.price) || 0) -
    (Number(product?.price) || 0) * (Number(product?.discount) || 0)
  ).toFixed(2);

  return (
    <section>
      <div className="container flex flex-col items-center my-[30px] lg:grid lg:grid-cols-2">
        {product?.discount ?? 0 > 0 ? (
          <div className="relative inline-block">
            <span className="absolute p-[10px] bg-electricRed text-white top-[-10px] left-[-15px] rounded-xl ">
              -{Number(product?.discount) * 100}%
            </span>
            <Image
              src={product?.image ?? "Product Image"}
              width={275}
              height={275}
              alt="Product Image"
              className=" rounded-xl mini:w-[370px] md:w-[415px] lg:w-[440px] xl:w-[550px]"
            />
          </div>
        ) : (
          <Image
            src={product?.image ?? "Product Image"}
            width={275}
            height={275}
            alt="Product Image"
            className="rounded-xl mini:w-[370px] md:w-[415px] lg:w-[440px] xl:w-[550px]"
          />
        )}

        <div className="flex flex-col space-y-[15px] mt-[30px] items-center text-center lg:items-start lg:text-left">
          <h2 className="text-[24px] text-darkLiver font-bold sm:text-[30px] lg:text-[36px] ">
            {product?.title ?? "Product Title"}
          </h2>
          <p className="text-[16px] text-oldSilver md:text-[18px]">
            {product?.description ?? "Description"}
          </p>

          <hr className="w-full h-[2px]" />

          <div className="flex flex-col whitespace-nowrap space-y-[15px] w-full items-center mini:space-y-0 mini:flex-row mini:justify-center mini:space-x-[20px] sm:justify-around">
            <div className="flex items-center space-x-[20px]">
              {product?.discount ?? 0 > 0 ? (
                <div className="flex items-end space-x-[5px]">
                  <p className="text-[22px] text-electricRed font-bold md:text-[24px]">
                    {discountedPrice} $
                  </p>
                  <p
                    className="text-[16px] text-amberOrange font-medium line-through
"
                  >
                    {product?.price ?? "0.00"} $
                  </p>
                </div>
              ) : (
                <p className="text-[22px] text-amberOrange font-bold md:text-[24px]">
                  {product?.price ?? "0.00"} $
                </p>
              )}

              <p className="text-oldSilver">{product?.grams ?? "0"} g</p>
            </div>

            {!showCounter ? (
              <Button
                text="I want it"
                icon="basket"
                onClick={() => {
                  setShowCounter(true);
                  setQuantity(1);
                  handleAddToBasket(product?.id || "");
                }}
                className="w-[80%] mini:w-[50%]"
              />
            ) : (
              <Counter
                quantity={quantity}
                onIncrease={handleIncrement}
                onDecrease={handleDecrement}
                maxQuantity={maxQuantity}
              />
            )}
          </div>

          <hr className="w-full h-[2px]" />

          <div className="flex flex-col space-y-[15px] text-center">
            <p className="text-[18px] text-darkLiver md:pt-[10px] lg:text-left">
              Energy value of the product:
            </p>

            <div className="grid grid-cols-2 grid-rows-2 gap-[20px] sm:grid-cols-3 md:grid-cols-4 md:grid-rows-1 lg:grid-cols-3 xl:grid-cols-4">
              <EnergyCard
                quantity={product?.cal ?? 0}
                title="Calories"
                type="cal"
              />
              <EnergyCard
                quantity={product?.proteins ?? 0}
                title="Proteins"
                type="g"
              />
              <EnergyCard quantity={product?.fats ?? 0} title="Fats" type="g" />
              <EnergyCard
                quantity={product?.carbohydrates ?? 0}
                title="Carbohydrates"
                type="g"
              />
            </div>
            <p className="text-[14px] text-oldSilver/50 lg:text-left">
              Energy value is indicated per <b>100g</b>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

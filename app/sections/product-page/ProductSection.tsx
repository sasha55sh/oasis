"use client";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "@/config/types";
import { getProductByHandle } from "@/service/ProductService";
// import { useCart } from "@/hooks/useCart";
import { useAlert } from "@/hooks/alertContext";
import { Loader } from "@mantine/core";

import Counter from "@/components/CounterComponent";
import Button from "@/components/ButtonComponent";
import EnergyCard from "@/components/shop-page/EnergyCardComponent";
import { useCart } from "@/hooks/useCart";

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
          console.log("data: ", productData);
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

  return (
    <section>
      <div className="container flex flex-col items-center">
        <Image
          src={product?.image ?? "csdcsc"}
          width={275}
          height={275}
          alt="Product Image"
          className="rounded-xl"
        />
        <div className="flex flex-col space-y-[15px] my-[30px] items-center text-center">
          <h2 className="text-[24px] text-darkLiver font-bold">
            {product?.title ?? "Product Title"}
          </h2>
          <p className="text-[16px] text-oldSilver">
            {product?.description ?? "description"}
          </p>
          <hr className="w-full h-[2px]" />
          <div className="flex items-center space-x-[20px]">
            <p className="text-[22px] text-amberOrange font-bold">
              {product?.price ?? "0.00"} $
            </p>
            <p className="text-oldSilver">{product?.grams ?? "100"} g</p>
          </div>

          {!showCounter ? (
            <Button
              text="I want it"
              icon="basket"
              onClick={() => {
                setShowCounter(true);
                setQuantity(1);
              }}
              className="w-[80%]"
            />
          ) : (
            <Counter
              quantity={quantity}
              onIncrease={handleIncrement}
              onDecrease={handleDecrement}
              maxQuantity={maxQuantity}
            />
          )}
          <hr className="w-full h-[2px]" />
          <p className="text-[18px] text-darkLiver">
            Energy value of the product:
          </p>

          <div className="grid grid-cols-2 grid-rows-2 gap-[20px]">
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
          <p className="text-[14px] text-oldSilver/50 text-left">
            Energy value is indicated per <b>100g</b>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

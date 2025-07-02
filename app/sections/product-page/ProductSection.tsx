"use client";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "@/config/types";
import { getProductByHandle } from "@/service/ProductService";
// import { useCart } from "@/hooks/useCart";
import { useAlert } from "@/hooks/alertContext";
import { Loader } from "@mantine/core";

import Button from "@/components/ButtonComponent";
import Title from "@/components/TitleComponent";

interface productProps {
  productHandle: string;
}

const ProductSection: FC<productProps> = ({ productHandle }) => {
  const [maxQuantity, setMaxQuantity] = useState<number>(100);
  const [quantity, setQuantity] = useState<number>(1);
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState<boolean>(true);
  const [showCounter, setShowCounter] = useState<boolean>(false);

  const { setInfoMessage } = useAlert();
  //   const { addToCart, isOpen, changeOpenState } = useCart();

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
          setQuantity(1);
          setMaxQuantity(100);
        }
      } catch (error) {
        console.error("Failed to fetch product data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productHandle]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[80vh] w-full ">
        <Loader className="animate-spin rounded-full border-4 border-amberOrange border-b-transparent w-10 h-10" />
      </div>
    );
  }

  // const handleQuantityChange = (value: number | string | undefined) => {
  //   const numericValue = typeof value === "string" ? parseFloat(value) : value;
  //   if (!isNaN(numericValue as number)) {
  //     setQuantity(numericValue as number);
  //   }
  // };

  const handleIncrement = () => {
    setQuantity((prev) => Math.min(prev + 1, maxQuantity));
    // handleQuantityChange(newValue);
  };

  const handleDecrement = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
    // handleQuantityChange(newValue);
  };

  //   const handleAddToBasket = (id: string) => {
  //     !isOpen && changeOpenState(true);

  //     if (product) {
  //       addToCart(
  //         {
  //           id: product.id,
  //           title: product.title,
  //           handle: product.handle,
  //           price: product.price,
  //           image: product.image,
  //         },
  //         quantity
  //       );
  //     }
  //   };

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
              onClick={() => setShowCounter(true)}
              className="w-[80%]"
            />
          ) : (
            <div className="flex items-center">
              <button
                onClick={handleDecrement}
                className="w-[56px] h-[56px] bg-sandstone rounded-xl hover:bg-amberOrange"

              >
                -
              </button>
              <span className="w-[50px] h-[40px] flex items-center justify-center">
                {quantity}
              </span>
              <button
                onClick={handleIncrement}
                className={`w-[50px] h-[40px] border-l ${
                  quantity < maxQuantity
                    ? "hover:bg-darkBlack hover:text-snow bg-snow"
                    : "bg-gray-200 bg-opacity-80 cursor-not-allowed text-[gray]"
                }`}
                disabled={quantity >= maxQuantity}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

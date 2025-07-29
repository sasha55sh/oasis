"use client";

import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import { useCart } from "@/hooks/useCart";
import { Product } from "@/config/types";
import { useRouter } from "next/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { getProducts } from "@/service/ProductService";
import { createOrder } from "@/service/OrderService";
import ProductSceleton from "@/app/sections/shop-page/ProductSceleton";
import CartProduct from "@/components/cart-component/CartProduct";
import RecommendedProducts from "@/components/cart-component/RecommendedProducts";
import EmptyCart from "@/images/vectors/cart-empty.svg";

const ProductsSection: FC<{
  validateAll: any;
  deliveryData: any;
  personalData: any;
  commentsData: any;
}> = ({ validateAll, deliveryData, personalData, commentsData }) => {
  const [randomProducts, setRandomProducts] = useState<Product[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [orderId, setOrderId] = useState<string>("");
  const { products, totalAmount } = useCart();
  const router = useRouter();

  useEffect(() => {
    const fetchRandomProducts = async () => {
      setIsLoading(true);
      const data = await getProducts();
      if (data?.length) {
        const shuffled = [...data].sort(() => 0.5 - Math.random());
        setRandomProducts(shuffled.slice(0, 14));
      }
      setIsLoading(false);
    };
    fetchRandomProducts();
  }, []);

  const generateOrderId = () => `${Date.now()}`;

  const handleSubmit = async () => {
    if (totalAmount < 10) {
      setError(true);
      return;
    }

    let isValid = validateAll();
    if (!isValid) {
      setError(true);
      return;
    }

    const newOrderId = generateOrderId();
    setOrderId(newOrderId);

    const orderData = {
      orderId: newOrderId,
      firstName: personalData.firstName,
      phone: personalData.phone,
      selectedDate: deliveryData.selectedDate,
      selectedTime: deliveryData.selectedTime,
      method: deliveryData.selectedOption,
      street: deliveryData.street,
      flat: deliveryData.flat,
      house: deliveryData.house,
      comments: commentsData.comments,
      cutleryQuantity: commentsData.cutleryQuantity,
      totalAmount: totalAmount,

      products: products.map((product) => ({
        productId: product.id,
        title: product.title,
        image: product.image,
        grams: product.grams,
        price: product.price,
        quantity: product.quantity,
      })),
    };

    try {
      await createOrder(orderData);
      localStorage.removeItem("cartProducts");
      localStorage.removeItem("deliveryData");
      localStorage.removeItem("commentsData");
      router.push(`/checkout/${newOrderId}`);
    } catch (error) {
      console.error("Order creation failed", error);
      setError(true);
    }
  };

  return (
    <div className="flex flex-col space-y-[15px]">
      {isLoading ? (
        <>
          <div className="animate-pulse h-[100px] w-full bg-gray/30 rounded-lg"></div>
        </>
      ) : products.length === 0 ? (
        <div className="flex flex-col items-center shadow-xl rounded-xl space-y-[15px] py-[50px]">
          <Image src={EmptyCart} alt="Empty cart" width={400} height={400} />
          <p className="text-[24px] text-amberOrange font-bold sm:text-[30px] lg:text-[36px]">
            Oops! Cart is empty
          </p>
          <p className="text-darkLiver font-bold text-[18px] sm:text-[22px]">
            Choose something tasty
          </p>
        </div>
      ) : (
        <ul className="flex flex-col space-y-[15px]">
          {products.map((product, index) => (
            <CartProduct key={index} product={product} />
          ))}
        </ul>
      )}

      <p className="hidden lg:block text-center text-[20px] text-amberOrange font-bold sm:text-[26px] lg:text-[30px]">
        Oasis recommends
      </p>

      <div className="hidden w-full lg:block">
        <Swiper
          className="my-swiper"
          modules={[Navigation]}
          spaceBetween={20}
          navigation
          breakpoints={{
            1024: { slidesPerView: 2 },
            1440: { slidesPerView: 3 },
          }}
        >
          {isLoading ? (
            <>
              {Array.from({ length: 2 }, (_, index) => (
                <SwiperSlide key={index}>
                  <ProductSceleton />
                </SwiperSlide>
              ))}
            </>
          ) : (
            <>
              {randomProducts?.map((product, index) => (
                <SwiperSlide key={index}>
                  <RecommendedProducts product={product} />
                </SwiperSlide>
              ))}
            </>
          )}
        </Swiper>
      </div>

      {error && (
        <p className="text-electricRed text-[20px] font-bold text-center">
          {totalAmount < 10
            ? "Minimum order amount is 10$"
            : "Fill all required fields"}
        </p>
      )}

      <div className="bg-warmWhite/50 flex items-center justify-between py-[10px] rounded-xl p-[10px]">
        <p className="text-darkLiver">
          Total:{" "}
          <span className="text-amberOrange font-bold text-[18px]">
            {Number(totalAmount).toFixed(2)}
          </span>{" "}
          $
        </p>

        <button
          className="bg-limeGreen p-[10px] rounded-xl hover:bg-limeGreen/80 text-warmWhite"
          onClick={handleSubmit}
        >
          Place an order
        </button>
      </div>
    </div>
  );
};

export default ProductsSection;

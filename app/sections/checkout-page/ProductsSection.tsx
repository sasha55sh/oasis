"use client";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import { Loader } from "@mantine/core";
import { useCart } from "@/hooks/useCart";
import { Product } from "@/config/types";
import { useRouter } from "next/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { getProducts } from "@/service/productService";
import { createOrder } from "@/service/orderService";
import ProductSceleton from "@/app/sections/shop-page/ProductSceleton";
import { CartProduct, RecommendedProducts } from "@/components/cart-component";
import { EmptyCart } from "@/public/shop-page";

const ProductsSection: FC<{
  validateAll: () => boolean;
  deliveryData: {
    selectedDate: string;
    selectedTime: string;
    selectedOption: string;
    street: string;
    house: string;
    flat: string;
  };
  personalData: { firstName: string; phone: string };
  commentsData: { cutleryQuantity: string; comments: string };
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
      totalAmount: String(totalAmount),

      products: products.map((product) => ({
        productId: product.id,
        title: product.title,
        image: product.image,
        grams: product.grams,
        price: product.price,
        quantity: product.quantity,
        handle: product.handle,
      })),
    };

    try {
      await createOrder(orderData);
      localStorage.removeItem("cartProducts");
      localStorage.removeItem("deliveryData");
      localStorage.removeItem("commentsData");
      localStorage.removeItem("personalData");
      router.push(`/checkout/${newOrderId}`);
    } catch (error) {
      console.error("Order creation failed", error);
      setError(true);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[80vh] w-full ">
        <Loader className="animate-spin rounded-full border-[5px] border-amberOrange border-b-transparent w-[40px] h-[40px]" />
      </div>
    );
  }

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
            Упс! Корзина порожня
          </p>
          <p className="text-darkLiver font-bold text-[18px] sm:text-[22px]">
            Давайте оберемо щось смачненьке!
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
        Oasis рекомендує
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
            ? "Мінімальне замовлення - 10грн"
            : "Заповніть усі необхідні поля"}
        </p>
      )}

      <div className="bg-warmWhite/50 flex items-center justify-between py-[10px] rounded-xl p-[10px]">
        <p className="text-darkLiver">
          Всьго:{" "}
          <span className="text-amberOrange font-bold text-[18px]">
            {Number(totalAmount).toFixed(2)}
          </span>{" "}
          грн
        </p>

        <button
          className="bg-limeGreen p-[10px] rounded-xl hover:bg-limeGreen/80 text-warmWhite"
          onClick={handleSubmit}
        >
          Створити замовлення
        </button>
      </div>
    </div>
  );
};

export default ProductsSection;

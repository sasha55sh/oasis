"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Loader } from "@mantine/core";
import { Order } from "@/config/types";
import { getOrders } from "@/service/OrderService";
import Button from "@/components/ButtonComponent";

import EmptyHistory from "@/images/account-page/empty-history.svg";

const HistorySection = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getOrders();
        setOrders(data);
      } catch (error) {
        console.error("Failed to load orders", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[80vh] w-full ">
        <Loader className="animate-spin rounded-full border-[5px] border-amberOrange border-b-transparent w-[40px] h-[40px]" />
      </div>
    );
  }

  return (
    <div className="space-y-[15px]">
      {orders.length > 0 ? (
        orders.map((order) => (
          <div
            key={order._id}
            className="p-[15px] border border-oldSilver/30 rounded-xl"
          >
            <h3 className="font-bold text-[18px] mb-[8px]">
              Order <span className="text-amberOrange">#{order.orderId}</span> —{" "}
              {order.selectedTime} {order.selectedDate}
            </h3>
            <p className="text-oldSilver">
              Method: <span className="font-medium">{order.method}</span>
            </p>
            <p className="my-[10px] text-darkCharcoal">
              Total:{" "}
              <span className="text-electricRed font-bold">
                {Number(order.totalAmount).toFixed(2)} $
              </span>
            </p>
            <div className="grid grid-cols-1 gap-[15px] md:grid-cols-3 lg:grid-cols-2">
              {order.products.map((product) => (
                <div
                  key={product.productId}
                  className="flex gap-[15px] items-center border p-[10px] rounded-lg"
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={80}
                    height={80}
                    className="w-[80px] h-[80px] object-cover rounded"
                  />
                  <div>
                    <p className="font-bold text-darkCharcoal">
                      {product.title}
                    </p>
                    <p className="text-darkLiver">{product.grams} g</p>
                    <p className="text-amberOrange font-medium">
                      {product.price.toFixed(2)} ${" "}
                      <span className="text-darkLiver text-[14px]">
                        {" "}
                        × {product.quantity}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center border border-amberOrange rounded-xl space-y-[15px] py-[50px]">
          <Image
            src={EmptyHistory}
            alt="Empty history"
            width={400}
            height={400}
            priority
          />
          <p className="text-[24px] text-amberOrange font-bold sm:text-[30px] lg:text-[36px]">
            No orders found
          </p>
          <p className="text-darkLiver font-bold text-[18px] sm:text-[22px]">
            Let's choose something!
          </p>
          <Button
            text="Back to shop"
            tag="a"
            href="/shop"
            background="limeGreen"
          />
        </div>
      )}
    </div>
  );
};

export default HistorySection;

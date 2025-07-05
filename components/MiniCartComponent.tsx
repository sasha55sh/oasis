"use client";
import React, { FC } from "react";
import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import Button from "./ButtonComponent";

const MiniCartComponent: FC = () => {
  const { products, totalAmount } = useCart();
  const router = useRouter();

const totalQuantity = products.reduce((sum, item) => sum + item.quantity, 0);

  if (products.length === 0) return null;

  return (
    <div className="fixed bottom-0 right-0 bg-limeGreen text-white px-[15px] z-[50] lg:hidden rounded-xl my-[10px] mx-[10px] items-center flex">
      <p>
        {totalQuantity} goods, {totalAmount} $
      </p>
      <Button background="limeGreen" text="Place an order" icon="basket" />
    </div>
  );
};

export default MiniCartComponent;

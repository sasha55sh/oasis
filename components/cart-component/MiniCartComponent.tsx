"use client";
import React, { FC } from "react";
import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import { usePathname } from "next/navigation";
import Button from "@/components/ButtonComponent";

const MiniCartComponent: FC = () => {
  const { products, totalAmount } = useCart();
  const pathname = usePathname();

  const totalItems = products.reduce((sum, item) => sum + item.quantity, 0);
  
  if (products.length === 0) return null;

  let buttonText = "Place an order";
  let buttonLink = "/cart";

  if (pathname === "/cart") {
    buttonText = "Continue";
    buttonLink = "/checkout";
  } else if (pathname === "/checkout") {
    return null;
  }

  return (
    <div className="fixed bottom-0 right-0 bg-limeGreen text-white px-[15px] z-[50] rounded-xl my-[10px] mx-[10px] items-center flex lg:hidden">
      <p>
        {totalItems} goods, {totalAmount.toFixed(2)} $
      </p>
      <Link href={buttonLink}>
        <Button background="limeGreen" text={buttonText} icon="basket" />
      </Link>
    </div>
  );
};

export default MiniCartComponent;

"use client";

import Image from "next/image";
import Link from "next/link";
import CartProduct from "./CartProduct";
import { useCart } from "@/hooks/useCart";
import EmptyCart from "@/images/vectors/cart-empty.svg";
import { Drawer, DrawerItems, DrawerHeader } from "flowbite-react";

const CartComponent = () => {
  const { products, totalAmount, isOpen, changeOpenState } = useCart();
  const handleClose = () => changeOpenState(false);

  return (
    <>
      <Drawer
        open={isOpen}
        onClose={handleClose}
        position="right"
        className="w-[500px]"
      >
        <DrawerHeader title="Cart" className="mt-[20px]" />
        <DrawerItems className="flex flex-col justify-between h-full">
          {products.length === 0 ? (
            <div className="flex flex-col items-center">
              <Image
                src={EmptyCart}
                alt="Empty cart"
                width={400}
                height={400}
              />
              <p className="text-amberOrange font-bold text-[36px]">
                Oops! Cart is empty
              </p>
              <p className="text-darkLiver font-bold text-[22px]">
                Сhoose something tasty
              </p>

              <Link
                className="bg-limeGreen p-[10px] px-[40px] mt-[100px] rounded-xl hover:bg-limeGreen/80 text-warmWhite"
                href="/shop"
                onClick={() => changeOpenState(false)}
              >
                Back to shop
              </Link>
            </div>
          ) : (
            <>
              <ul className="flex flex-col space-y-[15px]">
                {products.map((product, index) => (
                  <CartProduct key={index} product={product} />
                ))}
              </ul>

              <div className="mt-[100px] bg-warmWhite/50 flex items-center justify-between py-[10px] rounded-xl p-[10px]">
                <p className="text-darkLiver">
                  Total:{" "}
                  <span className="text-amberOrange font-bold text-[18px]">
                    {Number(totalAmount).toFixed(2)}
                  </span>{" "}
                  $
                </p>

                <Link
                  className="bg-limeGreen p-[10px] rounded-xl hover:bg-limeGreen/80 text-warmWhite "
                  href="/checkout"
                  onClick={() => changeOpenState(false)}
                >
                  Continue
                </Link>
              </div>
            </>
          )}
        </DrawerItems>
      </Drawer>
    </>
  );
};

export default CartComponent;

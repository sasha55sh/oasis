import Cart from "@/app/sections/cart-page/CartSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oasis - Cart",
  description: "All the tastiest dishes are already in the cart",
  icons: { icon: "@/app/favicon.ico" },
};

export const generateViewport = () => ({
  initialScale: 1.0,
  width: "device-width",
});

const Page = () => {
  return (
    <>
      <Cart />
    </>
  );
};

export default Page;

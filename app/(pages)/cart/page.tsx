import Cart from "@/app/(pages)/cart/_components/CartSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oasis - Корзина",
  description: "Усі найсмачніші страви вже у кошику",
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

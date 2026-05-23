import { CheckoutSection as Checkout } from "@/app/(pages)/checkout/_components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oasis  - Оформлення замовлення",
  description: "Швидке оформлення замовлення",
  icons: { icon: "@/app/favicon.ico" },
};

export const generateViewport = () => ({
  initialScale: 1.0,
  width: "device-width",
});

const Page = () => {
  return (
    <>
      <Checkout />
    </>
  );
};

export default Page;

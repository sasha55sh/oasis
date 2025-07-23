import Checkout from "@/app/sections/checkout-page/CheckoutSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oasis  - Checkout",
  description: "Quick order processing",
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

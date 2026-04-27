import DeliverySection from "@/app/sections/delivery-page/DeliverySection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oasis - Доставка",
  description: "Перегляньте наші найкращі пропозиції доставки",
  icons: { icon: "@/app/favicon.ico" },
};

export const generateViewport = () => ({
  initialScale: 1.0,
  width: "device-width",
});

const Page = () => {
  return <DeliverySection />;
};

export default Page;

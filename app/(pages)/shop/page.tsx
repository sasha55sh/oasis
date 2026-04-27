import ShopMain from "@/app/sections/shop-page/ShopMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oasis - Shop",
  description: "We offer a wide selection of dishes",
  icons: { icon: "@/app/favicon.ico" },
};

export const generateViewport = () => ({
  initialScale: 1.0,
  width: "device-width",
});

const Page = () => {
  return <ShopMain />;
};

export default Page;
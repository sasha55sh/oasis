import MenuSection from "@/app/sections/menu-page/MenuSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oasis - Меню",
  description: "Ексклюзивне меню ресторану",
  icons: { icon: "@/app/favicon.ico" },
};

export const generateViewport = () => ({
  initialScale: 1.0,
  width: "device-width",
});

const Page = () => {
  return <MenuSection />;
};

export default Page;

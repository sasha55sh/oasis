import NewsSection from "@/app/sections/news-page/NewsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oasis - News",
  description: "Be the first to know about all the news",
  icons: { icon: "@/app/favicon.ico" },
};

export const generateViewport = () => ({
  initialScale: 1.0,
  width: "device-width",
});

const Page = () => {
  return <NewsSection />;
};

export default Page;

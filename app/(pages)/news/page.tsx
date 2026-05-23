import NewsSection from "@/app/(pages)/news/_components/NewsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oasis - Новини",
  description: "Дізнавайтеся першими про всі новини",
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

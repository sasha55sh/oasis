import FaqSection from "@/app/sections/faq-page/FAQSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oasis - FAQ",
  description: "Frequently asked questions",
  icons: { icon: "//шлях до фавікону" },
};

export const generateViewport = () => ({
  initialScale: 1.0,
  width: "device-width",
});

const Page = () => {
  return <FaqSection />;
};

export default Page;

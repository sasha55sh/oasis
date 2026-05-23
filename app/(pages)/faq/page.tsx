import FaqSection from "@/app/(pages)/faq/_components/FAQSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oasis - FAQ",
  description: "Поширені запитання",
  icons: { icon: "@/app/favicon.ico" },
};

export const generateViewport = () => ({
  initialScale: 1.0,
  width: "device-width",
});

const Page = () => {
  return <FaqSection />;
};

export default Page;

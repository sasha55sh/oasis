import SuccessfulOrderSection from "@/app/sections/checkout-page/SuccessfulOrderSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oasis  - Successful order",
  description: "Quick order processing",
  icons: { icon: "@/app/favicon.ico" },
  other: { "Cache-Control": "no-store" },
};

export const generateViewport = () => ({
  initialScale: 1.0,
  width: "device-width",
});

const Page = async ({ params }: { params: Promise<{ orderId: string }> }) => {
  const { orderId } = await params;

  return (
    <>
      <SuccessfulOrderSection orderId={orderId} />
    </>
  );
};

export default Page;

import SuccessfulOrderSection from "@/app/(pages)/checkout/[orderId]/_components/SuccessfulOrderSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oasis  - Успішне замовлення",
  description: "Оперативна обробка замовлень",
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

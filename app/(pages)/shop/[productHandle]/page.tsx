import type { Metadata } from "next";

import ProductSection from "@/app/(pages)/shop/[productHandle]/_components/ProductSection";

export const metadata: Metadata = {
  title: "Oasis - dishes",
  description:
    "Unique combinations of ingredients, combinations of different textures create a unique taste!",
  icons: {icon: "@/app/favicon.ico"},
};

export const generateViewport = () => ({
  initialScale: 1.0,
  width: "device-width",
});

const Page = async ({ params }: { params: Promise<{ productHandle: string }> }) => {
  const { productHandle } = await params;

  return (
    <>
      <ProductSection productHandle={productHandle} />
    </>
  );
};

export default Page;

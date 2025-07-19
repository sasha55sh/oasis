import type { Metadata } from "next";

import ProductSection from "@/app/sections/product-page/ProductSection";

export const metadata: Metadata = {
  title: "Oasis - dishes",
  description:
    "Unique combinations of ingredients, combinations of different textures create a unique taste!",
};

export const generateViewport = () => ({
  initialScale: 1.0,
  width: "device-width",
});

const Page = ({ params }: { params: any }) => {
  const productHandle = params.productHandle;

  return (
    <>
      <ProductSection productHandle={productHandle} />
    </>
  );
};

export default Page;

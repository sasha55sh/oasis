import { NutritionProgramSection } from "@/app/(pages)/nutrition-programs/_components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oasis - Програми харчування",
  description:
    "Переглядайте персональні програми харчування, тижневі раціони та рекомендації для досягнення ваших цілей",
  icons: { icon: "@/app/favicon.icon" },
};

export const generateViewport = () => ({
  initialScale: 1.0,
  width: "device-width",
});

const Page = () => {
  return <NutritionProgramSection />;
};

export default Page;

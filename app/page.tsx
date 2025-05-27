import HeroSection from "@/app/sections/home-page/HeroSection";
import AboutUsSection from "@/app/sections/home-page/AboutUsSection";
import FoodCategoryComponent from "@/app/sections/home-page/FoodCategorySection";
import WhyChooseUsSection from "@/app/sections/home-page/WhyChooseUsSection";
import BenefitSection from "@/app/sections/home-page/BenefitSection";
import ChooseAndPickSection from "@/app/sections/home-page/Choose&PickSection";
import OurChefsSection from "@/app/sections/home-page/OurChefsSection";
import TestimonialsSection from "@/app/sections/home-page/TestimonialsSection";
import ActiveProcessSection from "@/app/sections/home-page/ActiveProcessSection";
import BlogSection from "@/app/sections/home-page/BlogSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <FoodCategoryComponent />
      <WhyChooseUsSection />
      <BenefitSection />
      <ChooseAndPickSection />
      <OurChefsSection />
      <TestimonialsSection />
      <ActiveProcessSection />
      <BlogSection />
    </>
  );
}

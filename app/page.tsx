import {
  HeroSection,
  AboutUsSection,
  FoodCategoryComponent,
  WhyChooseUsSection,
  BenefitSection,
  ChooseAndPickSection,
  OurChefsSection,
  TestimonialsSection,
  ActiveProcessSection,
} from "@/app/(pages)/_components";

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
    </>
  );
}

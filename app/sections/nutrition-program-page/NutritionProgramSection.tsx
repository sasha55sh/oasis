"use client";

import { FC, useEffect, useState } from "react";
import Title from "@/components/TitleComponent";
import BenefitsLine from "./BenefitsLine";
import { NutritionProgram, Product, User } from "@/config/types";
import { getNutritionPrograms } from "@/service/NutritionProgramService";
import ProgramDescription from "./ProgramDescription";
import { getProducts } from "@/service/ProductService";
import ProgramDescriptionSkeleton from "./ProgramDescriptionSceleton";

const NutritionProgramSection: FC = () => {
  const [nutritionPrograms, setNutritionPrograms] = useState<
    NutritionProgram[]
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [randomProducts, setRandomProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchNutritionPrograms = async () => {
      setIsLoading(true);
      const programs = await getNutritionPrograms();
      const products = await getProducts();
      if (programs.length) {
        setNutritionPrograms(programs);
        const shuffled = [...products].sort(() => 0.5 - Math.random());
        setRandomProducts(shuffled.slice(0, 14));
      } else {
        setNutritionPrograms([]);
        setRandomProducts([]);
      }
      setIsLoading(false);
    };
    fetchNutritionPrograms();
  }, []);

  return (
    <section>
      <Title title="Програми харчування" />
      <BenefitsLine />
      <div className="container my-[50px]">
        <h2 className="text-[20px] font-bold text-darkCharcoal md:text-[24px]">
          Оберіть програму харчування
        </h2>

        {isLoading ? (
            <ProgramDescriptionSkeleton />
        ) : (
            <ProgramDescription
              programs={nutritionPrograms}
              isLoading={isLoading}
              randomProducts={randomProducts}
            />
        )}
      </div>
    </section>
  );
};

export default NutritionProgramSection;

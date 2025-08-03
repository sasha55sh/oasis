"use client";
import React, { useEffect, useState } from "react";
import { Menu } from "@/config/types";
import { Loader } from "@mantine/core";
import { getMenuByCategory } from "@/service/MenuService";
import MenuCategory from "@/components/menu-page/MenuCategoryComponent";
import TitleComponent from "@/components/TitleComponent";
import BenefitSection from "@/app/sections/home-page/BenefitSection";
import PartnersSection from "./PartnersSection";

import Starter from "@/images/menu-page/udon.svg";
import MainDish from "@/images/menu-page/cheessburger.svg";
import Dessert from "@/images/menu-page/pastry.svg";
import Drinks from "@/images/menu-page/cocktail.svg";

const MenuList = () => {
  const [starterItems, setStarterItems] = useState<Menu[]>([]);
  const [mainItems, setMainItems] = useState<Menu[]>([]);
  const [dessertItems, setDessertItems] = useState<Menu[]>([]);
  const [drinksItems, setDrinksItems] = useState<Menu[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      setIsLoading(true);
      const [starter, main, dessert, drinks] = await Promise.all([
        getMenuByCategory("starter menu"),
        getMenuByCategory("main course"),
        getMenuByCategory("dessert"),
        getMenuByCategory("drinks"),
      ]);
      setStarterItems(starter);
      setMainItems(main);
      setDessertItems(dessert);
      setDrinksItems(drinks);
    };
    fetchMenu();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[80vh] w-full ">
        <Loader className="animate-spin rounded-full border-[5px] border-amberOrange border-b-transparent w-[40px] h-[40px]" />
      </div>
    );
  }

  return (
    <section>
      <TitleComponent title="our menu" />
      <div className="container flex flex-col space-y-[70px] my-[70px]">
        <MenuCategory
          sectionTitle="Starter Menu"
          imageSrc={Starter}
          imageAlt="Udon"
          items={starterItems}
        />
        <MenuCategory
          sectionTitle="Main Course"
          imageSrc={MainDish}
          imageAlt="Cheessburger"
          items={mainItems}
          className="lg:flex-row-reverse"
        />
      </div>

      <BenefitSection />
      <div className="container flex flex-col space-y-[70px] my-[70px]">
        <MenuCategory
          sectionTitle="Dessert"
          imageSrc={Dessert}
          imageAlt="Pastry"
          items={dessertItems}
        />
        <MenuCategory
          sectionTitle="Drinks"
          imageSrc={Drinks}
          imageAlt="Cocktail"
          items={drinksItems}
          className="lg:flex-row-reverse"
        />
        <PartnersSection />
      </div>
    </section>
  );
};

export default MenuList;

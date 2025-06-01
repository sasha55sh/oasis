"use client";
import React, { useEffect, useState } from "react";
import { Loader } from "@mantine/core";
import { Menu } from "@/config/types";
import { getMenuByCategory } from "@/service/MenuService";
import MenuCategory from "@/components/menu-page/MenuCategoryComponent";
import TitleComponent from "@/components/TitleComponent";
import BenefitSection from "@/app/sections/home-page/BenefitSection";
import PartnersSection from "./PartnersSection";

import starterImg from "@/images/menu-page/udon.svg";
import mainImg from "@/images/menu-page/cheessburger.svg";
import dessertImg from "@/images/menu-page/pastry.svg";
import drinksImg from "@/images/menu-page/cocktail.svg";

const MenuList = () => {
  const [starterItems, setStarterItems] = useState<Menu[]>([]);
  const [mainItems, setMainItems] = useState<Menu[]>([]);
  const [dessertItems, setDessertItems] = useState<Menu[]>([]);
  const [drinksItems, setDrinksItems] = useState<Menu[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchMenu = async () => {
      try {
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
      } catch (error) {
        console.error("Error loading menu", error);
      }
    };
    fetchMenu();
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[80vh] w-full ">
        <Loader className="animate-spin rounded-full border-4 border-amberOrange border-b-transparent w-10 h-10" />
      </div>
    );
  }

  return (
    <section>
      <TitleComponent title="our menu" />
      <div className="container flex flex-col space-y-[70px] my-[70px]">
        <MenuCategory
          sectionTitle="Starter Menu"
          imageSrc={starterImg}
          imageAlt="udon image"
          items={starterItems}
        />
        <MenuCategory
          sectionTitle="Main Course"
          imageSrc={mainImg}
          imageAlt="cheessburger image"
          items={mainItems}
          className="lg:flex-row-reverse"
        />
      </div>

      <BenefitSection />
      <div className="container flex flex-col space-y-[70px] my-[70px]">
        <MenuCategory
          sectionTitle="Dessert"
          imageSrc={dessertImg}
          imageAlt="pastry image"
          items={dessertItems}
        />
        <MenuCategory
          sectionTitle="Drinks"
          imageSrc={drinksImg}
          imageAlt="cocktail image"
          items={drinksItems}
          className="lg:flex-row-reverse"
        />
        <PartnersSection />
      </div>
    </section>
  );
};

export default MenuList;

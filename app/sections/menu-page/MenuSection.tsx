import React, { FC } from "react";
import { useEffect, useState } from "react";
import { getMenu } from "@/service/MenuService";

const MenuSection = () => {
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data = await getMenu();
        console.log("Menu data:", data);
      } catch (error) {
        console.error("Failed to fetch menu", error);
      }
    };

    fetchMenu();
  }, []);

  return <div>Check console for menu data</div>;
};

export default MenuSection;

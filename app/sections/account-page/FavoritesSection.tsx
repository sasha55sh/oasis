"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Loader } from "@mantine/core";
import { CardProps } from "@/config/types";
import { getFavorites } from "@/service/UserService";
import Button from "@/components/ButtonComponent";
import CardComponent from "@/components/shop-page/CardComponent";

import EmptyFavorites from "@/images/account-page/empty-favorites.svg";

const FavoritesSection = () => {
  const [favorites, setFavorites] = useState<CardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchFavorites = async () => {
    setIsLoading(true);
    const data = await getFavorites();
    setFavorites(data || []);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[80vh] w-full ">
        <Loader className="animate-spin rounded-full border-[5px] border-amberOrange border-b-transparent w-[40px] h-[40px]" />
      </div>
    );
  }

  return (
    <div className="space-y-[15px]">
      {favorites.length > 0 ? (
        <div className="grid gap-[20px] grid-cols-1 justify-center place-items-center md:grid-cols-2 xl:grid-cols-3">
          {favorites.map((product) => (
            <CardComponent
              key={product.id}
              {...product}
              initialFavorite={true}
              onFavoriteChange={fetchFavorites}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center border border-amberOrange rounded-xl space-y-[15px] py-[50px] px-[10px]">
          <Image
            src={EmptyFavorites}
            alt="Empty favorites"
            width={400}
            height={400}
            className="w-[400px] h-[400px]"
            priority
          />
          <p className="text-center text-[24px] text-amberOrange font-bold sm:text-[30px] lg:text-[36px]">
            You don't have any favorite products yet?
          </p>
          <p className="text-darkLiver font-bold text-[18px] sm:text-[22px]">
            Add some to see them here!
          </p>
          <Button
            text="Back to shop"
            tag="a"
            href="/shop"
            background="limeGreen"
          />
        </div>
      )}
    </div>
  );
};

export default FavoritesSection;

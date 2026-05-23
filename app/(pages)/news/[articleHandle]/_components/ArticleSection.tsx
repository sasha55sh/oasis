"use client";
import React, { FC, useEffect, useState } from "react";
import { getNewsByHandle } from "@/service/newsService";
import { Loader } from "@mantine/core";
import { News } from "@/config/types";
import Image from "next/image";
import { Button } from "@/components/ui";
interface articleProps {
  articleHandle: string;
}

const ArticleSection: FC<articleProps> = ({ articleHandle }) => {
  const [article, setArticle] = useState<News | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchArticle = async () => {
      setIsLoading(true);
      const articleData = await getNewsByHandle(articleHandle);
      if (articleData) {
        setArticle(articleData);
      } else {
        setArticle(null);
      }
      setIsLoading(false);
    };
    fetchArticle();
  }, [articleHandle]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[80vh] w-full ">
        <Loader className="animate-spin rounded-full border-[5px] border-amberOrange border-b-transparent w-[40px] h-[40px]" />
      </div>
    );
  }

  return (
    <section>
      <div className="max-w-[200px] mt-[30px] ml-[20px] ">
        <Button text="Повернутися" icon="back" tag="a" href="/news" bordered />
      </div>
      <div className="container my-[50px] space-y-[15px]">
        <h1 className="text-amberOrange font-bold text-[26px] lg:text-[40px]">
          {article?.title ?? "Назва статті"}
        </h1>
        <div className="flex justify-between items-center text-darkLiver mini:justify-start mini:space-x-[30px]">
          <p className="bg-oldSilver/30 rounded-lg px-[10px] py-[5px] font-bold">
            {article?.category ?? "Знижки"}
          </p>
          <p className="text-[14px]">{article?.date ?? "29/07/2025"}</p>
        </div>
        <Image
          src={
            article?.image ??
            "https://res.cloudinary.com/dnl4rggji/image/upload/v1753721506/photo_2025-07-28_19-51-21_w5onjm.jpg"
          }
          width={1300}
          height={630}
          alt={article?.handle ?? "Зображення статті"}
          className="w-full h-auto rounded-xl"
        />
        <p className="text-[18px] text-darkCharcoal font-semibold">
          {article?.highText ?? "Текст заголовок"}
        </p>
        <p>{article?.text ?? "Text"}</p>
        <p>{article?.lowText ?? "Основний текст"}</p>
      </div>
    </section>
  );
};

export default ArticleSection;

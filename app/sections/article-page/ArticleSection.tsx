"use client";
import React, { FC, useEffect, useState } from "react";
import Button from "@/components/ButtonComponent";
import { getNewsByHandle } from "@/service/NewsService";
import { useAlert } from "@/hooks/alertContext";
import { Loader } from "@mantine/core";
import { News } from "@/config/types";
import Image from "next/image";
interface articleProps {
  articleHandle: string;
}

const ArticleSection: FC<articleProps> = ({ articleHandle }) => {
  const [article, setArticle] = useState<News | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { setInfoMessage } = useAlert();

  useEffect(() => {
    const fetchArticle = async () => {
      setIsLoading(true);
      const articleData = await getNewsByHandle(articleHandle, setInfoMessage);
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
        <Button text="Back to news" icon="back" tag="a" href="/news" bordered />
      </div>
      <div className="container my-[50px] space-y-[15px]">
        <h1 className="text-amberOrange font-bold text-[26px] lg:text-[40px]">
          {article?.title ?? "Article title"}
        </h1>
        <div className="flex justify-between items-center text-darkLiver mini:justify-start mini:space-x-[30px]">
          <p className="bg-oldSilver/30 rounded-lg px-[10px] py-[5px] font-bold">
            {article?.category ?? "Sale"}
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
          alt={article?.handle ?? "Article image"}
          className="w-full h-auto rounded-xl"
        />
        <p className="text-[18px] text-darkCharcoal font-semibold">
          {article?.highText ?? "High text"}
        </p>
        <p>{article?.text ?? "Text"}</p>
        <p>{article?.lowText ?? "Low text"}</p>
      </div>
    </section>
  );
};

export default ArticleSection;

"use client";
import React, { FC, useEffect, useState } from "react";
import NewsCard from "@/components/news-page/NewsCardComponent";
import { getAllNews } from "@/service/NewsService";
import Title from "@/components/TitleComponent";
import NewsSceleton from "./NewsSceleton";
import { News } from "@/config/types";

const NewsSection: FC = () => {
  const [news, setNews] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      const data = await getAllNews();
      if (data.length) {
        setNews(data);
      } else {
        setNews([]);
      }
      setIsLoading(false);
    };
    fetchNews();
  }, []);

  return (
    <section>
      <Title title="News" />

      <div className="container my-[50px] grid gap-[20px] grid-cols-1 justify-center place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {isLoading ? (
          <>
            {Array.from({ length: 5 }, (_, index) => (
              <NewsSceleton key={index} />
            ))}
          </>
        ) : (
          <>
            {news.map((item) => (
              <NewsCard key={item.handle} {...item} />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default NewsSection;

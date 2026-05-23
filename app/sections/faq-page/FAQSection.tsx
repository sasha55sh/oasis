"use client";
import React, { FC, useEffect, useState } from "react";
import FaqItemComponent from "@/components/faq-page/FaqItemComponent";
import Title from "@/components/TitleComponent";
import { getAllFaq } from "@/service/faqService";
import { Loader } from "@mantine/core";
import { Faq } from "@/config/types";

const FaqSection: FC = () => {
  const [faqItems, setFaqItems] = useState<Faq[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchFaq = async () => {
      setIsLoading(true);
      const data = await getAllFaq();
      if (data.length) {
        setFaqItems(data);
      } else {
        setFaqItems([]);
      }
      setIsLoading(false);
    };
    fetchFaq();
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
      <Title title="FAQ" />
      <div className="container flex flex-col space-y-[15px] my-[50px] lg:my-[70px] items-center text-center lg:space-y-[30px]">
        <h2 className="text-[48px] text-amberOrange font-bold leading-0">
          Поширені запитання
        </h2>
        <p className="text-darkLiver ">
          На цій сторінці ви знайдете всі відповіді. Ми регулярно оновлюємо
          інформацію
        </p>
        <div className="grid grid-cols-1 gap-[15px] md:grid-cols-2 lg:grid-cols-3">
          {faqItems.map((faq, index) => (
            <FaqItemComponent key={index} item={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

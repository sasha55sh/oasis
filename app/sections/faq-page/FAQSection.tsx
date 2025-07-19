import React, { FC, useEffect, useState } from "react";
import Title from "@/components/TitleComponent";
import FaqItemComponent from "@/components/faq-page/FaqItemComponent";
import { getAllFaq } from "@/service/FaqService";
import { Faq } from "@/config/types";
import { console } from "inspector";

const FaqSection: FC = () => {
  const [faqItems, setFaqItems] = useState<Faq[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaq = async () => {
      try{
        const faq = await Promise.all([
          getAllFaq()
        ])
        setFaqItems(faq)
      } catch (error) {
        console.error("Error loading faq", error);
      }
    };
    fetchFaq();
    setLoading(false);
  })

  return (
    <section>
      <Title title="FAQ Page" />
      <div className="flex flex-col space-y-[15px] lg:space-y-[30px] my-[50px] lg:my-[70px] items-center">
        <h2 className="text-[48px] text-darkCharcoal font-bold leading-0">
          Frequently asked questions
        </h2>
        <p className="text-darkLiver">
          On this page you can find all answers. We try to update it frequently
        </p>
        <div className="grid grid-cols-3 gap-[15px]"></div>
      </div>
    </section>
  );
};

export default FaqSection;

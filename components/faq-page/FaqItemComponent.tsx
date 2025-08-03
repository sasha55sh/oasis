import React, { FC } from "react";
import { Faq } from "@/config/types";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

interface faqProps {
  className?: string;
  item: Faq;
}

const FaqItemComponent: FC<faqProps> = ({ className, item }) => {
  return (
    <Accordion className={`${className} max-w-[650px] `} alwaysOpen>
      <AccordionPanel>
        <AccordionTitle className="text-[18px] text-darkCharcoal">
          {item.question}
        </AccordionTitle>
        <AccordionContent>
          <p className="text-darkLiver">{item.answer}</p>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  );
};

export default FaqItemComponent;

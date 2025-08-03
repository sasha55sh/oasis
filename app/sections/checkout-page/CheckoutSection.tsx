"use client";
import React, { useRef, useState } from "react";
import Title from "@/components/TitleComponent";
import PersonalData from "./PersonalDataSection";
import ProductsSection from "./ProductsSection";
import CommentsSection from "./CommentsSection";
import DeliverySection from "./DeliverySection";

const CheckoutSection = () => {
  const [personalData, setPersonalData] = useState({});
  const [commentsData, setCommentsData] = useState({});
  const [deliveryData, setDeliveryData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateRefs = useRef<(() => boolean)[]>([]);

  const registerValidation = (validateFn: () => boolean) => {
    validateRefs.current.push(validateFn);
  };

  const handleValidateAll = () => {
    setIsSubmitted(true);
    return validateRefs.current.every((fn) => fn());
  };

  return (
    <section>
      <Title title="Checkout" />

      <div className="container py-[30px] flex flex-col space-y-[20px] lg:flex lg:flex-row lg:space-y-0 lg:space-x-[20px]">
        <div className="flex flex-col space-y-[20px] lg:w-2/5">
          <PersonalData
            setPersonalData={setPersonalData}
            registerValidation={registerValidation}
          />
          <DeliverySection
            setDeliveryData={setDeliveryData}
            isSubmitted={isSubmitted}
          />
          <CommentsSection setCommentsData={setCommentsData} />
        </div>

        <div className="lg:w-3/5">
          <ProductsSection
            personalData={personalData}
            deliveryData={deliveryData}
            commentsData={commentsData}
            validateAll={handleValidateAll}
          />
        </div>
      </div>
    </section>
  );
};

export default CheckoutSection;

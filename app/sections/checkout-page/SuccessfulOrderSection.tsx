import React, { FC } from "react";
import Button from "@/components/ButtonComponent";

const SuccessfulOrderSection: FC<{ orderId: string }> = ({ orderId }) => {
  return (
    <section className="py-[200px] rounded-xl shadow-xl flex flex-col items-center space-y-[20px]">
      <h1 className="text-[24px] text-limeGreen font-bold text-center">
        Your order <span className="text-darkLiver">#{orderId}</span> has been
        successfully created!
      </h1>
      <p className="text-[18px] text-darkLiver">
        Please, wait for a call from the manager
      </p>
      <Button
        text="Return to the shop"
        background="amberOrange"
        href="/shop"
        tag="a"
      />
    </section>
  );
};

export default SuccessfulOrderSection;

import React, { FC } from "react";
import Button from "@/components/ButtonComponent";

const SuccessfulOrderSection: FC<{ orderId: string }> = ({ orderId }) => {
  return (
    <section className="py-[200px] rounded-xl shadow-xl flex flex-col items-center space-y-[20px]">
      <h1 className="text-[24px] text-limeGreen font-bold text-center">
        Твоє замовлення<span className="text-darkLiver">{" "}#{orderId}</span>{" "}
        успішно створене!
      </h1>
      <p className="text-[18px] text-darkLiver">
        Будь ласка, очікуйте дзвінка від менеджера
      </p>
      <Button
        text="Повернутися"
        background="amberOrange"
        href="/shop"
        tag="a"
      />
    </section>
  );
};

export default SuccessfulOrderSection;

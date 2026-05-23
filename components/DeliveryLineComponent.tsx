import React, { FC } from "react";
import Button from "./Button";

const deliveryData = [
  { title: "До 45 хвилин", description: "у зеленій зоні" },
  { title: "До 59 хвилин", description: "у жовтій зоні" },
  { title: "Безкоштовна доставка", description: "від 500 грн" },
  { title: "У передмістя", description: "мінімально від 600 грн" },
];

const DeliveryLineComponent: FC = () => {
  return (
    <section>
      <div className="flex flex-col items-center bg-oldSilver/10 py-[20px] space-y-[20px] lg:flex-row lg:justify-evenly lg:space-y-0">
        <div className="flex flex-col gap-[10px] mini:grid mini:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {deliveryData.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <p className="text-[18px] text-darkLiver font-bold">
                {item.title}
              </p>
              <p className="text-[14px] text-oldSilver">{item.description}</p>
            </div>
          ))}
        </div>
        <Button
          text="Зони доставки"
          className="w-[75%] mini:w-[40%] md:w-[30%] lg:w-[20%]"
          background="limeGreen"
          tag="a"
          href="/delivery"
        />
      </div>
    </section>
  );
};

export default DeliveryLineComponent;

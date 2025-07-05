import React, { FC } from "react";
import Button from "./ButtonComponent";

const deliveryData = [
  { title: "Up to 45 minutes", description: "in the green zone" },
  { title: "Up to 59 minutes", description: "in the yellow zone" },
  { title: "Free shipping", description: "from 20$" },
  { title: "To the suburban area", description: "minimum order $30" },
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
          text="Delivery zones"
          className="w-[75%] mini:w-[40%] md:w-[30%] lg:w-[20%]"
          background="limeGreen"
        />
      </div>
    </section>
  );
};

export default DeliveryLineComponent;

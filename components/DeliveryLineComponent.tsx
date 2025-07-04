import React, { FC } from "react";
import Button from "./ButtonComponent";

const deliveryData = [
  { title: "up to 45 minutes", description: "in the green zone" },
  { title: "up to 59 minutes", description: "in the yellow zone" },
  { title: "free shipping", description: "from 20$" },
  { title: "to the suburban area", description: "minimum order $30" },
];

const DeliveryLineComponent: FC = () => {
  return (
    <section>
      <div className="container flex flex-col space-y-[10px] items-center bg-oldSilver/10 py-[20px]">
        {deliveryData.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <p className="text-[18px] text-darkLiver font-bold">{item.title}</p>
            <p className="text-[14px] text-oldSilver">{item.description}</p>
          </div>
        ))}

        <Button text="Delivery zones" className="w-[80%] mini:w-[60%]" background="limeGreen" />
      </div>
    </section>
  );
};

export default DeliveryLineComponent;

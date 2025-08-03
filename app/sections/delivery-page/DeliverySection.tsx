import React, { FC } from "react";
import Title from "@/components/TitleComponent";
import Card from "@/components/delivery-page/DeliveryDataComponent";
import MapComponent from "@/components/delivery-page/MapComponent";

import Cursor from "@/images/delivery-page/cursor-icon.svg";
import Smartphone from "@/images/delivery-page/smartphone-icon.svg";
import Path from "@/images/delivery-page/path-icon.svg";
import Pin from "@/images/delivery-page/mapPin-icon.svg";
import Alarm from "@/images/delivery-page/alarm-icon.svg";
import Leaf from "@/images/delivery-page/leaf-icon.svg";

const DeliverySection: FC = () => {
  return (
    <section>
      <Title title="delivery" />

      <div className="container flex flex-col my-[50px] items-center space-y-[50px]">
        <MapComponent />
        <div className="flex flex-col space-y-[30px] w-full">
          <h2 className="text-[26px] text-darkCharcoal font-bold">
            How to place an order?
          </h2>
          <div className="flex flex-col my-[30px] gap-[30px] md:flex-row md:justify-between">
            <Card src={Cursor} title="On the website" />
            <Card src={Smartphone} title="By phone" />
          </div>
        </div>

        <div className="flex flex-col space-y-[30px] w-full">
          <h2 className="text-[26px] text-darkCharcoal font-bold">
            How to receive an order
          </h2>
          <div className="flex flex-col my-[30px] gap-[30px] md:flex-row md:justify-between">
            <Card
              src={Path}
              title="Delivery by courier"
              description="Average delivery time 90 min"
            />
            <Card
              src={Pin}
              title="Self-pickup"
              description="From our restaurant"
            />
          </div>
        </div>

        <div className="flex flex-col w-full">
          <h2 className="text-[26px] text-darkCharcoal font-bold">
            Additional options
          </h2>
          <p className="text-[18px] text-oldSilver">
            Oasis takes care of your comfort
          </p>
          <div className="flex flex-col my-[30px] gap-[30px] md:flex-row md:justify-between">
            <Card
              src={Alarm}
              title="Pre-order for the specified time"
              description="Order in advance, so you don't forget"
            />
            <Card
              src={Leaf}
              title="Fresh products"
              description="We use only environmentally friendly products - grown on farms"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;

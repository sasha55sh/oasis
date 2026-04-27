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
      <Title title="Доставка" />

      <div className="container flex flex-col my-[50px] items-center space-y-[50px]">
        <MapComponent />
        <div className="flex flex-col space-y-[30px] w-full">
          <h2 className="text-[26px] text-darkCharcoal font-bold">
            Як оформити замовлення?
          </h2>
          <div className="flex flex-col my-[30px] gap-[30px] md:flex-row md:justify-between">
            <Card src={Cursor} title="На сайті" />
            <Card src={Smartphone} title="За телефоном" />
          </div>
        </div>

        <div className="flex flex-col space-y-[30px] w-full">
          <h2 className="text-[26px] text-darkCharcoal font-bold">
            Як отримати замовлення
          </h2>
          <div className="flex flex-col my-[30px] gap-[30px] md:flex-row md:justify-between">
            <Card
              src={Path}
              title="Доставка кур’єром"
              description="Середній час доставки — 90 хв"
            />
            <Card
              src={Pin}
              title="Самовивіз"
              description="Безпосередньо з нашого ресторану"
            />
          </div>
        </div>

        <div className="flex flex-col w-full">
          <h2 className="text-[26px] text-darkCharcoal font-bold">
            Додаткові опції
          </h2>
          <p className="text-[18px] text-oldSilver">
            Oasis піклується про ваш комфорт
          </p>
          <div className="flex flex-col my-[30px] gap-[30px] md:flex-row md:justify-between">
            <Card
              src={Alarm}
              title="Попереднє замовлення на обраний час"
              description="Замовляйте заздалегідь, щоб не забути"
            />
            <Card
              src={Leaf}
              title="Свіжі продукти"
              description="Ми використовуємо лише екологічно чисті продукти, вирощені на фермах"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;

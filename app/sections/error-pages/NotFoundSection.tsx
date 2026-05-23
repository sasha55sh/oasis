import React, { FC } from "react";
import { Button, Title } from "@/components/ui";

const NotFoundSection: FC = () => {
  return (
    <section>
      <Title title="404 Помилка" />
      <div className="container flex flex-col items-center justify-center space-y-[15px] my-[50px] text-center lg:space-y-[30px] lg:my-[70px]">
        <h1 className="text-amberOrange text-[64px] font-bold leading-none lg:text-[96px]">
          404
        </h1>
        <h2 className="text-darkCharcoal text-[24px] font-bold lg:text-[32px]">
          Упс! Здається, щось пішло не так
        </h2>
        <p className="text-darkLiver">
          Сторінку не знайдено! Ми вже працюємо над вирішенням цієї проблеми.
          <br /> А поки що перегляньте ці цікаві пропозиції:
        </p>
        <Button
          text="На головну"
          background="amberOrange"
          href="/"
          tag="a"
          className="max-w-[150px]"
        />
      </div>
    </section>
  );
};

export default NotFoundSection;

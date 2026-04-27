"use client";
import React, { FC, useEffect } from "react";
import Button from "@/components/ButtonComponent";
import Title from "@/components/TitleComponent";

const ServerErrorSection = ({
  error,
}: {
  error?: Error & { digest?: string };
  reset?: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const reloadPage = () => {
    window.location.reload();
  };
  return (
    <section>
      <Title title="505 Помилка" />
      <div className="container flex flex-col items-center justify-center space-y-[15px] my-[50px] text-center lg:space-y-[30px] lg:my-[70px]">
        <h1 className="text-amberOrange text-[64px] font-bold leading-none lg:text-[96px]">
          505
        </h1>
        <h2 className="text-darkCharcoal text-[24px] font-bold lg:text-[32px]">
          Упс! Здається, щось пішло не так
        </h2>
        <p className="text-darkLiver">
          Помилка сервера! Ми вже працюємо над її вирішенням.
          <br /> Спробуйте оновити сторінку:
        </p>
        <Button
          text="Спробувати знову"
          background="amberOrange"
          tag="button"
          type="reset"
          className="max-w-[150px]"
          onClick={reloadPage}
        />
      </div>
    </section>
  );
};

export default ServerErrorSection;

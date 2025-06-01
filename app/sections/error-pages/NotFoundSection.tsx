import React, { FC } from "react";
import Button from "@/components/ButtonComponent";
import Title from "@/components/TitleComponent";

const NotFoundSection: FC = () => {
  return (
    <section>
      <Title title="404 Error" />
      <div className="container flex flex-col items-center fustify-center space-y-[15px] my-[50px] text-center lg:space-y-[30px] lg:my-[70px]">
        <h1 className="text-amberOrange text-[64px] lg:text-[96px] font-bold leading-none">
          404
        </h1>
        <h2 className="text-darkCharcoal text-[24px] lg:text-[32px] font-bold">
          Oops! Look likes something going wrong
        </h2>
        <p className="text-darkLiver">
          Page cannot be found! We’ll have it figured out in no time.
          <br /> Menwhile, cheek out these fresh ideas:
        </p>
        <Button
          text="Go to home"
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

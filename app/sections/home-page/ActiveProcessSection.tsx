import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { ActiveProcessBg as Background } from "@/public/home-page/backgrounds";
import { PlayIcon } from "@/public/home-page";

const ActiveProcessSection: FC = () => {
  return (
    <section className="relative flex justify-center items-center my-[50px] lg:justify-end lg:my-[120px] ">
      <Image
        src={Background}
        alt="Background"
        className="hidden z-1 lg:scale-y-[120%] lg:block xl:scale-none"
      />
      <div className="container z-2 flex flex-col text-white text-center items-center space-y-[20px] lg:text-right lg:items-end lg:absolute">
        <p className="text-amberOrange font-vibes text-[32px]">
          Як ми працюємо
        </p>
        <h1 className="font-bold text-[48px] max-w-[750px] leading-none">
          <span className="text-amberOrange">Ми</span> фіксуємо кожен етап
          приготування страв — від початку до подачі
        </h1>
        <p className="max-w-[650px]">
          Ми фіксуємо кожну деталь кулінарного процесу — від найсвіжіших
          інгредієнтів до фінальної подачі на вашому столі. Наша відданість
          прозорості дозволяє вам насолоджуватися не лише чудовим смаком, а й
          бути впевненими у якості кожної страви, яку ми подаємо.
        </p>

        <div className="flex max-w-[390px] items-center space-x-[20px]">
          <Link
            href="https://www.youtube.com/@JoshuaWeissman"
            target="_blank"
            className="bg-amberOrange rounded-full p-[15px] hover:bg-amberOrange/60"
            aria-label="play"
          >
            <Image src={PlayIcon} alt="Play" />
          </Link>
          <span>Переглянути відео</span>
        </div>
      </div>
    </section>
  );
};

export default ActiveProcessSection;

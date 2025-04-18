import React, { FC } from "react";
import Link from "next/link";
import Button from "./ButtonComponent";

const navData = [
  { link: "#text", text: "Головна сторінка" },
  { link: "#text", text: "Меню?" },
  { link: "#text", text: "Блог" },
  { link: "#text", text: "Текст" },
  { link: "#text", text: "Текст" },
  { link: "#text", text: "Текст" },
  { link: "#text", text: "Текст" },
];

const Header = () => {
  const HeaderNavigation: FC<{ className?: string }> = ({ className }) => {
    return (
      <>
        <nav className="flex text-white">
          {navData.map((item, index) => (
            <div key={index} className="relative group mx-[15px]">
              <Button
                tag="a"
                background="transparent"
                text={item.text}
                href={item.link}
                className="group-hover:text-amberOrange transition-all duration-300 transform"
              />
            </div>
          ))}
        </nav>
      </>
    );
  };

  const HeaderLogo = () => {
    return (
      <Link href="/">
        <p className="text-[24px] text-white font-bold">OASIS</p>
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-10">
      <div className="flex items-center justify-between p-[15px] bg-black">
        <HeaderLogo />
        <HeaderNavigation />
      </div>
    </header>
  );
};

export default Header;

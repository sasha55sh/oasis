import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDisclosure } from "@mantine/hooks";
import { Modal, ActionIcon } from "@mantine/core";

import Button from "@/components/ButtonComponent";
import Heart from "@/images/header/nav-heart.svg";
import Burger from "@/images/header/nav-list.svg";
import Phone from "@/images/header/nav-phone.svg";
import User from "@/images/header/nav-user.svg";
import Cart from "@/images/header/nav-cart.svg";
import Close from "@/images/vectors/close.svg";

const navData = [
  { link: "menu", text: "Menu" },
  { link: "shop", text: "Shop" },
  { link: "delivery", text: "Delivery" },
  { link: "about-us", text: "About Us" },
  { link: "news", text: "News" },
];

const Header: FC<{ className?: string }> = ({ className }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const HeaderNavigation = () => {
    return (
      <nav className="flex">
        {navData.map((item, index) => (
          <div key={index} className="hidden relative group mx-[15px] lg:flex">
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
    );
  };

  const HeaderButtons = () => {
    return (
      <div className="flex gap-[10px]">
        <button
          className="flex items-center justify-center border-oldSilver border-[1px] p-[10px] rounded-xl lg:hidden"
          aria-label="telephone-number"
        >
          <Image src={Phone} alt="Phone"></Image>
        </button>
        <button
          aria-label="liked"
          className="border-oldSilver border-[1px] p-[10px] rounded-xl"
        >
          <Image src={Heart} alt="Heart"></Image>
        </button>
        <button
          aria-label="user"
          className="border-oldSilver border-[1px] p-[10px] rounded-xl"
        >
          <Image src={User} alt="User"></Image>
        </button>
        <button
          className="hidden border-oldSilver border-[1px] p-[10px] rounded-xl lg:flex"
          aria-label="cart"
        >
          Cart
          <Image src={Cart} alt="Cart" className="ml-[10px]"></Image>
        </button>
        <button
          className="border-oldSilver border-[1px] p-[10px] rounded-xl lg:hidden"
          aria-label="burger-menu"
          onClick={open}
        >
          <Image src={Burger} alt="Burger"></Image>
        </button>
      </div>
    );
  };

  const HeaderLogo = () => {
    return (
      <Link href="/" onClick={close}>
        <p className="text-[24px] text-white font-bold">OASIS</p>
      </Link>
    );
  };

  return (
    <header className={`${className} sticky top-0 z-10`}>
      <div className="flex justify-between items-center p-[15px] text-white bg-black/80">
        <HeaderLogo />
        <HeaderNavigation />
        <HeaderButtons />
        <Modal
          opened={opened}
          onClose={close}
          fullScreen
          withCloseButton={false}
          radius={0}
          transitionProps={{ transition: "scale-x", duration: 200 }}
          className="lg:hidden"
          styles={{
            body: {
              padding: "0",
            },
            content: {
              backgroundColor: "#ffffff",
              zIndex: 9999,
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            },
            header: {
              backgroundColor: "#ffffff",
            },
          }}
        >
          <div className="container flex justify-between items-center py-[20px] mb-[40px]">
            <h1 className="text-amberOrange text-[58px] font-bold">Menu</h1>
            <ActionIcon
              variant="transparent"
              onClick={close}
              className="w-[24px] h-[24px]"
            >
              <Image src={Close} alt="Close" />
            </ActionIcon>
          </div>
        </Modal>
      </div>
    </header>
  );
};

export default Header;

import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDisclosure } from "@mantine/hooks";
import { Modal, ActionIcon } from "@mantine/core";
import { useCart } from "@/hooks/useCart";
import { Popover } from "flowbite-react";
import AuthModal from "@/components/account-page/LoginComponent";
import Button from "@/components/ButtonComponent";
import { useRouter } from "next/navigation";

import Heart from "@/images/header/nav-heart.svg";
import Burger from "@/images/header/nav-list.svg";
import Phone from "@/images/header/nav-phone.svg";
import User from "@/images/header/nav-user.svg";
import Cart from "@/images/header/nav-cart.svg";
import Close from "@/images/vectors/close.svg";

const navData = [
  { link: "/menu", text: "Menu" },
  { link: "/shop", text: "Shop" },
  { link: "/delivery", text: "Delivery" },
  { link: "/faq", text: "FAQ" },
  { link: "/news", text: "News" },
];

const Header: FC<{ className?: string }> = ({ className }) => {
  const [openModal, setOpenModal] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const { products, changeOpenState, isOpen } = useCart();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleAccount = () => {
    if (isLoggedIn) {
      router.push("/account");
    } else {
      setOpenModal(true);
    }
  };

  const hangeFavorite = () => {
    if (isLoggedIn) {
      router.push("/account/favorites");
    } else {
      setOpenModal(true);
    }
  };

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
        <Popover
          aria-labelledby="phone-popover"
          content={
            <div className="shadow-xl rounded-xl flex flex-col space-y-[10px] p-[10px]">
              <p className="text-amberOrange font-semibold">
                Call us from 11:00 to 22:00, seven days a week
              </p>
              <ul className="text-darkLiver flex flex-col space-y-[10px] items-center">
                <li>+380 (68) 68 68 686</li>
                <li>+380 (99) 00 00 000</li>
                <li>+380 (67) 67 67 676</li>
              </ul>
            </div>
          }
          arrow={false}
        >
          <button
            className="flex items-center justify-center border-oldSilver border-[1px] p-[10px] rounded-xl xl:hidden"
            aria-label="telephone-number"
          >
            <Image src={Phone} alt="Phone"></Image>
          </button>
        </Popover>

        <Popover
          aria-labelledby="phone-popover"
          content={
            <div className="shadow-xl rounded-xl flex flex-col space-y-[10px] p-[10px]">
              <p className="text-amberOrange font-semibold">
                Call us from 11:00 to 22:00, seven days a week
              </p>
              <ul className="text-darkLiver flex flex-col space-y-[10px] items-center">
                <li>+380 (68) 68 68 686</li>
                <li>+380 (99) 00 00 000</li>
              </ul>
            </div>
          }
          arrow={false}
        >
          <div
            className="hidden items-center justify-center space-x-[10px] mx-[20px] xl:flex"
            aria-label="telephone-number"
          >
            <Image src={Phone} alt="Phone"></Image>
            <p>+380 (67) 67 67 676</p>
          </div>
        </Popover>

        <button
          onClick={hangeFavorite}
          aria-label="liked"
          className="border-oldSilver border-[1px] p-[10px] rounded-xl"
        >
          <Image src={Heart} alt="Heart"></Image>
        </button>
        <button
          onClick={handleAccount}
          aria-label="user"
          className="border-oldSilver border-[1px] p-[10px] rounded-xl"
        >
          <Image src={User} alt="User"></Image>
        </button>
        <AuthModal openModal={openModal} setOpenModal={setOpenModal} />

        {products.length > 0 ? (
          <>
            <button
              className="relative hidden border-oldSilver border-[1px] p-[10px] rounded-xl lg:flex"
              aria-label="cart"
              onClick={() => changeOpenState(true)}
            >
              Cart
              <Image src={Cart} alt="Cart" className="ml-[10px]"></Image>
              <div className="absolute top-[-10px] right-[-10px] rounded-full px-[8px] bg-amberOrange text-white">
                {products.reduce(
                  (total, product) => total + product.quantity,
                  0
                )}
              </div>
            </button>
          </>
        ) : (
          <button
            className="hidden border-oldSilver border-[1px] p-[10px] rounded-xl lg:flex"
            aria-label="cart"
            onClick={() => changeOpenState(true)}
          >
            Cart
            <Image src={Cart} alt="Cart" className="ml-[10px]"></Image>
          </button>
        )}
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

          <div className="flex flex-col items-center gap-[20px] px-[20px]">
            {navData.map((item, index) => (
              <Button
                key={index}
                tag="a"
                background="transparent"
                text={item.text}
                href={item.link}
                className="text-black text-[24px] font-medium hover:text-amberOrange transition"
                onClick={close}
              />
            ))}
          </div>
        </Modal>
      </div>
    </header>
  );
};

export default Header;

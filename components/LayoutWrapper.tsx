"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { MantineProvider } from "@mantine/core";
import { CartProvider } from "@/hooks/useCart";
import { AlertProvider } from "@/hooks/alertContext";

import Header from "@/components/HeaderComponent";
import MiniCart from "@/components/cart-component/MiniCartComponent";
import DeliveryLine from "@/components/DeliveryLineComponent";
import Footer from "@/components/FooterComponent";
import CartComponent from "@/components/cart-component/CartComponent";

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <CartProvider>
      <MantineProvider>
        <AlertProvider>
          <div className={`${isHome ? "bg-black" : "bg-white"} `}>
            <Header />
            <CartComponent />
            <main className="font-inter">{children}</main>
            <MiniCart />
            <DeliveryLine />
            <Footer />
          </div>
        </AlertProvider>
      </MantineProvider>
    </CartProvider>
  );
}

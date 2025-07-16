"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { MantineProvider } from "@mantine/core";
import { CartProvider } from "@/hooks/useCart";
import { AlertProvider } from "@/hooks/alertContext";
import Header from "@/components/HeaderComponent";
import MiniCart from "@/components/MiniCartComponent";
import DeliveryLine from "@/components/DeliveryLineComponent";
import Footer from "@/components/FooterComponent";

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <CartProvider>
      <MantineProvider>
        <AlertProvider>
          <div className={`${isHome ? "bg-black" : "bg-white"} `}>
            <Header />
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

"use client";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { MantineProvider } from "@mantine/core";
import { CartProvider } from "@/hooks/useCart";
import { AlertProvider } from "@/hooks/alertContext";
import MiniCart from "@/components/cart-component/MiniCartComponent";
import CartComponent from "@/components/cart-component/CartComponent";
import { Header, DeliveryLine, Footer } from "@/components/ui";

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

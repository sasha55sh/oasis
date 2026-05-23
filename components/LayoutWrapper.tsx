"use client";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { MantineProvider } from "@mantine/core";
import { CartProvider } from "@/hooks/useCart";
import { AlertProvider } from "@/hooks/alertContext";
import {
  MiniCartComponent as MiniCart,
  CartComponent,
} from "@/components/cart-component";
import { Header, DeliveryLine, Footer } from "@/components/ui";
import { cn } from "@/lib/utils";

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <CartProvider>
      <MantineProvider>
        <AlertProvider>
          <div className={cn(isHome ? "bg-black" : "bg-white")}>
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

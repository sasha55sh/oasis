"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

import { CartProductProps, CartItemProps } from "@/config/types";

interface CartContextType {
  products: CartItemProps[];
  addToCart: (product: CartProductProps, amount: number) => void;
  addQuantity: (productId: string) => void;
  removeQuantity: (productId: string) => void;
  removeFromCart: (id: string) => void;
  totalAmount: number;
  isOpen: boolean;
  changeOpenState: (newType: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartItemProps[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const storedProducts = localStorage.getItem("cartProducts");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(products));
  }, [products]);

  const addToCart = (product: CartProductProps, amount: number) => {
    setProducts((prevProducts) => {
      const existingProduct = prevProducts.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return prevProducts.map((item) => {
          if (item.id === product.id) {
            const newQuantity = Math.min(
              item.quantity + amount,
              item.maxQuantity
            );
            return { ...item, quantity: newQuantity };
          }
          return item;
        });
      } else {
        return [
          ...prevProducts,
          { ...product, quantity: Math.min(amount, 100), maxQuantity: 100 },
        ];
      }
    });
  };

  const addQuantity = (productId: string) => {
    setProducts((prevProducts) =>
      prevProducts.map((item) => {
        if (item.id === productId) {
          const newQuantity = Math.min(item.quantity + 1, item.maxQuantity);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const removeQuantity = (productId: string) => {
    setProducts((prevProducts) =>
      prevProducts.map((item) => {
        if (item.id === productId && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    );
  };

  const changeOpenState = (newType: boolean) => {
    setIsOpen(newType);
  };

  const removeFromCart = (id: string) => {
    setProducts((prevProducts) =>
      prevProducts.filter((item) => item.id !== id)
    );
  };

  const totalAmount = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        products,
        addToCart,
        addQuantity,
        removeQuantity,
        removeFromCart,
        totalAmount,
        isOpen,
        changeOpenState,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};

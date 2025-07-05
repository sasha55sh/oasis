export type Menu = {
  id: string;
  title: string;
  description: string;
  cal: number;
  category: "starter menu" | "main course" | "dessert" | "drinks";
  price: number;
};

export type Faq = {
  id: string;
  question: string;
  answer: string;
};

export type CardProps = {
  id: string;
  handle: string;
  title: string;
  price: number;
  discount: number;
  image: string;
  gramm: number;
  quantity: number;
};

export type CartProductProps = {
  id: string;
  handle: string;
  title: string;
  price: number;
  image: string;
};

export type CartItemProps = CartProductProps & {
  quantity: number;
  maxQuantity: number;
};

export type InfoMessage = {
  type: "success" | "error";
  text: string;
};

export type Product = {
  id: string;
  title: string;
  handle: string;
  grams: number;
  description: string;
  price: number;
  image: string;
  category: string;
  proteins: number;
  carbohydrates: number;
  fats: number;
  cal: number;
};

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
  grams: number;
  description: string;
};

export type CartProductProps = {
  id: string;
  handle: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
  maxQuantity: number;
  grams: number;
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
  discount: number;
  quantity: number;
};

export type categoryButton = {
  className?: string;
  title: string;
  src: string;
  alt: string;
  value: string;
};

export type News = {
  id: string;
  image: string;
  title: string;
  handle: string;
  date: string;
  highText: string;
  text: string;
  lowText: string;
  category: string;
};

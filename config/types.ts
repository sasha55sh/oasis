export type Menu = {
  id: string;
  title: string;
  description: string;
  cal: number;
  category: "starter menu" | "main course" | "dessert" | "drinks";
  price: number;
};

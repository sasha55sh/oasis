import { Metadata } from "next";
import AccountSection from "@/app/(pages)/account/history/_components/AccountSection";

export const metadata: Metadata = {
  title: "Oasis - Улюблене",
  description: "Перегляньте всі улюблені товари на цій сторінці",
  icons: { icon: "@/app/favicon.ico" },
};

export const generateViewport = () => ({
  initialScale: 1.0,
  width: "device-width",
});

const FavoritesPage = () => {
  return <AccountSection activeTab="favorites" />;
};

export default FavoritesPage;

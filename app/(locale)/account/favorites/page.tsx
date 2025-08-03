import { Metadata } from "next";
import AccountSection from "@/app/sections/account-page/AccountSection";

export const metadata: Metadata = {
  title: "Oasis - Favorites",
  description: "View all your favorites products on this page",
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


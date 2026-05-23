import { Metadata } from "next";
import AccountSection from "@/app/(pages)/account/history/_components/AccountSection";

export const metadata: Metadata = {
  title: "Oasis - Історія замовлень",
  description: "Перегляньте всю історію замовлень",
  icons: { icon: "@/app/favicon.ico" },
};

export const generateViewport = () => ({
  initialScale: 1.0,
  width: "device-width",
});

export const revalidate = 60;

const HistoryPage = () => {
  return <AccountSection activeTab="history" />;
};

export default HistoryPage;

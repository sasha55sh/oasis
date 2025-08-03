import { Metadata } from "next";
import AccountSection from "@/app/sections/account-page/AccountSection";

export const metadata: Metadata = {
  title: "Oasis - History",
  description: "View all your orders history on this page",
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

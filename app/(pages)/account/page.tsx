import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oasis - Мій вкаунт",
  description: "Уся важлива інформація зібрана тут",
  icons: { icon: "@/app/favicon.ico" },
};

export const generateViewport = () => ({
  initialScale: 1.0,
  width: "device-width",
});

export default function AccountPage() {
  redirect("/account/history");
}

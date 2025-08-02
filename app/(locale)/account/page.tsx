import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oasis - Account",
  description: "View all important information on this page",
  icons: { icon: "@/app/favicon.ico" },
};

export const generateViewport = () => ({
  initialScale: 1.0,
  width: "device-width",
});

import { redirect } from "next/navigation";

export default function AccountPage() {
  redirect("/account/history");
}

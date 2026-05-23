"use client";
import React, { FC } from "react";
import TabSection from "@/app/(pages)/account/_components/TabSection";
import { HistorySection, PersonalDataSection } from "./index";
import FavoritesSection from "@/app/(pages)/account/favorites/_components/FavoritesSection";
import { Title } from "@/components/ui";

interface AccountSectionProps {
  activeTab: "history" | "favorites";
}

const AccountSection: FC<AccountSectionProps> = ({ activeTab }) => {
  return (
    <section>
      <Title title="Мій акаунт" />
      <div className="container my-[30px] flex flex-col space-y-[30px] lg:flex-row lg:space-y-0 lg:gap-x-[15px]">
        <div className="flex flex-col space-y-[30px]">
          <PersonalDataSection />
          <TabSection activeTab={activeTab} />
        </div>
        <div className="w-full">
          {activeTab === "history" && <HistorySection />}
          {activeTab === "favorites" && <FavoritesSection />}
        </div>
      </div>
    </section>
  );
};

export default AccountSection;

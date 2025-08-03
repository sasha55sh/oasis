"use client";
import React, { FC } from "react";
import Title from "@/components/TitleComponent";
import TabSection from "./TabSection";
import HistorySection from "./HistorySection";
import PersonalDataSection from "./PersonalDataSection";
import FavoritesSection from "./FavoritesSection";

interface AccountSectionProps {
  activeTab: "history" | "favorites";
}

const AccountSection: FC<AccountSectionProps> = ({ activeTab }) => {
  return (
    <section>
      <Title title="My Account" />
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

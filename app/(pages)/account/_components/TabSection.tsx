import React, { FC, memo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Path as History } from "@/public/delivery-page";
import { Heart } from "@/components/icons";

interface tabProps {
  activeTab: "history" | "favorites";
}

const TabSectionComponent: FC<tabProps> = ({ activeTab }) => {
  const router = useRouter();

  const tabs = [
    { id: "history", title: "Історія", src: History, alt: "History icon" },
    { id: "favorites", title: "Улюблене", src: Heart, alt: "Heart icon" },
  ];

  return (
    <div className="py-[10px] rounded-xl border border-oldSilver/30 flex justify-evenly lg:flex-col lg:items-center lg:px-[5px] lg:space-y-[10px]">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => router.push(`/account/${tab.id}`)}
          className={`${
            activeTab === tab.id
              ? "text-limeGreen bg-oldSilver/5 rounded-lg border border-amberOrange"
              : "text-darkLiver"
          } flex flex-col items-center font-bold p-[20px] mini:flex-row mini:p-[10px]`}
        >
          <Image src={tab.src} alt={tab.alt} className="mini:mr-[10px]" />
          {tab.title}
        </button>
      ))}
    </div>
  );
};

const TabSection = memo(TabSectionComponent);

export default TabSection;

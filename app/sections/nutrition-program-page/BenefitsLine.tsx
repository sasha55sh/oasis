import BetterWellBeingIcon from "@/images/vectors/better-well-being.svg";
import DoctorIcon from "@/images/vectors/doctor-icon.svg";
import ExtraPoundsIcon from "@/images/vectors/extra-pounds.svg";
import VariousDishesIcon from "@/images/vectors/various-dishes.svg";
import WithoutSugarIcon from "@/images/vectors/without-sugar.svg";
import Image from "next/image";

const benefitsData = [
  {
    icon: DoctorIcon,
    text: "Програма харчування розроблена лікарем-дієтологом",
  },
  { icon: VariousDishesIcon, text: "Велике рохмаїття страв" },
  { icon: BetterWellBeingIcon, text: "Покращене самопочуття" },
  { icon: WithoutSugarIcon, text: "Страви без білого цукру" },
  {
    icon: ExtraPoundsIcon,
    text: "З нами ви втратите зайві кг, без шкоди для здоров'я",
  },
];

const BenefitsLine = () => {
  return (
    <div className="flex space-x-4 m-4 my-8 justify-center overflow-x-auto scrollbar-hidden">
      {benefitsData.map((item, index) => {
        return (
          <div
            className="flex flex-col space-y-3 w-full items-center"
            key={index}
          >
            <div className="bg-amberOrange/70 p-4 rounded-xl">
              <Image src={item.icon} alt="Benefit icon" />
            </div>
            <p className="text-center">{item.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BenefitsLine;

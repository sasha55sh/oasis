import { NutritionProgram, Product } from "@/config/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductSceleton from "../../(pages)/shop/_components/ProductSceleton";
import { RecommendedProducts } from "@/components/cart-component";
import { useState } from "react";
import { cn } from "@/lib/utils";
import RequestOrderModal from "./RequestOrderModal";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Button,
} from "@/components/ui";

const daysData = [
  { label: "Пробний день", value: 1 },
  { label: "5 днів", value: 5 },
  { label: "7 днів", value: 7 },
  { label: "14 днів", value: 14 },
];

interface ProgramDescriptionProps {
  programs: NutritionProgram[];
  isLoading: boolean;
  randomProducts: Product[];
}

export interface RequestData {
  program: string;
  kcal: number;
  days: number;
  totalPrice: number;
}

const ProgramDescription = ({
  programs,
  isLoading,
  randomProducts,
}: ProgramDescriptionProps) => {
  const [selectedProgram, setSelectedProgram] = useState(
    programs[0]?.title ?? "",
  );

  const [selectedKcal, setSelectedKcal] = useState<Record<string, number>>(
    Object.fromEntries(
      programs.map((program) => [
        program.title,
        program.calorieOptions[0].kcal,
      ]),
    ),
  );

  const [selectedDays, setSelectedDays] = useState<Record<string, number>>({});
  const [openModal, setOpenModal] = useState(false);
  const [requestData, setRequestData] = useState<RequestData | null>(null);
  return (
    <Tabs
      value={selectedProgram}
      onValueChange={setSelectedProgram}
      className="w-full flex flex-col"
    >
      <TabsList className="grid w-full grid-cols-1 lg:grid-cols-3 gap-5 my-7">
        {programs.map((program) => {
          const isActive = selectedProgram === program.title;

          return (
            <TabsTrigger
              key={program.title}
              value={program.title}
              className={cn(
                "flex flex-col space-y-1 border p-4 transition-all",
                isActive
                  ? "bg-amberOrange/10 border-amberOrange"
                  : "border-darkLiver/30 hover:border-amberOrange/80",
              )}
            >
              <p className="text-[22px] font-semibold text-amberOrange">
                {program.title}
              </p>

              <span className="text-darkLiver text-lg">
                від {program.calorieOptions[0].prices[0]} грн/день
              </span>
            </TabsTrigger>
          );
        })}
      </TabsList>

      {programs.map((program) => (
        <TabsContent key={program.title} value={program.title}>
          <h3 className="text-[24px] font-bold text-darkCharcoal ml-10">
            {program.title}
          </h3>

          <div className="my-5 flex flex-col space-y-2">
            <p>
              <span className="font-bold text-base text-darkCharcoal">
                Опис програми:{" "}
              </span>
              {program.mainDescription}
            </p>
            <p>
              <span className="font-bold text-base text-darkCharcoal">
                Для кого:{" "}
              </span>
              {program.forWhomDescription}
            </p>
            <p>
              <span className="font-bold text-base text-darkCharcoal">
                Склад:{" "}
              </span>
              {program.compositionDescription}
            </p>
            <p>
              Щоденна доставка, вранці з 6:00 до 11:00, з 1,5 годинним
              діапазоном.
            </p>
          </div>

          <div className="hidden w-full lg:block max-w-100">
            <Swiper
              className="my-swiper"
              modules={[Navigation]}
              spaceBetween={20}
              navigation
              breakpoints={{
                1024: { slidesPerView: 3 },
                1440: { slidesPerView: 4 },
              }}
            >
              {isLoading ? (
                <>
                  {Array.from({ length: 2 }, (_, index) => (
                    <SwiperSlide key={index}>
                      <ProductSceleton />
                    </SwiperSlide>
                  ))}
                </>
              ) : (
                <>
                  {randomProducts.map((product, index) => (
                    <SwiperSlide key={index}>
                      <RecommendedProducts
                        product={product}
                        className="max-w-[350px]"
                      />
                    </SwiperSlide>
                  ))}
                </>
              )}
            </Swiper>
          </div>

          <p className="mt-5 text-darkLiver/80">
            * Компанія має право вносити зміни до меню залежно від наявності
            деяких інгредієнтів.
            <br />
            ** Вихід страв вказаний у грамах, середнє допустиме відхилення ваги
            готових страв 10% (від заявленої ваги у меню)
          </p>

          <p className="font-medium text-lg mt-5">Калорійність:</p>
          <Tabs
            value={String(selectedKcal[program.title])}
            onValueChange={(value) =>
              setSelectedKcal((prev) => ({
                ...prev,
                [program.title]: Number(value),
              }))
            }
            className="flex flex-col space-y-3"
          >
            <TabsList className="flex space-x-4 mt-4">
              {program.calorieOptions.map((option) => {
                const isActive = selectedKcal[program.title] === option.kcal;

                return (
                  <TabsTrigger
                    key={option.kcal}
                    value={String(option.kcal)}
                    className={cn(
                      "flex flex-col space-y-1 border text-base p-4 transition-all",
                      isActive
                        ? "bg-amberOrange text-white border-amberOrange"
                        : "text-amberOrange border-darkLiver/30 hover:border-amberOrange/80",
                    )}
                  >
                    {option.kcal} ккал
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {program.calorieOptions.map((option) => {
              const selectedIndex = selectedDays[option.kcal] ?? 0;

              const selectedPrice = option.prices[selectedIndex];
              const selectedDayValue = daysData[selectedIndex].value;

              const totalPrice = selectedPrice * selectedDayValue;

              return (
                <TabsContent
                  key={option.kcal}
                  value={String(option.kcal)}
                  className="flex flex-col"
                >
                  <p className="font-medium text-lg">Кількість днів:</p>

                  <div className="flex flex-row justify-between space-x-5">
                    {option.prices.map((price, index) => {
                      const isActive = selectedIndex === index;

                      return (
                        <button
                          type="button"
                          key={index}
                          onClick={() =>
                            setSelectedDays((prev) => ({
                              ...prev,
                              [option.kcal]: index,
                            }))
                          }
                          className={cn(
                            "flex flex-col w-full space-y-1 rounded-lg border p-4 mt-5 transition-all",
                            isActive
                              ? "border-amberOrange bg-amberOrange/10"
                              : "border-darkLiver/30 hover:border-amberOrange/80",
                          )}
                        >
                          <p className="font-medium text-lg text-darkLiver">
                            {daysData[index].label}
                          </p>

                          <p className="text-amberOrange text-base">
                            {price} грн/день
                          </p>
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex p-3 bg-amberOrange/60 rounded-lg justify-around max-w-[600px] w-full mt-10 self-center">
                    <p className="flex flex-col items-center text-base gap-y-1 text-darkLiver">
                      <span className="text-lg font-semibold text-darkCharcoal">
                        {option.proteins}
                      </span>
                      Білки
                    </p>

                    <p className="flex flex-col items-center text-base gap-y-1 text-darkLiver">
                      <span className="text-lg font-semibold text-darkCharcoal">
                        {option.fats}
                      </span>
                      Жири
                    </p>

                    <p className="flex flex-col items-center text-base gap-y-1 text-darkLiver">
                      <span className="text-lg font-semibold text-darkCharcoal">
                        {option.carbohydrates}
                      </span>
                      Вуглеводи
                    </p>
                  </div>

                  <div className="mt-5 flex items-center space-x-5">
                    <p className="text-lg font-medium text-darkCharcoal w-[190px]">
                      Всього:{" "}
                      <span className="text-limeGreen font-semibold text-xl">
                        {totalPrice} грн
                      </span>
                    </p>

                    <Button
                      text="Замовити"
                      background="limeGreen"
                      type="button"
                      onClick={() => {
                        setRequestData({
                          program: program.title,
                          kcal: option.kcal,
                          days: selectedDayValue,
                          totalPrice,
                        });

                        setOpenModal(true);
                      }}
                    />
                  </div>
                </TabsContent>
              );
            })}
            <RequestOrderModal
              openModal={openModal}
              setOpenModal={setOpenModal}
              requestData={requestData}
            />
          </Tabs>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default ProgramDescription;

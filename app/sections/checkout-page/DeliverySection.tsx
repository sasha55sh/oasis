import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import { Card } from "flowbite-react";
import { useForm } from "@mantine/form";
import Input from "@/components/InputComponent";
import Select from "@/components/SelectComponent";
import Info from "@/images/vectors/info-icon.svg";

const generateDates = (days: number) => {
  const dates: { label: string; value: string }[] = [];
  const today = new Date();

  for (let i = 0; i < days; i++) {
    const date = new Date();
    date.setDate(today.getDate() + i);

    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const label = i === 0 ? "Today" : `${day}.${month}`;

    dates.push({
      label,
      value: date.toISOString().split("T")[0],
    });
  }

  return dates;
};

const generateTimes = () => {
  const times: string[] = [];
  let start = 12 * 60;
  const end = 21 * 60 + 30;

  while (start <= end) {
    const hours = Math.floor(start / 60);
    const minutes = start % 60;
    const formatted = `${hours}:${minutes.toString().padStart(2, "0")}`;
    times.push(formatted);
    start += 30;
  }

  return times;
};

const DeliverySection: FC<{
  setDeliveryData: (data: any) => void;

  isSubmitted: boolean;
}> = ({ setDeliveryData, isSubmitted }) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");

  const dates = generateDates(7);
  const times = generateTimes();

  const todayISO = new Date().toISOString().split("T")[0];

  const availableTimes =
    selectedDate === todayISO
      ? times.filter((time) => {
          const [h, m] = time.split(":").map(Number);
          const now = new Date();
          const currentMinutes = now.getHours() * 60 + now.getMinutes();
          const bufferMinutes = 90;
          return h * 60 + m >= currentMinutes + bufferMinutes;
        })
      : times;

  const handleSelectClosest = () => {
    if (availableTimes.length > 0) {
      setSelectedTime(availableTimes[0]);
    }
  };

  const form = useForm({
    initialValues: {
      street: "",
      house: "",
      flat: "",
    },
  });

  useEffect(() => {
    const localValues = localStorage.getItem("deliveryData");
    if (localValues) {
      const result = JSON.parse(localValues);
      setSelectedDate(result.selectedDate || "");
      setSelectedTime(result.selectedTime || "");
      setSelectedOption(result.selectedOption || "");
      form.setValues({
        street: result.street || "",
        house: result.house || "",
        flat: result.flat || "",
      });
    }
  }, []);

  useEffect(() => {
    const data = {
      selectedDate,
      selectedTime,
      selectedOption,
      ...form.values,
    };
    localStorage.setItem("deliveryData", JSON.stringify(data));
    setDeliveryData(data);
  }, [selectedDate, selectedTime, selectedOption, form.values]);

  return (
    <Card className="rounded-xl shadow-xl" id="delivery">
      <div className="flex items-center justify-between">
        <h2 className="text-limeGreen text-[24px]">Delivery time</h2>
        <div className="flex space-x-[8px]">
          <p className="text-amberOrange">Delivery area</p>
          <button>
            <Image src={Info} alt="Info icon" />
          </button>
        </div>
      </div>

      <div className="flex flex-col space-y-[20px] items-center sm:flex-row sm:space-y-0 lg:flex-col lg:space-y-[20px]">
        <div className="flex flex-col">
          <Select
            options={dates}
            value={selectedDate}
            onSelect={(value) => {
              setSelectedDate(value);
              setSelectedTime("");
            }}
            placeholder="Choose delivery day"
            className="max-w-[300px] mini:max-w-[450px] sm:max-w-[280px] md:max-w-[340px]
        "
          />
          {isSubmitted && !selectedDate && (
            <p className="text-electricRed m-[10px]">Please select a date</p>
          )}
        </div>

        <div className="flex flex-col">
          <Select
            options={[
              ...(selectedDate && availableTimes.length > 0
                ? [{ label: "Closest", value: "closest" }]
                : []),
              ...availableTimes.map((time) => ({
                label: time,
                value: time,
              })),
            ]}
            value={selectedTime}
            onSelect={(value) => {
              if (value === "closest") {
                handleSelectClosest();
              } else {
                setSelectedTime(value);
              }
            }}
            disabled={!selectedDate}
            placeholder="Choose delivery time"
            className="max-w-[300px] mini:max-w-[450px] sm:max-w-[280px] md:max-w-[340px]"
          />
          {isSubmitted && !selectedTime && (
            <p className="text-electricRed m-[10px]">Please select a time</p>
          )}
        </div>
      </div>

      <div className="text-darkLiver flex flex-col space-y-[15px]">
        <div>
          <input
            type="radio"
            id="self-pickup"
            checked={selectedOption === "self-pickup"}
            onChange={() => setSelectedOption("self-pickup")}
            className="w-[25px] h-[25px] text-amberOrange bg-oldSilver/20 border-oldSilver/50 focus:ring-amberOrange focus:ring-2"
          />
          <label htmlFor="self-pickup" className="ml-[10px] ">
            Self pickup
          </label>
        </div>

        <div>
          <input
            type="radio"
            id="courier"
            checked={selectedOption === "courier"}
            onChange={() => setSelectedOption("courier")}
            className="w-[25px] h-[25px] text-amberOrange bg-oldSilver/20 border-oldSilver/50 focus:ring-amberOrange focus:ring-2"
          />
          <label htmlFor="courier" className="ml-[10px] ">
            Сourier delivery
          </label>
        </div>
        {isSubmitted && !selectedOption && (
          <p className="text-electricRed m-[10px]">Choose a delivery method</p>
        )}
      </div>

      {selectedOption === "courier" && (
        <form className="flex flex-col items-center space-y-[20px]">
          <Input
            inputType="input"
            placeholder="Street"
            required
            {...form.getInputProps("street")}
            errorType="critical"
            fullWidth
            background="warmWhite"
          />
          <div className="w-full space-y-[20px] flex flex-col items-center mini:flex-row mini:space-y-0 mini:space-x-[10px]">
            <Input
              inputType="input"
              placeholder="House"
              required
              {...form.getInputProps("house")}
              errorType="critical"
              fullWidth
              background="warmWhite"
            />

            <Input
              inputType="input"
              placeholder="Flat (optionally)"
              {...form.getInputProps("flat")}
              fullWidth
              background="warmWhite"
            />
          </div>
        </form>
      )}
    </Card>
  );
};

export default DeliverySection;

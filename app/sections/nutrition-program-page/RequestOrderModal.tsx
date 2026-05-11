import { User } from "@/config/types";
import { getUser } from "@/service/UserService";
import { hasLength, useForm } from "@mantine/form";
import { Modal, ModalBody, ModalHeader } from "flowbite-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Input from "@/components/InputComponent";
import { RequestData } from "./ProgramDescription";
import { createProgramRequest } from "@/service/NutritionProgramService";
import Button from "@/components/ButtonComponent";

interface ModelProps {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  openModal: boolean;
  requestData: RequestData | null;
}

const RequestOrderModal = ({
  setOpenModal,
  openModal,
  requestData,
}: ModelProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validOperators = [
    "067",
    "068",
    "096",
    "097",
    "098",
    "099",
    "063",
    "073",
    "093",
    "050",
    "066",
    "095",
    "091",
    "092",
    "094",
    "089",
    "093",
  ];

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUser();
      setUser(data);
    };
    fetchUser();
  }, []);

  const form = useForm({
    initialValues: {
      firstName: "",
      phoneNumber: "",
      comments: "",
      street: "",
      house: "",
      flat: "",
    },
    validate: {
      firstName: hasLength({ min: 2 }, "Мінімум 2 літери"),
      phoneNumber: (value) => {
        if (!value) return "Номер телефону обов'язковий";
        if (!/^\+38\d{10}$/.test(value)) return "Некоректний формат номеру";
        const operatorCode = value.slice(3, 6);
        if (!validOperators.includes(operatorCode))
          return "Неправильний код оператора";
        return null;
      },
      street: (value) => {
        if (selectedOption === "courier" && !value) {
          return "Вкажіть вулицю";
        }

        return null;
      },
    },
  });

  useEffect(() => {
    if (user) {
      form.setValues({
        firstName: user.firstName || "",
        phoneNumber: user.phone || "",
      });
    }
  }, [user]);

  useEffect(() => {
    if (form.values.phoneNumber && !form.values.phoneNumber.startsWith("+38")) {
      form.setFieldValue("phoneNumber", `+38${form.values.phoneNumber}`);
    }

    if (form.values.phoneNumber.length === 2) {
      form.setFieldValue("phoneNumber", "");
    }
  }, [form.values.phoneNumber]);

  useEffect(() => {
    const localValues = localStorage.getItem("requestData");
    if (localValues) {
      const result = JSON.parse(localValues);
      setSelectedOption(result.selectedOption || "");
      form.setValues({
        street: result.street || "",
        house: result.house || "",
        flat: result.flat || "",
        comments: result.comments || "",
      });
    }
  }, []);

  useEffect(() => {
    const data = {
      selectedOption,
      ...form.values,
    };
    localStorage.setItem("requestData", JSON.stringify(data));
  }, [selectedOption, form.values]);

  const handleRequest = async (values: typeof form.values) => {
    setIsSubmitted(true);

    if (!requestData) return;

    if (!selectedOption) {
      return;
    }

    if (selectedOption === "courier" && (!values.street || !values.house)) {
      return;
    }

    try {
      setIsLoading(true);

      const payload = {
        userData: {
          uid: user?._id,
          firstName: values.firstName,
          phoneNumber: values.phoneNumber,
          method: selectedOption,
          street: selectedOption === "courier" ? values.street : "",
          house: selectedOption === "courier" ? values.house : "",
          flat: selectedOption === "courier" ? values.flat : "",
        },
        programData: {
          title: requestData.program,
          kcal: requestData.kcal,
          duration: requestData.days,
          totalPrice: requestData.totalPrice,
        },
        comments: values.comments,
        status: "активне",
      };

      await createProgramRequest(payload);

      setIsSuccess(true);
      form.reset();

      setSelectedOption("");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal show={openModal} onClose={() => setOpenModal(false)}>
      <ModalHeader />
      <ModalBody>
        {isSuccess ? (
          <div className="flex flex-col items-center text-center py-10 space-y-5">
            <div className="w-20 h-20 rounded-full bg-limeGreen/20 flex items-center justify-center">
              <span className="text-4xl">✅</span>
            </div>

            <h2 className="text-2xl font-bold text-limeGreen">
              Заявку успішно створено
            </h2>

            <p className="text-darkLiver max-w-[300px]">
              Наш менеджер зв’яжеться з вами найближчим часом для підтвердження
              замовлення.
            </p>

            <Button
              text="Готово"
              background="limeGreen"
              type="button"
              onClick={() => {
                setOpenModal(false);
                setIsSuccess(false);
              }}
            />
          </div>
        ) : (
          <form
            onSubmit={form.onSubmit(handleRequest)}
            className="flex flex-col space-y-[20px]"
          >
            <h1 className="text-limeGreen text-[26px] font-bold">
              Останній етап
            </h1>
            <p>
              {" "}
              Заповніть кілька деталей — і ми почнемо готувати персональне меню
              саме для вас{" "}
            </p>

            <Input
              inputType="input"
              placeholder="Ім'я"
              required
              {...form.getInputProps("firstName")}
              errorType="critical"
              fullWidth
              background="warmWhite"
              className="placeholder-darkLiver"
            />

            <Input
              inputType="input"
              placeholder="Номер телефону"
              required
              {...form.getInputProps("phoneNumber")}
              errorType="critical"
              fullWidth
              background="warmWhite"
              className="placeholder-darkLiver"
            />

            <Input
              inputType="textarea"
              placeholder="Коментарі"
              {...form.getInputProps("comments")}
              errorType="critical"
              fullWidth
              background="warmWhite"
              className="placeholder-darkLiver"
            />

            <div className="text-darkLiver flex space-x-[15px]">
              <div>
                <input
                  type="radio"
                  id="self-pickup"
                  checked={selectedOption === "self-pickup"}
                  onChange={() => setSelectedOption("self-pickup")}
                  className="w-[25px] h-[25px] text-amberOrange bg-oldSilver/20 border-oldSilver/50 focus:ring-amberOrange focus:ring-2"
                />
                <label htmlFor="self-pickup" className="ml-[10px] ">
                  Самовивіз
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
                  Кур'єрська доставка
                </label>
              </div>
              {isSubmitted && !selectedOption && (
                <p className="text-electricRed m-[10px]">
                  Оберіть метод доставки
                </p>
              )}
            </div>
            {selectedOption === "courier" && (
              <div className="flex flex-col items-center space-y-[20px]">
                <Input
                  inputType="input"
                  placeholder="Вулиця"
                  required
                  {...form.getInputProps("street")}
                  errorType="critical"
                  fullWidth
                  background="warmWhite"
                />
                <div className="w-full space-y-[20px] flex flex-col items-center mini:flex-row mini:space-y-0 mini:space-x-[10px]">
                  <Input
                    inputType="input"
                    placeholder="Будинок"
                    required
                    {...form.getInputProps("house")}
                    errorType="critical"
                    fullWidth
                    background="warmWhite"
                  />

                  <Input
                    inputType="input"
                    placeholder="Квартира(необов'язково)"
                    {...form.getInputProps("flat")}
                    fullWidth
                    background="warmWhite"
                  />
                </div>
              </div>
            )}

            <div className="w-full rounded-lg bg-amberOrange/10 p-4 my-6 grid grid-cols-2">
              <p>
                <span className="font-semibold">Програма: </span>
                {requestData?.program}
              </p>
              <p>
                <span className="font-semibold">Калорійність: </span>
                {requestData?.kcal} ккал
              </p>
              <p>
                <span className="font-semibold">Кількість днів: </span>
                {requestData?.days}
              </p>
              <p>
                <span className="font-semibold">Сума: </span>
                {requestData?.totalPrice} грн
              </p>
            </div>

            <Button
              text={isLoading ? "Відправка..." : "Підтвердити"}
              background="limeGreen"
              type="submit"
              className="self-center"
              disabled={isLoading}
            />
          </form>
        )}
      </ModalBody>
    </Modal>
  );
};

export default RequestOrderModal;

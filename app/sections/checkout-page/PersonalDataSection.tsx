import React, { FC, useEffect } from "react";
import { hasLength, useForm } from "@mantine/form";
import { Card } from "flowbite-react";
import Input from "@/components/InputComponent";
import { getUser } from "@/service/UserService";

const CheckoutSection: FC<{
  setPersonalData: any;
  registerValidation: any;
}> = ({ setPersonalData, registerValidation }) => {
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

  const form = useForm({
    initialValues: {
      firstName: "",
      phone: "",
    },
    validate: {
      firstName: hasLength({ min: 2 }, "Incorrect name"),
      phone: (value) => {
        if (!value) return "Phone is required";
        if (!/^\+38\d{10}$/.test(value)) return "Incorrect phone format";
        const operatorCode = value.slice(3, 6);
        if (!validOperators.includes(operatorCode))
          return "Invalid operator code";
        return null;
      },
    },
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const localValues = localStorage.getItem("personalData");
    const result = localValues
      ? JSON.parse(localValues)
      : { firstName: "", phone: "" };
    form.setValues(result);
    setPersonalData(result);

    if (!token) return;

    const fetchUserData = async () => {
      try {
        const data = await getUser(); 
        form.setValues({
          firstName: data.firstName || "",
          phone: data.phone || "",
        });
        setPersonalData({
          firstName: data.firstName || "",
          phone: data.phone || "",
        });
      } catch (error) {
        console.error("Failed to fetch user data", error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    if (form.values.phone && !form.values.phone.startsWith("+38")) {
      form.setFieldValue("phone", `+38${form.values.phone}`);
    }

    if (form.values.phone.length === 2) {
      form.setFieldValue("phone", "");
    }
  }, [form.values.phone]);

  useEffect(() => {
    if (form.values.firstName != "" || form.values.phone != "") {
      localStorage.setItem("personalData", JSON.stringify(form.values));
      setPersonalData(form.values);
    }
  }, [form.values]);

  useEffect(() => {
    registerValidation(() => {
      const res = form.validate();
      return !res.hasErrors;
    });
  }, []);
  return (
    <Card className="rounded-xl shadow-xl" id="info">
      <h2 className="text-limeGreen text-[24px]">Personal data</h2>

      <form className="flex flex-col space-y-[20px] items-center sm:flex-row sm:space-y-0 sm:space-x-[10px] lg:flex-col lg:space-x-0 lg:space-y-[20px] xl:flex-row xl:space-x-[10px] xl:space-y-0">
        <Input
          inputType="input"
          placeholder="Name"
          required
          {...form.getInputProps("firstName")}
          errorType="critical"
          fullWidth
          background="warmWhite"
        />

        <Input
          inputType="input"
          placeholder="Phone"
          required
          {...form.getInputProps("phone")}
          errorType="critical"
          fullWidth
          background="warmWhite"
        />
      </form>
    </Card>
  );
};

export default CheckoutSection;

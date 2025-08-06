"use client";
declare global {
  interface Window {
    recaptchaVerifier: any;
  }
}

import React, { FC, useEffect, useState } from "react";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { Modal, ModalBody, ModalHeader } from "flowbite-react";
import { verifyCodeBackend } from "@/service/AuthService";
import { useRouter } from "next/navigation";
import { auth } from "@/config/firebise";
import Button from "../ButtonComponent";
import { useForm } from "@mantine/form";
import Input from "../InputComponent";

const LoginComponent: FC<{
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
}> = ({ openModal, setOpenModal }) => {
  const [step, setStep] = useState<"phone" | "code">("phone");
  const [confirmationResult, setConfirmationResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [phoneValue, setPhoneValue] = useState("");
  const [error, setError] = useState<string>("");
  const router = useRouter();

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

  const phoneForm = useForm({
    initialValues: {
      phone: "",
    },
    validate: {
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

  const codeForm = useForm({
    initialValues: {
      code: "",
    },
    validate: {
      code: (value) =>
        value.length === 6 ? null : "Code must contain 6 digits",
    },
  });

  useEffect(() => {
    if (phoneForm.values.phone && !phoneForm.values.phone.startsWith("+38")) {
      phoneForm.setFieldValue("phone", `+38${phoneForm.values.phone}`);
    }

    if (phoneForm.values.phone.length === 2) {
      phoneForm.setFieldValue("phone", "");
    }
  }, [phoneForm.values.phone]);

  const initRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
        }
      );
    }
  };

  const handleSendCode = async (values: typeof phoneForm.values) => {
    setLoading(true);
    setError("");
    try {
      initRecaptcha();
      const confirmation = await signInWithPhoneNumber(
        auth,
        values.phone,
        window.recaptchaVerifier
      );
      setConfirmationResult(confirmation);
      setPhoneValue(values.phone);
      setStep("code");
    } catch (error) {
      setError("Failed to send code");
    }
    setLoading(false);
  };

  const handleVerifyCode = async (values: typeof codeForm.values) => {
    setLoading(true);
    setError("");
    try {
      const result = await confirmationResult.confirm(values.code);
      const user = result.user;
      const idToken = await user.getIdToken();

      const backendRes = await verifyCodeBackend(idToken);
      localStorage.setItem("token", backendRes.token);
      router.push("/account");
      setOpenModal(false);
    } catch (error) {
      setError("Invalid code");
    }
    setLoading(false);
  };

  const onCloseModal = () => {
    setOpenModal(false);
    setStep("phone");
    phoneForm.reset();
    codeForm.reset();
  };

  return (
    <Modal
      show={openModal}
      onClose={onCloseModal}
      size="md"
      popup
    >
      <ModalHeader />
      <ModalBody>
        <div id="recaptcha-container"></div>
        {step === "phone" ? (
          <form
            onSubmit={phoneForm.onSubmit(handleSendCode)}
            className="flex flex-col space-y-[20px] my-[50px] items-center"
          >
            <h1 className="text-limeGreen text-[26px] font-bold">Log in</h1>
            <Input
              inputType="input"
              placeholder="Enter your phone number"
              required
              {...phoneForm.getInputProps("phone")}
              errorType="critical"
              fullWidth
              background="warmWhite"
              className="placeholder-darkLiver"
            />
            <p className="text-center text-oldSilver">
              Warning: working in testing mode, so try to enter{" "}
              <span className="font-bold">0680000000</span>
            </p>
            <Button
              type="submit"
              text={loading ? "Sending..." : "Get code"}
              disabled={loading}
            />
            <p className="text-electricRed text-[14px]">{error}</p>
          </form>
        ) : (
          <form
            onSubmit={codeForm.onSubmit(handleVerifyCode)}
            className="flex flex-col space-y-[20px] my-[50px] items-center"
          >
            <p className="text-darkCharcoal text-[22px]">
              Code sent to{" "}
              <span className="text-amberOrange font-bold">{phoneValue}</span>
            </p>
            <Input
              inputType="input"
              placeholder="Enter code"
              required
              {...codeForm.getInputProps("code")}
              errorType="critical"
              fullWidth
              background="warmWhite"
              className="placeholder-darkLiver"
            />
            <button
              onClick={() => setStep("phone")}
              className="text-electricRed text-[14px] underline"
            >
              Change number
            </button>
            <p className="text-center text-oldSilver">
              Warning: working in testing mode, so try to enter{" "}
              <span className="font-bold">111111</span>
            </p>
            <Button
              type="submit"
              background="limeGreen"
              disabled={loading}
              text={loading ? "Verifying..." : "Confirm"}
            />
            <p className="text-electricRed text-[14px]">{error}</p>
          </form>
        )}
      </ModalBody>
    </Modal>
  );
};

export default LoginComponent;

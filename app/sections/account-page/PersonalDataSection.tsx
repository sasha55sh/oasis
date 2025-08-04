"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { User } from "@/config/types";
import { Loader } from "@mantine/core";
import { useRouter } from "next/navigation";
import { Modal, ModalBody, ModalHeader } from "flowbite-react";
import { useForm, isEmail, hasLength } from "@mantine/form";
import Button from "@/components/ButtonComponent";
import Input from "@/components/InputComponent";
import { getUser, updateUser, logoutUser } from "@/service/UserService";

import Smile from "@/images/account-page/smile-icon.svg";
import Pencil from "@/images/account-page/pencil-icon.svg";

const PersonalDataSection = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUser();
      setUser(data);
    };
    fetchUser();
  }, []);

  useEffect(() => {
    if (user) {
      form.setValues({
        email: user.email || "",
        firstName: user.firstName || "",
      });
    }
  }, [user]);

  const form = useForm({
    initialValues: {
      email: "",
      firstName: "",
    },
    validate: {
      email: isEmail("Incorrect email"),
      firstName: hasLength({ min: 2 }, "Too short"),
    },
  });

  const handleSave = async () => {
    setIsLoading(true);

    const values = form.values;
    const updateData: { firstName?: string; email?: string } = {};

    if (values.firstName.trim() !== user?.firstName) {
      updateData.firstName = values.firstName.trim();
    }

    if (values.email.trim() !== user?.email) {
      updateData.email = values.email.trim();
    }

    const updated = await updateUser(updateData);
    setUser(updated);
    setOpenModal(false);
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[80vh] w-full ">
        <Loader className="animate-spin rounded-full border-[5px] border-amberOrange border-b-transparent w-[40px] h-[40px]" />
      </div>
    );
  }

  const handleLogout = () => {
    logoutUser();
    router.push("/");
  };

  return (
    <>
      <div className="rounded-xl border border-oldSilver/30 p-[20px] flex flex-col space-y-[20px]">
        <div className="flex items-start justify-between">
          <div className="flex space-x-[10px]">
            <Image
              src={Smile}
              alt="Smile icon"
              width={55}
              height={55}
              className="w-[55px] h-[55px]"
            />

            <div className="space-y-[10px]">
              <p className="font-semibold text-darkCharcoal">
                {user?.firstName ?? "Guest"}
              </p>
              <p className="text-darkLiver text-[14px] break-all">
                {user?.email ?? "Email"}
              </p>

              <p className="text-[14px]">{user?.phone ?? "Phone"}</p>
            </div>
          </div>

          <button
            onClick={() => setOpenModal(true)}
            className="bg-oldSilver/60 p-[5px] rounded-xl hover:bg-oldSilver/20"
          >
            <Image src={Pencil} alt="Pencil icon" />
          </button>
        </div>
        <Button text="Exit" bordered icon="signOut" onClick={handleLogout} />
      </div>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <ModalHeader />
        <ModalBody>
          <form
            onSubmit={form.onSubmit(handleSave)}
            className="flex flex-col space-y-[20px] items-center"
          >
            <h1 className="text-limeGreen text-[26px] font-bold">
              Personal data
            </h1>
            <p>Do you want to change something?</p>
            <Input
              inputType="input"
              placeholder="Enter new name"
              required
              {...form.getInputProps("firstName")}
              errorType="critical"
              fullWidth
              background="warmWhite"
              className="placeholder-darkLiver"
            />

            <Input
              inputType="input"
              placeholder="Enter new email"
              required
              {...form.getInputProps("email")}
              errorType="critical"
              fullWidth
              background="warmWhite"
              className="placeholder-darkLiver"
            />
            <Button text="Save changes" type="submit" />
          </form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default PersonalDataSection;

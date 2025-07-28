import React, { FC, useEffect } from "react";
import { Card } from "flowbite-react";
import { useForm } from "@mantine/form";
import Input from "@/components/InputComponent";

const CommentsSection: FC<{ setCommentsData: any }> = ({ setCommentsData }) => {
  const form = useForm({
    initialValues: {
      cutleryQuantity: "",
      comments: "",
    },
  });

  useEffect(() => {
    const localValues = localStorage.getItem("commentsData");
    const result = localValues
      ? JSON.parse(localValues)
      : {
          cutleryQuantity: "",
          comments: "",
        };
    form.setValues(result);
    setCommentsData(result);
  }, []);

  useEffect(() => {
    if (form.values.cutleryQuantity != "" || form.values.comments != "") {
      localStorage.setItem("commentsData", JSON.stringify(form.values));
      setCommentsData(form.values);
    }
  }, [form.values]);

  return (
    <Card className="rounded-xl shadow-xl" id="comments">
      <h2 className="text-limeGreen text-[24px]">Comments</h2>

      <form className="flex flex-col items-center space-y-[15px]">
        <Input
          inputType="input"
          placeholder="Number of cutlery"
          required
          {...form.getInputProps("cutleryQuantity")}
          fullWidth
          background="warmWhite"
        />

        <Input
          inputType="textarea"
          placeholder="Order note"
          {...form.getInputProps("comments")}
          fullWidth
          background="warmWhite"
        />
      </form>
    </Card>
  );
};

export default CommentsSection;

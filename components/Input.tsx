import React, { ChangeEvent, FC } from "react";

interface InputProps {
  className?: string;
  placeholder?: string;
  inputType: "input" | "textarea";
  type?: "text" | "email" | "search";
  background?: "amberOrange" | "transparent" | "warmWhite";
  errorType?: "critical" | "warning";
  bordered?: boolean;
  fullWidth?: boolean;
  error?: string | null;
  required?: boolean;
  disabled?: boolean;
  pattern?: string;
  value?: string;
  name?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const InputComponent: FC<InputProps> = ({
  className,
  placeholder,
  inputType,
  type = "text",
  background = "transparent",
  errorType,
  bordered = false,
  fullWidth,
  error,
  required,
  disabled,
  pattern,
  value,
  name,
  onChange,
}) => {
  const widthClass = fullWidth ? "w-[100%]" : "";
  const finalBackground = bordered ? "transparent" : background;
  const backgroundClass =
    finalBackground === "amberOrange"
      ? "bg-amberOrange"
      : finalBackground === "warmWhite"
      ? "bg-warmWhite/50"
      : "bg-transparent";
  const borderClass = bordered
    ? "border-[2px] border-white border-solid"
    : finalBackground === "warmWhite"
    ? "border-[2px] border-transparent border-solid"
    : "";
  const textClass =
    finalBackground === "amberOrange"
      ? "text-white"
      : finalBackground === "warmWhite"
      ? "text-darkLiver"
      : bordered
      ? "text-white"
      : "";

  const inputContent = () => {
    if (inputType === "input") {
      return (
        <div className={`${className} flex flex-col w-full`}>
          <input
            className={`${className} ${textClass} ${backgroundClass} ${borderClass} ${widthClass} py-[16px] px-[30px] rounded-full placeholder-amberOrange focus:ring-0 focus:border-transparent`}
            type={type}
            placeholder={placeholder}
            pattern={pattern}
            value={value}
            required={required}
            name={name}
            disabled={disabled}
            onChange={onChange}
          />

          {error && (
            <p
              className={`text-[14px] p-[10px] ${
                errorType === "critical" ? "text-electricRed" : "text-warmWhite"
              }`}
            >
              {error}
            </p>
          )}
        </div>
      );
    } else if (inputType === "textarea") {
      return (
        <>
          <textarea
            placeholder={placeholder}
            required={required}
            value={value}
            disabled={disabled}
            onChange={onChange}
            className={`${className} ${backgroundClass} ${borderClass} ${widthClass} ${textClass} py-[16px] px-[30px] resize-none h-[150px] rounded-[40px] placeholder-amberOrange focus:ring-0 focus:border-transparent`}
          />
          {error && (
            <p
              className={`text-[14px] ${
                errorType === "critical" ? "text-amberOrange" : "text-warmWhite"
              }`}
            >
              {error}
            </p>
          )}
        </>
      );
    } else {
      return null;
    }
  };
  return <>{inputContent()}</>;
};

export default InputComponent;

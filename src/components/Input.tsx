import React from "react";

interface InputProps {
  label: string;
  placeholder: string;
  value: string | undefined;
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
  setFormValidity: (state: boolean) => void;
}

const Input = ({
  label,
  value,
  placeholder,
  handleChange,
  setFormValidity: setFieldValidity,
}: InputProps) => {
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [fieldValidity, setInputdValidity] = React.useState<boolean>(true);

  function showError(message: string): void {
    setErrorMessage(message);
    setInputdValidity(false);
  }

  function validateField(): void {
    const numberValue = Number(value);

    if (!value) {
      showError("This field is required");
    } else if (isNaN(numberValue)) {
      showError("Must be a number");
    } else {
      switch (label) {
        case "day":
          validateDayField(numberValue);
          break;
        case "month":
          validateMonthField(numberValue);
          break;
        case "year":
          validateYearField(numberValue);
          break;
      }
    }
  }

  function validateDayField(value: number): void {
    if (value > 31 || value < 0) {
      showError("Must be a valid day");
    } else {
      setErrorMessage("");
      setFieldValidity(true);
      setInputdValidity(true);
    }
  }

  function validateMonthField(value: number): void {
    if (value > 12 || value < 0) {
      showError("Must be a valid month");
    } else {
      setErrorMessage("");
      setFieldValidity(true);
      setInputdValidity(true);
    }
  }

  function validateYearField(value: number): void {
    const currentYear = new Date().getFullYear();

    if (value > currentYear || value < 0) {
      showError("Must be a valid year");
    } else {
      setErrorMessage("");
      setFieldValidity(true);
      setInputdValidity(true);
    }
  }

  return (
    <div className="input">
      <label className="input__label" htmlFor={label}>
        {label}
      </label>
      <input
        onChange={handleChange}
        onBlur={validateField}
        className={`input__area ${!fieldValidity && "input__area--invalid"}`}
        value={value}
        type="text"
        name={label}
        id={label}
        placeholder={placeholder}
        required
      />
      <span className="input__error-area">{errorMessage}</span>
    </div>
  );
};

export default Input;

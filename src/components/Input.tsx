import React from "react";

interface InputProps {
  label: string;
  placeholder: string;
  maxValue: number;
  value: string | undefined;
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

const Input = ({
  label,
  value,
  placeholder,
  maxValue,
  handleChange,
}: InputProps) => {
  return (
    <div className="input">
      <label className="input__label" htmlFor={label}>
        {label}
      </label>
      <input
        onChange={handleChange}
        className="input__area"
        value={value}
        type="number"
        name={label}
        id={label}
        max={maxValue}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;

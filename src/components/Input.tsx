import React from "react";

interface InputProps {
  label: string;
  placeholder: string;
  value: string | undefined;
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

const Input = ({ label, value, placeholder, handleChange }: InputProps) => {
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
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;

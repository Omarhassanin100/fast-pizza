import React from "react";

const Input = ({
  type,
  placeholder,
  onChange,
  value,
  name,
  required,
  id,
  checked
}: {
  type?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  name?: string;
  required?: boolean;
  id?: string;
  checked?: boolean;
}) => {
  return (
    <div className="">
      <input
        checked={checked}
        id={id}
        name={name}
        required={required}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input w-full"
      />
    </div>
  );
};
export default Input;

import React from "react";

interface InputType {
  type: "text" | "password" | "search" | "email"
  onChange?: (e: any) => void;
  placeholder: string;
}

export default function Input({ type, onChange, placeholder }: InputType) {
  return (
    <input
      type={type}
      className="focus:border-[#4FBFA3] border focus:outline-none w-full px-5 py-2.5"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

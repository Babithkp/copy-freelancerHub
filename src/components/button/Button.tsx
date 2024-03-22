import React from "react";

interface ButtonType {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({ children, onClick, disabled }: ButtonType) {
  return (
    <button
      className={`px-5 py-2 md:py-2.5 rounded-3xl font-semibold border border-[#4FBFA3] ${
        disabled
          ? "text-[#4FBFA3] cursor-not-allowed"
          : "bg-[#4FBFA3] text-white cursor-pointer"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

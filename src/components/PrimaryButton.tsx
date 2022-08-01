import React from "react";

interface IPrimaryButton {
  disabled?: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

const PrimaryButton: React.FC<IPrimaryButton> = ({
  disabled,
  children,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={` text-slate-50 px-6 py-2 text-xl font-primary rounded-md ${
        disabled
          ? "bg-gray-300 cursor-wait"
          : "bg-primary-500 hover:bg-primary-300 active:bg-primary-700"
      }`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;

import React from "react";

interface IPrimaryButton {
  children: React.ReactNode;
  onClick: () => void;
}

const PrimaryButton: React.FC<IPrimaryButton> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-primary-500 hover:bg-primary-300 active:bg-primary-700 text-slate-50 px-6 py-2 text-xl font-primary rounded-md"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;

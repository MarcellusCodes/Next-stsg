import React from "react";

interface TextProps {
  children: React.ReactNode;
  styles: string;
}

const Text: React.FC<TextProps> = ({ styles, children }) => {
  return (
    <p
      className={`font-secondary text-lg md:text-xl text-primary-500 opacity-80 ${styles}`}
    >
      {children}
    </p>
  );
};

export default Text;

import React from "react";
import { motion } from "framer-motion";
import { Easing } from "../constants/index";

interface HeadingProps {
  title: string;
  color: string;
}

const Heading: React.FC<HeadingProps> = ({ color, title }) => {
  return (
    <h3
      className={`font-primary ${color} text-2xl sm:text-3xl lg:text-4xl font-bold`}
    >
      {title}
    </h3>
  );
};

export default Heading;

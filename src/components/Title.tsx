import React from "react";
import { motion } from "framer-motion";
import { Easing } from "../constants/index";

interface TitleProps {
  title: string;
  color: string;
}

const Title: React.FC<TitleProps> = ({ color, title }) => {
  return (
    <motion.h1
      initial={{
        y: -50,
        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        opacity: 1,
      }}
      viewport={{ once: true, margin: "0px 0px -200px 0px" }}
      transition={{ duration: 1, ...Easing }}
      className={`font-primary ${color} text-4xl sm:text-5xl lg:text-6xl font-bold`}
    >
      {title}
    </motion.h1>
  );
};

export default Title;

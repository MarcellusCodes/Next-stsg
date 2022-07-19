import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import React from "react";
import Image from "next/image";

interface IInfo {
  info: {
    id: number;
    x: number;
    text: string;
    reverse: boolean;
    imgSrc: string;
  };
}

const Info: React.FC<IInfo> = ({ info }) => {
  const { scrollY } = useScroll();
  const opacityGreenlantern = useTransform(scrollY, [0, 100], [0, 1]);
  const transformXGreenlantern = useTransform(scrollY, [0, 100], [info.x, 0]);
  const opacity = useSpring(opacityGreenlantern, {
    stiffness: 400,
    damping: 90,
  });
  const x = useSpring(transformXGreenlantern, { stiffness: 400, damping: 90 });
  return (
    <>
      <motion.li
        style={{
          opacity,
          x,
        }}
        className={`flex ${
          info.reverse
            ? "sm:flex-row-reverse flex-col-reverse"
            : "sm:flex-row flex-col-reverse"
        }  items-center sm:space-x-4 space-y-8`}
      >
        <p
          className={`font-secondary text-lg md:text-xl text-slate-50 opacity-80 text-left ${
            info.reverse && "ml-4"
          }`}
        >
          {info.text}
        </p>
        <div className="relative w-[75px] h-[75px] md:w-[150px] md:h-[150px] rounded-full overflow-hidden bg-bottom">
          <Image
            src={`/images/${info.imgSrc}`}
            alt="Header Image Greenlantern"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </motion.li>
    </>
  );
};

export default Info;

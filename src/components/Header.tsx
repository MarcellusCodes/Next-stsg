import React, { useRef } from "react";
import Image from "next/image";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { Easing } from "../constants/index";
import { Title } from "./index";

interface IHeader {
  children?: React.ReactNode;
}

const Header: React.FC<IHeader> = ({ children }) => {
  const { scrollY } = useScroll();
  const opacityBatman = useTransform(scrollY, [0, 200], [1, 0]);
  const transformXBatman = useTransform(scrollY, [0, 200], [0, -200]);
  const transformYBatman = useTransform(scrollY, [0, 200], ["-50%", "-70%"]);
  const opacityNightWing = useTransform(scrollY, [0, 200], [1, 0]);
  const transformXNightWing = useTransform(scrollY, [0, 200], [0, 200]);
  const transformYNightWing = useTransform(scrollY, [0, 200], ["-50%", "-70%"]);
  const opacityLink = useTransform(scrollY, [0, 200], [0, 1]);
  const transformYLink = useTransform(scrollY, [0, 200], [-200, 0]);
  const transformPathLink = useTransform(
    scrollY,
    [0, 200],
    [
      "polygon(0 0, 100% 0, 100% 0, 0 0)",
      "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    ]
  );

  const opacityLinkSpring = useSpring(opacityLink, {
    stiffness: 400,
    damping: 90,
  });

  const transformYLinkSpring = useSpring(transformYLink, {
    stiffness: 400,
    damping: 90,
  });

  const transformPathLinkSpring = useSpring(transformPathLink, {
    stiffness: 400,
    damping: 90,
  });

  const headerImageTransition = {
    duration: 1,
    delay: 0.7,
  };
  return (
    <>
      <header className="bg-gradient-to-r from-primary-500 to-secondary-500 relative py-10 md:py-20 header overflow-hidden px-4">
        <motion.div
          initial={{ scale: 0, y: "-50%", x: -200 }}
          animate={{ scale: [0, 1.2, 1], x: [-200, 200, 0] }}
          transition={{ ...headerImageTransition, ...Easing }}
          className="absolute top-1/2 left-0 -translate-y-1/2 w-[159px!important] md:w-[319px!important] xl:w-[425px!important] 2xl:w-[638px!important] h-[200px!important] md:h-[400px!important] xl:h-[533px!important] 2xl:h-[800px!important]"
          style={{
            opacity: opacityBatman,
            x: transformXBatman,
            y: transformYBatman,
          }}
        >
          <Image
            src="/images/header-batman.png"
            alt="Header Image Batman"
            layout="fill"
            objectFit="contain"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: [0.25, 0.5, 0.7, 1, 1.2, 2, 0],
            x: [-50, 50, -50, 50, -50, 0],
            y: -200,
          }}
          transition={{ duration: 1, ...Easing }}
          className="w-[188px!important] h-[141px!important] absolute top-1/2 left-[5%]"
        >
          <Image
            src="/images/pow-illustration.png"
            alt="Header Image Batman"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>

        <motion.div
          initial={{ scale: 0, y: "-50%", x: 200 }}
          animate={{ scale: [0, 1.2, 1], x: [200, -200, 0] }}
          transition={{ ...headerImageTransition, ...Easing }}
          style={{
            opacity: opacityNightWing,
            x: transformXNightWing,
            y: transformYNightWing,
          }}
          className="absolute top-1/2 right-0 -translate-y-1/2 w-[118px!important] md:w-[236px!important] xl:w-[315px!important] 2xl:w-[473px!important] h-[214px!important] md:h-[428px!important] xl:h-[570px!important] 2xl:h-[856px!important]"
        >
          <Image
            src="/images/header-nightwing.png"
            alt="Header Image Batman"
            layout="fill"
            objectFit="contain"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: [0.25, 0.5, 0.7, 1, 1.2, 2, 0],
            x: [-25, 75, -50, 70, -25, 0],
            y: -175,
          }}
          transition={{ duration: 1, ...Easing }}
          className="w-[188px!important] h-[141px!important] absolute top-1/2 right-[5%]"
        >
          <Image
            src="/images/bang-illustration.png"
            alt="Header Image Batman"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
        <div className="container mx-auto flex flex-col items-center justify-between space-y-10 relative h-full">
          <Title color="text-slate-50" title="Superheroes Battle" />
          {children}
          <Link href="#battle" passHref>
            <motion.a
              style={{
                opacity: opacityLinkSpring,
                y: transformYLinkSpring,
                clipPath: transformPathLink,
              }}
              className="bg-slate-900 hover:bg-slate-700 active:bg-slate-800 text-slate-50 px-6 py-2 text-xl font-primary rounded-md"
            >
              Join Battle
            </motion.a>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;

import { motion } from "framer-motion";
import React from "react";
import { Easing } from "../constants/index";
import Image from "next/image";
import { Heading } from "./index";
import Link from "next/link";

interface BattleProps {
  battle: {
    _id: string;
    hero_one: string;
    hero_one_img: {
      asset: {
        url: string;
        __typename: string;
      };
      __typename: string;
    };
    hero_two: string;
    hero_two_img: {
      asset: {
        url: string;
        __typename: string;
      };
      __typename: string;
    };
    votes: {
      _id: string;
      hero: string;
    }[];
  };
  index: number;
}

const Battle: React.FC<BattleProps> = ({ battle, index }) => {
  return (
    <motion.article
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -200 : 200,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true, margin: "0px 0px -200px 0px" }}
      transition={{ duration: 1, ...Easing }}
      key={battle._id}
      className="max-w-[960px] w-full bg-gradient-to-r from-primary-500 to-secondary-500 relative pt-14 px-4 pb-4 sm:p-4 rounded-md shadow-lg mx-auto overflow-y-visible"
    >
      <motion.div className="absolute top-0 sm:top-1/2 left-[5%] md:left-[10%] -translate-y-1/2 w-[100px] h-[100px] sm:w-[150px!important] sm:h-[300px!important] rounded-md overflow-hidden">
        <Image
          src={battle.hero_one_img.asset.url}
          alt="Header Image Batman"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>
      <motion.div className="absolute top-0 sm:top-1/2 right-[5%] md:right-[10%] -translate-y-1/2 w-[100px] h-[100px] sm:w-[150px!important] sm:h-[300px!important] rounded-md overflow-hidden">
        <Image
          src={battle.hero_two_img.asset.url}
          alt="Header Image Batman"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>
      <div className="flex flex-col items-center space-y-3">
        <Heading
          title={`${battle.hero_one} vs ${battle.hero_two}`}
          color="text-slate-50"
        />
        <p className="text-xl md:text-2xl text-slate-50 opacity-85 font-secondary">
          Votes
        </p>
        <ul className="flex flex-row items-center space-x-4">
          <li className="text-md md:text-lg font-secondary text-slate-50 opacity-80">
            {battle.votes
              ? battle.votes.filter((vote) => vote.hero === battle.hero_one)
                  .length
              : 0}
          </li>
          <li className="text-xl md:text-2xl font-primary bg-clip-text font-extrabold text-transparent bg-gradient-to-b from-orange-500 to-yellow-500">
            VS
          </li>
          <li className="text-md md:text-lg font-secondary text-slate-50 opacity-80">
            {battle.votes
              ? battle.votes.filter((vote) => vote.hero === battle.hero_two)
                  .length
              : 0}
          </li>
        </ul>
        <div className="pt-1" />
        <Link href={`/battle/${battle._id}`} passHref>
          <motion.a className="bg-slate-900 hover:bg-slate-700 active:bg-slate-800 text-slate-50 px-6 py-2 text-xl font-primary rounded-md">
            Join Battle
          </motion.a>
        </Link>
      </div>
    </motion.article>
  );
};

export default Battle;

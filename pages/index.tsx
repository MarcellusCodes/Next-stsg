import { useScroll, useTransform, motion } from "framer-motion";
import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  Branding,
  Navbar,
  Header,
  Info,
  Title,
  PrimaryButton,
  Heading,
  Battle,
} from "../src/components/index";
import { gql } from "@apollo/client";
import { client } from "../src/lib/index";
import { HeaderContent, Easing } from "../src/constants/index";
import Link from "next/link";
import { getBattles } from "../src/queries/index";

interface BattleProps {
  battles: {
    allBattle: {
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
    }[];
    allVote: {
      _id: string;
      hero: string;
      battle: {
        _id: string;
      };
    }[];
  };
}

const Home: NextPage<BattleProps> = ({ battles }) => {
  console.log(battles);
  return (
    <>
      <Head>
        <title>Superhero Battle</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header>
        <ul>
          {HeaderContent.map((content) => (
            <Info key={content.id} info={content} />
          ))}
        </ul>
      </Header>
      <main className="relative py-10 md:py-20 overflow-hidden px-4">
        <section>
          <div className="container mx-auto">
            <Title color="text-primary-500 font-bold" title="Latest Battles" />
            <div className="md:py-16 py-8" />
            <div className="flex flex-col items-center space-y-32 w-full">
              {battles.allBattle.map((battle, index) => (
                <Battle
                  key={battle._id}
                  battle={battle}
                  votes={battles.allVote}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    variables: { limit: 10 },
    query: getBattles,
  });

  return {
    props: {
      battles: data,
    },
    revalidate: 60,
  };
};

import { useScroll, useTransform, motion } from "framer-motion";
import type { NextPage } from "next";
import { GetServerSideProps } from "next";
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
import { getProviders, getSession, signIn } from "next-auth/react";

interface LoginProps {
  providers: {
    id: string;
    name: string;
  }[];
}

const Login: NextPage<LoginProps> = ({ providers }) => {
  return (
    <>
      <Head>
        <title>Superhero Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <header className="header">
        {providers &&
          Object.values(providers).map((provider) => (
            <div key={provider.name} style={{ marginBottom: 0 }}>
              <button onClick={() => signIn(provider.id)}>
                Sign in with {provider.name}
              </button>
            </div>
          ))}
      </header>
    </>
  );
};

export default Login;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders();
  console.log(providers);
  const { req } = context;
  const Session = await getSession({ req: req });

  if (Session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      providers,
    },
  };
};
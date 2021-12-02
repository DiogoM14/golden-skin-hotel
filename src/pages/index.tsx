import Head from "next/head";
import type { NextPage } from "next";

import { Container } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Card } from "../components/Card";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Golden Skin Hotel</title>
        <meta name='description' content='Melhor hotel do mundo' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <Container maxW='1440px'>
        <Card />
      </Container>
    </>
  );
};

export default Home;

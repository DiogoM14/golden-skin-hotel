import Head from "next/head";
import type { NextPage } from "next";

import { Container } from "@chakra-ui/react";

import Header from "../../components/Room/Header";
import Images from "../../components/Room/Images";
import { Suggestions } from "../../components/Room/Suggestions";
import { Body } from "../../components/Room/Body/Index";

const Room: NextPage = () => {
  return (
    <>
      <Head>
        <title>Golden Skin Hotel</title>
        <meta name='description' content='Melhor hotel do mundo' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Container maxW='1000px' px={["6", "8", "12"]}>
        <Header />
        <Images />
        <Body />
        <Suggestions />
      </Container>
    </>
  );
};

export default Room;

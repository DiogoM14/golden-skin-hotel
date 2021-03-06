import { Center, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import NextLink from "next/link";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import { CardGrid } from "../components/Cards/CardGrid";
import SeeMoreBtn from "../components/SeeMoreBtn";
import { api } from "../services/apiClient";

export const FavRooms: NextPage = () => {
  const [rooms, setRooms] = useState([]);
  const { "nextauth.token": token } = parseCookies();

  useEffect(() => {
    api
      .get("/me/favRooms", {
        headers: {
          "x-access-token": token,
        },
      })
      .then((res) => {
        setRooms(res.data);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Golden Skin Hotel</title>
        <meta name='description' content='Melhor hotel do mundo' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container maxW='container.xl' px={["6", "8", "12"]} mt='2.3rem' w='100%'>
        <Heading
          fontFamily='ubuntu'
          fontSize='4xl'
          fontWeight='bold'
          mt='8'
          mb='12'>
          Meus quartos favoritos
        </Heading>
        {rooms.length >= 1 ? (
          <>
            <CardGrid haveHeader={false} roomsList={rooms} />
            <SeeMoreBtn />
          </>
        ) : (
          <Center mb='16'>
            <Flex direction='column'>
              <Heading fontSize='2xl' fontWeight='regular' mb='4'>
                Ainda não adicionaste quartos aos teus favoritos
              </Heading>
              <Center>
                <Flex>
                  <Text mr='1'>Começa por</Text>
                  <NextLink href='/rooms'>
                    <Text cursor='pointer' fontWeight='semibold'>
                      procurar um quarto aqui
                    </Text>
                  </NextLink>
                </Flex>
              </Center>
            </Flex>
          </Center>
        )}
      </Container>
    </>
  );
};

export default FavRooms;

import { Center, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import NextLink from "next/link";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import { BookingCard } from "../components/BookingCard";

import { api } from "../services/apiClient";

export const MyBookings: NextPage = () => {
  const [bookings, setBookings] = useState([] as any[]);

  useEffect(() => {
    const { "nextauth.token": token } = parseCookies();
    api
      .get("/me/bookings", {
        headers: {
          "x-access-token": token,
        },
      })
      .then((res) => {
        setBookings(res.data.bookings);
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
          Minhas reservas
        </Heading>
        {bookings.length >= 1 ? (
          <>
            <Flex direction='column'>
              {bookings.map((booking) => (
                <BookingCard key={booking._id} booking={booking} />
              ))}
            </Flex>
          </>
        ) : (
          <Center mb='16'>
            <Flex direction='column'>
              <Heading fontSize='2xl' fontWeight='regular' mb='4'>
                Ainda não fizeste reservas
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

export default MyBookings;

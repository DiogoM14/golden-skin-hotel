import { Container } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import { api } from "../services/apiClient";

export const MyBookings: NextPage = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const { "nextauth.token": token } = parseCookies();
    api
      .get("/me/bookings", {
        headers: {
          "x-access-token": token,
        },
      })
      .then((res) => {
        setBookings(res.data);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Golden Skin Hotel</title>
        <meta name='description' content='Melhor hotel do mundo' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container></Container>
    </>
  );
};

export default MyBookings;

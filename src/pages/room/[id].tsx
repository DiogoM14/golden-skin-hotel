import Head from "next/head";
import type { NextPage } from "next";

import { Container } from "@chakra-ui/react";

import Header from "../../components/Room/Header";
import Images from "../../components/Room/Images";
import { Suggestions } from "../../components/Room/Suggestions";
import { Body } from "../../components/Room/Body/Index";
import { api } from "../../services/apiClient";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { RoomProps } from "../../utils/TRoom";

const Room: NextPage = () => {
  const router = useRouter();
  const [room, setRoom] = useState<RoomProps>();
  const { id } = router.query;

  useEffect(() => {
    api.get(`/rooms/${id}`).then((response) => {
      setRoom(response.data);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Golden Skin Hotel</title>
        <meta name='description' content='Melhor hotel do mundo' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Container maxW='1000px' px={["6", "8", "12"]}>
        {room ? (
          <>
            <Header price={room.price_night} />
            <Images />
            <Body room={room} />
            <Suggestions />
          </>
        ) : (
          <></>
        )}
      </Container>
    </>
  );
};

export default Room;

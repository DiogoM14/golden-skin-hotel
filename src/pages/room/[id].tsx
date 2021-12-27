import Head from "next/head";
import type { GetServerSideProps, NextPage } from "next";
import { Container } from "@chakra-ui/react";
import Header from "../../components/Room/Header";
import Images from "../../components/Room/Images";
import { Suggestions } from "../../components/Room/Suggestions";
import { Body } from "../../components/Room/Body/Index";
import { api } from "../../services/apiClient";
import { RoomProps } from "../../utils/TRoom";

const Room: NextPage = ({ data }: any) => {
  const room = data;

  return (
    <>
      <Head>
        <title>Golden Skin Hotel</title>
        <meta name='description' content='Melhor hotel do mundo' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Container maxW='1000px' px={["6", "8", "12"]}>
        {room && (
          <>
            <Header price={room.price_night} />
            <Images />
            <Body room={room} />
            <Suggestions type={room.type} />
          </>
        )}
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id }: any = params;

  const res = await api.get(`/rooms/id/${id}`);

  const data: RoomProps = {
    _id: res.data._id,
    room_no: res.data.room_no,
    type: res.data.type,
    no_beds: res.data.no_beds,
    capacity: res.data.capacity,
    amenities: res.data.amenities,
    price_night: res.data.price_night,
    images: res.data.images,
    reserved: res.data.reserved,
    fav_rooms: res.data.fav_rooms,
  };

  return {
    props: {
      data,
    },
  };
};

export default Room;

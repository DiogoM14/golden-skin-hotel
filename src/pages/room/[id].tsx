import Head from "next/head";
import type { GetServerSideProps, NextPage } from "next";
import { Box, Container } from "@chakra-ui/react";
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

      <Container maxW='1000px' px={["0", "8", "12"]} pb={{base: "10", md: "0"}}>
        {room && (
          <>
            <Header
              price={room.price_night}
              room_id={room._id}
              type={room.type}
              room_no={room.room_no}
            />
            <Images images={room.images} />
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
    area: res.data.area,
    reserved: res.data.reserved,
  };

  return {
    props: {
      data,
    },
  };
};

export default Room;

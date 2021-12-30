import { Container, Text } from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { api } from "../../../services/apiClient";
import { RoomProps } from "../../../utils/TRoom";

export const EditRoom: NextPage = ({ data }: any) => {
  console.log(data);
  return (
    <>
      <Head>
        <title>Golden Skin Hotel</title>
        <meta name='description' content='Melhor hotel do mundo' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container>
        <Text fontFamily='Poppins' mt='20' fontSize='2xl'>
          Editar Quarto
        </Text>
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

export default EditRoom;

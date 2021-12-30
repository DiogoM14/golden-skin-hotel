import {
  Container,
  Table,
  TableCaption,
  Tbody,
  Th,
  Thead,
  Tr,
  Td,
  Button,
  Center,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { api } from "../../services/apiClient";
import { RoomProps } from "../../utils/TRoom";
import NextLink from "next/link";
import Head from "next/head";

export const Rooms: NextPage = () => {
  const [rooms, setRooms] = useState([] as RoomProps[]);

  useEffect(() => {
    api.get("/rooms").then((res) => {
      setRooms(res.data);
    });
  }),
    [];

  return (
    <>
      <Head>
        <title>Golden Skin Hotel</title>
        <meta name='description' content='Melhor hotel do mundo' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container maxW='container.xl'>
        <Table size='lg' variant='striped' colorScheme='black' mb='16'>
          <TableCaption placement='top'>Lista de Quartos</TableCaption>
          <Thead bgColor='#F2BB05'>
            <Tr>
              <Th>Número</Th>
              <Th>Tipo</Th>
              <Th>Camas</Th>
              <Th>Capacidade</Th>
              <Th>Preço por noite</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {rooms.map((room) => (
              <>
                <NextLink href={`/room/${room._id}`}>
                  <Tr
                    key={room._id}
                    cursor='pointer'
                    _hover={{ bgColor: "orange.100" }}>
                    <Td>{room.room_no}</Td>
                    <Td>{room.type}</Td>
                    <Td isNumeric>{room.no_beds}</Td>
                    <Td isNumeric>{room.capacity}</Td>
                    <Td isNumeric>{room.price_night}€</Td>
                    <Td>
                      <NextLink href={`/admin/edit-room/${room._id}`}>
                        <Center>
                          <Button>Editar</Button>
                        </Center>
                      </NextLink>
                    </Td>
                  </Tr>
                </NextLink>
              </>
            ))}
          </Tbody>
        </Table>
      </Container>
    </>
  );
};

export default Rooms;

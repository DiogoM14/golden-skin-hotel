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
  Link,
  Center,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from "../../services/apiClient";
import NextLink from "next/link";
import { BookingProps } from "../../utils/TBooking";
import { parseCookies } from "nookies";
import { format } from "date-fns";
import { GetServerSideProps } from "next";

const Bookings = ({ userId }: any) => {
  const [bookings, setBookings] = useState([] as BookingProps[]);
  const { "nextauth.token": token } = parseCookies();

  useEffect(() => {
    api
      .get(`/admin/users/${userId}/bookings`, {
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
    {bookings.length > 0 ? (
      <Container maxW='container.xl' bgColor="#fff" borderRadius="lg">
        <Table size='lg' variant='striped' colorScheme='black' mt='16' mb='32'>
          <TableCaption placement='top' mb="2">Lista de Reservas</TableCaption>
          <Thead bgColor='#F2BB05' borderRadius="lg">
            <Tr>
              <Th>Quarto</Th>
              <Th>Datas</Th>
              <Th>Nº de Hóspedes</Th>
              <Th>Extras</Th>
              <Th>Preço final</Th>
            </Tr>
          </Thead>
          <Tbody>
            {bookings.map((booking) => (
              <Tr key={booking._id} _hover={{ bgColor: "orange.100" }}>
                <Link as={NextLink} href={`/room/${booking.room._id}`}>
                  <Td
                    cursor='pointer'
                    _hover={{
                      textDecoration: "underline",
                      fontWeight: "bold",
                    }}>
                    {booking.room.room_no}
                  </Td>
                </Link>

                <Td>
                  <Text>
                  {format(new Date(booking.dates.from), "dd-MM-yyyy") +
                    " - "}
                  </Text>
                  <Text>
                  {format(new Date(booking.dates.to), "dd-MM-yyyy")}
                  </Text>
                </Td>
                <Td>{booking.no_guests}</Td>
                <Td>
                  {booking.extras.length > 0
                    ? booking.extras.join(", ")
                    : "Sem extras"}
                </Td>
                <Td>{booking.final_price}€</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Container>
    ) : (
      <Center h="calc(100vh - 142px)">
        <VStack>
          <NextLink href="/admin/users">
          <Button
              as='a'
              bg='#F2BB05'
              color='#fff'
              fontSize='lg'
              fontWeight='medium'
              borderRadius='8'
              mb='4'
              _hover={{ bg: "#E9A916" }}
              href='/admin/user'>
              Voltar
            </Button>
          </NextLink>
          <Heading fontFamily="Poppins" fontSize="xl">Este utilizador não tem reservas</Heading>
        </VStack>
      </Center>
    )}
      
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { userId } = query;

  return {
    props: {
      userId,
    },
  };
};

export default Bookings;
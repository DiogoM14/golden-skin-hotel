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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from "../../services/apiClient";
import NextLink from "next/link";
import { BookingProps } from "../../utils/TBooking";
import { parseCookies } from "nookies";
import { format } from "date-fns";

export const Bookings = () => {
  const [bookings, setBookings] = useState([] as BookingProps[]);
  const { "nextauth.token": token } = parseCookies();

  useEffect(() => {
    api
      .get("/admin/bookings", {
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
      <Container maxW='container.xl'>
        <Table size='lg' variant='striped' colorScheme='black' mt='16' mb='32'>
          <TableCaption placement='top'>Lista de Reservas</TableCaption>
          <Thead bgColor='#F2BB05'>
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
                  {format(new Date(booking.dates.from), "dd-MM-yyyy") +
                    " - " +
                    format(new Date(booking.dates.to), "dd-MM-yyyy")}
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
    </>
  );
};

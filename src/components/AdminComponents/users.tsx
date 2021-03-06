import {
  Container,
  Table,
  TableCaption,
  Tbody,
  Th,
  Thead,
  Tr,
  Td,
  Avatar,
  Button,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { api } from "../../services/apiClient";
import { UserProps } from "../../utils/TUser";
import { parseCookies } from "nookies";
import { useRouter } from 'next/router'

export const Users = () => {
  const [users, setUsers] = useState([] as UserProps[]);
  const router = useRouter()

  const { "nextauth.token": token } = parseCookies();

  useEffect(() => {
    api
      .get("/admin/users", {
        headers: {
          "x-access-token": token,
        },
      })
      .then((res) => {
        setUsers(res.data);
      });
  }, []);

  function handleGetBookings(userId: string) {
    router.push(`/admin/bookings?userId=${userId}`)
  }

  return (
    <Container maxW='container.xl' bgColor="#fff" borderRadius="lg">
      <Table size='lg' variant='striped' colorScheme='black' mt='16' mb='32'>
        <TableCaption placement='top'>Lista de Utilizadores</TableCaption>
        <Thead bgColor='#F2BB05'>
          <Tr>
            <Th>Avatar</Th>
            <Th>Nome</Th>
            <Th>Email</Th>
            <Th>Nrº telemóvel</Th>
            <Th>Permissão</Th>
            <Th>Reservas</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <>
              <Tr
                key={user._id}
                cursor='pointer'
                _hover={{ bgColor: "orange.100" }}>
                <Td>
                  <Avatar src={user.avatar}></Avatar>
                </Td>
                <Td>{user.first_name + " " + user.last_name}</Td>
                <Td>{user.email}</Td>
                <Td>{user.phone_number}</Td>
                <Td>{user.role}</Td>
                <Td>
                  <Button 
                    fontWeight="medium"
                    onClick={() => handleGetBookings(user._id)}
                  >
                    Ver
                  </Button>
                </Td>
              </Tr>
            </>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
};

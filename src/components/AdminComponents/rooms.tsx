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
  IconButton,
  Flex,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useToast,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { api } from "../../services/apiClient";
import { RoomProps } from "../../utils/TRoom";
import NextLink from "next/link";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { parseCookies } from "nookies";

export const Rooms = () => {
  const [rooms, setRooms] = useState([] as RoomProps[]);
  const [roomIDToDelete, setRoomIDToDelete] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const { "nextauth.token": token } = parseCookies();

  useEffect(() => {
    api.get("/rooms?noLimit=true").then((res) => {
      setRooms(res.data);
    });
  }, []);

  const handleDeleteModal = (roomId: string) => {
    onOpen();
    setRoomIDToDelete(roomId);
  };

  const handleRoomDelete = () => {
    api
      .delete(`/admin/rooms/${roomIDToDelete}`, {
        headers: {
          "x-access-token": token,
        },
      })
      .then((res) => {
        onClose();
        toast({
          title: "Sucesso",
          description: `Quarto eliminado com sucesso`,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setRooms(rooms.filter((room) => room._id !== roomIDToDelete));
      })
      .catch((err) => {
        toast({
          title: "Erro",
          description: "Erro ao eliminar quarto",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  return (
    <>
      <Container maxW='container.xl' bgColor="#fff" borderRadius="lg">
        <Table size='lg' variant='striped' colorScheme='black' mt='16' mb='32'>
          <TableCaption placement='top' mb="2">Lista de Quartos</TableCaption>
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
                      <Flex justify='space-around'>
                        <NextLink href={`/admin/edit-room/${room._id}`}>
                          <IconButton
                            _hover={{ color: "yellow.500" }}
                            aria-label='Editar'
                            icon={<AiFillEdit />}
                          />
                        </NextLink>
                        <IconButton
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteModal(room._id);
                          }}
                          _hover={{ color: "red.500" }}
                          aria-label='Editar'
                          icon={<AiFillDelete />}
                        />
                      </Flex>
                    </Td>
                  </Tr>
                </NextLink>
              </>
            ))}
          </Tbody>
        </Table>
      </Container>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Eliminar quarto</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Tem a certeza que pretende eliminar este quarto?
          </ModalBody>

          <ModalFooter>
            <Button
              color='#fff'
              bgColor='#F2BB05'
              _hover={{ bg: "#e0ae09" }}
              mr={3}
              onClick={onClose}>
              Fechar
            </Button>
            <Button
              onClick={handleRoomDelete}
              color='#fff'
              bgColor='red.500'
              _hover={{ bgColor: "red.600" }}>
              Eliminar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

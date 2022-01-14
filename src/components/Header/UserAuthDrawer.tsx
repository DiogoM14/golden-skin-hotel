import {
  Avatar,
  Box,
  Button,
  Divider,
  DrawerBody,
  DrawerFooter,
  Flex,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { BsBellFill } from "react-icons/bs";

import { signOut } from "../../contexts/AuthContext";
import { NotificationPopover } from "../NotificationPopover";

type Props = {
  email?: string;
  role: string;
  user_id: string;
  name?: string;
  avatar?: string;
};

export const UserAuthDrawer = ({ user, close }: any) => {
  let name = `${user.first_name} ${user.last_name}`;

  return (
    <>
      <DrawerBody>
        <HStack mt='12' justify="space-between">
          <Flex align="center">
            <Avatar name={name} src={user.avatar} bg='#F2BB05' size='md' />
            <Text fontWeight='medium' mx='2'>
              {name}
            </Text>
          </Flex>

          <NotificationPopover />
        </HStack>

        <Divider mt='6' mb='6' />

        <VStack alignItems={"end"} mt='6'>
          <NextLink href='/'>
            <Text
              fontSize={"2xl"}
              fontWeight={"bold"}
              mb='3'
              bgGradient='linear-gradient(45deg, rgba(247,222,37,1) 25%, rgba(242,187,5,1) 75%)'
              bgClip='text'
              onClick={close}
              _hover={{ textDecoration: "underline", cursor: "pointer" }}>
              Golden Skin
            </Text>
          </NextLink>

          <NextLink href='/about-us'>
            <Text
              onClick={close}
              _hover={{ textDecoration: "underline", cursor: "pointer" }}>
              Sobre nós
            </Text>
          </NextLink>
          <NextLink href='/rooms'>
            <Text
              onClick={close}
              _hover={{ textDecoration: "underline", cursor: "pointer" }}>
              Encontre um quarto
            </Text>
          </NextLink>
          <NextLink href='/contact-us'>
            <Text
              onClick={close}
              _hover={{ textDecoration: "underline", cursor: "pointer" }}>
              Contactos
            </Text>
          </NextLink>
        </VStack>

        {user.role.includes("ADMIN") && (
          <>
            <Divider mt='6' mb='6' />
            <VStack alignItems={"end"} mt='6'>
              <Text fontSize={"xl"} fontWeight={"bold"} mb='3'>
                Administrador
              </Text>
              <NextLink href='/admin/rooms'>
                <Text
                  onClick={close}
                  _hover={{ textDecoration: "underline", cursor: "pointer" }}>
                  Quartos
                </Text>
              </NextLink>
              <NextLink href='/admin/create-room'>
                <Text
                  onClick={close}
                  _hover={{ textDecoration: "underline", cursor: "pointer" }}>
                  Criar Quartos
                </Text>
              </NextLink>
              <NextLink href='/admin/users'>
                <Text
                  onClick={close}
                  _hover={{ textDecoration: "underline", cursor: "pointer" }}>
                  Utilizadores
                </Text>
              </NextLink>
            </VStack>
          </>
        )}

        <Divider mt='6' mb='6' />

        <VStack alignItems={"end"} mt='6'>
          <Text fontSize={"xl"} fontWeight={"bold"} mb='3'>
            Utilizador
          </Text>
          <NextLink href='/my-bookings'>
            <Text
              onClick={close}
              _hover={{ textDecoration: "underline", cursor: "pointer" }}>
              Minhas reservas
            </Text>
          </NextLink>

          <NextLink href='/fav-rooms'>
            <Text
              onClick={close}
              _hover={{ textDecoration: "underline", cursor: "pointer" }}>
              Meus quartos favoritos
            </Text>
          </NextLink>
        </VStack>
      </DrawerBody>

      <DrawerFooter>
        <HStack>
          <Button>
            <NextLink href='/edit-profile'>Editar perfil</NextLink>
          </Button>
          <Button
            bgColor='#F2BB05'
            color='#fff'
            _hover={{ bg: "#e0ae09" }}
            onClick={signOut}>
            Sair
          </Button>
        </HStack>
      </DrawerFooter>
    </>
  );
};

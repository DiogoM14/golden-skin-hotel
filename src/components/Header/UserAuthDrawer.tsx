import {
  Avatar,
  Button,
  Divider,
  DrawerBody,
  DrawerFooter,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";

import { signOut } from "../../contexts/AuthContext";

type Props = {
  email?: string;
  role: string;
  user_id: string;
  name?: string;
  avatar?: string;
};

export const UserAuthDrawer = ({ user }: any) => {
  let name = `${user.first_name} ${user.last_name}`;

  return (
    <>
      <DrawerBody>
        <HStack mt='12'>
          <Avatar name={name} src={user.avatar} bg='#F2BB05' size='md' />
          <Text fontWeight='medium' mx='2'>
            {name}
          </Text>
        </HStack>

        <Divider mt='6' mb='6' />

        <VStack alignItems={"end"} mt='6'>
          <Text
            fontSize={"2xl"}
            fontWeight={"bold"}
            mb='3'
            bgGradient='linear-gradient(45deg, rgba(247,222,37,1) 25%, rgba(242,187,5,1) 75%)'
            bgClip='text'>
            Golden Skin
          </Text>
          <Text _hover={{ textDecoration: "underline" }}>
            <NextLink href='/about-us'>Sobre nós</NextLink>
          </Text>
          <Text _hover={{ textDecoration: "underline" }}>
            <NextLink href='/rooms'>Encontre um quarto</NextLink>
          </Text>
          <Text _hover={{ textDecoration: "underline" }}>
            <NextLink href='/services'>Contactos</NextLink>
          </Text>
        </VStack>

        {user.role.includes("ADMIN") && (
          <>
            <Divider mt='6' mb='6' />
            <VStack alignItems={"end"} mt='6'>
              <Text fontSize={"xl"} fontWeight={"bold"} mb='3'>
                Administrador
              </Text>
              <Text _hover={{ textDecoration: "underline" }}>
                <NextLink href='/admin/rooms'>Quartos</NextLink>
              </Text>
              <Text _hover={{ textDecoration: "underline" }}>
                <NextLink href='/admin/create-room'>Criar Quartos</NextLink>
              </Text>
              <Text _hover={{ textDecoration: "underline" }}>
                <NextLink href='/admin/bookings'>Reservas</NextLink>
              </Text>
              <Text _hover={{ textDecoration: "underline" }}>
                <NextLink href='/admin/users'>Utilizadores</NextLink>
              </Text>
            </VStack>
          </>
        )}

        <Divider mt='6' mb='6' />

        <VStack alignItems={"end"} mt='6'>
          <Text fontSize={"xl"} fontWeight={"bold"} mb='3'>
            Utilizador
          </Text>
          <Text _hover={{ textDecoration: "underline" }}>
            <NextLink href='/my-bookings'>Minhas reservas</NextLink>
          </Text>

          <Text _hover={{ textDecoration: "underline" }}>
            <NextLink href='/fav-rooms'>Meus quartos favoritos</NextLink>
          </Text>
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

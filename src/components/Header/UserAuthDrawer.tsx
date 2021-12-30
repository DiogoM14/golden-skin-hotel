import {
  Avatar,
  Button,
  Divider,
  DrawerBody,
  DrawerFooter,
  GridItem,
  HStack,
  SimpleGrid,
  Text,
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
        <HStack>
          <Avatar
            name={name}
            src={user.avatar}
            bg='#F2BB05'
            size='md'
          />
          <Text fontWeight="medium" mx='2'>{name}</Text>
        </HStack>

        { user.role.includes("ADMIN") && (
            <>
              <Divider mt='10' />

              <SimpleGrid mt='10' columns={2} gap='4'>
                <Button>
                  <NextLink href='/admin/rooms'>Quartos</NextLink>
                </Button>

                <Button>
                  <NextLink href='/admin/bookings'>Reservas</NextLink>
                </Button>

                <GridItem colSpan={2} justifySelf='center'>
                  <Button>
                    <NextLink href='/admin/users'>Utilizadores</NextLink>
                  </Button>
                </GridItem>
              </SimpleGrid>

              <Divider mt='10' />
            </>
          )}

        <SimpleGrid mt='10' columns={2} gap='4'>
          <Button>
            <NextLink href='/about-us'>Sobre nós</NextLink>
          </Button>

          <Button>
            <NextLink href='/services'>Contactos</NextLink>
          </Button>

          <GridItem colSpan={2} justifySelf='center'>
            <Button>
              <NextLink href='/rooms'>Encontre um quarto</NextLink>
            </Button>
          </GridItem>
        </SimpleGrid>
      </DrawerBody>

      <DrawerFooter>
        <HStack>
          <Button>
            <NextLink href='/edit-profile'>Configurações</NextLink>
          </Button>
          <Button bgColor='#F2BB05' color='#fff' onClick={signOut}>
            Sair
          </Button>
        </HStack>
      </DrawerFooter>
    </>
  );
};

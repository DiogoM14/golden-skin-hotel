import {
  Avatar,
  Button,
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
  return (
    <>
      <DrawerBody>
        <HStack>
          <Avatar
            name={user.email}
            src='https://www.github.com/diogom14.png'
            bg='#F2BB05'
            size='md'
          />
          <Text mx='2'>{user.name}</Text>
        </HStack>

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
          <Button>Configurações</Button>
          <Button bgColor='#F2BB05' color='#fff' onClick={signOut}>
            Sair
          </Button>
        </HStack>
      </DrawerFooter>
    </>
  );
};

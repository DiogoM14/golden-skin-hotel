import { FiMenu } from "react-icons/fi";
import NextLink from "next/link";

import {
  Center,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Text,
  useBreakpointValue,
  useDisclosure,
  Wrap,
} from "@chakra-ui/react";

import AuthButtons from "./AuthButtons";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { UserAuth } from "./UserAuth";
import { UserAuthDrawer } from "./UserAuthDrawer";
import { useRouter } from "next/router";

export const Header = () => {
  const { isAuthenticated, user } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Container
      w='100%'
      maxW='100%'
      bgColor='#fff'
      h='80px'
      boxShadow='md'
      px='12'>
      <Flex align='center' h='100%' justify='space-between'>
        <NextLink href='/'>
          <Heading fontSize='md' as='a' cursor='pointer'>
            Golden Skin
          </Heading>
        </NextLink>

        {!isWideVersion ? (
          <>
            <IconButton
              bgColor='#FFFAF0'
              variant='outline'
              borderColor='#f2bb05'
              color='#1c1c1c'
              onClick={onOpen}
              aria-label='Menu'
              icon={<FiMenu />}
            />
            <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />

                {isAuthenticated ? (
                  <UserAuthDrawer user={user} close={onClose} />
                ) : (
                  <DrawerBody>
                    <Center>
                      <AuthButtons />
                    </Center>
                  </DrawerBody>
                )}
              </DrawerContent>
            </Drawer>
          </>
        ) : (
          <>
            <Wrap spacing='4'>
              <Text
                cursor='pointer'
                _hover={{
                  borderBottom: "2px solid #f2bb05",
                }}
                borderBottomWidth={router.route == "/about-us" ? 2 : 0}
                borderBottomColor={
                  router.route == "/about-us" ? "#F2BB05" : ""
                }>
                <NextLink href='/about-us'>Sobre nós</NextLink>
              </Text>
              <Text
                cursor='pointer'
                _hover={{
                  borderBottom: "2px solid #f2bb05",
                }}
                borderBottomWidth={router.route == "/[rooms]" ? 2 : 0}
                borderBottomColor={router.route == "/[rooms]" ? "#F2BB05" : ""}>
                <NextLink href='/rooms'>Encontre um quarto</NextLink>
              </Text>
              <Text
                cursor='pointer'
                _hover={{
                  borderBottom: "2px solid #f2bb05",
                }}
                borderBottomWidth={router.route == "/contact-us" ? 2 : 0}
                borderBottomColor={
                  router.route == "/contact-us" ? "#F2BB05" : ""
                }>
                <NextLink href='/contact-us'>Contactos</NextLink>
              </Text>
            </Wrap>

            {isAuthenticated ? <UserAuth /> : <AuthButtons />}
          </>
        )}
      </Flex>
    </Container>
  );
};

import { FiMenu } from 'react-icons/fi'
import Link from 'next/link'

import { Button, Container, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Heading, IconButton, Input, Text, useBreakpointValue, useDisclosure, Wrap } from "@chakra-ui/react";

import { AuthButtons } from "./AuthButtons";
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { UserAuth } from './UserAuth';


export const Header = () => {
  const { isAuthenticated } = useContext(AuthContext)

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true
  })

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Container
      w='100%'
      maxW='100%'
      bgColor='#fff'
      h='80px'
      boxShadow='md'
      px='12'
    >
      <Flex align='center' h='100%' justify='space-between'>
        <Link href="/">
          <Heading 
            fontSize='md'
            as="a"
            cursor="pointer"
          >
            Golden Skin
          </Heading>
        </ Link>

        {
          !isWideVersion ? (
            <>
              <IconButton bgColor="#FFFAF0" variant="outline" borderColor="#f2bb05" color="#1c1c1c" onClick={onOpen} aria-label="Menu" icon={<FiMenu />} />
              <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>Create your account</DrawerHeader>

                  <DrawerBody>
                    <Input placeholder='Type here...' />
                  </DrawerBody>

                  <DrawerFooter>
                    <Button variant='outline' mr={3} onClick={onClose}>
                      Cancel
                    </Button>
                    <Button colorScheme='blue'>Save</Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </>
          ) : (
            <>
            <Wrap spacing='4'>
              <Link href="/about-us">
                <Text as="a" cursor="pointer">Sobre nós</Text>
              </Link>
              <Link href="/rooms">
                <Text as="a" cursor="pointer">Encontre um quarto</Text>
              </Link>
              <Link href="/services">
                <Text as="a" cursor="pointer">Contactos</Text>
              </Link>
            </Wrap>

            { isAuthenticated ? <UserAuth /> : <AuthButtons />}
          </>
          )
        }

      </Flex>
    </Container>
  );
};

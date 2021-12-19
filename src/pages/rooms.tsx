import {
  Container,
  HStack,
  Menu,
  MenuButton,
  Text,
  Button,
  MenuList,
  MenuItem,
  Flex,
  useDisclosure,
  MenuOptionGroup,
  MenuItemOption,
} from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FiChevronDown, FiFilter } from "react-icons/fi";
import { CardGrid } from "../components/Cards/CardGrid";
import { SeeMoreBtn } from "../components/SeeMoreBtn";

const Rooms = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [filter, setFilter] = useState({});

  if (router.query != filter) {
    setFilter(router.query);
  }

  return (
    <>
      <Head>
        <title>Golden Skin Hotel</title>
        <meta name='description' content='Melhor hotel do mundo' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Container maxW='1440px' px={["6", "8", "12"]} mt='2.3rem' w='100%'>
        <Flex justify='space-between' mb='2.3rem' maxW='container.lg' mx='auto'>
          <HStack spacing='1.5rem' color='#717171' fontFamily='Poppins'>
            <Text cursor='pointer' color='#1c1c1c' fontWeight='medium'>
              Todos
            </Text>
            <Text cursor='pointer'>Suites</Text>
            <Text cursor='pointer'>Quartos familiar</Text>
            <Text cursor='pointer'>Quarto single</Text>
            <Menu isOpen={isOpen} onClose={onClose}>
              <MenuButton as={Text} cursor='pointer' onMouseOver={onOpen}>
                <Flex align='center'>
                  Mais
                  <FiChevronDown />
                </Flex>
              </MenuButton>
              <MenuList zIndex='10'>
                <MenuItem>Tipo 1</MenuItem>
                <MenuItem>Tipo 2</MenuItem>
                <MenuItem>Tipo 3</MenuItem>
                <MenuItem>Tipo 4</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
          <HStack spacing='1.5rem'>
            <Menu closeOnSelect={false}>
              <MenuButton
                as={Button}
                bgColor='#EFEFEF'
                fontWeight='regular'
                rightIcon={<FiChevronDown />}>
                Ordenar por
              </MenuButton>
              <MenuList minWidth='240px' zIndex='10'>
                <MenuOptionGroup defaultValue='asc' type='radio'>
                  <MenuItemOption value='asc'>Preço ascendente</MenuItemOption>
                  <MenuItemOption value='desc'>
                    Preço descendente
                  </MenuItemOption>
                </MenuOptionGroup>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                bgColor='#EFEFEF'
                fontWeight='regular'
                rightIcon={<FiFilter />}>
                Filtrar por
              </MenuButton>
              <MenuList zIndex='10'>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </Flex>
        <CardGrid filter={filter} haveHeader={false} />
        <SeeMoreBtn />
      </Container>
    </>
  );
};

export default Rooms;

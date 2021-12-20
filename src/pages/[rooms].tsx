import {
  Container,
  HStack,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Flex,
  MenuOptionGroup,
  MenuItemOption,
  useRadioGroup,
  Box,
} from "@chakra-ui/react";
import { FiChevronDown, FiFilter } from "react-icons/fi";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { CardGrid } from "../components/Cards/CardGrid";
import { SeeMoreBtn } from "../components/SeeMoreBtn";
import { RadioCard } from "../components/RadioCard";
import { useRouter } from "next/router";

const Rooms = ({ query }: any) => {
  const router = useRouter();
  const options = ["Todos", "Single", "Double", "King", "Deluxe"];

  const handleType = (e: any) => {
    if (e == "Todos") {
      delete query.type;
      router.push({ pathname: "/rooms", query: query });
    } else {
      e = e.toLowerCase();
      router.push({ pathname: "/rooms", query: { ...query, type: e } });
    }
  };

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "type",
    defaultValue: "Todos",
    onChange: handleType,
  });

  const group = getRootProps();

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
            <HStack {...group}>
              {options.map((value) => {
                const radio = getRadioProps({ value });
                return (
                  <RadioCard key={value} {...radio}>
                    {value}
                  </RadioCard>
                );
              })}
            </HStack>
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
        <CardGrid filter={query} haveHeader={false} />
        <SeeMoreBtn />
      </Container>
    </>
  );
};

// implement ssr with nextjs
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  delete query.rooms;

  return {
    props: {
      query,
    },
  };
};

export default Rooms;

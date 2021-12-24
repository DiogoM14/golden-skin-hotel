import Head from "next/head";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import {
  Container,
  HStack,
  Menu,
  MenuButton,
  Button,
  MenuList,
  Flex,
  MenuOptionGroup,
  MenuItemOption,
  useRadioGroup,
  IconButton,
} from "@chakra-ui/react";
import { BiSortAlt2 } from "react-icons/bi";
import { BsSortUp, BsSortDown } from "react-icons/bs";
import { RiFilterOffLine } from "react-icons/ri";
import { CardGrid } from "../components/Cards/CardGrid";
import { SeeMoreBtn } from "../components/SeeMoreBtn";
import { RadioCard } from "../components/RadioCard";
import { FilterRoomsBtn } from "../components/FilterRoom";

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

  const handleOrder = (e: any) => {
    router.push({
      pathname: "/rooms",
      query: { ...query, orderBy: "price_night", direction: e },
    });
  };

  const clearFilters = () => {
    // map through all query params and delete them
    Object.keys(query).map((key) => {
      delete query[key];
    });

    router.push({ pathname: "/rooms", query: {} });
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
                rightIcon={<BiSortAlt2 />}>
                Ordenar
              </MenuButton>
              <MenuList minWidth='240px' zIndex='10'>
                <MenuOptionGroup type='radio' onChange={handleOrder}>
                  <MenuItemOption icon={<BsSortUp />} value='priceAsc'>
                    Preço ascendente
                  </MenuItemOption>
                  <MenuItemOption icon={<BsSortDown />} value='priceDesc'>
                    Preço descendente
                  </MenuItemOption>
                  <MenuItemOption icon={<BsSortUp />} value='areaAsc'>
                    Área ascendente
                  </MenuItemOption>
                  <MenuItemOption icon={<BsSortDown />} value='areaDesc'>
                    Área descendente
                  </MenuItemOption>
                </MenuOptionGroup>
              </MenuList>
            </Menu>
            <FilterRoomsBtn filter={query} />

            <IconButton
              bgColor='#EFEFEF'
              aria-label='Clear filters'
              icon={<RiFilterOffLine />}
              onClick={clearFilters}
            />
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

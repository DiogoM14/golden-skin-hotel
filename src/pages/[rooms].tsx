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
  MenuDivider,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { BiSortAlt2 } from "react-icons/bi";
import { BsSortUp, BsSortDown } from "react-icons/bs";
import { RiFilterOffLine } from "react-icons/ri";
import { CardGrid } from "../components/Cards/CardGrid";
import { RadioCard } from "../components/RadioCard";
import { FilterRoomsBtn } from "../components/FilterRoom";
import { Pagination } from "../components/Pagination";
import { useEffect, useState } from "react";

const Rooms = ({ query }: any) => {
  const router = useRouter();
  const options = ["Todos", "Single", "Double", "King", "Deluxe"];
  const [page, setPage] = useState<number>();
  const [totalCount, setTotalCount] = useState(6);

  const isWideVersion = useBreakpointValue({
    base: true,
    lg: false,
  });

  const handleType = (e: any) => {
    delete query.page;
    if (e == "Todos") {
      delete query.type;
      setPage(1);
      router.push({ pathname: "/rooms", query: query });
    } else {
      delete query.type;
      setPage(1);
      e = e.toLowerCase();
      router.push({ pathname: "/rooms", query: { ...query, type: e } });
    }
  };

  const handlePriceOrder = (e: any) => {
    router.push({
      pathname: "/rooms",
      query: { ...query, orderByPrice: e },
    });
  };

  const handleAreaOrder = (e: any) => {
    router.push({
      pathname: "/rooms",
      query: { ...query, orderByArea: e },
    });
  };

  const clearFilters = () => {
    // map through all query params and delete them
    Object.keys(query).map((key) => {
      delete query[key];
    });

    setPage(1);

    router.push({ pathname: "/rooms", query: {} });
  };

  const handlePage = () => {
    router.push({
      pathname: "/rooms",
      query: { ...query, page: page },
    });
  };

  useEffect(() => {
    if (page) {
      handlePage();
    }
  }, [page]);

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
        <Flex
          justify={"space-between"}
          mb='2.3rem'
          maxW='container.lg'
          mx='auto'>
          {isWideVersion ? (
            <VStack w='100%'>
              <HStack
                w='100%'
                justify='space-between'
                spacing='1.5rem'
                color='#1c1c1c'>
                <Menu closeOnSelect={false}>
                  <MenuButton
                    w='50%'
                    as={Button}
                    bgColor='#F2BB05'
                    _active={{ bg: "#e0ae09" }}
                    _hover={{
                      bgColor: "#e0ae09",
                    }}
                    color='#fff'
                    fontWeight='regular'>
                    Quartos
                  </MenuButton>
                  <MenuList minWidth='240px' zIndex='10'>
                    <MenuOptionGroup>
                      {options.map((value) => {
                        const radio = getRadioProps({ value });
                        return (
                          <RadioCard key={value} {...radio}>
                            {value}
                          </RadioCard>
                        );
                      })}
                    </MenuOptionGroup>
                  </MenuList>
                </Menu>

                <Menu closeOnSelect={false}>
                  <MenuButton
                    w='50%'
                    as={Button}
                    bgColor='#EFEFEF'
                    fontWeight='regular'
                    rightIcon={<BiSortAlt2 />}>
                    Ordenar
                  </MenuButton>
                  <MenuList minWidth='240px' zIndex='10'>
                    <MenuOptionGroup
                      type='radio'
                      title='Preço'
                      onChange={handlePriceOrder}>
                      <MenuItemOption icon={<BsSortUp />} value='asc'>
                        Preço ascendente
                      </MenuItemOption>
                      <MenuItemOption icon={<BsSortDown />} value='desc'>
                        Preço descendente
                      </MenuItemOption>
                    </MenuOptionGroup>
                    <MenuDivider />
                    <MenuOptionGroup
                      type='radio'
                      title='Área'
                      onChange={handleAreaOrder}>
                      <MenuItemOption icon={<BsSortUp />} value='asc'>
                        Área ascendente
                      </MenuItemOption>
                      <MenuItemOption icon={<BsSortDown />} value='desc'>
                        Área descendente
                      </MenuItemOption>
                    </MenuOptionGroup>
                  </MenuList>
                </Menu>
              </HStack>

              <HStack spacing='1.5rem' w='100%' justify='flex-end'>
                <HStack w='48%'>
                  <FilterRoomsBtn filter={query} />
                  <IconButton
                    bgColor='#EFEFEF'
                    aria-label='Clear filters'
                    icon={<RiFilterOffLine />}
                    onClick={clearFilters}
                  />
                </HStack>
              </HStack>
            </VStack>
          ) : (
            <>
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
                    <MenuOptionGroup
                      type='radio'
                      title='Preço'
                      onChange={handlePriceOrder}>
                      <MenuItemOption icon={<BsSortUp />} value='asc'>
                        Preço ascendente
                      </MenuItemOption>
                      <MenuItemOption icon={<BsSortDown />} value='desc'>
                        Preço descendente
                      </MenuItemOption>
                    </MenuOptionGroup>
                    <MenuDivider />
                    <MenuOptionGroup
                      type='radio'
                      title='Área'
                      onChange={handleAreaOrder}>
                      <MenuItemOption icon={<BsSortUp />} value='asc'>
                        Área ascendente
                      </MenuItemOption>
                      <MenuItemOption icon={<BsSortDown />} value='desc'>
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
            </>
          )}
        </Flex>
        <CardGrid
          filter={query}
          haveHeader={false}
          handlePage={(value: any) => {
            setTotalCount(value);
          }}
        />

        <Pagination
          totalCountOfRegisters={totalCount}
          currentPage={page}
          handleChangePage={setPage}
        />
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

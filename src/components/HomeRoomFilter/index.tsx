import {
  Flex,
  Button,
  Divider,
  VStack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Center,
  Icon,
  Text,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";
import DatePicker, { registerLocale } from "react-datepicker";
import { FiCalendar, FiUsers } from "react-icons/fi";
import { FilterContent } from "./FilterContent";
import format from "date-fns/format";
import pt from "date-fns/locale/pt";
registerLocale("pt", pt);
import "react-datepicker/dist/react-datepicker.css";

export const HomeRoomFilter = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [people, setPeople] = useState(1);

  const onChange = (dates: [any, any]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
    return true;
  };

  const handlePeople = (e: any) => {
    setPeople(e);
  };

  const handleSearch = () => {
    endDate &&
      router.push({
        pathname: "/rooms",
        query: {
          checkIn: format(startDate, "yyyy-MM-dd"),
          checkOut: format(endDate, "yyyy-MM-dd"),
          capacityGT: people,
        },
      });
  };

  return (
    <VStack>
      <Flex
        w={{ base: "700px", lg: "900px" }}
        h='120px'
        bgColor='#fff'
        borderRadius='lg'
        boxShadow='lg'
        alignItems='center'
        justifyContent='center'
        py='5'
        px='4'
        zIndex='2'
        position='relative'>
        <Button
          onClick={handleOpen}
          bgColor='transparent'
          _hover={{ bgColor: "transparent" }}>
          <FilterContent
            icon={FiCalendar}
            name='Check-in'
            description={format(startDate, "dd-MMM-yyyy", {
              locale: pt,
            })}
          />
        </Button>

        <Divider orientation='vertical' mx={{ base: 5, lg: 14 }} />

        <Button
          onClick={handleOpen}
          bgColor='transparent'
          _hover={{ bgColor: "transparent" }}>
          <FilterContent
            icon={FiCalendar}
            name='Check-out'
            description={
              endDate
                ? format(endDate, "dd-MMM-yyyy", {
                    locale: pt,
                  })
                : "Sem data"
            }
          />
        </Button>

        <Divider orientation='vertical' mx={{ base: 5, lg: 14 }} />

        <Center>
          <Flex>
            <Center>
              <Icon as={FiUsers} mr='4' color='#717171' />
              <Flex flexDir='column' textAlign='center'>
                <Text fontWeight='medium'>Pessoas</Text>
                <NumberInput
                  size='xs'
                  maxW={16}
                  defaultValue={1}
                  min={1}
                  allowMouseWheel
                  onChange={handlePeople}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Flex>
            </Center>
          </Flex>
        </Center>

        <Divider orientation='vertical' mx={{ base: 5, lg: 14 }} />

        <Button
          bgColor='#F2BB05'
          color='#fff'
          _hover={{ bg: "#e0ae09" }}
          disabled={endDate == null}
          onClick={handleSearch}>
          Procurar
        </Button>

        {isOpen && (
          <Box
            position='absolute'
            top='100px'
            zIndex='1000'
            boxShadow='dark-lg'>
            <DatePicker
              closeOnScroll={handleOpen}
              selected={startDate}
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              minDate={new Date()}
              selectsRange
              inline
              locale={pt}
            />
          </Box>
        )}
      </Flex>
    </VStack>
  );
};

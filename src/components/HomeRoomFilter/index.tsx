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
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";
import { FiUsers } from "react-icons/fi";
import { HomeResDates } from "./HomeResDates";
import { format } from "date-fns";

export const HomeRoomFilter = () => {
  const router = useRouter();
  const toast = useToast();
  const [startDate, setStartDate] = useState(new Date() as any);
  const [endDate, setEndDate] = useState(null);
  const [people, setPeople] = useState(1);

  const handlePeople = (e: any) => {
    setPeople(e);
  };

  const handleSearch = () => {
    if (endDate) {
      if (startDate > endDate) {
        toast({
          title: "Check-in date must be before check-out date",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } else {
        router.push({
          pathname: "/rooms",
          query: {
            checkIn: format(new Date(startDate), "yyyy-MM-dd"),
            checkOut: endDate,
            capacityGT: people,
          },
        });
      }
    }
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
        <HomeResDates
          checkIn={startDate}
          checkOut={endDate}
          handleDateChanges={(date: any) => {
            if (date.isCheckIn) {
              setStartDate(date.date);
            }
            if (!date.isCheckIn) {
              setEndDate(date.date);
            }
          }}
        />

        <Divider orientation='vertical' mx={{ base: 8, lg: 14 }} />

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

        <Divider orientation='vertical' mx={{ base: 8, lg: 14 }} />

        <Button
          bgColor='#F2BB05'
          color='#fff'
          _hover={{ bg: "#e0ae09" }}
          disabled={endDate == null}
          onClick={handleSearch}>
          Procurar
        </Button>
      </Flex>
    </VStack>
  );
};

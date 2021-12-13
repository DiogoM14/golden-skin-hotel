import {
  Flex,
  Button,
  Divider,
  useDisclosure,
  Collapse,
  VStack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Center,
  Icon,
  Text,
} from "@chakra-ui/react";
import { FilterContent } from "./FilterContent";
import { FiCalendar, FiUsers } from "react-icons/fi";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

export const HomeRoomFilter = () => {
  const { onToggle, isOpen } = useDisclosure();
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

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
        zIndex='2'>
        <Button
          onClick={onToggle}
          bgColor='transparent'
          _hover={{ bgColor: "transparent" }}>
          <FilterContent
            icon={FiCalendar}
            name='Check-in'
            description='ago-22'
          />
        </Button>

        <Divider orientation='vertical' mx={{ base: 5, lg: 14 }} />

        <Button
          onClick={onToggle}
          bgColor='transparent'
          _hover={{ bgColor: "transparent" }}>
          <FilterContent
            icon={FiCalendar}
            name='Check-out'
            description='ago-22'
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
                  allowMouseWheel>
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

        <Button bgColor='#F2BB05' color='#fff'>
          Procurar
        </Button>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <DateRange
          editableDateInputs={true}
          onChange={(item) => {
            setDate([item.selection]);
          }}
          moveRangeOnFirstSelection={false}
          ranges={date}
        />
      </Collapse>
    </VStack>
  );
};

import {
  SimpleGrid,
  Flex,
  Box,
  Divider,
  Center,
  Button,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import DatePicker, { registerLocale } from "react-datepicker";
import { eachDayOfInterval, format, parseISO } from "date-fns";
import pt from "date-fns/locale/pt";
registerLocale("pt", pt);
import "react-datepicker/dist/react-datepicker.css";
import { Amenities } from "./Amenities";
import { Description } from "./Description";
import { Header } from "./Header";
import { RoomProps } from "../../../utils/TRoom";
import { ReservationModal } from "../../RevervationModal";

interface Room {
  room: RoomProps;
}

export const Body = ({ room }: Room) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [excludedDates, setExcludedDates] = useState([] as Date[]);
  const toast = useToast();

  useEffect(() => {
    if (room.reserved) {
      let dates: any[] = [];

      room.reserved.forEach((res: any) => {
        const start = parseISO(res.from);
        const end = parseISO(res.to);
        dates = [...dates, ...eachDayOfInterval({ start, end })];
      });

      setExcludedDates(dates);
    }
  }, []);

  const onChange = (dates: any) => {
    const [start, end] = dates;

    setStartDate(start);
    setEndDate(end);
  };

  function handleSubmitDates() {
    if (startDate && endDate) {
      // check if selected dates include some days in excluded dates
      if (
        excludedDates.some((date: Date) => {
          return (
            date.getDay() >= startDate.getDay() &&
            date.getDay() <= new Date(endDate).getDay()
          );
        })
      ) {
        onOpen();
      } else {
        toast({
          title: "Por favor, selecione outras datas",
          description: "As datas selecionadas não estão disponíveis",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    }
  }

  return (
    <>
      <SimpleGrid columns={2} my='4' gap='12'>
        <Flex flexDir='column'>
          <Header />

          <Divider my='4' borderColor='#bbbbbb' />

          <Amenities amenities={room.amenities} />

          <Divider my='4' borderColor='#bbbbbb' />

          <Description />

          <Divider my='4' borderColor='#bbbbbb' />
        </Flex>

        <Box borderRadius='lg' maxH='400px'>
          <Center mt='4'>
            <DatePicker
              selected={startDate}
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              minDate={new Date()}
              selectsRange
              excludeDates={excludedDates}
              inline
            />
          </Center>

          <Center mt='2.3rem' mb='12'>
            <Button
              color='#fff'
              bgColor='#F2BB05'
              _hover={{ bg: "#e0ae09" }}
              onClick={handleSubmitDates}>
              Configurar reserva
            </Button>
          </Center>
        </Box>
      </SimpleGrid>

      <ReservationModal
        isOpen={isOpen}
        onClose={onClose}
        startDate={format(startDate, "yyyy-MM-dd")}
        endDate={endDate && format(endDate, "yyyy-MM-dd")}
        room={room}
      />
    </>
  );
};

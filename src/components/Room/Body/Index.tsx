import { SimpleGrid, Flex, Box, Divider } from "@chakra-ui/react";
import { Amenities } from "./Amenities";
import { Description } from "./Description";
import { Header } from "./Header";
import { RoomProps } from "../../../utils/TRoom";

import DatePicker, { registerLocale } from "react-datepicker";
import format from "date-fns/format";
import pt from "date-fns/locale/pt";
registerLocale("pt", pt);
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/router";
import { useState } from "react";
import { SeeMoreBtn } from "../../SeeMoreBtn";

interface Room {
  room: RoomProps;
}

export const Body = ({ room }: Room) => {
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
    <SimpleGrid columns={2} my='4' gap='12'>
      <Flex flexDir='column'>
        <Header />

        <Divider my='4' borderColor='#bbbbbb' />

        <Amenities amenities={room.amenities} />

        <Divider my='4' borderColor='#bbbbbb' />

        <Description />

        <Divider my='4' borderColor='#bbbbbb' />
      </Flex>

      <Box bgColor='#fff' borderRadius='lg' maxH='400px' shadow='md'>
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

        <SeeMoreBtn />
      </Box>
    </SimpleGrid>
  );
};

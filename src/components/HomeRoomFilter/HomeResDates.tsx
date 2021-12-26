import DatePicker, { registerLocale } from "react-datepicker";
import pt from "date-fns/locale/pt";
registerLocale("pt", pt);
import "react-datepicker/dist/react-datepicker.css";
import { forwardRef, useEffect, useState } from "react";
import { Flex, Icon, Text, Divider } from "@chakra-ui/react";
import { format } from "date-fns";
import { FiCalendar } from "react-icons/fi";

export const HomeResDates = (props: any) => {
  const [startDate, setStartDate] = useState(null as any);
  const [endDate, setEndDate] = useState(null as any);

  useEffect(() => {
    if (props.checkIn) {
      let { checkIn } = props;
      setStartDate(new Date(checkIn));
    }
    if (props.checkOut) {
      let { checkOut } = props;
      setEndDate(new Date(checkOut));
    }
  }, [props.checkIn, props.checkOut]);

  const DateButton = forwardRef(({ value, onClick, title }: any, ref: any) => (
    <Flex
      width='max-content'
      alignItems='center'
      fontWeight='regular'
      _hover={{ bgColor: "transparent", cursor: "pointer" }}
      onClick={onClick}
      ref={ref}>
      <Icon as={FiCalendar} mr='4' color='#717171' />
      <Flex flexDir='column' textAlign='center'>
        <Text fontWeight='medium'>{title}</Text>
        <Text color='#717171'>{value ? value : "--/---/----"}</Text>
      </Flex>
    </Flex>
  ));

  return (
    <>
      <Flex height='100%' alignItems='center'>
        <DatePicker
          onChange={(date: Date) =>
            props.handleDateChanges({
              date: format(date, "yyyy-MM-dd"),
              isCheckIn: true,
            })
          }
          selectsStart
          selected={startDate}
          minDate={new Date()}
          startDate={startDate}
          endDate={endDate}
          dateFormat={"dd/MMM/yyyy"}
          title='Check In'
          customInput={<DateButton />}
          locale={pt}
        />
        <Divider orientation='vertical' mx={{ base: 8, lg: 14 }} />
        <DatePicker
          onChange={(date: Date) =>
            props.handleDateChanges({
              date: format(date, "yyyy-MM-dd"),
              isCheckIn: false,
            })
          }
          selectsEnd
          selected={endDate}
          endDate={endDate}
          minDate={startDate}
          startDate={startDate}
          dateFormat={"dd/MMM/yyyy"}
          title='Check Out'
          customInput={<DateButton />}
          locale={pt}
        />
      </Flex>
    </>
  );
};

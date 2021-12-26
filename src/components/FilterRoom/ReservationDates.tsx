import DatePicker, { registerLocale } from "react-datepicker";
import pt from "date-fns/locale/pt";
registerLocale("pt", pt);
import "react-datepicker/dist/react-datepicker.css";
import { forwardRef, useEffect, useState } from "react";
import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import { format } from "date-fns";

export const ReservationDates = (props: any) => {
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

  const ExampleCustomInput = forwardRef(({ value, onClick }: any, ref: any) => (
    <Button fontWeight='regular' onClick={onClick} ref={ref} width='32'>
      {value ? value : "--/---/----"}
    </Button>
  ));
  return (
    <Box>
      <Flex alignItems='center'>
        <Flex direction='column' alignItems='center'>
          <Heading fontSize='md' mb='2'>
            Check In
          </Heading>
          <DatePicker
            selected={startDate}
            minDate={new Date()}
            dateFormat={"dd/MMM/yyyy"}
            onChange={(date: Date) =>
              props.handleDateChanges({
                date: format(date, "yyyy-MM-dd"),
                isCheckIn: true,
              })
            }
            selectsStart
            startDate={startDate}
            endDate={endDate}
            customInput={<ExampleCustomInput />}
            locale={pt}
          />
        </Flex>

        <Spacer />

        <Flex direction='column' alignItems='center'>
          <Heading fontSize='md' mb='2'>
            Check Out
          </Heading>
          <DatePicker
            selected={endDate}
            dateFormat={"dd/MMM/yyyy"}
            onChange={(date: Date) =>
              props.handleDateChanges({
                date: format(date, "yyyy-MM-dd"),
                isCheckIn: false,
              })
            }
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            customInput={<ExampleCustomInput />}
            locale={pt}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

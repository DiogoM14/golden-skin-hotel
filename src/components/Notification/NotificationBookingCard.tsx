import {
  Box,
  Button,
  Divider,
  Flex,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { format } from "date-fns";
import { BookingProps } from "../../utils/TBooking";

interface Props {
  booking: BookingProps;
}

export const NotificationBookingCard = ({ booking }: Props) => {
  return (
    <>
      <Flex justify='space-between' align='center'>
        <Box>
          <Stat>
            <StatLabel>Quarto {booking.room.room_no}</StatLabel>
            <StatNumber>{booking.final_price}€</StatNumber>
            <StatHelpText>
              {format(new Date(booking.dates.from), "d MMM YYY") +
                " - " +
                format(new Date(booking.dates.to), "d MMM YYY")}
            </StatHelpText>
          </Stat>
        </Box>

        <NextLink href='/my-bookings'>
          <Button
            size='sm'
            bgColor='#F2BB05'
            color='#fff'
            _hover={{ bg: "#e0ae09" }}>
            Ver mais
          </Button>
        </NextLink>
      </Flex>

      <Divider mb='2' />
    </>
  );
};

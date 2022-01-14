import {
  Box,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsBellFill } from "react-icons/bs";
import { BookingProps } from "../../utils/TBooking";
import { NotificationBookingCard } from "./NotificationBookingCard";

interface Props {
  bookings: BookingProps[];
}

export const NotificationPopover = ({ bookings }: Props) => {
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <Popover placement='top-start'>
      <PopoverTrigger>
        <Box position={"relative"}>
          <IconButton
            onClick={() => {
              if (notifOpen == false) {
                setNotifOpen(true);
              }
            }}
            ml='2'
            bgColor='transparent'
            _hover={{ bg: "#fdeeac" }}
            color='gray.800'
            aria-label='Notifications'
            borderRadius='50%'
            icon={<BsBellFill size={18} />}
          />
          {!notifOpen && bookings.length > 0 && (
            <Box
              boxSize={2.5}
              bgColor={"red.500"}
              rounded={"full"}
              position={"absolute"}
              top={2}
              right={2}></Box>
          )}
        </Box>
      </PopoverTrigger>
      <PopoverContent>
        {bookings.length > 0 ? (
          <>
            <PopoverHeader fontWeight='semibold'>
              Tem reservas nos próximos 7 dias.
            </PopoverHeader>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
              {bookings.map((booking: BookingProps) => (
                <NotificationBookingCard booking={booking} />
              ))}
            </PopoverBody>
          </>
        ) : (
          <>
            <PopoverHeader fontWeight='semibold'>
              Não tem notificações.
            </PopoverHeader>
            <PopoverArrow />
            <PopoverCloseButton />
          </>
        )}
      </PopoverContent>
    </Popover>
  );
};

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

const NotificationPopover = ({ bookings }: Props) => {
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <Popover placement='top-start'>
      <PopoverTrigger>
        <Box position={"relative"}>
          <IconButton
            data-cy='notification-button'
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
      <PopoverContent data-cy='notification-popover'>
        {bookings.length > 0 ? (
          <>
            <PopoverHeader fontWeight='semibold'>
              Tem reservas nos próximos 7 dias.
            </PopoverHeader>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody data-cy='notification-popover-bookings'>
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
            <PopoverCloseButton data-cy='popover-close-btn' />
          </>
        )}
      </PopoverContent>
    </Popover>
  );
};

NotificationPopover.displayName = "NotificationPopover";
export default NotificationPopover;

import {
  Flex,
  Avatar,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Box,
} from "@chakra-ui/react";
import { differenceInDays } from "date-fns";
import NextLink from "next/link";
import { parseCookies } from "nookies";
import { useContext, useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { AuthContext } from "../../contexts/AuthContext";
import { api } from "../../services/apiClient";
import { BookingProps } from "../../utils/TBooking";
import NotificationPopover from "../Notification/NotificationPopover";

export const UserAuth = () => {
  const { user, signOut } = useContext(AuthContext);
  const [upcomingBookings, setUpcomingBookings] = useState<BookingProps[]>([]);
  const [notifOpen, setNotifOpen] = useState(false);
  let name = `${user.first_name} ${user.last_name}`;

  useEffect(() => {
    const { "nextauth.token": token } = parseCookies();
    if (user) {
      api
        .get("/me/bookings", {
          headers: {
            "x-access-token": token,
          },
        })
        .then((response) => {
          let bookings: any = response.data.filter((booking: BookingProps) => {
            return (
              booking.cancelled !== true &&
              differenceInDays(new Date(booking.dates.from), new Date()) <= 7 &&
              differenceInDays(new Date(booking.dates.from), new Date()) >= 0 &&
              new Date(booking.dates.from) > new Date()
            );
          });
          setUpcomingBookings(bookings);
        })
        .catch((err: any) => {
          console.log(err);
        });
    }
  }, [user]);

  return (
    <Flex align='center'>
      <Avatar
        name={name}
        bg='#F2BB05'
        color='#fff'
        size='md'
        src={user.avatar}
      />

      <NotificationPopover bookings={upcomingBookings} />

      <Text mx='2'>{name}</Text>
      <Menu isLazy>
        <MenuButton>
          <FiChevronDown />
        </MenuButton>
        <MenuList zIndex={1000}>
          {user.role.includes("ADMIN") && (
            <>
              <MenuGroup title='Administrador'>
                <NextLink href='/admin/rooms'>
                  <MenuItem>Listar Quartos</MenuItem>
                </NextLink>
                <NextLink href='/admin/create-room'>
                  <MenuItem>Criar Quarto</MenuItem>
                </NextLink>
                <NextLink href='/admin/users'>
                  <MenuItem>Listar Utilizadores</MenuItem>
                </NextLink>
              </MenuGroup>
              <MenuDivider />
            </>
          )}
          <MenuGroup title='Hóspede'>
            <NextLink href='/my-bookings'>
              <MenuItem>Minhas reservas</MenuItem>
            </NextLink>
            <NextLink href='/fav-rooms'>
              <MenuItem>Meus quartos favoritos</MenuItem>
            </NextLink>
            <NextLink href='/edit-profile'>
              <MenuItem>Editar perfil</MenuItem>
            </NextLink>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup>
            <MenuItem onClick={signOut}>Sair</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </Flex>
  );
};

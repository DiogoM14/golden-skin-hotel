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
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useContext } from "react";
import { FiChevronDown } from "react-icons/fi";
import { AuthContext } from "../../contexts/AuthContext";

export const UserAuth = () => {
  const { user, signOut } = useContext(AuthContext);

  let name = `${user.first_name} ${user.last_name}`;

  return (
    <Flex align='center'>
      <Avatar
        name={name}
        bg='#F2BB05'
        color='#fff'
        size='md'
        src={user.avatar}
      />
      <Text mx='2'>{name}</Text>
      <Menu isLazy>
        <MenuButton>
          <FiChevronDown />
        </MenuButton>
        <MenuList>
          {user.role.includes("ADMIN") && (
            <>
              <MenuGroup title='Administrador'>
                <NextLink href='/admin/rooms'>
                  <MenuItem>Listar Quartos</MenuItem>
                </NextLink>
                <NextLink href='/admin/create-room'>
                  <MenuItem>Criar Quarto</MenuItem>
                </NextLink>
                <NextLink href='/admin/bookings'>
                  <MenuItem>Listar Reservas</MenuItem>
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

import {
  Flex,
  Avatar,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import Link from "next/link";
import { useContext } from "react";
import { FiChevronDown } from "react-icons/fi";
import { AuthContext } from "../../contexts/AuthContext";

export const UserAuth = () => {
  const { user, signOut } = useContext(AuthContext);

  return (
    <Flex align='center'>
      <Avatar
        name='Diogo Martins'
        src='https://www.github.com/diogom14.png'
        bg='#F2BB05'
        size='md'
      />
      <Text mx='2'>{user.email}</Text>
      <Menu isLazy>
        <MenuButton>
          <FiChevronDown />
        </MenuButton>
        <MenuList>
          <Link href='/edit-profile'>
            <MenuItem>Editar perfil</MenuItem>
          </Link>
          <MenuItem onClick={signOut}>Sair</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

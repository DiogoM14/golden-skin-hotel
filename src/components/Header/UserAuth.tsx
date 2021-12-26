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

  let name = `${ user.first_name } ${ user.last_name }`

  return (
    <Flex align='center'>
      <Avatar
        name={name} 
        bg='#F2BB05'
        color="#fff"
        size='md'
        src={user.avatar}
      />
      <Text mx='2'>{name}</Text>
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

import { Flex, Avatar, Text, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react"
import { FiChevronDown } from 'react-icons/fi'

export const UserAuth = () => {
  return (
    <Flex
      align="center"
    >
      <Avatar 
        name="Diogo Martins" 
        src="https://www.github.com/diogom14.png" 
        bg="#F2BB05"
        size="md"
      />
      <Text mx="2">Diogo Martins</Text>
      <Menu isLazy>
        <MenuButton>
          <FiChevronDown />
        </MenuButton>
        <MenuList>
          <MenuItem>Configurações</MenuItem>
          <MenuItem>Sair</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  )
}
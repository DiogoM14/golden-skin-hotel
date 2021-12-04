import { Flex, Button, Divider } from "@chakra-ui/react"
import { FilterContent } from "./FilterContent"
import { FiCalendar, FiUsers } from 'react-icons/fi'

export const HomeRoomFilter = () => {
  return (
    <Flex 
      w="900px" 
      h="120px" 
      bgColor="#fff" 
      borderRadius="lg"
      boxShadow="lg"
      alignItems="center"
      justifyContent="center"
      py="5"
      px="4"
      zIndex="2"
    >
      <FilterContent icon={FiCalendar} name="Check-in" description="ago-22" />
      <Divider orientation='vertical' mx="14" />
      <FilterContent icon={FiCalendar} name="Check-out" description="ago-22" />
      <Divider orientation='vertical' mx="14" />
      <FilterContent icon={FiUsers} name="Pessoas" description="2" />
      <Divider orientation='vertical' mx="14" />

      <Button bgColor="#F2BB05" color="#fff">Procurar</Button>
    </Flex>
  )
}
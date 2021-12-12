import { Flex, Button, Divider, useDisclosure, Collapse, Box, VStack } from "@chakra-ui/react"
import { FilterContent } from "./FilterContent"
import { FiCalendar, FiUsers } from 'react-icons/fi'
import { CollapseCalendar } from "./CollapseCalendar"
import { CollapsePeople } from "./CollapsePeople"

export const HomeRoomFilter = () => {
  const { onToggle, isOpen } = useDisclosure()

  return (
    <VStack>
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
        <Button onClick={onToggle} bgColor="transparent" _hover={{ bgColor: "transparent" }}>
          <FilterContent icon={FiCalendar} name="Check-in" description="ago-22" />
        </Button>

        <Divider orientation='vertical' mx="14" />

        <Button onClick={onToggle} bgColor="transparent" _hover={{ bgColor: "transparent" }}>
          <FilterContent icon={FiCalendar} name="Check-out" description="ago-22" />
        </Button>

        <Divider orientation='vertical' mx="14" />

        <Button onClick={onToggle} bgColor="transparent" _hover={{ bgColor: "transparent" }}>
          <FilterContent icon={FiUsers} name="Pessoas" description="2" />
        </Button>

        <Divider orientation='vertical' mx="14" />
        
        <Button bgColor="#F2BB05" color="#fff">Procurar</Button>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Box
          w="700px" 
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
          <h1>Pessoas</h1>
        </Box>
      </Collapse>
    </VStack>
  )
}
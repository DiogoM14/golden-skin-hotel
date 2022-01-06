import { Box, Heading, HStack, Text } from "@chakra-ui/react"
import { RoomProps } from "../../../utils/TRoom"

interface Room {
  room: RoomProps
}

export const Header = ({ room }: Room) => {
  return (
    <Box>
      <Heading fontWeight="medium" fontSize="xl">Este quarto oferece</Heading>
      <HStack color="#717171" spacing="2">
        <Text>{ room.capacity } hóspedes</Text>
        <Text>{ room.no_beds } camas</Text>
        <Text>1 casa de banho</Text>
      </HStack>
    </Box>
  )
}
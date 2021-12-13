import { HStack, SimpleGrid, Text } from "@chakra-ui/react"
import { FiWifi } from "react-icons/fi"


export const Amenities = () => {
  return (
    <SimpleGrid columns={2}>
      <HStack>
        <FiWifi />
        <Text>Wi-fi</Text>
      </HStack>
      <HStack>
        <FiWifi />
        <Text>Wi-fi</Text>
      </HStack>
      <HStack>
        <FiWifi />
        <Text>Wi-fi</Text>
      </HStack>
      <HStack>
        <FiWifi />
        <Text>Wi-fi</Text>
      </HStack>
      <HStack>
        <FiWifi />
        <Text>Wi-fi</Text>
      </HStack>
      <HStack>
        <FiWifi />
        <Text>Wi-fi</Text>
      </HStack>
    </SimpleGrid>
  )
}
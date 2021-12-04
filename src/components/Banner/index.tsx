import { Box, Text, Image, Heading, Center } from "@chakra-ui/react"
import { HomeRoomFilter } from "../HomeRoomFilter"

export const Banner = () => {
  return (
    <Box w="100%" mb="44">
      <Box pos="relative">
        <Image 
          src="banner.png"
          h="500px"
          w="100%"
          objectFit="cover"
          borderRadius="xl"
        />

        <Center pos="absolute" top="0" ml="84px" h="100%">
          <Box>
            <Heading color="#fff" fontSize="5xl">Golden Skin Hotel</Heading>
            <Heading color="#fff" fontSize="5xl" mb="4">Desfrute da sua estadia.</Heading>

            <Text maxW="xs" color="#D4D4D4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ex eu arcu porta vehicula et  non ante.</Text>
          </Box>
        </Center>
      </Box>

      <Center mt="-60px">
        <HomeRoomFilter />
      </Center>
    </Box>
  )
}
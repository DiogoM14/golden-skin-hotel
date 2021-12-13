import { SimpleGrid, Flex, Box, Divider, Button } from "@chakra-ui/react"
import { Amenities } from "./amenities"
import { Description } from "./Description"
import { Header } from "./Header"

export const Body = () => {
  return (
    <SimpleGrid columns={2} my="4" gap="12">
      <Flex flexDir="column">

        <Header />

        <Divider my="4" borderColor="#bbbbbb" />

        <Amenities />

        <Button
          mt="6"
          fontFamily='Poppins'
          fontWeight='Medium'
          fontSize='sm'
          bgColor='white'
          border='2px'
          borderColor='#F2BB05'
          maxW="300px"
          height='30px'
          _hover={{ bg: "transparent" }}
        >
          Mostrar todas as comodidades
        </Button>

        <Divider my="4" borderColor="#bbbbbb" />

        <Description />

        <Divider my="4" borderColor="#bbbbbb" />
      </Flex>

      <Box bgColor="#fff" borderRadius="lg" maxH="400px" shadow="md">

      </Box>
    </SimpleGrid>
  )
}
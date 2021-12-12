import { SimpleGrid, Flex, Heading, Box, HStack, Text, Divider, Button } from "@chakra-ui/react"
import { FiWifi } from 'react-icons/fi'


export const Body = () => {
  return (
    <SimpleGrid columns={2} my="4" gap="12">
      <Flex flexDir="column">
        <Box>
          <Heading fontWeight="medium" fontSize="xl">Este quarto oferece</Heading>
          <HStack color="#717171" spacing="2">
            <Text>2 hóspedes</Text>
            <Text>1 quarto</Text>
            <Text>2 camas</Text>
            <Text>1 casa de banho</Text>
          </HStack>
        </Box>

        <Divider my="4" borderColor="#bbbbbb" />

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

        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Imperdiet id hendrerit tempus nunc facilisi pulvinar. Ornare 
          cras rhoncus nulla purus, ac. Quam facilisi aliquet et imperdiet 
          sagittis. Volutpat dignissim justo risus tristique quis. Id fringilla 
          egestas massa eu elementum. Neque etiam sapien malesuada 
          nullam posuere. 
        </Text>

        <Divider my="4" borderColor="#bbbbbb" />

      </Flex>

      <Box bgColor="#fff" borderRadius="lg" maxH="400px" shadow="md">

      </Box>
    </SimpleGrid>
  )
}
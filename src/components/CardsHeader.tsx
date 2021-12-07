import { HStack, Flex, Text, Heading, Divider } from "@chakra-ui/react"

export const CardsHeader = () => {
  return (
    <HStack mb="6" w="100%">
      <Flex flexDir="column" w="100%">
        <Text 
          color="#717171" 
          fontWeight="medium" 
          mr="2"
          fontSize="lg"
          mb="4"
        >
          Os nossos quartos
        </Text>

        <HStack>
          <Heading 
            fontFamily="ubuntu"
            color="#1c1c1c"
            fontSize="2xl"
            fontWeight="bold"
            lineHeight="1.3"

          >
            Encontre a sua melhor acomodação aqui.
          </Heading>

          <Divider  
            borderColor="#F2BB05"
            w="100%" 
            border="1px" 
            borderRadius="2px"  
          />

        </HStack>
      </Flex>
    </HStack>
  )
}
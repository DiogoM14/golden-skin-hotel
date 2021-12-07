import { Image, Flex, Heading, HStack, VStack, Text, Divider, Center, Button } from "@chakra-ui/react"

export const HomeAboutUsBanner = () => {
  return (
    <Flex mb="10" my="6.8rem">
      <Image maxW="574px" maxH="468px" src="aboutUs.png" />
      <Center>
        <Flex maxW="444px" ml="7" flexDir="column">
          <HStack w="100%">
            <Text 
              color="#717171" 
              fontWeight="medium" 
              mr="2"
              fontSize="lg"
            >
              Sobre nós
            </Text>
            <Divider 
              maxW="160px" 
              w="100%" 
              borderColor="#F2BB05" 
              border="1px" 
              borderRadius="2px" 
            />
          </HStack>

          <Heading
            color="#1c1c1c"
            py="4"
          >
            As suas melhores férias começam aqui.
          </Heading>
          <Text
            color="#717171"
            fontSize="lg"
            pb="4"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ex eu arcu porta vehicula et  non ante.  
          </Text>

          <Button
            bgColor="#F2BB05"
            color="#fff"
            w="120px"
          >
            Ver mais
          </Button>
        </Flex>
      </Center>
    </Flex>
  )
}
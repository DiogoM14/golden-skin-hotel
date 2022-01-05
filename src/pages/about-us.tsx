import { Box, Circle, Container, Heading, HStack, Img, Text } from "@chakra-ui/react"
import { BigSeparator } from "../components/BigSeparator"
import { SmallerSeparator } from "../components/SmallerSeparator"

const AboutUs = () => {
  return (
    <Container maxW="container.xl" mt="8">
      <Circle
        bgColor="#fff"
        width="800px"
        height="800px"
        pos="absolute"
        top="0"
        left="-10%"
        zIndex="-1"
      >
        <Text></Text>
      </Circle>
      <HStack h="100vh" pb="24">
        <BigSeparator />

        <Box pos="relative" w="100%">
          <Img
            w='646px'
            h='md'
            objectFit='cover'
            borderRadius='md'
            boxShadow='lg'
            src='about.jpeg'
            shadow="md"
          />

          <Box
            bottom='-60px'
            left="50px"
            py='4'
            px='6'
            w='2xs'
            h='122px'
            position='absolute'
            bgColor='white'
            borderRadius='lg'
            boxShadow='xl'
          >
            <Heading as='h6' fontSize='lg' fontWeight='bold' mb='2'>
              Golden Skin Hotel
            </Heading>
            <Text fontSize='md' fontWeight='medium' mb='4'>
              Best Hotel Award 2021
            </Text>
            <Text fontSize='md' fontWeight='medium'>
              Avaliação ⭐️ 4.8
            </Text>
          </Box>
        </Box>
      </HStack>

    <Box h="calc(100vh - 100px)">
      <SmallerSeparator />

      <HStack justify="space-between" w="100%" mb="8">
        <Img
          w='lg'
          h='lg'
          objectFit='cover'
          borderRadius='2xl'
          boxShadow='lg'
          src='aboutUs.png'
        />

        <BigSeparator />
      </HStack>
    </Box>
    </Container>
  )
}

export default AboutUs
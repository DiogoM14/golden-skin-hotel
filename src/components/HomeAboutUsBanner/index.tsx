import {
  Img,
  Flex,
  Heading,
  HStack,
  Text,
  Divider,
  Button,
  Box,
  Container,
} from "@chakra-ui/react";
import { AwardBox } from "./AwardBox";

export const HomeAboutUsBanner = () => {
  return (
    <Container maxW='full'>
      <Flex mb='10' my='28' wrap={{ base: "wrap", md: "nowrap" }}>
        <Box
          paddingLeft={{ base: 0, md: "5rem" }}
          w={{ base: "100%", md: "574px" }}
          position='relative'>
          <AwardBox />
          <Img
            w={{ base: "full", lg: "lg" }}
            h={{ base: "2xs", md: "lg" }}
            objectFit='cover'
            borderRadius='2xl'
            boxShadow='lg'
            src='aboutUs.png'
          />
        </Box>
        <Box my='auto' w={{ base: "full", md: "max" }}>
          <Flex
            mt={{ base: 6, md: 0 }}
            ml={{ base: 0, md: "2rem", lg: "5rem" }}
            maxW={{ base: "full", md: "444px" }}
            direction='column'>
            <Flex w='100%' alignItems='center'>
              <Box mr='2'>
                <Text color='#717171' fontWeight='medium' fontSize='lg' w='max'>
                  Sobre nós
                </Text>
              </Box>
              <Divider
                w='full'
                borderColor='#F2BB05'
                border='1px'
                borderRadius='2px'
              />
            </Flex>

            <Heading color='#1c1c1c' py='4'>
              As suas melhores férias começam aqui.
            </Heading>
            <Text color='#717171' fontSize='lg' pb='4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              eget ex eu arcu porta vehicula et non ante.
            </Text>

            <Button bgColor='#F2BB05' color='#fff' w='120px'>
              Ver mais
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

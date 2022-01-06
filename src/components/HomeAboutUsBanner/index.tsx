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
  useBreakpointValue,
} from "@chakra-ui/react";
import { AwardBox } from "./AwardBox";
import NextLink from "next/link";

export const HomeAboutUsBanner = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Container maxW='full'>
      <Flex
        mb='10'
        my={{ base: "14", md: "28" }}
        wrap={{ base: "wrap", md: "nowrap" }}>
        {isWideVersion ? (
          <>
            <Box paddingLeft='5rem' w='574px' position='relative'>
              <AwardBox top='50px' left='0' />
              <Img
                w='lg'
                h='lg'
                objectFit='cover'
                borderRadius='2xl'
                boxShadow='lg'
                src='aboutUs.png'
              />
            </Box>
          </>
        ) : (
          <></>
        )}
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
              Com um ambiente acolhedor e confortável, o Golden Skin Hotel
              oferece uma experiência de férias única.
            </Text>

            <NextLink href='/rooms'>
              <Button
                bgColor='#F2BB05'
                color='#fff'
                _hover={{ bg: "#e0ae09" }}
                w='min-content'>
                Ver mais
              </Button>
            </NextLink>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

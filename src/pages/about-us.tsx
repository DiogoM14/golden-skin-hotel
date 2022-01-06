import {
  Avatar,
  Box,
  Circle,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  IconButton,
  Img,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Head from "next/head";
import { BigSeparator } from "../components/BigSeparator";
import { SmallerSeparator } from "../components/SmallerSeparator";
import { SiGithub } from "react-icons/si";
import { AwardBox } from "../components/HomeAboutUsBanner/AwardBox";

const AboutUs = () => {
  const isWideVersion = useBreakpointValue({
    base: true,
    lg: false,
  });

  return (
    <>
      <Head>
        <title>Golden Skin Hotel</title>
        <meta name='description' content='Melhor hotel do mundo' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Container maxW='container.xl' mt='8'>
        {!isWideVersion && (
          <Circle
            bgColor='#fff'
            width='800px'
            height='800px'
            pos='absolute'
            top='0'
            left='-10%'
            zIndex='-1'>
            <Text></Text>
          </Circle>
        )}

        <HStack h={{ md: "100vh", base: "100%" }} pb={{ md: "24", base: "4" }}>
          <BigSeparator
            title='Origem'
            subtitle='Como surgiu o Golden Skin Hotel.'
            text=' O Golden Sking Hotel é um projeto que surgiu no âmbito da cadeira
              de Programação para a Web Avançada, do 2º ano do CTeSP
              Desenvolvimento para a Web e Dispositivos Móveis.'
          />

          {!isWideVersion && (
            <Box pos='relative' w='100%'>
              <Img
                w='646px'
                h='md'
                objectFit='cover'
                borderRadius='md'
                boxShadow='lg'
                src='about.jpeg'
                shadow='md'
              />

              <AwardBox bottom='-60px' left='50px' />
            </Box>
          )}
        </HStack>

        <Box h={{ md: "calc(100vh - 100px)", base: "100%" }} pb={{ base: "4" }}>
          {!isWideVersion && <SmallerSeparator />}

          <HStack justify='space-between' w='100%' mb='8'>
            {!isWideVersion && (
              <Img
                w='lg'
                h='lg'
                objectFit='cover'
                borderRadius='2xl'
                boxShadow='lg'
                src='aboutUs.png'
              />
            )}

            <BigSeparator
              title='Fundadores'
              subtitle='Os fundadores do projeto Golden Skin Hotel'
              text=''>
              <>
                <Flex direction='column' mt='4' mb='8'>
                  <HStack>
                    <Avatar src='https://github.com/diogom14.png' />
                    <Text>Diogo Martins - 8200129</Text>
                    <IconButton
                      aria-label='GitHub Diogo'
                      color='black'
                      as='a'
                      href='https://www.github.com/diogom14'
                      borderRadius={"full"}
                      icon={<SiGithub />}
                    />
                  </HStack>
                  <Divider my='4' borderColor='#bbbbbb' />
                  <HStack>
                    <Avatar src='https://github.com/pedrocosta24.png' />
                    <Text>Pedro Costa - 8200138</Text>
                    <IconButton
                      aria-label='GitHub Pedro'
                      color='black'
                      as='a'
                      href='https://www.github.com/pedrocosta24'
                      borderRadius={"full"}
                      icon={<SiGithub />}
                    />
                  </HStack>
                </Flex>
              </>
            </BigSeparator>
          </HStack>
        </Box>
      </Container>
    </>
  );
};

export default AboutUs;

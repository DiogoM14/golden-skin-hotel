import {
  Container,
  SimpleGrid,
  Box,
  Img,
  Center,
  Heading,
  Text,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  FormControl,
  Checkbox,
  HStack,
  Button,
  GridItem,
  Divider,
  VStack,
  IconButton,
} from "@chakra-ui/react";

import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { NextPage } from "next";
import { Header } from "../components/Header";
import { Finput } from "../components/Finput";

const Login: NextPage = () => {
  let gridHeight = `calc(100vh - 80px)`;

  return (
    <>
      <Header />
      <Container maxW='full' bgColor='#F4F4F5' p={0}>
        <SimpleGrid columns={7} h={gridHeight}>
          <GridItem colSpan={3} paddingX='32'>
            <Center w='full' h='100%'>
              <Box>
                <Heading fontSize='4xl' fontWeight='bold' mb='2'>
                  Bem-vindo ao Golden Skin
                </Heading>
                <Text fontSize='lg' fontWeight='normal' color='#717171'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  eget ex eu arcu porta vehicula et non ante.
                </Text>

                <Tabs isLazy isFitted defaultIndex={1} a variant='unstyled' mt='20'>
                  <TabList mb='8'>
                    <Tab
                      _selected={{
                        borderBottom: "2px solid",
                        borderBottomColor: "#F2BB05",
                      }}>
                      <Text fontFamily='Poppins'>Entrar</Text>
                    </Tab>
                    <Tab
                      _selected={{
                        borderBottom: "2px solid",
                        borderBottomColor: "#F2BB05",
                      }}>
                      <Text fontFamily='Poppins'>Registar</Text>
                    </Tab>
                  </TabList>
                  <TabPanels >
                    <TabPanel p={0}>
                      <FormControl id='login'>
                        <Finput type='email' placeholder='E-mail' />
                        <Finput type='password' placeholder='Palavra-passe' />

                        <HStack spacing='1'>
                          <Text
                            fontFamily='Poppins'
                            fontSize='xs'
                            color='#717171'>
                            Esqueceu-se da palavra-passe?
                          </Text>
                          <Text
                            fontFamily='Poppins'
                            fontWeight='bold'
                            fontSize='xs'
                            color='#717171'
                            _hover={{ cursor: "pointer" }}>
                            Clique aqui
                          </Text>
                        </HStack>

                        <Center mt='8'>
                          <Button
                            paddingX='10'
                            bgColor='#F2BB05'
                            color='#fff'
                            _hover={{ bg: "#e0ae09" }}
                            fontFamily='Poppins'
                            fontWeight='medium'
                            fontSize='md'>
                            Entrar
                          </Button>
                        </Center>

                        <VStack mt='4' spacing='4'>
                          <Text
                            fontFamily='Poppins'
                            fontSize='sm'
                            color='#717171'>
                            ou
                          </Text>
                          <Divider
                            width='50%'
                            borderWidth='1px'
                            borderColor='#D4D4D4'
                          />
                          <HStack spacing='4'>
                            <IconButton
                              borderRadius='full'
                              variant='ghost'
                              bgcolor='white'
                              aria-label='google button'
                              icon={<FcGoogle size='40px' />}
                            />
                            <IconButton
                              borderRadius='full'
                              variant='ghost'
                              bgColor='#4267B2'
                              color='white'
                              _hover={{ bgColor: "#3b5998" }}
                              aria-label='facebook button'
                              icon={<FaFacebookF size='24px' />}
                            />
                            <IconButton
                              borderRadius='full'
                              variant='ghost'
                              bgColor='#1DA1F2'
                              color='white'
                              _hover={{ bg: "#0d7ae0" }}
                              aria-label='twitter button'
                              icon={<FaTwitter size='24px' />}
                            />
                          </HStack>
                        </VStack>
                      </FormControl>
                    </TabPanel>
                    <TabPanel p={0}>
                      <FormControl id='signUp'>
                        <SimpleGrid columns={2} columnGap='4'>
                          <GridItem colSpan={2}>
                            <Finput type='email' placeholder='E-mail' />
                          </GridItem>
                          <GridItem colSpan={1}>
                            <Finput type='text' placeholder='Primeiro Nome' />
                          </GridItem>
                          <GridItem colSpan={1}>
                            <Finput type='text' placeholder='Último Nome' />
                          </GridItem>
                          <GridItem colSpan={2}>
                            <Finput
                              type='password'
                              placeholder='Palavra-passe'
                            />
                          </GridItem>
                          <GridItem colSpan={2}>
                            <Finput
                              type='password'
                              placeholder='Repita a Palavra-passe'
                            />
                          </GridItem>

                          <GridItem colSpan={2}>
                            <Checkbox>
                              <Text
                                fontFamily='Poppins'
                                fontSize='xs'
                                color='#717171'>
                                Tenho mais de 18 anos.
                              </Text>
                            </Checkbox>
                          </GridItem>

                          <GridItem colSpan={2} mx='auto' mt='5'>
                            <Button
                              paddingX='10'
                              bgColor='#F2BB05'
                              color='#fff'
                              _hover={{ bg: "#e0ae09" }}
                              fontFamily='Poppins'
                              fontWeight='medium'
                              fontSize='md'>
                              Registar
                            </Button>
                          </GridItem>
                        </SimpleGrid>
                        <VStack mt='4' spacing='4'>
                          <Text
                            fontFamily='Poppins'
                            fontSize='sm'
                            color='#717171'>
                            ou
                          </Text>
                          <Divider
                            width='50%'
                            borderWidth='1px'
                            borderColor='#D4D4D4'
                          />
                          <HStack spacing='4'>
                            <IconButton
                              borderRadius='full'
                              variant='ghost'
                              bgcolor='white'
                              aria-label='google button'
                              icon={<FcGoogle size='40px' />}
                            />
                            <IconButton
                              borderRadius='full'
                              variant='ghost'
                              bgColor='#4267B2'
                              color='white'
                              _hover={{ bgColor: "#3b5998" }}
                              aria-label='facebook button'
                              icon={<FaFacebookF size='24px' />}
                            />
                            <IconButton
                              borderRadius='full'
                              variant='ghost'
                              bgColor='#1DA1F2'
                              color='white'
                              _hover={{ bg: "#0d7ae0" }}
                              aria-label='twitter button'
                              icon={<FaTwitter size='24px' />}
                            />
                          </HStack>
                        </VStack>
                      </FormControl>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
            </Center>
          </GridItem>
          <GridItem colSpan={4}>
            <Img
              objectFit='cover'
              boxSize='full'
              src='https://images.pexels.com/photos/6474588/pexels-photo-6474588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'></Img>
          </GridItem>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Login;

import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Select,
  SimpleGrid,
  Tag,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Input } from "../Finput";
import { NextPage } from "next";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { RoomProps } from "../../utils/TRoom";
import { api } from "../../services/apiClient";
import { parseCookies } from "nookies";
import { storage, ref, uploadBytesResumable, getDownloadURL } from "../../services/firebase";

export const CreateRoom = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm();
  const toast = useToast();
  const [type, setType] = useState("" as string);
  const [amenities, setAmenities] = useState({} as any);
  const [images, setImages] = useState([] as any);

  const onSubmit = async (data: any) => {
    const { "nextauth.token": token } = parseCookies();

    let imageFiles: any = [data.images]

    console.log(imageFiles.name)

    imageFiles.map((image: any) => {
      const storageRef = ref(storage, 'images/' + image.name);
      uploadBytesResumable(storageRef, image);
      getDownloadURL(storageRef)
      .then(async (res) => {
        return setImages([...images, res]);
      })
    })

    let newRoom: RoomProps = {
      ...data,
      images,
      type,
      amenities,
    };

    api
    .post("/admin/rooms", newRoom, {
      headers: {
        "x-access-token": token,
      },
    })
    .then((res) => {
      toast({
        title: "Quarto criado",
        description: "Quarto " + res.data.room_no + " criado com sucesso",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
    })
    .catch((err) => {
      toast({
        title: "Erro",
        description:
          "Certifique-se que o número do quarto não existe e que todos os campos estão preenchidos",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
    });
  };

  return (
    <>
      <Head>
        <title>Golden Skin Hotel</title>
        <meta name='description' content='Melhor hotel do mundo' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Container py='20'>
        <Center>
          <Text fontFamily='Poppins' fontSize='4xl'>
            Criar Quarto
          </Text>
        </Center>
        <Center>
          <Flex direction='column'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl>
                <SimpleGrid columns={2} spacing={4} row={5}>
                  <GridItem colSpan={2}>
                    <FormLabel htmlFor='images'>Imagens</FormLabel>
                    <Input type='file' id='images' multiple {...register("images")} />
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormLabel htmlFor='room_no'>Número do quarto</FormLabel>
                    <Input
                      isRequired
                      type='number'
                      id='room_no'
                      min={1}
                      {...register("room_no")}
                    />
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormLabel htmlFor='price_night'>
                      Preço por noite (€)
                    </FormLabel>
                    <Input
                      min={1}
                      isRequired
                      type='number'
                      id='price_night'
                      {...register("price_night")}
                    />
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormLabel>Tipo de quarto</FormLabel>
                    <Center>
                      <Menu closeOnSelect={false}>
                        <MenuButton
                          as={Button}
                          w='100%'
                          size='lg'
                          fontWeight='medium'
                          bgColor='white'>
                          {type != ""
                            ? //capitalize roomtype
                              type.charAt(0).toUpperCase() + type.slice(1)
                            : "Selecione"}
                        </MenuButton>
                        <MenuList>
                          <MenuOptionGroup
                            type='radio'
                            onChange={(e: any) => {
                              setType(e);
                            }}>
                            <MenuItemOption value='single'>
                              Single
                            </MenuItemOption>
                            <MenuItemOption value='double'>
                              Double
                            </MenuItemOption>
                            <MenuItemOption value='king'>King</MenuItemOption>
                            <MenuItemOption value='deluxe'>
                              Deluxe
                            </MenuItemOption>
                          </MenuOptionGroup>
                        </MenuList>
                      </Menu>
                    </Center>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormLabel htmlFor='no_beds'>Nº de camas</FormLabel>
                    <Input
                      min={1}
                      isRequired
                      type='number'
                      id='no_beds'
                      {...register("no_beds")}
                    />
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormLabel htmlFor='capacity'>
                      Capacidade (máx. hóspedes)
                    </FormLabel>
                    <Input
                      min={1}
                      isRequired
                      type='number'
                      id='capacity'
                      {...register("capacity")}
                    />
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormLabel htmlFor='area'>Área (m&sup2;)</FormLabel>
                    <Input
                      min={1}
                      isRequired
                      type='number'
                      id='area'
                      {...register("area")}
                    />
                  </GridItem>
                  <GridItem colSpan={2}>
                    <FormLabel>Comodidades</FormLabel>
                    {amenities && (
                      <Box>
                        {amenities.wifi && (
                          <Tag size='lg' colorScheme={"orange"} mr='2' my='2'>
                            Wifi
                          </Tag>
                        )}
                        {amenities.tv && (
                          <Tag size='lg' colorScheme={"orange"} mr='2' my='2'>
                            Televisão
                          </Tag>
                        )}
                        {amenities.crib && (
                          <Tag size='lg' colorScheme={"orange"} mr='2' my='2'>
                            Berço
                          </Tag>
                        )}
                        {amenities.airConditioning && (
                          <Tag size='lg' colorScheme={"orange"} mr='2' my='2'>
                            Ar condicionado
                          </Tag>
                        )}
                        {amenities.iron && (
                          <Tag size='lg' colorScheme={"orange"} mr='2' my='2'>
                            Ferro de engomar
                          </Tag>
                        )}
                        {amenities.smokeAlarm && (
                          <Tag size='lg' colorScheme={"orange"} mr='2' my='2'>
                            Alarme de fumo
                          </Tag>
                        )}
                      </Box>
                    )}
                    <Center>
                      <Menu closeOnSelect={false} placement='bottom'>
                        <MenuButton
                          as={Button}
                          w='100%'
                          size='lg'
                          fontWeight='medium'
                          bgColor='white'>
                          Selecione
                        </MenuButton>
                        <MenuList>
                          <MenuOptionGroup
                            type='checkbox'
                            onChange={(e: any) => {
                              let newAmenities: any = {
                                wifi: false,
                                tv: false,
                                airConditioning: false,
                                crib: false,
                                iron: false,
                                smokeAlarm: false,
                              };

                              // change newAmenities to true if amenity is selected and false if not
                              for (let i = 0; i < e.length; i++) {
                                newAmenities[e[i]] = true;
                              }

                              setAmenities(newAmenities);
                            }}>
                            <MenuItemOption value='wifi'>Wifi</MenuItemOption>
                            <MenuItemOption value='tv'>
                              Televisão
                            </MenuItemOption>
                            <MenuItemOption value='crib'>Berço</MenuItemOption>
                            <MenuItemOption value='airConditioning'>
                              Ar condicionado
                            </MenuItemOption>
                            <MenuItemOption value='iron'>
                              Ferro de engomar
                            </MenuItemOption>
                            <MenuItemOption value='smokeAlarm'>
                              Alarme de fumo
                            </MenuItemOption>
                          </MenuOptionGroup>
                        </MenuList>
                      </Menu>
                    </Center>
                  </GridItem>
                </SimpleGrid>
                <Center mt='12' mb='20'>
                  <Button
                    color='#fff'
                    bgColor='#F2BB05'
                    _hover={{ bg: "#e0ae09" }}
                    size='lg'
                    type='submit'
                    isLoading={isSubmitting}>
                    Criar
                  </Button>
                </Center>
              </FormControl>
            </form>
          </Flex>
        </Center>
      </Container>
    </>
  );
};

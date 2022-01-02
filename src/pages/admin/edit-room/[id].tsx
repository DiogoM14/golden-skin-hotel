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
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  SimpleGrid,
  Tag,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Input } from "../../../components/Finput";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { parseCookies } from "nookies";
import {
  storage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "../../../services/firebase";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { api } from "../../../services/apiClient";
import { RoomProps } from "../../../utils/TRoom";
import { useRouter } from "next/router";

export const EditRoom: NextPage = ({ data }: any) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setValue,
    reset,
  } = useForm();
  const toast = useToast();
  const router = useRouter();
  const [type, setType] = useState("" as string);
  const [amenities, setAmenities] = useState({} as any);

  useEffect(() => {
    setValue("room_no", data.room_no);
    setType(data.type);
    setValue("no_beds", data.no_beds);
    setValue("capacity", data.capacity);
    setValue("price_night", data.price_night);
    setValue("area", data.area);
    setAmenities(data.amenities);
  }, []);

  const onSubmit = async (values: any) => {
    if (values.images.length > 0 && values.images.length < 5) {
      toast({
        title: "Selecione pelo menos 5 imagens",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    } else if (values.images.length == 5) {
      let uploadPromises: any[] = [];

      uploadPromises.push(
        [...values.images].map(async (file: any) => {
          const storageRef = ref(storage, "images/" + file.name);
          await uploadBytesResumable(storageRef, file);
          const downloadURL = await getDownloadURL(storageRef);

          return downloadURL;
        })
      );

      values.images = [];

      await Promise.all(uploadPromises[0]).then(
        (links: any) => (values.images = links)
      );
    } else {
      values.images = data.images;
    }

    const { "nextauth.token": token } = parseCookies();

    let newRoom: RoomProps = {
      ...values,
      type,
      amenities,
    };

    api
      .put(`/admin/rooms/${data._id}`, newRoom, {
        headers: {
          "x-access-token": token,
        },
      })
      .then((res) => {
        toast({
          title: "Quarto editado com sucesso",
          description: "Quarto " + res.data.room_no + " editado com sucesso",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "bottom",
        });
        setAmenities({});
        reset();
        router.push(`/room/${data._id}`);
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
            Editar Quarto
          </Text>
        </Center>
        <Center>
          <Flex direction='column'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl>
                <SimpleGrid columns={2} spacing={4} row={5}>
                  <GridItem colSpan={2}>
                    <FormLabel htmlFor='images'>Imagens</FormLabel>
                    <Input
                      type='file'
                      id='images'
                      multiple
                      {...register("images")}
                    />
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormLabel htmlFor='room_no'>Número do quarto</FormLabel>
                    <Input
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
                      type='number'
                      id='price_night'
                      {...register("price_night")}
                    />
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormLabel>Tipo de quarto</FormLabel>
                    <Center>
                      <Menu closeOnSelect={true}>
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
                      type='number'
                      id='capacity'
                      {...register("capacity")}
                    />
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormLabel htmlFor='area'>Área (m&sup2;)</FormLabel>
                    <Input
                      min={1}
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
                    Guardar
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id }: any = params;

  const res = await api.get(`/rooms/id/${id}`);

  const data: RoomProps = {
    _id: res.data._id,
    room_no: res.data.room_no,
    type: res.data.type,
    no_beds: res.data.no_beds,
    capacity: res.data.capacity,
    amenities: res.data.amenities,
    price_night: res.data.price_night,
    images: res.data.images,
    area: res.data.area,
    reserved: res.data.reserved,
  };

  return {
    props: {
      data,
    },
  };
};

export default EditRoom;

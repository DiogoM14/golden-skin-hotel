import {
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  Img,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Input } from "../components/Finput";
import { NextPage } from "next";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Router from "next/router";
import { api } from "../services/apiClient";
import { parseCookies } from "nookies";

type userInfo = {
  email: string;
  role: string;
  user_id: string;
  address: {
    street: string;
    city: string;
    postal_code: string;
    country: string;
  };
  nif: number;
  first_name: string;
  last_name: string;
  phone_number: string;
  birthday: string;
};

export const EditProfile: NextPage = () => {
  const { isAuthenticated, user } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState<userInfo>();

  useEffect(() => {
    if (!isAuthenticated) {
      Router.push("/");
    } else {
      const { "nextauth.token": token } = parseCookies();

      api
        .get("/me/myInfo", {
          headers: {
            "x-access-token": token,
          },
        })
        .then((response) => {
          setUserInfo(response.data);
        });
    }
  }, []);
  return (
    <>
      <Head>
        <title>Golden Skin Hotel</title>
        <meta name='description' content='Melhor hotel do mundo' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Container>
        <Text fontFamily='Poppins' mt='20' fontSize='2xl'>
          Editar perfil
        </Text>
        <Center>
          <Flex direction='column' alignItems='center'>
            <Flex direction='column' alignItems='center' mt='10'>
              <Img
                src='aboutUs.png'
                objectFit='cover'
                boxSize='32'
                borderRadius='full'
              />
              <Text
                fontWeight='regular'
                mt='2'
                _hover={{ textDecoration: "underline", cursor: "pointer" }}>
                Alterar foto de perfil
              </Text>
            </Flex>
            <FormControl mt='3'>
              <SimpleGrid columns={2} rows={5} spacingX={"20px"}>
                <GridItem colSpan={2}>
                  <FormLabel fontWeight='regular' htmlFor='email'>
                    E-mail
                  </FormLabel>
                  <Input
                    value={userInfo && userInfo.email}
                    type='email'
                    id='email'
                  />
                </GridItem>
                <GridItem colSpan={1}>
                  <FormLabel fontWeight='regular' htmlFor='fistName'>
                    Primeiro nome
                  </FormLabel>
                  <Input
                    value={userInfo && userInfo.first_name}
                    type='text'
                    id='firstName'
                  />
                </GridItem>
                <GridItem colSpan={1}>
                  <FormLabel fontWeight='regular' htmlFor='lastName'>
                    Último nome
                  </FormLabel>
                  <Input
                    value={userInfo && userInfo.last_name}
                    type='text'
                    id='lastName'
                  />
                </GridItem>
                <GridItem colSpan={2}>
                  <FormLabel fontWeight='regular' htmlFor='telephone'>
                    Telemóvel
                  </FormLabel>
                  <Input
                    value={userInfo && userInfo.phone_number}
                    type='tel'
                    id='telephone'
                  />
                </GridItem>
                <GridItem colSpan={2}>
                  <FormLabel fontWeight='regular' htmlFor='country'>
                    País
                  </FormLabel>
                  <Input
                    value={userInfo && userInfo.address.country}
                    type='text'
                    id='country'
                  />
                </GridItem>
                <GridItem colSpan={1}>
                  <FormLabel fontWeight='regular' htmlFor='address'>
                    Morada
                  </FormLabel>
                  <Input
                    value={userInfo && userInfo.address.street}
                    type='text'
                    id='address'
                  />
                </GridItem>
                <GridItem colSpan={1}>
                  <FormLabel fontWeight='regular' htmlFor='postalCode'>
                    Código Postal
                  </FormLabel>
                  <Input
                    value={userInfo && userInfo.address.postal_code}
                    type='text'
                    id='postalCode'
                  />
                </GridItem>
              </SimpleGrid>

              <Center mt='6' mb='20'>
                <Button
                  color='#fff'
                  bgColor='#F2BB05'
                  _hover={{ bg: "#e0ae09" }}
                  size='lg'>
                  Guardar
                </Button>
              </Center>
            </FormControl>
          </Flex>
        </Center>
      </Container>
    </>
  );
};

export default EditProfile;

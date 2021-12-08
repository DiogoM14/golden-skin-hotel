import {
  Container,
  SimpleGrid,
  Box,
  Img,
  Center,
  GridItem,
} from "@chakra-ui/react";

import { NextPage } from "next";
import { Header } from "../../components/Header";
import { AuthWelcome } from "../../components/AuthPage/AuthWelcome";
import { TabsForm } from "../../components/AuthPage/TabsForm";
import { useRouter } from "next/router";

const Login: NextPage = () => {
  let router = useRouter();
  let { authOpt } = router.query;
  let gridHeight = `calc(100vh - 80px)`;

  return (
    <>
      <Header />
      <Container maxW='full' bgColor='#F4F4F5' p={0}>
        <SimpleGrid columns={7} h={gridHeight}>
          <GridItem colSpan={3} paddingX='32'>
            <Center w='full' h='100%'>
              <Box>
                <AuthWelcome />
                <TabsForm authOption={authOpt} />
              </Box>
            </Center>
          </GridItem>
          <GridItem colSpan={4}>
            <Img
              objectFit='cover'
              boxSize='full'
              src='https://images.pexels.com/photos/6474588/pexels-photo-6474588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            />
          </GridItem>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Login;

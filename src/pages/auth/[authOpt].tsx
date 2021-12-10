import {
  Container,
  SimpleGrid,
  Box,
  Img,
  Center,
  GridItem,
} from "@chakra-ui/react";

import { createBreakpoints } from '@chakra-ui/theme-tools'

import { NextPage } from "next";
import { AuthWelcome } from "../../components/AuthPage/AuthWelcome";
import { TabsForm } from "../../components/AuthPage/TabsForm";
import { useRouter } from "next/router";

const Login: NextPage = () => {
  let router = useRouter();
  let { authOpt } = router.query;
  let gridHeight = `calc(100vh - 80px)`;

  return (
    <>
      <Container maxW='full' bgColor='#F4F4F5' p={0}>
        <SimpleGrid columns={[1, 1, 1, 5, 7]} h={gridHeight}>
          <GridItem 
            colSpan={[1, 1, 1, 3, 3]} 
            paddingX={['8', '8', '32', '32', '32']} 
            overflowY={["visible", "scroll"]} 
            py="12" 
            h="100%"
            overflowX="hidden"
          >
            <Box>
              <AuthWelcome />
              <TabsForm authOption={authOpt} />
            </Box>
          </GridItem>
          <GridItem colSpan={[0, 0, 0, 2, 4]} display={["none", "none", "none", "flex", "flex"]}>
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

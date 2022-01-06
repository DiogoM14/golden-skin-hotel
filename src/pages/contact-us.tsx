import {
  AspectRatio,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { NextPage } from "next";

const Contacts: NextPage = () => {
  return (
    <>
      <Container maxW='container.xl' pb={{ base: "4" }}>
        <Flex
          align='center'
          direction={{ base: "column", lg: "row" }}
          w='full'
          my={{ base: "16", lg: "32" }}
          px='4'>
          <Box flex='1/2' px='4'>
            <Flex alignItems='center' mb='4'>
              <Box mr='2'>
                <Text
                  color='#717171'
                  fontWeight='medium'
                  mr='2'
                  fontSize='lg'
                  w='max'>
                  Contactos
                </Text>
              </Box>
              <Divider
                borderColor='#F2BB05'
                w='full'
                border='1px'
                borderRadius='2px'
              />
            </Flex>
            <Heading>Venha visitar-nos.</Heading>
            <Flex mb='8' wrap={"wrap"}>
              <Heading mr='2'>Para uma estadia</Heading>
              <Heading
                bgGradient='linear-gradient(45deg, rgba(247,222,37,1) 25%, rgba(242,187,5,1) 75%)'
                bgClip='text'>
                DOURADA
              </Heading>
            </Flex>
            <Stack color='#717171' mb='8'>
              <Text>Largo do Pelourinho N° 11 Loja 19</Text>
              <Text>Lousada</Text>
              <Text>Lousada 4620-661</Text>
              <Text>Portugal</Text>
            </Stack>
            <Stack color='#717171'>
              <Text>Tel: +351 912 420 666</Text>
              <Text>Fax: +351 </Text>
              <Text>Email: goldenskinhotel@gmail.com</Text>
            </Stack>
            <Button
              as='a'
              bg='#F2BB05'
              color='#fff'
              fontSize='lg'
              fontWeight='medium'
              px='8'
              py='4'
              borderRadius='8'
              mt='8'
              mb='16'
              _hover={{ bg: "#E9A916" }}
              href='mailto:goldenskinhotel@gmail.com'>
              Enviar Email
            </Button>
          </Box>
          <Spacer />
          <Box>
            <AspectRatio
              ratio={16 / 9}
              width={{ base: "xs", sm: "sm", md: "md", lg: "lg" }}
              height={{ base: "xs", sm: "sm", md: "md", lg: "lg" }}
              borderRadius={8}
              boxShadow='lg'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.461575041032!2d-8.282981984213182!3d41.277057810789714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd24931170f4eded%3A0xcfe06eb86ea02f8d!2sPelourinho%20de%20Lousada!5e0!3m2!1sen!2spt!4v1641326132205!5m2!1sen!2spt'
                allowFullScreen
                loading='lazy'></iframe>
            </AspectRatio>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Contacts;

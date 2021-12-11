import {
  Box,
  Button,
  Center,
  GridItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

export const Footer = () => {
  return (
    <>
      <Box
        w='full'
        h='xs'
        mt='2.3rem'
        bgColor='#1C1C1C'
        color='white'
        position='relative'>
        <SimpleGrid
          columns={5}
          paddingX='56'
          paddingTop='16'
          textAlign='center'>
          <GridItem>
            <Text fontSize='lg' fontWeight='bold'>
              Golden Skin Hotel
            </Text>
            <Text fontSize='md' mt='6' fontWeight='regular'>
              Rua do pelourinho 120 Portugal, Lousada
            </Text>
            <Button
              mt='6'
              bgColor='#F2BB05'
              color='#fff'
              _hover={{ bg: "#e0ae09" }}>
              Reserve já
            </Button>
          </GridItem>
          <GridItem>
            <Text fontSize='lg' fontWeight='bold'>
              Links rápidos
            </Text>
          </GridItem>
          <GridItem>
            <Text fontSize='lg' fontWeight='bold'>
              Os nossos serviços
            </Text>
          </GridItem>
          <GridItem>
            <Text fontSize='lg' fontWeight='bold'>
              Galeria
            </Text>
          </GridItem>
          <GridItem>
            <Text fontSize='lg' fontWeight='bold'>
              Contacte-nos
            </Text>
          </GridItem>
        </SimpleGrid>
        <Center position='absolute' w='full' bottom='6'>
          <Text fontFa>Copyright 2021 - Golden Skin Hotel</Text>
        </Center>
      </Box>
    </>
  );
};

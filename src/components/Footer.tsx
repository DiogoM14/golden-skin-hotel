import { Box, Button, Grid, GridItem, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <>
      <Box
        as='footer'
        w='full'
        py='16'
        px={{ base: 16, lg: 30, xl: 48 }}
        bgColor='#1C1C1C'
        color='white'
        position='relative'>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            lg: "repeat(5, 1fr)",
          }}
          templateRows={{ base: "repeat(2, 1fr)", sm: "repeat(1, 1fr)" }}
          gap={{ base: 4 }}>
          <GridItem colSpan={1} textAlign={{ base: "center" }}>
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
          <GridItem colSpan={{ base: 1, lg: 4 }}>
            <Grid
              textAlign={{ base: "center", sm: "end", lg: "center" }}
              templateColumns={{
                base: "repeat(1, 1fr)",
                lg: "repeat(4, 1fr)",
              }}
              templateRows={{ base: "repeat(4, 1fr)", lg: "repeat(1, 1fr)" }}
              gap={{ base: 4 }}>
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
            </Grid>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

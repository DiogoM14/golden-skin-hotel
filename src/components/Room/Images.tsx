import { Grid, GridItem, Image } from "@chakra-ui/react";

export const Images = ({ images }: any) => {
  return (
    <Grid
      h='446px'
      templateRows='repeat(2, 1fr)'
      templateColumns='repeat(4, 1fr)'
      gap={3}
      my='4'
      borderRadius='16px'>
      <GridItem rowSpan={2} colSpan={2}>
        <Image
          borderTopLeftRadius='lg'
          borderBottomLeftRadius='lg'
          w='100%'
          h='100%'
          src={images[0]}
          objectFit='cover'
        />
      </GridItem>

      <Image w='100%' h='100%' src={images[1]} objectFit='cover' />

      <Image
        borderTopRightRadius='lg'
        w='100%'
        h='100%'
        src={images[2]}
        objectFit='cover'
      />

      <Image w='100%' h='100%' src={images[3]} objectFit='cover' />

      <Image
        borderBottomRightRadius='lg'
        w='100%'
        h='100%'
        src={images[4]}
        objectFit='cover'
      />
    </Grid>
  );
};

export default Images;

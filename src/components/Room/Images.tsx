import type { NextPage } from "next";

import { Grid, GridItem, Image } from "@chakra-ui/react";

const Images: NextPage = () => {
  return (
    <Grid
      h="446px"
      templateRows='repeat(2, 1fr)'
      templateColumns='repeat(4, 1fr)'
      gap={3}
      my="4"
      borderRadius="16px"
    >
      <GridItem rowSpan={2} colSpan={2}>
        <Image 
          borderTopLeftRadius="lg" 
          borderBottomLeftRadius="lg" 
          w="100%"
          h="100%"
          src="https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
          objectFit="cover"
        />
      </GridItem>

      <GridItem>
        <Image 
          w="100%"
          h="100%"
          src="https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
          objectFit="cover"
        />
      </GridItem>

      <GridItem>
        <Image 
          borderTopRightRadius="lg" 
          w="100%"
          h="100%"
          src="https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
          objectFit="cover"
        />
      </GridItem>

      <GridItem>
      <Image 
          w="100%"
          h="100%"
          src="https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
          objectFit="cover"
        />
      </GridItem>

      <GridItem>
        <Image 
          borderBottomRightRadius="lg" 
          w="100%"
          h="100%"
          src="https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
          objectFit="cover"
        />
      </GridItem>
    </Grid>
  );
};

export default Images;

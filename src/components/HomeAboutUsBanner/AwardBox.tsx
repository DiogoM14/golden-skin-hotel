import { Box, Heading, Text } from "@chakra-ui/react";

export const AwardBox = () => {
  return (
    <>
      <Box
        top={{ base: "-50px", md: "50px" }}
        left={{ base: "15px", sm: "35px", md: "0" }}
        py='4'
        px='6'
        w='2xs'
        h='122px'
        position='absolute'
        bgColor='white'
        borderRadius='lg'
        boxShadow='xl'>
        <Heading as='h6' fontSize='lg' fontWeight='bold' mb='2'>
          Golden Skin Hotel
        </Heading>
        <Text fontSize='md' fontWeight='medium' mb='4'>
          Best Hotel Award 2021
        </Text>
        <Text fontSize='md' fontWeight='medium'>
          Avaliação ⭐️ 4.8
        </Text>
      </Box>
    </>
  );
};

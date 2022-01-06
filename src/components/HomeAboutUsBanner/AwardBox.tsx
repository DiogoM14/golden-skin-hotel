import { Box, Heading, Text } from "@chakra-ui/react";

export const AwardBox = ({ top, bottom, left, right }: any) => {
  return (
    <>
      <Box
        top={top}
        left={left}
        bottom={bottom}
        right={right}
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

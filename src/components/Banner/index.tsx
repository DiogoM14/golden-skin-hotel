import {
  Box,
  Text,
  Image,
  Heading,
  Center,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HomeRoomFilter } from "../HomeRoomFilter";

export const Banner = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Box w='100%' mt='2rem'>
      <Box pos='relative' h='full'>
        <Image
          src='banner.png'
          h={{ base: "400px", md: "500px" }}
          w='100%'
          objectFit='cover'
          borderRadius='xl'
        />

        <Center
          pos='absolute'
          top={{ base: "10%", md: 0 }}
          mx={{ base: "3rem", md: "5.25rem" }}
          h='full'>
          <Box>
            <Heading
              color='#fff'
              fontSize={{ base: "xl", md: "5xl" }}
              bgGradient='linear-gradient(45deg, rgba(247,222,37,1) 25%, rgba(242,187,5,1) 75%)'
              bgClip='text'>
              Golden Skin Hotel
            </Heading>
            <Heading color='#fff' fontSize={{ base: "4xl", md: "5xl" }} mb='4'>
              Desfrute da sua estadia.
            </Heading>

            <Text maxW={{ base: "full", md: "xs" }} color='#D4D4D4'>
              Com um ambiente acolhedor e confortável, o Golden Skin Hotel
              oferece uma experiência de férias única.
            </Text>
          </Box>
        </Center>
      </Box>

      {isWideVersion ? (
        <>
          <Center mt='-60px'>
            <HomeRoomFilter />
          </Center>
        </>
      ) : (
        <></>
      )}
    </Box>
  );
};

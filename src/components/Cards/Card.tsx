import {
  Image,
  Box,
  Heading,
  Text,
  Button,
  SimpleGrid,
  Icon,
  Center,
  HStack,
  Divider,
  IconButton,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
import { RoomProps } from "../../utils/TRoom";
import NextLink from "next/link";

type Room = {
  room: RoomProps;
};

export function Card({ room }: Room) {
  return (
    <Box borderRadius='lg' overflow='hidden' position='relative' boxShadow='md'>
      {/* <SimpleGrid columns={2} spacing='2'>
        <Center bg='white' borderRadius='lg' boxSize='30px'>
          <Icon as={FiTv} boxSize='1.25rem' color='green' />
        </Center>

        <Center bg='white' borderRadius='lg' boxSize='30px'>
          <Icon as={FiWifi} boxSize='1.25rem' color='blue' />
        </Center>
      </SimpleGrid> */}

      <IconButton
        aria-label='Bookmark room'
        position='absolute'
        top='3'
        right='3'
        zIndex='1'
        size='sm'
        icon={<AiOutlineHeart />}
      />

      <Image 
        maxH='200px' 
        h="100%"
        width='100%' 
        src={room.images[0]} 
        objectFit='cover'
      />

      <Box p='4' bgColor='white'>
        <Flex mb='4' alignItems='center'>
          <Heading as='h6' fontSize='xl' fontWeight='md'>
            Quarto {room.type}
          </Heading>
          <Spacer />
          <Text color='gray.500' fontSize='sm'>
            42m&sup2;
          </Text>
        </Flex>
        <Flex alignItems='center'>
          <Flex>
            <Text fontSize='sm' fontWeight='bold' color='gray.900'>
              {room.price_night}€
            </Text>
            <Text fontSize='sm' color='gray.500'>
              / noite
            </Text>
          </Flex>
          <Spacer />
          <NextLink href={`/room/${room._id}`}>
            <Button
              fontFamily='Poppins'
              fontWeight='Medium'
              bgColor='white'
              border='2px'
              borderColor='#F2BB05'
              size='sm'
              _hover={{ bgColor: "#EDF2F7" }}>
              Ver Mais
            </Button>
          </NextLink>
        </Flex>
      </Box>
    </Box>
  );
}

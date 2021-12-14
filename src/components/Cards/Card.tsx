import {
  Image,
  Box,
  Heading,
  Text,
  Button,
  SimpleGrid,
  Icon,
  Center,
} from "@chakra-ui/react";
import { FiTv, FiWifi } from "react-icons/fi";
import { RoomProps } from "../../utils/TRoom";
import NextLink from "next/link";

type Room = {
  room: RoomProps;
};

export function Card({ room }: Room) {
  let placeholderImg =
    "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

  return (
    <Box borderRadius='lg' overflow='hidden' position='relative'>
      <SimpleGrid
        columns={2}
        spacing='2'
        position='absolute'
        top='3'
        right='3'
        zIndex='1'>
        <Center bg='white' borderRadius='lg' boxSize='30px'>
          <Icon as={FiTv} boxSize='1.25rem' color='green' />
        </Center>

        <Center bg='white' borderRadius='lg' boxSize='30px'>
          <Icon as={FiWifi} boxSize='1.25rem' color='blue' />
        </Center>
      </SimpleGrid>

      <Image maxH='200px' width='100%' src={placeholderImg} />

      <Box p='6' bgColor='white'>
        <Heading as='h6' size='md' fontWeight='Medium' mb='2'>
          Single room
        </Heading>

        <Text color='gray.500' fontSize='sm' mb='6'>
          Lorem ipsum dolor sit amet, consect adipiscing elit.
        </Text>

        <Box display='flex' mb='6'>
          <Text fontSize='sm' mr='1' color='gray.500'>
            Desde
          </Text>

          <Text fontSize='sm' fontWeight='bold' color='gray.900'>
            {room.price_night}€ / noite
          </Text>
        </Box>

        <NextLink href={`/room/${room._id}`}>
          <Button
            fontFamily='Poppins'
            fontWeight='Medium'
            fontSize='sm'
            bgColor='white'
            border='2px'
            borderColor='#F2BB05'
            width='125px'
            height='30px'
            _hover={{ bg: "transparent" }}>
            Ver Mais
          </Button>
        </NextLink>
      </Box>
    </Box>
  );
}
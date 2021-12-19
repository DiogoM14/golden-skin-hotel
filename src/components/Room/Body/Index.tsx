import { SimpleGrid, Flex, Box, Divider } from "@chakra-ui/react";
import { Amenities } from "./Amenities";
import { Description } from "./Description";
import { Header } from "./Header";
import { RoomProps } from "../../../utils/TRoom";

interface Room {
  room: RoomProps;
}

export const Body = ({ room }: Room) => {
  return (
    <SimpleGrid columns={2} my='4' gap='12'>
      <Flex flexDir='column'>
        <Header />

        <Divider my='4' borderColor='#bbbbbb' />

        <Amenities amenities={room.amenities} />

        <Divider my='4' borderColor='#bbbbbb' />

        <Description />

        <Divider my='4' borderColor='#bbbbbb' />
      </Flex>

      <Box bgColor='#fff' borderRadius='lg' maxH='400px' shadow='md'></Box>
    </SimpleGrid>
  );
};

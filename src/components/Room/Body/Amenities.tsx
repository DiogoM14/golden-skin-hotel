import { Heading, HStack, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import { FiWifi, FiTv } from "react-icons/fi";
import {
  MdAir,
  MdFireExtinguisher,
  MdOutlineCrib,
  MdOutlineIron,
} from "react-icons/md";
import { Amenities as AmenitiesProps } from "../../../utils/TRoom";

interface Amenities {
  amenities: AmenitiesProps;
}

export const Amenities = ({ amenities }: Amenities) => {
  return (
    <>
      <Heading fontWeight='medium' fontSize='xl' mb='2'>
        Comodidades
      </Heading>

      <SimpleGrid columns={{ base: 1, sm: 2 }}>
        <HStack>
          <Icon as={FiWifi} boxSize='1.25rem' />
          <Text as={!amenities.wifi ? "s" : "text"}>Wi-fi</Text>
        </HStack>

        <HStack>
          <Icon as={FiTv} boxSize='1.25rem' />
          <Text as={!amenities.tv ? "s" : "text"}>TV</Text>
        </HStack>

        <HStack>
          <Icon as={MdOutlineCrib} boxSize='1.25rem' />
          <Text as={!amenities.crib ? "s" : "text"}>Berço</Text>
        </HStack>

        <HStack>
          <Icon as={MdAir} boxSize='1.25rem' />
          <Text as={!amenities.airConditioning ? "s" : "text"}>
            Ar condicionado
          </Text>
        </HStack>

        <HStack>
          <Icon as={MdOutlineIron} boxSize='1.25rem' />
          <Text as={!amenities.iron ? "s" : "text"}>Ferro de engomar</Text>
        </HStack>

        <HStack>
          <Icon as={MdFireExtinguisher} boxSize='1.25rem' />
          <Text as={!amenities.smokeAlarm ? "s" : "text"}>Alarme de fumo</Text>
        </HStack>
      </SimpleGrid>
    </>
  );
};

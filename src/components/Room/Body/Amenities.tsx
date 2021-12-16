import { HStack, Icon, SimpleGrid, Text } from "@chakra-ui/react";
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
    <SimpleGrid columns={2}>
      {amenities.wifi && (
        <>
          <HStack>
            <Icon as={FiWifi} boxSize='1.25rem' />
            <Text>Wi-fi</Text>
          </HStack>
        </>
      )}
      {amenities.tv && (
        <>
          <HStack>
            <Icon as={FiTv} boxSize='1.25rem' />
            <Text>TV</Text>
          </HStack>
        </>
      )}
      {amenities.crib && (
        <>
          <HStack>
            <Icon as={MdOutlineCrib} boxSize='1.25rem' />
            <Text>Berço</Text>
          </HStack>
        </>
      )}
      {amenities.airConditioning && (
        <>
          <HStack>
            <Icon as={MdAir} boxSize='1.25rem' />
            <Text>Ar condicionado</Text>
          </HStack>
        </>
      )}
      {amenities.iron && (
        <>
          <HStack>
            <Icon as={MdOutlineIron} boxSize='1.25rem' />
            <Text>Ferro de engomar</Text>
          </HStack>
        </>
      )}
      {amenities.smokeAlarm && (
        <>
          <HStack>
            <Icon as={MdFireExtinguisher} boxSize='1.25rem' />
            <Text>Alarme de fumo</Text>
          </HStack>
        </>
      )}
    </SimpleGrid>
  );
};

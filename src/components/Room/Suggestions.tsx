import { Box, Heading, HStack, Flex } from "@chakra-ui/react";
import { Card } from "../Cards/Card";

export const Suggestions = () => {
  return (
    <Flex mb='2.3rem' flexDir='column'>
      <Heading mb='4' fontWeight='medium' fontSize='2xl'>
        Sugestões
      </Heading>

      <HStack spacing='4'>
        {/* <Card />
        <Card />
        <Card /> */}
      </HStack>
    </Flex>
  );
};

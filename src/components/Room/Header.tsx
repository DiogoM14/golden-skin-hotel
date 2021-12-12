import type { NextPage } from "next";

import { Center, Flex, Heading, HStack, Text } from "@chakra-ui/react";

import { AiOutlineShareAlt, AiOutlineHeart } from 'react-icons/ai'

const Header: NextPage = () => {
  return (
    <HStack justify="space-between" mt="2.3rem">
      <HStack>
        <Heading fontWeight="medium" fontSize="2xl">Suite Executiva</Heading>
        <Text color="#383838" pl="2">52€ /noite</Text>
      </HStack>
      <HStack spacing="4">
        <Flex>
          <Center>
            <AiOutlineHeart />
            <Text ml="2">Guardar</Text>
          </Center>
        </Flex>
        <Flex>
          <Center>
            <AiOutlineShareAlt />
            <Text ml="2">Partilhar</Text>
          </Center>
        </Flex>
      </HStack>
    </HStack>
  );
};

export default Header;

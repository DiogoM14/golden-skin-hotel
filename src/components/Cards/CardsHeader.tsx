import { HStack, Flex, Text, Heading, Divider, Box } from "@chakra-ui/react";

export const CardsHeader = () => {
  return (
    <HStack mb='6' w='100%'>
      <Flex flexDir='column' w='100%'>
        <Flex w='100%' alignItems='center' mb='4'>
          <Box mr='2'>
            <Text
              color='#717171'
              fontWeight='medium'
              mr='2'
              fontSize='lg'
              w='max'>
              Os nossos quartos
            </Text>
          </Box>
          <Divider
            borderColor='#F2BB05'
            w='full'
            border='1px'
            borderRadius='2px'
          />
        </Flex>

        <HStack>
          <Heading
            fontFamily='ubuntu'
            color='#1c1c1c'
            fontSize='2xl'
            fontWeight='bold'
            lineHeight='1.3'>
            Encontre a sua melhor acomodação aqui.
          </Heading>
        </HStack>
      </Flex>
    </HStack>
  );
};

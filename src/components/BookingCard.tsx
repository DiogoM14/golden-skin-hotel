import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { format } from "date-fns";
import pt from "date-fns/locale/pt";
import NextLink from "next/link";

export const BookingCard = ({ booking }: any) => {
  return (
    <>
      <Flex
        direction={{ base: "column", lg: "row" }}
        borderRadius='lg'
        boxShadow='md'
        borderWidth='1px'
        p='4'
        mb='8'>
        <Flex flex='1' direction='column' mr='4'>
          <Heading fontWeight='bold' fontSize='lg'>
            Detalhes da reserva
          </Heading>
          <Divider my='4' borderColor='#bbbbbb' />
          <SimpleGrid columns={{ base: 1, sm: 1, md: 3 }} height='100%'>
            <Flex direction='column' justify='space-evenly'>
              <HStack>
                <Text fontSize='md' fontWeight='medium'>
                  Nº de hóspedes:
                </Text>
                <Text>{booking.no_guests}</Text>
              </HStack>

              <HStack>
                <Text fontSize='md' fontWeight='medium'>
                  Preço total:
                </Text>
                <Text>{booking.final_price}€</Text>
              </HStack>
              <HStack>
                <Text fontSize='md' fontWeight='medium'>
                  Datas:
                </Text>
                <Text>
                  {format(new Date(booking.dates.from), "dd MMM yyyy", {
                    locale: pt,
                  }) +
                    " - " +
                    format(new Date(booking.dates.to), "dd MMM yyyy", {
                      locale: pt,
                    })}
                </Text>
              </HStack>
              <HStack>
                <Text fontSize='md' fontWeight='medium'>
                  Nº de noites:
                </Text>
                <Text>{booking.no_nights}</Text>
              </HStack>
            </Flex>

            <Flex>
              <Text fontSize='md' fontWeight='medium' mr='2'>
                Extras:
              </Text>
              {booking.extras.length >= 1 ? (
                <List>
                  {booking.extras.map((extra: any) => (
                    <ListItem key={extra}>{extra}</ListItem>
                  ))}
                </List>
              ) : (
                <>
                  <Text>Sem Extras</Text>
                </>
              )}
            </Flex>
            <Box overflow='hidden'>
              <Text fontSize='md' fontWeight='medium'>
                Observações:
              </Text>
              <Text noOfLines={4}>
                {booking.observations ? booking.observations : "Nenhuma"}
              </Text>
            </Box>
          </SimpleGrid>
        </Flex>
        <Box
          flex='1/2'
          overflow='hidden'
          position='relative'
          mt={{ base: 4, lg: 0 }}>
          <Image
            borderRadius='lg'
            maxH={{ sm: "150px", lg: "200px" }}
            width={{ base: "100%", lg: "300px" }}
            src={booking.room.images[0]}
            objectFit='cover'
          />
          <NextLink href={`/room/${booking.room._id}`}>
            <Button
              color='#fff'
              bgColor='#F2BB05'
              _hover={{ bg: "#e0ae09" }}
              position='absolute'
              size='sm'
              bottom='0'
              right='0'
              mr='4'
              mb='4'>
              Ver quarto
            </Button>
          </NextLink>
        </Box>
      </Flex>
    </>
  );
};

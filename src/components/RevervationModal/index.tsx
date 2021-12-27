import { Box, Button, Container, Divider, Flex, FormLabel, GridItem, Heading, HStack, Image, Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select, SimpleGrid, Stat, StatHelpText, StatLabel, StatNumber, Text, Textarea, VStack } from "@chakra-ui/react"
import { parseCookies } from "nookies"
import { useState } from "react"
import { differenceInDays, format } from 'date-fns'

import { api } from "../../services/apiClient"

export const ReservationModal = ({ onClose, isOpen, startDate, endDate, room }: any) => {
  const [guestsNumber, setGuestsNumber] = useState(1)
  const [extras, setExtras] = useState([''])
  const [observations, setObservations] = useState('')
  
  let numberOfNights = differenceInDays(new Date(endDate), new Date(startDate))
  let price = room.price_night * numberOfNights
  let finalPrice = price

  if (extras.length > 0) {
    finalPrice = price + (extras.length * 15)
  }

  function handleSubmitBooking() {
    let numberOfNights = differenceInDays(new Date(endDate), new Date(startDate))
    const { "nextauth.token": token } = parseCookies();

    api.put(`/me/bookings`, {
      room: room._id,
      no_guests: guestsNumber,
      extras: extras,
      observations: observations,
      dates: {
        from: startDate,
        to: endDate,
      },
      no_nights: numberOfNights,
      final_price: finalPrice
    }, {
      headers: {
        "x-access-token": token
      }
    })
  }

  return (
      <Modal onClose={onClose} isOpen={isOpen} size="full">
          <ModalOverlay />
          <ModalContent bgColor="#fff">
          <Container maxW="container.lg" mx="auto">
            <ModalHeader>Configuração de reserva</ModalHeader>
            <Divider mb="4" />
            <ModalCloseButton />
            <ModalBody>
              <SimpleGrid columns={2} gap="12">
                <GridItem>
                  <VStack align="left" spacing={4}>
                    <HStack spacing={4}>
                      <Box w="100%">
                        <FormLabel htmlFor='email'>Número de hóspedes</FormLabel>
                        <NumberInput max={room.capacity} min={1} defaultValue={1} onChange={(e: any) => setGuestsNumber(e)}>
                          <NumberInputField id='amount'  />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper> 
                        </NumberInput>
                      </Box>

                      <Box w="100%">
                        <Menu closeOnSelect={false}>
                        <FormLabel htmlFor='email'>Extras</FormLabel>
                          <MenuButton as={Button} w="100%" bgColor="#fff" fontWeight="medium" outline="1px solid #ecf3ff">
                            Selecione extras
                          </MenuButton>
                          <MenuList minWidth='240px'>
                            <MenuOptionGroup type='checkbox' onChange={(e: any) => setExtras(e)}>
                              <MenuItemOption value='roomService'>Serviço de quarto</MenuItemOption>
                              <MenuItemOption value='jacuzzi'>Acesso ao jacuzzi</MenuItemOption>
                              <MenuItemOption value='gym'>Acesso ao ginásio</MenuItemOption>
                              <MenuItemOption value='openBar'>Bar aberto</MenuItemOption>
                              <MenuItemOption value='meals'>Refeições incluídas</MenuItemOption>
                            </MenuOptionGroup>
                          </MenuList>
                        </Menu>
                      </Box>

                    </HStack>

                    <Box>
                      <FormLabel htmlFor='email'>Observações</FormLabel>
                      <Textarea
                        id='email'
                        type='email'
                        mb="4"
                        placeholder="Observações..."
                        onChange={(e: any) => setObservations(e.target.value)}
                      />
                    </Box>

                    <Divider />
                  </VStack>

                  <Heading fontSize="xl" mt="4" fontWeight="medium">Métodos de pagamento</Heading>
                </GridItem>

                <GridItem marginX="auto" w="90%">
                  <Box border="1px" px={6} py={3} borderColor="#d4d4d4" borderRadius="lg">
                    <Flex flexDir="column">
                      <Heading fontWeight="medium" fontSize="lg" mt={2}>Suite Executiva</Heading>
                      <Divider my="2" />
                      <Image my="2" src={room.images[0]} w="100%" h="200px" objectFit="cover" borderRadius="lg" />
                    </Flex>

                    <Divider my={2} />

                    <Heading fontWeight="medium" fontSize="lg" mb="4">Detalhes do preço</Heading>
                      <Flex justify="space-between">
                        <Box>
                          <Text>Extras x {extras.length}</Text>
                          <Text>{room.price_night},00€ x {numberOfNights} noites</Text>
                        </Box>
                        <Box>
                          <Text>{extras.length * 15},00€</Text>
                          <Text>{price},00€</Text>
                        </Box>

                      </Flex>

                      <Divider my="4" />

                      <HStack>
                        <Stat>
                          <StatLabel>Preço total</StatLabel>
                          <StatNumber>{finalPrice}€</StatNumber>
                          <StatHelpText>{format(new Date(startDate), "MMM-dd")} - {format(new Date(endDate), "MMM-dd")}</StatHelpText>
                        </Stat>

                        <Button
                          fontFamily='Poppins'
                          fontWeight='Medium'
                          bgColor='white'
                          border='2px'
                          borderColor='#F2BB05'
                          size='sm'
                          _hover={{ bgColor: "#EDF2F7" }}
                          onClick={handleSubmitBooking}  
                        >
                          Concluir reserva
                        </Button>
                      </HStack>
                  </Box>
                </GridItem>
              </SimpleGrid>
            </ModalBody>
        </Container>
          </ModalContent>
      </Modal>
  )
}
import {  useState } from "react"
import { Button, Drawer, DrawerBody, DrawerCloseButton, RadioGroup, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, Radio, Stack, useDisclosure, Text, Heading, Divider, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, HStack, Tag, TagLeftIcon, TagLabel, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, VStack } from "@chakra-ui/react"
import { FiFilter } from "react-icons/fi"

import { RadioButtons } from "./RadioButtons"
import { RangeSliderComponent } from "./RangeSlider"
import { StepperButtons } from "./StepperButtons"


export const FilterRoomsBtn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [orderByName, setOrderByName] = useState('1')
  const [orderByPrice, setOrderByPrice] = useState('1')

  return (
    <>
      <Button 
        bgColor='#EFEFEF'  
        color="#1c1c1c"               
        fontWeight='regular'
        rightIcon={<FiFilter />}
        onClick={onOpen}
      >
        Filtrar por
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Filtrar por</DrawerHeader>

          <DrawerBody>
            <RadioGroup onChange={setOrderByName} value={orderByName}>
              <RadioButtons title="Nome" radioName={["Ascendente", "Descendente"]} />
            </RadioGroup>

            <Divider my="4" />

            <RadioGroup onChange={setOrderByPrice} value={orderByPrice}>
              <Stack>
                <RadioButtons title="Preço" radioName={["Ascendente", "Descendente"]} />
              </Stack>
            </RadioGroup>

            <Divider my="4" />

            <HStack spacing={8}>
              <StepperButtons title="Pessoas" defaultValue={2} min={1} />
              <StepperButtons title="Camas" defaultValue={1} min={1} />
            </HStack>

            <Divider my="4" />

            <RangeSliderComponent />

            <Divider my="4" />

            <Heading fontSize="md" mb="4">Tags</Heading>
            <HStack spacing={4}>
              {/* Vai levar map */}
              <Tag variant='subtle' colorScheme='cyan'>
                <TagLabel>Cyan</TagLabel>
              </Tag>
              <Tag variant='subtle' colorScheme='cyan'>
                <TagLabel>Cyan</TagLabel>
              </Tag>
              <Tag variant='subtle' colorScheme='cyan'>
                <TagLabel>Cyan</TagLabel>
              </Tag>
              <Tag variant='subtle' colorScheme='cyan'>
                <TagLabel>Cyan</TagLabel>
              </Tag>
            </HStack>

            <Divider my="4" />

            <RadioGroup>
              <Stack>
                {/* Vai levar map */}
                <Heading fontSize="md">Extras</Heading>
                <Radio>Extra</Radio>
                <Radio value='1'>Extra</Radio>
                <Radio value='2'>Extra</Radio>
                <Radio value='3'>Extra</Radio>
                <Radio value='4'>Extra</Radio>
                <Radio value='5'>Extra</Radio>
              </Stack>
            </RadioGroup>
          </DrawerBody>

          <DrawerFooter>
            <Button bgColor='#e0ae09' color="#fff" onClick={onClose}>Concluir</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
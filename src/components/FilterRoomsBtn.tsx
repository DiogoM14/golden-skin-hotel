import { Button, Drawer, DrawerBody, DrawerCloseButton, RadioGroup, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, Radio, Stack, useDisclosure, Text, Heading, Divider, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, HStack, Tag, TagLeftIcon, TagLabel, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, VStack } from "@chakra-ui/react"
import { useRef, useState } from "react"
import { FiFilter, FiMoreHorizontal } from "react-icons/fi"


export const FilterRoomsBtn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [value, setValue] = useState('1')
  const [sliderValue, setSliderValue] = useState([0, 500])

  function handleChangeSliderValue(e: any) {
    setSliderValue(e)
  }

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
            <RadioGroup onChange={setValue} value={value}>
              <Stack>
                <Heading fontSize="md">Nome</Heading>
                <Radio value='1'>Ascendente</Radio>
                <Radio value='2'>Descendente</Radio>
              </Stack>
            </RadioGroup>

            <Divider my="4" />

            <RadioGroup onChange={setValue} value={value}>
              <Stack>
                <Heading fontSize="md">Preço</Heading>
                <Radio value='1'>Ascendente</Radio>
                <Radio value='2'>Descendente</Radio>
              </Stack>
            </RadioGroup>

            <Divider my="4" />

            <HStack spacing={8}>
              <VStack>
                <Heading fontSize="md">Pessoas</Heading>
                <NumberInput size='sm' maxW={20} defaultValue={2} min={1}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </VStack>

              <VStack>
                <Heading fontSize="md">Camas</Heading>
                <NumberInput size='sm' maxW={20} defaultValue={1} min={1}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </VStack>
            </HStack>

            <Divider my="4" />

            <Heading fontSize="md" mb="4">Preço</Heading>
            <HStack spacing={4}>
              <Text>{sliderValue[0]}€</Text>
              <RangeSlider
                aria-label={['min', 'max']}
                min={0} max={500} step={10}
                colorScheme="yellow"
                defaultValue={sliderValue}
                onChange={(e) => handleChangeSliderValue(e)}
              >
                <RangeSliderTrack>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
              </RangeSlider>
              <Text>{sliderValue[1]}€</Text>
            </HStack>

            <Divider my="4" />

            <Heading fontSize="md" mb="4">Tags</Heading>
            <HStack spacing={4}>
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
import { Button, Drawer, DrawerBody, DrawerCloseButton, RadioGroup, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, Radio, Stack, useDisclosure, Text, Heading, Divider, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, HStack, Tag, TagLeftIcon, TagLabel } from "@chakra-ui/react"
import { useRef, useState } from "react"
import { FiFilter, FiMoreHorizontal } from "react-icons/fi"


export const FilterRoomsBtn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [value, setValue] = useState('1')

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
                <Heading fontSize="md">Teste</Heading>
                <Radio value='1'>First</Radio>
                <Radio value='2'>Second</Radio>
                <Radio value='3'>Third</Radio>
              </Stack>
            </RadioGroup>

            <Divider my="4" />

            <RadioGroup onChange={setValue} value={value}>
              <Stack>
                <Heading fontSize="md">Teste</Heading>
                <Radio value='1'>First</Radio>
                <Radio value='2'>Second</Radio>
                <Radio value='3'>Third</Radio>
              </Stack>
            </RadioGroup>

            <Divider my="4" />

            <Heading fontSize="md">Teste</Heading>
            <RangeSlider
              aria-label={['min', 'max']}
              colorScheme="yellow"
              defaultValue={[0, 500]}
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>

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
          </DrawerBody>

          <DrawerFooter>
            <Button bgColor='#e0ae09' color="#fff">Concluir</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}